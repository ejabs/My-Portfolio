import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowDown,
  Code,
  Laptop,
  Sparkles,
  Github,
  FileCode,
  Globe,
} from "lucide-react";
import { motion } from "@/components/ui/motion";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-reveal");
        }
      },
      { threshold: 0.1 }
    );

    const elements =
      containerRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20"
      ref={containerRef}
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div
        className="absolute -bottom-32 -left-32 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl animate-pulse-slow"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 animate-on-scroll">
            <Sparkles className="w-4 h-4 text-accent" />
            <p className="text-sm font-medium text-foreground/80">
              Full-Stack Developer & Creative Technologist
            </p>
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold mb-2 animate-on-scroll"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-foreground">Hey, I'm </span>
            <span className="text-gradient leading-tight">Joshua Ejabena</span>
          </h1>

          <h2
            className="text-3xl md:text-5xl font-bold mb-6 animate-on-scroll"
            style={{ animationDelay: "0.15s" }}
          >
            <span className="text-gradient-accent leading-tight">
              Creating digital experiences that matter.
            </span>
          </h2>

          <p
            className="text-xl text-foreground/70 leading-relaxed mb-8 max-w-2xl animate-on-scroll"
            style={{ animationDelay: "0.2s" }}
          >
            I'm a passionate full-stack developer specialized in building
            exceptional digital experiences that are both beautiful and
            functional. I bring ideas to life with modern technologies and clean
            code.
          </p>

          <div
            className="flex flex-wrap gap-4 animate-on-scroll"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              className="group rounded-full text-base px-6 hover:glow"
              size="lg"
              onClick={() => scrollToSection("projects")}
            >
              View My Projects
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base px-6 flex items-center gap-2 hover-glow"
              onClick={() => scrollToSection("contact")}
            >
              <Laptop className="w-4 h-4" />
              Let's Work Together
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="rounded-full text-base px-6 flex items-center gap-2 hover:bg-accent/10 hover:text-accent transition-all"
              onClick={() =>
                window.open("https://github.com/ejabs/ejabs", "_blank")
              }
            >
              <Github className="w-4 h-4" />
              GitHub Profile
            </Button>
          </div>

          <div
            className="mt-16 flex flex-wrap items-center gap-6 animate-on-scroll"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Code className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Clean Code</p>
                <p className="text-xs text-foreground/60">
                  Maintainable & Scalable
                </p>
              </div>
            </div>

            <div className="w-px h-8 bg-border hidden md:block"></div>

            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Laptop className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-sm font-medium">Modern Tech</p>
                <p className="text-xs text-foreground/60">
                  Latest Frameworks & Tools
                </p>
              </div>
            </div>

            <div className="w-px h-8 bg-border hidden md:block"></div>

            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <FileCode className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Creative Solutions</p>
                <p className="text-xs text-foreground/60">
                  Innovative Approaches
                </p>
              </div>
            </div>

            <div className="w-px h-8 bg-border hidden md:block"></div>

            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Globe className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-sm font-medium">Global Reach</p>
                <p className="text-xs text-foreground/60">Working Worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hover:text-primary transition-colors"
        onClick={() => scrollToSection("about")}
        aria-label="Scroll to About section"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;
