"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { format } from "date-fns"
import Link from 'next/link';
import { Button } from "@/components/ui/button";

interface LinkedInPost {
  id: string;
  iframeSrc: string;
  date: Date;
  title: string;
  description: string;
  tags: string[];
}
const linkedInPosts: LinkedInPost[] = [
  {
    id: "1",
    iframeSrc: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7318292123609436161?collapsed=1",
    date: new Date("2025-04-24"),
    title: "Avances en la Detección de Enfermedades del Cacao",
    description: "Nuestro robot ha logrado una precisión del 95% en la detección temprana de enfermedades del cacao usando visión por computadora.",
    tags: ["Tecnología", "Investigación", "Avances"]
  },
  {
    id: "2",
    iframeSrc: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7307989182985990147?collapsed=1",
    date: new Date("2025-03-22"),
    title: "Diseño mécanico del robot",
    description: "Diseñamos nuevas uniones estructurales que facilitan el montaje y mantenimiento del sistema, permitiendo un acceso más sencillo a los componentes internos.",
    tags: ["Tecnología", "Investigación", "Avances"]
  },

  // Add more LinkedIn posts here
]

export default function Blog() {
  return (
    <div className="container mx-auto py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <Link href="/" className="absolute top-4 left-4">
          <Button variant="ghost" className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Volver a inicio
          </Button>
        </Link>
        
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Blog</h1>
        <p className="text-slate-600">Nuestras últimas actualizaciones y avances en el proyecto Cacao Health Detector</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {linkedInPosts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group"
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader className="relative">
                <iframe
                  src={post.iframeSrc}
                  height="543"
                  width="100%"
                  frameBorder="0"
                  allowFullScreen
                  title="Publicación de LinkedIn"
                  className="rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-semibold mb-2">
                  {post.title}
                </CardTitle>
                <p className="text-slate-600 mb-4 line-clamp-3">
                  {post.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    {format(post.date, "MMMM d, yyyy")}
                  </span>
                  <div className="flex space-x-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-slate-100 rounded-full text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}