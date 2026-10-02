"use client";

import { useEffect, useState } from "react";
import { animate, motion } from "framer-motion";
import { Device } from "./Device";
import { LockAlert } from "./screens";

/*
 * "A radius for every outbreak", made literal: the 15 km ring ripples out from the
 * confirmed case, farms inside light up as the alert reaches them, and two farmers'
 * phones buzz with the alert in their own language.
 */

const D = 470; // map disc diameter
const C = D / 2;
const R = 196; // 15 km ring

// Farms scattered with the golden angle so they look natural but render identically every time.
const FARMS = Array.from({ length: 55 }, (_, i) => {
  const a = i * 2.39996;
  const r = 18 + Math.sqrt(i / 55) * 215;
  return { x: C + Math.cos(a) * r, y: C + Math.sin(a) * r, d: r };
});
const ALERTED = FARMS.filter((f) => f.d <= R).length;
const SPREAD = 1.6; // seconds for the ripple to reach the ring

// Where the two phones sit, relative to the disc centre.
const PHONES = [
  { lang: "mr" as const, wallpaper: "dawn" as const, x: -295, y: 30, rotate: -7, label: "Marathi, 4.2 km away", farm: FARMS[17] },
  { lang: "hi" as const, wallpaper: "dusk" as const, x: 295, y: -40, rotate: 7, label: "Hindi, 6.8 km away", farm: FARMS[21] },
];

function Counter() {
  const [n, setN] = useState(0);
  useEffect(() => {
    const c = animate(0, ALERTED, { duration: SPREAD + 0.4, ease: "easeOut", onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, []);
  return <>{n}</>;
}

export function RadiusScene() {
  return (
    <div className="relative" style={{ width: D, height: D }}>
      {/* the map disc */}
      <div className="absolute inset-0 overflow-hidden rounded-full bg-[#ECE7DA] shadow-[0_40px_80px_-40px_rgba(198,40,40,0.45),inset_0_0_0_1px_rgba(20,20,20,0.06)]">
        <svg viewBox={`0 0 ${D} ${D}`} className="h-full w-full">
          {[[40, 60, 120, 80], [260, 40, 110, 70], [70, 300, 100, 90], [300, 290, 120, 100], [180, 170, 90, 60]].map(([x, y, w, h], i) => (
            <rect key={i} x={x} y={y} width={w} height={h} rx="10" fill="#DCE5C8" />
          ))}
          <path d={`M-20 ${C + 90} C 120 ${C + 40}, 220 ${C + 140}, ${D + 20} ${C + 60}`} stroke="#BCD5E0" strokeWidth="16" fill="none" />
          <path d={`M0 ${C - 40} H${D} M${C - 60} 0 V${D} M${C + 120} 0 L ${C + 40} ${D}`} stroke="#fff" strokeWidth="7" />

          <circle cx={C} cy={C} r={R} fill="#C62828" fillOpacity="0.06" stroke="#C62828" strokeWidth="2" strokeDasharray="8 8" />
          {/* ripple travelling outward */}
          <motion.circle
            cx={C}
            cy={C}
            fill="none"
            stroke="#C62828"
            strokeWidth="3"
            initial={{ r: 0, opacity: 0.7 }}
            animate={{ r: R, opacity: 0 }}
            transition={{ duration: SPREAD, repeat: Infinity, repeatDelay: 0.9, ease: "easeOut" }}
          />

          {FARMS.map((f, i) =>
            f.d <= R ? (
              <motion.circle
                key={i}
                cx={f.x}
                cy={f.y}
                initial={{ r: 4.5, fill: "#3F6900" }}
                animate={{ r: 6.5, fill: "#F2994A" }}
                transition={{ delay: 0.2 + (f.d / R) * SPREAD, duration: 0.3 }}
                stroke="#fff"
                strokeWidth="2"
              />
            ) : (
              <circle key={i} cx={f.x} cy={f.y} r="4.5" fill="#3F6900" fillOpacity="0.35" />
            ),
          )}

          <motion.circle cx={C} cy={C} fill="#C62828" initial={{ r: 8, opacity: 0.5 }} animate={{ r: 22, opacity: 0 }} transition={{ duration: 1.4, repeat: Infinity }} />
          <circle cx={C} cy={C} r="9" fill="#C62828" stroke="#fff" strokeWidth="3" />
        </svg>
      </div>

      {/* labels on the map */}
      <span className="absolute rounded-full bg-white px-3 py-1 text-[13px] font-semibold text-danger shadow-sm" style={{ left: C + R * 0.62, top: C - R * 0.86 }}>
        15 km
      </span>
      <span className="absolute -translate-x-1/2 rounded-full bg-danger px-3 py-1 text-[12px] font-semibold text-white shadow-sm" style={{ left: C, top: C + 18 }}>
        Confirmed case
      </span>

      {/* the alert travelling to each phone */}
      <svg className="pointer-events-none absolute left-1/2 top-1/2 overflow-visible" width="1" height="1">
        {PHONES.map((p, i) => (
          <motion.path
            key={p.lang}
            d={`M ${p.farm.x - C} ${p.farm.y - C} L ${p.x * 0.72} ${p.y}`}
            stroke="#C62828"
            strokeWidth="1.5"
            strokeDasharray="5 6"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ delay: 0.5 + i * 0.4 + (p.farm.d / R) * SPREAD, duration: 0.5 }}
          />
        ))}
      </svg>

      {PHONES.map((p, i) => {
        const arrive = 0.6 + i * 0.4 + (p.farm.d / R) * SPREAD;
        return (
          <motion.div
            key={p.lang}
            className="absolute left-1/2 top-1/2"
            initial={{ x: p.x - 107, y: p.y - 250, rotate: p.rotate, opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 + i * 0.1, duration: 0.6 }}
          >
            {/* buzz when the alert lands */}
            <motion.div animate={{ x: [0, -5, 5, -4, 4, -2, 0] }} transition={{ delay: arrive + 0.1, duration: 0.5 }}>
              <Device scale={0.54} dark time="8:42">
                <LockAlert lang={p.lang} wallpaper={p.wallpaper} delay={arrive} />
              </Device>
            </motion.div>
            <p className="mt-3 text-center text-[13px] font-medium text-ink-soft">{p.label}</p>
          </motion.div>
        );
      })}

      <div className="absolute inset-x-0 top-full mt-6 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex items-center gap-3 whitespace-nowrap rounded-full bg-white px-5 py-2.5 text-[15px] shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)]"
      >
        <span className="font-semibold tabular-nums text-danger">
          <Counter /> farms alerted
        </span>
        <span className="h-4 w-px bg-ink/15" />
        <span className="text-ink-soft">4 vets notified within 50 km</span>
      </motion.div>
      </div>
    </div>
  );
}
