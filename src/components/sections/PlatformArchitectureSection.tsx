"use client";

import React from "react";
import {
  FileText,
  Mic,
  Radar,
  Check,
  ArrowRight,
  ArrowDown,
  ShieldCheck,
  Fingerprint,
  Stethoscope,
  Network,
  Smartphone,
  Building2,
  CheckCircle2,
  Activity,
  MapPin,
  Users,
} from "lucide-react";

export const PlatformArchitectureSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-bg-alt border-t border-line-soft relative overflow-hidden" id="product">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-[680px] mb-12 text-left">
          <span className="eyebrow-tag">THE VETRA PLATFORM</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-pasture-900 font-semibold mt-3.5 mb-4 leading-[1.12] tracking-tight">
            Three connected systems. One complete livestock health layer.
          </h2>
          <p className="text-base sm:text-[17px] text-ink-soft leading-relaxed">
            Vetra connects animal identity, clinical intelligence, and outbreak prevention into a unified platform built for farmers, veterinarians, and livestock networks.
          </p>
        </div>

        {/* Visual Architecture Flow Indicator */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-card/90 border border-line shadow-xs">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
            {/* Step 1 */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <span className="w-7 h-7 rounded-lg bg-pasture-900 text-bg flex items-center justify-center font-bold text-[11px] shrink-0">
                01
              </span>
              <div>
                <strong className="block text-pasture-900 font-semibold text-xs sm:text-sm">Animal Record</strong>
                <span className="text-[11px] text-ink-soft">Persistent Digital Identity</span>
              </div>
            </div>

            {/* Connector 1 */}
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
                <strong className="block text-pasture-900 font-semibold text-xs sm:text-sm">Clinical Intelligence</strong>
                <span className="text-[11px] text-ink-soft">Voice &amp; Vision Triage</span>
              </div>
            </div>

            {/* Connector 2 */}
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
                <strong className="block text-pasture-900 font-semibold text-xs sm:text-sm">Disease Prevention</strong>
                <span className="text-[11px] text-ink-soft">Geofenced Radius Alerts</span>
              </div>
            </div>
          </div>
        </div>

        {/* Three Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {/* Card 1: Digital Animal Passport */}
          <div className="bg-card border border-line rounded-2xl p-7 sm:p-8 space-y-5 tactile-card hover:bg-white transition-all shadow-tactile flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-pasture-900 text-bg flex items-center justify-center shadow-xs">
                  <Fingerprint className="w-6 h-6 stroke-[1.6]" />
                </div>
                <span className="font-mono text-[10px] font-bold text-pasture-700 uppercase tracking-widest bg-pasture-500/10 px-2.5 py-1 rounded-full border border-pasture-500/20">
                  System 01
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-pasture-900 tracking-tight">
                Digital Animal Passport
              </h3>

              <p className="text-sm text-ink-soft leading-relaxed">
                Every animal receives a persistent digital identity containing health history, vaccination records, treatment information, and important lifecycle events.
              </p>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-dashed border-line-soft">
              {[
                "Animal identification",
                "Health timeline",
                "Vaccination records",
                "Treatment history",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-xs text-pasture-900 font-medium">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Multilingual AI & Clinical Intelligence */}
          <div className="bg-card border border-line rounded-2xl p-7 sm:p-8 space-y-5 tactile-card hover:bg-white transition-all shadow-tactile flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-pasture-900 text-bg flex items-center justify-center shadow-xs">
                  <Mic className="w-6 h-6 stroke-[1.6]" />
                </div>
                <span className="font-mono text-[10px] font-bold text-pasture-700 uppercase tracking-widest bg-pasture-500/10 px-2.5 py-1 rounded-full border border-pasture-500/20">
                  System 02
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-pasture-900 tracking-tight">
                Multilingual Veterinary Assistance
              </h3>

              <p className="text-sm text-ink-soft leading-relaxed">
                Farmers can communicate animal health concerns in their preferred language. Vetra helps bridge the communication gap between rural livestock owners and veterinary professionals.
              </p>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-dashed border-line-soft">
              {[
                "Multilingual voice (Marathi, Hindi, English)",
                "Natural speech-to-text symptom capture",
                "Structured preliminary clinical summary",
                "Veterinarian-governed final care & Rx",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-xs text-pasture-900 font-medium">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Biosecurity & Outbreak Intelligence */}
          <div className="bg-card border border-line rounded-2xl p-7 sm:p-8 space-y-5 tactile-card hover:bg-white transition-all shadow-tactile flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-pasture-900 text-bg flex items-center justify-center shadow-xs">
                  <Radar className="w-6 h-6 stroke-[1.6]" />
                </div>
                <span className="font-mono text-[10px] font-bold text-pasture-700 uppercase tracking-widest bg-pasture-500/10 px-2.5 py-1 rounded-full border border-pasture-500/20">
                  System 03
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-pasture-900 tracking-tight">
                Biosecurity &amp; Outbreak Intelligence
              </h3>

              <p className="text-sm text-ink-soft leading-relaxed">
                Vetra helps identify potential disease risks and supports faster response by connecting livestock health information with outbreak awareness.
              </p>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-dashed border-line-soft">
              {[
                "Disease monitoring",
                "Risk identification",
                "Geographic awareness",
                "Veterinary coordination",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-xs text-pasture-900 font-medium">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Three Dedicated Stakeholder Portals / Applications */}
        <div className="mt-16 pt-12 border-t border-dashed border-line">
          <div className="max-w-[720px] mb-10 text-left">
            <span className="eyebrow-tag">3-TIER APPLICATION ECOSYSTEM</span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-[32px] text-pasture-900 font-semibold mt-2.5 mb-3 leading-tight tracking-tight">
              Purpose-Built Interfaces for Every Healthcare Stakeholder
            </h3>
            <p className="text-sm sm:text-base text-ink-soft leading-relaxed">
              Vetra provides dedicated, role-authenticated applications uniting farmers in remote sheds, traveling clinical veterinarians, and government biosecurity officers into one synchronized network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Portal 1: Farmer Mobile App */}
            <div className="bg-card border border-line rounded-2xl p-6 sm:p-7 space-y-4 tactile-card hover:bg-white transition-all shadow-tactile flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-pasture-900 text-bg flex items-center justify-center shadow-xs">
                    <Smartphone className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <span className="font-mono text-[9.5px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Farmer Client
                  </span>
                </div>

                <div>
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-pasture-900 tracking-tight">
                    Farmer Mobile App
                  </h4>
                  <span className="text-xs font-mono text-pasture-700 font-semibold block mt-0.5">
                    Offline-First Flutter Client
                  </span>
                </div>

                <p className="text-xs sm:text-[13px] text-ink-soft leading-relaxed">
                  Engineered for rural connectivity with Marathi, Hindi, and English voice triage, 10 quick clinical symptom chips, digital QR animal passport, and direct emergency vet calling.
                </p>

                <div className="space-y-2 pt-2 border-t border-dashed border-line-soft font-mono text-[11px] text-pasture-900">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span>Multilingual voice symptom triage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span>Zero-internet local sync buffer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span>12-digit RFID QR passport wallet</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span>One-tap emergency vet hotline</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-dashed border-line-soft font-mono text-[10px] text-ink-soft flex items-center justify-between">
                <span>Flutter 3.29 • Android / iOS</span>
                <span className="font-semibold text-pasture-700">Production Build</span>
              </div>
            </div>

            {/* Portal 2: Veterinarian Clinical App */}
            <div className="bg-card border border-line rounded-2xl p-6 sm:p-7 space-y-4 tactile-card hover:bg-white transition-all shadow-tactile flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-pasture-900 text-bg flex items-center justify-center shadow-xs">
                    <Stethoscope className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <span className="font-mono text-[9.5px] font-bold text-sky-800 bg-sky-100 px-2.5 py-0.5 rounded-full border border-sky-200">
                    Clinical Suite
                  </span>
                </div>

                <div>
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-pasture-900 tracking-tight">
                    Veterinarian Clinical App
                  </h4>
                  <span className="text-xs font-mono text-pasture-700 font-semibold block mt-0.5">
                    EVMR &amp; Digital Prescribing
                  </span>
                </div>

                <p className="text-xs sm:text-[13px] text-ink-soft leading-relaxed">
                  Streamlines physical field visits with 90-second EVMR charting, verified VCI prescribing credentials, AI differential triage assistance, and en-route emergency visit dispatch.
                </p>

                <div className="space-y-2 pt-2 border-t border-dashed border-line-soft font-mono text-[11px] text-pasture-900">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-700 shrink-0" />
                    <span>90-second EVMR mobile charting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-700 shrink-0" />
                    <span>VCI credential verification badge</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-700 shrink-0" />
                    <span>AI differential diagnosis assistant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-700 shrink-0" />
                    <span>En-route live appointment navigation</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-dashed border-line-soft font-mono text-[10px] text-ink-soft flex items-center justify-between">
                <span>VCI-Verified • Tablet &amp; Mobile</span>
                <span className="font-semibold text-pasture-700">Clinical Active</span>
              </div>
            </div>

            {/* Portal 3: Government Surveillance & Outbreak Radar Command Center */}
            <div className="bg-card border border-line rounded-2xl p-6 sm:p-7 space-y-4 tactile-card hover:bg-white transition-all shadow-tactile flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-pasture-900 text-bg flex items-center justify-center shadow-xs">
                    <Building2 className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <span className="font-mono text-[9.5px] font-bold text-rose-800 bg-rose-100 px-2.5 py-0.5 rounded-full border border-rose-200">
                    Command Center
                  </span>
                </div>

                <div>
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-pasture-900 tracking-tight">
                    Government Outbreak Radar
                  </h4>
                  <span className="text-xs font-mono text-pasture-700 font-semibold block mt-0.5">
                    Web GIS Surveillance Center
                  </span>
                </div>

                <p className="text-xs sm:text-[13px] text-ink-soft leading-relaxed">
                  Real-time epidemiological dashboard for District Animal Husbandry Officers, running PostGIS spatial-temporal cluster analysis, 10–25 km ring containment, and quarantine enforcement.
                </p>

                <div className="space-y-2 pt-2 border-t border-dashed border-line-soft font-mono text-[11px] text-pasture-900">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-rose-700 shrink-0" />
                    <span>PostGIS spatial-temporal clustering</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-rose-700 shrink-0" />
                    <span>10–25 km dynamic ring containment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-rose-700 shrink-0" />
                    <span>Automated ring-vaccination notices</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-rose-700 shrink-0" />
                    <span>District mortality spike alarms</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-dashed border-line-soft font-mono text-[10px] text-ink-soft flex items-center justify-between">
                <span>Web GIS • PostGIS Spatial Engine</span>
                <span className="font-semibold text-pasture-700">Surveillance Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
