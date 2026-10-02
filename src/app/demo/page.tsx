import type { Metadata } from "next";
import { DigitalPassportSection } from "@/components/sections/DigitalPassportSection";
import { AiAssessmentDemoSection } from "@/components/sections/AiAssessmentDemoSection";
import { VoiceTriageSimulator } from "@/components/interactive/VoiceTriageSimulator";
import { BiosecurityRadar3D } from "@/components/interactive/BiosecurityRadar3D";
import { UnderTheHoodSection } from "@/components/sections/UnderTheHoodSection";

export const metadata: Metadata = {
  title: "Try the demos",
  description: "Interactive demos of the Vetra animal health record, photo and voice reporting, and outbreak alerts.",
};

export default function DemoPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-5 pb-8 pt-32 sm:px-8 sm:pt-40">
        <h1 className="font-display text-5xl font-bold leading-none sm:text-6xl">Try the demos</h1>
        <p className="mt-5 max-w-[36em] text-xl leading-relaxed text-ink-soft">
          Interactive versions of what farmers and vets see in the Vetra app. All animals, vets and farms shown here
          are sample data.
        </p>
      </section>

      <DigitalPassportSection />
      <AiAssessmentDemoSection />

      <section id="voice-triage" className="border-t border-line-soft bg-bg py-20 sm:py-24">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
          <VoiceTriageSimulator />
        </div>
      </section>

      <section id="biosecurity" className="border-t border-line-soft bg-bg-alt py-20 sm:py-24">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-8">
          <h2 className="mb-10 font-display text-4xl leading-tight">Outbreak alerts</h2>
          <BiosecurityRadar3D />
        </div>
      </section>

      <UnderTheHoodSection />
    </main>
  );
}
