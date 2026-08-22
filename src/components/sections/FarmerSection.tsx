"use client";

import React from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Languages, WifiOff, BellRing, QrCode, Sparkles, Mic, CheckCircle2, Download } from "lucide-react";

interface FarmerSectionProps {
  onOpenDownload: () => void;
}

export const FarmerSection: React.FC<FarmerSectionProps> = ({ onOpenDownload }) => {
  const farmerFeatures = [
    {
      icon: <Languages className="w-5 h-5 text-emerald-700" />,
      title: "Multilingual Voice & Visual Interface",
      description: "Speak or take a photo in Hindi, Marathi, or English. Designed for seamless adoption by rural dairy producers.",
    },
    {
      icon: <WifiOff className="w-5 h-5 text-emerald-700" />,
      title: "Zero-Internet Offline Guarantee",
      description: "Log animal health, record milk yields, or review vaccination dates inside the shed with zero mobile signal.",
    },
    {
      icon: <BellRing className="w-5 h-5 text-emerald-700" />,
      title: "Proactive Vaccine & Deworming Alerts",
      description: "Automated SMS and push reminders 14 days before FMD, LSD, or Black Quarter boosters are due.",
    },
    {
      icon: <QrCode className="w-5 h-5 text-emerald-700" />,
      title: "Digital Animal Passport on Every Cow",
      description: "Generate waterproof QR neck tags. Boost animal resale value with authenticated lifetime medical records.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-emerald-50/40 relative overflow-hidden" id="farmers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Farmer Benefits */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeader
              badgeText="Empowering Farmers"
              badgeVariant="primary"
              title={
                <span>
                  Built for the Realities of <span className="text-gradient-forest">Indian Livestock Farming</span>
                </span>
              }
              subtitle="From smallholder farmers with 2 cows to commercial dairies managing 500+ cattle, Vetra replaces uncertainty with instant veterinary support."
              align="left"
              className="mb-8"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {farmerFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-emerald-900/10 shadow-xs hover:border-emerald-700/30 transition-all space-y-2"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-100/70 flex items-center justify-center">
                    {feat.icon}
                  </div>
                  <h4 className="text-base font-bold text-vetra-dark">{feat.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{feat.description}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Button
                variant="primary"
                size="md"
                onClick={onOpenDownload}
                icon={<Download className="w-4 h-4" />}
                iconPosition="left"
              >
                Download Farmer App (Free APK)
              </Button>
            </div>
          </div>

          {/* Right Column: Farmer Mobile UI Simulation */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 border border-emerald-800/15 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center">
                    RP
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">Rameshwar Patil (रामेश्वर पाटील)</div>
                    <div className="text-[10px] text-slate-500">Baramati, Pune • 14 Cattle Active</div>
                  </div>
                </div>
                <Badge variant="success" size="sm">
                  Online Sync
                </Badge>
              </div>

              {/* Quick Status Cards */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200/60">
                  <div className="text-[10px] text-emerald-800 font-semibold uppercase">Daily Milk Yield</div>
                  <div className="text-lg font-black text-emerald-900 mt-0.5">142 Liters</div>
                  <span className="text-[10px] text-emerald-700 font-medium">↑ 4.2% this week</span>
                </div>
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/60">
                  <div className="text-[10px] text-amber-800 font-semibold uppercase">Vaccine Status</div>
                  <div className="text-lg font-black text-amber-900 mt-0.5">1 Due Soon</div>
                  <span className="text-[10px] text-amber-700 font-medium">FMD Booster</span>
                </div>
              </div>

              {/* Sample Voice AI Triage Prompt in App */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Mic className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Voice Triage (मराठी / Hindi)</span>
                  </span>
                  <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded-full font-semibold">
                    AI Active
                  </span>
                </div>
                <p className="text-xs text-slate-700 italic bg-white p-2.5 rounded-xl border border-slate-200">
                  &quot;गायीच्या तोंडातून लाळ गळत आहे आणि पायाला जखम झाली आहे...&quot;
                </p>
                <div className="text-[11px] text-emerald-800 bg-emerald-100/70 p-2 rounded-lg font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>Detected: High FMD Suspicion. Doctor alerted. Isolation recommended.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
