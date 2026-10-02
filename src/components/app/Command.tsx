"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* Rebuild of the district command dashboard (vetra-gov-dashboard), at 1280 x 800, scaled into a browser window. */

const BW = 1280;
const BH = 800;

export function Browser({ scale = 0.6, children, className = "" }: { scale?: number; children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-[14px] bg-white shadow-[0_60px_120px_-40px_rgba(20,20,20,0.5),0_0_0_1px_rgba(20,20,20,0.08)] ${className}`}
      style={{ width: BW * scale, height: (BH + 44) * scale }}
    >
      <div style={{ width: BW, height: BH + 44, transform: `scale(${scale})` }} className="origin-top-left font-sans">
        <div className="flex h-11 items-center gap-2 border-b border-black/5 bg-[#F3F3F1] px-4">
          <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          <span className="mx-auto rounded-md bg-white px-24 py-1 text-[13px] text-ink-muted">vetra.co.in/command</span>
        </div>
        <div style={{ height: BH }}>{children}</div>
      </div>
    </div>
  );
}

const NAV = ["Overview", "Surveillance map", "Outbreaks", "Analytics", "Reports", "Vaccination", "Alerts", "Protocols"];

const SIGNALS = [
  ["Cluster velocity", 13, "#F2994A"],
  ["Climate and vectors", 75, "#2F6FDE"],
  ["History in this area", 30, "#B98726"],
  ["Herd immunity gap", 100, "#3F6900"],
] as const;

const FARMS = Array.from({ length: 70 }, (_, i) => {
  const a = i * 2.39996;
  const r = 30 + ((i * 37) % 230);
  return { x: 330 + Math.cos(a) * r * 1.25, y: 210 + Math.sin(a) * r * 0.8 };
});

export function CommandDashboard({ deployed = false }: { deployed?: boolean }) {
  return (
    <div className="flex h-full text-[14px] text-ink">
      <aside className="flex w-[220px] shrink-0 flex-col bg-[#0F1B2D] text-white/70">
        <div className="flex items-center gap-2.5 px-5 py-5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
            <Image src="/branding/vetra_logo_transparent.png" alt="Vetra Logo" width={24} height={24} className="h-6 w-6" priority />
          </span>
          <span className="font-[family-name:var(--font-display)] text-[16px] font-semibold text-white">Vetra Command</span>
        </div>
        {NAV.map((n) => (
          <span key={n} className={`mx-3 rounded-lg px-3 py-2.5 ${n === "Outbreaks" ? "bg-[#2F6FDE] text-white" : ""}`}>
            {n}
          </span>
        ))}
        <span className="mt-auto px-5 pb-5 text-[12px] text-white/40">District animal husbandry</span>
      </aside>

      <main className="flex-1 overflow-hidden bg-[#F6F7F9] p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[13px] text-ink-muted">Outbreak dossier</p>
            <p className="font-[family-name:var(--font-display)] text-[26px] font-semibold tracking-[-0.02em]">Lumpy skin disease, Pune district</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-md border border-danger/30 bg-danger/5 px-3 py-1.5 text-[13px] font-semibold text-danger">Active</span>
            <motion.span
              animate={deployed ? { backgroundColor: "#3F6900" } : { backgroundColor: "#C62828" }}
              className="rounded-lg px-4 py-2 text-[14px] font-semibold text-white"
            >
              {deployed ? "Containment deployed" : "Deploy containment protocol"}
            </motion.span>
          </div>
        </div>

        {deployed && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 rounded-lg border border-olive/30 bg-sage px-4 py-2.5 text-[14px] text-olive"
          >
            <b>Ring vaccination started.</b> Advisory sent to 38 farmers within 15 km and 4 vets within 50 km.
          </motion.div>
        )}

        <div className="mt-4 grid grid-cols-5 gap-3">
          {[
            ["Risk score", "46", "Medium", "text-amber"],
            ["Confirmed cases", "3", "Vet-verified", "text-danger"],
            ["Alert radius", "15 km", "~707 km²", ""],
            ["Farms in radius", "38", "214 animals", ""],
            ["First detected", "2 Oct", "8:40 am", ""],
          ].map(([k, v, s, c]) => (
            <div key={k} className="rounded-xl border border-black/5 bg-white p-4">
              <p className="text-[12px] text-ink-muted">{k}</p>
              <p className={`mt-1 font-[family-name:var(--font-display)] text-[28px] font-semibold leading-none ${c}`}>{v}</p>
              <p className="mt-1.5 text-[12px] text-ink-muted">{s}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-[1.6fr_1fr] gap-3">
          <div className="relative h-[420px] overflow-hidden rounded-xl border border-black/5 bg-[#EEF1E8]">
            <svg viewBox="0 0 660 420" className="h-full w-full">
              <path d="M-20 300 C 120 250, 200 330, 330 280 S 560 220, 700 260" stroke="#BFD6E2" strokeWidth="14" fill="none" />
              <path d="M0 130 H660 M180 0 V420 M470 0 L 560 420 M0 360 L 660 330" stroke="#fff" strokeWidth="6" />
              {FARMS.map((f, i) => {
                const inside = Math.hypot(f.x - 330, f.y - 210) < 150;
                return <circle key={i} cx={f.x} cy={f.y} r={inside ? 5 : 4} fill={inside ? "#F2994A" : "#3F6900"} fillOpacity={inside ? 1 : 0.45} />;
              })}
              <motion.circle
                cx="330"
                cy="210"
                fill="#C62828"
                fillOpacity="0.08"
                stroke="#C62828"
                strokeWidth="2"
                strokeDasharray="8 8"
                initial={{ r: 20 }}
                animate={{ r: 150 }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              />
              {[[330, 210], [352, 196], [318, 232]].map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r="7" fill="#C62828" stroke="#fff" strokeWidth="2.5" />
              ))}
            </svg>
            <span className="absolute left-4 top-4 rounded-md bg-white px-3 py-1.5 text-[13px] font-medium shadow-sm">Surveillance map, live</span>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-5">
            <p className="font-semibold">Multi-signal risk engine</p>
            <p className="text-[12px] text-ink-muted">Weighted 0 to 100</p>
            <div className="mt-4 space-y-4">
              {SIGNALS.map(([label, v, color], i) => (
                <div key={label}>
                  <div className="flex justify-between text-[13px]">
                    <span>{label}</span>
                    <span className="font-semibold">{v}</span>
                  </div>
                  <div className="mt-1.5 h-2 rounded-full bg-[#EEF0F3]">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${v}%` }}
                      transition={{ delay: 0.2 + i * 0.12, duration: 0.8 }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-lg bg-[#F6F7F9] p-3 text-[12.5px] leading-relaxed text-ink-soft">
              3 vet-confirmed cases within 15 km in 72 hours. Warm, humid week. No herd vaccination recorded in this block.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
