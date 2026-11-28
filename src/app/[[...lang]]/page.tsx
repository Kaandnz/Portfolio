import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Experience from "@/components/experience/Experience";
import Skills from "@/components/skills/Skills";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

/*
 * Section order (the form set, top to bottom):
 *   top ply  #work  : Hero header band + Düzey line items (Projects renders the ply and places Hero in it)
 *   canary   #own   : own products (Projects)
 *   pink     #experience : experience & education (About folded in)
 *   then     #skills, #contact, footer
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="form-set">
        <Projects lead={<Hero />} />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
