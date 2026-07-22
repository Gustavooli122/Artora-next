import ArticlesPageClient from "./ArticlesPageClient";

export const metadata = {
  title: "Artigos - Artora | Desenho, Arte e Papelaria",
  description:
    "Tutoriais, dicas e recomendações sobre desenho, pintura, materiais artísticos, papelaria e estudos.",
     alternates: {
      canonical: `https://artora.company/articles`,
    },
};

export default function Page() {
  return <ArticlesPageClient />;
}