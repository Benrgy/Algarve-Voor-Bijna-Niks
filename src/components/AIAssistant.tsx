import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/enhanced-button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { MessageCircle, Send, Bot, User, Minimize2 } from 'lucide-react';
import { toast } from 'sonner';
import ReactMarkdown from 'react-markdown';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/algarve-chat`;

const quickQuestions = [
  "Wat zijn de beste stranden voor gezinnen?",
  "Wanneer is het goedkoopst om te gaan?",
  "Wat zijn lokale geheimtips?",
];

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const streamChat = async (allMessages: Message[]) => {
    setIsLoading(true);
    let assistantContent = '';

    try {
      const resp = await fetch(CHAT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: allMessages }),
      });

      if (!resp.ok) {
        const err = await resp.json().catch(() => ({ error: 'Onbekende fout' }));
        if (resp.status === 429) toast.error('Te veel verzoeken. Probeer het later opnieuw.');
        else if (resp.status === 402) toast.error('AI-tegoed is op. Neem contact op met de beheerder.');
        else toast.error(err.error || 'Er ging iets mis.');
        setIsLoading(false);
        return;
      }

      if (!resp.body) throw new Error('No response body');

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        let newlineIdx: number;
        while ((newlineIdx = buffer.indexOf('\n')) !== -1) {
          let line = buffer.slice(0, newlineIdx);
          buffer = buffer.slice(newlineIdx + 1);
          if (line.endsWith('\r')) line = line.slice(0, -1);
          if (!line.startsWith('data: ')) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === '[DONE]') break;

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) {
              assistantContent += content;
              setMessages(prev => {
                const last = prev[prev.length - 1];
                if (last?.role === 'assistant') {
                  return prev.map((m, i) =>
                    i === prev.length - 1 ? { ...m, content: assistantContent } : m
                  );
                }
                return [...prev, { role: 'assistant', content: assistantContent }];
              });
            }
          } catch {
            buffer = line + '\n' + buffer;
            break;
          }
        }
      }
    } catch (e) {
      console.error('Stream error:', e);
      toast.error('Verbinding mislukt. Probeer het opnieuw.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = (content: string) => {
    if (!content.trim() || isLoading) return;
    const userMsg: Message = { role: 'user', content };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInputValue('');
    streamChat(newMessages);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 bg-primary hover:bg-primary/90 shadow-lg"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="sr-only">Open AI Assistent</span>
        </Button>
        <Badge
          variant="secondary"
          className="absolute -top-2 -left-2 bg-accent text-accent-foreground text-xs"
        >
          AI
        </Badge>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-[340px] h-[440px]">
      <Card className="h-full flex flex-col shadow-lg border-primary/20">
        <CardHeader className="pb-2 px-4 pt-4">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-base">
              <Bot className="w-5 h-5 text-primary" />
              Algarve Assistent
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="p-1 h-auto">
              <Minimize2 className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Stel je vraag over de Algarve
          </p>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col px-4 pb-4 pt-0 overflow-hidden">
          <div className="flex-1 overflow-y-auto space-y-3 mb-3">
            {messages.length === 0 && (
              <div className="space-y-2 pt-2">
                <p className="text-sm text-muted-foreground text-center">Waar kan ik je mee helpen?</p>
                {quickQuestions.map((q) => (
                  <Button
                    key={q}
                    variant="outline"
                    size="sm"
                    onClick={() => handleSend(q)}
                    className="text-xs h-auto py-2 px-3 w-full text-left justify-start"
                  >
                    {q}
                  </Button>
                ))}
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'assistant' && (
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="w-3 h-3 text-primary" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] p-2.5 rounded-lg text-sm ${
                    msg.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  }`}
                >
                  {msg.role === 'assistant' ? (
                    <div className="prose prose-sm max-w-none dark:prose-invert [&>p]:mb-1.5 [&>p:last-child]:mb-0">
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                  ) : (
                    msg.content
                  )}
                </div>
                {msg.role === 'user' && (
                  <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <User className="w-3 h-3 text-secondary" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && messages[messages.length - 1]?.role !== 'assistant' && (
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-3 h-3 text-primary" />
                </div>
                <div className="bg-muted p-2 rounded-lg">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-pulse" />
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-pulse" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Typ je vraag..."
              className="flex-1 text-sm"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend(inputValue);
                }
              }}
              disabled={isLoading}
            />
            <Button
              onClick={() => handleSend(inputValue)}
              size="sm"
              disabled={!inputValue.trim() || isLoading}
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
