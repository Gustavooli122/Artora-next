import { MetadataRoute } from "next";
import { initialArticles } from "./data/articles";
import { initialProducts } from "./data/product";
import {initialCourses} from "./data/coursers"

const BASE_URL = "https://artora.company";

export default function sitemap(): MetadataRoute.Sitemap {
  // Artigos
  const articlePages = initialArticles.map((article) => ({
    url: `${BASE_URL}/artigos/${article.id}`,
    lastModified: new Date(article.publicationDate),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Produtos
  const productPages = initialProducts.map((product) => ({
    url: `${BASE_URL}/produtos/${product.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Cursos
  const coursePages = initialCourses.map((course) => ({
    url: `${BASE_URL}/course/${course.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    // Página inicial
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    // Artigos
    {
      url: `${BASE_URL}/articles`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },

    // Produtos
    {
      url: `${BASE_URL}/products`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },

    // Cursos
    {
      url: `${BASE_URL}/courses`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // Sobre
    {
      url: `${BASE_URL}/sobre`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },

    // Todas as páginas dinâmicas
    ...articlePages,
    ...productPages,
    ...coursePages,
  ];
}