"use client";

import { motion } from "framer-motion";
import { Icon } from "@/components/app/icons";
import { Skin } from "@/components/app/screens";

const inView = { once: true, margin: "-20% 0px" } as const;

export function VetsDecide() {
  return (
    <section className="px-2 sm:px-3">
      <div className="mx-auto grid max-w-[1320px] items-center gap-12 overflow-hidden rounded-[32px] bg-sage px-6 py-16 sm:rounded-[40px] sm:px-12 sm:py-20 lg:grid-cols-2">
        <div>
          <h2 className="text-[clamp(2.4rem,5.2vw,4.2rem)] font-semibold leading-[1.02] tracking-[-0.045em]">
            AI suggests.
            <br />
            Vets decide.
          </h2>
          <p className="mt-5 max-w-md text-[19px] leading-relaxed text-ink-soft">
            Every AI reading is labelled as a suggestion. Only a licensed vet can confirm a disease, prescribe, or start an
            outbreak alert. If the AI is wrong, the vet rejects it and the farmer is told why.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[460px] py-6">
          {/* the AI suggestion */}
          <div className="rounded-[26px] border-2 border-dashed border-ink/20 bg-white/70 p-5">
            <div className="flex items-center gap-2 text-[13px] font-medium text-ink-muted">
              <Icon name="sparkle" className="h-4 w-4 text-olive" /> AI suggestion, not a diagnosis
            </div>
            <div className="mt-3 flex items-center gap-4">
              <Skin className="h-16 w-16 shrink-0 rounded-xl" />
              <div className="flex-1">
                <p className="text-[20px] font-semibold leading-tight">Lumpy skin disease</p>
                <div className="mt-2 flex items-center gap-3">
                  <div className="h-2 flex-1 rounded-full bg-ink/10">
                    <motion.div
                      className="h-full rounded-full bg-ink/35"
                      initial={{ width: 0 }}
                      whileInView={{ width: "82%" }}
                      viewport={inView}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                  <span className="text-[14px] font-semibold text-ink-soft">82%</span>
                </div>
              </div>
            </div>
          </div>

          {/* the vet's decision lands on top */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={inView}
            transition={{ delay: 0.9, type: "spring", stiffness: 180, damping: 18 }}
            className="relative -mt-6 ml-3 rounded-[26px] sm:ml-8 bg-white p-5 shadow-[0_30px_60px_-30px_rgba(63,105,0,0.45)]"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-olive text-[14px] font-semibold text-white">AD</span>
              <div className="flex-1">
                <p className="text-[16px] font-semibold">Dr. Anjali Deshmukh</p>
                <p className="text-[13px] text-ink-muted">Examined Tara in person, 8:40 am</p>
              </div>
            </div>
            <p className="mt-4 text-[15px] leading-snug text-ink-soft">
              Confirmed lumpy skin disease. Treatment started and Tara is kept apart from the herd.
            </p>
            <div className="mt-4 flex gap-2">
              <span className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-xl bg-lime text-[14px] font-semibold">
                <Icon name="check" className="h-4 w-4" /> Confirmed
              </span>
              <span className="flex h-10 flex-1 items-center justify-center rounded-xl border border-ink/10 text-[14px] font-semibold text-ink/35">Reject</span>
            </div>
            <motion.span
              initial={{ opacity: 0, scale: 2.2, rotate: -30 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -14 }}
              viewport={inView}
              transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 14 }}
              className="absolute -top-10 right-1 flex h-24 w-24 sm:-right-4 sm:-top-8 flex-col items-center justify-center rounded-full border-[3px] border-olive bg-sage/90 text-center font-display text-[13px] font-bold leading-tight text-olive backdrop-blur"
            >
              <Icon name="stethoscope" className="mb-0.5 h-5 w-5" />
              Vet
              <br />
              verified
            </motion.span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
