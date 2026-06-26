"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/app/components/Navigation';
import Markdown from '@/app/components/Markedown';
import ArticleCard from '@/app/components/ArticleCard';
import { getRelatedArticles } from '@/app/data/articles';
import Footer from '@/app/components/footer';
import { ArrowLeft, ExternalLink, GraduationCap,
Clock3,
Users,
BadgeCheck,
Star,
ArrowRight as TruckIcon,  } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { useToast } from '@/app/components/ui/use-toast';
import CourseCard from './courseCard';
import { initialCourses } from "@/app/data/coursers";




export const CoursePage = ({course}) => {


  const { toast } = useToast();

  if (!course) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Curso não encontrado</h2>
            <Link href={"/course"}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all"
            >
              Voltar ao cursos
            </Link>
          </div>
        </div>
      </>
    );
  }
const relatedCourses = initialCourses
  .filter(
    c => c.category === course.category &&
         c.id !== course.id
  )
  .slice(0,3);
  const relatedArticles = getRelatedArticles(course.relatedArticles || []);

  const handleBuyNow = () => {
    window.open(course.affiliate_link, '_blank', 'noopener,noreferrer');
    toast({
      title: "Redirecionando...",
      description: "Você será direcionado para a página de compra.",
    });
  };


 const features = [
  {
    icon:<BadgeCheck className="w-6 h-6"/>,
    text:"Certificado",
    feature:course.certificate
  },

  {
    icon:<Clock3 className="w-6 h-6"/>,
    text:course.duration,
    feature:true
  },

  {
    icon:<Users className="w-6 h-6"/>,
    text:`${course.students.toLocaleString()} alunos`,
    feature:true
  },

  {
    icon:<GraduationCap className="w-6 h-6"/>,
    text:course.level,
    feature:true
  }
]
const pegarFeature = ()=> features.filter((f)=> f.feature === true);
const featuresFiltrada = pegarFeature()

  return (
    <>
      

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Navigation />

        <div className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Back Button */}
            <Link href={"/coursers"}>
           
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
          
              className="flex items-center gap-2 text-gray-700 hover:text-purple-600 mb-8 font-medium transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Voltar aos Cursos</span>
            </motion.button> </Link>

            {/* Product Detail */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Product Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative rounded-2xl flex justify-center items-center overflow-hidden shadow-2xl aspect-square ">
                 <img
src={course.image}
alt={course.title}
className="w-full h-full object-cover"/>
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-semibold rounded-full shadow-lg">
                      {course.category}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Product Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col justify-center"
              >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {course.title}
                </h1>
                
              <div className="flex items-center justify-between mb-6">

<div>

<div className="text-4xl font-bold text-purple-600">

R$ {course.price.toFixed(2)}

</div>

</div>

<div className="flex items-center gap-2">

<Star className="fill-yellow-400 text-yellow-400"/>

<span>{course.rating}</span>

</div>

</div>

                <p className="text-lg text-gray-600 leading-relaxed mb-8">
               <Markdown contents={course.description}/>
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {featuresFiltrada && featuresFiltrada.map((feature, index)=>(
                    <div
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md border border-gray-100"
                    >
                      <div className="text-purple-600">{feature.icon}</div>
                      <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                    
                      </div>
                  ))}
                </div>

                  
                    
                {/* Buy Button */}
                <button
                  onClick={handleBuyNow}
                  className="flex items-center justify-center gap-3 w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-lg font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 mb-4"
                >
                  <ShoppingCart className="w-6 h-6" />
                  <span>Acessar Curso</span>
                  <ExternalLink className="w-5 h-5" />
                </button>

                <p className="text-sm text-gray-500 text-center">
                 { `Você será levado para a plataforma ${course.platform}`}
                </p>
              </motion.div>
            </div>

            {/* Related Articles Section */}
            {relatedArticles.length > 0 && (
              <section className="py-12 border-t border-gray-200">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900">
                   Artigos que complementam este curso
                  </h2>
                  <Link href="/articles" className="flex items-center gap-2 text-purple-600 font-semibold hover:gap-3 transition-all">
                    Ver Todos os Artigos <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedArticles.map((article, index) => (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <ArticleCard article={article} />
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            {/* Related Products */}
            {relatedCourses.length > 0 && (
              <section className="py-16 border-t border-gray-200 mt-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Cursos Relacionados
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {relatedCourses.map((relatedcourse, index) => (
                      <motion.div
                        key={relatedcourse.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <CourseCard course={relatedcourse} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </section>
            )}
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

