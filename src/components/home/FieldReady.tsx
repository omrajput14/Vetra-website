"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Icon, type IconName } from "@/components/app/icons";

function useCycle(length: number, ms: number) {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((x) => (x + 1) % length), ms);
    return () => clearInterval(t);
  }, [length, ms, reduce]);
  return i;
}

/* ---------- 1. Offline ---------- */

const REPORTS = ["Tara, skin lumps photo", "Gauri, vaccine dose", "Raja, limping report"];

function Offline() {
  const online = useCycle(2, 2800) === 1;
  return (
    <div className="w-full max-w-[320px] rounded-2xl bg-white p-4 shadow-[0_20px_40px_-24px_rgba(20,20,20,0.35)]">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={String(online)}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.3 }}
          className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-[14px] font-medium ${online ? "bg-sage text-olive" : "bg-amber/15 text-[#9a4d10]"}`}
        >
          <Icon name={online ? "check" : "cloudOff"} className="h-5 w-5 shrink-0" />
          {online ? "Back online. 3 reports sent." : "No signal. 3 reports saved on this phone."}
        </motion.div>
      </AnimatePresence>
      <ul className="mt-2 divide-y divide-ink/5">
        {REPORTS.map((r, i) => (
          <li key={r} className="flex items-center justify-between gap-3 py-2.5 text-[14px]">
            <span>{r}</span>
            <motion.span
              animate={{ color: online ? "#3F6900" : "#A1A1A1" }}
              transition={{ delay: online ? 0.15 + i * 0.2 : 0 }}
              className="flex items-center gap-1 text-[12.5px] font-medium"
            >
              <Icon name={online ? "check" : "clock"} className="h-4 w-4" />
              {online ? "Sent" : "Waiting"}
            </motion.span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- 2. Languages ---------- */

const LANGS = [
  { code: "mr", name: "मराठी", tiles: ["रोग स्कॅन करा", "जनावर जोडा", "डॉक्टर बुक करा", "जवळचे डॉक्टर"] },
  { code: "hi", name: "हिंदी", tiles: ["बीमारी स्कैन करें", "पशु जोड़ें", "डॉक्टर बुक करें", "नज़दीकी डॉक्टर"] },
  { code: "en", name: "English", tiles: ["Scan disease", "Add animal", "Book a vet", "Nearby vets"] },
];
const TILE_ICONS: IconName[] = ["camera", "add", "calendar", "compass"];

function Languages() {
  const i = useCycle(LANGS.length, 2200);
  const l = LANGS[i];
  const deva = l.code === "en" ? "" : "font-deva";
  return (
    <div className="w-full max-w-[340px]">
      <div className="mb-3 flex justify-center gap-1 rounded-full bg-white p-1 text-[13px] font-medium">
        {LANGS.map((x, j) => (
          <span key={x.code} lang={x.code} className={`flex-1 rounded-full py-1.5 text-center transition-colors duration-300 ${j === i ? "bg-olive text-white" : "text-ink-soft"} ${x.code === "en" ? "" : "font-deva"}`}>
            {x.name}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {l.tiles.map((t, j) => (
          <div key={j} className="flex h-[92px] flex-col items-center justify-center gap-2 rounded-xl bg-white px-1 text-center">
            <Icon name={TILE_ICONS[j]} className="h-7 w-7 text-olive" />
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={t}
                lang={l.code}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25, delay: j * 0.05 }}
                className={`text-[12px] font-semibold leading-tight ${deva}`}
              >
                {t}
              </motion.span>
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- 3. Sun ---------- */

function Sunlight() {
  return (
    <div className="relative w-full max-w-[320px] overflow-hidden rounded-2xl bg-white p-4 shadow-[0_20px_40px_-24px_rgba(20,20,20,0.35)]">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1 rounded-full bg-danger px-2.5 py-0.5 text-[12px] font-semibold text-white">
          <Icon name="warning" className="h-3.5 w-3.5" /> Contagious
        </span>
        <Icon name="sun" className="h-6 w-6 text-amber" />
      </div>
      <p className="mt-3 text-[20px] font-semibold leading-tight">Tara needs a vet today</p>
      <p className="mt-1 text-[15px] text-ink-soft">Keep her away from other animals.</p>
      <div className="mt-4 flex h-[52px] items-center justify-center rounded-lg bg-lime text-[16px] font-semibold">Send to vet</div>
      {/* sun glare sweeping across: the content stays readable */}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-y-10 w-24 rotate-[20deg] bg-gradient-to-r from-transparent via-white/80 to-transparent"
        initial={{ left: "-40%" }}
        animate={{ left: "130%" }}
        transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}
      />
    </div>
  );
}

/* ---------- 4. Nearby vets ---------- */

const VETS = [
  { name: "Dr. Anjali Deshmukh", place: "Baramati Veterinary Clinic", km: "4.2 km", now: true },
  { name: "Dr. Rahul Patil", place: "Malegaon animal hospital", km: "9 km", now: false },
];

function NearbyVets() {
  return (
    <div className="w-full max-w-[320px] space-y-2">
      {VETS.map((v, i) => (
        <div key={v.name} className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-[0_20px_40px_-28px_rgba(20,20,20,0.35)]">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage text-[14px] font-semibold text-olive">
            {v.name.split(" ").slice(1).map((n) => n[0]).join("")}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[14.5px] font-semibold">{v.name}</p>
            <p className="truncate text-[12.5px] text-ink-muted">
              {v.km}, {v.now ? <span className="text-olive">available now</span> : "back at 2 pm"}
            </p>
          </div>
          <span className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${i === 0 ? "bg-lime" : "bg-ink/[0.06]"}`}>
            {i === 0 && (
              <motion.span
                className="absolute inset-0 rounded-full bg-lime"
                animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                transition={{ duration: 1.6, repeat: Infinity }}
              />
            )}
            <Icon name="call" className="relative h-5 w-5" />
          </span>
        </div>
      ))}
    </div>
  );
}

