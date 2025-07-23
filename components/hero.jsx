"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const fullText = "DEVELOPER";

  // πιο μικρές διαφορές μεταξύ χαρακτήρων
  const typingSpeed = 200
  const deletingSpeed = 100
  const pauseTime = 1000; // λίγο μεγαλύτερο διάλειμμα

  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && displayedText === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
    } else {
      timeout = setTimeout(() => {
        const textLength = displayedText.length;
        if (!isDeleting) {
          setDisplayedText(fullText.substring(0, textLength + 1));
        } else {
          setDisplayedText(fullText.substring(0, textLength - 1));
        }
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting]);

  const scrollToWork = () => {
    const target = document.getElementById("work");
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="min-h-[85vh] flex items-center justify-center pt-16 relative overflow-hidden"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
    >
      <div className="container z-10 max-w-3xl px-4 mx-auto text-center">
        <h1 className="font-['Syncopate'] text-5xl md:text-6xl text-[#ffffff] font-bold mb-4">
          JUNIOR{" "}
          <span className="text-[#00FFFF]">
            {displayedText}
            <span className="blinking-cursor">|</span>
          </span>
        </h1>
        <p className="font-['Rajdhani'] text-lg text-gray-300 mb-8">
          I build responsive web applications with modern technologies and clean, efficient code.
        </p>
        <button
          onClick={scrollToWork}
          className="bg-[#00FFFF] text-black font-['Rajdhani'] font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 hover:bg-black hover:text-white active:scale-95"
        >
          View My Work
        </button>
      </div>

      <style>{`
        .blinking-cursor {
          font-weight: 100;
          font-size: 1.2em;
          color: #00FFFF;
          animation: blink 1s infinite;
          margin-left: 2px;
        }
        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
