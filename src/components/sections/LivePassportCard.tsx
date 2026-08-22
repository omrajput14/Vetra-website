"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { QrCode, ShieldCheck, Activity, Calendar, FileText, HeartPulse, ChevronRight, CheckCircle2 } from "lucide-react";
import { SAMPLE_PASSPORTS } from "@/lib/data";
import { cn } from "@/lib/utils";

export const LivePassportCard: React.FC = () => {
  const [activeAnimalKey, setActiveAnimalKey] = useState<"cattle" | "buffalo" | "goat">("cattle");
  const [activeTab, setActiveTab] = useState<"overview" | "vaccines" | "evmr">("overview");

  const passport = SAMPLE_PASSPORTS[activeAnimalKey];

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Decorative Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-700/20 rounded-3xl blur-xl opacity-75 animate-pulse-slow pointer-events-none" />

      {/* Main Passport Container */}
      <div className="relative bg-white/95 backdrop-blur-xl border border-emerald-900/15 rounded-3xl shadow-2xl overflow-hidden text-slate-900">
        {/* Top Metallic Passport Header */}
        <div className="bg-gradient-to-r from-vetra-darkest via-vetra-dark to-vetra-surface px-5 sm:px-6 py-4 text-white flex items-center justify-between border-b border-emerald-500/20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-vetra-mint" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold tracking-tight text-white uppercase">
                  Digital Animal Passport
                </h4>
                <span className="text-[10px] bg-emerald-500/20 text-vetra-mint px-2 py-0.5 rounded-full font-mono font-semibold border border-emerald-500/30">
                  LIVE SIMULATOR
                </span>
              </div>
              <p className="text-[11px] text-slate-300 font-mono">
                PASSPORT ID: <span className="text-vetra-mint font-semibold">{passport.id}</span>
              </p>
            </div>
          </div>

          {/* Quick Animal Switcher */}
          <div className="flex items-center gap-1 bg-black/30 p-1 rounded-xl border border-white/10">
            {(["cattle", "buffalo", "goat"] as const).map((key) => (
              <button
                key={key}
                onClick={() => setActiveAnimalKey(key)}
                className={cn(
                  "text-[11px] px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer capitalize",
                  activeAnimalKey === key
                    ? "bg-vetra-mint text-vetra-darkest font-bold shadow-sm"
                    : "text-slate-300 hover:text-white"
                )}
              >
                {key}
              </button>
            ))}
          </div>
        </div>

        {/* Animal Core Info Bar */}
        <div className="p-5 sm:p-6 bg-slate-50/70 border-b border-slate-200/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-2xl bg-white border-2 border-emerald-600/30 flex items-center justify-center p-2 shadow-md shrink-0 relative overflow-hidden">
                <Image
                  src="/branding/vetra_icon.png"
                  alt={passport.name}
                  width={44}
                  height={44}
                  className="object-contain"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-extrabold text-vetra-dark">{passport.name}</h3>
                  <Badge variant="success" size="sm" dot>
                    {passport.status}
                  </Badge>
                </div>
                <p className="text-xs text-slate-500 font-mono mt-0.5">
                  TAG: <span className="text-slate-800 font-semibold">{passport.tagNumber}</span> • {passport.breed}
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Owner: <span className="text-slate-700 font-medium">{passport.ownerName}</span> ({passport.farmLocation.split(",")[0]})
                </p>
              </div>
            </div>

            {/* Health Score Radial Dial */}
            <div className="flex items-center sm:flex-col items-end sm:items-end justify-between sm:justify-center shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-200">
              <div className="text-right">
                <div className="text-2xl font-black text-emerald-700 leading-none">
                  {passport.healthScore}%
                </div>
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                  Health Index
                </span>
              </div>
              <Badge variant="primary" size="sm" className="mt-1">
                {passport.vaccineStatus}
              </Badge>
            </div>
          </div>

          {/* Vitals Ribbon */}
          <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-200/80 text-xs">
            <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-xs">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Body Temp</div>
              <div className="font-bold text-slate-800 text-xs mt-0.5">{passport.latestVitals.temperature.split(" ")[0]} °C</div>
              <span className="text-[9px] text-emerald-600 font-medium">Optimal</span>
            </div>
            <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-xs">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Pulse Rate</div>
              <div className="font-bold text-slate-800 text-xs mt-0.5">{passport.latestVitals.pulseRate}</div>
              <span className="text-[9px] text-emerald-600 font-medium">Steady</span>
            </div>
            <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-xs">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Weight</div>
              <div className="font-bold text-slate-800 text-xs mt-0.5">{passport.weightKg} kg</div>
              <span className="text-[9px] text-slate-500 font-medium">Age: {passport.ageMonths}m</span>
            </div>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-slate-200 bg-white px-5 sm:px-6">
          <button
            onClick={() => setActiveTab("overview")}
            className={cn(
              "py-3 text-xs font-bold border-b-2 transition-all mr-6 cursor-pointer flex items-center gap-1.5",
              activeTab === "overview"
                ? "border-emerald-600 text-emerald-800"
                : "border-transparent text-slate-500 hover:text-slate-800"
            )}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Biometric Tag</span>
          </button>

          <button
            onClick={() => setActiveTab("vaccines")}
            className={cn(
              "py-3 text-xs font-bold border-b-2 transition-all mr-6 cursor-pointer flex items-center gap-1.5",
              activeTab === "vaccines"
                ? "border-emerald-600 text-emerald-800"
                : "border-transparent text-slate-500 hover:text-slate-800"
            )}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Vaccines ({passport.vaccines.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("evmr")}
            className={cn(
              "py-3 text-xs font-bold border-b-2 transition-all cursor-pointer flex items-center gap-1.5",
              activeTab === "evmr"
                ? "border-emerald-600 text-emerald-800"
                : "border-transparent text-slate-500 hover:text-slate-800"
            )}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>EVMR History ({passport.evmrRecords.length})</span>
          </button>
        </div>

        {/* Tab Contents */}
        <div className="p-5 sm:p-6 bg-white min-h-[220px]">
          {activeTab === "overview" && (
            <div className="space-y-3 animate-fade-in">
              <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/70">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                    <QrCode className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-emerald-950">Dynamic QR Cryptographic Tag</div>
                    <div className="text-[10px] text-emerald-700 font-mono">Offline-verified HMAC signature</div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-emerald-800 bg-white px-2 py-1 rounded-md border border-emerald-200 shadow-xs">
                  Active
                </span>
              </div>

              <div className="text-xs text-slate-600 space-y-1.5 pt-1">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Gender & Category:</span>
                  <span className="font-semibold text-slate-800">{passport.gender} • Milking Herd</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Date of Birth:</span>
                  <span className="font-semibold text-slate-800">{passport.dob} ({passport.ageMonths} Months)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Geographic Zone:</span>
                  <span className="font-semibold text-slate-800">{passport.farmLocation}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Last Clinical Audit:</span>
                  <span className="font-semibold text-emerald-700">{passport.latestVitals.lastRecorded}</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "vaccines" && (
            <div className="space-y-2.5 animate-fade-in">
              {passport.vaccines.slice(0, 3).map((v, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs"
                >
                  <div>
                    <div className="font-bold text-slate-800">{v.name}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">
                      Batch: {v.batchNumber} • By {v.veterinarian.split("(")[0]}
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge
                      variant={v.status === "Completed" ? "success" : "warning"}
                      size="sm"
                    >
                      {v.status === "Completed" ? "Protected" : "Due Soon"}
                    </Badge>
                    <div className="text-[9px] text-slate-400 mt-1">Due: {v.nextDueDate}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "evmr" && (
            <div className="space-y-3 animate-fade-in">
              {passport.evmrRecords.map((rec) => (
                <div key={rec.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-800">{rec.diagnosis}</span>
                    <span className="text-[10px] font-mono text-slate-400">{rec.date}</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed italic">
                    &quot;{rec.notes}&quot;
                  </p>
                  <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-slate-200">
                    <span>{rec.veterinarian}</span>
                    <span className="font-semibold text-emerald-700">Withdrawal Cleared</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Verification Stamp */}
        <div className="bg-slate-100/90 px-5 sm:px-6 py-2.5 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Immutable Blockchain & Cloud Hash Verified</span>
          </div>
          <span className="font-mono text-[10px]">VETRA-SYNC: OK</span>
        </div>
      </div>
    </div>
  );
};
