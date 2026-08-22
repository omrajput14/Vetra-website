"use client";

import React, { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import {
  QrCode,
  ShieldCheck,
  Award,
  Copy,
  Check,
  Printer,
  FileCheck2,
  TrendingUp,
  Activity,
  Dna,
  Calendar,
  Layers,
  MapPin,
  ExternalLink,
} from "lucide-react";

export interface BiometricAnimalDetails {
  id: string;
  tagNumber: string;
  species: string;
  breed: string;
  owner: string;
  location: string;
  healthStatus: string;
  hash: string;
  rfidChip: string;
  muzzleMatch: string;
  pedigree: {
    sire: string;
    sireStation: string;
    sireProgeny: string;
    dam: string;
    damLactation: string;
    damYield: string;
  };
  milkYield: {
    avgDaily: string;
    peakDaily: string;
    fatPercentage: string;
    snfPercentage: string;
    lactationCycle: string;
    daysInMilk: string;
  };
  vaxAudit: { name: string; date: string; vet: string; batch: string }[];
  authority: string;
}

interface BiometricInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  animal: BiometricAnimalDetails;
}

export const BiometricInspectorModal: React.FC<BiometricInspectorModalProps> = ({
  isOpen,
  onClose,
  animal,
}) => {
  const [copied, setCopied] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);

  const handleCopyHash = () => {
    navigator.clipboard.writeText(animal.hash);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    setIsPrinting(true);
    setTimeout(() => {
      window.print();
      setIsPrinting(false);
    }, 300);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Biometric Passport Inspection"
      subtitle={`Official ICAR & NDDB Aligned Livestock Identity Ledger • Tag ${animal.id}`}
      maxWidth="lg"
    >
      <div className="space-y-6 pt-1 select-none text-ink">
        {/* Top Cryptographic Identity Strip */}
        <div className="p-4 rounded-2xl bg-bg-alt/80 border border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-xs">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-bold text-pasture-700 bg-pasture-500/15 px-2 py-0.5 rounded border border-pasture-500/20">
                RFID ISO 11784/85
              </span>
              <span className="text-ink-soft text-[11px]">{animal.rfidChip}</span>
            </div>
            <div className="flex items-center gap-2 text-ink font-bold text-sm">
              <span>{animal.id}</span>
              <span className="text-ink-soft font-normal text-xs">({animal.species} · {animal.breed})</span>
            </div>
          </div>

          <button
            onClick={handleCopyHash}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card border border-line text-ink text-[11px] hover:bg-white transition-all cursor-pointer shadow-xs"
            title="Copy SHA-256 Biometric Hash"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "Hash Copied!" : "Copy SHA-256"}</span>
          </button>
        </div>

        {/* SHA-256 Hash Display */}
        <div className="p-2.5 rounded-xl bg-card border border-line-soft font-mono text-[10px] text-ink-soft flex items-center justify-between overflow-x-auto">
          <span className="text-pasture-900 font-bold shrink-0 mr-2">SHA-256 HASH:</span>
          <span className="text-ink truncate">{animal.hash}</span>
        </div>

        {/* 2-Column Grid: Pedigree Lineage + Milk Yield */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Sire & Dam Pedigree */}
          <div className="p-4 rounded-2xl bg-card border border-line space-y-3 shadow-xs">
            <div className="flex items-center gap-2 border-b border-dashed border-line pb-2">
              <Dna className="w-4 h-4 text-pasture-700" />
              <h4 className="font-serif font-bold text-sm text-pasture-900">Sire &amp; Dam Lineage</h4>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-xl bg-bg-alt/50 border border-line-soft">
                <span className="text-[10px] font-mono text-pasture-700 font-bold uppercase block">
                  SIRE (FATHER)
                </span>
                <strong className="text-ink block text-xs mt-0.5">{animal.pedigree.sire}</strong>
                <p className="text-[11px] text-ink-soft mt-0.5">{animal.pedigree.sireStation}</p>
                <span className="text-[10px] font-mono text-emerald-800 bg-emerald-100/60 px-1.5 py-0.2 rounded mt-1 inline-block">
                  {animal.pedigree.sireProgeny}
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-bg-alt/50 border border-line-soft">
                <span className="text-[10px] font-mono text-pasture-700 font-bold uppercase block">
                  DAM (MOTHER)
                </span>
                <strong className="text-ink block text-xs mt-0.5">{animal.pedigree.dam}</strong>
                <p className="text-[11px] text-ink-soft mt-0.5">{animal.pedigree.damLactation} • {animal.pedigree.damYield}</p>
              </div>
            </div>
          </div>

          {/* Historical Milk Yield Profile */}
          <div className="p-4 rounded-2xl bg-card border border-line space-y-3 shadow-xs">
            <div className="flex items-center gap-2 border-b border-dashed border-line pb-2">
              <TrendingUp className="w-4 h-4 text-gold-600" />
              <h4 className="font-serif font-bold text-sm text-pasture-900">Historical Milk Yield</h4>
            </div>

            <div className="grid grid-cols-2 gap-2 text-center font-mono">
              <div className="p-2.5 rounded-xl bg-bg-alt/50 border border-line-soft">
                <span className="text-[10px] text-ink-soft block uppercase">DAILY AVERAGE</span>
                <strong className="text-sm text-pasture-900 font-bold">{animal.milkYield.avgDaily}</strong>
              </div>

              <div className="p-2.5 rounded-xl bg-bg-alt/50 border border-line-soft">
                <span className="text-[10px] text-ink-soft block uppercase">PEAK RECORD</span>
                <strong className="text-sm text-pasture-900 font-bold">{animal.milkYield.peakDaily}</strong>
              </div>

              <div className="p-2.5 rounded-xl bg-bg-alt/50 border border-line-soft">
                <span className="text-[10px] text-ink-soft block uppercase">FAT %</span>
                <strong className="text-sm text-emerald-800 font-bold">{animal.milkYield.fatPercentage}</strong>
              </div>

              <div className="p-2.5 rounded-xl bg-bg-alt/50 border border-line-soft">
                <span className="text-[10px] text-ink-soft block uppercase">SNF %</span>
                <strong className="text-sm text-emerald-800 font-bold">{animal.milkYield.snfPercentage}</strong>
              </div>
            </div>

            <div className="text-[11px] text-ink-soft text-center pt-1 font-mono">
              {animal.milkYield.lactationCycle} • {animal.milkYield.daysInMilk}
            </div>
          </div>
        </div>

        {/* Biometric Verification Seal & Vax Ledger */}
        <div className="p-4 rounded-2xl bg-bg-alt/60 border border-line space-y-3">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-pasture-700" />
              <span className="font-serif font-bold text-pasture-900">Muzzle Biometric &amp; Vaccine Audit</span>
            </div>
            <span className="font-mono text-[10px] text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full font-semibold">
              {animal.muzzleMatch}
            </span>
          </div>

          <div className="space-y-1.5">
            {animal.vaxAudit.map((vax) => (
              <div
                key={vax.name}
                className="flex items-center justify-between text-xs font-mono py-1.5 px-2.5 rounded-lg bg-card border border-line-soft"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-pasture-500" />
                  <strong className="text-ink">{vax.name}</strong>
                  <span className="text-ink-soft text-[10px]">({vax.batch})</span>
                </div>
                <div className="text-right text-[11px]">
                  <span className="text-ink-soft mr-2">{vax.date}</span>
                  <span className="text-pasture-900 font-semibold">{vax.vet}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons: Print PDF & Export Certificate */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={handlePrint}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-sm btn-gold-tactile cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Print Official Passport Certificate (PDF)</span>
          </button>

          <button
            onClick={onClose}
            className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-sm bg-transparent border border-pasture-900 text-pasture-900 hover:bg-pasture-900 hover:text-bg transition-all cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </Modal>
  );
};
