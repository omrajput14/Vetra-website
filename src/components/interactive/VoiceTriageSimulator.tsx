"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Mic,
  Play,
  Pause,
  Sparkles,
  AlertTriangle,
  Stethoscope,
  ArrowRight,
  ArrowDown,
  Info,
  ShieldCheck,
  CheckCircle2,
  FileCheck2,
  Loader2,
  Volume2,
  VolumeX,
} from "lucide-react";
import { useElevenLabsAudio } from "@/lib/useElevenLabsAudio";

interface VoiceScenario {
  id: "english" | "hindi" | "marathi";
  langName: string;
  langNative: string;
  audioText: string;
  phoneticText?: string;
  englishTranslation: string;
  words: string[];
  clinicalSpokenExplanation: string;
  detectedInfo: {
    animal: string;
    animalEmoji: string;
    observedConcern: string;
    additionalSigns: string[];
    suggestedNextStep: string;
    assignedDoctor: string;
  };
}

const SCENARIOS: Record<string, VoiceScenario> = {
  marathi: {
    id: "marathi",
    langName: "Marathi",
    langNative: "मराठी",
    audioText: "माझ्या गायीने चारा खाणे बंद केले आहे आणि ती सुस्त दिसत आहे.",
    phoneticText: "माझ्या गायीने चारा खाणे बंद केले आहे आणि ती सुस्त दिसत आहे.",
    englishTranslation: "My cow has stopped eating fodder and is appearing lethargic.",
    clinicalSpokenExplanation:
      "प्राथमिक वैद्यकीय निरीक्षण: जनावरामध्ये भूक मंदावणे आणि सुस्ती आढळली आहे. पशुवैद्यकीय तपासणीची शिफारस करण्यात येत आहे.",
    words: ["माझ्या", "गायीने", "चारा", "खाणे", "बंद", "केले", "आहे", "आणि", "ती", "सुस्त", "दिसत", "आहे."],
    detectedInfo: {
      animal: "Cattle (Indigenous Dairy Cow)",
      animalEmoji: "🐄",
      observedConcern: "Reduced appetite (Inappetence)",
      additionalSigns: ["Low activity", "Behaviour change"],
      suggestedNextStep: "Consider veterinary consultation",
      assignedDoctor: "Dr. Pawar (VCI #8821, Local Veterinary Polyclinic)",
    },
  },
  hindi: {
    id: "hindi",
    langName: "Hindi",
    langNative: "हिंदी",
    audioText: "मेरी गाय ने चारा खाना बंद कर दिया है और वह सुस्त दिखाई दे रही है।",
    englishTranslation: "My cow has stopped feeding and is appearing lethargic.",
    clinicalSpokenExplanation:
      "प्रारंभिक पशु स्वास्थ्य निरीक्षण: गाय में भूख की कमी और सुस्ती दर्ज की गई है। निकटतम पशु चिकित्सक से परामर्श की सलाह दी जाती है।",
    words: ["मेरी", "गाय", "ने", "चारा", "खाना", "बंद", "कर", "दिया", "है", "और", "वह", "सुस्त", "दिखाई", "दे", "रही", "है।"],
    detectedInfo: {
      animal: "Cattle (Indigenous Dairy Cow)",
      animalEmoji: "🐄",
      observedConcern: "Reduced appetite (Inappetence)",
      additionalSigns: ["Low activity", "Behaviour change"],
      suggestedNextStep: "Consider veterinary consultation",
      assignedDoctor: "Dr. Deshmukh (VCI #8491, Veterinary Hub)",
    },
  },
  english: {
    id: "english",
    langName: "English",
    langNative: "English",
    audioText: "My dairy cow has stopped feeding since morning and appears dull and lethargic.",
    englishTranslation: "My dairy cow has stopped feeding since morning and appears dull and lethargic.",
    clinicalSpokenExplanation:
      "Preliminary Veterinary Triage: Inappetence and acute lethargy detected in adult bovine. Recommendation: Dispatch field veterinary officer for physical examination.",
    words: ["My", "dairy", "cow", "has", "stopped", "feeding", "since", "morning", "and", "appears", "dull", "and", "lethargic."],
    detectedInfo: {
      animal: "Cattle (Crossbred HF Cow)",
      animalEmoji: "🐄",
      observedConcern: "Reduced appetite (Inappetence)",
      additionalSigns: ["Low activity", "Behaviour change"],
      suggestedNextStep: "Consider veterinary consultation",
      assignedDoctor: "Dr. Kulkarni (VCI #9204, Veterinary Clinic)",
    },
  },
};

