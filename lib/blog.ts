import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

/**
 * Lecture des articles MDX de content/blog/.
 * Chaque fichier : frontmatter (title, description, date, category,
 * readingMinutes, + faq/howTo optionnels) + corps markdown. Le slug est
 * le nom du fichier.
 */

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  /** Date ISO (YYYY-MM-DD) */
  date: string;
  category: string;
  readingMinutes: number;
};

export type PostFaqItem = { question: string; answer: string };
export type PostHowTo = { name: string; steps: { name: string; text: string }[] };

export type Post = {
  meta: PostMeta;
  content: string;
  /** FAQ optionnelle : rendue en accordéon + schema FAQPage */
  faq?: PostFaqItem[];
  /** Procédure optionnelle : schema HowTo (le contenu visible reste dans le markdown) */
  howTo?: PostHowTo;
};

function parseFile(fileName: string): Post {
  const slug = fileName.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(BLOG_DIR, fileName), "utf-8");
  const { data, content } = matter(raw);

  const faq: PostFaqItem[] | undefined = Array.isArray(data.faq)
    ? data.faq.map((f: { question: string; answer: string }) => ({
        question: String(f.question),
        answer: String(f.answer),
      }))
    : undefined;

  const howTo: PostHowTo | undefined = data.howTo
    ? {
        name: String(data.howTo.name),
        steps: (data.howTo.steps ?? []).map((s: { name: string; text: string }) => ({
          name: String(s.name),
          text: String(s.text),
        })),
      }
    : undefined;

  return {
    meta: {
      slug,
      title: String(data.title ?? slug),
      description: String(data.description ?? ""),
      date: String(data.date ?? ""),
      category: String(data.category ?? "Fidélisation"),
      readingMinutes: Number(data.readingMinutes ?? 5),
    },
    content,
    faq,
    howTo,
  };
}

/** Tous les articles, du plus récent au plus ancien. */
export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map((f) => parseFile(f).meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Un article complet par slug, ou null s'il n'existe pas. */
export function getPost(slug: string): Post | null {
  const safe = slug.replace(/[^a-z0-9-]/g, "");
  for (const ext of [".mdx", ".md"]) {
    const file = path.join(BLOG_DIR, `${safe}${ext}`);
    if (fs.existsSync(file)) return parseFile(`${safe}${ext}`);
  }
  return null;
}

/** "10 juin 2026" — date longue française. */
export function formatPostDate(iso: string): string {
  return new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric" }).format(
    new Date(iso),
  );
}
