"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="py-6 bg-black border-turquoise/20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
             className="text-[#40E0D0] font-['Syncopate'] text-base font-bold mb-3 md:mb-0"
          >
            E.GEORGIOU
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-400 font-['Rajdhani'] text-sm"
          >
            © {new Date().getFullYear()} All Rights Reserved
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
