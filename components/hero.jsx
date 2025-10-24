"use client";

import React, { useEffect, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiInstagram, FiFacebook } from "react-icons/fi";
import { motion } from "framer-motion";

const Home = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "DEVELOPER";

  useEffect(() => {
    let index = 0;
    let deleting = false;
    let timeout;

    const typeWriter = () => {
      if (!deleting) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
        if (index === fullText.length) {
          deleting = true;
          timeout = setTimeout(typeWriter, 1000);
          return;
        }
      } else {
        setDisplayedText(fullText.slice(0, index - 1));
        index--;
        if (index === 0) {
          deleting = false;
        }
      }
      timeout = setTimeout(typeWriter, deleting ? 100 : 150);
    };

    typeWriter();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="pb-40 overflow-hidden bg-black sm1:pt-16 md:pt-0 relative">
      <div className="relative sm1:hidden md:flex md:h-[50rem] md:w-4/5 md:mx-auto items-start justify-between">
        {/* Left: Texts */}
        <div className="w-1/2 flex flex-col justify-start mt-48 pl-10 text-left">
          {/* Greeting */}
          <div className="text-white text-2xl md:text-3xl flex flex-col space-y-2 mb-6">
            <span className="text-1xl font-bold">Hello</span>
            <span>
              I'm <span className="text-[#40E0D0] font-bold">Eleni Georgiou</span>
            </span>
          </div>

          {/* JUNIOR static + DEVELOPER typing */}
          <motion.div
            className="font-extrabold tracking-tighter text-white lg:text-8xl md:text-7xl mb-6"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div>JUNIOR</div>
            <div className="text-[#40E0D0]/30">
              {displayedText}
              <span className="blinking-cursor">|</span>
            </div>
          </motion.div>

          {/* Subtext */}
          <div>
            <span className="text-gray-300 text-sm font-sans">
              I design and develop web experiences that are fast, responsive, and user-friendly.
            </span>
          </div>
        </div>

        {/* Right: Social Icons - vertical */}
        <div className="w-1/2 flex flex-col justify-start mt-48 items-end space-y-6 pr-10">
          <a href="https://github.com/elenhhg" target="_blank" rel="noreferrer">
            <div className="text-white bg-black rounded-full p-5 text-3xl hover:bg-[#40E0D0] hover:text-black transition-transform transform hover:scale-110">
              <FiGithub />
            </div>
          </a>
          <a href="https://www.instagram.com/elenhgewrgiou__/" target="_blank" rel="noreferrer">
            <div className="text-white bg-black rounded-full p-5 text-3xl hover:bg-[#40E0D0] hover:text-black transition-transform transform hover:scale-110">
              <FiInstagram />
            </div>
          </a>
          <a href="https://www.facebook.com/elenhgewrgiou/" target="_blank" rel="noreferrer">
            <div className="text-white bg-black rounded-full p-5 text-3xl hover:bg-[#40E0D0] hover:text-black transition-transform transform hover:scale-110">
              <FiFacebook />
            </div>
          </a>
        </div>
      </div>

      {/* Blinking cursor CSS */}
      <style jsx>{`
        .blinking-cursor {
          font-weight: 100;
          font-size: 1em;
          color: #40E0D0;
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Home;
