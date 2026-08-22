"use client";

import React, { useState, useRef } from "react";
import { Camera, Sparkles, Stethoscope, CheckCircle, RefreshCw } from "lucide-react";

interface SymptomScan {
  id: string;
  name: string;
  condition: string;
  confidence: string;
  urgency: string;
  assignedDoc: string;
}

const SCANS: SymptomScan[] = [
  {
    id: "footrot",
    name: "Hoof Lesion",
    condition: "Likely: Foot rot (early stage)",
    confidence: "89% Match",
    urgency: "MODERATE",
    assignedDoc: "Dr. Pawar (Nashik)",
  },
  {
    id: "lsd",
    name: "Skin Nodules",
    condition: "Likely: Lumpy Skin Disease (LSD)",
    confidence: "94% Match",
    urgency: "HIGH CLINICAL",
    assignedDoc: "Dr. Deshmukh (Baramati)",
  },
  {
    id: "mastitis",
    name: "Udder Swelling",
    condition: "Likely: Subclinical Mastitis",
    confidence: "91% Match",
    urgency: "ATTENTION",
    assignedDoc: "Dr. Kulkarni (Pune)",
  },
];

export const PhoneMockup3D: React.FC = () => {
  const [activeScanIdx, setActiveScanIdx] = useState(0);
  const [transformStyle, setTransformStyle] = useState("");
  const phoneRef = useRef<HTMLDivElement>(null);

  const activeScan = SCANS[activeScanIdx];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!phoneRef.current) return;
    const rect = phoneRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    );
  };

  const handleMouseLeave = () => {
    setTransformStyle("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  };

  return (
    <div className="flex flex-col items-center select-none">
      {/* 3D Phone Shell */}
      <div
        ref={phoneRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: transformStyle || "perspective(1000px) rotateX(0deg) rotateY(0deg)",
          transition: "transform 0.15s ease-out",
        }}
        className="w-[260px] h-[520px] bg-[#0F1A12] border-[8px] border-[#0A130D] rounded-[42px] shadow-2xl p-4 relative cursor-pointer group"
        onClick={() => setActiveScanIdx((prev) => (prev + 1) % SCANS.length)}
        title="Click to cycle AI vision diagnostic scenarios"
      >
        {/* Dynamic Notch */}
        <div className="w-24 h-4 bg-[#0A130D] rounded-b-xl mx-auto absolute top-0 left-1/2 -translate-x-1/2 z-30" />

        {/* Screen */}
        <div className="bg-card rounded-[26px] h-full p-4 flex flex-col justify-between text-ink relative overflow-hidden border border-line">
          {/* Screen Top Status */}
          <div className="pt-2 flex justify-between items-center font-mono text-[10px] text-ink-soft uppercase tracking-wider">
            <span>Scan · Symptom AI</span>
            <span className="text-pasture-700 font-bold">LIVE</span>
          </div>

          {/* Camera Viewfinder Box with Laser Reticle */}
          <div className="my-auto h-48 border-1.5 border-dashed border-pasture-500 rounded-2xl flex flex-col items-center justify-center bg-gradient-to-b from-pasture-500/10 to-pasture-500/20 relative overflow-hidden shadow-inner">
            {/* Holographic Laser Bar */}
            <div className="passport-scanline" />

            {/* Target Reticle */}
            <div className="w-20 h-20 border border-gold-500/60 rounded-xl relative flex items-center justify-center">
              <div className="w-2 h-2 border-t-2 border-l-2 border-gold-600 absolute top-0 left-0" />
              <div className="w-2 h-2 border-t-2 border-r-2 border-gold-600 absolute top-0 right-0" />
              <div className="w-2 h-2 border-b-2 border-l-2 border-gold-600 absolute bottom-0 left-0" />
              <div className="w-2 h-2 border-b-2 border-r-2 border-gold-600 absolute bottom-0 right-0" />
              <Camera className="w-8 h-8 text-pasture-700 opacity-70" />
            </div>

            <span className="text-[10px] font-mono text-pasture-700 mt-2 bg-card/80 px-2 py-0.5 rounded-full border border-line-soft">
              {activeScan.name} Target Locked
            </span>
          </div>

          {/* AI Diagnosis Result Box */}
          <div className="space-y-1 bg-bg-alt/90 p-3 rounded-xl border border-line-soft text-xs">
            <strong className="block text-pasture-900 font-bold text-[13px] leading-tight">
              {activeScan.condition}
            </strong>
            <p className="text-[11px] text-ink-soft leading-snug">
              Confidence: <span className="font-mono text-pasture-700 font-bold">{activeScan.confidence}</span> · Routed to {activeScan.assignedDoc} for review.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-3 text-[11px] text-ink-soft flex items-center gap-1.5">
        <Sparkles className="w-3.5 h-3.5 text-gold-600" />
        <span>Click phone to test different symptom scans</span>
      </div>
    </div>
  );
};
