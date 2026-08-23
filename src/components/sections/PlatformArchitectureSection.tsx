"use client";

import React from "react";
import {
  FileText,
  Mic,
  Radar,
  Check,
  ArrowRight,
  ArrowDown,
  ShieldCheck,
  Fingerprint,
  Stethoscope,
  Network,
} from "lucide-react";

export const PlatformArchitectureSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-bg-alt border-t border-line-soft relative overflow-hidden" id="product">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-[680px] mb-12 text-left">
          <span className="eyebrow-tag">THE VETRA PLATFORM</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-pasture-900 font-semibold mt-3.5 mb-4 leading-[1.12] tracking-tight">
            Three connected systems. One complete livestock health layer.
          </h2>
          <p className="text-base sm:text-[17px] text-ink-soft leading-relaxed">
            Vetra connects animal identity, clinical intelligence, and outbreak prevention into a unified platform built for farmers, veterinarians, and livestock networks.
          </p>
        </div>

        {/* Visual Architecture Flow Indicator */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-card/90 border border-line shadow-xs">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
            {/* Step 1 */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <span className="w-7 h-7 rounded-lg bg-pasture-900 text-bg flex items-center justify-center font-bold text-[11px] shrink-0">
                01
              </span>
              <div>
                <strong className="block text-pasture-900 font-semibold text-xs sm:text-sm">Animal Record</strong>
                <span className="text-[11px] text-ink-soft">Persistent Digital Identity</span>
              </div>
            </div>

            {/* Connector 1 */}
            <div className="hidden md:flex items-center text-pasture-700/50">
              <ArrowRight className="w-4 h-4 stroke-[2]" />
            </div>
            <div className="flex md:hidden items-center text-pasture-700/50">
              <ArrowDown className="w-4 h-4 stroke-[2]" />
            </div>

            {/* Step 2 */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <span className="w-7 h-7 rounded-lg bg-pasture-900 text-bg flex items-center justify-center font-bold text-[11px] shrink-0">
                02
              </span>
              <div>
                <strong className="block text-pasture-900 font-semibold text-xs sm:text-sm">Clinical Intelligence</strong>
                <span className="text-[11px] text-ink-soft">Voice &amp; Vision Triage</span>
              </div>
            </div>

            {/* Connector 2 */}
            <div className="hidden md:flex items-center text-pasture-700/50">
              <ArrowRight className="w-4 h-4 stroke-[2]" />
            </div>
            <div className="flex md:hidden items-center text-pasture-700/50">
              <ArrowDown className="w-4 h-4 stroke-[2]" />
            </div>

            {/* Step 3 */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <span className="w-7 h-7 rounded-lg bg-pasture-900 text-bg flex items-center justify-center font-bold text-[11px] shrink-0">
                03
              </span>
              <div>
                <strong className="block text-pasture-900 font-semibold text-xs sm:text-sm">Disease Prevention</strong>
                <span className="text-[11px] text-ink-soft">Geofenced Radius Alerts</span>
              </div>
            </div>
          </div>
        </div>

        {/* Three Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          {/* Card 1: Digital Animal Passport */}
          <div className="bg-card border border-line rounded-2xl p-7 sm:p-8 space-y-5 tactile-card hover:bg-white transition-all shadow-tactile flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-pasture-900 text-bg flex items-center justify-center shadow-xs">
                  <Fingerprint className="w-6 h-6 stroke-[1.6]" />
                </div>
                <span className="font-mono text-[10px] font-bold text-pasture-700 uppercase tracking-widest bg-pasture-500/10 px-2.5 py-1 rounded-full border border-pasture-500/20">
                  System 01
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-pasture-900 tracking-tight">
                Digital Animal Passport
              </h3>

              <p className="text-sm text-ink-soft leading-relaxed">
                Every animal receives a persistent digital identity containing health history, vaccination records, treatment information, and important lifecycle events.
              </p>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-dashed border-line-soft">
              {[
                "Animal identification",
                "Health timeline",
                "Vaccination records",
                "Treatment history",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-xs text-pasture-900 font-medium">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: AI-Assisted Clinical Intelligence */}
          <div className="bg-card border border-line rounded-2xl p-7 sm:p-8 space-y-5 tactile-card hover:bg-white transition-all shadow-tactile flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-pasture-900 text-bg flex items-center justify-center shadow-xs">
                  <Mic className="w-6 h-6 stroke-[1.6]" />
                </div>
                <span className="font-mono text-[10px] font-bold text-pasture-700 uppercase tracking-widest bg-pasture-500/10 px-2.5 py-1 rounded-full border border-pasture-500/20">
                  System 02
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-pasture-900 tracking-tight">
                AI-Assisted Clinical Intelligence
              </h3>

              <p className="text-sm text-ink-soft leading-relaxed">
                Vetra helps interpret farmer-reported symptoms through multilingual voice input and AI-assisted analysis, helping veterinarians make faster decisions.
              </p>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-dashed border-line-soft">
              {[
                "Voice-based symptom reporting",
                "Multilingual interaction",
                "Clinical information extraction",
                "Veterinary review workflow",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-xs text-pasture-900 font-medium">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Biosecurity & Outbreak Intelligence */}
          <div className="bg-card border border-line rounded-2xl p-7 sm:p-8 space-y-5 tactile-card hover:bg-white transition-all shadow-tactile flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-pasture-900 text-bg flex items-center justify-center shadow-xs">
                  <Radar className="w-6 h-6 stroke-[1.6]" />
                </div>
                <span className="font-mono text-[10px] font-bold text-pasture-700 uppercase tracking-widest bg-pasture-500/10 px-2.5 py-1 rounded-full border border-pasture-500/20">
                  System 03
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-pasture-900 tracking-tight">
                Biosecurity &amp; Outbreak Intelligence
              </h3>

              <p className="text-sm text-ink-soft leading-relaxed">
                Vetra helps identify potential disease risks and supports faster response by connecting livestock health information with outbreak awareness.
              </p>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-dashed border-line-soft">
              {[
                "Disease monitoring",
                "Risk identification",
                "Geographic awareness",
                "Veterinary coordination",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-xs text-pasture-900 font-medium">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
