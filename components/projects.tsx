"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  demo: string;
  github: string;
  tech: string[];
  features: string[];
}

const projects: Project[] = [
  {
    title: "Platform E-commerce",
    description:
      "Platform e-commerce modern yang dibangun dengan Next.js, Express.js, Prisma, dan PostgreSQL.",
    longDescription:
      "Platform e-commerce lengkap dengan berbagai fitur, termasuk integrasi Raja Ongkir untuk perhitungan biaya pengiriman dan Midtrans payment gateway untuk pembayaran yang aman. Sistem ini dilengkapi dengan manajemen produk, keranjang belanja, sistem autentikasi, dan dashboard admin yang komprehensif.",
    image: "/ecommerce.png",
    demo: "https://shop.trioagus.cloud",
    github: "https://github.com/agustrio1/ecommerce-fe",
    tech: ["Next.js", "Express.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Integrasi Raja Ongkir",
      "Payment Gateway Midtrans",
      "Manajemen Produk",
      "Sistem Keranjang Belanja",
      "Dashboard Admin",
      "Autentikasi Pengguna",
      "Manajemen Stok",
    ],
  },
  {
    title: "Ecommerce Dashboard",
    description:
    "Dashboard Ecommerce untuk mengatir manajmen produk dan lain-lain",
    longDescription:
    "Dahsboard Ecommerce yang komprehensif dengan fitur, laporan pendapatan, manajemen produk, manajmen notifikasi, dan diskon, serta manajemen pengiriman",
    image: "/ecommerce-dashboard.png",
    demo: "",
    github: "https://github.com/agustrio1/ecommerce-fe",
    tech: ["React", "Node.js", "Express", "MySQL"],
    features: [
      "Manajemen Produk",
      "Manajemen Status Pengiriman",
      "Pelaporan Penjualan",
      "Visualisasi Data",
    ],
  },
  {
    title: "Sistem POS",
    description:
      "Sistem Point of Sale yang dibangun dengan Laravel Filament dan MySQL, dengan fitur mode gelap dan analitik real-time.",
    longDescription:
      "Sistem Point of Sale modern dengan antarmuka yang intuitif, dilengkapi dengan fitur mode gelap untuk kenyamanan pengguna. Sistem ini menyediakan analitik real-time untuk memantau penjualan, stok, dan performa bisnis secara keseluruhan.",
    image: "/kasir.png",
    demo: "https://kasir.mbohtoko.my.id",
    github: "",
    tech: ["Laravel", "Filament", "MySQL", "Tailwind CSS"],
    features: [
      "Mode Gelap/Terang",
      "Analitik Real-time",
      "Manajemen Stok",
      "Laporan Pembelian",
      "Laporan Penjualan",
      "Multi-user",
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="container space-y-8 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Proyek Unggulan
        </h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Berikut adalah beberapa proyek terbaru yang menunjukkan keahlian dan
          pengalaman saya.
        </p>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.div key={project.title} variants={item}>
            <Card className="group overflow-hidden">
              <div
                className="aspect-video overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button
                  onClick={() => setSelectedProject(project)}
                  variant="default"
                  size="sm"
                  className="w-full">
                  Detail Proyek
                </Button>
                {project.demo && (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="max-w-[95vw] w-full sm:max-w-[85vw] md:max-w-[75vw] lg:max-w-[65vw] p-4 sm:p-6">
            <DialogHeader>
              <DialogTitle className="text-xl sm:text-2xl font-bold">
                {selectedProject.title}
              </DialogTitle>
            </DialogHeader>

            <div className="mt-4 space-y-4">
              <div className="relative w-full max-h-[40vh] overflow-hidden rounded-lg">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  width={1200}
                  height={800}
                  className="object-cover w-full h-32"
                />
              </div>

              <div className="space-y-4">
                <p className="text-sm sm:text-base text-muted-foreground">
                  {selectedProject.longDescription}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm sm:text-base">
                    Fitur Utama:
                  </h4>
                  <ul className="grid grid-cols-2 sm:grid-cols-2 gap-2 text-sm sm:text-base">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="mr-2 text-primary">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm sm:text-base">
                    Teknologi:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-primary/10 px-2 py-1 text-xs sm:text-sm font-medium text-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 pt-2">
                  {selectedProject.demo && (
                    <Button asChild className="w-full sm:w-auto">
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Lihat Demo
                      </a>
                    </Button>
                  )}
                  {selectedProject.github && (
                    <Button
                      asChild
                      variant="outline"
                      className="w-full sm:w-auto">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center">
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
