
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from '@/components/ui/button';
import { ArrowLeft, Github, ExternalLink, Calendar, User, Tag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from '@/components/ui/motion';

const projects = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product management, cart functionality, user authentication, and payment processing.",
    longDescription: "This comprehensive e-commerce solution provides businesses with a robust platform to sell products online. Built with React on the frontend and Node.js on the backend, it features a responsive design, product catalog with filtering and search capabilities, shopping cart functionality, secure checkout process with multiple payment options, user authentication and account management, order tracking, and an admin dashboard for inventory and order management.",
    image: "https://placehold.co/800x600/222/FFF?text=E-Commerce+Platform",
    tech: ["React", "Node.js", "MongoDB", "Express", "Redux", "Stripe API"],
    link: "https://example.com/ecommerce",
    github: "https://github.com/example/ecommerce",
    year: "2023",
    client: "RetailTech Inc.",
    category: "Web Application"
  },
  {
    id: "2",
    title: "Healthcare Management System",
    description: "A comprehensive healthcare management solution for hospitals to manage patient records, appointments, billing, and staff scheduling.",
    longDescription: "This Healthcare Management System revolutionizes how medical facilities manage their operations. Developed with a focus on security and HIPAA compliance, the system streamlines patient management with electronic health records, appointment scheduling with automated reminders, prescription management, billing and insurance processing, staff scheduling and management, inventory tracking for medical supplies, and comprehensive reporting and analytics. The application uses React for the frontend, with a secure Node.js backend and PostgreSQL database.",
    image: "https://placehold.co/800x600/222/FFF?text=Healthcare+System",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Socket.io", "AWS"],
    link: "https://example.com/healthcare",
    github: "https://github.com/example/healthcare",
    year: "2022",
    client: "MedTech Solutions",
    category: "Enterprise Software"
  }
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);
  
  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <div className="container mx-auto px-4 pt-40 pb-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="mb-8">The project you're looking for doesn't exist or has been removed.</p>
          <Link to="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" /> 
              Back to Home
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button variant="ghost" className="mb-8 -ml-4 group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Projects
            </Button>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
                <p className="text-xl text-muted-foreground">{project.description}</p>
              </motion.div>
              
              <motion.div className="rounded-lg overflow-hidden mb-8">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto object-cover rounded-lg shadow-lg" 
                />
              </motion.div>
              
              <motion.div className="space-y-6">
                <h2 className="text-2xl font-semibold">Project Overview</h2>
                <p className="text-foreground/80 leading-relaxed">
                  {project.longDescription}
                </p>
                
                <h2 className="text-2xl font-semibold pt-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-1">
              <Card className="sticky top-32 glass-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Project Details</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Year</p>
                        <p className="text-foreground/80">{project.year}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Client</p>
                        <p className="text-foreground/80">{project.client}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Tag className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Category</p>
                        <p className="text-foreground/80">{project.category}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 space-y-4">
                    <Button className="w-full" onClick={() => window.open(project.link, '_blank')}>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live Project
                    </Button>
                    
                    <Button variant="outline" className="w-full" onClick={() => window.open(project.github, '_blank')}>
                      <Github className="mr-2 h-4 w-4" />
                      View Source Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
