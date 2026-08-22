"use client";

import React from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Heart, Globe2, ShieldCheck, Sparkles } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80 relative" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="primary" dot>
            Our Mission & Vision
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-vetra-dark tracking-tight leading-tight">
            Building the Digital Healthcare Rails for{" "}
            <span className="text-gradient-forest">300 Million Animals</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Livestock is the financial backbone of over 80 million rural households across India. Yet, clinical care for animals has remained trapped in paper registers, delayed emergency responses, and preventable disease losses.
          </p>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            <strong className="text-vetra-dark">Vetra was founded to change this.</strong> By bridging veterinary science, high-availability mobile engineering, and responsible AI triage, we empower farmers to protect their livelihoods and help veterinarians deliver life-saving care with clinical precision.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
            <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200/70 text-left space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                <Heart className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-vetra-dark text-base">One-Health Vision</h4>
              <p className="text-xs text-slate-600">
                Protecting animal health directly safeguards human nutrition, milk purity, and rural prosperity.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200/70 text-left space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                <Globe2 className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-vetra-dark text-base">Rural First</h4>
              <p className="text-xs text-slate-600">
                Every screen, button, and sync mechanism is designed for low-bandwidth rural conditions and local languages.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200/70 text-left space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-vetra-dark text-base">Clinical Integrity</h4>
              <p className="text-xs text-slate-600">
                Strict adherence to Veterinary Council of India regulations and ICAR scientific standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
