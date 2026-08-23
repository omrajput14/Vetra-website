"use client";

import React, { useState } from "react";
import {
  Camera,
  Sparkles,
  Stethoscope,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ArrowDown,
  Volume2,
  Pause,
  Loader2,
  Info,
  ShieldCheck,
  RefreshCw,
  Eye,
} from "lucide-react";
import { useElevenLabsAudio } from "@/lib/useElevenLabsAudio";

interface DiagnosticCase {
  id: string;
  name: string;
  category: string;
  imagePrompt: string;
  preliminaryAssessment: string;
  confidence: string;
  confidencePercent: number;
  recommendedAction: string;
  assignedDoctor: string;
  doctorStation: string;
  spokenAudioText: string;
}

const SAMPLE_CASES: DiagnosticCase[] = [
  {
    id: "case-1",
    name: "Hoof Margin Lesion",
    category: "Locomotor / Interdigital",
    imagePrompt: "Close-up of interdigital coronary band with mild erythema and localized swelling",
    preliminaryAssessment: "Possible Early Interdigital Dermatitis / Foot Rot",
    confidence: "89% Visual Feature Match",
    confidencePercent: 89,
    recommendedAction: "Isolate in clean, dry stall. Apply 2% potassium permanganate wash.",
    assignedDoctor: "Dr. R. Pawar, B.V.Sc",
    doctorStation: "Nashik Regional Veterinary Polyclinic (VCI #8821)",
    spokenAudioText:
      "AI-Assisted Assessment: Early stage interdigital lesion detected on bovine hoof margin. Recommendation: Maintain in dry stall, apply mild antiseptic foot wash, and await physical exam by Dr. Pawar.",
  },
  {
    id: "case-2",
    name: "Cutaneous Skin Nodules",
    category: "Integumentary / Epidemic Concern",
    imagePrompt: "Multiple circumscribed, raised cutaneous nodules across neck and flank region",
    preliminaryAssessment: "Circumscribed Nodules Consistent with Lumpy Skin Disease",
    confidence: "94% Visual Feature Match",
    confidencePercent: 94,
    recommendedAction: "Maintain strict isolation. Disinfect premises and mobilize ring vaccination.",
    assignedDoctor: "Dr. S. Deshmukh, M.V.Sc",
    doctorStation: "Baramati Veterinary Center (VCI #8491)",
    spokenAudioText:
      "High Priority Triage Notice: Raised cutaneous nodules consistent with Lumpy Skin Disease pattern. Immediate 15 kilometer biosecurity isolation and physical confirmation required.",
  },
  {
    id: "case-3",
    name: "Udder Asymmetry & Swelling",
    category: "Mammary Health",
    imagePrompt: "Quarter asymmetry with localized hyperthermia and mild inflammatory edema",
    preliminaryAssessment: "Localized Udder Inflammation (Suspected Subclinical Mastitis)",
    confidence: "91% Visual Feature Match",
    confidencePercent: 91,
    recommendedAction: "Perform California Mastitis Test (CMT). Strip milk sample for culture.",
    assignedDoctor: "Dr. M. Kulkarni, B.V.Sc",
    doctorStation: "Pune District Veterinary Clinic (VCI #9204)",
    spokenAudioText:
      "Mammary Assessment: Asymmetric udder swelling detected. Recommended action: California Mastitis reagent test and somatic cell audit by Dr. Kulkarni.",
  },
  {
    id: "case-4",
    name: "Left Flank Ruminal Distension",
    category: "Digestive / Acute Emergency",
    imagePrompt: "Marked distension of left paralumbar fossa with posture indicating discomfort",
    preliminaryAssessment: "Acute Ruminal Tympany (Suspected Pasture Frothy Bloat)",
    confidence: "93% Visual Feature Match",
    confidencePercent: 93,
    recommendedAction: "Emergency: Pass stomach tube. Keep animal moving. Administer antifoaming drench.",
    assignedDoctor: "Dr. A. Shinde, Emergency Vet",
    doctorStation: "Rural Emergency Mobile Veterinary Unit (VCI #7712)",
    spokenAudioText:
      "Emergency Triage Alert: Marked left flank distension indicating acute ruminal tympany. Emergency veterinary dispatch initiated.",
  },
];

