import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Server, Wrench, Terminal } from "lucide-react";

const Skills = () => {
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

  const skills = {
    frontend: [
      "React",
      "TypeScript",
      "Vite",
      "Next.js",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Tailwind CSS",
      "Redux",
      "Framer Motion",
      "SCSS",
    ],
    backend: [
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "GraphQL",
      "Firebase",
      "AWS",
    ],
    tools: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "Webpack",
      "NPM",
      "Yarn",
      "Vercel",
    ],
  };

  return (
    <section
      id="skills"
      className="section-padding bg-gradient-to-b from-background to-secondary/30 py-24"
      ref={sectionRef}
    >
      <div className="container">
        <h2 className="text-3xl font-bold flex items-center mb-12 animate-on-scroll">
          <span className="text-gradient">Technical Skills</span>
          <span className="h-px bg-primary/30 flex-grow ml-6"></span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <SkillCategory
            title="Frontend Development"
            icon={<Code className="w-8 h-8 text-primary" />}
            skills={skills.frontend}
            delay="0.1s"
            className="animate-on-scroll"
          />

          <SkillCategory
            title="Backend Development"
            icon={<Server className="w-8 h-8 text-primary" />}
            skills={skills.backend}
            delay="0.2s"
            className="animate-on-scroll"
          />

          <SkillCategory
            title="Tools & Platforms"
            icon={<Wrench className="w-8 h-8 text-primary" />}
            skills={skills.tools}
            delay="0.3s"
            className="animate-on-scroll"
          />
        </div>

        <div
          className="mt-16 animate-on-scroll"
          style={{ animationDelay: "0.4s" }}
        >
          <h3 className="text-xl font-bold mb-6 text-gradient-accent">
            My Development Process
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Planning & Research",
                description:
                  "Understanding project requirements and researching the best solutions.",
                icon: <Terminal className="h-6 w-6 text-accent" />,
              },
              {
                title: "Design & Architecture",
                description:
                  "Creating user flows, wireframes, and planning technical architecture.",
                icon: <Terminal className="h-6 w-6 text-accent" />,
              },
              {
                title: "Development & Testing",
                description:
                  "Building with clean code practices and comprehensive testing.",
                icon: <Terminal className="h-6 w-6 text-accent" />,
              },
              {
                title: "Deployment & Maintenance",
                description:
                  "Deploying with CI/CD pipelines and providing ongoing support.",
                icon: <Terminal className="h-6 w-6 text-accent" />,
              },
            ].map((process, index) => (
              <Card key={index} className="hover-card glass">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                    {process.icon}
                  </div>
                  <h4 className="font-bold mb-2">{process.title}</h4>
                  <p className="text-sm text-foreground/70">
                    {process.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface SkillCategoryProps {
  title: string;
  icon?: React.ReactNode;
  skills: string[];
  delay: string;
  className?: string;
}

const SkillCategory = ({
  title,
  icon,
  skills,
  delay,
  className,
}: SkillCategoryProps) => (
  <div className={className} style={{ animationDelay: delay }}>
    <Card className="h-full hover-card glass hover-glow">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          {icon}
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-sm py-1.5 transition-colors hover:bg-accent/20"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

export default Skills;
