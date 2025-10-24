"use client"

import { useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { Twirl as Hamburger } from "hamburger-react"

const sliderVariants = {
  initial: { scaleY: 0, opacity: 0 },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: { duration: 0.3, ease: [0.12, 0, 0.39, 0] },
  },
  exit: {
    scaleY: 0,
    opacity: 0,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
}

const sections = ["work", "skills", "contact"]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(true)
  const toggleClose = () => setIsOpen(false)

  const handleClick = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      toggleClose()
    }
  }

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Desktop Header */}
      <div className="hidden md:flex justify-between items-center container mx-auto px-20 py-6">
        {/* Logo */}
        <div
          className="flex flex-col text-left text-white cursor-pointer"
          onClick={(e) => handleClick(e, "hero")}
        >
           <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
             className="text-[#40E0D0] font-['Syncopate'] text-base font-bold mb-3 md:mb-0"
          >
            E.GEORGIOU
          </motion.div>
          <span className="text-gray-300 text-sm font-sans">Junior Developer</span>
        </div>

        {/* Menu (Vertical & Small) */}
        <nav className="flex flex-col space-y-2 font-sans text-white text-sm tracking-wide">
          {sections.map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              onClick={(e) => handleClick(e, section)}
              className="transition-colors duration-300 hover:text-[#40E0D0]"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="flex md:hidden justify-between items-center px-6 py-4">
        {/* Logo */}
        <div
          className="flex flex-col text-white cursor-pointer"
          onClick={(e) => handleClick(e, "hero")}
        >
          <span className="text-[#40E0D0] font-bold text-lg tracking-widest">
            ELENI GEORGIOU
          </span>
          <span className="text-gray-300 text-sm font-sans">Junior Developer</span>
        </div>

        {/* Hamburger */}
        <Hamburger toggled={isOpen} toggle={isOpen ? toggleClose : toggleOpen} color="#40E0D0" size={24} />
      </div>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={sliderVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 flex flex-col items-center justify-center space-y-4 text-white text-sm z-40"
          >
            {sections.map((section) => (
              <Link
                key={section}
                href={`#${section}`}
                onClick={(e) => handleClick(e, section)}
                className="font-sans transition-colors duration-300 hover:text-[#40E0D0]"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
