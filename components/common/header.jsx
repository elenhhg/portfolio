"use client"

import Link from "next/link"

export default function Header() {
  const sections = [ "work", "skills", "contact"]

  // smooth scroll handler
  function handleClick(e, id) {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-black/80 backdrop-blur-sm border-turquoise/20">
      <div className="container flex items-center justify-between px-4 py-3 mx-auto">
        <div className="text-[#40e0d0] font-['Syncopate'] text-lg font-bold">PORTFOLIO</div>
        <nav>
          <ul className="flex space-x-6 font-['Rajdhani'] text-base">
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={(e) => handleClick(e, section)}
                  className="relative inline-block text-gray-300 hover:text-[#40e0d0] transition-colors"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  <span
                    className="absolute left-0 -bottom-0.5 h-[2px] bg-[#40e0d0] w-full origin-left scale-x-0 transition-transform duration-300 ease-out hover:scale-x-100"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
