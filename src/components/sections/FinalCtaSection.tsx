"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Download, Stethoscope, ShieldCheck, Smartphone, Sparkles, ArrowRight } from "lucide-react";

interface FinalCtaSectionProps {
  onOpenDownload: () => void;
  onOpenPartner: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenDownload, onOpenPartner }) => {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-slate-900 via-vetra-darkest to-black text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-emerald-500/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-vetra-mint text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Production Ready • Download Today</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
          Healthy Animals. Smarter Farming.{" "}
          <span className="text-gradient-emerald block mt-1">A Thriving Rural Future.</span>
        </h2>

        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Join thousands of progressive dairy farmers and certified veterinarians transforming livestock healthcare with Vetra OS.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Button
            variant="primary"
            size="lg"
            onClick={onOpenDownload}
            icon={<Download className="w-5 h-5" />}
            iconPosition="left"
            className="w-full sm:w-auto shadow-2xl shadow-emerald-500/30 font-bold px-8"
          >
            Download Production APK (v1.0)
          </Button>

          <Button
            variant="dark"
            size="lg"
            onClick={onOpenPartner}
            icon={<Stethoscope className="w-5 h-5 text-vetra-mint" />}
            iconPosition="left"
            className="w-full sm:w-auto border-emerald-500/40 hover:border-emerald-400 font-semibold px-8"
          >
            Join Veterinary Network
          </Button>
        </div>

        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-vetra-mint" />
            <span>100% Free for Smallholder Farmers</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-vetra-mint" />
            <span>VCI Compliance Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-vetra-mint" />
            <span>Zero-Internet Local Sync</span>
          </div>
        </div>
      </div>
    </section>
  );
};
