"use client";

import React from "react";
import {
  Mic,
  BrainCircuit,
  Sparkles,
  Stethoscope,
  FileCheck,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

export const HowVetraWorksSection: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Farmer Reports Symptom",
      subtitle: "Multimodal Input",
      desc: "Farmer describes observations via voice note (Marathi, Hindi, English), text message, or photograph of visible symptoms.",
      icon: <Mic className="w-5 h-5 text-gold-600" />,
      detail: "Input: Voice, Text, or Photo",
    },
    {
      num: "02",
      title: "Voice / Image Analysis",
      subtitle: "Entity Extraction",
      desc: "Vetra processes audio phonetics and visual patterns to detect clinical keywords: species, symptom location, and severity cues.",
      icon: <BrainCircuit className="w-5 h-5 text-pasture-700" />,
      detail: "Processing: Devanagari NLP & Vision",
    },
    {
      num: "03",
      title: "AI-Assisted Assessment",
      subtitle: "Structured Triage",
      desc: "Generates an objective summary highlighting observed anomalies and differential indicators to accelerate clinical prep.",
      icon: <Sparkles className="w-5 h-5 text-amber-700" />,
      detail: "Output: Preliminary Triage Report",
    },
    {
      num: "04",
      title: "Veterinarian Review",
      subtitle: "Physical Verification",
      desc: "A licensed practitioner reviews the triage summary, conducts physical examination, and determines official diagnosis and care.",
      icon: <Stethoscope className="w-5 h-5 text-emerald-800" />,
      detail: "Clinical: 100% Doctor Governed",
    },
    {
      num: "05",
      title: "Health Record Update",
      subtitle: "Lifelong Passport Entry",
      desc: "Treatment details, prescriptions, and follow-ups are automatically updated into the animal's permanent Digital Passport.",
      icon: <FileCheck className="w-5 h-5 text-blue-800" />,
      detail: "Result: Complete Medical Lineage",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-bg-alt border-y border-line-soft relative overflow-hidden" id="how">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-[680px] mb-14 text-left">
          <span className="eyebrow-tag">END-TO-END CLINICAL WORKFLOW</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-pasture-900 font-semibold mt-3.5 mb-4 leading-[1.12] tracking-tight">
            How Vetra works: from shed observation to certified record.
          </h2>
          <p className="text-base sm:text-[17px] text-ink-soft leading-relaxed">
            A structured, 5-stage pipeline bridging smallholder farmers and certified veterinary practitioners across rural districts.
          </p>
        </div>

        {/* 5-Step Connected Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="bg-card border border-line rounded-2xl p-5 space-y-3.5 tactile-card hover:bg-white transition-all shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-xl bg-pasture-900 text-bg flex items-center justify-center font-mono font-bold text-xs shadow-xs">
                    {step.num}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-bg-alt flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                <div className="space-y-0.5">
                  <h3 className="font-serif text-base font-bold text-pasture-900 leading-tight">
                    {step.title}
                  </h3>
                  <div className="text-[10.5px] font-mono text-pasture-700 font-semibold uppercase tracking-wider">
                    {step.subtitle}
                  </div>
                </div>

                <p className="text-xs text-ink-soft leading-relaxed font-sans">
                  {step.desc}
                </p>
              </div>

              <div className="pt-2.5 border-t border-dashed border-line-soft font-mono text-[10px] text-ink-soft font-medium">
                {step.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
