"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Passport3D } from "@/components/interactive/Passport3D";
import { BiosecurityRadar3D } from "@/components/interactive/BiosecurityRadar3D";
import { PhoneMockup3D } from "@/components/interactive/PhoneMockup3D";
import { VoiceTriageSimulator } from "@/components/interactive/VoiceTriageSimulator";
import { ProblemStatementSection } from "@/components/sections/ProblemStatementSection";
import { PlatformArchitectureSection } from "@/components/sections/PlatformArchitectureSection";
import { DigitalPassportSection } from "@/components/sections/DigitalPassportSection";
import { ExperienceVetraSection } from "@/components/sections/ExperienceVetraSection";
import { AiAssessmentDemoSection } from "@/components/sections/AiAssessmentDemoSection";
import { HowVetraWorksSection } from "@/components/sections/HowVetraWorksSection";
import { TrustAndCredibilitySection } from "@/components/sections/TrustAndCredibilitySection";
import { UnderTheHoodSection } from "@/components/sections/UnderTheHoodSection";
import { ImpactAndVisionSection } from "@/components/sections/ImpactAndVisionSection";
import { TeamAndStorySection } from "@/components/sections/TeamAndStorySection";
import { JoinEcosystemSection } from "@/components/sections/JoinEcosystemSection";
import { DownloadAppModal } from "@/components/modals/DownloadAppModal";
import { PaperGrain } from "@/components/ui/PaperGrain";
import {
  Download,
  Stethoscope,
  ShieldCheck,
  Check,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  ChevronRight,
  FileText,
  Activity,
  CheckCircle2,
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [waitlistContact, setWaitlistContact] = useState("");
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
  const [vetFormSubmitted, setVetFormSubmitted] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Vet Form State
  const [vetData, setVetData] = useState({
    fullName: "",
    clinic: "",
    phone: "",
    district: "",
    species: [] as string[],
  });

  // Contact Form State
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (waitlistContact.trim()) {
      setWaitlistSubmitted(true);
    }
  };

  const handleVetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setVetFormSubmitted(true);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  const handleSpeciesToggle = (specie: string) => {
    setVetData((prev) => ({
      ...prev,
      species: prev.species.includes(specie)
        ? prev.species.filter((s) => s !== specie)
        : [...prev.species, specie],
    }));
  };

  return (
    <div className="min-h-screen bg-bg text-ink selection:bg-gold-500/30 selection:text-pasture-900 relative">
      {/* Archival Paper Grain Layer */}
      <PaperGrain />

      {/* ---------- STICKY HEADER ---------- */}
      <header className="sticky top-0 z-50 bg-bg/90 backdrop-blur-md border-b border-line-soft transition-all">
        <nav className="max-w-[1180px] mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="#top" className="flex items-center gap-2.5 font-serif font-semibold text-xl text-pasture-900 group">
            <Image
              src="/branding/vetra_logo_transparent.png"
              alt="Vetra Logo"
              width={38}
              height={38}
              className="w-9 h-9 object-contain transition-transform group-hover:scale-105"
              priority
            />
            <span className="tracking-tight">Vetra</span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-6 text-[14px]">
            <li>
              <a href="#product" className="text-ink-soft hover:text-pasture-900 transition-colors">
                Platform
              </a>
            </li>
            <li>
              <a href="#passport" className="text-ink-soft hover:text-pasture-900 transition-colors">
                Passport
              </a>
            </li>
            <li>
              <a href="#ai-scanner" className="text-ink-soft hover:text-pasture-900 transition-colors">
                AI Scanner
              </a>
            </li>
            <li>
              <a href="#voice-triage" className="text-ink-soft hover:text-pasture-900 transition-colors flex items-center gap-1">
                <span>Voice Triage</span>
                <span className="font-mono text-[10px] font-bold bg-gold-500/20 text-pasture-900 px-1.5 py-0.2 rounded">Voice AI</span>
              </a>
            </li>
            <li>
              <a href="#biosecurity" className="text-ink-soft hover:text-pasture-900 transition-colors">
                Radar
              </a>
            </li>
            <li>
              <a href="#architecture" className="text-ink-soft hover:text-pasture-900 transition-colors">
                Architecture
              </a>
            </li>
            <li>
              <a href="#vision" className="text-ink-soft hover:text-pasture-900 transition-colors">
                Vision
              </a>
            </li>
            <li>
              <a href="#team" className="text-ink-soft hover:text-pasture-900 transition-colors">
                Team
              </a>
            </li>
            <li>
              <a href="#credibility" className="text-ink-soft hover:text-pasture-900 transition-colors">
                Trust &amp; Safety
              </a>
            </li>
            <li>
              <a
                href="#register-vet"
                className="text-xs font-semibold bg-pasture-900 text-bg px-4 py-2 rounded-full border border-pasture-900 hover:bg-pasture-700 transition-all shadow-xs"
              >
                Register as vet
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 text-ink hover:text-pasture-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-pasture-900/20"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="mobile-nav-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation Drawer & Backdrop */}
        {mobileMenuOpen && (
          <>
            <div
              className="fixed inset-0 top-[65px] bg-black/30 backdrop-blur-xs z-40 md:hidden animate-fade-in"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />
            <div
              id="mobile-nav-menu"
              className="relative z-50 md:hidden bg-bg border-b border-line px-5 py-4 space-y-1 shadow-lg max-h-[calc(100vh-80px)] overflow-y-auto animate-fade-in"
            >
              {[
                { href: "#product", label: "Platform Overview" },
                { href: "#passport", label: "Digital Animal Passport" },
                { href: "#ai-scanner", label: "AI Symptom Scanner" },
                { href: "#voice-triage", label: "Voice Triage (Marathi/Hindi/English)" },
                { href: "#biosecurity", label: "Biosecurity Outbreak Radar" },
                { href: "#architecture", label: "Under the Hood Architecture" },
                { href: "#vision", label: "Our Vision & Roadmap" },
                { href: "#team", label: "The Team Behind Vetra" },
                { href: "#credibility", label: "Trust & Safety Governance" },
                { href: "#contact", label: "Partnership & Inquiries" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center min-h-[44px] px-3.5 py-2.5 rounded-xl text-sm font-medium text-ink-soft hover:text-pasture-900 hover:bg-bg-alt transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#register-vet"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center min-h-[44px] px-4 py-2.5 text-xs font-semibold bg-pasture-900 text-bg rounded-xl hover:bg-pasture-800 transition-colors shadow-xs"
                >
                  Register as Veterinarian
                </a>
              </div>
            </div>
          </>
        )}
      </header>

      <main id="top">
        {/* ---------- HERO SECTION ---------- */}
        <section className="relative py-16 sm:py-24 overflow-hidden bg-diagonal-lines">
          <div className="max-w-[1180px] mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Hero Text Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="eyebrow-tag">EARLY ACCESS PROTOTYPE • DEVELOPED FOR INDIAN LIVESTOCK CARE</span>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] text-pasture-900 font-semibold tracking-tight leading-[1.06]">
                A record for every animal.<br className="hidden sm:inline" /> A radius for every outbreak.
              </h1>

              <p className="text-base sm:text-[17.5px] text-ink-soft max-w-[48ch] leading-relaxed">
                Vetra is India&apos;s livestock health infrastructure platform connecting farmers, veterinarians, and disease surveillance networks through digital animal records, AI-assisted triage, and outbreak intelligence.
              </p>

              <div className="flex flex-wrap gap-3.5 pt-2">
                <a
                  href="#experience"
                  className="btn-gold-tactile inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm sm:text-base cursor-pointer"
                >
                  Experience Working Demos
                </a>

                <a
                  href="#register-vet"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm sm:text-base bg-transparent border border-pasture-900 text-pasture-900 hover:bg-pasture-900 hover:text-bg transition-all transform hover:-translate-y-0.5"
                >
                  For Veterinarians
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-xs sm:text-[13.5px] text-ink-soft pt-2 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-pasture-500 shrink-0" />
                <span>Built for rural veterinary networks across India</span>
              </div>
            </div>

            {/* Right: 3D Holographic Passport Card */}
            <div className="lg:col-span-5 flex justify-center perspective-container">
              <Passport3D />
            </div>
          </div>
        </section>

        {/* ---------- EXPERIENCE VETRA: QUICK-LAUNCH SHOWCASE BAR ---------- */}
        <ExperienceVetraSection />

        {/* ---------- PROBLEM STATEMENT: THE LIVESTOCK HEALTH CHALLENGE ---------- */}
        <ProblemStatementSection />

        {/* ---------- THE VETRA PLATFORM ARCHITECTURE ---------- */}
        <PlatformArchitectureSection />

        {/* ---------- DIGITAL ANIMAL PASSPORT SHOWCASE ---------- */}
        <DigitalPassportSection />

        {/* ---------- AI-ASSISTED CLINICAL ASSESSMENT DEMO ---------- */}
        <AiAssessmentDemoSection />

        {/* ---------- TRILINGUAL VOICE TRIAGE SIMULATOR ---------- */}
        <section className="py-20 sm:py-24 bg-bg border-t border-line-soft" id="voice-triage">
          <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
            <VoiceTriageSimulator />
          </div>
        </section>

        {/* ---------- 3D BIOSECURITY RADAR SHOWCASE ---------- */}
        <section className="py-20 sm:py-24 bg-bg-alt border-t border-line-soft" id="biosecurity">
          <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
            <div className="max-w-[640px] mb-12">
              <span className="eyebrow-tag">Epidemiological Intelligence</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-pasture-900 font-semibold mt-3.5 mb-3">
                Live Biosecurity Outbreak Radar
              </h2>
              <p className="text-base text-ink-soft leading-relaxed">
                Experience how Vetra geo-fences contagious livestock outbreaks (FMD, Lumpy Skin, HS) to protect dairy cooperatives and neighboring farms in real time.
              </p>
            </div>

            <BiosecurityRadar3D />
          </div>
        </section>

        {/* ---------- HOW VETRA WORKS: 5-STAGE WORKFLOW ---------- */}
        <HowVetraWorksSection />

        {/* ---------- TRUST & CREDIBILITY GOVERNANCE ---------- */}
        <TrustAndCredibilitySection />

        {/* ---------- SYSTEM ARCHITECTURE & ENGINEERING: HOW VETRA WORKS UNDER THE HOOD ---------- */}
        <UnderTheHoodSection />

        {/* ---------- OUR VISION & FUTURE ROADMAP ---------- */}
        <ImpactAndVisionSection />

        {/* ---------- THE TEAM BEHIND VETRA & WHY VETRA ---------- */}
        <TeamAndStorySection />

        {/* ---------- DOWNLOAD / EARLY ACCESS & 3D PHONE ---------- */}
        <section className="py-20 sm:py-24 bg-pasture-900 text-bg relative overflow-hidden" id="download">
          <div className="max-w-[1180px] mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Waitlist & App Form */}
            <div className="lg:col-span-7 space-y-6">
              <span className="eyebrow-tag !text-gold-500 before:!bg-gold-500">Get the app</span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-bg font-semibold leading-tight">
                Vetra, on the phone already in your pocket.
              </h2>

              <p className="text-base sm:text-lg text-bg/75 max-w-[46ch] leading-relaxed">
                The farmer app is in pilot with early users across Maharashtra. Leave your number or email and we&apos;ll bring you into the next cohort, or download the direct production APK.
              </p>

              {/* Waitlist Form */}
              <form onSubmit={handleWaitlistSubmit} className="flex flex-wrap gap-2.5 max-w-md">
                <input
                  type="text"
                  required
                  value={waitlistContact}
                  onChange={(e) => setWaitlistContact(e.target.value)}
                  placeholder="Phone or email address"
                  className="flex-1 min-w-[220px] bg-bg/10 border border-bg/30 rounded-full px-4 py-3 text-sm text-bg placeholder-bg/50 focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full font-semibold text-sm bg-gold-500 hover:bg-gold-600 text-pasture-900 transition-all whitespace-nowrap cursor-pointer"
                >
                  Join the waitlist
                </button>
              </form>

              {waitlistSubmitted ? (
                <div className="text-sm font-semibold text-gold-400 bg-gold-500/10 border border-gold-500/30 p-3 rounded-xl max-w-md">
                  ✓ You&apos;re on the priority list. Our field onboarding team will be in touch!
                </div>
              ) : (
                <p className="text-xs text-bg/60">No spam — just a direct message when your cohort opens.</p>
              )}

              {/* Direct APK Download Button */}
              <div className="pt-2">
                <button
                  onClick={() => setDownloadModalOpen(true)}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-bold font-mono uppercase tracking-wider bg-bg/15 hover:bg-bg/25 border border-bg/30 text-bg transition-all cursor-pointer shadow-sm"
                >
                  <Download className="w-4 h-4 text-gold-500" />
                  <span>Download Production APK (v1.0 • 63MB)</span>
                </button>
              </div>

              {/* App Store Placeholders */}
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="flex items-center gap-2.5 border border-bg/25 rounded-xl px-4 py-2 opacity-60 cursor-not-allowed">
                  <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16.5 3c.1 1.1-.3 2.2-1 3-.7.8-1.9 1.5-3 1.4-.1-1.1.4-2.3 1-3C14.2 3.6 15.4 3 16.5 3ZM19.5 17.2c-.5 1.2-1 2.3-1.8 3.3-1 1.3-2 2.6-3.6 2.6-1.5 0-2-.9-3.7-.9-1.7 0-2.3.9-3.7.9-1.5.1-2.6-1.4-3.6-2.7-2-2.7-3.5-7.6-1.5-11 1-1.6 2.7-2.7 4.6-2.7 1.5 0 2.9 1 3.8 1 .9 0 2.6-1.2 4.3-1 .7 0 2.8.3 4.1 2.2-.1.1-2.5 1.4-2.4 4.3 0 3.4 3 4.6 3 4.6-.1.2-.5 1.6-1.5 3.1Z" />
                  </svg>
                  <div className="text-[11px] leading-tight text-left">
                    Coming soon on<strong className="block text-xs font-bold text-bg">App Store</strong>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 border border-bg/25 rounded-xl px-4 py-2 opacity-60 cursor-not-allowed">
                  <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 3.5v17l13-8.5-13-8.5Z" />
                  </svg>
                  <div className="text-[11px] leading-tight text-left">
                    Coming soon on<strong className="block text-xs font-bold text-bg">Google Play</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: 3D Interactive Phone Mockup */}
            <div className="lg:col-span-5 flex justify-center perspective-container">
              <PhoneMockup3D />
            </div>
          </div>
        </section>

        {/* ---------- REGISTER AS VET ---------- */}
        <section className="py-20 sm:py-24 bg-bg" id="register-vet">
          <div className="max-w-[1180px] mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Vet Value & Checklist */}
            <div className="lg:col-span-5 space-y-6">
              <span className="eyebrow-tag">For veterinarians</span>

              <h2 className="font-serif text-3xl sm:text-4xl text-pasture-900 font-semibold leading-tight">
                Practicing vets, this is for you.
              </h2>

              <p className="text-base text-ink-soft leading-relaxed">
                Get matched with nearby livestock cases, review AI-assisted symptom reads, and build a digital clinical caseload — without paper registers.
              </p>

              <ul className="space-y-3.5 pt-2">
                <li className="flex items-start gap-3 text-sm text-ink-soft">
                  <div className="w-5 h-5 rounded-full bg-pasture-500/15 border border-pasture-500 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-pasture-700 stroke-[2.5]" />
                  </div>
                  <span>Review AI-flagged triage cases from your district</span>
                </li>

                <li className="flex items-start gap-3 text-sm text-ink-soft">
                  <div className="w-5 h-5 rounded-full bg-pasture-500/15 border border-pasture-500 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-pasture-700 stroke-[2.5]" />
                  </div>
                  <span>Chart 90s EVMRs with automated dosage and withdrawal periods</span>
                </li>

                <li className="flex items-start gap-3 text-sm text-ink-soft">
                  <div className="w-5 h-5 rounded-full bg-pasture-500/15 border border-pasture-500 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-pasture-700 stroke-[2.5]" />
                  </div>
                  <span>Get discovered by dairy farmers and cooperatives searching nearby</span>
                </li>
              </ul>
            </div>

            {/* Right: Vet Onboarding Form */}
            <div className="lg:col-span-7 bg-card border border-line rounded-2xl p-7 sm:p-9 shadow-tactile">
              {vetFormSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-pasture-500/20 text-pasture-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-pasture-900">Application Received</h3>
                  <p className="text-sm text-ink-soft max-w-md mx-auto">
                    Thanks for applying. Our veterinary verification team will reach out within a few business days to verify your VCI credentials and complete onboarding.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleVetSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-ink-soft">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={vetData.fullName}
                        onChange={(e) => setVetData({ ...vetData, fullName: e.target.value })}
                        placeholder="Dr. Rajesh Pawar"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-line rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-600"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-ink-soft">Clinic / Practice Name</label>
                      <input
                        type="text"
                        value={vetData.clinic}
                        onChange={(e) => setVetData({ ...vetData, clinic: e.target.value })}
                        placeholder="Nashik Animal Polyclinic"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-line rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-ink-soft">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={vetData.phone}
                        onChange={(e) => setVetData({ ...vetData, phone: e.target.value })}
                        placeholder="+91 98220 00000"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-line rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-600"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-ink-soft">District *</label>
                      <input
                        type="text"
                        required
                        value={vetData.district}
                        onChange={(e) => setVetData({ ...vetData, district: e.target.value })}
                        placeholder="Nashik / Pune / Baramati"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-line rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 pt-1">
                    <label className="text-xs font-semibold text-ink-soft block">Species you treat</label>
                    <div className="flex flex-wrap gap-2">
                      {["Cattle", "Buffalo", "Goat / Sheep", "Poultry", "Other"].map((specie) => (
                        <button
                          type="button"
                          key={specie}
                          onClick={() => handleSpeciesToggle(specie)}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all cursor-pointer flex items-center gap-1.5 ${
                            vetData.species.includes(specie)
                              ? "bg-pasture-900 text-bg border-pasture-900 font-semibold"
                              : "bg-white text-ink-soft border-line hover:bg-bg-alt"
                          }`}
                        >
                          <span>{specie}</span>
                          {vetData.species.includes(specie) && <Check className="w-3 h-3 stroke-[3]" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full font-semibold text-sm bg-gold-500 hover:bg-gold-600 text-pasture-900 transition-all shadow-sm cursor-pointer"
                    >
                      Submit application
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ---------- JOIN THE VETRA ECOSYSTEM & CONTACT ---------- */}
        <JoinEcosystemSection />
      </main>

      {/* ---------- FOOTER ---------- */}
      <footer className="bg-pasture-900 text-bg/75 py-14 sm:py-16 border-t border-pasture-800">
        <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-12">
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-3">
              <div className="flex items-center gap-2.5 font-serif font-semibold text-xl text-bg">
                <div className="w-8 h-8 rounded-lg bg-bg/10 p-0.5 flex items-center justify-center">
                  <Image
                    src="/branding/vetra_logo_transparent.png"
                    alt="Vetra Logo"
                    width={32}
                    height={32}
                    className="w-7 h-7 object-contain brightness-125"
                  />
                </div>
                <span>Vetra</span>
              </div>
              <p className="text-xs text-bg/70 max-w-[28ch] leading-relaxed">
                Digitizing livestock health for rural India — one animal record at a time.
              </p>
            </div>

            {/* Product Links */}
            <div className="space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-widest text-bg/50 font-semibold">Product</h4>
              <ul className="space-y-2 text-sm text-bg/80">
                <li><a href="#product" className="hover:text-bg transition-colors">Digital Passport</a></li>
                <li><a href="#product" className="hover:text-bg transition-colors">AI Diagnosis</a></li>
                <li><a href="#biosecurity" className="hover:text-bg transition-colors">Biosecurity Radius</a></li>
                <li>
                  <button onClick={() => setDownloadModalOpen(true)} className="hover:text-bg transition-colors text-left">
                    Download APK
                  </button>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-widest text-bg/50 font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-bg/80">
                <li><a href="#top" className="hover:text-bg transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-bg transition-colors">Contact</a></li>
                <li><a href="#register-vet" className="hover:text-bg transition-colors">For vets</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-widest text-bg/50 font-semibold">Compliance</h4>
              <ul className="space-y-2 text-sm text-bg/80">
                <li><a href="#top" className="hover:text-bg transition-colors">VCI Compliance</a></li>
                <li><a href="#top" className="hover:text-bg transition-colors">Privacy Policy</a></li>
                <li><a href="#top" className="hover:text-bg transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-bg/15 flex flex-wrap justify-between items-center gap-4 text-xs text-bg/50">
            <span>&copy; {new Date().getFullYear()} Vetra. Built in Maharashtra, India.</span>
            <span className="font-mono">vetra.co.in</span>
          </div>
        </div>
      </footer>

      {/* Production APK Download Modal */}
      <DownloadAppModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />
    </div>
  );
}
