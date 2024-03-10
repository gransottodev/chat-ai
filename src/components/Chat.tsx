'use client'
import React from "react";
import { useChat, Message } from "ai/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";

interface ChatMessage extends Message {
  id: string;
}

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({ api: '/api/chat' });

  return (
    <Card className="w-[440px]">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>Using Vercel SDK to create a chat bot.</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="lg:h-[420px] 2xl:h-[520px] pr-4 w-full">
          {messages.map((message: ChatMessage) => (
            <div key={message.id} className="flex gap-3 text-slate-700 text-sm mb-4">
              {message.role === "user" && (
                <Avatar>
                  <AvatarFallback>VG</AvatarFallback>
                  <AvatarImage src="https://github.com/gransottodev.png" />
                </Avatar>
              )}
              {message.role === "assistant" && (
                <Avatar>
                  <AvatarFallback>VG</AvatarFallback>
                  <AvatarImage src="https://github.com/openai.png" />
                </Avatar>
              )}
              <p className="leading-relaxed">
                <span className="block font-bold text-slate-700">
                  {message.role === "user" ? "User" : "AI"}
                </span>{" "}
                {message.content}
              </p>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSubmit} className="w-full flex gap-2">
          <Input placeholder="How can I help you?" value={input} onChange={handleInputChange} />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
