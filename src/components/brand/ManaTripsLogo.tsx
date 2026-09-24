import React from "react";
import originalLogo from "@/assets/mana-trips-logo.png";

interface ManaTripsLogoProps {
  className?: string;
  variant?: "light" | "dark" | "full";
  size?: "sm" | "md" | "lg";
}

export function ManaTripsLogo({ className = "", size = "md" }: ManaTripsLogoProps) {
  const sizeClasses =
    size === "sm"
      ? "h-9 w-auto max-h-9"
      : size === "lg"
        ? "h-14 w-auto max-h-14"
        : "h-11 md:h-12 w-auto max-h-12";

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={originalLogo}
        alt="Mana Trips — Budget Friendly Tours & Adventures"
        className={`${sizeClasses} rounded-lg object-contain transition-transform duration-200 hover:scale-[1.02]`}
        loading="eager"
        decoding="async"
      />
    </div>
  );
}

export default ManaTripsLogo;
