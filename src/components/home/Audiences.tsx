"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Device } from "@/components/app/Device";
import { Browser, CommandDashboard } from "@/components/app/Command";
import { Passport, VetReview } from "@/components/app/screens";
import { mail, whatsapp } from "./links";

const PATHS = [
  {
    id: "vets",
    tab: "I'm a vet",
    title: "Spend your day treating animals, not chasing details.",
    points: [
      "Escalated cases arrive first, with the animal's full history.",
      "Record diagnosis, treatment and withdrawal periods from your phone.",
      "The AI organizes the report. The diagnosis is always yours.",
    ],
    cta: "Join as a vet on WhatsApp",
    href: whatsapp("Hi Vetra, I'm a veterinarian and I'd like to join."),
    visual: (
      <Device scale={0.74} time="8:40">
        <VetReview />
      </Device>
    ),
  },
  {
    id: "cooperatives",
    tab: "I run a cooperative",
    title: "Know the health of every member's herd.",
    points: [
      "A passport for every animal, linked to its ear tag.",
      "Early warning when foot-and-mouth, lumpy skin or HS is confirmed nearby.",
      "Withdrawal periods tracked, so treated milk stays out of collection.",
    ],
    cta: "Request a pilot",
    href: mail("Pilot enquiry"),
    visual: (
      <Device scale={0.74} time="9:15">
        <Passport />
      </Device>
    ),
  },
  {
    id: "investors",
    tab: "I'm an investor",
    title: "A working platform, already in the field.",
    points: [
      "Farmer, para-vet and vet apps on Android, plus a district dashboard.",
      "Marathi, Hindi and English, built to work offline.",
      "A six-person team piloting in Maharashtra.",
    ],
    cta: "Request our deck",
    href: mail("Deck request"),
    visual: (
      <div className="pt-10">
        <Browser scale={0.5}>
          <CommandDashboard deployed />
        </Browser>
      </div>
    ),
  },
];

export function Audiences() {
  const [i, setI] = useState(0);
  const p = PATHS[i];

  // Nav links (#vets, #cooperatives, #investors) open the matching tab.
  useEffect(() => {
    const sync = () => {
      const j = PATHS.findIndex((x) => `#${x.id}` === window.location.hash);
      if (j >= 0) setI(j);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  return (
    <section className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 sm:py-32">
      {/* anchors so nav links land here */}
      {PATHS.map((x) => (
        <span key={x.id} id={x.id} className="block scroll-mt-28" />
      ))}
      <h2 className="text-[clamp(2.3rem,5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.045em]">Where do you fit in?</h2>

      <div role="tablist" aria-label="Choose your path" className="mt-8 inline-flex flex-wrap gap-1 rounded-full bg-white p-1.5">
        {PATHS.map((x, j) => (
          <button
            key={x.id}
            type="button"
            role="tab"
            aria-selected={i === j}
            onClick={() => setI(j)}
            className={`relative rounded-full px-5 py-3 text-[16px] font-semibold transition-colors ${i === j ? "text-parch" : "text-ink-soft hover:text-ink"}`}
          >
            {i === j && <motion.span layoutId="path-pill" className="absolute inset-0 rounded-full bg-ink" transition={{ type: "spring", stiffness: 320, damping: 30 }} />}
            <span className="relative">{x.tab}</span>
          </button>
        ))}
      </div>

      <div className="mt-6 grid overflow-hidden rounded-[32px] bg-white lg:grid-cols-[1fr_1.05fr]">
        <AnimatePresence mode="wait">
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center p-8 sm:p-12"
          >
            <h3 className="max-w-md text-[clamp(1.8rem,3vw,2.5rem)] font-semibold leading-[1.08] tracking-[-0.035em]">{p.title}</h3>
            <ol className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
              {p.points.map((pt, n) => (
                <li key={pt} className="flex gap-4 py-4 text-[17px] leading-snug text-ink-soft">
                  <span className="font-display text-[15px] font-semibold text-olive">{n + 1}</span>
                  {pt}
                </li>
              ))}
            </ol>
            <a
              href={p.href}
              className="mt-9 inline-flex h-[52px] items-center self-start rounded-full bg-lime px-7 text-[16px] font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              {p.cta}
            </a>
          </motion.div>
        </AnimatePresence>

        <div className="relative flex h-[440px] justify-center overflow-hidden bg-sage lg:h-auto lg:min-h-[560px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-12"
            >
              {p.visual}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
