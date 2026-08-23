"use client";

import React from "react";
import {
  HeartPulse,
  Stethoscope,
  Radar,
  CheckCircle2,
  Clock,
  Sparkles,
  Milestone,
  ArrowRight,
} from "lucide-react";

export const ImpactAndVisionSection: React.FC = () => {
  const pillars = [
    {
      id: "healthcare",
      title: "Better Animal Healthcare",
      desc: "Helping farmers maintain continuous health records and make informed decisions through accessible digital tools.",
      icon: <HeartPulse className="w-6 h-6 text-rose-700 stroke-[1.8]" />,
      badge: "Producer & Herd Care",
    },
    {
      id: "access",
      title: "Stronger Veterinary Access",
      desc: "Connecting livestock owners with structured veterinary workflows and improving communication between farmers and professionals.",
      icon: <Stethoscope className="w-6 h-6 text-emerald-800 stroke-[1.8]" />,
      badge: "Clinical Continuity",
    },
    {
      id: "awareness",
      title: "Smarter Disease Awareness",
      desc: "Supporting early awareness of livestock health risks through connected data and responsible AI assistance.",
      icon: <Radar className="w-6 h-6 text-pasture-700 stroke-[1.8]" />,
      badge: "Biosecurity Intelligence",
    },
  ];

  const roadmapPhases = [
    {
      phase: "Phase 1",
      status: "Current Stage • Working MVP",
      statusColor: "bg-emerald-100 text-emerald-900 border-emerald-200",
      title: "Working MVP",
      items: [
        "Farmer mobile application (multilingual)",
        "Veterinarian workflows & EVMR charting",
        "Digital animal records & passport",
        "AI-assisted preliminary advisory",
      ],
      isCurrent: true,
    },
    {
      phase: "Phase 2",
      status: "Future Roadmap • Planned",
      statusColor: "bg-bg-alt text-ink-soft border-line",
      title: "Connected Healthcare Network",
      items: [
        "Expanded regional veterinary network",
        "Improved multimodal health intelligence",
        "Enhanced offline synchronization",
        "Broader dialect & accessibility support",
      ],
      isCurrent: false,
    },
    {
      phase: "Phase 3",
      status: "Future Roadmap • Vision",
      statusColor: "bg-bg-alt text-ink-soft border-line",
      title: "Livestock Health Infrastructure",
      items: [
        "Large-scale cooperative & dairy integration",
        "Advanced epidemiological analytics",
        "Automated preventive ring safeguards",
        "Holistic livestock health registry",
      ],
      isCurrent: false,
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-bg border-t border-line-soft relative overflow-hidden" id="vision">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-[720px] mb-14 text-left">
          <span className="eyebrow-tag">OUR VISION</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-pasture-900 font-semibold mt-3.5 mb-4 leading-[1.12] tracking-tight">
            Building the digital health infrastructure for livestock communities.
          </h2>
          <p className="text-base sm:text-[17px] text-ink-soft leading-relaxed">
            Vetra aims to make animal healthcare more accessible, connected, and data-driven by bringing farmers, veterinarians, and livestock health information into one ecosystem.
          </p>
        </div>

        {/* 3 Impact Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-card border border-line rounded-3xl p-6 sm:p-7 space-y-4 tactile-card hover:bg-white transition-all shadow-tactile flex flex-col justify-between"
            >
              <div className="space-y-3.5">
                <div className="w-12 h-12 rounded-2xl bg-bg-alt border border-line-soft flex items-center justify-center shadow-xs">
                  {pillar.icon}
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-xl font-bold text-pasture-900 tracking-tight">
                    {pillar.title}
                  </h3>
                  <span className="font-mono text-[10.5px] font-bold text-pasture-700 uppercase tracking-wider block">
                    {pillar.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-ink-soft leading-relaxed font-sans">
                  &ldquo;{pillar.desc}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-dashed border-line-soft font-mono text-[10.5px] text-pasture-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>Foundational Design Principle</span>
              </div>
            </div>
          ))}
        </div>

        {/* Future Roadmap Timeline */}
        <div className="bg-card border border-line rounded-3xl p-6 sm:p-9 shadow-tactile relative overflow-hidden tactile-card space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-dashed border-line pb-5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Milestone className="w-4 h-4 text-pasture-700" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-pasture-900">
                  Phased Development Strategy
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-pasture-900">
                Building Vetra step by step
              </h3>
            </div>
            <span className="font-mono text-[11px] font-semibold text-ink-soft bg-bg-alt px-3 py-1 rounded-full border border-line self-start sm:self-auto">
              Future roadmap • Transparent Phasing
            </span>
          </div>

          {/* 3-Column Phase Roadmap Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
            {roadmapPhases.map((item, idx) => (
              <div
                key={idx}
                className={`p-5 sm:p-6 rounded-2xl border space-y-4 flex flex-col justify-between transition-all ${
                  item.isCurrent
                    ? "bg-bg-alt/90 border-pasture-900/40 shadow-xs"
                    : "bg-card border-line-soft hover:bg-bg-alt/40"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-base font-bold text-pasture-900">
                      {item.phase}
                    </span>
                    <span
                      className={`text-[9.5px] font-bold px-2 py-0.5 rounded-full border ${item.statusColor}`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h4 className="font-serif text-lg font-bold text-pasture-900 font-sans">
                    {item.title}
                  </h4>

                  <ul className="space-y-2 pt-1 border-t border-line-soft">
                    {item.items.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-ink-soft text-xs font-sans">
                        <span
                          className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                            item.isCurrent ? "bg-pasture-700" : "bg-ink-soft/50"
                          }`}
                        />
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-dashed border-line-soft text-[10px] text-ink-soft flex items-center justify-between">
                  <span>{item.isCurrent ? "Active Deployment" : "Future Roadmap"}</span>
                  <ArrowRight className="w-3 h-3 opacity-50" />
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-bg-alt border border-line text-xs font-mono text-ink-soft flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-pasture-600 animate-pulse shrink-0" />
            <span>
              <strong>Ethical Product Framing:</strong> Vetra is solving real day-to-day diagnostic and recordkeeping friction today, while methodically laying the rails for a connected livestock healthcare ecosystem tomorrow.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
