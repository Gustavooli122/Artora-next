import AboutPage from "./AboutPage";

export const metadata = {
  title: "Sobre Nós -Artora | Arte, Desenho e Papelaria",
  description:
    "Conheça nossa missão de ajudar artistas, estudantes e criativos a encontrarem os melhores materiais para desenvolver suas habilidades.",
};

export default function Page(){
  const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Artora",
  url: "https://artora.company",
  logo: "https://artora.company/favicon.ico",
};
 return <main> <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    /> <AboutPage/></main>
}
 
