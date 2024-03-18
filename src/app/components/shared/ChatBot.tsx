"use client";

import React, { useState } from "react";
import Image from "next/image";

import { Button } from "@/shadcn/components/ui/button";
import { Input } from "@/shadcn/components/ui/input";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="fixed bottom-4 right-0 z-50 space-y-4 lg:right-6 lg:bottom-6">
      {isOpen && (
        <section className="chat-card space-y-3">
          <div className="border p-3 space-y-1">
            <p>👋🏽 Hi!</p>
            <p>
              I am an AI-powered assistant who can help you with ideas, advice
              and questions
            </p>
          </div>
          {/* Input */}
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input disabled type="text" placeholder="How can I help?" />
            <Button disabled className="p-2 rounded-full  border" type="submit">
              <div className="relative  w-5 h-5">
                <Image src="/assets/icons/arrow-up.svg" alt="chat" fill />
              </div>
            </Button>
          </div>
        </section>
      )}
      {/* Chat Icon */}
      <section className="w-fit ml-auto mr-6 rounded-full bg-purple-50 hover:bg-purple-100">
        <Button
          className="flex-center w-11 h-11 p-0"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <div className="relative w-5 h-5">
            <Image
              src={`${
                isOpen ? "/assets/icons/close.svg" : "/assets/icons/search.svg"
              }`}
              alt="chat"
              fill
            />
          </div>
        </Button>
      </section>
    </section>
  );
};

export default ChatBot;
