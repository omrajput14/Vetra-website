"use client";

import React, { useState } from "react";
import {
  ShieldAlert,
  Radio,
  AlertTriangle,
  CheckCircle2,
  MapPin,
  Activity,
  BellRing,
  Volume2,
  Pause,
  Loader2,
} from "lucide-react";
import { useElevenLabsAudio } from "@/lib/useElevenLabsAudio";

interface OutbreakScenario {
  id: string;
  name: string;
  location: string;
  distanceKm: number;
  farmsAlerted: number;
  severity: "HIGH" | "CRITICAL" | "MODERATE";
  vaccineBooster: string;
  status: string;
  spokenAdvisory: string;
}

const SCENARIOS: OutbreakScenario[] = [
  {
    id: "lsd",
    name: "Lumpy Skin Disease (LSD)",
    location: "Nashik North Dairy Belt",
    distanceKm: 15,
    farmsAlerted: 142,
    severity: "CRITICAL",
    vaccineBooster: "Goat Pox Heterologous Ring Vaccine",
    status: "Ring Containment Active",
    spokenAdvisory:
      "Vetra Biosecurity Broadcast: Confirmed Lumpy Skin Disease outbreak within 15 kilometer perimeter of Nashik North. 142 dairy holdings placed under automated movement restriction. Heterologous goat pox ring vaccination dispatched.",
  },
  {
    id: "fmd",
    name: "Foot & Mouth Disease (FMD)",
    location: "Baramati Cooperative Cluster",
    distanceKm: 10,
    farmsAlerted: 88,
    severity: "HIGH",
    vaccineBooster: "FMD Quadrivalent Booster",
    status: "Surveillance Radius Triggered",
    spokenAdvisory:
      "Epidemiological Warning: Foot and Mouth Disease confirmed in Baramati Cluster. 10 kilometer surveillance radius active across 88 farms. Disinfection protocols and quadrivalent booster mobilization in progress.",
  },
  {
    id: "hs",
    name: "Hemorrhagic Septicemia (HS)",
    location: "Ahmednagar Rural Sector",
    distanceKm: 25,
    farmsAlerted: 210,
    severity: "HIGH",
    vaccineBooster: "HS Adjuvant Vaccine",
    status: "Advisory Broadcast Dispatched",
    spokenAdvisory:
      "Precautionary Livestock Health Advisory: Hemorrhagic Septicemia alert in Ahmednagar Sector. 210 registered holdings advised to verify adjuvant vaccination status immediately.",
  },
  {
    id: "bq",
    name: "Black Quarter (BQ)",
    location: "Kolhapur Dairy Basin",
    distanceKm: 12,
    farmsAlerted: 168,
    severity: "CRITICAL",
    vaccineBooster: "Polyvalent Clostridial Ring Vaccine",
    status: "Containment Ring Enforced",
    spokenAdvisory:
      "Vetra Biosecurity Emergency Broadcast: Black Quarter confirmed in Kolhapur Dairy Basin. 12 kilometer immediate containment ring enforced across 168 cattle holdings. Polyvalent clostridial ring vaccination dispatched.",
  },
];

