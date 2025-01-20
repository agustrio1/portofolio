"use client"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

interface TypewriterTextProps {
  text: string;
  delay?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, delay = 100 }) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(c => c + 1)
      }, delay)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, delay])

  return <span>{displayText}</span>
}

export function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    projectsSection?.scrollIntoView({ behavior: "smooth" })
  }

  const roles = [
    "Full Stack Developer",
    "Web Developer",
    "JavaScript Developer",
    "React Developer",
  ]

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="container relative min-h-[calc(100vh-4rem)] bg-gradient-to-b from-background to-background/80">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center space-y-10 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mx-auto w-fit rounded-full bg-primary/10 px-4 py-1.5"
            >
              <span className="text-sm font-medium text-primary">
                <TypewriterText text="Selamat Datang di Portfolio Saya" delay={50} />
              </span>
            </motion.div>
            <h1 className="bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-4xl font-bold tracking-tighter text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
              {roles[currentRoleIndex]}
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
              Spesialis dalam pengembangan aplikasi web modern menggunakan teknologi terkini seperti{" "}
              <span className="text-primary">JavaScript</span>,{" "}
              <span className="text-primary">TypeScript</span>,{" "}
              <span className="text-primary">React</span>, dan{" "}
              <span className="text-primary">Next.js</span>,{" "}
              <span className="text-primary">Laravel</span>,
               serta {" "}
              <span className="text-primary">Wordpress</span>
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button 
              size="lg" 
              onClick={scrollToProjects} 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-300 min-w-[160px]"
            >
              Lihat Portfolio
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="border-blue-600 hover:bg-blue-600 hover:text-white font-semibold transition-colors duration-300 min-w-[160px]"
            >
              <a href="#contact">
                Hubungi Saya
              </a>
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 hidden animate-bounce md:block"
        >
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={scrollToProjects} 
            className="rounded-full hover:bg-blue-600/10"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}