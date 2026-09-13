"use client";

import React, { useState } from "react";
import {
  Layers,
  Cpu,
  Stethoscope,
  Radio,
  ArrowRight,
  ArrowDown,
  Database,
  Smartphone,
  Server,
  Cloud,
  Code2,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  GitCommit,
  Terminal,
  Activity,
} from "lucide-react";

export const UnderTheHoodSection: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number>(0);

  const layers = [
    {
      id: "data-collection",
      number: "01",
      name: "Data Collection Layer",
      eyebrow: "EDGE & MULTIMODAL INGESTION",
      summary: "Translates unstructured rural observations into structured digital health payloads.",
      details: [
        {
          label: "Farmer Voice Notes",
          desc: "Captures natural Devanagari and English voice descriptions (Marathi, Hindi, English) in the field.",
        },
        {
          label: "Symptom Imagery",
          desc: "Mobile photo capture of skin nodules, hoof lesions, ocular discharges, or udder inflammation.",
        },
        {
          label: "Animal & Herd Metadata",
          desc: "Associates observations with RFID ear tag IDs, species, breed, lactation stage, and GPS cluster.",
        },
      ],
      output: "Standardized JSON Schema: { animalId, symptomVector, audioBuffer, locationGeo }",
    },
    {
      id: "intelligence",
      number: "02",
      name: "Intelligence & Triage Layer",
      eyebrow: "MULTILINGUAL NLP & COMPUTER VISION",
      summary: "Extracts clinical entities and visual patterns to assist veterinarians during field consultations.",
      details: [
        {
          label: "Speech-to-Text & NER",
          desc: "Phonetic transcription and Named Entity Recognition extracting species, anatomical location, and duration.",
        },
        {
          label: "Assistive Vision Classifier",
          desc: "Feature extraction against dermatological and locomotor lesion patterns for preliminary matching.",
        },
        {
          label: "Responsible AI Boundary",
          desc: "Structures and ranks clinical observations for veterinarian review without making autonomous medical diagnoses.",
        },
      ],
      output: "Triage Assessment Summary with differential indicators and feature confidence scores",
    },
    {
      id: "veterinary-workflow",
      number: "03",
      name: "Veterinary Workflow Layer",
      eyebrow: "CLINICAL VALIDATION & EVMR CHARTING",
      summary: "Routes cases to licensed veterinarians for physical examination and authoritative diagnosis.",
      details: [
        {
          label: "District Case Routing",
          desc: "Dispatches preliminary triage tickets to attending veterinarians in the local sub-district network.",
        },
        {
          label: "90-Second EVMR Charting",
          desc: "Streamlined mobile interface for charting physical examination vitals, diagnosis, and prescription.",
        },
        {
          label: "Digital Record Ledger",
          desc: "Direct write of verified clinical encounters into the animal's persistent Digital Passport.",
        },
      ],
      output: "Verified Electronic Veterinary Medical Record (EVMR) signed by registered VCI doctor",
    },
    {
      id: "biosecurity",
      number: "04",
      name: "Biosecurity Intelligence Layer",
      eyebrow: "EPIDEMIOLOGICAL SURVEILLANCE & GEO-FENCING",
      summary: "Aggregates confirmed infectious disease cases into real-time outbreak radius intelligence.",
      details: [
        {
          label: "Contagious Case Indexing",
          desc: "Monitors real-time occurrences of reportable diseases (FMD, Lumpy Skin, Hemorrhagic Septicemia).",
        },
        {
          label: "Geospatial Buffer Simulation",
          desc: "Calculates dynamic 10 km, 15 km, and 25 km containment perimeters based on farm coordinates.",
        },
        {
          label: "Containment Broadcasts",
          desc: "Triggers automated ring-vaccination notices and voice advisories to neighboring dairy clusters.",
        },
      ],
      output: "Live Outbreak Risk Geofence & localized biosecurity alert broadcasts",
    },
  ];

  const techStack = [
    {
      category: "Mobile Client Tier",
      icon: <Smartphone className="w-4 h-4 text-emerald-700" />,
      title: "Flutter 3.29 & Dart",
      specs: "Material 3, Riverpod 2.x, Dio HTTP, GoRouter, Offline SQLite sync, QR generator/scanner",
      status: "Production Ready",
    },
    {
      category: "Web Platform & GIS",
      icon: <Code2 className="w-4 h-4 text-sky-700" />,
      title: "Next.js 14 & Web GIS",
      specs: "App Router, TypeScript, Tailwind CSS, Outbreak Radar mapping engine, SVG canvas rendering",
      status: "Production Ready",
    },
    {
      category: "Multi-Agent AI Gateway",
      icon: <Sparkles className="w-4 h-4 text-amber-700" />,
      title: "Gemini 1.5 & DeepSeek-V3",
      specs: "Multi-agent circuit breakers, Clinical Uncertainty Scoring, Devanagari Voice STT/TTS (mr, hi, en)",
      status: "Operational",
    },
    {
      category: "Backend Service Layer",
      icon: <Server className="w-4 h-4 text-purple-700" />,
      title: "Spring Boot 3.4.3 (Java 21)",
      specs: "REST APIs (/api/v1), Virtual Threads, Stateless JWT RBAC, Flyway migrations, 307 backend tests",
      status: "Production Ready",
    },
    {
      category: "Database & Spatial Engine",
      icon: <Database className="w-4 h-4 text-blue-700" />,
      title: "PostgreSQL 17 + PostGIS",
      specs: "Spatial-temporal clustering, Haversine bounding boxes, Redis 7.4 cluster caching & invalidation",
      status: "Production Ready",
    },
    {
      category: "Cloud Infrastructure & IaC",
      icon: <Cloud className="w-4 h-4 text-rose-700" />,
      title: "AWS Multi-AZ & Terraform",
      specs: "Terraform IaC (Stages 14.1–14.11), ECS Fargate Auto-Scaling, ALB ACM TLS 1.3, GitHub OIDC",
      status: "Verified Staging",
    },
    {
      category: "Observability & Telemetry",
      icon: <Activity className="w-4 h-4 text-teal-700" />,
      title: "OpenTelemetry & Grafana",
      specs: "Distributed tracing (Tempo), Prometheus alerting & SLOs, CloudWatch log aggregation",
      status: "Telemetry Active",
    },
    {
      category: "National Standards",
      icon: <ShieldCheck className="w-4 h-4 text-gold-600" />,
      title: "Bharat Pashudhan & 1962",
      specs: "12-digit RFID QR standard (NDDB/INAPH interoperable), VCI credential verification, 1962 helpline",
      status: "Standards Aligned",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-bg border-t border-line-soft relative overflow-hidden" id="architecture">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-[720px] mb-14 text-left">
          <span className="eyebrow-tag">SYSTEM ARCHITECTURE &amp; ENGINEERING</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-pasture-900 font-semibold mt-3.5 mb-4 leading-[1.12] tracking-tight">
            How Vetra Works Under the Hood
          </h2>
          <p className="text-base sm:text-[17px] text-ink-soft leading-relaxed">
            A modular 4-tier healthcare architecture engineered for the realities of rural livestock medicine — connecting multimodal field data collection, assistive intelligence, certified clinical workflows, and epidemiological surveillance.
          </p>
        </div>

        {/* 1. Visual End-to-End Data Pipeline */}
        <div className="mb-14 p-6 sm:p-7 rounded-3xl bg-bg-alt border border-line shadow-sm">
          <div className="flex items-center justify-between border-b border-dashed border-line pb-4 mb-6">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-pasture-700" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-pasture-900">
                End-to-End Clinical Data Pipeline
              </span>
            </div>
            <span className="font-mono text-[10px] text-ink-soft bg-card px-2.5 py-0.5 rounded border border-line">
              Deterministic Flow
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 font-mono text-xs">
            {/* Step 1 */}
            <div className="p-3.5 rounded-2xl bg-card border border-line space-y-1 text-center shadow-xs">
              <span className="text-[10px] text-gold-600 font-bold block">STEP 01</span>
              <strong className="text-pasture-900 text-xs block font-serif">Farmer Input</strong>
              <span className="text-[10px] text-ink-soft block">Voice, Photo, ID</span>
            </div>

            {/* Step 2 */}
            <div className="p-3.5 rounded-2xl bg-card border border-line space-y-1 text-center shadow-xs">
              <span className="text-[10px] text-pasture-700 font-bold block">STEP 02</span>
              <strong className="text-pasture-900 text-xs block font-serif">Vetra AI Processing</strong>
              <span className="text-[10px] text-ink-soft block">NLP &amp; Vision Triage</span>
            </div>

            {/* Step 3 */}
            <div className="p-3.5 rounded-2xl bg-card border border-line space-y-1 text-center shadow-xs">
              <span className="text-[10px] text-amber-700 font-bold block">STEP 03</span>
              <strong className="text-pasture-900 text-xs block font-serif">Health Assessment</strong>
              <span className="text-[10px] text-ink-soft block">Structured Findings</span>
            </div>

            {/* Step 4 */}
            <div className="p-3.5 rounded-2xl bg-card border border-line space-y-1 text-center shadow-xs">
              <span className="text-[10px] text-emerald-800 font-bold block">STEP 04</span>
              <strong className="text-pasture-900 text-xs block font-serif">Vet Validation</strong>
              <span className="text-[10px] text-ink-soft block">Physical Exam &amp; Rx</span>
            </div>

            {/* Step 5 */}
            <div className="p-3.5 rounded-2xl bg-card border border-line space-y-1 text-center shadow-xs">
              <span className="text-[10px] text-blue-800 font-bold block">STEP 05</span>
              <strong className="text-pasture-900 text-xs block font-serif">Digital Passport</strong>
              <span className="text-[10px] text-ink-soft block">Permanent EVMR Ledger</span>
            </div>

            {/* Step 6 */}
            <div className="p-3.5 rounded-2xl bg-card border border-line space-y-1 text-center shadow-xs">
              <span className="text-[10px] text-rose-800 font-bold block">STEP 06</span>
              <strong className="text-pasture-900 text-xs block font-serif">Biosecurity Insights</strong>
              <span className="text-[10px] text-ink-soft block">Outbreak Geo-Radius</span>
            </div>
          </div>
        </div>

        {/* 2. Interactive 4-Tier Architecture Tabs / Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Layer Selector Left Column */}
          <div className="lg:col-span-4 space-y-2.5">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-pasture-700 block mb-1">
              Architecture Tiers
            </span>
            {layers.map((layer, idx) => (
              <button
                key={layer.id}
                type="button"
                onClick={() => setActiveLayer(idx)}
                className={`w-full p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                  activeLayer === idx
                    ? "bg-pasture-900 text-bg border-pasture-900 shadow-sm"
                    : "bg-card text-ink border-line hover:bg-bg-alt"
                }`}
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-mono text-xs font-bold ${
                        activeLayer === idx ? "text-gold-500" : "text-pasture-700"
                      }`}
                    >
                      {layer.number}
                    </span>
                    <strong className="font-serif text-sm font-bold block">
                      {layer.name}
                    </strong>
                  </div>
                  <span
                    className={`text-[11px] block ${
                      activeLayer === idx ? "text-bg/80" : "text-ink-soft"
                    }`}
                  >
                    {layer.eyebrow}
                  </span>
                </div>
                <ArrowRight
                  className={`w-4 h-4 shrink-0 transition-transform ${
                    activeLayer === idx ? "translate-x-1 text-gold-500" : "text-ink-soft/40"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Active Layer Deep Dive Card */}
          <div className="lg:col-span-8 bg-card border border-line rounded-3xl p-6 sm:p-8 shadow-tactile relative overflow-hidden tactile-card space-y-6">
            <div className="border-b border-dashed border-line pb-4 flex items-center justify-between">
              <div>
                <span className="font-mono text-[10px] font-bold text-pasture-700 uppercase tracking-wider">
                  Tier {layers[activeLayer].number} • {layers[activeLayer].eyebrow}
                </span>
                <h3 className="font-serif text-2xl font-bold text-pasture-900 mt-1">
                  {layers[activeLayer].name}
                </h3>
              </div>
              <span className="font-mono text-xs font-bold text-pasture-900 bg-bg-alt px-3 py-1 rounded-full border border-line">
                Active Architecture
              </span>
            </div>

            <p className="text-sm sm:text-[15px] text-ink-soft leading-relaxed">
              {layers[activeLayer].summary}
            </p>

            {/* 3 Sub-component Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 font-mono text-xs">
              {layers[activeLayer].details.map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-bg-alt border border-line-soft space-y-1.5 shadow-inner"
                >
                  <strong className="font-serif text-sm font-bold text-pasture-900 block">
                    {item.label}
                  </strong>
                  <p className="text-xs text-ink-soft leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Data Schema Output Banner */}
            <div className="p-4 rounded-2xl bg-pasture-900 text-bg font-mono text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-sm">
              <div>
                <span className="text-[10px] text-gold-500 font-bold block uppercase tracking-wider">
                  Layer Output Payload:
                </span>
                <div className="text-xs font-semibold text-bg/95">
                  {layers[activeLayer].output}
                </div>
              </div>
              <span className="text-[10px] uppercase font-bold text-pasture-700 bg-gold-500/20 text-gold-400 px-2 py-0.5 rounded border border-gold-500/30 shrink-0">
                Verified Flow
              </span>
            </div>
          </div>
        </div>

        {/* 3. Verified Technology Stack Grid */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-dashed border-line pb-4">
            <div>
              <span className="eyebrow-tag !mb-1">IMPLEMENTED &amp; STAGING STACK</span>
              <h3 className="font-serif text-2xl font-bold text-pasture-900">
                Technology Foundations
              </h3>
            </div>
            <span className="font-mono text-xs text-ink-soft">
              Documented in ARCH-02-FLUTTER &amp; API-15.01
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="bg-card border border-line rounded-2xl p-5 space-y-3 tactile-card hover:bg-white transition-all shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-bg-alt flex items-center justify-center border border-line-soft">
                        {tech.icon}
                      </div>
                      <span className="font-mono text-[10.5px] uppercase font-semibold text-ink-soft">
                        {tech.category}
                      </span>
                    </div>
                    <span className="font-mono text-[9.5px] font-bold text-pasture-800 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-200">
                      {tech.status}
                    </span>
                  </div>

                  <h4 className="font-serif text-base font-bold text-pasture-900">
                    {tech.title}
                  </h4>

                  <p className="text-xs text-ink-soft leading-relaxed font-mono">
                    {tech.specs}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-dashed border-line-soft flex items-center gap-1.5 text-[10.5px] font-mono text-pasture-700">
                  <CheckCircle2 className="w-3 h-3 text-emerald-700 shrink-0" />
                  <span>Production &amp; Staging Spec Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Unified System Architecture Diagram Viewer */}
        <div className="mt-16 pt-12 border-t border-dashed border-line">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="eyebrow-tag !mb-1">FULL-SYSTEM CLOUD TOPOLOGY</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-pasture-900">
                End-to-End System Architecture
              </h3>
              <p className="text-xs sm:text-sm text-ink-soft leading-relaxed mt-1">
                Visualizing the complete 5-layer interaction between rural edge mobile apps, resilient API gateway, Spring Boot microservices, PostGIS spatial clustering, and multi-AZ cloud infrastructure.
              </p>
            </div>
            <a
              href="/system_architecture.svg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-line hover:border-pasture-900 font-mono text-xs text-pasture-900 font-semibold transition-all shadow-xs shrink-0 self-start sm:self-auto"
            >
              <span>View Full Vector SVG</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="bg-card border border-line rounded-3xl p-4 sm:p-6 shadow-tactile overflow-hidden tactile-card space-y-4">
            <div className="relative w-full rounded-2xl overflow-hidden border border-line-soft bg-white p-2">
              <img
                src="/system_architecture.svg"
                alt="Vetra Enterprise Platform Architecture"
                className="w-full h-auto object-contain max-h-[720px] mx-auto select-none"
                loading="lazy"
              />
            </div>
            <div className="pt-3 border-t border-dashed border-line-soft font-mono text-[11px] text-ink-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <span>Architecture Tiers: 01 Client Apps • 02 Gateway &amp; Auth • 03 Domain Services • 04 Spatial Data Tier • 05 AWS Cloud &amp; SRE</span>
              <span className="text-pasture-700 font-semibold">Spring Boot 3.4.3 • PostGIS 17 • ECS Fargate</span>
            </div>
          </div>
        </div>

        {/* 4. Product Roadmap & Phasing Note */}
        <div className="mt-12 p-6 rounded-2xl bg-bg-alt border border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-ink-soft">
          <div className="flex items-center gap-3">
            <GitCommit className="w-5 h-5 text-pasture-700 shrink-0" />
            <div>
              <strong className="text-pasture-900 block font-semibold text-xs">
                Product Lifecycle Stage: Early Access / Technical MVP
              </strong>
              <span className="text-[11px]">
                Core Passport, Multilingual Voice Triage, AI Symptom Scanner, and Biosecurity Radar are fully functional in active staging builds. Automated inter-district government federation is planned in Stage 19.
              </span>
            </div>
          </div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-pasture-700 bg-card px-3 py-1 rounded-full border border-line shrink-0">
            Roadmap 2026
          </span>
        </div>
      </div>
    </section>
  );
};
