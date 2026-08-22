"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  QrCode,
  Sparkles,
  Check,
  RefreshCw,
  FileText,
  ArrowRight,
  Fingerprint,
  ExternalLink,
  Award,
} from "lucide-react";
import { BiometricInspectorModal, BiometricAnimalDetails } from "@/components/modals/BiometricInspectorModal";

const BIOMETRIC_ANIMALS: Record<string, BiometricAnimalDetails> = {
  buffalo: {
    id: "MH-15-04521",
    tagNumber: "IN-MH-15-04521",
    species: "Buffalo",
    breed: "Murrah",
    owner: "Kadam Farm",
    location: "Nashik, Maharashtra",
    healthStatus: "Healthy — verified",
    hash: "e9a8f4c2849102bd9384fe710294821a94bc7201df829103e91823471029481a",
    rfidChip: "134.2 kHz ISO 11784/85 FDX-B",
    muzzleMatch: "Muzzle Pattern Match: 99.8%",
    pedigree: {
      sire: "Murrah Bull #IN-HR-04-BULL-9821",
      sireStation: "CIRB Hisar Semen Station (Progeny Tested)",
      sireProgeny: "+420 kg Milk Genetic Transmission Index",
      dam: "Lakshmi #IN-MH-15-DAM-4412",
      damLactation: "Lactation 3 Completed",
      damYield: "3,850 L total lactation yield",
    },
    milkYield: {
      avgDaily: "16.5 L/day",
      peakDaily: "19.2 L/day",
      fatPercentage: "7.8% Fat",
      snfPercentage: "9.2% SNF",
      lactationCycle: "Lactation 2",
      daysInMilk: "Day 114 in Milk",
    },
    vaxAudit: [
      { name: "FMD (Foot & Mouth)", date: "May 12, 2026", vet: "Dr. Pawar (VCI #8821)", batch: "FMD-OIL-B24" },
      { name: "HS (Hemorrhagic Septicemia)", date: "Feb 04, 2026", vet: "Dr. Pawar (VCI #8821)", batch: "HS-ADJ-910" },
      { name: "BQ (Black Quarter)", date: "Nov 18, 2025", vet: "Dr. Pawar (VCI #8821)", batch: "BQ-ALUM-402" },
    ],
    authority: "VCI Maharashtra Council & NDDB INAPH Aligned",
  },
  cattle: {
    id: "MH-14-84920",
    tagNumber: "IN-MH-14-84920",
    species: "Cattle",
    breed: "Gir (Indigenous Zebu)",
    owner: "Patil Dairy",
    location: "Baramati, Pune",
    healthStatus: "Healthy — verified",
    hash: "a1b7c933182904bc710294821a8f94a20b7c193e5d0a624df829103e91823471",
    rfidChip: "134.2 kHz ISO 11784/85 FDX-B",
    muzzleMatch: "Muzzle Pattern Match: 99.9%",
    pedigree: {
      sire: "Gir Bull 'Gopala' #IN-GJ-02-BULL-1102",
      sireStation: "Amreli Indigenous Breeding Trust",
      sireProgeny: "A2 Beta-Casein Certified 100%",
      dam: "Gauri #IN-MH-14-DAM-8190",
      damLactation: "Lactation 2 Completed",
      damYield: "3,200 L total lactation yield",
    },
    milkYield: {
      avgDaily: "14.2 L/day",
      peakDaily: "16.8 L/day",
      fatPercentage: "4.8% Fat",
      snfPercentage: "8.9% SNF",
      lactationCycle: "Lactation 2",
      daysInMilk: "Day 82 in Milk",
    },
    vaxAudit: [
      { name: "FMD (Foot & Mouth)", date: "Apr 20, 2026", vet: "Dr. Deshmukh (VCI #8491)", batch: "FMD-OIL-B24" },
      { name: "LSD (Lumpy Skin Disease)", date: "Feb 15, 2026", vet: "Dr. Deshmukh (VCI #8491)", batch: "LSD-HET-081" },
      { name: "HS (Hemorrhagic Septicemia)", date: "Nov 02, 2025", vet: "Dr. Deshmukh (VCI #8491)", batch: "HS-ADJ-881" },
    ],
    authority: "VCI Maharashtra Council & NDDB INAPH Aligned",
  },
  goat: {
    id: "RJ-21-11928",
    tagNumber: "IN-RJ-21-11928",
    species: "Caprine",
    breed: "Sirohi",
    owner: "Rathore Farm",
    location: "Nagaur, Rajasthan",
    healthStatus: "Observation — clear",
    hash: "f831d044710294821a94bc7201df829103e91823471029481ae9a8f4c2849102",
    rfidChip: "134.2 kHz ISO 11784/85 FDX-B",
    muzzleMatch: "Biometric Iris & Tag Sync: 99.7%",
    pedigree: {
      sire: "Sirohi Buck #IN-RJ-21-BUCK-410",
      sireStation: "CSWRI Avikanagar Dual-Purpose Line",
      sireProgeny: "High Twinning Rate Pedigree",
      dam: "Rani #IN-RJ-21-DAM-9021",
      damLactation: "Lactation 2 Completed",
      damYield: "480 L seasonal lactation yield",
    },
    milkYield: {
      avgDaily: "2.4 L/day",
      peakDaily: "3.1 L/day",
      fatPercentage: "4.2% Fat",
      snfPercentage: "8.6% SNF",
      lactationCycle: "Lactation 2",
      daysInMilk: "Day 45 in Milk",
    },
    vaxAudit: [
      { name: "PPR (Peste des Petits)", date: "Aug 14, 2025", vet: "Dr. Joshi (VCI #1184)", batch: "PPR-VAC-109" },
      { name: "ET (Enterotoxaemia)", date: "Sep 22, 2025", vet: "Dr. Joshi (VCI #1184)", batch: "ET-ALUM-331" },
      { name: "HS (Hemorrhagic Septicemia)", date: "Nov 10, 2025", vet: "Dr. Joshi (VCI #1184)", batch: "HS-ADJ-722" },
    ],
    authority: "Rajasthan State Veterinary Council Aligned",
  },
};

