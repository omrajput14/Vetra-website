"use client";

import React from "react";
import {
  FileStack,
  ShieldAlert,
  MapPin,
  Languages,
  ArrowDown,
  Sparkles,
  Layers,
  Activity,
  Compass,
} from "lucide-react";

export const ProblemStatementSection: React.FC = () => {
  const challenges = [
    {
      num: "CHALLENGE 01 • RECORD SILOS",
      title: "Fragmented Animal Records",
      desc: "Animal history, vaccination records, and treatments are often maintained manually, making long-term health tracking difficult.",
      icon: <FileStack className="w-6 h-6 stroke-[1.6]" />,
      badge: "Record Fragmentation",
    },
    {
      num: "CHALLENGE 02 • LANGUAGE BARRIER",
      title: "Language & Communication Barriers",
      desc: "Language barriers make it difficult for farmers to communicate symptoms and receive timely veterinary guidance. Vetra enables multilingual voice interaction (Marathi, Hindi, English) so farmers can describe symptoms naturally.",
      icon: <Languages className="w-6 h-6 stroke-[1.6]" />,
      badge: "Multilingual Gap",
    },
    {
      num: "CHALLENGE 03 • OUTBREAK LAG",
      title: "Late Disease Detection",
      desc: "Diseases are often identified after visible symptoms appear, increasing the risk of community contagion and financial loss.",
      icon: <ShieldAlert className="w-6 h-6 stroke-[1.6]" />,
      badge: "Detection Delay",
    },
    {
      num: "CHALLENGE 04 • GEOGRAPHIC COVERAGE",
      title: "Limited Veterinary Reach",
      desc: "Veterinarians cover expansive rural territories with limited access to complete past medical lineages prior to farm visits.",
      icon: <MapPin className="w-6 h-6 stroke-[1.6]" />,
      badge: "Distance & Logistics",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-bg border-t border-line-soft relative overflow-hidden" id="challenge">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-[720px] mb-14 text-left">
          <span className="eyebrow-tag">THE LIVESTOCK HEALTH CHALLENGE</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-pasture-900 font-semibold mt-3.5 mb-4 leading-[1.12] tracking-tight">
            Animal health is still managed through fragmented systems.
          </h2>
          <p className="text-base sm:text-[17px] text-ink-soft leading-relaxed">
            Millions of livestock records, language differences, and disease observations remain disconnected across paper registers, individual clinics, and scattered farm data. Vetra creates a unified digital health layer for livestock communities.
          </p>
        </div>

        {/* 4 Problem Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((c, idx) => (
            <div
              key={idx}
              className="bg-card border border-line rounded-2xl p-6 sm:p-7 space-y-4 tactile-card hover:bg-white transition-all shadow-tactile flex flex-col justify-between"
            >
              <div className="space-y-3.5">
                <div className="w-12 h-12 rounded-xl bg-pasture-900 text-bg flex items-center justify-center shadow-xs">
                  {c.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-pasture-900 tracking-tight">
                  {c.title}
                </h3>
                <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">
                  {c.desc}
                </p>
              </div>
              <div className="pt-3.5 border-t border-dashed border-line-soft">
                <span className="font-mono text-[10px] font-semibold text-pasture-700 uppercase tracking-wider block">
                  {c.num}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Transition Statement */}
        <div className="mt-14 pt-10 border-t border-line-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gold-500/20 border border-gold-500/30 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-gold-600" />
            </div>
            <p className="font-serif text-lg sm:text-xl font-medium text-pasture-900 tracking-tight">
              Vetra connects these missing pieces into one livestock health intelligence platform.
            </p>
          </div>

          <a
            href="#product"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-pasture-700 hover:text-pasture-900 transition-colors shrink-0"
          >
            <span>The Unified Platform</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
