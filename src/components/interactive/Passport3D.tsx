"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ShieldCheck, QrCode, Sparkles, Check, RefreshCw, FileText, ArrowRight } from "lucide-react";

interface AnimalData {
  id: string;
  tagNumber: string;
  species: string;
  breed: string;
  owner: string;
  location: string;
  healthStatus: string;
  vax: { name: string; checked: boolean; date: string }[];
  vitals: { temp: string; pulse: string; weight: string };
  lastExam: string;
}

const ANIMALS: Record<string, AnimalData> = {
  buffalo: {
    id: "MH-15-04521",
    tagNumber: "IN-MH-15-04521",
    species: "Buffalo",
    breed: "Murrah",
    owner: "Kadam Farm",
    location: "Nashik, Maharashtra",
    healthStatus: "Healthy — verified",
    vax: [
      { name: "FMD", checked: true, date: "May 2026" },
      { name: "HS", checked: true, date: "Feb 2026" },
      { name: "BQ", checked: true, date: "Nov 2025" },
    ],
    vitals: { temp: "38.2°C", pulse: "54 bpm", weight: "520 kg" },
    lastExam: "Dr. Pawar (VCI #8821)",
  },
  cattle: {
    id: "MH-14-84920",
    tagNumber: "IN-MH-14-84920",
    species: "Cattle",
    breed: "Gir (Indigenous Zebu)",
    owner: "Patil Dairy",
    location: "Baramati, Pune",
    healthStatus: "Healthy — verified",
    vax: [
      { name: "FMD", checked: true, date: "Apr 2026" },
      { name: "LSD", checked: true, date: "Feb 2026" },
      { name: "HS", checked: true, date: "Nov 2025" },
    ],
    vitals: { temp: "38.6°C", pulse: "62 bpm", weight: "385 kg" },
    lastExam: "Dr. Deshmukh (VCI #8491)",
  },
  goat: {
    id: "RJ-21-11928",
    tagNumber: "IN-RJ-21-11928",
    species: "Caprine",
    breed: "Sirohi",
    owner: "Rathore Farm",
    location: "Nagaur, Rajasthan",
    healthStatus: "Observation — clear",
    vax: [
      { name: "PPR", checked: true, date: "Aug 2025" },
      { name: "ET", checked: true, date: "Sep 2025" },
      { name: "HS", checked: true, date: "Nov 2025" },
    ],
    vitals: { temp: "39.1°C", pulse: "76 bpm", weight: "42 kg" },
    lastExam: "Dr. Joshi (VCI #1184)",
  },
};

