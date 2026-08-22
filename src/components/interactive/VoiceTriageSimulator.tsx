"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Mic,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Volume2,
  CheckCircle2,
  AlertTriangle,
  Stethoscope,
  ArrowRight,
  Globe,
  Radio,
  VolumeX,
} from "lucide-react";

interface VoiceScenario {
  id: "marathi" | "hindi" | "english";
  langName: string;
  langNative: string;
  speaker: string;
  location: string;
  audioText: string;
  phoneticText?: string;
  englishTranslation: string;
  words: string[];
  nerEntities: {
    label: string;
    value: string;
    type: "species" | "symptom" | "location" | "urgency";
  }[];
  differential: {
    primaryDisease: string;
    confidence: string;
    urgencyLevel: "HIGH" | "CRITICAL" | "EMERGENCY";
    actionProtocol: string;
    assignedDoctor: string;
  };
}

const SCENARIOS: Record<string, VoiceScenario> = {
  marathi: {
    id: "marathi",
    langName: "Marathi",
    langNative: "मराठी",
    speaker: "Ramesh Kadam (Dairy Farmer)",
    location: "Sinnar, Nashik District",
    audioText: "माझ्या म्हशीला कालपासून खूप ताप आलाय, चारा खात नाहीये आणि मागचे खुर सुजले आहेत.",
    phoneticText: "माझ्या म्हशीला कालपासून खूप ताप आला आहे, चारा खात नाहीये आणि मागचे खूर सुजले आहेत.",
    englishTranslation:
      "My buffalo has had a high fever since yesterday, is completely off-feed, and the hind hooves are swollen.",
    words: ["माझ्या", "म्हशीला", "कालपासून", "खूप", "ताप", "आलाय,", "चारा", "खात", "नाहीये", "आणि", "मागचे", "खुर", "सुजले", "आहेत."],
    nerEntities: [
      { label: "Species", value: "Bovine / Murrah Buffalo", type: "species" },
      { label: "Symptom", value: "Acute Pyrexia (>104°F)", type: "symptom" },
      { label: "Sign", value: "Anorexia / Inappetence", type: "symptom" },
      { label: "Location", value: "Interdigital Coronary Band", type: "location" },
      { label: "Risk Flag", value: "Suspected FMD / Foot Rot", type: "urgency" },
    ],
    differential: {
      primaryDisease: "Foot & Mouth Disease (FMD) / Interdigital Necrobacillosis",
      confidence: "92% Clinical Match",
      urgencyLevel: "CRITICAL",
      actionProtocol: "Isolate in dry stall. Apply 2% KMnO4 hoof wash. Dispatch Dr. Pawar.",
      assignedDoctor: "Dr. Pawar (VCI #8821, Nashik Polyclinic)",
    },
  },
  hindi: {
    id: "hindi",
    langName: "Hindi",
    langNative: "हिन्दी",
    speaker: "Suresh Yadav (Dairy Producer)",
    location: "Baramati, Pune Cluster",
    audioText: "मेरी गाय के शरीर पर गोल-गोल सख्त गांठें निकल आई हैं और आंखों से लगातार पानी बह रहा है।",
    englishTranslation:
      "My cow has hard circular nodules erupting across its body and continuous watery discharge from both eyes.",
    words: ["मेरी", "गाय", "के", "शरीर", "पर", "गोल-गोल", "गांठें", "निकल", "आई", "हैं", "और", "आंखों", "से", "पानी", "बह", "रहा", "है।"],
    nerEntities: [
      { label: "Species", value: "Bos indicus / Gir Cattle", type: "species" },
      { label: "Symptom", value: "Cutaneous Circumscribed Nodules", type: "symptom" },
      { label: "Sign", value: "Ocular Discharge / Lacrimation", type: "symptom" },
      { label: "Location", value: "Neck, Flank & Perineum", type: "location" },
      { label: "Epidemic Flag", value: "Lumpy Skin Disease (Capripox)", type: "urgency" },
    ],
    differential: {
      primaryDisease: "Lumpy Skin Disease (LSD - Capripoxvirus)",
      confidence: "96% Clinical Match",
      urgencyLevel: "CRITICAL",
      actionProtocol: "Lock 15 km biosecurity alert. Mobilize heterologous goat pox ring vaccine.",
      assignedDoctor: "Dr. Deshmukh (VCI #8491, Baramati Vet Hub)",
    },
  },
  english: {
    id: "english",
    langName: "English",
    langNative: "English",
    speaker: "Anita Shinde (Livestock Supervisor)",
    location: "Ahmednagar Cooperative Farm",
    audioText: "Crossbred dairy heifer presenting with acute ruminal tympany, left flank distension, and respiratory distress.",
    englishTranslation:
      "Crossbred dairy heifer presenting with acute ruminal tympany, left flank distension, and respiratory distress.",
    words: ["Crossbred", "heifer", "showing", "acute", "ruminal", "tympany,", "left", "flank", "distension,", "and", "respiratory", "distress."],
    nerEntities: [
      { label: "Species", value: "Crossbred HF Heifer (380 kg)", type: "species" },
      { label: "Symptom", value: "Left Ruminal Tympany / Distension", type: "symptom" },
      { label: "Sign", value: "Dyspnea / Labored Breathing", type: "symptom" },
      { label: "Emergency Type", value: "Acute Frothy Bloat", type: "urgency" },
    ],
    differential: {
      primaryDisease: "Acute Ruminal Tympany (Legume Pasture Bloat)",
      confidence: "94% Clinical Match",
      urgencyLevel: "EMERGENCY",
      actionProtocol: "Pass stomach tube immediately. Administer poloxalene drench or prepare trocar.",
      assignedDoctor: "Dr. Kulkarni (VCI #9204, Emergency Vet Dispatch)",
    },
  },
};

