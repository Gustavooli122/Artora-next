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
  const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Artigos sobre Desenho",
  "description": "Guias completos sobre desenho, pintura, materiais artísticos e técnicas para artistas iniciantes e profissionais.",
  "url": "https://artora.company/articles"
}
  return <main> <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    /><ArticlesPageClient /></main> ;
}