import { Card, CardContent } from "@/components/ui/card";
import { 
  Calendar, 
  FileCheck, 
  Truck, 
  CheckCircle2, 
  Clock,
  AlertTriangle
} from "lucide-react";

interface MesseChecklistProps {
  regionName: string;
  deliveryTime: string;
}

const MesseChecklist = ({ regionName, deliveryTime }: MesseChecklistProps) => {
  const checklistItems = [
    {
      week: "8-6 Wochen vorher",
      title: "Konzeptphase",
      icon: Calendar,
      tasks: [
        "Messestand-Konzept finalisieren",
        "3D-Modell-Anforderungen definieren",
        "Anfrage mit Maßen und Dateien senden",
        "Budget und Timeline abstimmen"
      ],
      tip: "Je früher die Anfrage, desto mehr Optimierungsmöglichkeiten",
      urgency: "normal"
    },
    {
      week: "4-3 Wochen vorher",
      title: "Produktionsstart",
      icon: FileCheck,
      tasks: [
        "Finale Freigabe erteilen",
        "Farbmuster bei Bedarf prüfen",
        "Produktion starten",
        "Nachbearbeitung planen"
      ],
      tip: "Großformatige Objekte benötigen mehrere Drucktage",
      urgency: "normal"
    },
    {
      week: "2-1 Wochen vorher",
      title: "Versand & Qualitätskontrolle",
      icon: Truck,
      tasks: [
        "Qualitätskontrolle durchführen",
        `Versand nach ${regionName} (${deliveryTime})`,
        "Tracking-Nummer erhalten",
        "Lieferadresse bestätigen"
      ],
      tip: "Express-Versand direkt zum Messestand möglich",
      urgency: "attention"
    },
    {
      week: "Messetag",
      title: "Einsatz am Stand",
      icon: CheckCircle2,
      tasks: [
        "Modelle auspacken & positionieren",
        "Beleuchtung optimal ausrichten",
        "Besucher beeindrucken",
        "Leads generieren"
      ],
      tip: "PLA/PETG-Modelle sind bis zu 70% leichter als Alternativen",
      urgency: "success"
    }
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Clock className="w-4 h-4" />
              Planungs-Checkliste
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ihr Weg zum perfekten Messemodell
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              So planen Sie Ihren Messeauftritt mit 3D-gedruckten Modellen – 
              von der ersten Idee bis zum erfolgreichen Einsatz am Stand
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
            
            <div className="space-y-8">
              {checklistItems.map((item, index) => {
                const Icon = item.icon;
                const isLeft = index % 2 === 0;
                
                return (
                  <div 
                    key={index}
                    className={`relative flex flex-col md:flex-row items-start gap-4 ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-4 border-background hidden md:block ${
                      item.urgency === 'success' ? 'bg-green-500' :
                      item.urgency === 'attention' ? 'bg-amber-500' : 'bg-primary'
                    }`} 
                    style={{ transform: 'translateX(-50%)' }}
                    />
                    
                    {/* Content card */}
                    <div className={`flex-1 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                      <Card className={`border-2 hover:border-primary/30 transition-colors ${
                        item.urgency === 'success' ? 'border-green-200 bg-green-50/30' :
                        item.urgency === 'attention' ? 'border-amber-200 bg-amber-50/30' : ''
                      }`}>
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                              item.urgency === 'success' ? 'bg-green-100 text-green-600' :
                              item.urgency === 'attention' ? 'bg-amber-100 text-amber-600' : 
                              'bg-primary/10 text-primary'
                            }`}>
                              <Icon className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <span className={`text-xs font-bold px-2 py-1 rounded ${
                                  item.urgency === 'success' ? 'bg-green-100 text-green-700' :
                                  item.urgency === 'attention' ? 'bg-amber-100 text-amber-700' :
                                  'bg-primary/10 text-primary'
                                }`}>
                                  {item.week}
                                </span>
                              </div>
                              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                              <ul className="space-y-2 mb-4">
                                {item.tasks.map((task, taskIndex) => (
                                  <li key={taskIndex} className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                    <span>{task}</span>
                                  </li>
                                ))}
                              </ul>
                              <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg text-sm">
                                <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                                <span className="text-muted-foreground"><strong>Tipp:</strong> {item.tip}</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Spacer for opposite side */}
                    <div className="hidden md:block flex-1" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MesseChecklist;
