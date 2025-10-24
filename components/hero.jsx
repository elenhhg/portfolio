"use client"

import { useEffect, useState } from "react"
import { FiGithub, FiInstagram, FiFacebook } from "react-icons/fi"
import { motion } from "framer-motion"

const Home = () => {
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "DEVELOPER"

  useEffect(() => {
    let index = 0
    let deleting = false
    let timeout // Removed TypeScript type annotation

    const typeWriter = () => {
      if (!deleting) {
        setDisplayedText(fullText.slice(0, index + 1))
        index++
        if (index === fullText.length) {
          deleting = true
          timeout = setTimeout(typeWriter, 1000)
          return
        }
      } else {
        setDisplayedText(fullText.slice(0, index - 1))
        index--
        if (index === 0) {
          deleting = false
        }
      }
      timeout = setTimeout(typeWriter, deleting ? 100 : 150)
    }

    typeWriter()
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="min-h-screen overflow-hidden bg-black relative px-4 sm:px-6 lg:px-10">
      <div className="relative flex flex-col md:flex-row md:h-[50rem] md:w-4/5 md:mx-auto items-center md:items-start justify-center md:justify-between py-16 md:py-0">
        <div className="w-full md:w-1/2 flex flex-col justify-center md:justify-start md:mt-48 text-center md:text-left">
          {/* Greeting */}
          <div className="text-white text-xl sm:text-2xl md:text-3xl flex flex-col space-y-2 mb-4 sm:mb-6">
            <span className="text-base sm:text-xl font-bold">Hello</span>
            <span>
              I'm <span className="text-[#40E0D0] font-bold">Eleni Georgiou</span>
            </span>
          </div>

          <motion.div
            className="font-extrabold tracking-tighter text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-4 sm:mb-6"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }} // Changed to plain Infinity
          >
            <div>JUNIOR</div>
            <div className="text-[#40E0D0]/30">
              {displayedText}
              <span className="blinking-cursor">|</span>
            </div>
          </motion.div>

          <div className="max-w-md mx-auto md:mx-0">
            <span className="text-gray-300 text-xs sm:text-sm leading-relaxed font-sans">
              I design and develop web experiences that are fast, responsive, and user-friendly.
            </span>
          </div>

          <div className="flex md:hidden justify-center items-center gap-4 mt-8">
            <a href="https://github.com/elenhhg" target="_blank" rel="noreferrer">
              <div className="text-white bg-black rounded-full p-4 text-2xl hover:bg-[#40E0D0] hover:text-black transition-transform transform hover:scale-110 border border-gray-800">
                <FiGithub />
              </div>
            </a>
            <a href="https://www.instagram.com/elenhgewrgiou__/" target="_blank" rel="noreferrer">
              <div className="text-white bg-black rounded-full p-4 text-2xl hover:bg-[#40E0D0] hover:text-black transition-transform transform hover:scale-110 border border-gray-800">
                <FiInstagram />
              </div>
            </a>
            <a href="https://www.facebook.com/elenhgewrgiou/" target="_blank" rel="noreferrer">
              <div className="text-white bg-black rounded-full p-4 text-2xl hover:bg-[#40E0D0] hover:text-black transition-transform transform hover:scale-110 border border-gray-800">
                <FiFacebook />
              </div>
            </a>
          </div>
        </div>

       <div className="hidden md:flex w-1/2 flex-col justify-start mt-48 items-end space-y-6 pr-10">
  <a
    href="https://github.com/elenhhg"
    target="_blank"
    rel="noreferrer"
    className="group"
  >
    <div className="text-white bg-black rounded-full p-5 text-3xl transition-all duration-300 transform group-hover:scale-110 group-hover:text-[#40E0D0] group-hover:shadow-[0_0_20px_#40E0D0]">
      <FiGithub />
    </div>
  </a>

  <a
    href="https://www.instagram.com/elenhgewrgiou__/"
    target="_blank"
    rel="noreferrer"
    className="group"
  >
    <div className="text-white bg-black rounded-full p-5 text-3xl transition-all duration-300 transform group-hover:scale-110 group-hover:text-[#40E0D0] group-hover:shadow-[0_0_20px_#40E0D0]">
      <FiInstagram />
    </div>
  </a>

  <a
    href="https://www.facebook.com/elenhgewrgiou/"
    target="_blank"
    rel="noreferrer"
    className="group"
  >
    <div className="text-white bg-black rounded-full p-5 text-3xl transition-all duration-300 transform group-hover:scale-110 group-hover:text-[#40E0D0] group-hover:shadow-[0_0_20px_#40E0D0]">
      <FiFacebook />
    </div>
  </a>
</div>

<style jsx>{`
  .blinking-cursor {
    font-weight: 100;
    font-size: 1em;
    color: #40e0d0;
    animation: blink 1s infinite;
  }

  @keyframes blink {
    0%, 50%, 100% {
      opacity: 1;
    }
    25%, 75% {
      opacity: 0;
    }
  }
`}</style>
      </div>
    </div>
  )
}

export default Home
