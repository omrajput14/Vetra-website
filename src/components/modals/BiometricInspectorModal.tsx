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
  Stethoscope,
  Info,
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

  const currentDate = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const handleCopyHash = () => {
    navigator.clipboard.writeText(animal.hash);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    // Generate clean, isolated printable certificate in dedicated window
    const printWindow = window.open("", "_blank", "width=850,height=1000");
    if (!printWindow) {
      window.print();
      return;
    }

    const certificateHtml = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8"/>
          <title>Vetra EVMR Certificate - ${animal.id}</title>
          <style>
            * { box-sizing: border-box; margin: 0; padding: 0; }
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 36px 40px; color: #111827; background: #ffffff; font-size: 11pt; line-height: 1.45; }
            .header { border-bottom: 2px solid #1E3324; padding-bottom: 14px; margin-bottom: 22px; display: flex; justify-content: space-between; align-items: flex-start; }
            .title { font-size: 17pt; font-weight: 800; color: #1E3324; text-transform: uppercase; letter-spacing: -0.01em; }
            .subtitle { font-size: 9.5pt; color: #4B4939; margin-top: 4px; font-weight: 500; }
            .standard { font-size: 8.5pt; color: #6B7280; margin-top: 2px; }
            .meta-box { text-align: right; font-family: monospace; font-size: 9pt; }
            .section { margin-bottom: 20px; }
            .section-title { font-size: 10pt; font-weight: 700; text-transform: uppercase; border-bottom: 1px solid #D1D5DB; padding-bottom: 4px; margin-bottom: 10px; color: #1E3324; font-family: monospace; letter-spacing: 0.05em; }
            .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
            .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; text-align: center; }
            .card { border: 1px solid #E5E7EB; padding: 10px 12px; border-radius: 8px; background: #F9FAFB; font-size: 9.5pt; }
            .label { font-size: 8pt; text-transform: uppercase; color: #6B7280; font-weight: 700; font-family: monospace; margin-bottom: 2px; }
            .value { font-weight: 700; color: #111827; }
            table { width: 100%; border-collapse: collapse; margin-top: 8px; font-size: 9.5pt; font-family: monospace; }
            th { background: #F3F4F6; text-align: left; padding: 8px 10px; border: 1px solid #D1D5DB; font-size: 8.5pt; text-transform: uppercase; font-weight: 700; color: #374151; }
            td { padding: 8px 10px; border: 1px solid #E5E7EB; }
            .footer { border-top: 2px solid #1E3324; padding-top: 18px; margin-top: 32px; display: flex; justify-content: space-between; align-items: flex-end; font-size: 9pt; }
            .sig-box { text-align: center; width: 230px; border-top: 1px solid #4B5563; padding-top: 6px; font-family: monospace; }
            @page { size: A4 portrait; margin: 12mm 15mm; }
          </style>
        </head>
        <body>
          <div class="header">
            <div>
              <div class="title">Vetra Electronic Veterinary Medical Record</div>
              <div class="subtitle">Official Livestock Identity &amp; Lifetime Health Ledger Certificate</div>
              <div class="standard">Aligned with ICAR, NDDB &amp; Veterinary Council of India (VCI) Guidelines</div>
            </div>
            <div class="meta-box">
              <strong>DATE: ${currentDate}</strong><br/>
              <span style="color: #4B5563;">REF: VTR-${animal.id}</span>
            </div>
          </div>

          <div class="section">
            <div class="section-title">1. Animal Identification &amp; Biometric Registry</div>
            <div class="grid-2">
              <div class="card">
                <div><span class="label">Animal Identifier</span><div class="value">${animal.id}</div></div>
                <div style="margin-top: 6px;"><span class="label">Species / Breed</span><div class="value">${animal.species} · ${animal.breed}</div></div>
                <div style="margin-top: 6px;"><span class="label">Biometric Muzzle Verification</span><div class="value" style="color: #065F46;">${animal.muzzleMatch}</div></div>
              </div>
              <div class="card">
                <div><span class="label">Registered Owner / Farm</span><div class="value">${animal.owner}</div></div>
                <div style="margin-top: 6px;"><span class="label">Geographic Location</span><div class="value">${animal.location}</div></div>
                <div style="margin-top: 6px;"><span class="label">RFID ISO Standard</span><div class="value">${animal.rfidChip} (ISO 11784/85)</div></div>
              </div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">2. Pedigree Lineage &amp; Production Profile</div>
            <div class="grid-2">
              <div class="card">
                <div class="label">Sire (Father) Lineage</div>
                <div class="value">${animal.pedigree.sire}</div>
                <div style="font-size: 8.5pt; color: #4B5563; margin-top: 2px;">${animal.pedigree.sireStation}</div>
                <div style="font-size: 8.5pt; color: #065F46; font-weight: 600; margin-top: 2px;">${animal.pedigree.sireProgeny}</div>
              </div>
              <div class="card">
                <div class="label">Dam (Mother) Lineage</div>
                <div class="value">${animal.pedigree.dam}</div>
                <div style="font-size: 8.5pt; color: #4B5563; margin-top: 2px;">${animal.pedigree.damLactation}</div>
                <div style="font-size: 8.5pt; color: #4B5563;">Yield: ${animal.pedigree.damYield}</div>
              </div>
            </div>

            <div class="grid-4" style="margin-top: 10px;">
              <div class="card"><div class="label">Daily Average</div><div class="value">${animal.milkYield.avgDaily}</div></div>
              <div class="card"><div class="label">Peak Record</div><div class="value">${animal.milkYield.peakDaily}</div></div>
              <div class="card"><div class="label">Fat %</div><div class="value" style="color: #065F46;">${animal.milkYield.fatPercentage}</div></div>
              <div class="card"><div class="label">SNF %</div><div class="value" style="color: #065F46;">${animal.milkYield.snfPercentage}</div></div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">3. Verified Immunization &amp; Clinical Intervention Ledger</div>
            <table>
              <thead>
                <tr>
                  <th>Vaccine / Health Intervention</th>
                  <th>Batch Number</th>
                  <th>Date Administered</th>
                  <th>Attending Veterinarian</th>
                </tr>
              </thead>
              <tbody>
                ${animal.vaxAudit
                  .map(
                    (vax) => `
                  <tr>
                    <td><strong>${vax.name}</strong></td>
                    <td style="color: #4B5563;">${vax.batch}</td>
                    <td>${vax.date}</td>
                    <td><strong>${vax.vet}</strong></td>
                  </tr>
                `
                  )
                  .join("")}
              </tbody>
            </table>
          </div>

          <div class="footer">
            <div>
              <strong>ISSUING AUTHORITY:</strong> ${animal.authority}<br/>
              <span style="font-size: 8pt; color: #6B7280; font-family: monospace;">Cryptographic Verification Hash: ${animal.hash.substring(0, 32)}...</span>
            </div>
            <div class="sig-box">
              <strong>Authorized Clinical Officer</strong><br/>
              <span style="font-size: 8pt; color: #6B7280;">Registered VCI Practitioner</span>
            </div>
          </div>

          <script>
            window.onload = function() {
              window.focus();
              window.print();
            };
          </script>
        </body>
      </html>
    `;

    printWindow.document.open();
    printWindow.document.write(certificateHtml);
    printWindow.document.close();
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
            type="button"
            onClick={handleCopyHash}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card border border-line text-ink text-[11px] hover:bg-white transition-all cursor-pointer shadow-xs no-print"
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

        {/* Action Buttons: Print PDF & Close */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2 no-print">
          <button
            type="button"
            onClick={handlePrint}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-sm btn-gold-tactile cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Print Official Passport Certificate (PDF)</span>
          </button>

          <button
            type="button"
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
