"use client"

import { motion } from "framer-motion"
import { Github } from "lucide-react"
import Image from "next/image"

export default function WorkSection() {
  const projects = [
    // {
    //   title: "To-Do List",
    //   description: "Task Manager / UI Design",
    //   github: "https://github.com/elenhhg/to-do-list",
    //   image: "/images/todo-list.png",
    // },
    {
      title: "Calculator",
      description: "React Calculator / CSS Styling",
      github: "https://calculator-ten-sigma-63.vercel.app/",
      image: "/images/calculator.png",
    },
    {
      title: "Bar Website with Reservation",
      description: "Next.js / React / Responsive Design / Reservation Form",
      github: "https://baraki.vercel.app/",
      image: "/images/noir-bar.png",
    },
    {
      title: "eCommerce",
      description: "Next.js / React / eCommerce",
      github: "https://e-shop-six-xi.vercel.app/",
      image: "/images/e-shop.png",
    },

     {
      title: "Personal Finance Tracker",
      description: "Personal finance manager with responsive design, dynamic charts, and user authentication.",
      github: "https://personal-finance-tracker-32b1.vercel.app/",
      image: "/images/finance-tracker.png",
    },
  ]

  return (
    <section id="work" className="py-16 bg-black/60">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="font-['Syncopate'] text-2xl md:text-3xl font-bold mb-3">MY WORK</h2>
          <div className="w-16 h-1 mx-auto bg-turquoise"></div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="relative h-48 overflow-hidden bg-gray-900 border rounded-lg border-turquoise/20">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                    priority={true}
                  />
                )}
                <div className="absolute inset-0 transition-opacity duration-300 bg-gradient-to-br from-turquoise/20 to-purple-500/20 group-hover:opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  <div className="text-center">
                    <span className="font-['Syncopate'] text-base font-bold text-white">{project.title}</span>
                    <div className="flex justify-center mt-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 mx-1 text-black bg-white rounded-full"
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="font-['Rajdhani'] text-base font-bold mt-3 text-turquoise">{project.title}</h3>
              <p className="font-['Rajdhani'] text-sm text-gray-400 mt-1">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
