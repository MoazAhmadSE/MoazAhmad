
'use client';

import { useState } from 'react';
import Lottie from 'lottie-react';
import { CornerDownLeft, Loader, MessageCircle, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { chat } from '@/ai/flows/chat-flow';
import type { ChatInput } from '@/ai/schemas/chat-schema';
import botAnimation from '@/lib/bot-animation.json';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleToggle = () => setIsOpen(prev => !prev);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const chatInput: ChatInput = { message: input };
      const response = await chat(chatInput);
      const assistantMessage: Message = { role: 'assistant', content: response.message };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chatbot error:', error);
      const errorMessage: Message = { role: 'assistant', content: "Sorry, I'm having trouble connecting right now." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button onClick={handleToggle} size="icon" className="rounded-full h-16 w-16 shadow-lg">
          {isOpen ? <X className="h-8 w-8" /> : <MessageCircle className="h-8 w-8" />}
          <span className="sr-only">Toggle Chatbot</span>
        </Button>
      </div>
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-[350px] h-[500px] shadow-2xl flex flex-col animate-fade-in-up">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="w-20 h-20">
                <Lottie animationData={botAnimation} loop={true} />
            </div>
            <div>
                <CardTitle className="font-headline">AI Assistant</CardTitle>
                <CardDescription>Ask me anything!</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="flex-grow overflow-hidden">
            <ScrollArea className="h-full pr-4">
                <div className="space-y-4">
                {messages.map((message, index) => (
                    <div
                    key={index}
                    className={`flex items-end gap-2 ${
                        message.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                    >
                    <div
                        className={`max-w-[80%] rounded-lg p-3 text-sm ${
                        message.role === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        }`}
                    >
                        <p>{message.content}</p>
                    </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex justify-start">
                        <div className="bg-muted rounded-lg p-3">
                            <Loader className="w-5 h-5 animate-spin" />
                        </div>
                    </div>
                )}
                </div>
            </ScrollArea>
          </CardContent>
          <CardFooter>
            <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
                <Input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                    disabled={isLoading}
                />
                <Button type="submit" size="icon" disabled={isLoading}>
                    <CornerDownLeft className="h-4 w-4" />
                    <span className="sr-only">Send</span>
                </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </>
  );
}
