"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { TRIAGE_SCENARIOS } from "@/lib/data";
import { Bot, AlertTriangle, ShieldCheck, Sparkles, CheckCircle2, PhoneCall, Stethoscope, ChevronRight, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveTriageSimulatorProps {
  onOpenPartner: () => void;
}

export const InteractiveTriageSimulator: React.FC<InteractiveTriageSimulatorProps> = ({ onOpenPartner }) => {
  const [selectedScenarioId, setSelectedScenarioId] = useState(TRIAGE_SCENARIOS[0].id);
  const [customQuery, setCustomQuery] = useState("");
  const [isSimulating, setIsSimulating] = useState(false);

  const activeScenario = TRIAGE_SCENARIOS.find((s) => s.id === selectedScenarioId) || TRIAGE_SCENARIOS[0];

  const handleSimulate = (scenarioId: string) => {
    setIsSimulating(true);
    setSelectedScenarioId(scenarioId);
    setTimeout(() => {
      setIsSimulating(false);
    }, 400);
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "EMERGENCY":
        return <Badge variant="danger" dot size="sm">CRITICAL EMERGENCY</Badge>;
      case "HIGH":
        return <Badge variant="warning" dot size="sm">HIGH CLINICAL URGENCY</Badge>;
      case "MODERATE":
        return <Badge variant="warning" size="sm">MODERATE URGENCY</Badge>;
      default:
        return <Badge variant="success" size="sm">ROUTINE CARE</Badge>;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80 relative" id="triage-simulator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="Responsible Healthcare AI"
          badgeVariant="success"
          title={
            <span>
              Live AI Triage & <span className="text-gradient-forest">Decision Support Engine</span>
            </span>
          }
          subtitle="Test how Vetra AI evaluates clinical symptoms, stratifies disease urgency under ICAR guidelines, and dispatches verified doctors while respecting veterinary authority."
          align="center"
        />

        {/* Diagnostic Scenario Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-8">
          {TRIAGE_SCENARIOS.map((scen) => {
            const isSelected = scen.id === selectedScenarioId;
            return (
              <button
                key={scen.id}
                onClick={() => handleSimulate(scen.id)}
                className={cn(
                  "p-4 sm:p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between",
                  isSelected
                    ? "bg-vetra-darkest text-white border-emerald-500/50 shadow-xl ring-2 ring-emerald-500/30 scale-[1.01]"
                    : "bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200"
                )}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={cn("text-xs font-bold", isSelected ? "text-vetra-mint" : "text-emerald-800")}>
                      {scen.species}
                    </span>
                    <span className={cn("text-[10px] font-mono", isSelected ? "text-slate-300" : "text-slate-400")}>
                      {scen.aiConfidence}% MATCH
                    </span>
                  </div>
                  <h4 className="text-sm font-extrabold leading-snug line-clamp-2">{scen.title}</h4>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/20 flex items-center justify-between">
                  <span className={cn("text-xs font-semibold", isSelected ? "text-vetra-pale" : "text-slate-500")}>
                    Run Assessment →
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Live Assessment Output Console */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-emerald-500/30 shadow-2xl relative overflow-hidden">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-vetra-mint">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-black text-white">Vetra Clinical Triage Analysis</h3>
                  <span className="text-[10px] font-mono bg-emerald-950 text-vetra-mint px-2 py-0.5 rounded border border-emerald-500/40">
                    ICAR MODEL v2.4
                  </span>
                </div>
                <p className="text-xs text-slate-400">Target Species: {activeScenario.species}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {getSeverityBadge(activeScenario.severity)}
              <span className="text-xs font-mono text-vetra-mint bg-white/5 px-3 py-1 rounded-full border border-white/10">
                Confidence: {activeScenario.aiConfidence}%
              </span>
            </div>
          </div>

          {/* Assessment Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-start">
            {/* Left: Symptoms & Differentials */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Observed Clinical Indicators:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                  {activeScenario.symptoms.map((symp, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span>{symp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-vetra-mint">
                  Ranked Differential Diagnoses (ICAR Veterinary Reference):
                </span>
                <div className="space-y-2 mt-2">
                  {activeScenario.differentialDiagnosis.map((diff, i) => (
                    <div
                      key={i}
                      className={cn(
                        "p-3 rounded-xl border text-xs flex items-center justify-between",
                        i === 0
                          ? "bg-emerald-950/70 border-emerald-500/40 text-emerald-200 font-bold"
                          : "bg-white/5 border-white/10 text-slate-300"
                      )}
                    >
                      <span>{diff}</span>
                      <span className="text-[10px] font-mono opacity-80">
                        {i === 0 ? "PRIMARY SUSPICION" : `DIFF #${i + 1}`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Immediate Protocol */}
              <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/30 text-amber-200 text-xs space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-amber-300">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Immediate First-Aid Protocol:</span>
                </div>
                <p className="leading-relaxed">{activeScenario.recommendedAction}</p>
              </div>
            </div>

            {/* Right: Veterinary Escalation Console */}
            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-slate-300">
                <Stethoscope className="w-4 h-4 text-vetra-mint" />
                <span>Doctor Dispatch Readiness</span>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 space-y-2 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Nearest VCI Registered Vet:</span>
                  <span className="text-white font-bold">Dr. Arvind Deshmukh</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Estimated Response Radius:</span>
                  <span className="text-vetra-mint font-bold">11.4 km (Baramati)</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Pre-briefing Dispatched:</span>
                  <span className="text-emerald-400 font-mono">COMPLETE ✓</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-400 pt-2">
                <span className="font-semibold text-slate-300">Questions Prepared for Farmer:</span>
                {activeScenario.suggestedQuestions.map((q, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-300">
                    <span className="text-vetra-mint">•</span>
                    <span>{q}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Button
                  variant="gold"
                  size="md"
                  onClick={onOpenPartner}
                  icon={<PhoneCall className="w-4 h-4" />}
                  iconPosition="left"
                  className="w-full justify-center"
                >
                  Dispatch Emergency Case
                </Button>
              </div>
            </div>
          </div>

          {/* Mandatory Clinical Disclaimer */}
          <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{activeScenario.disclaimer}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
