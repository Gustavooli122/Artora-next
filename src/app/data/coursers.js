import { slugify } from "../lib/utils";
export const initialCourses = [
  {
    id: slugify("Desenhando sem Dom"),
    title: "Desenhando sem Dom",
    description:
     `# Desenhando sem Dom

O **Desenhando sem Dom** é um curso online voltado principalmente para iniciantes que desejam aprender desenho por meio de aulas em vídeo e exercícios práticos.

O curso aborda fundamentos importantes do desenho, incluindo observação, proporção, perspectiva, formas, luz e sombra, oferecendo uma trilha de aprendizado organizada para quem está começando.

## Conteúdo

- Fundamentos do desenho
- Observação e percepção visual
- Proporção
- Perspectiva
- Luz e sombra
- Construção de formas
- Exercícios práticos

## Informações

- 📚 Mais de 255 aulas.
- ⏱️ Aproximadamente 281 horas de conteúdo.
- 📜 Certificado de conclusão.
- ♾️ Acesso vitalício (na modalidade correspondente).
- 🛡️ Garantia de 7 dias.

## Indicado para

- Iniciantes.
- Pessoas que desejam aprender desenho do zero.
- Quem busca desenvolver os fundamentos do desenho.`,
    image:
      "https://static-media.hotmart.com/zTtcYPbkEDXEBu35Xlovpla3SXY=/filters:background_color(white)/hotmart/product_pictures/4945ab83-bb52-4e4d-92a2-7e81b550fe3e/Image10.png",
    category: "Desenho",
    level: "Iniciante",
    platform: "Hotmart",
    instructor: "Art Rodrigues",
    duration: "281 horas",
    students: "Mais de 15.600",
    certificate: true,
    rating: 4.9,
    price:  "330,00",
    affiliate_link: "https://go.hotmart.com/Y106506585E",
    relatedArticles: [slugify('Como Fazer Sombreamento em Desenhos Guia Completo para Iniciantes')],
  },

];

export const getCourseById = (id) =>
  initialCourses.find((course) => course.id === id);

export const getAllCategories = () => [
  "Todos",
  ...new Set(initialCourses.map((course) => course.category)),
];

export const getCoursesByCategory = (category) => {
  if (!category || category === "Todos") return initialCourses;

  return initialCourses.filter(
    (course) => course.category === category
  );
};