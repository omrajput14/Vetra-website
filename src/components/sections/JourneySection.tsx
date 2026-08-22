"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { JOURNEY_STEPS } from "@/lib/data";
import { QrCode, Bot, Stethoscope, FileCheck2, Activity, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const JourneySection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case "QrCode":
        return <QrCode className="w-5 h-5" />;
      case "Bot":
        return <Bot className="w-5 h-5" />;
      case "Stethoscope":
        return <Stethoscope className="w-5 h-5" />;
      case "FileCheck2":
        return <FileCheck2 className="w-5 h-5" />;
      case "Activity":
      default:
        return <Activity className="w-5 h-5" />;
    }
  };

  const currentStep = JOURNEY_STEPS[activeStepIndex];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80 relative" id="journey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="End-to-End Workflow"
          badgeVariant="primary"
          title={
            <span>
              How Vetra Works: <span className="text-gradient-forest">The 5-Stage Healthcare Journey</span>
            </span>
          }
          subtitle="From animal onboarding and AI triage to field examination and regional epidemic defense—streamlined for zero clinical friction."
          align="center"
        />

        {/* Step Navigation Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-10">
          {JOURNEY_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                className={cn(
                  "p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between",
                  isActive
                    ? "bg-vetra-darkest text-white border-emerald-500/40 shadow-lg ring-1 ring-emerald-500/50"
                    : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={cn(
                      "text-xs font-mono font-bold",
                      isActive ? "text-vetra-mint" : "text-slate-400"
                    )}
                  >
                    STEP {step.number}
                  </span>
                  <div
                    className={cn(
                      "w-7 h-7 rounded-lg flex items-center justify-center",
                      isActive ? "bg-emerald-500/20 text-vetra-mint" : "bg-white text-slate-600 shadow-2xs"
                    )}
                  >
                    {getStepIcon(step.icon)}
                  </div>
                </div>

                <div className="text-xs font-bold truncate">{step.title.split("&")[0]}</div>
              </button>
            );
          })}
        </div>

        {/* Active Step Feature Showcase Card */}
        <div className="bg-gradient-to-br from-slate-900 via-vetra-darkest to-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-emerald-500/20 shadow-2xl relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left: Detailed Information */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-4xl font-black font-mono text-vetra-mint">
                  {currentStep.number}
                </span>
                <Badge variant="dark" size="md">
                  {currentStep.badge}
                </Badge>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                {currentStep.title}
              </h3>

              <p className="text-sm sm:text-base font-medium text-vetra-pale">
                {currentStep.tagline}
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                {currentStep.description}
              </p>

              <div className="space-y-2.5 pt-2">
                {currentStep.bulletPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-vetra-mint shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Step Navigation Controls */}
              <div className="pt-4 flex items-center gap-3">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="text-xs px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-all"
                >
                  ← Previous Step
                </button>
                <button
                  disabled={activeStepIndex === JOURNEY_STEPS.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(JOURNEY_STEPS.length - 1, prev + 1))}
                  className="text-xs px-4 py-2 rounded-xl bg-vetra-primary hover:bg-vetra-light text-white font-semibold disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-all shadow-md shadow-emerald-900/30"
                >
                  Next Step →
                </button>
              </div>
            </div>

            {/* Right: Visual Card Mockup */}
            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <span className="text-xs font-mono text-vetra-mint font-semibold uppercase">
                  Vetra OS Process Simulation
                </span>
                <span className="text-[10px] text-slate-400 font-mono">STEP {currentStep.number}/05</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 space-y-1.5">
                  <div className="text-slate-400 text-[11px]">Active Clinical Module</div>
                  <div className="text-white font-bold text-sm flex items-center gap-2">
                    {getStepIcon(currentStep.icon)}
                    <span>{currentStep.title}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 space-y-1.5">
                  <div className="text-slate-400 text-[11px]">Primary Benefit</div>
                  <div className="text-emerald-300 font-medium">{currentStep.tagline}</div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-200 text-[11px] leading-relaxed">
                  ✓ Deterministic offline synchronization guaranteed. Zero data loss in zero-connectivity zones.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
