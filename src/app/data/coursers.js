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
    relatedArticles: [],
  },

  {
    id: slugify("Perspectiva para Iniciantes"),
    title: "Perspectiva para Iniciantes",
    description:
      "Domine perspectiva de um, dois e três pontos para criar desenhos mais profissionais.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    category: "Perspectiva",
    level: "Iniciante",
    platform: "Udemy",
    instructor: "Carlos Mendes",
    duration: "9 horas",
    students: 3821,
    certificate: true,
    rating: 4.8,
    price: 59.90,
    affiliate_link: "#",
    relatedArticles: [],
  },

  {
    id: slugify("Pintura Digital no Photoshop"),
    title: "Pintura Digital no Photoshop",
    description:
      "Aprenda pintura digital utilizando Photoshop com técnicas usadas por artistas profissionais.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800",
    category: "Arte Digital",
    level: "Intermediário",
    platform: "Domestika",
    instructor: "Marina Costa",
    duration: "15 horas",
    students: 8120,
    certificate: true,
    rating: 5.0,
    price: 89.90,
    affiliate_link: "#",
    relatedArticles: [],
  },

  {
    id: slugify("Anatomia para Desenhistas"),
    title: "Anatomia para Desenhistas",
    description:
      "Estude músculos, proporções e estrutura do corpo humano para desenhar personagens.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800",
    category: "Anatomia",
    level: "Intermediário",
    platform: "Hotmart",
    instructor: "Pedro Oliveira",
    duration: "22 horas",
    students: 10984,
    certificate: true,
    rating: 4.9,
    price: 129.90,
    affiliate_link: "#",
    relatedArticles: [],
  },

  {
    id: slugify("Curso de Aquarela"),
    title: "Curso de Aquarela",
    description:
      "Aprenda técnicas de aquarela, mistura de cores e efeitos de transparência.",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800",
    category: "Pintura",
    level: "Iniciante",
    platform: "Domestika",
    instructor: "Ana Martins",
    duration: "8 horas",
    students: 2901,
    certificate: true,
    rating: 4.7,
    price: 49.90,
    affiliate_link: "#",
    relatedArticles: [],
  },

  {
    id: slugify("Concept Art para Games"),
    title: "Concept Art para Games",
    description:
      "Crie personagens e cenários para jogos utilizando um fluxo profissional de concept art.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    category: "Arte Digital",
    level: "Avançado",
    platform: "Udemy",
    instructor: "Lucas Ferreira",
    duration: "28 horas",
    students: 7310,
    certificate: true,
    rating: 4.9,
    price: 149.90,
    affiliate_link: "#",
    relatedArticles: [],
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