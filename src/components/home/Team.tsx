"use client";

import { motion, useAnimationControls } from "framer-motion";

// Each person wears a Vetra ear tag. Swap for portraits when photos are ready.
const TEAM = [
  { name: "Om Rajput", role: "Founder, product and technology" },
  { name: "Soham Pawar", role: "Full-stack developer" },
  { name: "Khushi Shinde", role: "Cloud developer" },
  { name: "Mrunmai Joshi", role: "Research and communication" },
  { name: "Prachi Pawar", role: "Product design and presentation" },
  { name: "Dhiraj Pawar", role: "Field research and operations" },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("");

function Tag({ name, role, i }: { name: string; role: string; i: number }) {
  const swing = useAnimationControls();
  return (
    <li className="relative flex flex-col items-center">
      {/* the fence wire, continuous across each row */}
      <span className="absolute inset-x-0 top-0 h-[2px] bg-ink/20" />
      {/* string from the wire */}
      <span className="h-6 w-px bg-ink/25" />
      <motion.div
        initial={{ y: -40, opacity: 0, rotate: 0 }}
        whileInView={{ y: 0, opacity: 1, rotate: [0, i % 2 ? 7 : -7, i % 2 ? -4 : 4, 0] }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ delay: i * 0.08, duration: 1.1, ease: "easeOut" }}
        className="origin-top"
      >
        <motion.button
          type="button"
          aria-label={`${name}, ${role}`}
          animate={swing}
          onHoverStart={() => swing.start({ rotate: [0, 12, -9, 6, -3, 0], transition: { duration: 1.2 } })}
          onTap={() => swing.start({ rotate: [0, 12, -9, 6, -3, 0], transition: { duration: 1.2 } })}
          className="block origin-top cursor-grab"
        >
          <svg viewBox="0 0 120 150" className="h-[150px] w-[120px] drop-shadow-[0_14px_14px_rgba(63,105,0,0.18)]">
            <path
              d="M48 30a12 12 0 1 1 24 0v8c0 4 2 6 6 6h20c8 0 14 6 14 14v70c0 9-7 16-16 16H22c-9 0-16-7-16-16V58c0-8 6-14 14-14h20c4 0 6-2 6-6z"
              fill="#94E130"
              stroke="#3F6900"
              strokeWidth="2.5"
            />
            <circle cx="60" cy="28" r="6" fill="#F4EEE5" stroke="#3F6900" strokeWidth="2" />
            <text x="60" y="72" textAnchor="middle" fontSize="11" fontWeight="600" letterSpacing="2" fill="#141414" fillOpacity="0.6" style={{ fontFamily: "var(--font-display)" }}>
              VETRA
            </text>
            <text x="60" y="112" textAnchor="middle" fontSize="36" fontWeight="700" fill="#141414" style={{ fontFamily: "var(--font-display)" }}>
              {initials(name)}
            </text>
            <text x="60" y="132" textAnchor="middle" fontSize="10" fontWeight="600" fill="#141414" fillOpacity="0.55" style={{ fontFamily: "var(--font-display)" }}>
              {`MH12-0000${i + 1}`}
            </text>
          </svg>
        </motion.button>
      </motion.div>
      <p className="mt-5 text-center text-[17px] font-semibold tracking-[-0.01em]">{name}</p>
      <p className="mt-1 max-w-[12em] text-center text-[14px] leading-snug text-ink-muted">{role}</p>
    </li>
  );
}

export function Team() {
  return (
    <section id="team" className="mx-auto max-w-[1240px] scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32">
      <div className="max-w-2xl">
        <h2 className="text-[clamp(2.3rem,5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.045em]">Tagged and accounted for.</h2>
        <p className="mt-5 text-[19px] leading-relaxed text-ink-soft">
          Six of us, across product, engineering, cloud and field research. We started Vetra after time in dairy villages
          across Maharashtra, where sick animals waited for care because records were on paper and vets were far away.
        </p>
      </div>
      <div className="relative mt-16">
        <ul className="grid grid-cols-2 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
          {TEAM.map((m, i) => (
            <Tag key={m.name} {...m} i={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
