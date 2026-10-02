"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/* ---------- hand-drawn role marks (olive line, lime accent, move when active) ---------- */

const line = { fill: "none", stroke: "#3F6900", strokeWidth: 2.6, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export function CowMark({ on }: { on: boolean }) {
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full">
      <path {...line} d="M23 17c-4-6-8-7-11-5M41 17c4-6 8-7 11-5" />
      <motion.g style={{ transformOrigin: "20px 24px" }} animate={on ? { rotate: [0, -16, 6, -10, 0] } : { rotate: 0 }} transition={{ duration: 1.1, repeat: on ? Infinity : 0, repeatDelay: 1 }}>
        <ellipse {...line} cx="12" cy="25" rx="8" ry="4.5" transform="rotate(-18 12 25)" fill="#F4EEE5" />
      </motion.g>
      <motion.g style={{ transformOrigin: "44px 24px" }} animate={on ? { rotate: [0, 14, -6, 8, 0] } : { rotate: 0 }} transition={{ duration: 1.1, delay: 0.15, repeat: on ? Infinity : 0, repeatDelay: 1 }}>
        <ellipse {...line} cx="52" cy="25" rx="8" ry="4.5" transform="rotate(18 52 25)" fill="#F4EEE5" />
        {/* ear tag */}
        <rect x="52" y="27" width="7" height="9" rx="2" fill="#94E130" stroke="#3F6900" strokeWidth="2" />
      </motion.g>
      <path {...line} fill="#fff" d="M21 19c0-5 22-5 22 0l-1.5 21c-.6 8-18.4 8-19 0z" />
      <ellipse {...line} cx="32" cy="44" rx="10" ry="7" fill="#EBF0DD" />
      <circle cx="28.5" cy="44" r="1.6" fill="#3F6900" />
      <circle cx="35.5" cy="44" r="1.6" fill="#3F6900" />
      <motion.g animate={on ? { scaleY: [1, 0.1, 1] } : { scaleY: 1 }} transition={{ duration: 0.25, repeat: on ? Infinity : 0, repeatDelay: 2.2 }} style={{ transformOrigin: "32px 29px" }}>
        <circle cx="26.5" cy="29" r="2.2" fill="#141414" />
        <circle cx="37.5" cy="29" r="2.2" fill="#141414" />
      </motion.g>
    </svg>
  );
}

function ThermometerMark({ on }: { on: boolean }) {
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full">
      <rect {...line} x="26" y="7" width="12" height="38" rx="6" fill="#fff" />
      {[15, 21, 27, 33].map((y) => (
        <path key={y} {...line} strokeWidth={2} d={`M41 ${y}h5`} />
      ))}
      <motion.rect
        x="30"
        width="4"
        rx="2"
        fill="#94E130"
        initial={false}
        animate={on ? { y: [40, 14], height: [8, 34] } : { y: 32, height: 16 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />
      <circle {...line} cx="32" cy="50" r="8" fill="#94E130" />
      <motion.text
        x="47"
        y="12"
        fontSize="9"
        fontWeight="700"
        fill="#C62828"
        animate={{ opacity: on ? 1 : 0 }}
        transition={{ delay: on ? 1.2 : 0 }}
        style={{ fontFamily: "var(--font-display)" }}
      >
        40.5°
      </motion.text>
    </svg>
  );
}

function StethoscopeMark({ on }: { on: boolean }) {
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full">
      <path {...line} d="M15 8h4M33 8h4" />
      <path {...line} d="M17 8v14a9 9 0 0 0 18 0V8" />
      <motion.g style={{ transformOrigin: "26px 31px" }} animate={on ? { rotate: [0, 10, -6, 0] } : { rotate: 0 }} transition={{ duration: 1.6, repeat: on ? Infinity : 0, ease: "easeInOut" }}>
        <path {...line} d="M26 31v7a10 10 0 0 0 20 0v-5" />
        <circle {...line} cx="46" cy="28" r="5.5" fill="#94E130" />
        <circle cx="46" cy="28" r="1.8" fill="#3F6900" />
      </motion.g>
    </svg>
  );
}

function RadiusMark({ on }: { on: boolean }) {
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full">
      {[0, 0.7].map((d) => (
        <motion.circle
          key={d}
          cx="32"
          cy="40"
          fill="none"
          stroke="#94E130"
          strokeWidth="2.4"
          initial={{ r: 6, opacity: 0 }}
          animate={on ? { r: [6, 26], opacity: [0.9, 0] } : { r: 16, opacity: 0.5 }}
          transition={{ duration: 1.6, delay: d, repeat: on ? Infinity : 0, ease: "easeOut" }}
        />
      ))}
      <ellipse cx="32" cy="40" rx="18" ry="6" fill="none" stroke="#3F6900" strokeWidth="2" strokeDasharray="3 4" />
      <motion.g animate={on ? { y: [0, -4, 0] } : { y: 0 }} transition={{ duration: 0.9, repeat: on ? Infinity : 0 }}>
        <path {...line} fill="#fff" d="M32 40s-11-11-11-19a11 11 0 0 1 22 0c0 8-11 19-11 19z" />
        <circle cx="32" cy="21" r="4" fill="#C62828" />
      </motion.g>
    </svg>
  );
}

/* ---------- the shared record ---------- */

