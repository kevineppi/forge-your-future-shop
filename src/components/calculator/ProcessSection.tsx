import { Upload, Search, FileCheck, Send } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Upload,
    title: "STL-Datei hochladen",
    desc: "Laden Sie Ihre 3D-Datei hoch. Volumen, Oberfläche und Abmessungen werden sekundenschnell im Browser analysiert – ohne dass Ihre Datei unsere Server verlässt.",
  },
  {
    num: "02",
    icon: Search,
    title: "Material & Parameter wählen",
    desc: "Wählen Sie aus 8 FDM-Materialien, stellen Sie Schichtdicke, Infill und Wandstärke ein. Der Richtpreis aktualisiert sich in Echtzeit bei jeder Änderung.",
  },
  {
    num: "03",
    icon: FileCheck,
    title: "Richtpreis prüfen",
    desc: "Sie sehen sofort eine detaillierte Aufschlüsselung: Materialkosten, Druckkosten, Setup-Pauschale, eventuelle Mengenrabatte und den geschätzten Gesamtpreis.",
  },
  {
    num: "04",
    icon: Send,
    title: "Angebot anfordern",
    desc: "Wenn der Richtpreis passt, senden Sie uns eine unverbindliche Anfrage. Unser Team prüft Ihr Modell persönlich und meldet sich innerhalb von 6 Stunden mit einem individuellen Angebot.",
  },
];

const ProcessSection = () => (
  <section className="py-16 md:py-24 bg-muted/20">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="text-center mb-14">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
          In 4 Schritten zum Angebot
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Vom Upload bis zum persönlichen Angebot – transparent, schnell und ohne Verpflichtung.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {steps.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.num}
              className="relative bg-card border border-border/60 rounded-xl p-6 hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <span className="text-xs font-bold text-primary/40 tracking-widest">{s.num}</span>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mt-1 group-hover:bg-primary/15 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1.5">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-xs text-center text-muted-foreground mt-10">
        Kein Webshop. Kein automatisierter Checkout. Jede Anfrage wird persönlich von unserem Team geprüft.
      </p>
    </div>
  </section>
);

export default ProcessSection;
