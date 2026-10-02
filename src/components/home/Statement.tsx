"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";

const TEXT =
  "Most animal health records still live on paper. When a cow falls sick, finding a vet can take a day, and when the disease is contagious, neighbouring farms hear about it too late.";

const STATS = [
  { to: 536, decimals: 0, unit: "million", label: "livestock in India", source: "20th Livestock Census, 2019" },
  {
    to: 1.55,
    decimals: 2,
    unit: "lakh",
    label: "cattle died of lumpy skin disease in 2022",
    source: "Ministry of Fisheries, Animal Husbandry and Dairying, in Parliament",
  },
];

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {children}
    </motion.span>
  );
}

function CountUp({ to, decimals = 0 }: { to: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (reduce) return setValue(to);
    const c = animate(0, to, { duration: 1.8, ease: [0.16, 1, 0.3, 1], onUpdate: setValue });
    return () => c.stop();
  }, [inView, reduce, to]);
  return <span ref={ref}>{value.toFixed(decimals)}</span>;
}

export function Statement() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = TEXT.split(" ");

  return (
    <section className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 sm:py-32">
      <p ref={ref} className="max-w-[26ch] font-display text-[clamp(1.9rem,4.2vw,3.4rem)] font-medium leading-[1.12] tracking-[-0.035em]">
        {words.map((w, i) => (
          <span key={i}>
            <Word progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
              {w}
            </Word>{" "}
          </span>
        ))}
      </p>
      <dl className="mt-16 grid gap-3 sm:grid-cols-2">
        {STATS.map((s) => (
          <div key={s.label} className="flex flex-col rounded-[28px] bg-white p-8">
            <dt className="order-2 mt-3 text-[17px] font-medium">{s.label}</dt>
            <dd className="order-1 font-display text-[clamp(3rem,6vw,4.6rem)] font-semibold leading-none tracking-[-0.05em] text-olive">
              <CountUp to={s.to} decimals={s.decimals} /> <span className="text-[0.42em] tracking-[-0.02em]">{s.unit}</span>
            </dd>
            <dd className="order-3 mt-1 text-[13px] text-ink-muted">{s.source}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
