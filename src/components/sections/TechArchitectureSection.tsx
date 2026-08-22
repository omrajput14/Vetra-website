"use client";

import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ARCHITECTURE_STACK } from "@/lib/data";
import { Smartphone, Server, Database, Cpu, Cloud, ShieldCheck, CheckCircle2, Lock, Zap } from "lucide-react";

export const TechArchitectureSection: React.FC = () => {
  const getArchIcon = (iconName: string) => {
    switch (iconName) {
      case "Smartphone":
        return <Smartphone className="w-5 h-5 text-emerald-400" />;
      case "Server":
        return <Server className="w-5 h-5 text-emerald-400" />;
      case "Database":
        return <Database className="w-5 h-5 text-emerald-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case "Cloud":
      default:
        return <Cloud className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-vetra-darkest text-white relative overflow-hidden" id="architecture">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badgeText="Enterprise Infrastructure"
          badgeVariant="dark"
          isDark
          title={
            <span>
              Engineered for Resilience: <span className="text-gradient-emerald">The Vetra Tech Stack</span>
            </span>
          }
          subtitle="Built on cloud-native Java 21, Spring Boot 3.3, AWS ECS Fargate in Mumbai (ap-south-1), and local-first Flutter clients for sub-second offline reliability."
          align="center"
        />

        {/* 5 Architecture Layer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {ARCHITECTURE_STACK.map((item, idx) => (
            <Card
              key={idx}
              variant="glass-dark"
              className="p-6 sm:p-7 flex flex-col justify-between border border-emerald-500/20 bg-vetra-surface/40 hover:border-emerald-500/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
                    {getArchIcon(item.iconName)}
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-black/40 text-vetra-mint px-2.5 py-1 rounded-full border border-white/10">
                    LAYER 0{idx + 1}
                  </span>
                </div>

                <div className="text-xs font-bold text-vetra-pale uppercase tracking-wider mb-1">
                  {item.layer}
                </div>
                <h3 className="text-xl font-black text-white mb-2">{item.title}</h3>
                <p className="text-xs font-mono text-emerald-300 mb-5">{item.specs}</p>

                <div className="space-y-2">
                  {item.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-vetra-mint shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}

          {/* Security & Indian Data Residency Summary Card */}
          <Card
            variant="glass-dark"
            className="p-6 sm:p-7 flex flex-col justify-between border border-amber-500/30 bg-gradient-to-br from-amber-950/40 via-vetra-surface/40 to-black/60 text-white"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400">
                  <Lock className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase bg-amber-950 text-amber-300 px-2.5 py-1 rounded-full border border-amber-500/40">
                  SECURITY & COMPLIANCE
                </span>
              </div>

              <div className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-1">
                Data Sovereignty
              </div>
              <h3 className="text-xl font-black text-white mb-2">Indian IT Act & VCI Standards</h3>
              <p className="text-xs text-slate-300 mb-5">
                All animal health telemetry, farmer phone registries, and medical prescriptions reside in domestic AWS `ap-south-1` datacenters with strict tenant boundaries.
              </p>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Stateless JWT with Role-Based Access Control</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>PostgreSQL schema-level cooperative isolation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Prometheus & Micrometer 24/7 telemetry</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
