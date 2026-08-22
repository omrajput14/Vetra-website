import React from "react";
import { Badge } from "./Badge";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badgeText?: string;
  badgeVariant?: "primary" | "success" | "warning" | "danger" | "neutral" | "dark";
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  isDark?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badgeText,
  badgeVariant = "primary",
  title,
  subtitle,
  align = "center",
  className,
  isDark = false,
}) => {
  const alignmentClass = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={cn("flex flex-col max-w-3xl mb-12 sm:mb-16", alignmentClass[align], className)}>
      {badgeText && (
        <div className="mb-3.5">
          <Badge variant={badgeVariant} dot>
            {badgeText}
          </Badge>
        </div>
      )}

      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15]",
          isDark ? "text-white" : "text-vetra-dark"
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed max-w-2xl",
            isDark ? "text-slate-300" : "text-slate-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
