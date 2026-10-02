"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Device } from "@/components/app/Device";
import { Browser, CommandDashboard } from "@/components/app/Command";
import { AiAssessment, FarmerHome, LockAlert, Passport, ParavetCheck, RecordDoses, ScanCamera, VetReview } from "@/components/app/screens";
import { RadiusScene } from "@/components/app/RadiusScene";

const CHAPTERS = [
  {
    time: "6:10 am, Malegaon Bk",
    title: "Tara has lumps on her neck.",
    body: "Lakshmi Jadhav finds her Gir cow feverish, with firm lumps along her neck. She opens Vetra and taps Scan disease.",
    tone: "light",
  },
  {
    time: "6:12 am",
    title: "One photo is enough.",
    body: "She points the camera at the lumps. No forms, no typing, and it works on a budget phone with patchy signal.",
    tone: "light",
  },
  {
    time: "6:12 am",
    title: "A suggestion, never a diagnosis.",
    body: "Vetra reads it as possible lumpy skin disease, 82% confidence, clearly labelled as AI. One tap sends it for a check.",
    tone: "light",
  },
  {
    time: "7:05 am",
    title: "A para-vet checks it in person.",
    body: "Ganesh Kale, the para-vet for the area, visits, records a 40.5°C fever and escalates it. If it isn't disease, he closes it with a reason Lakshmi can read.",
    tone: "sage",
  },
  {
    time: "8:40 am",
    title: "The vet confirms.",
    body: "Dr. Anjali Deshmukh sees escalated cases first. Approving adds the diagnosis to Tara's record and reports a confirmed case.",
    tone: "sage",
  },
  {
    time: "8:41 am",
    title: "The district sees it as it happens.",
    body: "Confirmed cases feed an outbreak engine. Officers see the cluster, the risk and the radius, and deploy containment in one click.",
    tone: "cool",
  },
  {
    time: "8:42 am",
    title: "Every farm within 15 km knows.",
    body: "The alert ripples out from the confirmed case. Every registered farm in the radius gets it in its own language, with clear next steps, and vets within 50 km are told too.",
    tone: "alert",
  },
  {
    time: "That afternoon",
    title: "Ring vaccination begins.",
    body: "Para-vets get a drive listing every animal in the radius that still needs a dose, and tick them off farm by farm.",
    tone: "light",
  },
  {
    time: "Every day after",
    title: "Tara's record goes where she goes.",
    body: "Diagnosis, treatment and vaccines live on her passport, linked to her ear tag, for the next vet, buyer or cooperative.",
    tone: "light",
  },
] as const;

const N = CHAPTERS.length;
// Soft tints per chapter; the page never leaves the light theme.
const BG = { light: "#F4EEE5", sage: "#EBF0DD", cool: "#E7EBEC", alert: "#F6E6E0" };

type Pose = { x: number; y: number; scale: number; opacity: number; rotate: number; zIndex: number };
const pose = (x: number, scale = 1, opacity = 1, extra: Partial<Pose> = {}): Pose => ({ x, y: 0, scale, opacity, rotate: 0, zIndex: 3, ...extra });
const hidden = (x = 0): Pose => ({ x, y: 40, scale: 0.9, opacity: 0, rotate: 0, zIndex: 0 });

// Where each device sits in each chapter.
const POSES: Record<string, Pose[]> = {
  farmer: [pose(0), pose(0), pose(0), pose(-150, 0.86, 0.35, { zIndex: 1 }), pose(-240, 0.78, 0.18, { zIndex: 0 }), hidden(), hidden(), hidden(), pose(0)],
  paravet: [hidden(260), hidden(260), hidden(260), pose(110), pose(-50, 0.86, 0.4, { zIndex: 1 }), hidden(-120), hidden(), pose(0), hidden(-200)],
  vet: [hidden(280), hidden(280), hidden(280), hidden(280), pose(150), hidden(150), hidden(), hidden(), hidden()],
  command: Array.from({ length: N }, (_, i) => (i === 5 ? pose(0, 1, 1, { zIndex: 5 }) : { ...hidden(), scale: 0.94 })),
  radius: Array.from({ length: N }, (_, i) => (i === 6 ? pose(28, 1, 1, { zIndex: 4 }) : { ...hidden(), scale: 0.9, y: 0 })),
};

const SPRING = { type: "spring", stiffness: 70, damping: 18, mass: 0.9 } as const;

function farmerScreen(ch: number) {
  if (ch === 0) return ["home", <FarmerHome key="h" highlight />] as const;
  if (ch === 1) return ["scan", <ScanCamera key="s" />] as const;
  if (ch === 2) return ["assess", <AiAssessment key="a" />] as const;
  if (ch === 8) return ["passport", <Passport key="p" />] as const;
  return ["sent", <AiAssessment key="as" sent />] as const;
}

