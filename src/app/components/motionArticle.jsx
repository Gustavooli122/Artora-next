"use client"
import { Calendar, User, Clock } from "lucide-react";
import { motion } from "framer-motion";
export default function MotionArticleMeta({artigoAtual}){
    return(
         <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="px-3 py-1 bg-indigo-600 text-white text-xs rounded-md">
                {artigoAtual.category}
              </span>

              <h1 className="text-4xl font-bold text-white mt-4">
                {artigoAtual.title}
              </h1>

              <div className="flex gap-6 text-gray-200 mt-4 text-sm">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {artigoAtual.author}
                </div>

                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                 {artigoAtual.publicationDate}
                    
             
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {artigoAtual.readTime}
                </div>
              </div>
            </motion.div>
          </div>
    )
}