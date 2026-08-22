"use client";

import React, { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Download, Smartphone, CheckCircle2, ShieldCheck, Copy, Check } from "lucide-react";

interface DownloadAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadAppModal: React.FC<DownloadAppModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const apkDownloadUrl = "/downloads/Vetra-v1.0-production.apk";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin + apkDownloadUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Download Vetra App"
      subtitle="Complete livestock health management in your pocket. Built for rural resilience."
      maxWidth="lg"
    >
      <div className="space-y-6 pt-2">
        {/* Android Production Release Card */}
        <div className="p-5 rounded-2xl bg-[#EAE5D4]/70 border border-[rgba(33,31,22,0.14)] space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#1E3324] flex items-center justify-center text-[#F1EEE1] shadow-md">
              <Smartphone className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-[#1E3324] text-base">Vetra Android Release</h4>
                <span className="font-mono text-[10px] font-bold bg-[#D2A23A] text-[#1E3324] px-2 py-0.5 rounded-full">
                  v1.0 Production
                </span>
              </div>
              <p className="font-mono text-xs text-[#4B4939] mt-0.5">Direct APK Package • 63.4 MB • Android 9.0+</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs text-[#4B4939] pt-1">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#3F6B49] shrink-0" />
              <span>100% Offline Capable</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#3F6B49] shrink-0" />
              <span>English, Hindi & Marathi</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#3F6B49] shrink-0" />
              <span>Instant QR Passport Scanner</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#3F6B49] shrink-0" />
              <span>SHA-256 Signed Binary</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 pt-3 border-t border-[rgba(33,31,22,0.1)]">
            <a
              href={apkDownloadUrl}
              download="Vetra-v1.0-production.apk"
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-sm bg-[#D2A23A] hover:bg-[#B98726] text-[#1E3324] transition-all cursor-pointer shadow-sm text-center"
            >
              <Download className="w-4 h-4" />
              <span>Download Production APK (63MB)</span>
            </a>

            <button
              onClick={handleCopyLink}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full font-semibold text-sm bg-transparent border border-[#1E3324] text-[#1E3324] hover:bg-[#1E3324] hover:text-[#F1EEE1] transition-all cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? "Link Copied!" : "Copy Link"}</span>
            </button>
          </div>
        </div>

        {/* Security & Verification Notice */}
        <div className="flex items-center gap-2 text-[11px] text-[#4B4939] justify-center">
          <ShieldCheck className="w-4 h-4 text-[#3F6B49] shrink-0" />
          <span>Signed with official Vetra Release Keystore. Safe for all farm installations.</span>
        </div>
      </div>
    </Modal>
  );
};
