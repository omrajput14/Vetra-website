"use client";

import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Stethoscope, ShieldCheck, FileCheck, Pill, Smartphone, Check, ArrowRight } from "lucide-react";

interface VetSectionProps {
  onOpenPartner: () => void;
}

export const VetSection: React.FC<VetSectionProps> = ({ onOpenPartner }) => {
  const vetTools = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: "VCI Verified Digital Credential",
      description: "State Veterinary Council and VCI credential verification provides an official badge of trust to farmers.",
    },
    {
      icon: <FileCheck className="w-5 h-5 text-emerald-400" />,
      title: "1-Scan Full Medical Lineage",
      description: "Scan any animal tag on arrival to review past surgeries, vaccine history, and previous antibiotic treatments.",
    },
    {
      icon: <Pill className="w-5 h-5 text-emerald-400" />,
      title: "Dosage & Withdrawal Calculator",
      description: "Automated calculations adjusted for species, weight, and lactation status to prevent dangerous under/overdosing.",
    },
    {
      icon: <Smartphone className="w-5 h-5 text-emerald-400" />,
      title: "90-Second Field Charting",
      description: "Fast touch-optimized EVMR templates. Issue digital prescriptions and SMS summaries directly to the farmer.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-vetra-darkest text-white relative overflow-hidden" id="vets">
      {/* Glow */}
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Doctor Workflow Showcase */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="glass-panel-dark rounded-3xl p-6 sm:p-7 border border-emerald-500/30 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-vetra-primary flex items-center justify-center text-white shadow-xs">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Dr. Arvind Deshmukh</div>
                    <div className="text-[10px] text-vetra-mint font-mono">BVSc & AH • VCI #8491-MH</div>
                  </div>
                </div>
                <Badge variant="dark" size="sm">
                  Verified Practitioner
                </Badge>
              </div>

              {/* Sample 90-Second EVMR Live Preview */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-3 text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="font-semibold text-white">Clinical Diagnosis</span>
                  <span className="text-[10px] font-mono text-vetra-mint">TAG: IN-MH-14-84920</span>
                </div>

                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200">
                  <strong className="text-white">Diagnosis:</strong> Subclinical Mastitis (Right Fore)
                </div>

                <div className="space-y-1.5 pt-1">
                  <div className="text-[11px] text-slate-400 font-medium">Prescription & Withdrawal Period:</div>
                  <div className="p-2.5 rounded-xl bg-emerald-950/70 border border-emerald-500/30 text-emerald-200 space-y-1">
                    <div className="font-semibold text-white">Cefquinome Sulfate Infusion (75mg)</div>
                    <div className="text-[10px] text-emerald-300">
                      Dosage: Once daily • Duration: 3 Days
                    </div>
                    <div className="text-[10px] text-amber-300 font-semibold">
                      ⚠ Mandatory Milk Withdrawal: 4 Days (Withhold until Aug 21)
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] text-slate-400">
                  <span>Cryptographically Signed</span>
                  <span className="text-vetra-mint font-mono">EVMR-SYNC: 100% OK</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Vet Network Value */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <SectionHeader
              badgeText="For Veterinary Practitioners"
              badgeVariant="dark"
              isDark
              title={
                <span>
                  Modernizing Field Practice with <span className="text-gradient-emerald">Clinical Precision</span>
                </span>
              }
              subtitle="Save hours on repetitive paperwork, eliminate diagnostic blind spots, and expand your clinical practice with direct verified appointments."
              align="left"
              className="mb-8"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {vetTools.map((tool, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-vetra-surface/50 border border-emerald-500/20 hover:border-emerald-500/40 transition-all space-y-2"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                    {tool.icon}
                  </div>
                  <h4 className="text-base font-bold text-white">{tool.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{tool.description}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button
                variant="gold"
                size="md"
                onClick={onOpenPartner}
                icon={<Stethoscope className="w-4 h-4" />}
                iconPosition="left"
              >
                Apply for Doctor Network Access
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
