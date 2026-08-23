"use client";

import React, { useState, useRef } from "react";
import {
  ShieldCheck,
  Check,
  FileText,
  Fingerprint,
  Activity,
  AlertCircle,
  Clock,
  Stethoscope,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { BiometricInspectorModal, BiometricAnimalDetails } from "@/components/modals/BiometricInspectorModal";

interface HealthTimelineEvent {
  date: string;
  title: string;
  detail: string;
  status: "Normal" | "Verified" | "Completed";
}

interface EnterpriseAnimalData extends BiometricAnimalDetails {
  rfidStandard: string;
  jurisdiction: string;
  riskScore: {
    score: number;
    rating: "Low" | "Moderate" | "Elevated";
    contagionStatus: string;
    biosecurityTier: string;
  };
  healthTimeline: HealthTimelineEvent[];
  lastInspection: {
    officer: string;
    regNumber: string;
    station: string;
    date: string;
    vitalsSummary: string;
    withdrawalStatus: string;
  };
}

const ENTERPRISE_RECORDS: Record<string, EnterpriseAnimalData> = {
  buffalo: {
    id: "IN-MH-15-04521",
    tagNumber: "IN-MH-15-04521",
    species: "Bovine",
    breed: "Murrah Buffalo",
    owner: "Kadam Dairy Unit",
    location: "Western Maharashtra Division",
    jurisdiction: "Zone 4 • Sub-District Veterinary Network",
    healthStatus: "Active • Verified Healthy",
    rfidStandard: "ISO 11784/85 FDX-B (134.2 kHz)",
    hash: "e9a8f4c2849102bd9384fe710294821a94bc7201df829103e91823471029481a",
    rfidChip: "134.2 kHz ISO 11784/85 FDX-B",
    muzzleMatch: "Muzzle Pattern Match: 99.8%",
    riskScore: {
      score: 0.08,
      rating: "Low",
      contagionStatus: "0 Contagious Alerts in 25 km Radius",
      biosecurityTier: "Tier-1 Compliance",
    },
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
    healthTimeline: [
      {
        date: "12 May 2026",
        title: "Clinical Herd Health Audit",
        detail: "Normal rumen motility, mucous membranes pink, temp 38.2°C",
        status: "Normal",
      },
      {
        date: "04 Feb 2026",
        title: "Prophylactic Immunization",
        detail: "Hemorrhagic Septicemia booster administered (Batch #HS-910)",
        status: "Completed",
      },
      {
        date: "18 Nov 2025",
        title: "Biometric Tag & Pedigree Certification",
        detail: "Cryptographic muzzle print verification & RFID initialization",
        status: "Verified",
      },
    ],
    vaxAudit: [
      { name: "FMD (Foot & Mouth)", date: "12 May 2026", vet: "Dr. R. Pawar (VCI #8821)", batch: "FMD-OIL-B24" },
      { name: "HS (Hemorrhagic Septicemia)", date: "04 Feb 2026", vet: "Dr. R. Pawar (VCI #8821)", batch: "HS-ADJ-910" },
      { name: "BQ (Black Quarter)", date: "18 Nov 2025", vet: "Dr. R. Pawar (VCI #8821)", batch: "BQ-ALUM-402" },
      { name: "Brucellosis", date: "15 Jun 2025", vet: "Dr. R. Pawar (VCI #8821)", batch: "BRU-S19-108" },
    ],
    lastInspection: {
      officer: "Dr. R. Pawar, B.V.Sc & A.H.",
      regNumber: "VCI Reg. #8821 / MSVC-2018",
      station: "District Veterinary Polyclinic",
      date: "12 May 2026",
      vitalsSummary: "Temp 38.2°C • Pulse 54 bpm • Respiration 18/min",
      withdrawalStatus: "0 Active Antimicrobial Courses • Safe for Dairy Supply",
    },
    authority: "National Livestock Digital Registry • ICAR Aligned",
  },
  cattle: {
    id: "IN-MH-14-84920",
    tagNumber: "IN-MH-14-84920",
    species: "Bovine",
    breed: "Gir (Indigenous Zebu)",
    owner: "Patil Livestock Enterprise",
    location: "Pune Rural Division",
    jurisdiction: "Zone 2 • Baramati Veterinary Network",
    healthStatus: "Active • Verified Healthy",
    rfidStandard: "ISO 11784/85 FDX-B (134.2 kHz)",
    hash: "a1b7c933182904bc710294821a8f94a20b7c193e5d0a624df829103e91823471",
    rfidChip: "134.2 kHz ISO 11784/85 FDX-B",
    muzzleMatch: "Muzzle Pattern Match: 99.9%",
    riskScore: {
      score: 0.05,
      rating: "Low",
      contagionStatus: "0 Contagious Alerts in 25 km Radius",
      biosecurityTier: "Tier-1 Compliance",
    },
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
    healthTimeline: [
      {
        date: "20 Apr 2026",
        title: "Herd Inspection & FMD Vaccination",
        detail: "Quadrivalent FMD vaccine booster injected subcutaneously",
        status: "Completed",
      },
      {
        date: "15 Feb 2026",
        title: "LSD Heterologous Immunization",
        detail: "Goat pox viral strain vaccine booster administered",
        status: "Completed",
      },
      {
        date: "02 Nov 2025",
        title: "Annual Physical Evaluation",
        detail: "BCS 3.5/5 • Vitals stable • Zero parasitic burden",
        status: "Normal",
      },
    ],
    vaxAudit: [
      { name: "FMD (Foot & Mouth)", date: "20 Apr 2026", vet: "Dr. S. Deshmukh (VCI #8491)", batch: "FMD-OIL-B24" },
      { name: "LSD (Lumpy Skin)", date: "15 Feb 2026", vet: "Dr. S. Deshmukh (VCI #8491)", batch: "LSD-HET-081" },
      { name: "HS (Hemorrhagic Septicemia)", date: "02 Nov 2025", vet: "Dr. S. Deshmukh (VCI #8491)", batch: "HS-ADJ-881" },
      { name: "Theileriosis", date: "18 Aug 2025", vet: "Dr. S. Deshmukh (VCI #8491)", batch: "THEIL-ATT-042" },
    ],
    lastInspection: {
      officer: "Dr. S. Deshmukh, B.V.Sc & A.H.",
      regNumber: "VCI Reg. #8491 / MSVC-2016",
      station: "Baramati Veterinary Center",
      date: "20 Apr 2026",
      vitalsSummary: "Temp 38.6°C • Pulse 62 bpm • Respiration 22/min",
      withdrawalStatus: "0 Active Antimicrobial Courses • Safe for Dairy Supply",
    },
    authority: "National Livestock Digital Registry • ICAR Aligned",
  },
  goat: {
    id: "IN-RJ-21-11928",
    tagNumber: "IN-RJ-21-11928",
    species: "Caprine",
    breed: "Sirohi",
    owner: "Rathore Smallholder Unit",
    location: "Nagaur District Division",
    jurisdiction: "Zone 1 • Semi-Arid Pastoral Registry",
    healthStatus: "Active • Verified Healthy",
    rfidStandard: "ISO 11784/85 FDX-B (134.2 kHz)",
    hash: "f831d044710294821a94bc7201df829103e91823471029481ae9a8f4c2849102",
    rfidChip: "134.2 kHz ISO 11784/85 FDX-B",
    muzzleMatch: "Biometric Iris & Tag Sync: 99.7%",
    riskScore: {
      score: 0.12,
      rating: "Low",
      contagionStatus: "0 Contagious Alerts in 25 km Radius",
      biosecurityTier: "Tier-1 Compliance",
    },
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
    healthTimeline: [
      {
        date: "14 Aug 2025",
        title: "PPR Vaccination & General Check",
        detail: "Peste des Petits Ruminants live attenuated vaccine dose",
        status: "Completed",
      },
      {
        date: "22 Sep 2025",
        title: "Enterotoxaemia Immunization",
        detail: "Alum precipitated Clostridium perfringens toxoid booster",
        status: "Completed",
      },
      {
        date: "10 Nov 2025",
        title: "Deworming & Vitals Audit",
        detail: "Broad-spectrum anthelmintic dose administered",
        status: "Verified",
      },
    ],
    vaxAudit: [
      { name: "PPR (Peste des Petits)", date: "14 Aug 2025", vet: "Dr. M. Joshi (VCI #1184)", batch: "PPR-VAC-109" },
      { name: "ET (Enterotoxaemia)", date: "22 Sep 2025", vet: "Dr. M. Joshi (VCI #1184)", batch: "ET-ALUM-331" },
      { name: "HS (Hemorrhagic Septicemia)", date: "10 Nov 2025", vet: "Dr. M. Joshi (VCI #1184)", batch: "HS-ADJ-722" },
      { name: "Goat Pox", date: "05 May 2025", vet: "Dr. M. Joshi (VCI #1184)", batch: "GP-ATT-119" },
    ],
    lastInspection: {
      officer: "Dr. M. Joshi, B.V.Sc & A.H.",
      regNumber: "VCI Reg. #1184 / RSVC-2015",
      station: "Pastoral Veterinary Clinic",
      date: "10 Nov 2025",
      vitalsSummary: "Temp 39.1°C • Pulse 76 bpm • Respiration 24/min",
      withdrawalStatus: "0 Active Antimicrobial Courses • Compliant",
    },
    authority: "State Livestock Health Registry • ICAR Aligned",
  },
};

export const Passport3D: React.FC = () => {
  const [selectedAnimal, setSelectedAnimal] = useState<"buffalo" | "cattle" | "goat">("buffalo");
  const [isInspectorOpen, setIsInspectorOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"record" | "timeline">("record");
  const [transformStyle, setTransformStyle] = useState("");
  const [shineStyle, setShineStyle] = useState({ opacity: 0, x: 50, y: 50 });
  const cardRef = useRef<HTMLDivElement>(null);

  const animal = ENTERPRISE_RECORDS[selectedAnimal];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setTransformStyle(
      `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`
    );

    setShineStyle({
      opacity: 0.6,
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle("perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setShineStyle({ opacity: 0, x: 50, y: 50 });
  };

  return (
    <>
      <div className="flex flex-col items-center w-full max-w-[440px] mx-auto select-none">
        {/* Top Species Switcher Tabs */}
        <div className="flex items-center gap-1 p-1 bg-bg-alt border border-line rounded-full mb-3">
          {(["buffalo", "cattle", "goat"] as const).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedAnimal(key)}
              className={`px-3.5 py-1 text-xs font-mono font-medium rounded-full transition-all cursor-pointer capitalize ${
                selectedAnimal === key
                  ? "bg-pasture-900 text-bg shadow-xs font-bold"
                  : "text-ink-soft hover:text-ink hover:bg-black/5"
              }`}
            >
              {key === "buffalo" ? "Murrah Buffalo" : key === "cattle" ? "Gir Cattle" : "Sirohi Goat"}
            </button>
          ))}
        </div>

        {/* 3D Enterprise Health Record Interface Card */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: transformStyle || "perspective(1200px) rotateX(0deg) rotateY(0deg)",
            transition: "transform 0.15s ease-out",
          }}
          className="relative w-full bg-card border border-line rounded-2xl p-5 sm:p-6 shadow-tactile overflow-hidden passport-3d tactile-card group"
        >
          {/* Dynamic Specular Sheen */}
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 z-30"
            style={{
              opacity: shineStyle.opacity,
              background: `radial-gradient(circle 300px at ${shineStyle.x}% ${shineStyle.y}%, rgba(210, 162, 58, 0.18), rgba(63, 107, 73, 0.12), transparent 70%)`,
            }}
          />

          {/* Subdued Laser Scanline */}
          <div className="passport-scanline z-20 opacity-70" />

          {/* Content Structure */}
          <div className="relative z-10 space-y-4 text-ink">
            {/* 1. Institutional Header & Animal ID */}
            <div className="flex justify-between items-start pb-3 border-b border-dashed border-line">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-pasture-700">
                  <span className="w-2 h-2 rounded-full bg-pasture-500 animate-pulse" />
                  <span>National Health Registry</span>
                </div>
                <div className="font-mono text-xl font-bold tracking-tight text-pasture-900">
                  {animal.id}
                </div>
                <div className="text-[11px] text-ink-soft">
                  {animal.species} · {animal.breed}
                </div>
              </div>

              {/* Verified Electronic Health Record Badge */}
              <button
                type="button"
                onClick={() => setIsInspectorOpen(true)}
                className="flex flex-col items-end gap-1 p-1.5 rounded-lg bg-bg-alt/90 border border-line hover:border-gold-600 transition-all cursor-pointer group/tag"
                title="Inspect cryptographic certificate"
              >
                <div className="flex items-center gap-1 text-[10px] font-mono font-bold text-pasture-800">
                  <Fingerprint className="w-3.5 h-3.5 text-gold-600" />
                  <span>RFID VERIFIED</span>
                </div>
                <span className="text-[9px] font-mono text-ink-soft">
                  {animal.rfidStandard.split(" ")[0]}
                </span>
              </button>
            </div>

            {/* 2. Risk Score & Biosecurity Status */}
            <div className="p-3 rounded-xl bg-bg-alt/80 border border-line-soft space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-ink-soft text-[11px]">CLINICAL RISK SCORE</span>
                <span className="font-bold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded text-[11px] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  {animal.riskScore.rating} ({animal.riskScore.score} / 1.0)
                </span>
              </div>

              <div className="flex items-center justify-between text-[11px] text-ink-soft font-mono pt-1 border-t border-line-soft">
                <span>CONTAGION EXPOSURE:</span>
                <span className="text-pasture-900 font-semibold">{animal.riskScore.contagionStatus}</span>
              </div>
            </div>

            {/* View Switcher: Clinical Summary vs Health Timeline */}
            <div className="flex items-center gap-2 border-b border-line-soft pb-1">
              <button
                type="button"
                onClick={() => setActiveTab("record")}
                className={`pb-1 text-xs font-mono transition-all cursor-pointer ${
                  activeTab === "record"
                    ? "font-bold text-pasture-900 border-b-2 border-pasture-900"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                Health Record &amp; Vax
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("timeline")}
                className={`pb-1 text-xs font-mono transition-all cursor-pointer ${
                  activeTab === "timeline"
                    ? "font-bold text-pasture-900 border-b-2 border-pasture-900"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                Health Timeline (3)
              </button>
            </div>

            {activeTab === "record" ? (
              <>
                {/* 3. Vaccination Status Section */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] font-mono font-bold text-ink-soft">
                    <span>VACCINATION STATUS (MANDATORY REGISTRY)</span>
                    <span className="text-pasture-700">100% UP TO DATE</span>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5 font-mono text-[11px]">
                    {animal.vaxAudit.map((v) => (
                      <div
                        key={v.name}
                        className="p-2 rounded-lg bg-white/80 border border-line-soft flex items-center justify-between shadow-2xs"
                      >
                        <div className="truncate">
                          <strong className="block text-ink text-[11px] leading-tight truncate">
                            {v.name.split(" ")[0]}
                          </strong>
                          <span className="text-[9px] text-ink-soft block">{v.date.split(" ")[1]} {v.date.split(" ")[2]}</span>
                        </div>
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 ml-1">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Last Veterinary Inspection Section */}
                <div className="p-3 rounded-xl bg-card border border-line space-y-1.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase font-bold text-pasture-700 flex items-center gap-1">
                      <Stethoscope className="w-3 h-3 text-pasture-700" />
                      <span>Last Veterinary Inspection</span>
                    </span>
                    <span className="text-[10px] font-mono text-ink-soft">{animal.lastInspection.date}</span>
                  </div>

                  <div className="text-[11.5px] font-bold text-pasture-900 leading-tight">
                    {animal.lastInspection.officer}
                  </div>
                  <div className="text-[10px] font-mono text-ink-soft">
                    {animal.lastInspection.regNumber} • {animal.lastInspection.station}
                  </div>

                  <div className="text-[11px] text-ink pt-1 border-t border-line-soft font-mono">
                    <span className="text-emerald-800 font-semibold block">
                      ✓ {animal.lastInspection.withdrawalStatus}
                    </span>
                  </div>
                </div>
              </>
            ) : (
              /* Health Timeline View */
              <div className="space-y-2.5 py-1">
                {animal.healthTimeline.map((ev, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-white/80 border border-line-soft text-xs font-mono space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <strong className="text-pasture-900 text-[11px]">{ev.title}</strong>
                      <span className="text-[10px] text-ink-soft">{ev.date}</span>
                    </div>
                    <p className="text-[10.5px] text-ink-soft leading-snug">{ev.detail}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Bottom Actions */}
            <div className="pt-1 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => setIsInspectorOpen(true)}
                className="w-full py-2.5 px-4 rounded-xl bg-pasture-900 hover:bg-pasture-800 text-bg text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
              >
                <Fingerprint className="w-3.5 h-3.5 text-gold-500" />
                <span>Open Full Health Record Certificate</span>
              </button>
            </div>
          </div>
        </div>

        {/* Minimal Under-card Prompt */}
        <div className="mt-2.5 text-[11px] text-ink-soft font-mono flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
          <span>Interactive Enterprise Passport • ICAR &amp; NDDB Standard</span>
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
