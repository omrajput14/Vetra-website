import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck, Heart, ArrowUpRight, Github, Mail, Phone, MapPin, Sparkles } from "lucide-react";

interface FooterProps {
  onOpenDownload: () => void;
  onOpenPartner: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDownload, onOpenPartner }) => {
  return (
    <footer className="bg-vetra-darkest text-white border-t border-vetra-surface relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial-gradient-emerald opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-vetra-dark flex items-center justify-center p-1.5 border border-vetra-mint/30 shadow-md">
                <Image
                  src="/branding/vetra_icon.png"
                  alt="Vetra Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-white">VETRA</span>
                <p className="text-[10px] uppercase font-bold tracking-widest text-vetra-mint">
                  Connected Veterinary OS
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Empowering farmers, dairy herds, and licensed veterinarians with digital animal passports, EVMR clinical charting, AI-assisted triage, and epidemic surveillance.
            </p>

            <div className="pt-2 flex items-center gap-2">
              <Badge variant="dark" size="sm" dot>
                ICAR & VCI Compliant Architecture
              </Badge>
            </div>
          </div>

          {/* Column 1: Product & Tech */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-vetra-pale">Platform</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="#overview" className="hover:text-vetra-mint transition-colors">
                  Digital Animal Passport
                </a>
              </li>
              <li>
                <a href="#solution" className="hover:text-vetra-mint transition-colors">
                  AI Clinical Triage
                </a>
              </li>
              <li>
                <a href="#vets" className="hover:text-vetra-mint transition-colors">
                  EVMR Charting System
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-vetra-mint transition-colors">
                  Offline Sync Engine
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-vetra-mint transition-colors">
                  Epidemic Surveillance
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Stakeholders */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-vetra-pale">Stakeholders</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="#farmers" className="hover:text-vetra-mint transition-colors">
                  For Dairy Farmers
                </a>
              </li>
              <li>
                <a href="#vets" className="hover:text-vetra-mint transition-colors">
                  For Registered Vets
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenPartner}
                  className="hover:text-vetra-mint transition-colors text-left"
                >
                  Dairy Cooperatives
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPartner}
                  className="hover:text-vetra-mint transition-colors text-left"
                >
                  Animal Husbandry Depts
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenDownload}
                  className="hover:text-vetra-mint transition-colors text-left flex items-center gap-1"
                >
                  <span>Download APK</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Trust & Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-vetra-pale">Compliance & Trust</h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-vetra-mint shrink-0 mt-0.5" />
                <span>100% VCI Doctor Verification Protocol</span>
              </div>
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-vetra-mint shrink-0 mt-0.5" />
                <span>Zero Antibiotic Overuse Guardrails</span>
              </div>
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-vetra-mint shrink-0 mt-0.5" />
                <span>AWS ap-south-1 Indian Data Residency</span>
              </div>
              <div className="pt-2 text-slate-400">
                <p>Support: <a href="mailto:contact@vetra.care" className="text-vetra-mint underline">contact@vetra.care</a></p>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory & Disclaimer Banner */}
        <div className="my-8 p-4 rounded-2xl bg-vetra-surface/50 border border-vetra-mint/20 text-xs text-slate-300 leading-relaxed">
          <strong className="text-white">Clinical Scope & Regulatory Compliance Notice:</strong> Vetra AI is an assistive decision-support tool created in accordance with ICAR standards and Veterinary Council of India (VCI) clinical ethics. AI triage provides preliminary urgency ratings and first-aid recommendations; it does not author legal medical prescriptions or replace hands-on physical examinations by a licensed veterinary practitioner.
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Vetra Healthcare Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#faq" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#faq" className="hover:text-white transition-colors">Terms of Clinical Use</a>
            <a href="#faq" className="hover:text-white transition-colors">Security Architecture</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
