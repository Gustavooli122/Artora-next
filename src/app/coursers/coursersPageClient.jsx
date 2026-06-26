"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import CourseCard from '../components/courseCard';
import { getAllCategories } from '../data/coursers';
import { Filter, BookOpen } from 'lucide-react';
import Footer from '../components/footer';
import { initialCourses } from '../data/coursers';

 
const CourserPageClient= () => {

  const [selectedCategory, setSelectedCategory] = useState('Todos');
  
  const categories = getAllCategories();
  
  const filteredCourses = selectedCategory === 'Todos'
    ? initialCourses
    : initialCourses.filter(a => a.category === selectedCategory);


  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navigation />

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-900 to-indigo-900 pt-32 pb-20 px-4 text-white relative overflow-hidden">
          <div className="absolute inset-0  bg-cover bg-center  mix-blend-overlay"  style={{
    backgroundImage: "url('/imgs/courseHero.png')"
  }}></div>
            <div className="max-w-7xl mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cursos de <span className="text-purple-300">Arte e Desenho</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                 Descubra cursos cuidadosamente selecionados para aprender desenho,
                 pintura, arte digital, perspectiva, anatomia e muito mais.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Filters and Grid */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Category Filter */}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center gap-3 mb-12 flex-wrap"
            >
              <div className="flex items-center gap-2 text-gray-700 font-medium mr-2">
                <Filter className="w-5 h-5" />
                <span>Filtrar:</span>
              </div>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-600 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((courser, index) => (
                  <motion.div
                    key={courser.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <CourseCard course={courser} />
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-20">
                  <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-xl text-gray-500">Ainda não publicamos artigos nesta categoria.</p>
                </div>
              )}
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
};

export default CourserPageClient;