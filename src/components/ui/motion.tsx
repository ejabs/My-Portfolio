
import React from 'react';

interface MotionProps {
  children: React.ReactNode;
  className?: string;
  initial?: object;
  animate?: object;
  transition?: object;
  whileHover?: object;
  whileTap?: object;
  viewport?: object;
}

export const motion = {
  div: ({ 
    children, 
    className = '', 
    initial = { opacity: 0, y: 20 }, 
    animate = { opacity: 1, y: 0 }, 
    transition = { duration: 0.5 }, 
    ...rest 
  }: MotionProps) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);

    const animationClass = isVisible ? 'animate-reveal' : 'opacity-0 translate-y-5';

    return (
      <div
        ref={ref}
        className={`transition-all duration-500 ${animationClass} ${className}`}
        {...rest}
      >
        {children}
      </div>
    );
  },
  
  h1: ({ 
    children, 
    className = '', 
    initial = { opacity: 0, y: 20 }, 
    animate = { opacity: 1, y: 0 }, 
    transition = { duration: 0.5 }, 
    ...rest 
  }: MotionProps) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const ref = React.useRef<HTMLHeadingElement>(null);

    React.useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);

    const animationClass = isVisible ? 'animate-reveal' : 'opacity-0 translate-y-5';

    return (
      <h1
        ref={ref}
        className={`transition-all duration-500 ${animationClass} ${className}`}
        {...rest}
      >
        {children}
      </h1>
    );
  },
  
  section: ({ 
    children, 
    className = '', 
    initial = { opacity: 0 }, 
    animate = { opacity: 1 }, 
    transition = { duration: 0.5 }, 
    ...rest 
  }: MotionProps) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const ref = React.useRef<HTMLElement>(null);

    React.useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);

    const animationClass = isVisible ? 'animate-reveal' : 'opacity-0';

    return (
      <section
        ref={ref}
        className={`transition-all duration-500 ${animationClass} ${className}`}
        {...rest}
      >
        {children}
      </section>
    );
  }
};