export const VoiceTriageSimulator: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState<"english" | "hindi" | "marathi">("marathi");
  const [activePlaybackType, setActivePlaybackType] = useState<"farmer" | "clinical" | null>(null);

  const scenario = SCENARIOS[selectedLang];

  // ElevenLabs Audio Player Hook
  const {
    isPlaying,
    isLoading,
    progress,
    audioSource,
    playText,
    stopAudio,
  } = useElevenLabsAudio({
    onEnded: () => setActivePlaybackType(null),
  });

  // Stop audio on language change
  useEffect(() => {
    stopAudio();
    setActivePlaybackType(null);
  }, [selectedLang, stopAudio]);

  const toggleFarmerAudio = () => {
    if (isPlaying && activePlaybackType === "farmer") {
      stopAudio();
      setActivePlaybackType(null);
    } else {
      setActivePlaybackType("farmer");
      const fallbackLang =
        selectedLang === "marathi" ? "hi-IN" : selectedLang === "hindi" ? "hi-IN" : "en-IN";
      playText(scenario.audioText, undefined, fallbackLang);
    }
  };

  const toggleClinicalExplanation = () => {
    if (isPlaying && activePlaybackType === "clinical") {
      stopAudio();
      setActivePlaybackType(null);
    } else {
      setActivePlaybackType("clinical");
      const fallbackLang =
        selectedLang === "marathi" ? "hi-IN" : selectedLang === "hindi" ? "hi-IN" : "en-IN";
      playText(scenario.clinicalSpokenExplanation, undefined, fallbackLang);
    }
  };

  // Word highlighting step based on progress
  const wordStep = Math.floor((progress / 100) * scenario.words.length);
  const activeWordIdx = isPlaying && activePlaybackType === "farmer" ? Math.min(scenario.words.length - 1, wordStep) : -1;

  return (
    <div className="space-y-12 select-none">
      {/* Section Header */}
      <div className="max-w-[720px] text-left">
        <span className="eyebrow-tag">MULTILINGUAL VETERINARY ASSISTANCE</span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-pasture-900 font-semibold mt-3.5 mb-4 leading-[1.12] tracking-tight">
          From farmer observations in their native tongue to structured clinical insights.
        </h2>
        <p className="text-base sm:text-[17px] text-ink-soft leading-relaxed">
          Farmers can communicate animal health concerns in their preferred language. Vetra helps bridge the communication gap between rural livestock owners and veterinary professionals by structuring preliminary descriptions for doctor review.
        </p>

        {/* Supported Languages Pill Strip */}
        <div className="flex flex-wrap items-center gap-2 pt-3 font-mono text-xs">
          <span className="text-ink-soft text-[11px] font-bold uppercase tracking-wider">Supported Languages:</span>
          <span className="bg-bg-alt border border-line px-2.5 py-1 rounded-full text-pasture-900 font-semibold">मराठी (Marathi)</span>
          <span className="bg-bg-alt border border-line px-2.5 py-1 rounded-full text-pasture-900 font-semibold">हिंदी (Hindi)</span>
          <span className="bg-bg-alt border border-line px-2.5 py-1 rounded-full text-pasture-900 font-semibold">English</span>
        </div>
      </div>

      {/* Main 2-Column Console: Farmer Voice Input & AI Extraction */}
      <div className="bg-card border border-line rounded-3xl p-6 sm:p-9 shadow-tactile relative overflow-hidden tactile-card">
        {/* Top Control Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-dashed border-line pb-5 mb-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-pasture-700 bg-pasture-500/10 px-2.5 py-1 rounded-full border border-pasture-500/20 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-pasture-600 animate-pulse" />
              <span>ElevenLabs Multilingual Voice AI</span>
            </span>
            <span className="text-[11px] font-mono text-ink-soft hidden sm:inline">
              eleven_multilingual_v2
            </span>
          </div>

          {/* Language Selector: English | हिंदी | मराठी */}
          <div className="flex items-center gap-1 p-1 bg-bg-alt border border-line rounded-full self-start sm:self-auto shrink-0">
            {(["english", "hindi", "marathi"] as const).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setSelectedLang(lang)}
                className={`px-3.5 py-1 text-xs font-mono font-medium rounded-full transition-all cursor-pointer ${
                  selectedLang === lang
                    ? "bg-pasture-900 text-bg shadow-xs font-semibold"
                    : "text-ink-soft hover:text-ink hover:bg-black/5"
                }`}
              >
                {lang === "english" ? "English" : lang === "hindi" ? "हिंदी" : "मराठी"}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Side: Farmer Voice Input Interface */}
          <div className="lg:col-span-6 flex flex-col justify-between p-6 rounded-2xl bg-bg-alt border border-line space-y-5 shadow-inner">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-pasture-900 text-bg flex items-center justify-center shadow-xs">
                    <Mic
                      className={`w-5 h-5 ${
                        isPlaying && activePlaybackType === "farmer" ? "text-gold-500 animate-pulse" : ""
                      }`}
                    />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-pasture-900">Farmer Voice Input</div>
                    <div className="text-[11px] text-ink-soft">{scenario.langName} Natural Speech Note</div>
                  </div>
                </div>

                <span className="font-mono text-[10px] font-bold bg-pasture-500/15 text-pasture-900 px-2.5 py-0.5 rounded-full border border-pasture-500/20">
                  {isLoading && activePlaybackType === "farmer"
                    ? "Synthesizing Voice..."
                    : isPlaying && activePlaybackType === "farmer"
                    ? "Playing Note..."
                    : "Ready"}
                </span>
              </div>

              {/* Dynamic Audio Waveform Visualizer */}
              <div className="flex items-center gap-1.5 h-12 px-3 bg-card rounded-xl border border-line-soft overflow-hidden">
                {[35, 60, 80, 25, 85, 45, 70, 90, 30, 55, 75, 40, 85, 60, 25, 80, 65, 35, 90, 50, 30, 70, 45, 80].map(
                  (h, idx) => {
                    const isBarActive =
                      isPlaying && activePlaybackType === "farmer" && idx <= (progress / 100) * 24;
                    return (
                      <div
                        key={idx}
                        className="flex-1 rounded-full transition-all duration-150"
                        style={{
                          height:
                            isPlaying && activePlaybackType === "farmer"
                              ? `${Math.max(20, (h * (Math.sin(idx + progress / 4) + 1.3)) / 2.2)}%`
                              : "20%",
                          backgroundColor: isBarActive ? "#1E3324" : "rgba(63, 107, 73, 0.22)",
                        }}
                      />
                    );
                  }
                )}
              </div>

              {/* Farmer Voice Spoken Text with Word Tracking */}
              <div className="p-4 rounded-xl bg-card border border-line-soft space-y-2">
                <div className="text-xs font-mono font-bold uppercase text-pasture-700">
                  Farmer Voice:
                </div>
                <div className="text-base sm:text-lg font-serif font-medium text-pasture-900 leading-relaxed flex flex-wrap gap-1.5">
                  {scenario.words.map((word, wIdx) => {
                    const isWordSpoken = isPlaying && activePlaybackType === "farmer" && wIdx === activeWordIdx;
                    const isPast = isPlaying && activePlaybackType === "farmer" && wIdx < activeWordIdx;
                    return (
                      <span
                        key={wIdx}
                        className={`transition-all duration-200 px-1 py-0.5 rounded ${
                          isWordSpoken
                            ? "bg-gold-500 text-pasture-900 font-bold scale-105 shadow-xs"
                            : isPast
                            ? "text-pasture-900 font-medium"
                            : "text-pasture-900/80"
                        }`}
                      >
                        {word}
                      </span>
                    );
                  })}
                </div>

                <div className="text-xs text-ink-soft italic pt-2 border-t border-line-soft">
                  Translation: &ldquo;{scenario.englishTranslation}&rdquo;
                </div>
              </div>
            </div>

            {/* Play Button Action with ElevenLabs Voice Integration */}
            <div className="flex items-center justify-between pt-2 border-t border-line-soft">
              <button
                type="button"
                onClick={toggleFarmerAudio}
                disabled={isLoading && activePlaybackType === "farmer"}
                className="btn-gold-tactile inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold cursor-pointer disabled:opacity-70"
              >
                {isLoading && activePlaybackType === "farmer" ? (
                  <Loader2 className="w-4 h-4 animate-spin text-pasture-900" />
                ) : isPlaying && activePlaybackType === "farmer" ? (
                  <Pause className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4 fill-current" />
                )}
                <span>
                  {isLoading && activePlaybackType === "farmer"
                    ? "Generating Audio..."
                    : isPlaying && activePlaybackType === "farmer"
                    ? "Pause Audio"
                    : "Play Farmer Voice Note"}
                </span>
              </button>

              <span className="font-mono text-[11px] text-ink-soft">
                {isPlaying && activePlaybackType === "farmer"
                  ? `${Math.round(progress)}% (${audioSource || "ElevenLabs"})`
                  : "ElevenLabs AI Voice"}
              </span>
            </div>
          </div>

          {/* Right Side: AI-Assisted Clinical Extraction Console */}
          <div className="lg:col-span-6 flex flex-col justify-between p-6 rounded-2xl bg-card border border-line space-y-4 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-dashed border-line pb-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-gold-600" />
                  <h4 className="font-serif font-bold text-base text-pasture-900">
                    Detected Information
                  </h4>
                </div>

                {/* Voice Readout Button for Clinical Insights */}
                <button
                  type="button"
                  onClick={toggleClinicalExplanation}
                  disabled={isLoading && activePlaybackType === "clinical"}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-pasture-900 hover:bg-pasture-800 text-bg text-[10.5px] font-mono font-semibold transition-all cursor-pointer shadow-xs disabled:opacity-60"
                  title="Listen to AI clinical explanation in voice"
                >
                  {isLoading && activePlaybackType === "clinical" ? (
                    <Loader2 className="w-3 h-3 animate-spin text-gold-500" />
                  ) : isPlaying && activePlaybackType === "clinical" ? (
                    <Pause className="w-3 h-3 text-gold-500" />
                  ) : (
                    <Volume2 className="w-3 h-3 text-gold-500" />
                  )}
                  <span>
                    {isPlaying && activePlaybackType === "clinical"
                      ? "Stop Voice"
                      : "Listen Explanation"}
                  </span>
                </button>
              </div>

              {/* Extraction Content */}
              <div className="space-y-3 text-xs font-mono">
                {/* 1. Animal */}
                <div className="p-3 rounded-xl bg-bg-alt/80 border border-line-soft">
                  <span className="text-[10px] uppercase font-bold text-ink-soft block mb-1">
                    Animal:
                  </span>
                  <div className="text-sm font-sans font-semibold text-pasture-900 flex items-center gap-1.5">
                    <span>{scenario.detectedInfo.animalEmoji}</span>
                    <span>{scenario.detectedInfo.animal}</span>
                  </div>
                </div>

                {/* 2. Observed Concern */}
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-950">
                  <span className="text-[10px] uppercase font-bold text-amber-900 block mb-1">
                    Observed Concern:
                  </span>
                  <div className="text-sm font-sans font-semibold flex items-center gap-1.5 text-amber-950">
                    <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
                    <span>{scenario.detectedInfo.observedConcern}</span>
                  </div>
                </div>

                {/* 3. Additional Signs */}
                <div className="p-3 rounded-xl bg-bg-alt/80 border border-line-soft">
                  <span className="text-[10px] uppercase font-bold text-ink-soft block mb-1.5">
                    Additional Signs:
                  </span>
                  <ul className="space-y-1 text-ink font-sans text-xs">
                    {scenario.detectedInfo.additionalSigns.map((sign) => (
                      <li key={sign} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-pasture-700 shrink-0" />
                        <span>{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 4. Suggested Next Step */}
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-950">
                  <span className="text-[10px] uppercase font-bold text-emerald-900 block mb-1">
                    Suggested Next Step:
                  </span>
                  <div className="text-xs font-sans font-semibold text-emerald-900">
                    &ldquo;{scenario.detectedInfo.suggestedNextStep}&rdquo;
                  </div>
                  <div className="text-[11px] text-ink-soft font-mono pt-1.5 mt-1 border-t border-emerald-500/20 flex items-center gap-1">
                    <Stethoscope className="w-3 h-3 text-pasture-700 shrink-0" />
                    <span>Routing to: {scenario.detectedInfo.assignedDoctor}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Medical Disclaimer Banner */}
            <div className="p-3 rounded-xl bg-bg-alt border border-line-soft flex items-start gap-2.5 text-[11px] text-ink-soft leading-snug">
              <Info className="w-4 h-4 text-pasture-700 shrink-0 mt-0.5" />
              <p>
                <strong>Important Notice:</strong> Vetra provides AI-assisted preliminary guidance. Diagnosis and treatment decisions remain with qualified veterinary professionals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Workflow Pipeline Element Below */}
      <div className="p-6 rounded-2xl bg-bg-alt border border-line shadow-xs">
        <div className="text-center mb-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-pasture-700 font-bold">
            Clinical Decision Support Workflow
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
          {/* Step 1 */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <span className="w-7 h-7 rounded-lg bg-pasture-900 text-bg flex items-center justify-center font-bold text-[11px] shrink-0">
              01
            </span>
            <div>
              <strong className="block text-pasture-900 font-semibold text-xs">Farmer Observation</strong>
              <span className="text-[10.5px] text-ink-soft">Voice or text input in local language</span>
            </div>
          </div>

          <div className="hidden md:flex items-center text-pasture-700/50">
            <ArrowRight className="w-4 h-4 stroke-[2]" />
          </div>
          <div className="flex md:hidden items-center text-pasture-700/50">
            <ArrowDown className="w-4 h-4 stroke-[2]" />
          </div>

          {/* Step 2 */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <span className="w-7 h-7 rounded-lg bg-pasture-900 text-bg flex items-center justify-center font-bold text-[11px] shrink-0">
              02
            </span>
            <div>
              <strong className="block text-pasture-900 font-semibold text-xs">AI-Assisted Understanding</strong>
              <span className="text-[10.5px] text-ink-soft">Clinical entity &amp; symptom extraction</span>
            </div>
          </div>

          <div className="hidden md:flex items-center text-pasture-700/50">
            <ArrowRight className="w-4 h-4 stroke-[2]" />
          </div>
          <div className="flex md:hidden items-center text-pasture-700/50">
            <ArrowDown className="w-4 h-4 stroke-[2]" />
          </div>

          {/* Step 3 */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <span className="w-7 h-7 rounded-lg bg-pasture-900 text-bg flex items-center justify-center font-bold text-[11px] shrink-0">
              03
            </span>
            <div>
              <strong className="block text-pasture-900 font-semibold text-xs">Veterinary Consultation</strong>
              <span className="text-[10.5px] text-ink-soft">Physical exam &amp; certified diagnosis</span>
            </div>
          </div>

          <div className="hidden md:flex items-center text-pasture-700/50">
            <ArrowRight className="w-4 h-4 stroke-[2]" />
          </div>
          <div className="flex md:hidden items-center text-pasture-700/50">
            <ArrowDown className="w-4 h-4 stroke-[2]" />
          </div>

          {/* Step 4 */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <span className="w-7 h-7 rounded-lg bg-pasture-900 text-bg flex items-center justify-center font-bold text-[11px] shrink-0">
              04
            </span>
            <div>
              <strong className="block text-pasture-900 font-semibold text-xs">Health Record Update</strong>
              <span className="text-[10.5px] text-ink-soft">Immutable EVMR stored in Passport</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
