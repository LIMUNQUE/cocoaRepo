"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function NavBar() {
  const pathname = usePathname()
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleNavigation = (id: string) => {
    if (pathname === "/blog") {
      window.location.href = "/" // Redirect to home page
    } else {
      scrollToSection(id)
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
          <motion.span
            className="text-xl font-bold text-slate-800 cursor-pointer"
            onClick={() => {
              if (pathname === "/blog") {
                window.location.href = "/" // Redirect to home page
              }
              else{
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                })
              }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Cacao Health Detector
          </motion.span>
          <div className="hidden md:flex space-x-4">
            <Button variant="ghost" onClick={() => handleNavigation("features")}>
              Features
            </Button>
            <Button variant="ghost" onClick={() => handleNavigation("process")}>
              Processes
            </Button>
            <Button variant="ghost" onClick={() => handleNavigation("benefits")}>
              Benefits
            </Button>
            
              <Button variant="ghost" onClick={() => handleNavigation("contact")}>
                Contact
              </Button>
            
            <Link href="/blog">
            <Button
              variant="ghost"
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              Blog
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
