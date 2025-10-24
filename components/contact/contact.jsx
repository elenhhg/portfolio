"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Mail, Phone, FileText, Instagram } from "lucide-react"

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const submitForm = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ name, email, message }),
        headers: { "content-type": "application/json" },
      })
      if (res.status === 200) setIsSubmitted(true)
    } catch (error) {
      console.log("Error occurred : " + error)
    }
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <section id="contact" className="py-16 bg-black relative">
      <div className="container mx-auto px-4">
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center text-turquoise text-3xl md:text-5xl font-['Syncopate']"
          >
            Thanks for reaching out, I&apos;ll contact you soon
          </motion.div>
        ) : (
          <>
            {/* Heading */}
            <div className="relative z-10 flex w-10/12 m-auto text-white flex-col lg:flex-row">
              <div className="w-full lg:w-3/5">
                <div className="text-5xl md:text-9xl sm:text-6xl lg:text-8xl xl:text-9xl">
                  <div className="font-extrabold leading-tight tracking-tighter font-['Syncopate']">
                    Let<span className="text-turquoise">&apos;</span>s work
                  </div>
                  <div className="font-extrabold leading-tight tracking-tighter font-['Syncopate'] -mt-4 md:-mt-12 lg:-mt-12">
                    <span className="text-5xl md:text-8xl">— </span>
                    <span className="text-turquoise">together</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form + Right side */}
            <div className="relative z-10 flex w-10/12 m-auto text-white flex-col lg:flex-row lg:space-x-12">

              {/* Left side (Form) */}
              <div className="w-full lg:w-4/5 lg:-mt-20 xl:mt-10">
                <div className="relative">
                  <div className="p-10 rounded-2xl bg-black/40 backdrop-blur-md shadow-[0_0_35px_5px_rgba(64,224,208,0.4)]">
                    <form onSubmit={submitForm} className="space-y-8 md:space-y-16 rounded-2xl">
                      <div className="font-light tracking-tighter text-3xl md:text-6xl font-['Syncopate']">
                        Get <span className="text-white">in</span> touch
                      </div>

                      {/* Name */}
                      <div className="flex flex-col space-y-2">
                        <label className="text-white text-lg md:text-2xl lg:text-xl font-['Rajdhani']">
                          What&apos;s your name ?
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="p-2 text-white bg-transparent pl-0 focus:pl-2 border-b border-gray-500 focus:border-turquoise focus:outline-none w-full font-['Rajdhani'] transition-colors duration-300"
                        />
                      </div>

                      {/* Email */}
                      <div className="flex flex-col space-y-2">
                        <label className="text-white text-lg md:text-2xl lg:text-xl font-['Rajdhani']">
                          What&apos;s your email ?
                        </label>
                        <input
                          type="email"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="p-2 text-white bg-transparent pl-0 focus:pl-2 border-b border-gray-500 focus:border-turquoise focus:outline-none w-full font-['Rajdhani'] transition-colors duration-300"
                        />
                      </div>

                      {/* Message */}
                      <div className="flex flex-col space-y-2">
                        <label className="text-white text-md md:text-2xl lg:text-xl font-['Rajdhani']">
                          Type in your message
                        </label>
                        <textarea
                          placeholder="Enter your message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                          className="p-2 text-white bg-transparent pl-0 focus:pl-2 border-b border-gray-500 focus:border-turquoise focus:outline-none w-full font-['Rajdhani'] transition-colors duration-300"
                        />
                      </div>

                      {/* Buttons */}
                      <div className="flex flex-row md:space-x-10 space-x-4">
                        <button
                          type="submit"
                          className="font-bold text-white bg-turquoise hover:bg-turquoise/80 transform transition ease-in-out duration-300 hover:scale-105 p-2 md:text-md w-full lg:w-3/4 md:p-3 rounded-xl font-['Syncopate']"
                        >
                          Send
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setEmail("")
                            setName("")
                            setMessage("")
                          }}
                          className="font-bold text-white bg-turquoise hover:bg-turquoise/80 transform transition ease-in-out duration-300 hover:scale-105 p-2 md:text-md w-full lg:w-3/4 md:p-3 rounded-xl font-['Syncopate']"
                        >
                          Reset
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/* Right side - Contact Info & Social Icons */}
              <div className="w-full lg:w-3/5 lg:mt-40 xl:mt-36 mt-20 md:mt-36 xl:w-full flex justify-end">
                <div className="flex flex-col w-full md:space-y-8 space-y-10 items-end">

                  {/* Email & Phone */}
                  <div className="flex flex-row space-x-10">
                    <a
                      href="mailto:e.elenhgewrgiou@gmail.com"
                      className="group"
                    >
                      <div className="flex flex-row space-x-4 items-center transform transition-all duration-300 group-hover:scale-110">
                        <div className="text-white rounded-full p-3 bg-black group-hover:text-[#40E0D0] group-hover:shadow-[0_0_20px_#40E0D0] transition-all duration-300">
                          <Mail className="w-6 h-6 md:w-8 md:h-8" />
                        </div>
                        <div className="text-right">
                          <p className="text-sm md:text-lg">e.elenhgewrgiou@gmail.com</p>
                          <p className="text-xs md:text-sm text-white/50">Personal Email</p>
                        </div>
                      </div>
                    </a>

                    <a
                      href="tel:+30-694-923-6792"
                      className="group"
                    >
                      <div className="flex flex-row space-x-4 items-center transform transition-all duration-300 group-hover:scale-110">
                        <div className="text-white rounded-full p-3 bg-black group-hover:text-[#40E0D0] group-hover:shadow-[0_0_20px_#40E0D0] transition-all duration-300">
                          <Phone className="w-6 h-6 md:w-8 md:h-8" />
                        </div>
                        <div className="text-right">
                          <p className="text-sm md:text-lg">+30 694 923 6792</p>
                          <p className="text-xs md:text-sm text-white/50">Call me</p>
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* Social Links + CV */}
                  <div className="flex flex-row space-x-6 md:space-x-12 mt-6 text-4xl lg:text-3xl">
                    <a
                      className="group text-white rounded-full p-2 md:p-4 bg-black transition-all duration-300 transform hover:scale-110 hover:text-[#40E0D0] hover:shadow-[0_0_20px_#40E0D0]"
                      href="https://github.com/elenhhg"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github className="w-6 h-6 md:w-8 md:h-8" />
                    </a>

                    <a
                      className="group text-white rounded-full p-2 md:p-4 bg-black transition-all duration-300 transform hover:scale-110 hover:text-[#40E0D0] hover:shadow-[0_0_20px_#40E0D0]"
                      href="https://www.instagram.com/elenhgewrgiou__/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Instagram className="w-6 h-6 md:w-8 md:h-8" />
                    </a>

                    <button
                      onClick={() => setIsOpen(true)}
                      className="group text-white rounded-full p-2 md:p-4 bg-black transition-all duration-300 transform hover:scale-110 hover:text-[#40E0D0] hover:shadow-[0_0_20px_#40E0D0]"
                    >
                      <FileText className="w-6 h-6 md:w-8 md:h-8" />
                    </button>

                    {isOpen && (
                      <motion.div
                        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                        onClick={() => setIsOpen(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <motion.div
                          className="relative p-4 bg-black rounded-lg max-w-full max-h-full flex items-center justify-center"
                          onClick={(e) => e.stopPropagation()}
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.5, opacity: 0 }}
                          transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        >
                          <img
                            src="/images/cv.png"
                            alt="CV"
                            className="max-w-full max-h-[80vh] object-contain"
                          />
                          <button
                            className="absolute top-2 right-2 text-turquoise text-2xl font-bold"
                            onClick={() => setIsOpen(false)}
                          >
                            ×
                          </button>
                        </motion.div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
