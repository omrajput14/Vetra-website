"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl";
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = "md",
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  const maxWidthClass = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
  }[maxWidth];

  const modalContent = (
    <div className="fixed inset-0 z-[9999] overflow-y-auto overscroll-contain">
      {/* Semi-transparent Backdrop (Click anywhere outside to dismiss immediately) */}
      <div
        className="fixed inset-0 bg-[#1E3324]/60 backdrop-blur-sm transition-opacity no-print cursor-pointer"
        onClick={onClose}
        aria-label="Click to close modal"
      />

      {/* Center Alignment Container */}
      <div className="min-h-full flex items-center justify-center p-3 sm:p-6 text-center">
        {/* Modal Dialog Card */}
        <div
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.stopPropagation()}
          className={`relative w-full ${maxWidthClass} my-6 sm:my-8 text-left align-middle bg-[#FBF8EF] border border-[rgba(33,31,22,0.18)] rounded-3xl shadow-2xl z-10 animate-fade-in text-[#211F16] overflow-hidden p-6 sm:p-8 no-print`}
        >
          {/* Header */}
          <div className="flex items-start justify-between pb-4 border-b border-dashed border-[rgba(33,31,22,0.14)] mb-5">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1E3324] leading-tight">
                {title}
              </h3>
              {subtitle && <p className="text-xs text-[#4B4939] mt-1 font-mono">{subtitle}</p>}
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full hover:bg-black/10 text-[#4B4939] hover:text-[#1E3324] transition-colors cursor-pointer shrink-0 ml-3 bg-bg-alt/80 border border-line-soft"
              aria-label="Close dialog"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="space-y-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};
