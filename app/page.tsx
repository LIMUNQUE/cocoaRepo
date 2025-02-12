"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Camera, Cpu, MapPin, Leaf, FileSpreadsheet, AlertTriangle, ChevronDown } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedBackground } from "@/components/animated-background"
import { NavBar } from "@/components/nav-bar"

export default function Home() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <AnimatedBackground />
      <NavBar />
      <header className="container mx-auto py-20 mt-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center text-slate-800"
        >
          CacaoBot
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-center text-slate-600 mt-2"
        >
          Innovación en Monitoreo de Cacaoteras
        </motion.p>
      </header>

      <main className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="py-12 flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2"
          >
            <h2 className="text-4xl font-semibold mb-4 text-slate-800">Revolucionando el Cuidado del Cacao</h2>
            <p className="text-xl text-slate-600 mb-6">
              Nuestro robot diferencial equipado con tecnología de punta recorre cacaoteras, identificando y localizando
              cacaos no sanos en tiempo real.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                Descubre Más
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-1/2 mt-6 md:mt-0"
          >
            <Image
              src="https://i.ibb.co/WWBBBZDd/logo.png"
              alt="Robot CacaoBot"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </section>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="flex justify-center mb-12"
        >
          <ChevronDown className="w-8 h-8 text-blue-500" />
        </motion.div>

        {/* Features Section */}
        <section id="features" className="py-12 scroll-mt-20" ref={targetRef}>
          <motion.h2 style={{ opacity, scale }} className="text-3xl font-semibold mb-8 text-center text-slate-800">
            Características Avanzadas
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Camera className="w-12 h-12 text-blue-500" />,
                title: "Cámara RGB",
                description: "Captura imágenes de alta resolución para un análisis preciso.",
              },
              {
                icon: <MapPin className="w-12 h-12 text-blue-500" />,
                title: "Módulo GPS",
                description: "Registra la ubicación exacta de cada cacao no sano.",
              },
              {
                icon: <Cpu className="w-12 h-12 text-blue-500" />,
                title: "Sensor LIDAR",
                description: "Mapea el entorno para una navegación eficiente.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
              >
                <Card>
                  <CardContent className="flex flex-col items-center text-center p-6">
                    {feature.icon}
                    <h3 className="mt-4 mb-2 text-xl font-semibold text-slate-800">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-12 bg-white/50 rounded-lg shadow-inner scroll-mt-20">
          <h2 className="text-3xl font-semibold mb-8 text-center text-slate-800">Proceso de Detección y Registro</h2>
          <Tabs defaultValue="scan" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="scan">Escaneo</TabsTrigger>
              <TabsTrigger value="detect">Detección</TabsTrigger>
              <TabsTrigger value="geolocate">Geolocalización</TabsTrigger>
              <TabsTrigger value="report">Informe</TabsTrigger>
            </TabsList>
            <TabsContent value="scan">
              <Card>
                <CardContent className="flex items-center p-6">
                  <Leaf className="w-12 h-12 text-emerald-500 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">Escaneo</h3>
                    <p className="text-slate-600">
                      El robot recorre la cacaotera escaneando los árboles con precisión.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="detect">
              <Card>
                <CardContent className="flex items-center p-6">
                  <AlertTriangle className="w-12 h-12 text-yellow-500 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">Detección</h3>
                    <p className="text-slate-600">YOLO identifica cacaos no sanos en tiempo real con alta precisión.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="geolocate">
              <Card>
                <CardContent className="flex items-center p-6">
                  <MapPin className="w-12 h-12 text-red-500 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">Geolocalización</h3>
                    <p className="text-slate-600">Se registra la ubicación exacta de cada cacao no sano detectado.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="report">
              <Card>
                <CardContent className="flex items-center p-6">
                  <FileSpreadsheet className="w-12 h-12 text-blue-500 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">Informe</h3>
                    <p className="text-slate-600">
                      Se genera un informe detallado al finalizar el recorrido para análisis.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-semibold mb-8 text-center text-slate-800">Beneficios del Proyecto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Detección temprana de enfermedades en el cacao",
              "Optimización de recursos en el cuidado de las plantaciones",
              "Aumento de la productividad y calidad del cacao",
              "Reducción del uso de pesticidas mediante intervenciones focalizadas",
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
              >
                <Card>
                  <CardContent className="p-6">
                    <p className="text-slate-600">{benefit}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-12 text-center scroll-mt-20">
          <h2 className="text-3xl font-semibold mb-4 text-slate-800">¿Listo para revolucionar tu cacaotera?</h2>
          <p className="text-xl text-slate-600 mb-6">
            Contáctanos hoy para descubrir cómo CacaoBot puede transformar tu producción de cacao.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
              Contactar Ahora
            </Button>
          </motion.div>
        </section>
      </main>

      <footer className="bg-slate-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 CacaoBot. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

