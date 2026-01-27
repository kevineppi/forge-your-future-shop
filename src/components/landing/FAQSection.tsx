import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FAQSchema from "@/components/FAQSchema";
import { HelpCircle } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  schemaId?: string;
}

const FAQSection = ({ 
  faqs, 
  title = "Häufige Fragen", 
  subtitle = "Antworten auf die wichtigsten Fragen",
  schemaId
}: FAQSectionProps) => {
  return (
    <section className="py-16 md:py-24">
      <FAQSchema faqs={faqs} city={schemaId} />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium">
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

export default FAQSection;
