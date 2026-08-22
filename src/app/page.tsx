"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Passport3D } from "@/components/interactive/Passport3D";
import { BiosecurityRadar3D } from "@/components/interactive/BiosecurityRadar3D";
import { PhoneMockup3D } from "@/components/interactive/PhoneMockup3D";
import { DownloadAppModal } from "@/components/modals/DownloadAppModal";
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
    <div className="min-h-screen bg-bg text-ink selection:bg-gold-500/30 selection:text-pasture-900">
      {/* ---------- STICKY HEADER ---------- */}
      <header className="sticky top-0 z-50 bg-bg/90 backdrop-blur-md border-b border-line-soft transition-all">
        <nav className="max-w-[1180px] mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="#top" className="flex items-center gap-2.5 font-serif font-semibold text-xl text-pasture-900 group">
            <svg className="w-7 h-6 transition-transform group-hover:scale-105" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 2H22L28 9V22C28 23.1 27.1 24 26 24H4C2.9 24 2 23.1 2 22V4C2 2.9 2.9 2 4 2Z" stroke="#1E3324" strokeWidth="2" />
              <circle cx="21" cy="8" r="2.2" stroke="#1E3324" strokeWidth="1.6" />
              <text x="7" y="18" fontFamily="'IBM Plex Mono', monospace" fontSize="10" fill="#1E3324">V</text>
            </svg>
            <span>Vetra</span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-7 text-[14.5px]">
            <li>
              <a href="#product" className="text-ink-soft hover:text-pasture-900 transition-colors">
                Product
              </a>
            </li>
            <li>
              <a href="#biosecurity" className="text-ink-soft hover:text-pasture-900 transition-colors">
                Biosecurity Radar
              </a>
            </li>
            <li>
              <a href="#how" className="text-ink-soft hover:text-pasture-900 transition-colors">
                How it works
              </a>
            </li>
            <li>
              <a href="#download" className="text-ink-soft hover:text-pasture-900 transition-colors">
                Download
              </a>
            </li>
            <li>
              <a href="#contact" className="text-ink-soft hover:text-pasture-900 transition-colors">
                Contact
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
            className="md:hidden p-2 text-ink hover:text-pasture-900"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-bg border-b border-line px-6 py-4 space-y-3 animate-fade-in">
            <a
              href="#product"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-ink-soft hover:text-pasture-900 font-medium border-b border-line-soft"
            >
              Product
            </a>
            <a
              href="#biosecurity"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-ink-soft hover:text-pasture-900 font-medium border-b border-line-soft"
            >
              Biosecurity Radar
            </a>
            <a
              href="#how"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-ink-soft hover:text-pasture-900 font-medium border-b border-line-soft"
            >
              How it works
            </a>
            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-ink-soft hover:text-pasture-900 font-medium border-b border-line-soft"
            >
              Download APK / App
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-ink-soft hover:text-pasture-900 font-medium border-b border-line-soft"
            >
              Contact
            </a>
            <a
              href="#register-vet"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 text-center text-xs font-semibold bg-pasture-900 text-bg rounded-full mt-2"
            >
              Register as vet
            </a>
          </div>
        )}
      </header>

      <main id="top">
        {/* ---------- HERO SECTION ---------- */}
        <section className="relative py-16 sm:py-24 overflow-hidden bg-diagonal-lines">
          <div className="max-w-[1180px] mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Hero Text Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="eyebrow-tag">Livestock health · digitized</span>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] text-pasture-900 font-semibold tracking-tight leading-[1.06]">
                A record for every animal. A radius for every outbreak.
              </h1>

              <p className="text-base sm:text-[17.5px] text-ink-soft max-w-[46ch] leading-relaxed">
                Vetra gives every animal a digital passport, flags disease early with AI-assisted diagnosis, and warns nearby farms the moment something contagious is confirmed.
              </p>

              <div className="flex flex-wrap gap-3.5 pt-2">
                <a
                  href="#download"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm sm:text-base bg-gold-500 hover:bg-gold-600 text-pasture-900 transition-all transform hover:-translate-y-0.5 shadow-sm"
                >
                  Get early access
                </a>

                <a
                  href="#register-vet"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm sm:text-base bg-transparent border border-pasture-900 text-pasture-900 hover:bg-pasture-900 hover:text-bg transition-all transform hover:-translate-y-0.5"
                >
                  Register as a vet
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-xs sm:text-[13.5px] text-ink-soft pt-2">
                <span className="w-1.5 h-1.5 rounded-full bg-pasture-500 shrink-0" />
                <span>Piloting with a farmer network across Maharashtra (Nashik, Baramati, Pune)</span>
              </div>
            </div>

            {/* Right: 3D Holographic Passport Card */}
            <div className="lg:col-span-5 flex justify-center perspective-container">
              <Passport3D />
            </div>
          </div>
        </section>

        {/* ---------- PILLARS SECTION ---------- */}
        <section className="py-20 sm:py-24 bg-bg-alt" id="product">
          <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
            <div className="max-w-[640px] mb-12">
              <span className="eyebrow-tag">What Vetra does</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-pasture-900 font-semibold mt-3.5 mb-3">
                Three systems, one animal record.
              </h2>
              <p className="text-base text-ink-soft leading-relaxed">
                Built for the realities of rural veterinary care — patchy connectivity, scattered paper records, and veterinarians who cover more ground than any single clinic can.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line rounded-2xl overflow-hidden shadow-sm">
              {/* Pillar 1: Digital Passport */}
              <div className="bg-card p-8 sm:p-9 space-y-4 hover:bg-white transition-colors">
                <div className="w-12 h-12 rounded-xl bg-pasture-900 flex items-center justify-center text-bg shadow-sm">
                  <svg className="w-6 h-6 stroke-current fill-none stroke-[1.6]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <path d="M7 9h10M7 13h6" />
                    <circle cx="17" cy="16" r="1.4" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-pasture-900">Digital Passport</h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  Every animal gets an ear-tag ID, a health timeline, and an immutable vaccination record that travels with it — not in a paper notebook inside a desk drawer.
                </p>
              </div>

              {/* Pillar 2: AI Diagnosis */}
              <div className="bg-card p-8 sm:p-9 space-y-4 hover:bg-white transition-colors">
                <div className="w-12 h-12 rounded-xl bg-pasture-900 flex items-center justify-center text-bg shadow-sm">
                  <svg className="w-6 h-6 stroke-current fill-none stroke-[1.6]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="7" />
                    <path d="M20 20l-4.35-4.35" />
                    <path d="M11 8v3l2 1.5" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-pasture-900">AI-Assisted Diagnosis</h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  Photograph a symptom and Vetra&apos;s ICAR-aligned vision model flags likely conditions in seconds, then routes the case directly to a registered vet for physical confirmation.
                </p>
              </div>

              {/* Pillar 3: Biosecurity Radius */}
              <div className="bg-card p-8 sm:p-9 space-y-4 hover:bg-white transition-colors">
                <div className="w-12 h-12 rounded-xl bg-pasture-900 flex items-center justify-center text-bg shadow-sm">
                  <svg className="w-6 h-6 stroke-current fill-none stroke-[1.6]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <circle cx="12" cy="12" r="9" strokeDasharray="2 3" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-pasture-900">Biosecurity Radius</h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  When a contagious disease is clinically confirmed, every registered farm within the alert radius is notified automatically — stopping outbreaks before they spread.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- 3D BIOSECURITY RADAR SHOWCASE ---------- */}
        <section className="py-20 sm:py-24 bg-bg" id="biosecurity">
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

        {/* ---------- HOW IT WORKS ---------- */}
        <section className="py-20 sm:py-24 bg-bg-alt border-y border-line-soft" id="how">
          <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
            <div className="max-w-[640px] mb-14">
              <span className="eyebrow-tag">How it works</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-pasture-900 font-semibold mt-3.5 mb-3">
                From symptom to safeguard in four steps.
              </h2>
              <p className="text-base text-ink-soft leading-relaxed">
                A seamless bridge between dairy farmers in the shed and certified practitioners in the district.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
              {/* Step 1 */}
              <div className="border-t-2 border-pasture-500 pt-5 space-y-2">
                <span className="font-mono text-sm font-bold text-gold-600 block">01</span>
                <h3 className="font-serif text-lg font-bold text-pasture-900">Register &amp; tag</h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  Add the animal to Vetra, assign a cryptographic ear-tag ID, and log its baseline health and pedigree offline.
                </p>
              </div>

              {/* Step 2 */}
              <div className="border-t-2 border-pasture-500 pt-5 space-y-2">
                <span className="font-mono text-sm font-bold text-gold-600 block">02</span>
                <h3 className="font-serif text-lg font-bold text-pasture-900">Scan &amp; report</h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  Farmer photographs a symptom in the app — voice or text in Marathi, Hindi, or English. No clinic travel required to start.
                </p>
              </div>

              {/* Step 3 */}
              <div className="border-t-2 border-pasture-500 pt-5 space-y-2">
                <span className="font-mono text-sm font-bold text-gold-600 block">03</span>
                <h3 className="font-serif text-lg font-bold text-pasture-900">Vet verifies</h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  A registered VCI veterinarian reviews the AI triage reading, visits or video-consults, and charts the official 90s EVMR.
                </p>
              </div>

              {/* Step 4 */}
              <div className="border-t-2 border-pasture-500 pt-5 space-y-2">
                <span className="font-mono text-sm font-bold text-gold-600 block">04</span>
                <h3 className="font-serif text-lg font-bold text-pasture-900">Radius alerts</h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  Contagious cases immediately trigger automated ring-vaccination alerts to every registered farm within the radius.
                </p>
              </div>
            </div>
          </div>
        </section>

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

        {/* ---------- CONTACT SECTION ---------- */}
        <section className="py-20 sm:py-24 bg-bg-alt" id="contact">
          <div className="max-w-[1180px] mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Form */}
            <div className="lg:col-span-7 bg-card border border-line rounded-2xl p-7 sm:p-9 shadow-tactile">
              <span className="eyebrow-tag">Get in touch</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-pasture-900 font-semibold mt-3 mb-5">
                Talk to us
              </h2>

              {contactSubmitted ? (
                <div className="p-4 rounded-xl bg-pasture-500/15 border border-pasture-500/30 text-pasture-800 text-sm font-semibold">
                  ✓ Message received — our team will get back to you shortly.
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-ink-soft">Name</label>
                      <input
                        type="text"
                        required
                        value={contactData.name}
                        onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-line rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-600"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-ink-soft">Email</label>
                      <input
                        type="email"
                        required
                        value={contactData.email}
                        onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-line rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-ink-soft">Message</label>
                    <textarea
                      rows={4}
                      required
                      value={contactData.message}
                      onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                      placeholder="How can we help your farm, cooperative, or clinical practice?"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-line rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-7 py-3 rounded-full font-semibold text-sm bg-gold-500 hover:bg-gold-600 text-pasture-900 transition-all cursor-pointer shadow-sm"
                  >
                    Send message
                  </button>
                </form>
              )}
            </div>

            {/* Right: Contact Information Cards */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-pasture-900 flex items-center justify-center text-bg shrink-0 shadow-xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-ink-soft font-mono uppercase">Email</div>
                  <div className="text-base font-semibold text-pasture-900 mt-0.5">
                    <a href="mailto:hello@vetra.co.in" className="hover:underline">
                      hello@vetra.co.in
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-pasture-900 flex items-center justify-center text-bg shrink-0 shadow-xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-ink-soft font-mono uppercase">Phone / WhatsApp</div>
                  <div className="text-base font-semibold text-pasture-900 mt-0.5">+91 98220 18492</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-pasture-900 flex items-center justify-center text-bg shrink-0 shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-ink-soft font-mono uppercase">Location</div>
                  <div className="text-base font-semibold text-pasture-900 mt-0.5">Nashik &amp; Pune, Maharashtra, India</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ---------- FOOTER ---------- */}
      <footer className="bg-pasture-900 text-bg/75 py-14 sm:py-16 border-t border-pasture-800">
        <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-12">
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-3">
              <div className="flex items-center gap-2.5 font-serif font-semibold text-xl text-bg">
                <svg className="w-6 h-5" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 2H22L28 9V22C28 23.1 27.1 24 26 24H4C2.9 24 2 23.1 2 22V4C2 2.9 2.9 2 4 2Z" stroke="#F1EEE1" strokeWidth="2" />
                  <circle cx="21" cy="8" r="2.2" stroke="#F1EEE1" strokeWidth="1.6" />
                </svg>
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
