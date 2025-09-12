import { useState, useEffect, useRef } from "react";

interface StatItemProps {
  value: string;
  label: string;
  suffix?: string;
  delay?: number;
}

const StatItem = ({ value, label, suffix = "", delay = 0 }: StatItemProps) => {
  const [displayValue, setDisplayValue] = useState("0");
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      if (value === "100%") {
        // Animate percentage
        let current = 0;
        const target = 100;
        const increment = target / 30; // 30 frames
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setDisplayValue("100%");
            clearInterval(timer);
          } else {
            setDisplayValue(Math.floor(current) + "%");
          }
        }, 50);
      } else if (value === "24h") {
        // Animate hours
        let current = 0;
        const target = 24;
        const increment = target / 20;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setDisplayValue("24h");
            clearInterval(timer);
          } else {
            setDisplayValue(Math.floor(current) + "h");
          }
        }, 60);
      } else {
        // For text values like "Regional" and "Kostenlos"
        setDisplayValue(value);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, value, delay]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-primary mb-2 transition-all duration-500">
        {displayValue}
      </div>
      <div className="text-muted-foreground">
        <span className="text-primary font-semibold">
          {label.split(' ')[0]}
        </span>
        {label.split(' ').slice(1).join(' ')}
      </div>
    </div>
  );
};

const AnimatedStats = () => {
  const stats = [
    { value: "100%", label: "Österreichisches Filament", delay: 0 },
    { value: "24h", label: "Express-Service", delay: 200 },
    { value: "Regional", label: "Nachhaltige Fertigung", delay: 400 },
    { value: "Kostenlos", label: "Persönliche Beratung", delay: 600 }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
      {stats.map((stat, index) => (
        <StatItem
          key={index}
          value={stat.value}
          label={stat.label}
          delay={stat.delay}
        />
      ))}
    </div>
  );
};

export default AnimatedStats;