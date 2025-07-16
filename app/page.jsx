// "use client"

// import { useEffect } from "react"
import Header from "@/components/common/header"
import Hero from "@/components/hero"
import WorkSection from "@/components/work"
import SkillsSection from "@/components/skills"
import ContactSection from "@/components/contact/contact"
import Footer from "@/components/common/footer"

export default function Portfolio() {
  // Add custom fonts
  // useEffect(() => {
  //   const link = document.createElement("link")
  //   link.href =
  //     "https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=Syncopate:wght@400;700&display=swap"
  //   link.rel = "stylesheet"
  //   document.head.appendChild(link)
  //   return () => {
  //     document.head.removeChild(link)
  //   }
  // }, [])

  return (
    <div className="min-h-screen text-white bg-black">
      <Header />
      <Hero />
      <WorkSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
