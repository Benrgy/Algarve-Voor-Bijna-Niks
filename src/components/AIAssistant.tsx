import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/enhanced-button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { MessageCircle, Send, Bot, User, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    "Wat zijn de beste stranden voor gezinnen?",
    "Wanneer is het goedkoopst?",
    "Welke hotels raad je aan?",
    "Hoe kom ik het beste naar de Algarve?",
    "Wat zijn lokale geheimtips?"
  ];

  const responses = {
    "Wat zijn de beste stranden voor gezinnen?": "Voor gezinnen raad ik vooral Praia da Rocha, Meia Praia in Lagos en Quarteira aan. Deze stranden hebben goede voorzieningen, reddingsdiensten en zijn makkelijk bereikbaar. Praia de Faro is ook top omdat je er gratis kunt parkeren!",
    "Wanneer is het goedkoopst?": "De goedkoopste maanden zijn november-maart, behalve kerstvakantie. Dan kun je tot 70% besparen! April-mei en oktober zijn ook voordelig met nog steeds lekker weer (20-23°C). Tip: boek op dinsdag of woensdag voor de beste vliegprijzen.",
    "Welke hotels raad je aan?": "Voor budget: Vila Galé hotels bieden goede kwaliteit. Middensegment: Tivoli hotels zijn fantastisch. Luxe: Pine Cliffs Resort is de moeite waard. Kijk altijd naar pakketdeals, die zijn vaak voordeliger dan apart boeken!",
    "Hoe kom ik het beste naar de Algarve?": "Directe vluchten naar Faro zijn het handigst (Ryanair/Transavia vanaf €40-90). Alternatief: vliegen naar Sevilla + 2 uur rijden kan €50-100 goedkoper zijn. Boek 6-8 weken vooruit voor de beste prijzen.",
    "Wat zijn lokale geheimtips?": "Eet bij 'tascas' (lokale kroegjes) voor €8-12 vs €20-30 in toeristische restaurants. Bezoek de vismarkt in Olhão, wandel de kustpaden gratis, en ga naar strand-bars tijdens happy hour. Lokale bussen kosten maar €2 per rit!"
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const response = responses[content as keyof typeof responses] || 
        "Dat is een goede vraag! Voor specifieke informatie raad ik aan om contact op te nemen met onze reisexperts. Ze kunnen je persoonlijk advies geven op basis van jouw wensen en budget. 🌊";

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 bg-primary hover:bg-primary/90 shadow-warm animate-float"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="sr-only">Open AI Assistant</span>
        </Button>
        <Badge 
          variant="secondary" 
          className="absolute -top-2 -left-2 bg-accent text-accent-foreground animate-pulse-glow"
        >
          AI
        </Badge>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-80 h-96">
      <Card className="h-full flex flex-col shadow-warm border-primary/20">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Bot className="w-5 h-5 text-primary" />
              Algarve AI Assistent
              <Badge variant="secondary" className="text-xs">BETA</Badge>
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="p-1"
            >
              <Minimize2 className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Vraag me alles over jouw Algarve vakantie!
          </p>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col p-4 pt-0">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto space-y-3 mb-4">
            {messages.length === 0 && (
              <div className="text-center space-y-3">
                <div className="text-sm text-muted-foreground">
                  Stel me een vraag over de Algarve:
                </div>
                <div className="space-y-2">
                  {quickQuestions.slice(0, 3).map((question) => (
                    <Button
                      key={question}
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickQuestion(question)}
                      className="text-xs h-auto py-2 px-3 w-full text-left"
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.type === 'assistant' && (
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="w-3 h-3 text-primary" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] p-2 rounded-lg text-sm ${
                    message.type === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {message.content}
                </div>
                {message.type === 'user' && (
                  <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <User className="w-3 h-3 text-secondary" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-3 h-3 text-primary" />
                </div>
                <div className="bg-muted p-2 rounded-lg text-sm">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-muted-foreground animate-pulse"></div>
                    <div className="w-1 h-1 rounded-full bg-muted-foreground animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-1 h-1 rounded-full bg-muted-foreground animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Typ je vraag..."
              className="flex-1 text-sm"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage(inputValue);
                }
              }}
            />
            <Button
              onClick={() => handleSendMessage(inputValue)}
              size="sm"
              disabled={!inputValue.trim() || isTyping}
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIAssistant;