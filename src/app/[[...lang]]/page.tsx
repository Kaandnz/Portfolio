import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Experience from "@/components/experience/Experience";
import Skills from "@/components/skills/Skills";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="broadside-frame pt-2.5 pb-14 min-[900px]:pt-4 min-[900px]:pb-16">
        <Projects lead={<Hero />} />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
