"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Download, Menu, X, Stethoscope, Sparkles, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onOpenDownload: () => void;
  onOpenPartner: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDownload, onOpenPartner }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "4 Pillars", href: "#solution" },
    { label: "How It Works", href: "#journey" },
    { label: "Farmers", href: "#farmers" },
    { label: "Veterinarians", href: "#vets" },
    { label: "Live Simulator", href: "#simulator" },
    { label: "Architecture", href: "#architecture" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-white/85 backdrop-blur-xl border-b border-slate-200/80 py-3.5 shadow-sm"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-vetra-darkest flex items-center justify-center p-1.5 shadow-md shadow-emerald-950/20 group-hover:scale-105 transition-transform">
              <Image
                src="/branding/vetra_icon.png"
                alt="Vetra Logo"
                width={36}
                height={36}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-vetra-dark">
                VETRA
              </span>
              <span className="text-[9px] uppercase tracking-widest font-bold text-emerald-700 -mt-1">
                Veterinary OS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-white/70 border border-slate-200/70 rounded-full px-4 py-1.5 shadow-xs backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs xl:text-sm font-medium text-slate-700 hover:text-emerald-700 px-3 py-1 rounded-full hover:bg-slate-100/80 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Dual Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <Button
              variant="outline"
              size="sm"
              onClick={onOpenPartner}
              icon={<Stethoscope className="w-3.5 h-3.5 text-emerald-700" />}
              iconPosition="left"
              className="text-xs"
            >
              Veterinary Network
            </Button>

            <Button
              variant="primary"
              size="sm"
              onClick={onOpenDownload}
              icon={<Download className="w-3.5 h-3.5" />}
              iconPosition="left"
              className="text-xs shadow-emerald-900/20"
            >
              Download App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-white/95 backdrop-blur-2xl flex flex-col p-6 animate-fade-in">
          <div className="flex items-center justify-between pb-6 border-b border-slate-200">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-lg bg-vetra-darkest flex items-center justify-center p-1">
                <Image
                  src="/branding/vetra_icon.png"
                  alt="Vetra Logo"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-extrabold text-vetra-dark">VETRA</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-xl text-slate-500 hover:bg-slate-100"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 py-6 flex flex-col gap-3 overflow-y-auto">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-lg font-semibold text-slate-800 py-2.5 border-b border-slate-100 hover:text-emerald-700"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>

          <div className="pt-4 space-y-3 border-t border-slate-200">
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDownload();
              }}
              icon={<Download className="w-5 h-5" />}
              iconPosition="left"
              className="w-full justify-center text-sm"
            >
              Download Vetra App (APK)
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPartner();
              }}
              icon={<Stethoscope className="w-5 h-5 text-emerald-700" />}
              iconPosition="left"
              className="w-full justify-center text-sm"
            >
              Join Doctor Network
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
