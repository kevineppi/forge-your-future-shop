import { useEffect, useRef, useState } from "react";
import { Upload, FileCheck, Package, ArrowRight, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: Upload,
    num: "01",
    title: "Anfrage senden",
    desc: "CAD-Datei, Skizze oder Beschreibung hochladen – wir brauchen nur eine grobe Idee.",
    time: "2 Minuten",
  },
  {
    icon: FileCheck,
    num: "02",
    title: "Festpreis erhalten",
    desc: "Transparentes Angebot innerhalb von 6 Stunden. Kostenlos und unverbindlich.",
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-28 bg-background relative overflow-hidden" aria-label="So funktioniert 3D-Druck bei ekdruck">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <p className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-4">So einfach geht's</p>
          <h2 className="text-4xl md:text-5xl font-black leading-[1.05] tracking-[-0.03em]">
            In 3 Schritten zum{" "}
            <span className="text-gradient">fertigen 3D-Modell</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

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
                    <div className="relative mx-auto w-32 h-32 mb-6">
                      <div className="absolute inset-2 rounded-full glass-strong flex items-center justify-center
                        group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)] transition-all duration-500">
                        <Icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-glow text-primary-foreground
                        flex items-center justify-center text-xs font-black shadow-lg shadow-primary/30">
                        {step.num}
                      </div>
                    </div>

                    <h3 className="font-black text-lg mb-2 group-hover:text-primary transition-colors tracking-tight">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3 max-w-xs mx-auto">{step.desc}</p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary glass px-3 py-1.5 rounded-full">
                      {step.time}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dual CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-14">
            <Button asChild size="lg" variant="cta" className="rounded-2xl px-10 py-7 text-base group shadow-[0_8px_40px_hsl(var(--primary)/0.3)]">
              <Link to="/kontakt">
                Jetzt Projekt starten
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="cta-outline" className="rounded-2xl px-8 py-7 text-base">
              <Link to="/kostenrechner">
                <Calculator className="mr-2 w-4 h-4" />
                Preis berechnen
              </Link>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-5 text-center tracking-wide">Kostenlos · Unverbindlich · Antwort in 6h</p>
        </div>
      </div>
    </section>
  );
};

export default ThreeStepProcess;