/* ---------- section ---------- */

const CARDS = [
  {
    q: "No signal in the field?",
    title: "It works offline.",
    body: "Reports, photos and vaccine doses save on the phone and send themselves when the network comes back.",
    Visual: Offline,
  },
  {
    q: "Not comfortable in English?",
    title: "Every screen in their language.",
    body: "Farmers choose Marathi, Hindi or English once. Alerts and advice arrive in it too.",
    Visual: Languages,
  },
  {
    q: "Bright sun, budget phone?",
    title: "Big, bold and easy to tap.",
    body: "Large text, solid icons and one clear button per screen stay readable outdoors, on any Android phone.",
    Visual: Sunlight,
  },
  {
    q: "The vet is far away?",
    title: "The nearest vet is one tap away.",
    body: "Farmers see registered vets nearby, who is free right now, and call or book in one tap.",
    Visual: NearbyVets,
  },
];

export function FieldReady() {
  return (
    <section className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 sm:py-32">
      <div className="max-w-2xl">
        <h2 className="text-[clamp(2.3rem,5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.045em]">
          Built for the village,
          <br />
          not the office.
        </h2>
        <p className="mt-5 text-[19px] leading-relaxed text-ink-soft">
          Vetra is designed around how farmers really work: patchy signal, budget phones, bright sun and many languages.
        </p>
      </div>
      <div className="mt-14 grid gap-3 md:grid-cols-2">
        {CARDS.map(({ q, title, body, Visual }, i) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ delay: (i % 2) * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[28px] bg-white p-3"
          >
            <div className="flex h-[280px] items-center justify-center rounded-[22px] bg-sage px-5">
              <Visual />
            </div>
            <div className="px-5 pb-5 pt-6">
              <p className="text-[15px] font-medium text-ink-muted">{q}</p>
              <h3 className="mt-1 text-[26px] font-semibold leading-tight tracking-[-0.03em]">{title}</h3>
              <p className="mt-2 max-w-[34em] text-[16.5px] leading-relaxed text-ink-soft">{body}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
