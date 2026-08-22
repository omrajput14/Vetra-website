"use client";

import React, { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle, Building2, Stethoscope, Users2, Send } from "lucide-react";

interface PartnerWithUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PartnerWithUsModal: React.FC<PartnerWithUsModalProps> = ({ isOpen, onClose }) => {
  const [partnerType, setPartnerType] = useState<"vet" | "coop" | "govt">("vet");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    location: "",
    vciNumber: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      organization: "",
      email: "",
      phone: "",
      location: "",
      vciNumber: "",
      message: "",
    });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Join the Vetra Healthcare Network"
      subtitle="Partner with us to digitize veterinary practice, track herd health, or integrate cooperative registries."
      maxWidth="lg"
    >
      {submitted ? (
        <div className="text-center py-8 space-y-4">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold text-vetra-dark">Application Received!</h4>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Thank you for applying to the Vetra Network. Our veterinary onboarding team will verify your credentials and reach out within 24 business hours.
          </p>
          <Button variant="primary" size="md" onClick={handleReset} className="mt-4">
            Close
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          {/* Partner Role Selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">I am registering as:</label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setPartnerType("vet")}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  partnerType === "vet"
                    ? "border-emerald-600 bg-emerald-50 text-emerald-900 font-semibold ring-1 ring-emerald-600"
                    : "border-slate-200 hover:bg-slate-50 text-slate-600 text-xs"
                }`}
              >
                <Stethoscope className="w-4 h-4 mb-1 text-emerald-700" />
                <div className="text-xs font-bold">Veterinarian</div>
                <div className="text-[10px] text-slate-500">VCI / State Council</div>
              </button>

              <button
                type="button"
                onClick={() => setPartnerType("coop")}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  partnerType === "coop"
                    ? "border-emerald-600 bg-emerald-50 text-emerald-900 font-semibold ring-1 ring-emerald-600"
                    : "border-slate-200 hover:bg-slate-50 text-slate-600 text-xs"
                }`}
              >
                <Building2 className="w-4 h-4 mb-1 text-emerald-700" />
                <div className="text-xs font-bold">Dairy Cooperative</div>
                <div className="text-[10px] text-slate-500">FPO / Union / Herd</div>
              </button>

              <button
                type="button"
                onClick={() => setPartnerType("govt")}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  partnerType === "govt"
                    ? "border-emerald-600 bg-emerald-50 text-emerald-900 font-semibold ring-1 ring-emerald-600"
                    : "border-slate-200 hover:bg-slate-50 text-slate-600 text-xs"
                }`}
              >
                <Users2 className="w-4 h-4 mb-1 text-emerald-700" />
                <div className="text-xs font-bold">Govt / Research</div>
                <div className="text-[10px] text-slate-500">AH Dept / ICAR</div>
              </button>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Full Name *</label>
              <input
                type="text"
                required
                placeholder="Dr. Rajesh Deshmukh"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                {partnerType === "vet" ? "Clinic / Hospital Name" : "Organization / Federation"} *
              </label>
              <input
                type="text"
                required
                placeholder={partnerType === "vet" ? "Baramati Polyclinic" : "Mahanand Dairy Cooperative"}
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Email Address *</label>
              <input
                type="email"
                required
                placeholder="rajesh@vetcare.in"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Phone / WhatsApp Number *</label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">District / State *</label>
              <input
                type="text"
                required
                placeholder="Pune, Maharashtra"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600"
              />
            </div>

            {partnerType === "vet" && (
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">VCI / State Council Reg # *</label>
                <input
                  type="text"
                  required
                  placeholder="VCI-MH-84920"
                  value={formData.vciNumber}
                  onChange={(e) => setFormData({ ...formData, vciNumber: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600"
                />
              </div>
            )}
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Message / Requirements</label>
            <textarea
              rows={2}
              placeholder="Tell us about your herd size, clinical coverage area, or integration goals..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 resize-none"
            />
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              size="md"
              className="w-full justify-center"
              icon={<Send className="w-4 h-4" />}
            >
              Submit Partner Application
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};
