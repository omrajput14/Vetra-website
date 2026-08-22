"use client";

import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { AlertTriangle, Clock, FileX2, ShieldAlert, Pill, TrendingDown, ArrowDown } from "lucide-react";

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      id: "01",
      icon: <Clock className="w-6 h-6 text-amber-600" />,
      title: "Rural Veterinary Scarcity & Travel Delays",
      metric: "40+ km",
      metricLabel: "Average doctor travel distance",
      description: "When an animal falls acutely ill with bloat or dystocia, farmers wait 6-18 hours for veterinary arrival. This delay leads to preventable mortality and irreversible milk yield drops.",
      impact: "Up to 30% preventable livestock fatalities due to acute response lag.",
      vetraSolution: "Instant AI first-aid triage + 15km geo-proximity doctor dispatch.",
    },
    {
      id: "02",
      icon: <FileX2 className="w-6 h-6 text-rose-600" />,
      title: "Zero Continuous Medical Lineage",
      metric: "92%",
      metricLabel: "Records kept on physical paper",
      description: "Paper cards are routinely misplaced or water-damaged. Visiting veterinarians have zero visibility into past antibiotic courses, recurring infections, or previous calving complications.",
      impact: "Repeated trial-and-error diagnoses and dangerous drug counter-interactions.",
      vetraSolution: "1-scan QR code Animal Passport with permanent EVMR cloud sync.",
    },
    {
      id: "03",
      icon: <ShieldAlert className="w-6 h-6 text-red-600" />,
      title: "Delayed Outbreak & Epidemic Surveillance",
      metric: "14 Days",
      metricLabel: "Lag in rural epidemic reporting",
      description: "Contagious diseases like Lumpy Skin Disease (LSD) and Foot-and-Mouth Disease (FMD) spread unchecked between neighboring sheds before district animal husbandry authorities are alerted.",
      impact: "Billions in dairy cooperative revenue lost per epidemic wave.",
      vetraSolution: "Real-time anonymized epidemiological radar with geo-fenced ring alerts.",
    },
    {
      id: "04",
      icon: <Pill className="w-6 h-6 text-amber-600" />,
      title: "Uncontrolled Antibiotic Residues & AMR",
      metric: "Zero",
      metricLabel: "Standard withdrawal tracking",
      description: "Without automated withdrawal tracking, milk from cows undergoing antibiotic therapy enters cooperative collection centers, breeding Antimicrobial Resistance (AMR) in the human food chain.",
      impact: "Public health risks, export rejection, and degraded dairy standards.",
      vetraSolution: "Automated dosage calculators with mandatory milk withholding countdowns.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-y border-slate-200/80 relative" id="problem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="The Clinical Challenge"
          badgeVariant="warning"
          title={
            <span>
              Livestock Healthcare Today is <span className="text-gradient-forest">Broken & Fragmented</span>
            </span>
          }
          subtitle="Over 300 million livestock in India depend on informal paper logs and delayed emergency response. The economic and health cost to farmers is devastating."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((prob) => (
            <Card
              key={prob.id}
              variant="default"
              className="p-6 sm:p-8 flex flex-col justify-between border border-slate-200/90 hover:border-amber-500/40 hover:shadow-xl transition-all"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center">
                    {prob.icon}
                  </div>
                  <span className="text-2xl font-black text-slate-300 font-mono">
                    {prob.id}
                  </span>
                </div>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl font-extrabold text-slate-900">{prob.metric}</span>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {prob.metricLabel}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-vetra-dark mb-2.5">{prob.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{prob.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                <div className="text-xs text-rose-700 font-medium bg-rose-50/70 p-2.5 rounded-xl border border-rose-200/60 flex items-start gap-2">
                  <TrendingDown className="w-4 h-4 shrink-0 mt-0.5" />
                  <span><strong>Clinical Cost:</strong> {prob.impact}</span>
                </div>

                <div className="text-xs text-emerald-800 font-medium bg-emerald-50/70 p-2.5 rounded-xl border border-emerald-200/60 flex items-start gap-2">
                  <span className="font-bold uppercase text-[10px] bg-emerald-600 text-white px-1.5 py-0.5 rounded shrink-0">
                    Vetra Fix
                  </span>
                  <span>{prob.vetraSolution}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
