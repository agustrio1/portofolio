"use client"

import { motion } from "framer-motion"
import { Github, Mail, Instagram } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Contact() {
  return (
    <section id="contact" className="container py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Kontak</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center gap-4">
            <Button asChild variant="outline" size="icon">
              <a href="mailto:pribadiagus321gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
            <Button asChild variant="outline" size="icon">
              <a href="https://github.com/agustrio1" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button asChild variant="outline" size="icon">
              <a href="https://instagram.com/trio_agus_16" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

