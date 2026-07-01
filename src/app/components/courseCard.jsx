"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Star, Users } from "lucide-react";
import Markdown from "./Markedown";

const CourseCard = ({ course }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col h-full"
    >
      <Link href={`/course/${course.id}`} className="flex flex-col h-full">

        {/* Imagem */}
        <div className="relative h-72 overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

          {/* Categoria */}
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-purple-600 text-white text-xs font-semibold shadow-lg">
            {course.category}
          </span>

          {/* Nível */}
          <span
            className={`absolute top-4 right-4 px-3 py-1 rounded-full text-white text-xs font-semibold shadow-lg
              ${
                course.level === "Iniciante"
                  ? "bg-green-500"
                  : course.level === "Intermediário"
                  ? "bg-blue-500"
                  : "bg-orange-500"
              }
            `}
          >
            {course.level}
          </span>

          {/* Plataforma */}
          <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/70 text-white text-xs">
            {course.platform}
          </span>
        </div>

        {/* Conteúdo */}
        <div className="p-6 flex flex-col flex-grow">

          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
            {course.title}
          </h3>

          <p className="text-gray-600 text-sm mb-5 line-clamp-3 flex-grow">
             <Markdown contents={course.description}/>
          </p>

          {/* Rating + Alunos */}
          <div className="flex items-center justify-between text-sm text-gray-600 mb-5">

            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>{course.rating}</span>
            </div>

            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{course.students.toLocaleString("pt-BR")} alunos</span>
            </div>

          </div>

          {/* Preço */}
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-5">
            R$ {course.price}
          </div>

          {/* Botão */}
          <div className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <span>Ver Curso</span>
            <ExternalLink className="w-4 h-4" />
          </div>

        </div>
      </Link>
    </motion.div>
  );
};

export default CourseCard;