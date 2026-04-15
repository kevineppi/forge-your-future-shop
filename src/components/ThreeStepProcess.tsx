import { useEffect, useRef, useState } from "react";
import { Upload, FileCheck, Package, ArrowRight, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  { icon: Upload, num: "01", title: "Anfrage senden", desc: "CAD-Datei, Skizze oder Beschreibung – wir brauchen nur eine grobe Idee.", time: "2 Min" },
  { icon: FileCheck, num: "02", title: "Festpreis erhalten", desc: "Transparentes Angebot in unter 6 Stunden. Kostenlos und unverbindlich.", time: "< 6h" },
  { icon: Package, num: "03", title: "Modell erhalten", desc: "Express 24h oder Standard 5–7 Tage. Versandkostenfrei ab €100.", time: "Ab 24h" },
];

const ThreeStepProcess = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-28 bg-foreground relative overflow-hidden" aria-label="So funktioniert 3D-Druck bei ekdruck">
      {/* Subtle geometric decoration */}
      <div className="absolute top-10 right-10 w-[300px] h-[300px] rounded-full border border-primary/10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[200px] h-[200px] rounded-full border border-primary/5 pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            {/* Left: Headline */}
            <div className="lg:col-span-2"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
              }}>
              <p className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-4">Ablauf</p>
              <h2 className="text-4xl md:text-5xl font-black text-background leading-[1.05] tracking-[-0.03em] mb-6">
                Von der Idee zum<br />
                <span className="text-primary">fertigen Modell.</span>
              </h2>
              <p className="text-background/50 text-sm leading-relaxed mb-8">
                Drei Schritte, kein Bürokratie-Chaos. Durchschnittliche Gesamtdauer: 3–5 Werktage.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="cta" size="lg" className="rounded-2xl px-8 py-6 group">
                  <Link to="/kontakt">
                    Jetzt starten <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" className="rounded-2xl px-6 py-6 bg-background/10 border border-background/20 text-background hover:bg-background/20 font-semibold">
                  <Link to="/kostenrechner">
                    <Calculator className="mr-2 w-4 h-4" /> Kostenrechner
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right: Steps - vertical timeline */}
            <div className="lg:col-span-3 relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/15 to-transparent hidden md:block" />

              <div className="space-y-6">
                {steps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.num}
                      style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateX(0)" : "translateX(40px)",
                        transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + i * 0.15}s`,
                      }}>
                      <div className="flex gap-6 md:pl-16 group">
                        {/* Step number - positioned on the timeline */}
                        <div className="hidden md:flex absolute left-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/20 items-center justify-center text-sm font-black text-primary">
                          {step.num}
                        </div>
                        <div className="flex-1 bg-background/[0.06] hover:bg-background/[0.1] border border-background/[0.08] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1.5">
                                <h3 className="font-bold text-background text-base tracking-tight">{step.title}</h3>
                                <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{step.time}</span>
                              </div>
                              <p className="text-background/50 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeStepProcess;
