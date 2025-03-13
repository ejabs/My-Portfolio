import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, Building, User } from "lucide-react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-reveal");
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements =
      sectionRef.current?.querySelectorAll(".animate-on-scroll");
    animatedElements?.forEach((el) => observer.observe(el));

    return () => {
      animatedElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="section-padding py-24" ref={sectionRef}>
      <div className="container">
        <h2 className="text-3xl font-bold flex items-center mb-12 animate-on-scroll">
          <span className="text-gradient-accent">About Me</span>
          <span className="h-px bg-accent/30 flex-grow ml-6"></span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll" style={{ animationDelay: "0.1s" }}>
            <p className="text-lg mb-6 text-foreground/80 leading-relaxed">
              I'm a results-driven full-stack developer with 4+ years of
              experience building scalable, high-performance web applications.
            </p>
            <p className="text-lg mb-6 text-foreground/80 leading-relaxed">
              I specialize in crafting intuitive, responsive, and visually
              striking digital experiences, blending performance optimization
              with modern UI design.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm always exploring innovative solutions, staying ahead of
              industry trends, and collaborating on impactful projects.
            </p>
          </div>

          <div
            className="space-y-6 animate-on-scroll"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="text-xl font-bold mb-4 text-gradient">
              Professional Journey
            </h3>

            <div className="space-y-6">
              {[
                {
                  period: "2023 - 2025",
                  role: "Full-Stack Developer",
                  company: "JPT Technologies.",
                  description:
                    "Leading development of enterprise web applications",
                  icon: <CalendarDays className="h-4 w-4 text-primary" />,
                },
                {
                  period: "2022 - 2023",
                  role: "Front-End Developer",
                  company: "Digital Solutions Co.",
                  description: "Built responsive, accessible user interfaces",
                  icon: <Building className="h-4 w-4 text-primary" />,
                },
                {
                  period: "2021-2022",
                  role: "Web Developer",
                  company: "Freelancing",
                  description: "Developed custom websites for various clients",
                  icon: <User className="h-4 w-4 text-primary" />,
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="hover-card glass overflow-hidden group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-primary mb-1">
                      {item.icon}
                      {item.period}
                    </div>
                    <div className="font-bold group-hover:text-primary transition-colors">
                      {item.role}
                    </div>
                    <div className="text-sm text-foreground/70 mb-2">
                      {item.company}
                    </div>
                    <p className="text-sm text-foreground/80">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
