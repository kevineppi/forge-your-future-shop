import { useEffect, useRef, useState } from "react";
import { Upload, FileCheck, Package, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: Upload,
    num: "01",
    title: "Anfrage senden",
    desc: "CAD-Datei, Skizze oder Beschreibung – wir brauchen nur eine grobe Idee.",
    time: "2 Minuten",
  },
  {
    icon: FileCheck,
    num: "02",
    title: "Angebot erhalten",
    desc: "Transparenter Festpreis innerhalb von 6 Stunden. Kostenlos und unverbindlich.",
    time: "< 6 Stunden",
  },
  {
    icon: Package,
    num: "03",
    title: "Modell erhalten",
    desc: "Express 24h oder Standard 5–7 Tage. Versandkostenfrei ab €100.",
    time: "Ab 24h",
  },
];

const ThreeStepProcess = () => {
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>([false, false, false]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          steps.forEach((_, i) => {
            setTimeout(() => {
              setVisibleSteps((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * 300);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
      {/* Ambient decoration */}
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-50px] w-[300px] h-[300px] rounded-full bg-accent/[0.04] blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <p className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-4">So einfach geht's</p>
          <h2 className="text-4xl md:text-6xl font-black leading-[1.0] tracking-[-0.03em]">
            In 3 Schritten zum<br />
            <span className="text-gradient">fertigen Modell</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-20 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="relative"
                  style={{
                    opacity: visibleSteps[i] ? 1 : 0,
                    transform: visibleSteps[i] ? "translateY(0) scale(1)" : "translateY(40px) scale(0.95)",
                    transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.12}s`,
                  }}
                >
                  <div className="text-center group">
                    {/* Icon circle with premium glow */}
                    <div className="relative mx-auto w-40 h-40 mb-8">
                      {/* Outer glow ring */}
                      <div
                        className="absolute inset-0 rounded-full transition-all duration-700"
                        style={{
                          background: `radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)`,
                          transform: visibleSteps[i] ? "scale(1.4)" : "scale(0.8)",
                          opacity: visibleSteps[i] ? 1 : 0,
                        }}
                      />
                      {/* Main circle - glass */}
                      <div className="absolute inset-3 rounded-full glass-strong flex items-center justify-center
                        group-hover:shadow-[0_0_40px_hsl(var(--primary)/0.12)] transition-all duration-500">
                        <Icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      {/* Step number badge */}
                      <div className="absolute -top-1 -right-1 w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary-glow text-primary-foreground
                        flex items-center justify-center text-xs font-black shadow-lg shadow-primary/30">
                        {step.num}
                      </div>
                    </div>

                    <h3 className="font-black text-xl mb-3 group-hover:text-primary transition-colors tracking-tight">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-xs mx-auto">{step.desc}</p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary glass px-4 py-2 rounded-full">
                      {step.time}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA below steps */}
          <div className="text-center mt-16">
            <Button asChild size="lg" variant="cta" className="rounded-2xl px-12 py-7 text-base group shadow-[0_8px_40px_hsl(var(--primary)/0.3)]">
              <Link to="/kontakt">
                Jetzt Projekt starten
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </Button>
            <p className="text-xs text-muted-foreground mt-5 tracking-wide">Kostenlos · Unverbindlich · Antwort in 6h</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeStepProcess;
