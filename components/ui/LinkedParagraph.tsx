import Link from "next/link";
import { Fragment } from "react";

const LINK_PATTERN = /\[([^\]]+)\]\((\/[^)]+)\)/g;

/**
 * Paragraphe qui interprète la syntaxe markdown `[texte](/chemin)` en
 * vrais liens internes. Réservé au contenu de confiance (content/*),
 * jamais à une entrée utilisateur.
 */
export function LinkedParagraph({ text, className = "" }: { text: string; className?: string }) {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  LINK_PATTERN.lastIndex = 0;
  while ((match = LINK_PATTERN.exec(text))) {
    if (match.index > lastIndex) parts.push(<Fragment key={key++}>{text.slice(lastIndex, match.index)}</Fragment>);
    parts.push(
      <Link
        key={key++}
        href={match[2]}
        className="font-semibold text-leaf-700 underline underline-offset-4 hover:text-leaf-800"
      >
        {match[1]}
      </Link>,
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) parts.push(<Fragment key={key++}>{text.slice(lastIndex)}</Fragment>);

  return <p className={className}>{parts}</p>;
}
