import { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-in" | "slide-up" | "scale-in";
  delay?: number;
}

const AnimatedSection = ({ 
  children, 
  className = "", 
  animation = "fade-in", 
  delay = 0 
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div 
      ref={ref} 
      className={`${className} ${isVisible ? `animate-${animation}` : 'opacity-0'}`}
      style={{ 
        animationFillMode: 'forwards',
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
