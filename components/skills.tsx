"use client"

import { motion } from "framer-motion"
import { Database, FileCode2, Globe, Layout, Server, Workflow } from "lucide-react"

const skills = [
  {
    category: "Frontend",
    icon: Layout,
    items: ["JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Express.js", "Laravel", "REST APIs"],
  },
  {
    category: "Database",
    icon: Database,
    items: ["MySQL", "PostgreSQL", "Prisma"],
  },
  {
    category: "CMS",
    icon: Globe,
    items: ["WordPress", "Filament"],
  },
  {
    category: "Version Control",
    icon: FileCode2,
    items: ["Git", "GitHub"],
  },
  {
    category: "Tools & Methods",
    icon: Workflow,
    items: ["VS Code", "Postman", "REST"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="container space-y-8 py-24">
      <div className="space-y-4 mx-auto text-center">
        <h2 className="text-2xl font-bold  text-centermd:text-3xl">Keahlian & Teknologi</h2>
        <p className="text-muted-foreground">
          Daftar lengkap keahlian teknis dan teknologi yang saya gunakan.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => {
          const Icon = skill.icon
          return (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm"
            >
              <div className="flex items-center gap-4">
                <Icon className="h-8 w-8" />
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item} className="rounded-full bg-muted px-3 py-1 text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
