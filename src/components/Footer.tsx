import {
  Github,
  Linkedin,
  Twitter,
  Heart,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-background border-t border-border/20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <img
              src="https://res.cloudinary.com/daxeovezx/image/upload/v1752691039/Screenshot_2025-07-16_193525_inlpva.png"
              alt="joshua ejabena logo"
              className="h-8 w-auto object-contain filter dark:invert"
            />
            <p className="text-foreground/70 mt-2">
              Building exceptional digital experiences with clean, elegant code.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/ejabs/ejabs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-secondary hover:bg-secondary/80 text-foreground/80 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="www.linkedin.com/in/joshua-ejabena"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-secondary hover:bg-secondary/80 text-foreground/80 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-secondary hover:bg-secondary/80 text-foreground/80 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  className="text-foreground/70 hover:text-primary transition-colors hover:underline"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-foreground/70 hover:text-primary transition-colors hover:underline"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-foreground/70 hover:text-primary transition-colors hover:underline"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-foreground/70 hover:text-primary transition-colors hover:underline"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-foreground/70 hover:text-primary transition-colors hover:underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-foreground/70">Web Development</li>
              {/* <li className="text-foreground/70">Mobile Applications</li> */}
              <li className="text-foreground/70">UI/UX Design</li>
              <li className="text-foreground/70">Consulting</li>
              <li className="text-foreground/70">Tech Strategy</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-foreground/70">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:hello@example.com"
                  className="hover:text-primary transition-colors"
                >
                  ejabena@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-foreground/70">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-primary transition-colors"
                >
                  +(234) 810-534-8110
                </a>
              </li>
              <li className="flex items-center gap-2 text-foreground/70">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
            <Button className="mt-4 rounded-full px-4" size="sm">
              Get In Touch
            </Button>
          </div>
        </div>

        <div className="border-t border-border/20 mt-10 pt-6 flex flex-col justify-center items-center text-center">
          <p className="text-foreground/50 text-sm">
            © {currentYear} joshuaejabena. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
