"use client";

import { motion } from "framer-motion";
import { Code, Server, Palette } from "lucide-react";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 bg-black/80">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="font-['Syncopate'] text-2xl md:text-3xl font-bold mb-3">MY SKILLS</h2>
          <div className="w-16 h-1 mx-auto bg-turquoise"></div>
        </motion.div>

        <div className="mb-12">
          <div className="grid max-w-4xl grid-cols-1 gap-6 mx-auto md:grid-cols-3">
            {/* Frontend Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6 border rounded-lg bg-gray-900/60 border-turquoise/20"
            >
              <div className="flex items-center mb-4">
                <Code className="w-5 h-5 mr-2 text-turquoise" />
                <h3 className="font-['Rajdhani'] text-lg font-bold text-white">Frontend</h3>
              </div>
              <ul className="space-y-3 font-['Rajdhani']">
                {[
                  { name: "React", level: 60 },
                  { name: "Next.js", level: 75 },
                  { name: "Tailwind CSS", level: 75 },
                ].map((skill) => (
                  <li key={skill.name} className="text-sm">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-turquoise">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-1.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-turquoise to-blue-500 h-1.5 rounded-full"
                      ></motion.div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Backend Skills (Express removed) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 border rounded-lg bg-gray-900/60 border-turquoise/20"
            >
              <div className="flex items-center mb-4">
                <Server className="w-5 h-5 mr-2 text-turquoise" />
                <h3 className="font-['Rajdhani'] text-lg font-bold text-white">Backend</h3>
              </div>
              <ul className="space-y-3 font-['Rajdhani']">
                {[
                  { name: "Node.js", level: 60 },
                  { name: "MongoDB", level: 50 },
                ].map((skill) => (
                  <li key={skill.name} className="text-sm">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-turquoise">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-1.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-turquoise to-purple-500 h-1.5 rounded-full"
                      ></motion.div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tools & CMS (Git & Photoshop removed) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6 border rounded-lg bg-gray-900/60 border-turquoise/20"
            >
              <div className="flex items-center mb-4">
                <Palette className="w-5 h-5 mr-2 text-turquoise" />
                <h3 className="font-['Rajdhani'] text-lg font-bold text-white">Tools & CMS</h3>
              </div>
              <ul className="space-y-3 font-['Rajdhani']">
                {[
                  { name: "WordPress", level: 75 },
                ].map((skill) => (
                  <li key={skill.name} className="text-sm">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-turquoise">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-1.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-turquoise to-green-500 h-1.5 rounded-full"
                      ></motion.div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