export const Passport3D: React.FC = () => {
  const [selectedAnimal, setSelectedAnimal] = useState<"buffalo" | "cattle" | "goat">("buffalo");
  const [isFlipped, setIsFlipped] = useState(false);
  const [transformStyle, setTransformStyle] = useState("");
  const [shineStyle, setShineStyle] = useState({ opacity: 0, x: 50, y: 50 });
  const cardRef = useRef<HTMLDivElement>(null);

  const animal = ANIMALS[selectedAnimal];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12; // tilt angle
    const rotateY = ((x - centerX) / centerX) * 12;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    );

    setShineStyle({
      opacity: 0.8,
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setShineStyle({ opacity: 0, x: 50, y: 50 });
  };

  return (
    <div className="flex flex-col items-center w-full max-w-[420px] mx-auto select-none">
      {/* Species Selector Switcher */}
      <div className="flex items-center gap-1.5 p-1 bg-bg-alt border border-line rounded-full mb-4">
        {(["buffalo", "cattle", "goat"] as const).map((key) => (
          <button
            key={key}
            onClick={() => setSelectedAnimal(key)}
            className={`px-3.5 py-1 text-xs font-mono font-medium rounded-full transition-all cursor-pointer capitalize ${
              selectedAnimal === key
                ? "bg-pasture-900 text-bg shadow-xs font-semibold"
                : "text-ink-soft hover:text-ink hover:bg-black/5"
            }`}
          >
            {key}
          </button>
        ))}
      </div>

      {/* 3D Tilt Card Wrapper */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: transformStyle || "perspective(1000px) rotateX(0deg) rotateY(0deg)",
          transition: "transform 0.15s ease-out",
        }}
        className="relative w-full bg-card border border-line rounded-2xl p-6 shadow-tactile overflow-hidden passport-3d group cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
        title="Click to toggle between Passport & EVMR Lineage"
      >
        {/* Dynamic Holographic Cursor Shine */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 z-30"
          style={{
            opacity: shineStyle.opacity,
            background: `radial-gradient(circle 280px at ${shineStyle.x}% ${shineStyle.y}%, rgba(210, 162, 58, 0.22), rgba(63, 107, 73, 0.15), transparent 70%)`,
          }}
        />

        {/* Laser Scanline Beam */}
        <div className="passport-scanline z-20" />

        {/* Card Face 1: Official Digital Passport */}
        {!isFlipped ? (
          <div className="relative z-10 space-y-4">
            {/* Top Bar */}
            <div className="flex justify-between items-start pb-4 border-b border-dashed border-line">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-widest text-pasture-700 font-semibold">
                  Animal Digital Passport
                </div>
                <div className="font-mono text-xl font-bold text-ink mt-1 tracking-tight">
                  {animal.id}
                </div>
              </div>
              <div className="w-8 h-8 rounded bg-dot-matrix border border-line/60" />
            </div>

            {/* Middle: Avatar + Key Metadata */}
            <div className="flex gap-4 items-center">
              <div className="w-16 h-16 rounded-xl bg-pasture-700 flex items-center justify-center shrink-0 shadow-sm border border-pasture-900/20">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-9 h-9 text-bg"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 10c0-2 1.5-4 4-4h8c2.5 0 4 2 4 4v3c0 3-2.5 6-8 6s-8-3-8-6v-3Z" />
                  <path d="M7 6 6 3M17 6l1-3M9 13h.01M15 13h.01" />
                </svg>
              </div>

              <div className="text-sm space-y-0.5">
                <div>
                  <span className="text-xs text-ink-soft mr-2">Species</span>
                  <strong className="text-ink font-semibold">
                    {animal.species} · {animal.breed}
                  </strong>
                </div>
                <div>
                  <span className="text-xs text-ink-soft mr-2">Owner</span>
                  <span className="text-ink-soft">{animal.owner}, {animal.location.split(",")[0]}</span>
                </div>
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-pasture-900 bg-pasture-500/15 px-2.5 py-0.5 rounded-full mt-1 border border-pasture-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-pasture-500 animate-pulse" />
                    {animal.healthStatus}
                  </span>
                </div>
              </div>
            </div>

            {/* Vitals Summary Strip */}
            <div className="grid grid-cols-3 gap-2 py-2.5 px-3 bg-bg-alt/70 rounded-xl border border-line-soft font-mono text-[11px]">
              <div>
                <span className="text-ink-soft text-[10px] block">TEMP</span>
                <strong className="text-ink">{animal.vitals.temp}</strong>
              </div>
              <div>
                <span className="text-ink-soft text-[10px] block">PULSE</span>
                <strong className="text-ink">{animal.vitals.pulse}</strong>
              </div>
              <div>
                <span className="text-ink-soft text-[10px] block">WEIGHT</span>
                <strong className="text-ink">{animal.vitals.weight}</strong>
              </div>
            </div>

            {/* Vaccination Lineage Row */}
            <div className="flex gap-2 pt-3 border-t border-dashed border-line">
              {animal.vax.map((v) => (
                <div key={v.name} className="flex-1 text-center font-mono text-[11px] text-ink-soft">
                  <div className="w-5 h-5 rounded-full border border-pasture-500 flex items-center justify-center mx-auto mb-1 bg-pasture-500/10">
                    <Check className="w-3 h-3 text-pasture-700 stroke-[2.5]" />
                  </div>
                  <span className="font-semibold text-ink">{v.name}</span>
                </div>
              ))}
            </div>

            {/* Vet Verified Stamp */}
            <div className="vet-stamp absolute right-4 bottom-4 z-20">
              Vet<br />verified
            </div>
          </div>
        ) : (
          /* Card Face 2: EVMR Clinical History Mode */
          <div className="relative z-10 space-y-3.5 animate-fade-in text-xs font-mono">
            <div className="flex justify-between items-center pb-3 border-b border-line">
              <span className="font-bold text-pasture-900 uppercase">EVMR Clinical History</span>
              <span className="text-[10px] text-ink-soft">CRYPTOGRAPHIC LOG</span>
            </div>

            <div className="space-y-2 text-ink-soft">
              <div className="p-2.5 rounded-lg bg-bg-alt/70 border border-line-soft">
                <span className="text-[10px] text-pasture-700 block font-semibold">LAST EXAM & AUDIT</span>
                <div className="text-ink font-semibold mt-0.5">{animal.lastExam}</div>
                <div className="text-[10px] text-ink-soft">Physical exam clear • Rumination active</div>
              </div>

              <div className="p-2.5 rounded-lg bg-bg-alt/70 border border-line-soft">
                <span className="text-[10px] text-pasture-700 block font-semibold">WITHDRAWAL SAFETY</span>
                <div className="text-emerald-800 font-semibold mt-0.5">0 Active Antibiotic Courses</div>
                <div className="text-[10px] text-ink-soft">Milk safe for dairy cooperative supply</div>
              </div>
            </div>

            <div className="text-[10px] text-center text-ink-soft pt-1">
              Click anywhere to flip back
            </div>
          </div>
        )}
      </div>

      <div className="mt-3 text-[11px] text-ink-soft flex items-center gap-1.5">
        <Sparkles className="w-3.5 h-3.5 text-gold-600" />
        <span>Hover to inspect in 3D · Click card to view EVMR records</span>
      </div>
    </div>
  );
};
