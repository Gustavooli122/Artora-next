import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/footer";
import ArticleCard from "@/app/components/ArticleCard";
import Markdown from "@/app/components/Markedown";
import MotionArticleMeta from "@/app/components/motionArticle";
import { getArticleById } from "@/app/data/articles";
import { Tag } from "lucide-react";
// 👇 substitui o useArticles
import { initialArticles } from "@/app/data/articles";

// 🔥 SSG: gera páginas estáticas
export function generateStaticParams() {
  return initialArticles.map((article) => ({
    id: article.id,
  }));
}

export default async function ArticleDetailPage({ params }) {
  const { id } = await params;

  const artigoAtual = getArticleById(id)

  if (!artigoAtual) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex flex-1 items-center justify-center pt-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              Artigo não encontrado
            </h2>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const artigosRelacionados = initialArticles.filter(
    (article) =>
      article.category === artigoAtual.category &&
      article.id !== id
  );

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* HERO */}
      <div className="relative h-[50vh] min-h-[400px]">
        <img
          src={artigoAtual.coverImage}
          className="w-full h-full hidden md:flex object-cover"
        />
        <img
          src={artigoAtual.coverImageMobile}
          className="w-full h-full flex md:hidden object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

        <div className="absolute bottom-0 left-0 right-0 p-8">
        <MotionArticleMeta artigoAtual={artigoAtual}/>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-4 py-12 prose">
        <p className="text-lg text-gray-600 border-l-4 border-indigo-600 pl-4">
          {artigoAtual.summary}
        </p>

        <Markdown contents={artigoAtual.content} />

        {/* TAGS */}
        <div className="mt-12 pt-8 border-t flex flex-wrap gap-2">
          <Tag className="w-5 h-5 text-gray-400" />
          {artigoAtual.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* RELACIONADOS */}
      {artigosRelacionados.length > 0 && (
        <div className="bg-gray-50 py-16 px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            {artigosRelacionados.map((post) => (
              <ArticleCard key={post.id} article={post} />
            ))}
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}