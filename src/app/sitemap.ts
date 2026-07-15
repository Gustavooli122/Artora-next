import { MetadataRoute } from "next";
import { initialArticles } from "./data/articles";

const BASE_URL = "https://artora.company";

export default function sitemap(): MetadataRoute.Sitemap {
  const articlePages = initialArticles.map((article) => ({
    url: `${BASE_URL}/artigos/${article.id}`,
    lastModified: new Date(article.publicationDate),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${BASE_URL}/artigos`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },

    ...articlePages,
  ];
}