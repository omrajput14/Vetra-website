"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Tabs } from "@/components/ui/Tabs";
import { SAMPLE_PASSPORTS } from "@/lib/data";
import { QrCode, ShieldCheck, Activity, Calendar, FileText, Download, Printer, CheckCircle2, ChevronRight, AlertCircle } from "lucide-react";

export const InteractivePassportDemo: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState<"cattle" | "buffalo" | "goat">("cattle");
  const [activeTab, setActiveTab] = useState("overview");

  const passport = SAMPLE_PASSPORTS[selectedKey];

  const speciesOptions = [
    { id: "cattle", label: "Gir Cow (गौरी)", badge: "Cattle", tag: "IN-MH-14-84920" },
    { id: "buffalo", label: "Murrah Buffalo (काली)", badge: "Buffalo", tag: "IN-HR-06-39104" },
    { id: "goat", label: "Sirohi Goat (रानी)", badge: "Caprine", tag: "IN-RJ-21-11928" },
  ];

  const tabsList = [
    { id: "overview", label: "Animal Identity & Vitals", icon: <Activity className="w-4 h-4" /> },
    { id: "vaccines", label: `Vaccination Registry (${passport.vaccines.length})`, icon: <Calendar className="w-4 h-4" /> },
    { id: "evmr", label: `EVMR Medical Records (${passport.evmrRecords.length})`, icon: <FileText className="w-4 h-4" /> },
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-50/70 border-y border-slate-200/80 relative" id="simulator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="Interactive Live Simulator"
          badgeVariant="primary"
          title={
            <span>
              Explore the <span className="text-gradient-forest">Digital Animal Passport</span>
            </span>
          }
          subtitle="Click between different livestock species to test live identity cards, cryptographic verification, vaccination logs, and electronic veterinary records."
          align="center"
        />

        {/* Animal Species Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {speciesOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSelectedKey(opt.id as any)}
              className={`flex items-center gap-3 px-5 py-3 rounded-2xl border transition-all cursor-pointer ${
                selectedKey === opt.id
                  ? "bg-vetra-darkest text-white border-emerald-500/50 shadow-lg ring-2 ring-emerald-500/30 scale-[1.02]"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-vetra-mint font-bold text-xs">
                {opt.badge[0]}
              </div>
              <div className="text-left">
                <div className="text-sm font-bold">{opt.label}</div>
                <div className="text-[10px] text-slate-400 font-mono">{opt.tag}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Live Passport Full Display Container */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden max-w-5xl mx-auto">
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-vetra-darkest via-vetra-dark to-vetra-surface text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-emerald-500/20">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-white/10 border border-emerald-500/30 p-2.5 flex items-center justify-center shadow-md">
                <Image
                  src="/branding/vetra_icon.png"
                  alt={passport.name}
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>

              <div>
                <div className="flex items-center gap-2.5">
                  <h3 className="text-2xl font-black text-white">{passport.name}</h3>
                  <Badge variant="dark" size="sm" dot>
                    {passport.status}
                  </Badge>
                </div>
                <p className="text-xs text-slate-300 font-mono mt-1">
                  TAG NO: <span className="text-vetra-mint font-bold">{passport.tagNumber}</span> • {passport.breed} ({passport.species})
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  Registered to: <span className="text-slate-200">{passport.ownerName}</span> • {passport.farmLocation}
                </p>
              </div>
            </div>

            {/* Health Score Box */}
            <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center shrink-0 bg-white/5 p-3 rounded-2xl border border-white/10">
              <div className="text-right">
                <div className="text-3xl font-black text-vetra-mint leading-none">
                  {passport.healthScore}%
                </div>
                <span className="text-[10px] uppercase font-bold text-slate-300 tracking-wider">
                  Health Index
                </span>
              </div>
              <span className="text-[11px] text-emerald-300 font-semibold mt-1">
                {passport.vaccineStatus}
              </span>
            </div>
          </div>

          {/* Navigation Sub-Tabs */}
          <div className="p-4 sm:p-6 bg-slate-50/60 border-b border-slate-200">
            <Tabs
              tabs={tabsList}
              activeTab={activeTab}
              onChange={setActiveTab}
              className="w-full justify-start overflow-x-auto"
            />
          </div>

          {/* Tab 1: Overview & Vitals */}
          {activeTab === "overview" && (
            <div className="p-6 sm:p-8 space-y-6 animate-fade-in">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Rectal Temp</div>
                  <div className="text-lg font-extrabold text-slate-900 mt-1">{passport.latestVitals.temperature.split(" ")[0]} °C</div>
                  <span className="text-[11px] text-emerald-700 font-medium">Physiological Normal</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Pulse Rate</div>
                  <div className="text-lg font-extrabold text-slate-900 mt-1">{passport.latestVitals.pulseRate}</div>
                  <span className="text-[11px] text-emerald-700 font-medium">Resting Normal</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Body Weight</div>
                  <div className="text-lg font-extrabold text-slate-900 mt-1">{passport.weightKg} kg</div>
                  <span className="text-[11px] text-slate-500 font-medium">Age: {passport.ageMonths} Months</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Breeding Status</div>
                  <div className="text-lg font-extrabold text-slate-900 mt-1">Lactating</div>
                  <span className="text-[11px] text-emerald-700 font-medium">Estrus Monitored</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <QrCode className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-emerald-950">Biometric QR Identity Token</h4>
                    <p className="text-xs text-emerald-800 font-mono mt-0.5">
                      HASH: SHA256-8F1C79A9 • OFFLINE SYNC DETERMINISTIC
                    </p>
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => alert(`Printing Passport Tag for ${passport.name} (#${passport.tagNumber})`)}
                  icon={<Printer className="w-3.5 h-3.5" />}
                  iconPosition="left"
                >
                  Print Waterproof Tag
                </Button>
              </div>
            </div>
          )}

          {/* Tab 2: Vaccines */}
          {activeTab === "vaccines" && (
            <div className="p-6 sm:p-8 space-y-4 animate-fade-in">
              <div className="space-y-3">
                {passport.vaccines.map((v, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-slate-900 text-sm">{v.name}</h4>
                        <Badge
                          variant={v.status === "Completed" ? "success" : "warning"}
                          size="sm"
                        >
                          {v.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">
                        Batch: <span className="font-mono">{v.batchNumber}</span> • Administered by: {v.veterinarian}
                      </p>
                    </div>

                    <div className="text-left sm:text-right border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-200">
                      <div className="text-xs text-slate-500">
                        Administered: <strong className="text-slate-800">{v.dateAdministered}</strong>
                      </div>
                      <div className="text-xs text-emerald-800 font-semibold mt-0.5">
                        Next Due: {v.nextDueDate}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: EVMR Medical Records */}
          {activeTab === "evmr" && (
            <div className="p-6 sm:p-8 space-y-4 animate-fade-in">
              {passport.evmrRecords.map((rec) => (
                <div
                  key={rec.id}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200">
                    <div>
                      <span className="text-xs font-mono text-emerald-700 font-bold uppercase">{rec.id}</span>
                      <h4 className="text-base font-extrabold text-slate-900 mt-0.5">{rec.diagnosis}</h4>
                    </div>
                    <div className="text-xs text-slate-500 font-mono">{rec.date}</div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-bold text-slate-700">Examining Officer:</span>
                    <p className="text-xs text-slate-600">{rec.veterinarian} — {rec.clinicName}</p>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-xs font-bold text-slate-700">Digital Prescription & Withdrawal:</span>
                    {rec.prescriptions.map((rx, rIdx) => (
                      <div
                        key={rIdx}
                        className="p-3 rounded-xl bg-white border border-slate-200 text-xs space-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-slate-900">{rx.drug}</span>
                          <Badge variant={rx.withdrawalPeriodDays > 0 ? "warning" : "success"} size="sm">
                            {rx.withdrawalPeriodDays > 0 ? `${rx.withdrawalPeriodDays} Days Milk Withholding` : "Zero Withdrawal"}
                          </Badge>
                        </div>
                        <p className="text-slate-600 text-[11px]">
                          Dosage: {rx.dosage} • Frequency: {rx.frequency} • Duration: {rx.durationDays} Days
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/60 text-xs text-emerald-900 italic">
                    &quot;{rec.notes}&quot;
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
