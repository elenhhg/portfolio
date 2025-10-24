"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const skills = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "WordPress",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  {
    name: "Photoshop",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-black">
      <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="mb-16 text-center"
>
  <h2 className="font-['Syncopate'] text-3xl font-bold mb-3">Skills</h2>
  <div className="w-12 h-[2px] bg-[#40E0D0] mx-auto"></div>
</motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group relative"
              >
                <div className="flex flex-col items-center gap-3">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full border-2 border-gray-800 group-hover:border-turquoise flex items-center justify-center bg-gray-900/50 transition-all duration-300 p-3">
                    <Image
                      src={skill.icon || "/placeholder.svg"}
                      alt={skill.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>

                  {/* Skill Name */}
                  <span className="font-['Rajdhani'] text-sm text-gray-400 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
    </section>
  )
}
