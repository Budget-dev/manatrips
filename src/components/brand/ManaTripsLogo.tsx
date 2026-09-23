import React from "react";

interface ManaTripsLogoProps {
  className?: string;
  variant?: "light" | "dark" | "full";
  size?: "sm" | "md" | "lg";
}

export function ManaTripsLogo({
  className = "",
  variant = "light",
  size = "md",
}: ManaTripsLogoProps) {
  const isLight = variant === "light";

  const iconSize = size === "sm" ? 32 : size === "lg" ? 44 : 38;

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Visual Emblem */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 rounded-xl shadow-xs"
        aria-hidden="true"
      >
        <rect width="64" height="64" rx="14" fill="#0F172A" />
        <circle cx="32" cy="22" r="10" fill="#F59E0B" />
        <polygon points="12,50 30,25 42,40 54,50" fill="#C2410C" />
        <polygon points="20,50 36,29 48,44 56,50" fill="#EA580C" />
        <polygon points="30,25 33,30 28,32" fill="#FAF7F2" opacity="0.9" />
        <polygon points="36,29 40,34 35,36" fill="#FAF7F2" opacity="0.95" />
        <line
          x1="10"
          y1="50"
          x2="54"
          y2="50"
          stroke="#FAF7F2"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Brand Typographic Lockup */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-extrabold tracking-tight font-sans ${
            size === "sm" ? "text-lg" : size === "lg" ? "text-2xl" : "text-xl"
          } ${isLight ? "text-white" : "text-slate-900"}`}
        >
          mana<span className="text-orange-500">trips</span>
        </span>
        <span
          className={`text-[9.5px] uppercase tracking-wider font-semibold ${
            isLight ? "text-slate-300" : "text-slate-500"
          }`}
        >
          Budget Tours & Adventures
        </span>
      </div>
    </div>
  );
}