export const Passport3D: React.FC = () => {
  const [selectedAnimal, setSelectedAnimal] = useState<"buffalo" | "cattle" | "goat">("buffalo");
  const [isFlipped, setIsFlipped] = useState(false);
  const [isInspectorOpen, setIsInspectorOpen] = useState(false);
  const [transformStyle, setTransformStyle] = useState("");
  const [shineStyle, setShineStyle] = useState({ opacity: 0, x: 50, y: 50 });
  const cardRef = useRef<HTMLDivElement>(null);

  const animal = BIOMETRIC_ANIMALS[selectedAnimal];

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
    <>
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
          className="relative w-full bg-card border border-line rounded-2xl p-6 shadow-tactile overflow-hidden passport-3d tactile-card group cursor-pointer"
          onClick={() => setIsFlipped(!isFlipped)}
          title="Click card to toggle between Passport & EVMR Lineage"
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
              {/* Top Bar with Interactive RFID Tag Inspection Trigger */}
              <div className="flex justify-between items-start pb-4 border-b border-dashed border-line">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-widest text-pasture-700 font-semibold flex items-center gap-1.5">
                    <span>Animal Digital Passport</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-pasture-500 animate-pulse" />
                  </div>
                  <div className="font-mono text-xl font-bold text-ink mt-1 tracking-tight">
                    {animal.id}
                  </div>
                </div>

                {/* Clickable RFID QR Badge */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsInspectorOpen(true);
                  }}
                  className="p-1.5 rounded-lg bg-bg-alt/90 border border-line hover:border-gold-600 hover:bg-gold-50 transition-all cursor-pointer group/tag shadow-xs flex flex-col items-center gap-0.5"
                  title="Inspect Biometric Tag Hash & Lineage"
                >
                  <Fingerprint className="w-5 h-5 text-pasture-900 group-hover/tag:text-gold-600 transition-colors" />
                  <span className="text-[9px] font-mono font-bold text-pasture-700 group-hover/tag:text-gold-700">
                    INSPECT
                  </span>
                </button>
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
                  <strong className="text-ink">38.2°C</strong>
                </div>
                <div>
                  <span className="text-ink-soft text-[10px] block">MILK YIELD</span>
                  <strong className="text-pasture-900 font-bold">{animal.milkYield.avgDaily}</strong>
                </div>
                <div>
                  <span className="text-ink-soft text-[10px] block">FAT / SNF</span>
                  <strong className="text-ink">{animal.milkYield.fatPercentage.split(" ")[0]}</strong>
                </div>
              </div>

              {/* Vaccination Lineage Row */}
              <div className="flex gap-2 pt-3 border-t border-dashed border-line">
                {animal.vaxAudit.map((v) => (
                  <div key={v.name} className="flex-1 text-center font-mono text-[11px] text-ink-soft">
                    <div className="w-5 h-5 rounded-full border border-pasture-500 flex items-center justify-center mx-auto mb-1 bg-pasture-500/10">
                      <Check className="w-3 h-3 text-pasture-700 stroke-[2.5]" />
                    </div>
                    <span className="font-semibold text-ink">{v.name.split(" ")[0]}</span>
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
                  <div className="text-ink font-semibold mt-0.5">{animal.vaxAudit[0]?.vet}</div>
                  <div className="text-[10px] text-ink-soft">Physical exam clear • Rumination normal • Vitals in range</div>
                </div>

                <div className="p-2.5 rounded-lg bg-bg-alt/70 border border-line-soft">
                  <span className="text-[10px] text-pasture-700 block font-semibold">WITHDRAWAL SAFETY (AMR)</span>
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

        {/* Action Button: Biometric Inspector Trigger */}
        <div className="w-full mt-3.5 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => setIsInspectorOpen(true)}
            className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-card hover:bg-white border border-line text-xs font-mono font-semibold text-pasture-900 shadow-xs hover:shadow-sm transition-all cursor-pointer"
          >
            <Fingerprint className="w-4 h-4 text-gold-600" />
            <span>Inspect Biometric Tag &amp; Pedigree</span>
          </button>
        </div>

        <div className="mt-2 text-[11px] text-ink-soft flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
          <span>Hover to tilt in 3D · Click card to flip · Click Inspect for full certificate</span>
        </div>
      </div>

      {/* Holographic Biometric Inspector Modal */}
      <BiometricInspectorModal
        isOpen={isInspectorOpen}
        onClose={() => setIsInspectorOpen(false)}
        animal={animal}
      />
    </>
  );
};
