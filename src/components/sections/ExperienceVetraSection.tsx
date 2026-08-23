"use client";

import React from "react";
import {
  Fingerprint,
  Mic,
  Eye,
  Radar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const ExperienceVetraSection: React.FC = () => {
  return (
    <section className="py-12 bg-bg-alt border-y border-line-soft relative overflow-hidden" id="experience">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="eyebrow-tag !mb-0">INTERACTIVE PRODUCT SHOWCASE</span>
              <span className="w-1.5 h-1.5 rounded-full bg-pasture-600 animate-pulse" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-pasture-900 font-bold tracking-tight">
              Experience Vetra in 2 Minutes
            </h3>
            <p className="text-xs sm:text-sm text-ink-soft max-w-[48ch]">
              Explore live working simulations of Vetra&apos;s digital passport, multilingual voice triage, vision scanner, and epidemic radar.
            </p>
          </div>

          {/* 4 Interactive Jump Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 shrink-0">
            <a
              href="#passport"
              className="p-3 rounded-2xl bg-card border border-line hover:border-pasture-900 hover:bg-white transition-all shadow-xs flex flex-col items-center text-center gap-1 group"
            >
              <Fingerprint className="w-5 h-5 text-pasture-900 group-hover:scale-110 transition-transform" />
              <strong className="text-xs font-serif font-bold text-pasture-900 block">Animal Passport</strong>
              <span className="text-[10px] font-mono text-ink-soft">Digital Record</span>
            </a>

            <a
              href="#voice-triage"
              className="p-3 rounded-2xl bg-card border border-line hover:border-pasture-900 hover:bg-white transition-all shadow-xs flex flex-col items-center text-center gap-1 group"
            >
              <Mic className="w-5 h-5 text-gold-600 group-hover:scale-110 transition-transform" />
              <strong className="text-xs font-serif font-bold text-pasture-900 block">Voice Triage</strong>
              <span className="text-[10px] font-mono text-ink-soft">3 Languages</span>
            </a>

            <a
              href="#ai-scanner"
              className="p-3 rounded-2xl bg-card border border-line hover:border-pasture-900 hover:bg-white transition-all shadow-xs flex flex-col items-center text-center gap-1 group"
            >
              <Eye className="w-5 h-5 text-emerald-700 group-hover:scale-110 transition-transform" />
              <strong className="text-xs font-serif font-bold text-pasture-900 block">AI Scanner</strong>
              <span className="text-[10px] font-mono text-ink-soft">Vision Triage</span>
            </a>

            <a
              href="#biosecurity"
              className="p-3 rounded-2xl bg-card border border-line hover:border-pasture-900 hover:bg-white transition-all shadow-xs flex flex-col items-center text-center gap-1 group"
            >
              <Radar className="w-5 h-5 text-alert-600 group-hover:scale-110 transition-transform" />
              <strong className="text-xs font-serif font-bold text-pasture-900 block">Outbreak Radar</strong>
              <span className="text-[10px] font-mono text-ink-soft">Radius Alert</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
