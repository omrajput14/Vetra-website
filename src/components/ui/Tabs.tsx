"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface TabItem {
  id: string;
  label: string;
  badge?: string | number;
  icon?: React.ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (id: string) => void;
  className?: string;
  variant?: "pill" | "underline" | "dark";
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChange,
  className,
  variant = "pill",
}) => {
  if (variant === "dark") {
    return (
      <div className={cn("inline-flex p-1.5 bg-vetra-darkest/70 rounded-full border border-vetra-mint/20 backdrop-blur-md", className)}>
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer",
                isActive
                  ? "bg-vetra-primary text-white shadow-md shadow-vetra-primary/30"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              )}
            >
              {tab.icon && <span className="w-4 h-4">{tab.icon}</span>}
              <span>{tab.label}</span>
              {tab.badge && (
                <span
                  className={cn(
                    "text-[10px] px-1.5 py-0.5 rounded-full font-bold",
                    isActive ? "bg-white/20 text-white" : "bg-vetra-surface text-vetra-ice"
                  )}
                >
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className={cn("inline-flex p-1.5 bg-slate-100/90 rounded-full border border-slate-200/80 backdrop-blur-sm", className)}>
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer",
              isActive
                ? "bg-white text-vetra-dark shadow-sm border border-slate-200/60"
                : "text-slate-600 hover:text-vetra-dark hover:bg-white/50"
            )}
          >
            {tab.icon && <span className="w-4 h-4">{tab.icon}</span>}
            <span>{tab.label}</span>
            {tab.badge && (
              <span
                className={cn(
                  "text-[10px] px-1.5 py-0.5 rounded-full font-bold",
                  isActive ? "bg-emerald-100 text-emerald-800" : "bg-slate-200 text-slate-700"
                )}
              >
                {tab.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