export const VoiceTriageSimulator: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState<"marathi" | "hindi" | "english">("marathi");
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeWordIdx, setActiveWordIdx] = useState(-1);
  const [highlightEntityIdx, setHighlightEntityIdx] = useState(0);
  const [audioSupported, setAudioSupported] = useState(true);
  const animationRef = useRef<NodeJS.Timeout | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const scenario = SCENARIOS[selectedLang];

  // Stop playback when language changes
  useEffect(() => {
    stopAudio();
  }, [selectedLang]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  // Play subtle radio mic acoustic beep using Web Audio API
  const playMicBeep = () => {
    try {
      if (typeof window !== "undefined") {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioCtx) {
          if (!audioCtxRef.current) {
            audioCtxRef.current = new AudioCtx();
          }
          const ctx = audioCtxRef.current;
          if (ctx.state === "suspended") {
            ctx.resume();
          }
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(800, ctx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.1);
          gain.gain.setValueAtTime(0.08, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
          osc.stop(ctx.currentTime + 0.12);
        }
      }
    } catch {
      // audio context not allowed without prior interaction
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      playAudio();
    }
  };

  const playAudio = () => {
    setIsPlaying(true);
    setProgress(0);
    setActiveWordIdx(0);
    setHighlightEntityIdx(0);
    playMicBeep();

    const duration = 6000; // 6 seconds simulated duration
    const startTime = Date.now();

    // Smart Cross-Platform Speech Synthesis Voice Resolution
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      try {
        window.speechSynthesis.cancel();

        // Use phonetic text for optimal Devanagari pronunciation
        const textToSpeak = scenario.phoneticText || scenario.audioText;
        const utterance = new SpeechSynthesisUtterance(textToSpeak);

        const voices = window.speechSynthesis.getVoices();

        let targetVoice = null;
        if (selectedLang === "marathi") {
          // Find Marathi voice or fallback to Hindi Devanagari voice (Hindi TTS reads Marathi text smoothly)
          targetVoice =
            voices.find((v) => v.lang.startsWith("mr") || v.name.toLowerCase().includes("marathi")) ||
            voices.find((v) => v.lang.startsWith("hi") || v.name.toLowerCase().includes("hindi")) ||
            voices.find((v) => v.lang.includes("IN") || v.name.toLowerCase().includes("india"));
          utterance.lang = targetVoice ? targetVoice.lang : "hi-IN";
        } else if (selectedLang === "hindi") {
          targetVoice =
            voices.find((v) => v.lang.startsWith("hi") || v.name.toLowerCase().includes("hindi")) ||
            voices.find((v) => v.lang.includes("IN"));
          utterance.lang = targetVoice ? targetVoice.lang : "hi-IN";
        } else {
          targetVoice =
            voices.find((v) => v.lang.startsWith("en-IN") || v.name.toLowerCase().includes("india")) ||
            voices.find((v) => v.lang.startsWith("en"));
          utterance.lang = "en-IN";
        }

        if (targetVoice) {
          utterance.voice = targetVoice;
        }

        utterance.rate = 0.88; // slightly slower, natural field tempo
        utterance.pitch = 1.0;

        utterance.onerror = (e) => {
          console.warn("SpeechSynthesis notice:", e);
        };

        utterance.onend = () => {
          // smoothly let the wave timer finish
        };

        window.speechSynthesis.speak(utterance);
      } catch (err) {
        console.warn("TTS initialization fallback:", err);
      }
    }

    // High-resolution Waveform & Karaoke Word Highlighting Timer
    animationRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(100, (elapsed / duration) * 100);
      setProgress(currentProgress);

      // Calculate active word index
      const wordStep = Math.floor((currentProgress / 100) * scenario.words.length);
      setActiveWordIdx(Math.min(scenario.words.length - 1, wordStep));

      // Calculate extracted NER entity index
      const entityStep = Math.floor((currentProgress / 100) * (scenario.nerEntities.length + 1));
      setHighlightEntityIdx(entityStep);

      if (elapsed >= duration) {
        stopAudio();
      }
    }, 50);
  };

  const stopAudio = () => {
    setIsPlaying(false);
    setProgress(0);
    setActiveWordIdx(-1);
    setHighlightEntityIdx(scenario.nerEntities.length);
    if (animationRef.current) clearInterval(animationRef.current);
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {
        // ignore
      }
    }
  };

  return (
    <div className="bg-card border border-line rounded-3xl p-6 sm:p-9 shadow-tactile relative overflow-hidden tactile-card select-none">
      {/* Background Soft Grain & Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-dashed border-line pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="eyebrow-tag">Multilingual NLP Engine</span>
            <span className="w-1.5 h-1.5 rounded-full bg-pasture-500 animate-pulse" />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-pasture-900 font-bold mt-1">
            Rural Voice-to-Clinical Triage
          </h3>
          <p className="text-xs sm:text-sm text-ink-soft mt-0.5">
            Farmers speak symptoms in their mother tongue — Vetra parses Devanagari phonetics, extracts clinical entities, and assigns ICAR protocols.
          </p>
        </div>

        {/* Language Switcher Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-bg-alt border border-line rounded-full self-start sm:self-auto shrink-0">
          {(["marathi", "hindi", "english"] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLang(lang)}
              className={`px-4 py-1.5 text-xs font-mono font-medium rounded-full transition-all cursor-pointer ${
                selectedLang === lang
                  ? "bg-pasture-900 text-bg shadow-xs font-bold"
                  : "text-ink-soft hover:text-ink hover:bg-black/5"
              }`}
            >
              <span>{SCENARIOS[lang].langNative}</span>
              <span className="text-[10px] opacity-70 ml-1">({SCENARIOS[lang].langName})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main 2-Column Console: Audio Player & Live NER Extraction */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Voice Note Playback Console */}
        <div className="lg:col-span-6 space-y-4">
          {/* Audio Player Card */}
          <div className="p-5 rounded-2xl bg-bg-alt border border-line space-y-4 shadow-inner">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-pasture-900 text-bg flex items-center justify-center shadow-xs">
                  <Mic className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-pasture-900">{scenario.speaker}</div>
                  <div className="text-[11px] text-ink-soft">{scenario.location}</div>
                </div>
              </div>

              <span className="font-mono text-[10px] font-bold bg-pasture-500/15 text-pasture-900 px-2 py-0.5 rounded-full border border-pasture-500/20 uppercase">
                {scenario.langName} Voice Note
              </span>
            </div>

            {/* Dynamic Waveform Visualizer */}
            <div className="flex items-center gap-1.5 h-12 px-3 bg-card rounded-xl border border-line-soft overflow-hidden">
              {[40, 65, 85, 30, 90, 50, 75, 95, 35, 60, 80, 45, 90, 65, 30, 85, 70, 40, 95, 55, 35, 75, 50, 85].map(
                (h, idx) => {
                  const isBarActive = isPlaying && idx <= (progress / 100) * 24;
                  return (
                    <div
                      key={idx}
                      className="flex-1 rounded-full transition-all duration-150"
                      style={{
                        height: isPlaying ? `${Math.max(20, (h * (Math.sin(idx + progress / 4) + 1.3)) / 2.2)}%` : "20%",
                        backgroundColor: isBarActive ? "#1E3324" : "rgba(63, 107, 73, 0.22)",
                      }}
                    />
                  );
                }
              )}
            </div>

            {/* Spoken Text Display with Synchronized Word Karaoke Highlighting */}
            <div className="space-y-2 pt-1">
              <div className="text-base sm:text-lg font-serif font-medium text-pasture-900 leading-relaxed flex flex-wrap gap-1.5">
                {scenario.words.map((word, wIdx) => {
                  const isWordSpoken = isPlaying && wIdx === activeWordIdx;
                  const isPast = isPlaying && wIdx < activeWordIdx;
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

              <div className="text-xs text-ink-soft italic leading-relaxed pt-1 border-t border-line-soft">
                Translation: &ldquo;{scenario.englishTranslation}&rdquo;
              </div>
            </div>

            {/* Player Controls */}
            <div className="flex items-center justify-between pt-2 border-t border-line-soft">
              <button
                type="button"
                onClick={togglePlay}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full btn-gold-tactile text-xs font-bold cursor-pointer"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                <span>{isPlaying ? "Pause Audio" : "Listen to Voice Note"}</span>
              </button>

              <span className="font-mono text-xs text-ink-soft">
                {isPlaying ? `Processing Speech (${Math.round(progress)}%)` : "Click to play voice"}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Real-time NER Entity Highlighting & Differential Diagnosis */}
        <div className="lg:col-span-6 space-y-4">
          {/* NER Token Extraction Card */}
          <div className="p-5 rounded-2xl bg-card border border-line space-y-3.5 shadow-sm">
            <div className="flex items-center justify-between border-b border-dashed border-line pb-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold-600" />
                <h4 className="font-serif font-bold text-sm text-pasture-900">
                  Clinical Named Entity Recognition (NER)
                </h4>
              </div>
              <span className="font-mono text-[10px] text-pasture-700 font-bold uppercase">
                ICAR AI Parser
              </span>
            </div>

            {/* Extracted Entity Badges */}
            <div className="flex flex-wrap gap-2">
              {scenario.nerEntities.map((entity, idx) => {
                const isExtracted = !isPlaying || idx < highlightEntityIdx;
                const typeColor = {
                  species: "bg-blue-50 border-blue-200 text-blue-950",
                  symptom: "bg-amber-50 border-amber-200 text-amber-950",
                  location: "bg-emerald-50 border-emerald-200 text-emerald-950",
                  urgency: "bg-red-50 border-red-200 text-red-950",
                }[entity.type];

                return (
                  <div
                    key={entity.label}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-mono transition-all duration-300 flex items-center gap-1.5 shadow-xs ${
                      isExtracted ? typeColor : "bg-bg-alt/40 border-line-soft text-ink-soft/30 opacity-35"
                    }`}
                  >
                    <span className="text-[10px] uppercase font-bold opacity-70">{entity.label}:</span>
                    <strong className="font-semibold">{entity.value}</strong>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Differential Diagnosis Action Card */}
          <div className="p-5 rounded-2xl bg-bg-alt border border-line space-y-3 shadow-inner">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-pasture-700">
                Automated Clinical Assessment
              </span>
              <span className="font-mono text-[10px] font-bold bg-alert-600/15 text-alert-600 px-2 py-0.5 rounded-full border border-alert-600/30">
                {scenario.differential.urgencyLevel} URGENCY
              </span>
            </div>

            <div>
              <div className="text-sm font-serif font-bold text-pasture-900">
                {scenario.differential.primaryDisease}
              </div>
              <div className="text-xs font-mono font-bold text-emerald-800 mt-0.5">
                {scenario.differential.confidence}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-card border border-line-soft text-xs space-y-1">
              <span className="text-[10px] font-mono uppercase text-pasture-700 font-bold block">
                Immediate Action Protocol:
              </span>
              <p className="text-ink text-xs leading-relaxed">{scenario.differential.actionProtocol}</p>
            </div>

            <div className="flex items-center gap-2 text-xs text-ink-soft pt-1 font-mono">
              <Stethoscope className="w-3.5 h-3.5 text-pasture-700 shrink-0" />
              <span>Routed to: <strong className="text-ink font-semibold">{scenario.differential.assignedDoctor}</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
