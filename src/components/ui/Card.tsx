import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "dark" | "glass" | "glass-dark" | "outline";
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = "default",
  hoverEffect = true,
  ...props
}) => {
  const variantStyles = {
    default: "bg-white text-slate-900 border border-slate-200/80 shadow-card",
    dark: "bg-vetra-dark text-white border border-vetra-mint/20 shadow-xl",
    glass: "glass-panel text-slate-900 shadow-glass",
    "glass-dark": "glass-panel-dark text-white shadow-2xl",
    outline: "bg-transparent border border-slate-200 text-slate-900",
  };

  return (
    <div
      className={cn(
        "rounded-2xl p-6 transition-all duration-300 relative overflow-hidden",
        variantStyles[variant],
        hoverEffect && "glass-card-hover",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
