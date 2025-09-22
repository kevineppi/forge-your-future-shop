import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StructuredData from "./StructuredData";

const FAQ = () => {
  const faqs = [
    {
      question: "Was kostet 3D-Druck in Österreich?",
      answer: "Die Kosten für 3D-Druck in Österreich hängen von Material, Größe und Komplexität ab. Unser FDM 3D-Druck Service beginnt bereits ab €50 für einfache Prototypen. Als 3D-Druck Dienstleister bieten wir transparente Preisgestaltung und kostenloses Angebot für alle Projekte. Serienfertigung ist besonders kosteneffizient."
    },
    {
      question: "Welche 3D-Druck Materialien verwenden Sie?",
      answer: "Wir verwenden ausschließlich österreichisches Filament aus Industrieabfällen für nachhaltigen 3D-Druck: PLA, PLA+, PETG, ABS und flexible Materialien in allen Farben. Unser FDM 3D-Druck Verfahren eignet sich perfekt für Rapid Prototyping und Serienfertigung mit hochwertigen Materialien."
    },
    {
      question: "Wie schnell ist die Lieferung von 3D-Druck Teilen in Österreich?",
      answer: "Standard-Lieferzeit für unseren 3D-Druckservice beträgt 3-5 Tage österreichweit. Express-Service (24-48h) ist verfügbar für dringende Projekte. Als regionaler 3D-Druck Dienstleister bieten wir schnelle Lieferung in ganz Oberösterreich, Salzburg und Wien."
    },
    {
      question: "Bieten Sie CAD-Design und 3D-Konstruktion an?",
      answer: "Ja, unser 3D-Druck Service umfasst professionelle 3D-Modellierung, CAD-Konstruktion und technische Zeichnungen. Von der Idee zum fertigen Prototyp - wir unterstützen Sie bei allen Phasen Ihres Projekts. Besonders für Firmen 3D-Druck und komplexe Einzelanfertigungen."
    },
    {
      question: "Wo bieten Sie 3D-Druck Service in Österreich an?",
      answer: "Unser 3D-Druckservice ist österreichweit verfügbar. Hauptsitz in Oberösterreich, aber wir liefern in alle Bundesländer: Wien, Salzburg, Tirol, Steiermark, Kärnten, Vorarlberg, Niederösterreich und Burgenland. Online-Bestellung für ganz Österreich möglich."
    },
    {
      question: "Was ist FDM 3D-Druck und welche Vorteile hat es?",
      answer: "FDM (Fused Deposition Modeling) ist unser Hauptverfahren für 3D-Druck. Vorteile: Kosteneffizient, große Materialauswahl, ideal für Prototyping und Serienfertigung. Perfekt für mechanische Teile, Gehäuse und funktionale Prototypen. Nachhaltiger als traditionelle Fertigungsverfahren."
    },
    {
      question: "Kann ich auch kleine Mengen oder Einzelstücke drucken lassen?",
      answer: "Absolut! Unser 3D-Druck Service ist ideal für Einzelanfertigungen und kleine Serien. Keine Mindestmenge erforderlich. Ob ein Prototyp oder 1000 Stück - wir produzieren kosteneffizient. Besonders für Kleinbetriebe und Privatpersonen in Österreich geeignet."
    },
    {
      question: "Welche Dateiformate akzeptieren Sie für 3D-Druck?",
      answer: "Wir akzeptieren alle gängigen 3D-Dateiformate: STL, OBJ, 3MF, STEP, PLY. Falls Sie keine 3D-Datei haben, erstellen wir diese gerne für Sie. Unser CAD-Service umfasst Konstruktion nach Ihren Vorgaben, Zeichnungen oder Mustern."
    }
  ];

  return (
    <>
      <StructuredData type="faq" />
      <section id="faq" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Häufige Fragen zu 3D-Druck in Österreich
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Alles was Sie über unseren <span className="text-primary font-semibold">FDM 3D-Druck Service</span> wissen müssen. 
              Als führender <span className="text-primary font-semibold">3D-Druck Dienstleister in Österreich</span> beantworten wir 
              gerne Ihre Fragen zu <span className="text-primary font-semibold">Rapid Prototyping</span> und <span className="text-primary font-semibold">Serienfertigung</span>.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  FAQ - 3D-Druck Service Österreich
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left text-lg font-semibold">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-4">
              Weitere Fragen zu unserem 3D-Druck Service in Österreich?
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-primary font-semibold hover:underline text-lg"
            >
              Kontaktieren Sie uns für persönliche Beratung →
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;