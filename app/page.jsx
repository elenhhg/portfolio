
import Header from "@/components/common/header";
import Hero from "@/components/hero";
import WorkSection from "@/components/work";
import SkillsSection from "@/components/skills";
import ContactSection from "@/components/contact/contact";
import Footer from "@/components/common/footer";
import Background from "@/components/background";

export default function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white bg-black">
      <Background />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Header />
        <Hero />
        <WorkSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
