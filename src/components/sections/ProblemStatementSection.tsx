"use client";

import React from "react";
import {
  FileStack,
  ShieldAlert,
  MapPin,
  ArrowDown,
  Sparkles,
  Layers,
  Activity,
  Compass,
} from "lucide-react";

export const ProblemStatementSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-bg border-t border-line-soft relative overflow-hidden" id="challenge">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-[680px] mb-14 text-left">
          <span className="eyebrow-tag">THE LIVESTOCK HEALTH CHALLENGE</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-pasture-900 font-semibold mt-3.5 mb-4 leading-[1.12] tracking-tight">
            Animal health is still managed through fragmented systems.
          </h2>
          <p className="text-base sm:text-[17px] text-ink-soft leading-relaxed">
            Millions of livestock records, vaccinations, and disease observations remain disconnected across paper registers, individual clinics, and scattered farm data. Vetra creates a unified digital health layer for livestock communities.
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {/* Card 1: Fragmented Animal Records */}
          <div className="bg-card border border-line rounded-2xl p-7 sm:p-8 space-y-4 tactile-card hover:bg-white transition-all shadow-tactile flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-pasture-900 text-bg flex items-center justify-center shadow-xs">
                <FileStack className="w-6 h-6 stroke-[1.6]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-pasture-900 tracking-tight">
                Fragmented Animal Records
              </h3>
              <p className="text-sm text-ink-soft leading-relaxed">
                Animal history, vaccination records, and treatments are often maintained manually, making long-term health tracking difficult.
              </p>
            </div>
            <div className="pt-4 border-t border-dashed border-line-soft">
              <span className="font-mono text-[11px] font-semibold text-pasture-700 uppercase tracking-wider">
                CHALLENGE 01 • RECORD SILOS
              </span>
            </div>
          </div>

          {/* Card 2: Late Disease Detection */}
          <div className="bg-card border border-line rounded-2xl p-7 sm:p-8 space-y-4 tactile-card hover:bg-white transition-all shadow-tactile flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-pasture-900 text-bg flex items-center justify-center shadow-xs">
                <ShieldAlert className="w-6 h-6 stroke-[1.6]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-pasture-900 tracking-tight">
                Late Disease Detection
              </h3>
              <p className="text-sm text-ink-soft leading-relaxed">
                Diseases are often identified after visible symptoms appear, increasing the risk of spread and economic loss.
              </p>
            </div>
            <div className="pt-4 border-t border-dashed border-line-soft">
              <span className="font-mono text-[11px] font-semibold text-pasture-700 uppercase tracking-wider">
                CHALLENGE 02 • OUTBREAK LAG
              </span>
            </div>
          </div>

          {/* Card 3: Limited Veterinary Reach */}
          <div className="bg-card border border-line rounded-2xl p-7 sm:p-8 space-y-4 tactile-card hover:bg-white transition-all shadow-tactile flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-pasture-900 text-bg flex items-center justify-center shadow-xs">
                <MapPin className="w-6 h-6 stroke-[1.6]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-pasture-900 tracking-tight">
                Limited Veterinary Reach
              </h3>
              <p className="text-sm text-ink-soft leading-relaxed">
                Veterinarians often cover large rural areas with limited access to complete animal health information.
              </p>
            </div>
            <div className="pt-4 border-t border-dashed border-line-soft">
              <span className="font-mono text-[11px] font-semibold text-pasture-700 uppercase tracking-wider">
                CHALLENGE 03 • GEOGRAPHIC COVERAGE
              </span>
            </div>
          </div>
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
