import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  fullDescription: string;
  features: string[];
  technologies: string[];
}

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [showAll, setShowAll] = useState(false);
  const [projects] = useState<ProjectType[]>([
    {
      id: 9,
      title: "Diadem Foods",
      description:
        "A modern e-commerce platform for food order and delivery with a sleek UI and robust backend.",
      image:
        "https://res.cloudinary.com/daxeovezx/image/upload/v1752689981/Screenshot_2025-07-16_191113_dqn3fh.png",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "https://www.diademfoods.com/",
      fullDescription:
        "A complete e-commerce solution with shopping cart, and order management. This project showcases complex state management, API integration, and responsive design principles.",
      features: [
        "User authentication and profiles",
        "Product search and filtering",
        "Shopping cart with local storage",
        "PayStack payment integration",
        "Order history and tracking",
      ],
      technologies: [
        "React",
        "Redux",
        "Node.js",
        "Express",
        "MongoDB",
        "Stripe API",
        "JWT Authentication",
        "Tailwind CSS",
      ],
    },

    {
      id: 10,
      title: "Oden Lounge UK",
      description:
        "A modern e-commerce platform with a sleek UI and robust backend.",
      image:
        "https://res.cloudinary.com/daxeovezx/image/upload/v1752689980/Screenshot_2025-07-16_191149_ixzil2.png",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "https://www.odenlounge.co.uk/",
      fullDescription:
        "A complete e-commerce solution with Reservation and order management. This project showcases complex state management, API integration, and responsive design principles.",
      features: ["Order history and tracking"],
      technologies: [
        "React",
        "Redux",
        "Node.js",
        "Express",
        "MongoDB",
        "Stripe API",
        "JWT Authentication",
        "Tailwind CSS",
      ],
    },

    {
      id: 11,
      title: "Perfectus Laundi",
      description:
        "A modern platform for a laundry company with a sleek UI and robust backend.",
      image:
        "https://res.cloudinary.com/daxeovezx/image/upload/v1752690494/Screenshot_2025-07-16_192622_smgnfj.png",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "https://perfectus.vercel.app/",
      fullDescription:
        "A complete web solution with bookings, payment processing, and order management. This project showcases complex state management, API integration, and responsive design principles.",
      features: ["PayStack payment integration", "Order history and tracking"],
      technologies: [
        "React",
        "Redux",
        "Node.js",
        "Express",
        "MongoDB",
        "Stripe API",
        "JWT Authentication",
        "Tailwind CSS",
      ],
    },

    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform with a sleek UI and robust backend.",
      image:
        "https://res.cloudinary.com/daxeovezx/image/upload/v1741873780/Screenshot_2025-03-13_134313_jtlngb.png",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "https://shfeet-new-dt5h.vercel.app/",
      fullDescription:
        "A complete e-commerce solution with shopping cart, payment processing, and order management. This project showcases complex state management, API integration, and responsive design principles.",
      features: [
        "User authentication and profiles",
        "Product search and filtering",
        "Shopping cart with local storage",
        "PayStack payment integration",
        "Order history and tracking",
      ],
      technologies: [
        "React",
        "Redux",
        "Node.js",
        "Express",
        "MongoDB",
        "Stripe API",
        "JWT Authentication",
        "Tailwind CSS",
      ],
    },
    {
      id: 2,
      title: "Period Management App",
      description:
        "A health tracking application designed for menstrual cycle management and insights.",
      image:
        "https://res.cloudinary.com/daxeovezx/image/upload/v1741873776/Screenshot_2025-03-13_134550_apiwjq.png",
      tags: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      github: "#",
      demo: "https://periodpal.vercel.app/",
      fullDescription:
        "An intuitive menstrual cycle tracking app that helps users monitor their period, ovulation, and fertility windows with real-time insights. Features include reminders, symptom logging, and health analytics.",
      features: [
        "Accurate period and ovulation predictions",
        "Symptom and mood tracking",
        "Personalized health insights",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "React Context API",
      ],
    },

    {
      id: 8,
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform with a sleek UI and robust backend.",
      image:
        "https://res.cloudinary.com/daxeovezx/image/upload/v1743848188/Screenshot_2025-04-05_111525_jidnzw.png",
      tags: ["React", "Node.js", "Paystack"],
      github: "#",
      demo: "https://www.shfeet.com.ng",
      fullDescription:
        "A complete e-commerce solution with shopping cart, payment processing. This project showcases complex state management, API integration, and responsive design principles.",
      features: [
        "Product search and filtering",
        "Shopping cart with local storage",
        "PayStack payment integration",
        "Order history and tracking",
      ],
      technologies: [
        "React",
        "Redux",
        "Node.js",
        "Express",
        "Paystack API",
        "Tailwind CSS",
      ],
    },

    {
      id: 3,
      title: "FitTrack - Health & Fitness App",
      description:
        "A comprehensive fitness app featuring workout videos, meal plans, and progress tracking.",
      image:
        "https://res.cloudinary.com/daxeovezx/image/upload/v1741873776/Screenshot_2025-03-13_134624_jimbtk.png",
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      github: "#",
      demo: "https://fittrack-xi.vercel.app/",
      fullDescription:
        "FitTrack is a health and fitness app designed to help users achieve their fitness goals through guided workout videos, personalized meal plans, and progress tracking. The app provides AI-generated workout recommendations, a food database for meal tracking, and community support for motivation.",
      features: [
        "Workout videos with expert trainers",
        "Personalized meal plans",
        "Progress tracking dashboard",
        "workout recommendations",
        "Calorie and nutrition tracking",
        "Community and support groups",
      ],
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Redux",
        "Firebase Authentication",
        "Tailwind CSS",
      ],
    },

    {
      id: 4,
      title: "Personal Portfolio",
      description:
        "A sleek and interactive portfolio website showcasing projects, skills, and contact information.",
      image:
        "https://res.cloudinary.com/daxeovezx/image/upload/v1741874457/Screenshot_2025-03-13_140032_dwzpre.png",
      tags: ["React", "Framer Motion", "Tailwind CSS", "Vercel"],
      github: "#",
      demo: "https://joshuaejabena-portfolio.vercel.app/",
      fullDescription:
        "A modern portfolio website designed to showcase projects, technical skills, and experience. It features smooth animations, dynamic content, and a fully responsive layout, providing a visually engaging experience for visitors.",
      features: [
        "Fully responsive and optimized for all devices",
        "Framer Motion animations for smooth transitions",
        "Dynamic project showcase with real-time updates",
        "SEO optimization for better search visibility",
        "Integrated contact form with backend support",
        "Fast loading times with optimized assets",
      ],
      technologies: [
        "React",
        "Next.js",
        "Framer Motion",
        "Tailwind CSS",
        "Vercel",
        "Cloudinary (for media storage)",
        "SEO best practices",
      ],
    },

    {
      id: 5,
      title: "Crypto Dashboard Simulator",
      description:
        "A simulated cryptocurrency dashboard showcasing market trends and portfolio tracking.",
      image:
        "https://res.cloudinary.com/daxeovezx/image/upload/v1741874583/Screenshot_2025-03-13_140243_whombg.png",
      tags: ["React", "Redux", "Chart.js", "Tailwind CSS"],
      github: "#",
      demo: "https://cryptolite-five.vercel.app/",
      fullDescription:
        "A cryptocurrency dashboard simulator that mimics real-world market trends with interactive data visualization. Users can explore simulated price charts, track portfolios, and analyze market trends without relying on live API data.",
      features: [
        "Simulated cryptocurrency price trends",
        "Interactive price charts with historical data",
        "Portfolio tracking with dummy data",
        "Market sentiment analysis simulation",
        "Customizable price alerts",
      ],
      technologies: [
        "React",
        "Redux",
        "Chart.js",
        "Tailwind CSS",
        "Mock API for simulated data",
        "TradingView widgets",
      ],
    },

    {
      id: 7,
      title: "Nigerian Food Timetable Generator",
      description:
        "A meal planning app that generates Nigerian food timetables based on user preferences.",
      image:
        "https://res.cloudinary.com/daxeovezx/image/upload/v1741873776/Screenshot_2025-03-13_134531_z4nfbk.png",
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      github: "#",
      demo: "https://nigerianmeals.vercel.app/",
      fullDescription:
        "A meal planning web app designed for Nigerians looking to create personalized food timetables. Users can select their dietary preferences, budget, and meal frequency to generate a custom meal plan featuring a variety of Nigerian dishes.",
      features: [
        "Generate custom food timetables",
        "Select dietary preferences (vegan, protein-rich, low-carb, etc.)",
        "Meal recommendations based on Nigerian cuisine",
        "Grocery list generation",
        "Save and edit timetables",
      ],
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "JWT Authentication",
      ],
    },
  ]);

  const displayProjects = showAll ? projects : projects.slice(0, 6);

  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

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
    <section id="projects" className="section-padding py-24" ref={sectionRef}>
      <div className="container">
        <h2 className="text-3xl font-bold flex items-center mb-12 animate-on-scroll">
          <span className="text-gradient">Featured Projects</span>
          <span className="h-px bg-primary/30 flex-grow ml-6"></span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project, index) => (
            <Card
              key={project.id}
              className="hover-card glass overflow-hidden animate-on-scroll"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="relative h-56 overflow-hidden bg-secondary group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <Button
                  variant="ghost"
                  className="px-0 text-primary hover:text-primary/80 hover:bg-transparent"
                  onClick={() => setSelectedProject(project)}
                >
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>

              <CardFooter className="p-6 pt-0 flex justify-between">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                  >
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Github className="h-4 w-4" /> Code
                    </Button>
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Demo"
                  >
                    <Button variant="outline" size="sm" className="gap-2">
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </Button>
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button onClick={() => setShowAll(!showAll)} variant="outline">
            {showAll ? "Show Less" : "View All Projects"}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Project Details Dialog */}
      {selectedProject && (
        <Dialog
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
        >
          <DialogContent className="glass max-w-3xl max-h-[90vh] overflow-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">
                {selectedProject.title}
              </DialogTitle>
              <DialogDescription className="opacity-80">
                {selectedProject.description}
              </DialogDescription>
            </DialogHeader>

            <div className="my-4 overflow-hidden rounded-lg">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="space-y-4">
              <p>{selectedProject.fullDescription}</p>

              <div>
                <h4 className="font-bold mb-2">Key Features:</h4>
                <ul className="list-disc list-inside space-y-1 opacity-90">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <DialogFooter className="flex flex-col sm:flex-row gap-4 mt-6">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button variant="outline" className="w-full gap-2">
                    <Github className="h-4 w-4" /> View Code
                  </Button>
                </a>
              )}

              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button className="w-full gap-2">
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </Button>
                </a>
              )}
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default Projects;
