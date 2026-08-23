"use client";

import React, { useState } from "react";
import {
  Bot,
  Stethoscope,
  Syringe,
  Pill,
  CheckCircle2,
  Calendar,
  Tag,
  Activity,
  FileText,
  Clock,
  ArrowRight,
  ArrowDown,
  Info,
  Sparkles,
  QrCode,
  ShieldCheck,
  Check,
} from "lucide-react";

interface TimelineItem {
  id: string;
  year: string;
  date: string;
  title: string;
  description: string;
  icon: "robot" | "medical" | "injection" | "medicine";
  tag: string;
}

const TIMELINE_EVENTS: TimelineItem[] = [
  {
    id: "t1",
    year: "2026",
    date: "18 May 2026",
    title: "AI Health Screening",
    description: "Initial symptom assessment completed",
    icon: "robot",
    tag: "AI Triage",
  },
  {
    id: "t2",
    year: "2026",
    date: "20 Apr 2026",
    title: "Veterinary Consultation",
    description: "Consultation record added",
    icon: "medical",
    tag: "Physical Exam",
  },
  {
    id: "t3",
    year: "2026",
    date: "15 Feb 2026",
    title: "Vaccination",
    description: "Vaccination history updated",
    icon: "injection",
    tag: "Immunization",
  },
  {
    id: "t4",
    year: "2026",
    date: "10 Jan 2026",
    title: "Treatment",
    description: "Treatment record added",
    icon: "medicine",
    tag: "Prescription / Care",
  },
];

