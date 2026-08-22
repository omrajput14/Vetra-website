"use client";

import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { QrCode, Bot, Stethoscope, FileText, Check, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

interface SolutionSectionProps {
  onOpenDemo: () => void;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({ onOpenDemo }) => {
  const pillars = [
    {
      id: "passport",
      badge: "Core Identity",
      badgeVariant: "primary" as const,
      icon: <QrCode className="w-6 h-6 text-emerald-600" />,
      title: "Digital Animal Passport",
      tagline: "Cryptographic, printable & scannable lifetime identification.",
      description: "Every cow, buffalo, and goat receives a permanent digital identity linked to physical ear-tags or biometric photos. Scannable offline by any smartphone.",
      features: [
        "Instant biometric photo & tag identification",
        "Offline-verifiable QR code cryptographic checksum",
        "Immutable breeding, pedigree & ownership history",
        "Permanent transfer of records during livestock sale",
      ],
      colorGradient: "from-emerald-500/10 to-teal-500/10",
    },
    {
      id: "ai-triage",
      badge: "Assistive Intelligence",
      badgeVariant: "success" as const,
      icon: <Bot className="w-6 h-6 text-teal-600" />,
      title: "AI Clinical Triage Advisor",
      tagline: "First-line decision support in farmer's native language.",
      description: "Farmers capture symptoms via voice, text, or camera. Vetra's ICAR-aligned AI assesses urgency (Green / Amber / Red) and guides first-aid while escalating to doctors.",
      features: [
        "Multilingual input (Hindi, Marathi, English voice/text)",
        "Dermatological lesion & symptom image screening",
        "Differential diagnosis suggestions for field doctors",
        "Zero hallucination clinical safety guardrails",
      ],
      colorGradient: "from-teal-500/10 to-cyan-500/10",
    },
    {
      id: "vet-network",
      badge: "Verified Professionals",
      badgeVariant: "warning" as const,
      icon: <Stethoscope className="w-6 h-6 text-amber-600" />,
      title: "VCI Doctor Network",
      tagline: "100% credentialed veterinary practitioners within 15 km.",
      description: "Eliminates rural healthcare blindspots. Matches emergency cases to registered veterinary officers with GPS routing, case history pre-briefing, and tele-triage.",
      features: [
        "VCI & State Council registration verification",
        "15 km geo-proximity automated doctor matching",
        "Pre-arrival vital signs & triage summary dispatch",
        "Structured tele-consultations for remote follow-ups",
      ],
      colorGradient: "from-amber-500/10 to-emerald-500/10",
    },
    {
      id: "evmr-timeline",
      badge: "Clinical Accuracy",
      badgeVariant: "dark" as const,
      icon: <FileText className="w-6 h-6 text-emerald-400" />,
      title: "90-Second EVMR Engine",
      tagline: "Fastest digital field prescription and health charting.",
      description: "Replaces lost paper notebooks with structured electronic veterinary medical records. Features bodyweight dosage calculators and automated withdrawal period protection.",
      features: [
        "1-scan medical history retrieval before prescribing",
        "Automated dosage calculation by weight and species",
        "Milk & meat withdrawal period countdowns (AMR Defense)",
        "Zero-latency local SQLite offline storage",
      ],
      colorGradient: "from-emerald-950 to-vetra-darkest",
      isDark: true,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-50/70 relative" id="solution">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="The Vetra Ecosystem"
          badgeVariant="success"
          title={
            <span>
              One Platform. <span className="text-gradient-forest">Complete Animal Healthcare.</span>
            </span>
          }
          subtitle="A unified veterinary operating system designed for extreme field conditions, rural connectivity constraints, and enterprise clinical compliance."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar) => (
            <Card
              key={pillar.id}
              variant={pillar.isDark ? "glass-dark" : "default"}
              className={`p-7 sm:p-9 flex flex-col justify-between border ${
                pillar.isDark
                  ? "border-emerald-500/30 bg-vetra-darkest text-white shadow-2xl"
                  : "border-slate-200/90 hover:border-emerald-600/40 bg-white"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      pillar.isDark ? "bg-vetra-surface border border-emerald-500/30" : "bg-emerald-50 border border-emerald-200/70"
                    }`}
                  >
                    {pillar.icon}
                  </div>
                  <Badge variant={pillar.isDark ? "dark" : pillar.badgeVariant} size="sm">
                    {pillar.badge}
                  </Badge>
                </div>

                <h3
                  className={`text-2xl font-extrabold tracking-tight mb-1.5 ${
                    pillar.isDark ? "text-white" : "text-vetra-dark"
                  }`}
                >
                  {pillar.title}
                </h3>
                <p
                  className={`text-xs font-semibold mb-3 ${
                    pillar.isDark ? "text-vetra-mint" : "text-emerald-700"
                  }`}
                >
                  {pillar.tagline}
                </p>
                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    pillar.isDark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {pillar.description}
                </p>

                <div className="space-y-2.5">
                  {pillar.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          pillar.isDark
                            ? "bg-emerald-500/20 text-vetra-mint"
                            : "bg-emerald-100 text-emerald-700"
                        }`}
                      >
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span
                        className={
                          pillar.isDark ? "text-slate-200" : "text-slate-700 font-medium"
                        }
                      >
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-200/40 flex items-center justify-between">
                <a
                  href="#simulator"
                  className={`text-xs font-bold inline-flex items-center gap-1.5 transition-colors cursor-pointer ${
                    pillar.isDark
                      ? "text-vetra-mint hover:text-white"
                      : "text-emerald-800 hover:text-emerald-950"
                  }`}
                >
                  <span>Test in Simulator</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
