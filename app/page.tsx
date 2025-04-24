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
      <header className="container mx-auto py-24 mt-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold text-center text-slate-900 md:text-7xl"
        >
          Cacao Health Detector
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl text-center text-slate-700 mt-4 md:text-3xl"
        >
          Innovation in Cocoa Plantation Monitoring
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
            <h2 className="text-4xl font-semibold mb-4 text-slate-800">Revolutionizing Cocoa Care</h2>
            <p className="text-xl text-slate-600 mb-6">
              Our differential robot equipped with cutting-edge technology traverses cocoa plantations, identifying and locating unhealthy cacao in real time.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                Learn More
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
              src="https://i.ibb.co/0RRY5gSb/file-0000000015d851f7a28903446989199d-conversation-id-67e82eff-c254-800b-b4c6-cb827ea42e37-message-i.png"
              alt="Cacao Health Detector"
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
            Advanced Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Camera className="w-12 h-12 text-blue-500" />,
                title: "RGB Camera",
                description: "Captures high-resolution images for precise analysis.",
              },
              {
                icon: <MapPin className="w-12 h-12 text-blue-500" />,
                title: "GPS Module",
                description: "Records the exact location of each unhealthy cacao.",
              },
              {
                icon: <Cpu className="w-12 h-12 text-blue-500" />,
                title: "LIDAR Sensor",
                description: "Maps the environment for efficient navigation.",
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
          <h2 className="text-3xl font-semibold mb-8 text-center text-slate-800">Detection and Logging Process</h2>
          <Tabs defaultValue="scan" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="scan">Scanning</TabsTrigger>
              <TabsTrigger value="detect">Detection</TabsTrigger>
              <TabsTrigger value="geolocate">Geolocation</TabsTrigger>
              <TabsTrigger value="report">Report</TabsTrigger>
            </TabsList>
            <TabsContent value="scan">
              <Card>
                <CardContent className="flex items-center p-6">
                  <Leaf className="w-12 h-12 text-emerald-500 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">Scanning</h3>
                    <p className="text-slate-600">
                      The robot scans the cocoa plantation trees with precision.
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
                    <h3 className="text-xl font-semibold text-slate-800">Detection</h3>
                    <p className="text-slate-600">YOLO identifies unhealthy cacao in real time with high accuracy.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="geolocate">
              <Card>
                <CardContent className="flex items-center p-6">
                  <MapPin className="w-12 h-12 text-red-500 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">Geolocation</h3>
                    <p className="text-slate-600">The exact location of each unhealthy cacao is recorded.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="report">
              <Card>
                <CardContent className="flex items-center p-6">
                  <FileSpreadsheet className="w-12 h-12 text-blue-500 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">Report</h3>
                    <p className="text-slate-600">
                      A detailed report is generated at the end of the route for analysis.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-semibold mb-8 text-center text-slate-800">Project Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Early detection of cacao diseases",
              "Resource optimization for plantation care",
              "Increased productivity and cocoa quality",
              "Reduced pesticide use through targeted intervention",
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
          <h2 className="text-3xl font-semibold mb-4 text-slate-800">
            Ready to revolutionize your cocoa plantation?
          </h2>
          <p className="text-xl text-slate-600 mb-6">
            Contact us today to discover how Cacao Helath Detector can transform your cocoa production.
          </p>
          <p className="text-lg font-medium text-slate-700">
            Get in touch: <a href="mailto:josalcob@espol.edu.ec" className="text-blue-600 hover:underline">josalcob@espol.edu.ec</a>
          </p>
        </section>
      </main>

      <footer className="bg-slate-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Cacao Health Detector. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
