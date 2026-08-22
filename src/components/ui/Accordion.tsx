"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-slate-200/90 rounded-2xl overflow-hidden bg-white/90 shadow-sm transition-all duration-200 hover:border-emerald-700/30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left font-semibold text-vetra-dark gap-4 cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="text-base sm:text-lg">{question}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-emerald-700 shrink-0 transition-transform duration-300",
            isOpen && "transform rotate-180 text-emerald-800"
          )}
        />
      </button>

      <div
        className={cn(
          "transition-all duration-300 ease-in-out px-5 overflow-hidden",
          isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 pb-0 opacity-0"
        )}
      >
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-3">
          {answer}
        </p>
      </div>
    </div>
  );
};

export const Accordion: React.FC<{ items: AccordionItemProps[]; className?: string }> = ({
  items,
  className,
}) => {
  return (
    <div className={cn("space-y-3.5", className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          defaultOpen={index === 0}
        />
      ))}
    </div>
  );
};
