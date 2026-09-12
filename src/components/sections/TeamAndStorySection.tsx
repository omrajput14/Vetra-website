"use client";

import React from "react";
import {
  Users,
  Code2,
  BrainCircuit,
  Milestone,
  CheckCircle2,
  HeartHandshake,
  Sparkles,
  Award,
  Layers,
  ArrowRight,
  Compass,
  Cloud,
} from "lucide-react";

export const TeamAndStorySection: React.FC = () => {
  const teamMembers = [
    {
      name: "Om Rajput",
      role: "Founder & Product / Technology Lead",
      badge: "Product & Technology Lead",
      desc: "Leading overall product vision, system architecture, and end-to-end engineering of Vetra's digital animal healthcare platform across mobile and web.",
      icon: <Compass className="w-5 h-5 text-gold-600" />,
      initials: "OR",
    },
    {
      name: "Soham Pawar",
      role: "Full Stack Developer",
      badge: "Full Stack & Government GIS",
      desc: "Architecting the national disease surveillance command center, spatial-temporal epidemiological outbreak mapping, and responsive full-stack systems.",
      icon: <Layers className="w-5 h-5 text-indigo-700" />,
      initials: "SP",
    },
    {
      name: "Khushi Shinde",
      role: "Cloud Developer",
      badge: "Cloud Dev & Infrastructure",
      desc: "Designing scalable AWS cloud architecture, automated Terraform infrastructure, containerized microservices, and high-availability cloud deployments.",
      icon: <Cloud className="w-5 h-5 text-sky-700" />,
      initials: "KS",
    },
    {
      name: "Mrunmai Joshi",
      role: "Product Research & Communication Lead",
      badge: "Research & Communication",
      desc: "Driving product domain research, multilingual farmer communication strategy, clinical requirements gathering, and community outreach.",
      icon: <BrainCircuit className="w-5 h-5 text-sky-800" />,
      initials: "MJ",
    },
    {
      name: "Prachi Pawar",
      role: "Product Presentation & Design Lead",
      badge: "Presentation & Design",
      desc: "Leading product presentation, user interface design systems, visual storytelling, and crafting intuitive healthcare experiences for farmers and veterinarians.",
      icon: <Sparkles className="w-5 h-5 text-rose-700" />,
      initials: "PP",
    },
    {
      name: "Dhiraj Pawar",
      role: "Research & Operations Lead",
      badge: "Research & Operations",
      desc: "Spearheading agricultural field research, rural workflow analysis, ground operational dynamics, and streamlining veterinary field integration.",
      icon: <Code2 className="w-5 h-5 text-emerald-800" />,
      initials: "DP",
    },
  ];

  const milestones = [
    {
      title: "Working Multi-Role MVP",
      detail: "Clean Architecture Flutter mobile app developed with dedicated Farmer and Veterinarian workflows.",
      date: "Phase 1 Complete",
    },
    {
      title: "Multilingual Voice Triage",
      detail: "Devanagari phonetic speech extraction and ElevenLabs realistic voice AI integrated for Marathi, Hindi, and English.",
      date: "Integrated",
    },
    {
      title: "Staging Cloud Infrastructure",
      detail: "Spring Boot 3.2.0 backend, PostgreSQL RDS, and Redis caching deployed on AWS Multi-AZ staging environment.",
      date: "Staging Active",
    },
    {
      title: "Epidemic Radar Simulation",
      detail: "Dynamic 10–25 km geo-radius calculations and automated ring containment advisory system designed.",
      date: "Operational",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-bg border-t border-line-soft relative overflow-hidden" id="team">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-[720px] mb-14 text-left">
          <span className="eyebrow-tag">THE TEAM BEHIND VETRA</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-pasture-900 font-semibold mt-3.5 mb-4 leading-[1.12] tracking-tight">
            Building technology for better animal healthcare.
          </h2>
          <p className="text-base sm:text-[17px] text-ink-soft leading-relaxed">
            Vetra is being built by a team passionate about solving real-world healthcare challenges through technology, artificial intelligence, and accessible digital systems.
          </p>
        </div>

        {/* Founder Story Block: "Why Vetra" */}
        <div className="bg-card border border-line rounded-3xl p-7 sm:p-10 shadow-tactile relative overflow-hidden tactile-card mb-14">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            <div className="space-y-4 flex-1">
              <div className="flex items-center gap-2 border-b border-dashed border-line pb-3">
                <HeartHandshake className="w-4 h-4 text-pasture-700" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-pasture-900">
                  Why Vetra • The Story &amp; Purpose
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-pasture-900 font-bold tracking-tight">
                Addressing a critical gap in rural animal health.
              </h3>

              <div className="space-y-3.5 text-sm sm:text-[15px] text-ink-soft leading-relaxed font-sans">
                <p>
                  In smallholder dairy communities, an animal is far more than livestock — it represents generational livelihoods, family nutrition, and economic resilience. When an animal falls sick, delay in medical attention often leads to devastating financial losses.
                </p>
                <p>
                  During field research across rural dairy clusters, we observed that veterinary healthcare remains bottlenecked by paper registers, geographic isolation, and severe practitioner shortages. When contagious outbreaks occur, neighboring farms rarely receive timely warnings before it is too late.
                </p>
                <p>
                  We are building Vetra to solve this exact friction: enabling farmers to report observations naturally in their own mother tongue, giving veterinarians structured digital tools for faster on-site examinations, and providing dairy communities with early outbreak intelligence.
                </p>
              </div>
            </div>

            {/* Right Quote / Philosophy Box */}
            <div className="lg:w-[320px] p-6 rounded-2xl bg-bg-alt border border-line space-y-4 shadow-inner shrink-0">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-pasture-700 block">
                Guiding Philosophy
              </span>
              <blockquote className="font-serif text-base text-pasture-900 font-semibold italic leading-snug">
                &ldquo;Every animal deserves a continuous health record. Every rural veterinarian deserves modern clinical tools.&rdquo;
              </blockquote>
              <div className="pt-2 border-t border-dashed border-line-soft font-mono text-xs text-ink-soft">
                — The Vetra Team
              </div>
            </div>
          </div>
        </div>

        {/* Team Profile Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-card border border-line rounded-3xl p-6 sm:p-7 space-y-4 tactile-card hover:bg-white transition-all shadow-tactile flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Profile Avatar Header */}
                <div className="flex items-center gap-3.5">
                  <div className="w-13 h-13 w-12 h-12 rounded-2xl bg-pasture-900 text-bg flex items-center justify-center font-serif text-lg font-bold shadow-xs border border-pasture-800 shrink-0">
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-pasture-900 tracking-tight">
                      {member.name}
                    </h3>
                    <div className="text-xs font-mono font-semibold text-pasture-700">
                      {member.role}
                    </div>
                  </div>
                </div>

                <span className="font-mono text-[10px] font-bold text-ink-soft bg-bg-alt px-2.5 py-1 rounded border border-line block w-fit">
                  {member.badge}
                </span>

                <p className="text-xs sm:text-sm text-ink-soft leading-relaxed font-sans">
                  &ldquo;{member.desc}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-dashed border-line-soft font-mono text-[10.5px] text-pasture-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>Core Engineering &amp; Product</span>
              </div>
            </div>
          ))}
        </div>

        {/* Milestones & Verified Progress Section */}
        <div className="bg-card border border-line rounded-3xl p-6 sm:p-9 shadow-tactile relative overflow-hidden tactile-card">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-dashed border-line pb-5 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Milestone className="w-4 h-4 text-pasture-700" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-pasture-900">
                  Verified Technical Milestones
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-pasture-900">
                Milestones &amp; Implementation Progress
              </h3>
            </div>
            <span className="font-mono text-[11px] font-semibold text-ink-soft bg-bg-alt px-3 py-1 rounded-full border border-line self-start sm:self-auto">
              Real Verified Achievements
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-bg-alt border border-line space-y-2 flex flex-col justify-between shadow-inner"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-gold-600 font-bold">0{idx + 1}</span>
                    <span className="text-[9.5px] font-bold text-pasture-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200">
                      {m.date}
                    </span>
                  </div>
                  <strong className="font-serif text-sm font-bold text-pasture-900 block font-sans">
                    {m.title}
                  </strong>
                  <p className="text-xs text-ink-soft leading-relaxed font-sans">
                    {m.detail}
                  </p>
                </div>

                <div className="pt-2 border-t border-dashed border-line-soft text-[10px] text-pasture-700 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-700 shrink-0" />
                  <span>Tested &amp; Operational</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
