"use client";

import React, { useState } from "react";
import {
  Users,
  Stethoscope,
  Building2,
  TrendingUp,
  Mail,
  Phone,
  Globe,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Send,
  Sparkles,
} from "lucide-react";

type AudienceType = "Farmer" | "Veterinarian" | "Organization" | "Investor" | "Other";

export const JoinEcosystemSection: React.FC = () => {
  const [selectedAudience, setSelectedAudience] = useState<AudienceType>("Farmer");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const audienceCards = [
    {
      id: "Farmer" as AudienceType,
      title: "Farmers",
      icon: <Users className="w-5 h-5 text-pasture-700" />,
      purpose: "Interested in improving animal health tracking and veterinary access?",
      cta: "Request Early Access",
      badge: "Producer Community",
    },
    {
      id: "Veterinarian" as AudienceType,
      title: "Veterinarians",
      icon: <Stethoscope className="w-5 h-5 text-emerald-800" />,
      purpose: "Join a connected veterinary workflow and help build digital animal healthcare.",
      cta: "Join Veterinary Network",
      badge: "Clinical Network",
    },
    {
      id: "Organization" as AudienceType,
      title: "Dairy & Livestock Organizations",
      icon: <Building2 className="w-5 h-5 text-sky-800" />,
      purpose: "Explore opportunities for improving livestock health management.",
      cta: "Partner With Vetra",
      badge: "Cooperative & Enterprise",
    },
    {
      id: "Investor" as AudienceType,
      title: "Researchers / Investors",
      icon: <TrendingUp className="w-5 h-5 text-gold-600" />,
      purpose: "Connect with us to understand our vision and roadmap.",
      cta: "Contact Team",
      badge: "Ecosystem Growth",
    },
  ];

  const handleCardClick = (type: AudienceType) => {
    setSelectedAudience(type);
    const formElement = document.getElementById("inquiry-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="py-20 sm:py-24 bg-bg-alt border-t border-line-soft relative overflow-hidden" id="contact">
      <div className="max-w-[1180px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-[720px] mb-14 text-left">
          <span className="eyebrow-tag">JOIN THE VETRA ECOSYSTEM</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-pasture-900 font-semibold mt-3.5 mb-4 leading-[1.12] tracking-tight">
            Building the future of livestock healthcare together.
          </h2>
          <p className="text-base sm:text-[17px] text-ink-soft leading-relaxed">
            Whether you are a farmer, veterinarian, organization, or someone interested in improving animal healthcare access, we would like to hear from you.
          </p>
        </div>

        {/* 4 Audience Pathway Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {audienceCards.map((card) => {
            const isSelected = selectedAudience === card.id;
            return (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className={`p-6 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
                  isSelected
                    ? "bg-white border-pasture-900 shadow-tactile ring-2 ring-pasture-900/10"
                    : "bg-card border-line hover:border-pasture-700 hover:bg-white/80 shadow-xs"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-bg-alt flex items-center justify-center border border-line-soft">
                      {card.icon}
                    </div>
                    <span className="font-mono text-[10px] font-bold text-pasture-700 bg-bg-alt px-2 py-0.5 rounded border border-line">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-pasture-900 leading-snug">
                    {card.title}
                  </h3>

                  <p className="text-xs text-ink-soft leading-relaxed font-sans">
                    {card.purpose}
                  </p>
                </div>

                <div className="pt-3 border-t border-dashed border-line-soft">
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-mono font-bold transition-colors ${
                      isSelected ? "text-pasture-900" : "text-pasture-700 hover:text-pasture-900"
                    }`}
                  >
                    <span>{card.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Form & Direct Information Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="inquiry-form">
          {/* Left Column: Interactive Contact Form (7 Cols) */}
          <div className="lg:col-span-7 bg-card border border-line rounded-3xl p-7 sm:p-9 shadow-tactile tactile-card">
            <div className="border-b border-dashed border-line pb-4 mb-6">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-pasture-700 block mb-1">
                Direct Inquiry Form
              </span>
              <h3 className="font-serif text-2xl font-bold text-pasture-900">
                Send a Message to the Vetra Team
              </h3>
            </div>

            {isSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-950 space-y-2 text-center my-4 font-mono">
                <CheckCircle2 className="w-8 h-8 text-emerald-700 mx-auto" />
                <h4 className="font-serif text-lg font-bold text-emerald-900">Inquiry Sent Successfully</h4>
                <p className="text-xs text-emerald-800 font-sans">
                  Thank you for reaching out. Our team will review your message and get back to you shortly at {formData.email || "your provided address"}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                {/* Audience Role Selector */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-ink-soft uppercase block">
                    I am:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {(["Farmer", "Veterinarian", "Organization", "Investor", "Other"] as AudienceType[]).map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setSelectedAudience(type)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                          selectedAudience === type
                            ? "bg-pasture-900 text-bg font-semibold shadow-xs"
                            : "bg-bg-alt text-ink-soft border border-line-soft hover:bg-black/5"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-ink-soft uppercase block">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Full Name"
                      className="w-full px-3.5 py-2.5 bg-bg-alt border border-line rounded-xl font-sans text-xs focus:outline-none focus:ring-2 focus:ring-pasture-900/20 focus:border-pasture-900"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-ink-soft uppercase block">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2.5 bg-bg-alt border border-line rounded-xl font-sans text-xs focus:outline-none focus:ring-2 focus:ring-pasture-900/20 focus:border-pasture-900"
                    />
                  </div>
                </div>

                {/* Phone (optional) */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-ink-soft uppercase block">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 90219 61058"
                    className="w-full px-3.5 py-2.5 bg-bg-alt border border-line rounded-xl font-sans text-xs focus:outline-none focus:ring-2 focus:ring-pasture-900/20 focus:border-pasture-900"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-ink-soft uppercase block">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your herd, clinic, cooperative, or inquiry..."
                    className="w-full px-3.5 py-2.5 bg-bg-alt border border-line rounded-xl font-sans text-xs focus:outline-none focus:ring-2 focus:ring-pasture-900/20 focus:border-pasture-900 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full bg-pasture-900 hover:bg-pasture-800 text-bg text-sm font-sans font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Institutional Contact Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-card border border-line rounded-3xl p-6 sm:p-7 space-y-5 shadow-tactile tactile-card">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-pasture-700 block border-b border-dashed border-line pb-3">
                Direct Contact Information
              </span>

              <div className="space-y-4 font-mono text-xs">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-bg-alt border border-line-soft flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-pasture-700" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-ink-soft block font-bold">Email Address</span>
                    <a
                      href="mailto:hello@vetra.co.in"
                      className="text-pasture-900 font-bold hover:underline text-sm"
                    >
                      hello@vetra.co.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-bg-alt border border-line-soft flex items-center justify-center shrink-0">
                    <Globe className="w-4 h-4 text-pasture-700" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-ink-soft block font-bold">Official Website</span>
                    <span className="text-pasture-900 font-bold text-sm">vetra.co.in</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-bg-alt border border-line-soft flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-pasture-700" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-ink-soft block font-bold">Phone / WhatsApp</span>
                    <a
                      href="tel:+919021961058"
                      className="text-pasture-900 font-bold hover:underline text-sm"
                    >
                      +91 9021961058
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-bg-alt border border-line-soft flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-pasture-700" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-ink-soft block font-bold">Headquarters &amp; Field Focus</span>
                    <span className="text-pasture-900 font-bold text-sm">Maharashtra, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Credibility & Privacy Note */}
            <div className="p-5 rounded-2xl bg-bg border border-line text-xs font-mono text-ink-soft space-y-1.5 shadow-inner">
              <strong className="text-pasture-900 block font-semibold">Institutional Inquiries &amp; Pilots</strong>
              <p className="font-sans text-[11.5px] leading-relaxed">
                We work directly with veterinary practitioners, dairy cooperatives, and livestock research initiatives. Inquiries are reviewed within 24–48 business hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