export const AiAssessmentDemoSection: React.FC = () => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>("case-1");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasScanned, setHasScanned] = useState(true);

  const activeCase = SAMPLE_CASES.find((c) => c.id === selectedCaseId) || SAMPLE_CASES[0];

  const { isPlaying, isLoading, playText, stopAudio } = useElevenLabsAudio();

  const handleSelectCase = (id: string) => {
    stopAudio();
    setSelectedCaseId(id);
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setHasScanned(true);
    }, 600);
  };

  const handleToggleVoice = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      playText(activeCase.spokenAudioText);
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-bg-alt border-t border-line-soft relative overflow-hidden" id="ai-scanner">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-[680px] mb-12 text-left">
          <span className="eyebrow-tag">AI-ASSISTED CLINICAL ASSESSMENT (DEMO SIMULATION)</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-pasture-900 font-semibold mt-3.5 mb-4 leading-[1.12] tracking-tight">
            From image capture to structured veterinary triage.
          </h2>
          <p className="text-base sm:text-[17px] text-ink-soft leading-relaxed">
            Farmers capture visible symptoms or lesion patterns on mobile. Vetra&apos;s assistive vision model extracts clinical characteristics to help veterinarians prepare for on-site physical exams.
          </p>
        </div>

        {/* Interactive Studio Console */}
        <div className="bg-card border border-line rounded-3xl p-6 sm:p-9 shadow-tactile relative overflow-hidden tactile-card select-none">
          {/* Top Header: Scenario Picker */}
          <div className="border-b border-dashed border-line pb-5 mb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-pasture-900">
                1. Select Symptom Scenario to Analyze:
              </span>
              <span className="font-mono text-[10px] text-ink-soft bg-bg-alt px-2.5 py-0.5 rounded border border-line">
                Interactive Vision Simulator
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {SAMPLE_CASES.map((scen) => (
                <button
                  key={scen.id}
                  type="button"
                  onClick={() => handleSelectCase(scen.id)}
                  className={`p-3 rounded-xl border text-left font-mono text-xs transition-all cursor-pointer ${
                    selectedCaseId === scen.id
                      ? "bg-pasture-900 text-bg border-pasture-900 font-semibold shadow-xs"
                      : "bg-bg-alt text-ink-soft border-line-soft hover:bg-black/5"
                  }`}
                >
                  <div className="font-bold text-xs truncate">{scen.name}</div>
                  <div className="text-[10px] opacity-75 truncate">{scen.category}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 2-Column Console: Viewfinder Simulation & AI Assessment Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Simulated Mobile Viewfinder */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-bg-alt border border-line space-y-4 shadow-inner flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-[10px] text-ink-soft uppercase tracking-wider">
                  <span>Vision Analysis Camera</span>
                  <span className="text-pasture-700 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-pasture-600 animate-pulse" />
                    <span>Target Locked</span>
                  </span>
                </div>

                {/* Viewfinder Reticle Frame */}
                <div className="h-56 rounded-xl border-1.5 border-dashed border-pasture-500/50 bg-card flex flex-col items-center justify-center p-4 relative overflow-hidden text-center shadow-xs">
                  {/* Holographic Laser Bar */}
                  <div className="passport-scanline" />

                  {/* Camera Reticle UI */}
                  <div className="w-20 h-20 border border-gold-600/60 rounded-xl relative flex items-center justify-center mb-2">
                    <div className="w-2.5 h-2.5 border-t-2 border-l-2 border-gold-600 absolute top-0 left-0" />
                    <div className="w-2.5 h-2.5 border-t-2 border-r-2 border-gold-600 absolute top-0 right-0" />
                    <div className="w-2.5 h-2.5 border-b-2 border-l-2 border-gold-600 absolute bottom-0 left-0" />
                    <div className="w-2.5 h-2.5 border-b-2 border-r-2 border-gold-600 absolute bottom-0 right-0" />
                    <Camera className="w-8 h-8 text-pasture-700 opacity-60" />
                  </div>

                  <span className="font-serif text-sm font-bold text-pasture-900 mt-1">
                    {activeCase.name}
                  </span>
                  <span className="text-[11px] text-ink-soft font-mono">
                    {activeCase.imagePrompt}
                  </span>
                </div>
              </div>

              {/* Action Button: Re-run Scan */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => handleSelectCase(selectedCaseId)}
                  disabled={isAnalyzing}
                  className="w-full py-2.5 px-4 rounded-xl bg-pasture-900 hover:bg-pasture-800 text-bg text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs disabled:opacity-60"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isAnalyzing ? "animate-spin" : ""}`} />
                  <span>{isAnalyzing ? "Processing Visual Features..." : "Re-Scan Symptom"}</span>
                </button>
              </div>
            </div>

            {/* Right Column: Structured AI Assessment Results */}
            <div className="lg:col-span-7 p-6 rounded-2xl bg-card border border-line space-y-4 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-dashed border-line pb-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-gold-600" />
                    <h4 className="font-serif font-bold text-base text-pasture-900">
                      AI-Assisted Assessment Output
                    </h4>
                  </div>

                  {/* ElevenLabs Voice Playback Trigger */}
                  <button
                    type="button"
                    onClick={handleToggleVoice}
                    disabled={isLoading}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-pasture-900 hover:bg-pasture-800 text-bg text-[10.5px] font-mono font-semibold transition-all cursor-pointer shadow-xs disabled:opacity-60"
                    title="Listen to clinical assessment explanation via ElevenLabs"
                  >
                    {isLoading ? (
                      <Loader2 className="w-3 h-3 animate-spin text-gold-500" />
                    ) : isPlaying ? (
                      <Pause className="w-3 h-3 text-gold-500" />
                    ) : (
                      <Volume2 className="w-3 h-3 text-gold-500" />
                    )}
                    <span>{isPlaying ? "Pause Voice" : "Listen Explanation"}</span>
                  </button>
                </div>

                {/* Structured Output Cards */}
                <div className="space-y-3 font-mono text-xs">
                  {/* 1. Preliminary Assessment & Confidence */}
                  <div className="p-3.5 rounded-xl bg-bg-alt/90 border border-line-soft space-y-1.5">
                    <div className="flex justify-between items-center text-[10px] uppercase font-bold text-ink-soft">
                      <span>Preliminary Assessment</span>
                      <span className="text-pasture-700">{activeCase.confidence}</span>
                    </div>

                    <div className="text-sm font-serif font-bold text-pasture-900">
                      {activeCase.preliminaryAssessment}
                    </div>

                    {/* Confidence Progress Bar */}
                    <div className="w-full h-1.5 bg-line-soft rounded-full overflow-hidden mt-1">
                      <div
                        className="h-full bg-pasture-600 rounded-full transition-all duration-500"
                        style={{ width: `${activeCase.confidencePercent}%` }}
                      />
                    </div>
                  </div>

                  {/* 2. Recommended Next Action */}
                  <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-1 text-emerald-950">
                    <span className="text-[10px] uppercase font-bold text-emerald-900 block">
                      Recommended Next Action:
                    </span>
                    <p className="text-xs font-sans font-semibold text-emerald-900 leading-snug">
                      {activeCase.recommendedAction}
                    </p>
                  </div>

                  {/* 3. Assigned Veterinarian Review */}
                  <div className="p-3.5 rounded-xl bg-bg-alt border border-line-soft flex items-center justify-between text-xs font-mono">
                    <div>
                      <span className="text-[10px] uppercase text-ink-soft block font-bold">
                        Veterinarian Review Required:
                      </span>
                      <strong className="text-pasture-900">{activeCase.assignedDoctor}</strong>
                      <div className="text-[10px] text-ink-soft">{activeCase.doctorStation}</div>
                    </div>
                    <span className="font-bold text-pasture-700 bg-pasture-500/10 px-2 py-1 rounded text-[10.5px]">
                      Pending Verification
                    </span>
                  </div>
                </div>
              </div>

              {/* Responsible AI Disclaimer Banner */}
              <div className="p-3 rounded-xl bg-bg-alt border border-line-soft flex items-start gap-2 text-[11px] text-ink-soft leading-snug font-mono">
                <Info className="w-3.5 h-3.5 text-pasture-700 shrink-0 mt-0.5" />
                <p>
                  <strong>Responsible AI Notice:</strong> AI assists veterinarians by structuring observations. Final diagnosis and treatment decisions remain exclusively with licensed veterinary professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
