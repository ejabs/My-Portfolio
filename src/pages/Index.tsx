import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />

      <motion.div
        className="min-h-screen bg-background text-foreground"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </motion.div>
    </>
  );
};

export default Index;
