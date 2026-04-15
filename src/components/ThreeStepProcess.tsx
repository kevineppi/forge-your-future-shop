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
            }, i * 250);
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
    <section ref={sectionRef} className="py-24 bg-background border-t border-border/50 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">So einfach geht's</p>
          <h2 className="text-4xl md:text-5xl font-black leading-[1.0] tracking-tight text-balance">
            In 3 Schritten zum<br />
            <span className="text-primary">fertigen Modell</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-border via-primary/30 to-border" />

            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="relative"
                  style={{
                    opacity: visibleSteps[i] ? 1 : 0,
                    transform: visibleSteps[i] ? "translateY(0)" : "translateY(30px)",
                    transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1}s`,
                  }}
                >
                  <div className="text-center group">
                    {/* Icon circle */}
                    <div className="relative mx-auto w-32 h-32 mb-6">
                      {/* Glow ring */}
                      <div
                        className="absolute inset-0 rounded-full transition-all duration-500"
                        style={{
                          background: `radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 70%)`,
                          transform: visibleSteps[i] ? "scale(1.3)" : "scale(0.8)",
                          opacity: visibleSteps[i] ? 1 : 0,
                        }}
                      />
                      <div className="absolute inset-2 rounded-full border-2 border-primary/20 bg-background flex items-center justify-center
                        group-hover:border-primary/40 group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all duration-500">
                        <Icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      {/* Step number */}
                      <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-primary text-primary-foreground
                        flex items-center justify-center text-xs font-black shadow-lg">
                        {step.num}
                      </div>
                    </div>

                    <h3 className="font-black text-xl mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3 max-w-xs mx-auto">{step.desc}</p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary bg-primary/8 border border-primary/15 px-3 py-1.5 rounded-full">
                      {step.time}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA below steps */}
          <div className="text-center mt-14">
            <Button asChild size="lg" variant="cta" className="rounded-2xl px-10 py-6 text-base group">
              <Link to="/kontakt">
                Jetzt Projekt starten
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <p className="text-xs text-muted-foreground mt-4">Kostenlos · Unverbindlich · Antwort in 6h</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeStepProcess;
