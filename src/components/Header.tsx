import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import ResumeButton from "@/components/ResumeButton";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 50);

      // Update active section based on scroll position
      const sections = ["hero", "about", "skills", "projects", "contact"];
      for (const sectionId of sections.reverse()) {
        const section = document.getElementById(sectionId);
        if (section && window.scrollY >= section.offsetTop - 150) {
          setActiveSection(sectionId);
          break;
        }
      }
    };
  }, []);

  useEffect(() => {
    // Disable scrolling when the mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${
        isScrolled
          ? "py-3 bg-opacity-90 backdrop-blur-lg bg-background"
          : "py-5 bg-background"
      }`}
    >
      <div className="container flex justify-between items-center">
        <a
          href="#hero"
          className="flex items-center group"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("hero");
          }}
        >
          <div className="flex items-center">
            {/* Logo Container */}
            <div className="flex items-center space-x-4 transition-transform hover:scale-[1.05]">
              {/* Logo Image */}
              <img
                src="https://res.cloudinary.com/daxeovezx/image/upload/v1752691039/Screenshot_2025-07-16_193525_inlpva.png"
                alt="joshua ejabena logo"
                className="h-8 w-auto object-contain filter dark:invert"
              />
            </div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-6">
            {["about", "skills", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`relative text-foreground/80 hover:text-foreground capitalize font-medium transition-colors 
                  ${activeSection === item ? "text-primary after:w-full" : ""}
                  after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-accent after:transition-all 
                  ${activeSection === item ? "after:w-full" : "after:w-0"} 
                  hover:after:w-full`}
              >
                {item}
              </button>
            ))}
          </nav>
          <div className="flex gap-3 items-center">
            <ResumeButton />
            <ThemeToggle />
            <a
              href="https://github.com/ejabs/ejabs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Button variant="ghost" size="icon" className="hover:text-white">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a
              href="www.linkedin.com/in/joshua-ejabena"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Button variant="ghost" size="icon" className="hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Button variant="ghost" size="icon" className="hover:text-white">
                <Twitter className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-background z-50 p-6 animate-fade-in md:hidden">
            <div className="flex justify-end w-full">
              <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex flex-col items-center justify-center h-full">
              <nav className="flex flex-col gap-8 text-center mb-10">
                {["about", "skills", "projects", "contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-xl font-medium capitalize transition-colors hover:text-primary"
                  >
                    {item}
                  </button>
                ))}
              </nav>
              <div className="flex flex-col gap-4 items-center">
                <a href="/resume.pdf" download>
                  <ResumeButton />
                </a>
                <div className="flex gap-6 mt-4">
                  <ThemeToggle />
                  <a
                    href="https://github.com/ejabs/ejabs"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-6 w-6 hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="www.linkedin.com/in/joshua-ejabena"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-6 w-6 hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-6 w-6 hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
