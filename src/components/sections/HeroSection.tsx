"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { LivePassportCard } from "./LivePassportCard";
import { Download, Stethoscope, ShieldCheck, WifiOff, Sparkles, ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { METRICS } from "@/lib/data";

interface HeroSectionProps {
  onOpenDownload: () => void;
  onOpenPartner: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDownload, onOpenPartner }) => {
  return (
    <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden bg-hero-glow bg-dot-pattern" id="overview">
      {/* Ambient background blur blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-300/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-[450px] h-[350px] bg-teal-400/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Version Release Capsule */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 border border-emerald-800/15 shadow-xs backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold text-vetra-dark">Vetra v1.0 Production Live</span>
              <span className="text-slate-300">•</span>
              <span className="text-xs text-slate-500 font-medium">Built for Indian Dairy & Livestock</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-vetra-dark tracking-tight leading-[1.08]">
              The Operating System for{" "}
              <span className="text-gradient-forest block mt-1">
                Livestock Healthcare.
              </span>
            </h1>

            {/* Subhead with Clinical Precision */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl">
              Connecting smallholder farmers, commercial dairy herds, and certified veterinarians. Featuring <strong className="text-vetra-dark">Digital Animal Passports</strong>, <strong className="text-vetra-dark">90-second EVMR charting</strong>, <strong className="text-vetra-dark">contextual AI triage</strong>, and zero-internet rural offline synchronization.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenDownload}
                icon={<Download className="w-5 h-5" />}
                iconPosition="left"
                className="shadow-xl shadow-emerald-900/25 justify-center"
              >
                Download Vetra App (APK)
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={onOpenPartner}
                icon={<Stethoscope className="w-5 h-5 text-emerald-700" />}
                iconPosition="left"
                className="bg-white/80 hover:bg-white justify-center"
              >
                Join Veterinary Network
              </Button>
            </div>

            {/* Key Clinical & Technology Trust Badges */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-100/80 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">100% VCI Verified</div>
                  <div className="text-[10px] text-slate-500">Certified Practitioners</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-100/80 flex items-center justify-center shrink-0">
                  <WifiOff className="w-4 h-4 text-emerald-700" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">Offline-First</div>
                  <div className="text-[10px] text-slate-500">Zero Internet Needed</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-100/80 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">Immutable Lineage</div>
                  <div className="text-[10px] text-slate-500">Lifetime EVMR History</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Passport Simulator */}
          <div className="lg:col-span-5 relative">
            <LivePassportCard />
          </div>
        </div>

        {/* Highlight Metrics Strip */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {METRICS.map((metric, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-xs hover:border-emerald-700/30 transition-all"
            >
              <div className="text-3xl sm:text-4xl font-black text-vetra-dark tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs font-bold text-emerald-800 mt-1 uppercase tracking-wider">
                {metric.label}
              </div>
              <p className="text-xs text-slate-500 mt-1">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
