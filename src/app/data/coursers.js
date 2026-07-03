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
  {
    id: slugify("Curso de Desenho Realista Completo – Para Todas as Idades"),
    title: "Curso de Desenho Realista Completo – Para Todas as Idades",
    description:
`
# Curso de Desenho Realista Completo – Para Todas as Idades

O **Curso de Desenho Realista Completo** foi desenvolvido para quem deseja aprender desenho realista do zero ou aprimorar suas habilidades por meio de uma metodologia prática e progressiva. Com aulas online, exercícios e acompanhamento do professor, o curso atende tanto adultos quanto crianças.

Durante o treinamento, o aluno desenvolve percepção visual, técnicas de luz e sombra, anatomia e construção da figura humana, criando uma base sólida para produzir desenhos cada vez mais realistas.

## Conteúdo

- Observação e percepção visual
- Proporção e precisão
- Construção do olhar artístico
- Luz e sombra
- Contraste, volume e profundidade
- Estrutura da cabeça
- Anatomia básica
- Simetria facial
- Corpo humano e poses
- Exercícios práticos

## Bônus

- Kit inicial de materiais enviado gratuitamente para todo o Brasil
- 5 lápis profissionais
- Esfuminho
- Borracha
- Papel Canson
- Certificado de conclusão
- 4 meses de vídeo-correções com acompanhamento do professor
- Acesso a grupos exclusivos

## Informações

- Mais de 95 videoaulas
- Curso 100% online
- Acesso vitalício à plataforma
- Atualizações futuras incluídas
- Garantia de 7 dias

## Indicado para

- Iniciantes
- Adultos e crianças
- Pessoas que desejam aprender desenho realista
- Quem busca desenvolver um hobby ou iniciar uma carreira artística`,
    image:
      "https://static-media.hotmart.com/tpngOZFRMz5Y8HzCA-esPb_9Khs=/300x300/smart/filters:format(webp):background_color(white)/hotmart/product_pictures/1cdf0fb4-af1a-40b4-800f-465b15386907/Capa600x600.png?w=920",
    category: "Desenho",
    instructor: "Estúdio França",
    level: "Intermediário",
    platform: "Hotmart",
    duration: "10 horas",
students: "+3500", // ou "Não informado"
certificate: true, 
rating: 5.0,
price: "1.197,00",
    affiliate_link: "https://go.hotmart.com/K106554712W",
    relatedArticles: [slugify('Como Fazer Sombreamento em Desenhos Guia Completo para Iniciantes'), slugify('Os 3 Melhores Cursos de Desenho Realista em 2026')],
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