export const BiosecurityRadar3D: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<string>("lsd");
  const [isHovered, setIsHovered] = useState(false);

  const scenario = SCENARIOS.find((s) => s.id === selectedScenario) || SCENARIOS[0];

  const { isPlaying, isLoading, playText, stopAudio } = useElevenLabsAudio();

  const handleToggleVoice = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      playText(scenario.spokenAdvisory);
    }
  };

  const handleSelectScenario = (id: string) => {
    stopAudio();
    setSelectedScenario(id);
  };

  return (
    <div className="bg-pasture-900 text-bg rounded-3xl p-6 sm:p-9 border border-pasture-700/60 shadow-tactile-lg relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Radar Visual Representation */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <div
            className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-pasture-500/30 flex items-center justify-center bg-black/40 backdrop-blur-md shadow-inner group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Outer Concentric Alert Rings */}
            <div className="absolute inset-4 rounded-full border border-dashed border-pasture-500/30" />
            <div className="absolute inset-12 rounded-full border border-pasture-500/40" />
            <div className="absolute inset-20 rounded-full border border-gold-500/40" />

            {/* Radar Sweep Line */}
            <div className="absolute inset-0 rounded-full animate-radar origin-center pointer-events-none">
              <div className="w-1/2 h-1/2 bg-gradient-to-r from-transparent via-emerald-400/15 to-emerald-400/30 origin-bottom-right rounded-tl-full" />
            </div>

            {/* Center Confirmed Outbreak Beacon */}
            <div className="relative z-10 w-12 h-12 rounded-full bg-alert-600/30 border-2 border-alert-600 flex items-center justify-center shadow-lg">
              <div className="w-4 h-4 rounded-full bg-alert-600 animate-ping absolute" />
              <div className="w-3.5 h-3.5 rounded-full bg-white shadow-xs" />
            </div>

            {/* Neighboring Farm Pins Inside Radius */}
            <div className="absolute top-12 left-16 flex items-center gap-1 bg-pasture-800/90 border border-gold-500/40 px-2 py-0.5 rounded-full text-[10px] font-mono text-gold-400">
              <MapPin className="w-3 h-3 text-gold-400" />
              <span>Farm #402</span>
            </div>

            <div className="absolute bottom-14 right-14 flex items-center gap-1 bg-pasture-800/90 border border-gold-500/40 px-2 py-0.5 rounded-full text-[10px] font-mono text-gold-400">
              <MapPin className="w-3 h-3 text-gold-400" />
              <span>Farm #109</span>
            </div>

            <div className="absolute top-20 right-16 flex items-center gap-1 bg-pasture-800/90 border border-gold-500/40 px-2 py-0.5 rounded-full text-[10px] font-mono text-gold-400">
              <MapPin className="w-3 h-3 text-gold-400" />
              <span>Farm #842</span>
            </div>

            {/* Radius Label */}
            <div className="absolute bottom-3 font-mono text-[10px] text-pasture-300 tracking-wider uppercase">
              {scenario.distanceKm} KM BIOSECURITY RADIUS
            </div>
          </div>
        </div>

        {/* Right: Live Outbreak Intelligence Console */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-alert-600 animate-ping" />
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-gold-500">
                Real-time Epidemiological Radar
              </span>
            </div>

            {/* ElevenLabs Voice Broadcast Audio Trigger */}
            <button
              type="button"
              onClick={handleToggleVoice}
              disabled={isLoading}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold-500 hover:bg-gold-600 text-pasture-900 text-xs font-mono font-bold transition-all cursor-pointer shadow-sm disabled:opacity-60"
              title="Broadcast audio advisory using ElevenLabs"
            >
              {isLoading ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : isPlaying ? (
                <Pause className="w-3.5 h-3.5" />
              ) : (
                <Volume2 className="w-3.5 h-3.5" />
              )}
              <span>{isPlaying ? "Stop Audio Alert" : "Play Voice Advisory"}</span>
            </button>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-bg font-bold">
            Automated Biosecurity Warning System
          </h3>

          <p className="text-sm text-bg/80 leading-relaxed">
            The moment a registered veterinarian confirms a contagious disease in their EVMR chart, Vetra geo-fences the outbreak and alerts every dairy farm in the radius automatically.
          </p>

          {/* Scenario Picker */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-wider text-bg/60 block">
                Simulate Epidemiological Outbreak:
              </span>
              <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                PostGIS ST_DWithin Active
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {SCENARIOS.map((scen) => (
                <button
                  key={scen.id}
                  onClick={() => handleSelectScenario(scen.id)}
                  className={`p-2.5 rounded-xl border text-left font-mono text-xs transition-all cursor-pointer ${
                    selectedScenario === scen.id
                      ? "bg-gold-500 text-pasture-900 border-gold-500 font-bold shadow-md"
                      : "bg-pasture-800/80 text-bg/90 border-pasture-600 hover:bg-pasture-700"
                  }`}
                >
                  <div className="truncate font-bold">{scen.name.split("(")[0]}</div>
                  <div className="text-[10px] opacity-80">{scen.distanceKm} km radius</div>
                </button>
              ))}
            </div>
          </div>

          {/* Active Alert Metric Banner */}
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2.5 text-xs font-mono">
            <div className="flex justify-between items-center text-bg/70">
              <span>EPICENTER LOCATION:</span>
              <span className="text-bg font-bold">{scenario.location}</span>
            </div>
            <div className="flex justify-between items-center text-bg/70">
              <span>REGISTERED FARMS NOTIFIED:</span>
              <span className="text-gold-400 font-bold">{scenario.farmsAlerted} Active Herds</span>
            </div>
            <div className="flex justify-between items-center text-bg/70">
              <span>MOBILIZED BOOSTER:</span>
              <span className="text-emerald-300 font-bold">{scenario.vaccineBooster}</span>
            </div>
            <div className="flex justify-between items-center text-bg/70 pt-1 border-t border-white/10">
              <span>CONTAINMENT PROTOCOL:</span>
              <span className="text-rose-400 font-bold">{scenario.status}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
