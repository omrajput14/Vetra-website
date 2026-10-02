"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { Device } from "@/components/app/Device";
import { Browser, CommandDashboard } from "@/components/app/Command";
import { FarmerHome, RecordDoses, VetReview } from "@/components/app/screens";
import { Icon } from "@/components/app/icons";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-1, 1], [-4, 4]), { stiffness: 60, damping: 20 });
  const rotateX = useSpring(useTransform(my, [-1, 1], [3, -3]), { stiffness: 60, damping: 20 });

  return (
    <section
      className="relative overflow-hidden pt-32 sm:pt-40"
      onMouseMove={(e) => {
        if (reduce) return;
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
        my.set(((e.clientY - r.top) / r.height) * 2 - 1);
      }}
    >

      <div className="relative mx-auto max-w-6xl px-5 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.05, ease }}
          className="text-[clamp(2.6rem,5.6vw,5rem)] font-semibold leading-[1] tracking-[-0.055em]"
        >
          A record for every animal.
          <br />
          <span className="text-olive">A radius for every outbreak.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="mx-auto mt-7 max-w-[38em] text-[19px] leading-relaxed text-ink-soft sm:text-[20px]"
        >
          Vetra connects farmers, para-vets, vets and district officers. A sick animal is photographed, checked, confirmed
          and recorded, and when it&apos;s contagious, every farm nearby is warned.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="mt-9 flex flex-wrap justify-center gap-3"
        >
          <a
            href="/downloads/Vetra-v1.0-production.apk"
            download
            className="inline-flex h-[52px] items-center gap-2 rounded-full bg-lime px-7 text-[16px] font-semibold text-ink shadow-[0_10px_30px_-10px_rgba(63,105,0,0.5)] transition-transform hover:-translate-y-0.5"
          >
            <Icon name="android" className="h-5 w-5" /> Get the Android app
          </a>
          <a href="#contact" className="inline-flex h-[52px] items-center rounded-full bg-ink px-7 text-[16px] font-semibold text-parch transition-transform hover:-translate-y-0.5">
            Talk to us
          </a>
        </motion.div>
      </div>

      {/* Product composition */}
      <div className="relative mx-auto mt-16 h-[600px] max-w-[1280px] [perspective:1800px] sm:mt-20 lg:h-[740px]">
        <motion.div style={{ rotateX, rotateY }} className="relative h-full w-full [transform-style:preserve-3d]">
          <div className="absolute inset-x-0 top-0 hidden justify-center lg:flex">
            <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.35, ease }}>
              <Browser scale={0.66}>
                <CommandDashboard deployed />
              </Browser>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 120, rotate: -6 }}
            animate={{ opacity: 1, y: 0, rotate: -5 }}
            transition={{ duration: 1.2, delay: 0.6, ease }}
            className="absolute left-[8%] top-[150px] hidden lg:block"
          >
            <Device scale={0.68} time="8:40">
              <VetReview approved />
            </Device>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 120, rotate: 6 }}
            animate={{ opacity: 1, y: 0, rotate: 5 }}
            transition={{ duration: 1.2, delay: 0.7, ease }}
            className="absolute right-[8%] top-[150px] hidden lg:block"
          >
            <Device scale={0.68} time="2:30">
              <RecordDoses />
            </Device>
          </motion.div>
          <div className="absolute inset-x-0 top-0 flex justify-center lg:top-[110px]">
            <motion.div initial={{ opacity: 0, y: 140 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.5, ease }}>
              <Device scale={0.78} time="6:10">
                <FarmerHome />
              </Device>
            </motion.div>
          </div>
        </motion.div>
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-parch" />
      </div>
    </section>
  );
}
