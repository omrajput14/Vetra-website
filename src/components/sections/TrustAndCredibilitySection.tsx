"use client";

import React from "react";
import {
  ShieldCheck,
  Stethoscope,
  WifiOff,
  Lock,
  CheckCircle2,
  Sparkles,
  Award,
  Users,
} from "lucide-react";

export const TrustAndCredibilitySection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-bg border-t border-line-soft relative overflow-hidden" id="credibility">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-[680px] mb-14 text-left">
          <span className="eyebrow-tag">TECHNOLOGY &amp; CLINICAL FOUNDATION</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-pasture-900 font-semibold mt-3.5 mb-4 leading-[1.12] tracking-tight">
            Built with clinical integrity, field resilience, and responsible AI.
          </h2>
          <p className="text-base sm:text-[17px] text-ink-soft leading-relaxed">
            Vetra is engineered from the ground up for the realities of rural veterinary medicine — bridging technology and clinical practice without compromising on safety or veterinary authority.
          </p>
        </div>

        {/* 4 Core Credibility Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1: Clinical & Practice Alignment */}
          <div className="bg-card border border-line rounded-2xl p-6 sm:p-7 space-y-3.5 tactile-card hover:bg-white transition-all shadow-tactile flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-pasture-900 text-bg flex items-center justify-center shadow-xs">
                <Stethoscope className="w-5 h-5 stroke-[1.8]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-pasture-900 tracking-tight">
                Veterinary Workflow Alignment
              </h3>
              <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">
                Designed around standard clinical practices — structured EVMR records, physical vitals tracking, and certified practitioner verification.
              </p>
            </div>
            <div className="pt-3 border-t border-dashed border-line-soft font-mono text-[10px] font-bold text-pasture-700 uppercase tracking-wider">
              Clinical Standard
            </div>
          </div>

          {/* Pillar 2: Human-in-the-Loop AI */}
          <div className="bg-card border border-line rounded-2xl p-6 sm:p-7 space-y-3.5 tactile-card hover:bg-white transition-all shadow-tactile flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-pasture-900 text-bg flex items-center justify-center shadow-xs">
                <ShieldCheck className="w-5 h-5 stroke-[1.8]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-pasture-900 tracking-tight">
                Assistive, Not Autonomous
              </h3>
              <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">
                AI assists by structuring farmer observations. Diagnosis, prescription, and medical decisions remain strictly with licensed veterinarians.
              </p>
            </div>
            <div className="pt-3 border-t border-dashed border-line-soft font-mono text-[10px] font-bold text-pasture-700 uppercase tracking-wider">
              Responsible AI
            </div>
          </div>

          {/* Pillar 3: Offline-First Architecture */}
          <div className="bg-card border border-line rounded-2xl p-6 sm:p-7 space-y-3.5 tactile-card hover:bg-white transition-all shadow-tactile flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-pasture-900 text-bg flex items-center justify-center shadow-xs">
                <WifiOff className="w-5 h-5 stroke-[1.8]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-pasture-900 tracking-tight">
                Rural Offline-First Core
              </h3>
              <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">
                Engineered for patchy rural networks with local storage and deterministic sync when connectivity restores.
              </p>
            </div>
            <div className="pt-3 border-t border-dashed border-line-soft font-mono text-[10px] font-bold text-pasture-700 uppercase tracking-wider">
              Field Ready
            </div>
          </div>

          {/* Pillar 4: Data Security & Privacy */}
          <div className="bg-card border border-line rounded-2xl p-6 sm:p-7 space-y-3.5 tactile-card hover:bg-white transition-all shadow-tactile flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-pasture-900 text-bg flex items-center justify-center shadow-xs">
                <Lock className="w-5 h-5 stroke-[1.8]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-pasture-900 tracking-tight">
                Data Privacy &amp; Integrity
              </h3>
              <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">
                Role-based access controls protect producer records, animal lineages, and clinical records from unauthorized tampering.
              </p>
            </div>
            <div className="pt-3 border-t border-dashed border-line-soft font-mono text-[10px] font-bold text-pasture-700 uppercase tracking-wider">
              Secure Registry
            </div>
          </div>
        </div>

        {/* Responsible AI Governance Card */}
        <div className="mt-10 p-6 rounded-2xl bg-bg-alt border border-line shadow-inner flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-ink-soft">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-pasture-900 text-bg flex items-center justify-center shrink-0">
              <Award className="w-4 h-4 text-gold-500" />
            </div>
            <p className="font-serif text-sm sm:text-base font-semibold text-pasture-900">
              Medical Governance: AI assists veterinarians. Final diagnosis, prescriptions, and treatment decisions remain exclusively with qualified veterinary professionals.
            </p>
          </div>

          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-pasture-700 bg-card px-3 py-1 rounded-full border border-line shrink-0">
            VCI Aligned
          </span>
        </div>
      </div>
    </section>
  );
};
