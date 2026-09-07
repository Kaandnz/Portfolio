import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Experience from "@/components/experience/Experience";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen">
      {/* Floating Translucent Navigation */}
      <Navbar />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Editorial About Section */}
      <About />

      {/* 3. Selected Projects & Live Labs */}
      <Projects />

      {/* 4. Technical Laboratory & Marquee */}
      <Skills />

      {/* 5. Professional Experience Timeline */}
      <Experience />

      {/* 6. Contact Section & Message Form */}
      <Contact />

      {/* 7. Footer */}
      <Footer />
    </main>
  );
}
