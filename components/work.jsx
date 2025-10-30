"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Github } from "lucide-react"

export default function WorkSection() {
  const projects = [
    
    {
      title: "Personal Finance Tracker",
      description: "Next.js / React / Responsive Design / User Authentication",
      github: "https://personal-finance-tracker-32b1.vercel.app/",
      image: "/images/pft.png",
    },
    {
      title: "Airport Shuttle Service",
      description: "Next.js / React / Responsive Design",
      github: "https://transfer-airport.vercel.app/",
      image: "/images/transfer.png",
    },
  ]

  return (
    <section id="work" className="py-12 md:py-16 lg:py-20 bg-black relative px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 md:mb-16 text-center"
      >
        <h2 className="font-['Syncopate'] text-2xl sm:text-3xl font-bold mb-3">My Work</h2>
        <div className="w-12 h-[2px] bg-[#40E0D0] mx-auto"></div>
      </motion.div>

      {/* Projects */}
      <div className="flex flex-col items-center space-y-12 md:space-y-16 lg:space-y-20">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0

          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-center gap-6 w-full max-w-6xl ${
                !isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Project Image */}
              <motion.div
                className="relative w-full md:w-1/2 h-48 sm:h-56 md:h-64 lg:h-72 rounded-xl overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-xl"
                  priority
                />
              </motion.div>

              {/* Project Info Box */}
              <motion.div
                className={`w-full md:w-1/2 bg-black/70 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-lg -mt-8 md:mt-0 ${
                  isEven ? "md:-ml-8 lg:-ml-16" : "md:-mr-8 lg:-mr-16"
                }`}
                initial={{ x: isEven ? -50 : 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
              >
                {/* Project Title */}
                <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2 font-['Syncopate']">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-300 mb-4 text-sm md:text-base font-sans tracking-wide">{project.description}</p>

                {/* Button */}
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, backgroundColor: "#40E0D0", color: "#000" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-3 py-2 sm:px-4 bg-white text-black rounded-full font-['Rajdhani'] font-semibold transition-colors duration-300 text-sm sm:text-base"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  View
                </motion.a>
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
