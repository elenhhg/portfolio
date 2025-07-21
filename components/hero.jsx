"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

export default function Hero() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [inView, controls])

  // animation variants για blobs
  const blobVariants = {
    visible: {
      scale: [1, 1.2, 1, 0.8, 1],
      y: [0, -15, 0, 15, 0],
      x: [0, 10, 0, -10, 0],
      transition: {
        duration: 10,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  }

  // animation για fade-in του text
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  }

  // smooth scroll με offset (π.χ. αν έχεις sticky header)
  const scrollToWork = () => {
    const target = document.getElementById("work")
    if (target) {
      const headerOffset = 80 // π.χ. ύψος sticky header
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section
      ref={ref}
      className="min-h-[85vh] flex items-center justify-center pt-16 relative overflow-hidden bg-black"
    >
      {/* Animated Gradient Blobs */}
      <motion.div
        className="absolute rounded-full top-1/4 left-1/4 w-72 h-72 opacity-30 filter blur-3xl"
        style={{ background: "linear-gradient(135deg, #40e0d0 0%, #7e5bef 100%)" }}
        variants={blobVariants}
        initial="visible"
        animate={controls}
      />
      <motion.div
        className="absolute w-48 h-48 rounded-full opacity-25 bottom-1/4 right-1/4 filter blur-3xl"
        style={{ background: "linear-gradient(225deg, #7e5bef 0%, #40e0d0 100%)" }}
        variants={blobVariants}
        initial="visible"
        animate={controls}
        transition={{ delay: 3, duration: 10, repeat: Infinity, repeatType: "loop" }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full top-1/3 right-1/3 opacity-20 filter blur-3xl"
        style={{ background: "linear-gradient(215deg, #6a4eff 0%, #40e0d0 100%)" }}
        variants={blobVariants}
        initial="visible"
        animate={controls}
        transition={{ delay: 6, duration: 10, repeat: Infinity, repeatType: "loop" }}
      />
      <motion.div
        className="absolute rounded-full bottom-1/3 left-1/3 w-52 h-52 opacity-15 filter blur-3xl"
        style={{ background: "linear-gradient(45deg, #40e0d0 0%, #6a4eff 100%)" }}
        variants={blobVariants}
        initial="visible"
        animate={controls}
        transition={{ delay: 9, duration: 10, repeat: Infinity, repeatType: "loop" }}
      />

      {/* Content */}
      <motion.div
        className="container z-10 max-w-3xl px-4 mx-auto text-center"
        initial="hidden"
        animate={controls}
        variants={textVariants}
      >
        <h1 className="font-['Syncopate'] text-5xl md:text-6xl text-[#ffffff] font-bold mb-4">
          JUNIOR <span className="text-[#ffffff]">DEVELOPER</span>
        </h1>
        <p className="font-['Rajdhani'] text-lg text-gray-300 mb-8">
          I build responsive web applications with modern technologies and clean, efficient code.
        </p>
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#000000", color: "#fff" }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToWork}
          className="bg-[#00FFFF] text-black font-['Rajdhani'] font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300"
        >
          View My Work
        </motion.button>
      </motion.div>
    </section>
  )
}