function Swap({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.div
        key={id}
        className="absolute inset-0"
        initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -24, filter: "blur(6px)" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function Stage({ ch }: { ch: number }) {
  const [deployed, setDeployed] = useState(false);
  useEffect(() => {
    if (ch !== 5) return setDeployed(false);
    const t = setTimeout(() => setDeployed(true), 1500);
    return () => clearTimeout(t);
  }, [ch]);

  const [fid, fscreen] = farmerScreen(ch);
  const place = (k: string) => ({ animate: POSES[k][ch], transition: SPRING, className: "absolute" });

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <motion.div {...place("farmer")}>
        <Device time={ch <= 2 ? "6:12" : "8:41"} dark={ch === 1}>
          <Swap id={fid}>{fscreen}</Swap>
        </Device>
      </motion.div>
      <motion.div {...place("paravet")}>
        <Device time={ch === 7 ? "2:30" : "7:05"}>
          <Swap id={ch === 7 ? "doses" : "check"}>{ch === 7 ? <RecordDoses /> : <ParavetCheck />}</Swap>
        </Device>
      </motion.div>
      <motion.div {...place("vet")}>
        <Device time="8:40">{ch === 4 ? <VetReview approved /> : <VetReview />}</Device>
      </motion.div>
      <motion.div {...place("command")}>
        <Browser scale={0.56}>
          <CommandDashboard key={ch === 5 ? "on" : "off"} deployed={deployed} />
        </Browser>
      </motion.div>
      <motion.div {...place("radius")} style={{ marginTop: -60 }}>
        {ch === 6 && <RadiusScene />}
      </motion.div>
    </div>
  );
}

function MobileDevice({ i }: { i: number }) {
  if (i === 5)
    return (
      <div className="w-full overflow-hidden">
        <Browser scale={0.27}>
          <CommandDashboard deployed />
        </Browser>
      </div>
    );
  const screen = [
    <FarmerHome key={0} highlight />,
    <ScanCamera key={1} />,
    <AiAssessment key={2} />,
    <ParavetCheck key={3} />,
    <VetReview key={4} approved />,
    null,
    <LockAlert key={6} lang="mr" wallpaper="dawn" />,
    <RecordDoses key={7} />,
    <Passport key={8} />,
  ][i];
  return (
    <Device scale={0.72} dark={i === 1 || i === 6}>
      {screen}
    </Device>
  );
}

export function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const [ch, setCh] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => setCh(Math.min(N - 1, Math.max(0, Math.floor(v * N)))));
  const c = CHAPTERS[ch];

  const jump = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top + ((el.offsetHeight - window.innerHeight) * (i + 0.5)) / N, behavior: "smooth" });
  };

  return (
    <section id="how" className="scroll-mt-0">
      <div className="mx-auto max-w-4xl px-5 pb-10 pt-28 text-center sm:pt-36">
        <h2 className="text-[clamp(2.4rem,5.5vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.045em]">
          From one photo
          <br />
          to a protected district.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[19px] leading-relaxed text-ink-soft">
          Follow one sick cow through Vetra. Every screen is from the app, shown with sample data.
        </p>
      </div>

      {/* Desktop: pinned stage */}
      <div ref={ref} className="relative hidden lg:block" style={{ height: `${N * 90}vh` }}>
        <motion.div
          className="sticky top-0 h-screen overflow-hidden"
          animate={{ backgroundColor: BG[c.tone] }}
          transition={{ duration: 0.7 }}
        >
          <div className="mx-auto grid h-full max-w-[1320px] grid-cols-12 gap-8 px-10">
            <div className="col-span-4 flex flex-col justify-center text-ink">
              <div className="flex gap-1.5" role="tablist" aria-label="Story chapters">
                {CHAPTERS.map((x, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={i === ch}
                    aria-label={x.title}
                    onClick={() => jump(i)}
                    className="group h-6 flex-1"
                  >
                    <span
                      className={`block h-1 rounded-full transition-colors duration-500 ${
                        i <= ch ? "bg-olive" : "bg-ink/10 group-hover:bg-ink/25"
                      }`}
                    />
                  </button>
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={ch}
                  initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -18, filter: "blur(4px)" }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-10"
                >
                  <p className="text-[15px] font-medium text-olive">{c.time}</p>
                  <h3 className="mt-3 text-[clamp(2rem,3.2vw,3rem)] font-semibold leading-[1.05] tracking-[-0.04em]">{c.title}</h3>
                  <p className="mt-5 text-[18px] leading-relaxed text-ink-soft">{c.body}</p>
                </motion.div>
              </AnimatePresence>
              <p className="mt-12 text-[13px] text-ink-muted">
                {ch + 1} of {N}. Names and data are illustrative.
              </p>
            </div>
            <div className="col-span-8 h-full">
              <Stage ch={ch} />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile: stacked chapters */}
      <div className="space-y-20 px-5 pb-24 pt-6 lg:hidden">
        {CHAPTERS.map((x, i) => (
          <div key={i}>
            <p className="text-[14px] font-medium text-olive">{x.time}</p>
            <h3 className="mt-2 text-[30px] font-semibold leading-[1.08] tracking-[-0.035em]">{x.title}</h3>
            <p className="mt-3 text-[17px] leading-relaxed text-ink-soft">{x.body}</p>
            <div className="mt-8 flex justify-center">
              <MobileDevice i={i} />
            </div>
          </div>
        ))}
        <p className="text-[13px] text-ink-muted">Names and data are illustrative.</p>
      </div>
    </section>
  );
}
