import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simple email validation
    if (!formData.email.includes("@")) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://my-portfolio-backend-4zmr.vercel.app/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your message has been sent.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to send your message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-b from-background to-secondary/30 py-24"
      ref={sectionRef}
    >
      <div className="container">
        <h2 className="text-3xl font-bold flex items-center mb-12 animate-on-scroll">
          <span className="text-gradient-accent">Get In Touch</span>
          <span className="h-px bg-accent/30 flex-grow ml-6"></span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-on-scroll" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="text-foreground/70 mb-8">
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your vision. Feel free to reach out
              using the form or through my contact information.
            </p>

            <div className="space-y-6">
              <ContactItem
                icon={<Mail className="text-primary h-5 w-5" />}
                title="Email"
                content="ejabena@gmail.com"
                href="mailto:ejabena@gmail.com"
              />

              <ContactItem
                icon={<Phone className="text-primary h-5 w-5" />}
                title="Phone"
                content="+(234) 810-534-8110"
                href="tel:+2348105348110"
              />

              <ContactItem
                icon={<MapPin className="text-primary h-5 w-5" />}
                title="Location"
                content="Abuja, Nigeria"
              />
            </div>

            <div className="mt-8">
              <h4 className="font-medium mb-4">
                Connect with me on social media:
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/ejabs/ejabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary hover:bg-primary/10 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="www.linkedin.com/in/joshua-ejabena"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary hover:bg-primary/10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary hover:bg-primary/10 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            <Card className="glass">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-secondary/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-secondary/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone No:
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="Mobile Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-secondary/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="How can I help you?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-secondary/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message here..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-secondary/50"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                    aria-label="Send message"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  href?: string;
}

const ContactItem = ({ icon, title, content, href }: ContactItemProps) => (
  <div className="flex items-start">
    <div className="p-3 rounded-full bg-secondary mr-4">{icon}</div>
    <div>
      <h4 className="font-medium">{title}</h4>
      {href ? (
        <a
          href={href}
          className="text-foreground/70 hover:text-primary hover:underline transition-colors"
        >
          {content}
        </a>
      ) : (
        <p className="text-foreground/70">{content}</p>
      )}
    </div>
  </div>
);

export default Contact;