export const DigitalPassportSection: React.FC = () => {
  const [selectedEventId, setSelectedEventId] = useState<string>("t1");

  const renderIcon = (iconType: TimelineItem["icon"]) => {
    switch (iconType) {
      case "robot":
        return <Bot className="w-4 h-4 text-sky-800" />;
      case "medical":
        return <Stethoscope className="w-4 h-4 text-emerald-800" />;
      case "injection":
        return <Syringe className="w-4 h-4 text-amber-800" />;
      case "medicine":
        return <Pill className="w-4 h-4 text-purple-800" />;
    }
  };

  const renderBadgeBg = (iconType: TimelineItem["icon"]) => {
    switch (iconType) {
      case "robot":
        return "bg-sky-100/90 border-sky-200";
      case "medical":
        return "bg-emerald-100/90 border-emerald-200";
      case "injection":
        return "bg-amber-100/90 border-amber-200";
      case "medicine":
        return "bg-purple-100/90 border-purple-200";
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-bg border-t border-line-soft relative overflow-hidden" id="passport">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-[680px] mb-14 text-left">
          <span className="eyebrow-tag">DIGITAL ANIMAL PASSPORT</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-pasture-900 font-semibold mt-3.5 mb-4 leading-[1.12] tracking-tight">
            Every animal deserves a lifelong health record.
          </h2>
          <p className="text-base sm:text-[17px] text-ink-soft leading-relaxed">
            Vetra transforms animal profiles into structured digital health records, helping farmers and veterinarians access important health information throughout an animal&apos;s lifecycle.
          </p>
        </div>

        {/* Interactive Passport Showcase Console */}
        <div className="bg-card border border-line rounded-3xl p-6 sm:p-9 shadow-tactile relative overflow-hidden tactile-card select-none">
          {/* Top Bar with Demo Label */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-dashed border-line pb-5 mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-pasture-600 animate-pulse" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-pasture-900">
                Sample Animal Record
              </span>
              <span className="font-mono text-[10px] text-ink-soft bg-bg-alt px-2 py-0.5 rounded border border-line">
                Tag ID: DEMO-ANIMAL-001
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-ink-soft">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>Interactive Digital Health Profile</span>
            </div>
          </div>

          {/* 3-Column Enterprise Dashboard Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Column 1: Animal Identity Profile (4 Cols) */}
            <div className="lg:col-span-4 p-5 sm:p-6 rounded-2xl bg-bg-alt border border-line space-y-4 shadow-inner">
              <div className="flex items-center justify-between border-b border-dashed border-line pb-3">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-pasture-700">
                  Animal Identity
                </span>
                <span className="font-mono text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                  <span>Healthy</span>
                </span>
              </div>

              {/* Identity Details Card */}
              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-pasture-900 text-bg flex items-center justify-center font-serif text-xl font-bold shrink-0 shadow-xs">
                    🐄
                  </div>
                  <div>
                    <strong className="block text-pasture-900 font-serif text-xl font-bold tracking-tight">
                      Gauri
                    </strong>
                    <span className="text-[11px] text-ink-soft">Gir (Indigenous Zebu)</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-line-soft">
                  <div className="flex justify-between py-1 border-b border-line-soft/60">
                    <span className="text-ink-soft">Animal Name:</span>
                    <strong className="text-pasture-900">Gauri</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-line-soft/60">
                    <span className="text-ink-soft">Species:</span>
                    <strong className="text-pasture-900">Cattle</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-line-soft/60">
                    <span className="text-ink-soft">Breed:</span>
                    <strong className="text-pasture-900">Gir</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-line-soft/60">
                    <span className="text-ink-soft">Gender:</span>
                    <strong className="text-pasture-900">Female</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-line-soft/60">
                    <span className="text-ink-soft">Registration:</span>
                    <strong className="text-pasture-900">15 Jan 2026</strong>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-ink-soft">Health Status:</span>
                    <strong className="text-emerald-800 font-bold">Healthy</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Health Timeline (5 Cols) */}
            <div className="lg:col-span-5 p-5 sm:p-6 rounded-2xl bg-card border border-line space-y-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-dashed border-line pb-3">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-pasture-700" />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-pasture-700">
                    Health Timeline
                  </span>
                </div>
                <span className="font-mono text-[10px] font-bold text-ink-soft bg-bg-alt px-2 py-0.5 rounded border border-line">
                  Year 2026
                </span>
              </div>

              {/* Timeline Cards */}
              <div className="space-y-2.5">
                {TIMELINE_EVENTS.map((ev) => {
                  const isSelected = selectedEventId === ev.id;
                  return (
                    <div
                      key={ev.id}
                      onClick={() => setSelectedEventId(ev.id)}
                      className={`p-3 rounded-xl border text-xs font-mono transition-all cursor-pointer flex items-start gap-3 ${
                        isSelected
                          ? "bg-bg-alt border-pasture-900/30 shadow-xs"
                          : "bg-card border-line-soft hover:bg-bg-alt/50"
                      }`}
                    >
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border mt-0.5 ${renderBadgeBg(
                          ev.icon
                        )}`}
                      >
                        {renderIcon(ev.icon)}
                      </div>

                      <div className="flex-1 space-y-0.5">
                        <div className="flex items-center justify-between">
                          <strong className="font-serif text-sm font-bold text-pasture-900 flex items-center gap-1">
                            <Check className="w-3 h-3 text-emerald-700 stroke-[3]" />
                            <span>{ev.title}</span>
                          </strong>
                          <span className="text-[10px] text-ink-soft">{ev.date}</span>
                        </div>
                        <p className="text-[11px] text-ink-soft font-sans leading-snug">
                          &ldquo;{ev.description}&rdquo;
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Column 3: Health Overview Panel (3 Cols) */}
            <div className="lg:col-span-3 p-5 sm:p-6 rounded-2xl bg-bg-alt border border-line space-y-3.5 shadow-inner">
              <div className="flex items-center justify-between border-b border-dashed border-line pb-3">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-pasture-700">
                  Health Overview
                </span>
                <Activity className="w-3.5 h-3.5 text-pasture-700" />
              </div>

              {/* Panel Indicators */}
              <div className="space-y-2.5 font-mono text-xs">
                {/* 1. Current Status */}
                <div className="p-3 rounded-xl bg-card border border-line-soft space-y-1">
                  <span className="text-[9.5px] uppercase font-bold text-ink-soft block">
                    Current status
                  </span>
                  <div className="font-bold text-emerald-800 text-xs flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                    <span>Health information available</span>
                  </div>
                </div>

                {/* 2. Latest Update */}
                <div className="p-3 rounded-xl bg-card border border-line-soft space-y-1">
                  <span className="text-[9.5px] uppercase font-bold text-ink-soft block">
                    Latest update
                  </span>
                  <div className="font-bold text-pasture-900 text-xs">
                    Recent veterinary record
                  </div>
                </div>

                {/* 3. Medical History */}
                <div className="p-3 rounded-xl bg-card border border-line-soft space-y-1">
                  <span className="text-[9.5px] uppercase font-bold text-ink-soft block">
                    Medical history
                  </span>
                  <div className="font-bold text-pasture-900 text-xs">
                    View lifetime timeline
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Medical Disclaimer */}
          <div className="mt-6 pt-4 border-t border-dashed border-line flex items-center gap-2 text-xs font-mono text-ink-soft">
            <Info className="w-3.5 h-3.5 text-pasture-700 shrink-0" />
            <span>Displayed records are sample data for demonstration purposes.</span>
          </div>
        </div>

        {/* 4-Step Workflow Pipeline Element Below */}
        <div className="mt-12 p-6 rounded-2xl bg-bg-alt border border-line shadow-xs">
          <div className="text-center mb-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-pasture-700 font-bold">
              Digital Passport Lifecycle Architecture
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
            {/* Step 1 */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <span className="w-7 h-7 rounded-lg bg-pasture-900 text-bg flex items-center justify-center font-bold text-[11px] shrink-0">
                01
              </span>
              <div>
                <strong className="block text-pasture-900 font-semibold text-xs">Animal Registration</strong>
                <span className="text-[10.5px] text-ink-soft">Tag ID &amp; initial profile creation</span>
              </div>
            </div>

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
                <strong className="block text-pasture-900 font-semibold text-xs">Digital Passport Creation</strong>
                <span className="text-[10.5px] text-ink-soft">Structured digital record initialized</span>
              </div>
            </div>

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
                <strong className="block text-pasture-900 font-semibold text-xs">Health Events Recorded</strong>
                <span className="text-[10.5px] text-ink-soft">Consultations, vax &amp; treatments</span>
              </div>
            </div>

            <div className="hidden md:flex items-center text-pasture-700/50">
              <ArrowRight className="w-4 h-4 stroke-[2]" />
            </div>
            <div className="flex md:hidden items-center text-pasture-700/50">
              <ArrowDown className="w-4 h-4 stroke-[2]" />
            </div>

            {/* Step 4 */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <span className="w-7 h-7 rounded-lg bg-pasture-900 text-bg flex items-center justify-center font-bold text-[11px] shrink-0">
                04
              </span>
              <div>
                <strong className="block text-pasture-900 font-semibold text-xs">Complete Lifetime History</strong>
                <span className="text-[10.5px] text-ink-soft">Continuous record across lifecycle</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
