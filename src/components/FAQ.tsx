import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Welche 3D-Druck Materialien bieten Sie an?",
      answer: "Wir verwenden ausschließlich österreichisches Filament in höchster Qualität: PLA, PLA+, PETG, ABS, PA12 & PA6 Nylon, verstärkte Materialien und flexible TPU-Materialien. Alle Materialien sind nachhaltig produziert und aus Industrieabfällen hergestellt."
    },
    {
      question: "Wie lange dauert die Fertigung meines 3D-Druck Projekts?",
      answer: "Standard-Lieferzeit beträgt 2-5 Werktage. Für dringende Projekte bieten wir einen Express-Service mit 24h Lieferung an. Die genaue Dauer hängt von Komplexität und Größe Ihres Projekts ab."
    },
    {
      question: "Kann ich meine eigene 3D-Datei hochladen?",
      answer: "Ja! Wir akzeptieren STL, OBJ, 3MF und andere gängige 3D-Dateiformate. Unser Team prüft Ihre Datei auf Druckbarkeit und gibt Ihnen kostenlos Feedback zur Optimierung."
    },
    {
      question: "Wie berechnen sich die Kosten für meinen 3D-Druck?",
      answer: "Die Kosten basieren auf Material, Druckzeit, Komplexität und Stückzahl. Nutzen Sie unseren Kostenrechner für eine erste Schätzung oder senden Sie uns Ihre 3D-Datei für ein präzises Angebot."
    },
    {
      question: "Bieten Sie Mengenrabatte an?",
      answer: "Ja! Ab 5 Stück erhalten Sie 5% Rabatt, ab 10 Stück 10% Rabatt. Für größere Serien erstellen wir individuelle Angebote mit attraktiven Konditionen."
    },
    {
      question: "Welche Nachbearbeitung ist möglich?",
      answer: "Wir bieten Support-Entfernung, Schleifen, Lackierung, und Oberflächenveredelung an. Je nach Material sind auch spezielle Nachbearbeitungen wie Dampfpolieren oder chemisches Glätten möglich."
    },
    {
      question: "Können Sie auch bei der Entwicklung helfen?",
      answer: "Absolut! Unser erfahrenes Team hilft bei der Optimierung Ihrer Designs für den 3D-Druck, erstellt technische Zeichnungen und berät Sie bei der Materialauswahl - alles kostenlos."
    },
    {
      question: "Ist nachhaltiger 3D-Druck wirklich umweltfreundlicher?",
      answer: "Ja! Durch additive Fertigung entsteht bis zu 90% weniger Abfall als bei spanender Fertigung. Unser österreichisches Filament aus Industrieabfällen reduziert den CO2-Fußabdruck zusätzlich erheblich."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Häufig gestellte <span className="text-gradient">Fragen</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Alle wichtigen Informationen zu unserem 3D-Druck Service aus Oberösterreich
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="gradient-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-primary" />
                Häufige Fragen zum 3D-Druck
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;