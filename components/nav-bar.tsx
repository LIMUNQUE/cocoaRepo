"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function NavBar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-xl font-bold text-slate-800">CacaoBot</span>
          <div className="hidden md:flex space-x-4">
            <Button variant="ghost" onClick={() => scrollToSection("features")}>
              Características
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("process")}>
              Proceso
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("benefits")}>
              Beneficios
            </Button>
            <Button
              variant="default"
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              Contactar
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

