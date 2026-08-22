"use client";

import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Accordion } from "@/components/ui/Accordion";
import { FAQS } from "@/lib/data";
import { HelpCircle } from "lucide-react";

export const FaqSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-slate-50/70 border-b border-slate-200/80 relative" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="Frequently Asked Questions"
          badgeVariant="primary"
          title={
            <span>
              Clear Answers for <span className="text-gradient-forest">Farmers & Veterinarians</span>
            </span>
          }
          subtitle="Everything you need to know about Vetra's AI clinical scope, offline functionality, VCI practitioner verification, and cooperative integration."
          align="center"
        />

        <Accordion items={FAQS} />
      </div>
    </section>
  );
};
