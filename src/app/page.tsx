import { Hero } from "@/components/home/Hero";
import { Statement } from "@/components/home/Statement";
import { Story } from "@/components/home/Story";
import { FieldReady } from "@/components/home/FieldReady";
import { Audiences } from "@/components/home/Audiences";
import { Team } from "@/components/home/Team";
import { OneRecord } from "@/components/home/OneRecord";
import { VetsDecide } from "@/components/home/VetsDecide";
import { Contact } from "@/components/home/Contact";
import { EMAIL, PHONE } from "@/components/home/links";

const FAQ = [
  {
    q: "Does Vetra diagnose animals?",
    a: "No. The AI gives a preliminary suggestion that is clearly labelled as one. Para-vets check scans in the field and licensed vets confirm the diagnosis. Only vet-confirmed cases count as confirmed or trigger outbreak alerts.",
  },
  {
    q: "Which languages does it work in?",
    a: "The app works in Marathi, Hindi and English, and outbreak alerts go out in each farmer's own language.",
  },
  {
    q: "What if there's no mobile signal?",
    a: "Reports, scans and vaccination doses are saved on the phone and sync on their own when the network comes back.",
  },
  {
    q: "Where is Vetra available?",
    a: "We're piloting with dairy farmers, para-vets and vets in Maharashtra. If you'd like Vetra in your district, talk to us.",
  },
  {
    q: "How do I join as a vet or bring Vetra to my cooperative?",
    a: `Message us on WhatsApp at ${PHONE} or email ${EMAIL}. We'll set up a call and get you onboarded.`,
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <OneRecord />
      <Statement />
      <Story />
      <FieldReady />
      <VetsDecide />
      <Audiences />
      <Team />

      <section id="faq" className="mx-auto grid max-w-[1240px] scroll-mt-24 gap-10 px-5 pb-24 sm:px-8 sm:pb-32 lg:grid-cols-[1fr_1.6fr]">
        <h2 className="text-[clamp(2.2rem,4.6vw,3.4rem)] font-semibold leading-[1.02] tracking-[-0.045em]">Questions, answered</h2>
        <div className="border-t border-ink/15">
          {FAQ.map((f, i) => (
            <details key={f.q} open={i === 0} className="group border-b border-ink/15 py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[19px] font-semibold tracking-[-0.015em] [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="relative h-5 w-5 shrink-0 text-olive">
                  <span className="absolute left-0 top-1/2 h-[2px] w-5 -translate-y-1/2 rounded-full bg-current" />
                  <span className="absolute left-1/2 top-0 h-5 w-[2px] -translate-x-1/2 rounded-full bg-current transition-transform duration-300 group-open:scale-y-0" />
                </span>
              </summary>
              <p className="mt-3 max-w-[62ch] text-[17px] leading-relaxed text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <Contact />
    </main>
  );
}