const ROLES = [
  {
    who: "Farmer",
    name: "Lakshmi",
    does: "Photographs the problem and keeps every record.",
    Mark: CowMark,
    entry: "Photo of lumps on Tara's neck",
    time: "6:12 am",
  },
  {
    who: "Para-vet",
    name: "Ganesh",
    does: "Checks scans in the field and runs vaccine drives.",
    Mark: ThermometerMark,
    entry: "Fever 40.5°C. Sent to vet",
    time: "7:05 am",
  },
  {
    who: "Vet",
    name: "Dr. Anjali",
    does: "Confirms the diagnosis and records treatment.",
    Mark: StethoscopeMark,
    entry: "Lumpy skin disease confirmed",
    time: "8:40 am",
  },
  {
    who: "District officer",
    name: "Pune office",
    does: "Sees outbreaks form and starts containment.",
    Mark: RadiusMark,
    entry: "Ring vaccination, 15 km",
    time: "8:42 am",
  },
];

export function OneRecord() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (paused || reduce) return;
    const t = setInterval(() => setActive((a) => (a + 1) % ROLES.length), 3200);
    return () => clearInterval(t);
  }, [paused, reduce]);

  return (
    <section className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 sm:py-28" onMouseLeave={() => setPaused(false)}>
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div>
          <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.045em]">
            One record,
            <br />
            four people.
          </h2>
          <p className="mt-5 max-w-md text-[18px] leading-relaxed text-ink-soft">
            Nobody starts from zero. Each person adds what they know, and everyone after them can see it.
          </p>

          <ul className="mt-10 space-y-1.5" onMouseEnter={() => setPaused(true)}>
            {ROLES.map((r, i) => {
              const on = i === active;
              return (
                <li key={r.who}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => {
                      setActive(i);
                      setPaused(true);
                    }}
                    onClick={() => {
                      setActive(i);
                      setPaused(true);
                    }}
                    aria-pressed={on}
                    className={`relative flex w-full items-center gap-4 rounded-[22px] px-3 py-3 text-left transition-colors ${on ? "" : "hover:bg-white/50"}`}
                  >
                    {on && <motion.span layoutId="role-bg" className="absolute inset-0 rounded-[22px] bg-white" transition={{ type: "spring", stiffness: 300, damping: 30 }} />}
                    <span className={`relative h-14 w-14 shrink-0 rounded-2xl p-1 transition-colors ${on ? "bg-sage" : "bg-parch-deep/70"}`}>
                      <r.Mark on={on} />
                    </span>
                    <span className="relative">
                      <span className={`block text-[19px] font-semibold tracking-[-0.02em] transition-colors ${on ? "text-ink" : "text-ink/45"}`}>{r.who}</span>
                      <span className={`block text-[15px] leading-snug transition-colors ${on ? "text-ink-soft" : "text-ink/35"}`}>{r.does}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Tara's record, with each person's entry */}
        <div className="relative">
          <div className="rounded-[32px] bg-white p-6 shadow-[0_40px_80px_-50px_rgba(20,20,20,0.4)] sm:p-8">
            <div className="flex items-center gap-4">
              <svg viewBox="0 0 48 60" className="h-16 w-14 shrink-0" aria-hidden="true">
                <path
                  d="M19 13a5 5 0 1 1 10 0v4c0 2 1 3 3 3h6c3 0 5 2 5 5v26c0 4-3 7-7 7H10c-4 0-7-3-7-7V25c0-3 2-5 5-5h6c2 0 3-1 3-3z"
                  fill="#94E130"
                  stroke="#3F6900"
                  strokeWidth="2"
                />
                <circle cx="24" cy="12" r="2.5" fill="#F4EEE5" />
                <text x="24" y="40" textAnchor="middle" fontSize="9" fontWeight="700" fill="#141414" style={{ fontFamily: "var(--font-display)" }}>
                  04521
                </text>
                <text x="24" y="50" textAnchor="middle" fontSize="6" fontWeight="600" fill="#141414" style={{ fontFamily: "var(--font-display)" }}>
                  MH12
                </text>
              </svg>
              <div>
                <p className="text-[13px] text-ink-muted">Animal passport</p>
                <p className="text-[26px] font-semibold leading-tight tracking-[-0.03em]">Tara</p>
                <p className="text-[14px] text-ink-soft">Gir cow, 5 years, Malegaon Bk</p>
              </div>
            </div>

            <ol className="relative mt-7 space-y-2">
              <span className="absolute bottom-6 left-[19px] top-6 w-px bg-ink/10" />
              {ROLES.map((r, i) => {
                const on = i === active;
                const done = i <= active;
                return (
                  <li key={r.who} className="relative flex items-start gap-4 rounded-2xl px-2 py-2.5">
                    {on && <motion.span layoutId="entry-bg" className="absolute inset-0 rounded-2xl bg-sage" transition={{ type: "spring", stiffness: 300, damping: 30 }} />}
                    <span
                      className={`relative mt-1 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-500 ${
                        done ? "border-olive bg-lime" : "border-ink/15 bg-white"
                      }`}
                    >
                      {on && <motion.span className="absolute inset-0 rounded-full bg-lime" animate={{ scale: [1, 1.9], opacity: [0.6, 0] }} transition={{ duration: 1.3, repeat: Infinity }} />}
                    </span>
                    <span className="relative min-w-0 flex-1">
                      <span className={`block text-[16.5px] font-semibold leading-snug transition-colors duration-500 ${done ? "text-ink" : "text-ink/30"}`}>{r.entry}</span>
                      <span className={`block text-[13.5px] transition-colors duration-500 ${done ? "text-ink-muted" : "text-ink/25"}`}>
                        {r.time}, by {r.name}
                      </span>
                    </span>
                    <AnimatePresence>
                      {on && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="relative mt-0.5 shrink-0 rounded-full bg-olive px-2.5 py-1 text-[12px] font-semibold text-white"
                        >
                          {r.who}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
