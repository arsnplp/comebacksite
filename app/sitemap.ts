import type { MetadataRoute } from "next";
import { routes, site } from "@/lib/seo";
import { getAllPosts } from "@/lib/blog";

/**
 * Sitemap dynamique — les routes statiques viennent de lib/seo.ts,
 * les articles de blog sont lus depuis content/blog (MDX).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${site.url}${route.path === "/" ? "" : route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
