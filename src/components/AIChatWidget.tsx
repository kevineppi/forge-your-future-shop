import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Bot, X, Send, Clock, Euro, Layers } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: Date;
  recommendations?: {
    material?: string;
    estimatedCost?: string;
    deliveryTime?: string;
    priority?: 'express' | 'standard';
  };
}

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: '👋 Hallo! Ich bin Ihr 3D-Druck Assistent. Ich helfe Ihnen bei der Material-Auswahl, Kosten-Schätzung, Verfahrenswahl und beantworte alle Fragen zu 3D-Druck.\n\nWie kann ich Ihnen helfen?',
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickQuestions = [
    { icon: Layers, text: 'Welches Material passt?', query: 'material' },
    { icon: Clock, text: 'Wie lange dauert\'s?', query: 'time' },
    { icon: Euro, text: 'Was kostet mein Projekt?', query: 'cost' },
  ];

  const handleQuickQuestion = (type: string) => {
    let userMessage = '';
    let assistantMessage = '';
    let recommendations = undefined;

    switch (type) {
      case 'material':
        userMessage = 'Welches Material empfehlt ihr für mein Projekt?';
        assistantMessage = 'Die Material-Wahl hängt von Ihrer Anwendung ab:\n\n**PLA:**\n✅ Einfach zu drucken\n✅ Günstig\n✅ Gut für Prototypen & Modelle\n❌ Nicht hitzebeständig\n\n**PETG:**\n✅ Robust & flexibel\n✅ Chemikalienbeständig\n✅ Gut für funktionale Teile\n\n**ASA:**\n✅ UV-beständig\n✅ Witterungsbeständig\n✅ Perfekt für Outdoor\n\n**TPU:**\n✅ Flexibel & elastisch\n✅ Stoßdämpfend\n✅ Für Dichtungen & Griffe\n\nWofür möchten Sie das Teil verwenden?';
        recommendations = {
          material: 'Abhängig von Anwendung',
          estimatedCost: '€20-80',
          deliveryTime: '3-5 Werktage',
          priority: 'standard'
        };
        break;
      case 'time':
        userMessage = 'Wie lange dauert die Fertigung?';
        assistantMessage = 'Die Produktionszeit hängt von Größe & Komplexität ab:\n\n**Kleine Teile (<5cm):**\n⏱️ 2-4 Stunden Druck\n📦 Lieferung in 2-3 Werktagen\n\n**Mittlere Teile (5-15cm):**\n⏱️ 6-16 Stunden Druck\n📦 Lieferung in 3-5 Werktagen\n\n**Große Teile (>15cm):**\n⏱️ 16-48 Stunden Druck\n📦 Lieferung in 5-7 Werktagen\n\n**Express-Service:**\n⚡ Lieferung in 24-48 Stunden\n💰 Aufpreis +40-60%\n\nBenötigen Sie Express-Fertigung?';
        recommendations = {
          deliveryTime: '3-5 Werktage (Standard)',
          estimatedCost: '€25-60',
          priority: 'standard'
        };
        break;
      case 'cost':
        userMessage = 'Was kostet ungefähr mein 3D-Druck Projekt?';
        assistantMessage = 'Die Kosten hängen von mehreren Faktoren ab:\n\n**Einflussfaktoren:**\n📏 Größe des Teils\n⚙️ Komplexität & Details\n🧱 Material-Wahl\n⏱️ Produktionszeit\n⚡ Standard vs. Express\n\n**Beispiel-Kalkulation:**\n**10x10x5cm in PETG:**\n• Material: ~€8-12\n• Produktion: ~€20-30\n• Setup & QC: ~€8-10\n**Gesamt: €40-55**\n\n**Express (+40%):** €55-75\n\nNutzen Sie unseren [Kostenrechner](/kostenrechner) für eine genaue Schätzung oder senden Sie uns Ihr Modell für ein Angebot!';
        recommendations = {
          material: 'Abhängig vom Projekt',
          estimatedCost: '€30-80',
          deliveryTime: '3-5 Werktage',
          priority: 'standard'
        };
        break;
    }

    setMessages(prev => [
      ...prev,
      { role: 'user', content: userMessage, timestamp: new Date() },
      { 
        role: 'assistant', 
        content: assistantMessage, 
        timestamp: new Date(),
        recommendations 
      }
    ]);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    setMessages(prev => [
      ...prev,
      { role: 'user', content: inputValue, timestamp: new Date() },
      { 
        role: 'assistant', 
        content: '🤖 Das ist ein Demo-Modus. Die echte AI-Integration würde hier Ihre Frage analysieren und eine maßgeschneiderte Antwort mit Material-Empfehlungen, Kosten-Schätzungen und Lieferzeiten geben.\n\nKlicken Sie auf eine der Schnellfragen oben für eine Demo-Antwort, oder kontaktieren Sie uns direkt für eine persönliche Beratung!', 
        timestamp: new Date() 
      }
    ]);
    setInputValue('');
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            size="lg"
            onClick={() => setIsOpen(true)}
            className="h-16 w-16 rounded-full shadow-2xl hover-scale bg-gradient-to-br from-primary to-accent hover:from-primary/90 hover:to-accent/90"
          >
            <Bot className="h-8 w-8" />
          </Button>
        )}
      </div>

      {/* Chat Widget */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-[420px] h-[600px] shadow-2xl border-2 flex flex-col animate-fade-in">
          <CardHeader className="border-b bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-lg">3D-Druck Berater</CardTitle>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-muted-foreground">Online & bereit</span>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="hover:bg-destructive/10"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
            {/* Quick Questions */}
            <div className="p-4 border-b bg-muted/30">
              <p className="text-xs font-semibold text-muted-foreground mb-2">Schnellfragen:</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((q, idx) => (
                  <Button
                    key={idx}
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickQuestion(q.query)}
                    className="text-xs hover:bg-primary/10 hover:border-primary"
                  >
                    <q.icon className="w-3 h-3 mr-1" />
                    {q.text}
                  </Button>
                ))}
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[85%] ${msg.role === 'user' ? 'order-2' : 'order-1'}`}>
                      {msg.role === 'assistant' && (
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                            <Bot className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-xs font-semibold text-muted-foreground">
                            AI Assistent
                          </span>
                        </div>
                      )}
                      <div
                        className={`rounded-2xl p-3 ${
                          msg.role === 'user'
                            ? 'bg-primary text-primary-foreground ml-auto'
                            : 'bg-muted'
                        }`}
                      >
                        <p className="text-sm whitespace-pre-line leading-relaxed">
                          {msg.content}
                        </p>
                        {msg.recommendations && (
                          <div className="mt-3 pt-3 border-t border-border/50 space-y-2">
                            {msg.recommendations.material && (
                              <div className="flex items-center gap-2">
                                <Badge variant="secondary" className="text-xs">
                                  <Layers className="w-3 h-3 mr-1" />
                                  {msg.recommendations.material}
                                </Badge>
                              </div>
                            )}
                            {msg.recommendations.estimatedCost && (
                              <div className="flex items-center gap-2">
                                <Badge variant="secondary" className="text-xs">
                                  <Euro className="w-3 h-3 mr-1" />
                                  {msg.recommendations.estimatedCost}
                                </Badge>
                              </div>
                            )}
                            {msg.recommendations.deliveryTime && (
                              <div className="flex items-center gap-2">
                                <Badge variant="secondary" className="text-xs">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {msg.recommendations.deliveryTime}
                                </Badge>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                      {msg.timestamp && (
                        <p className="text-xs text-muted-foreground mt-1 px-2">
                          {msg.timestamp.toLocaleTimeString('de-AT', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t bg-background">
              <div className="flex gap-2">
                <Input
                  placeholder="Ihre Frage zum 3D-Druck..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button 
                  onClick={handleSendMessage}
                  size="icon"
                  className="bg-gradient-to-br from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                💡 Demo-Modus • Powered by AI
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default AIChatWidget;
