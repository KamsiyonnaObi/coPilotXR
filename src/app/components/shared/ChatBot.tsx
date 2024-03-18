"use client";

import React, { useState } from "react";
import Image from "next/image";

import { Button } from "@/shadcn/components/ui/button";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="sticky bottom-6 ml-auto mr-6 w-11 h-11 border-2 border-main-700 rounded-full bg-purple-50 hover:bg-purple-100">
      <Button
        className="flex-center mx-auto p-0"
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
  );
};

export default ChatBot;
