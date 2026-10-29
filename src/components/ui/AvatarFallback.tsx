"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";

interface AvatarFallbackProps {
  src: string;
  alt: string;
  initials: string;
  name: string;
  className?: string;
}

export function AvatarFallback({
  src,
  alt,
  initials,
  name,
  className = "",
}: AvatarFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`relative w-full h-full flex flex-col items-center justify-center bg-[#162330] border-2 border-[#223447] text-[#F5F2EA] p-6 text-center tech-grid-dark shadow-xl ${className}`}
        aria-label={`${alt} (initials placeholder)`}
      >
        <div className="absolute top-3 right-3 flex items-center gap-1 font-mono text-[10px] text-[#D7FF64] uppercase tracking-wider bg-[#101820] px-2 py-0.5 border border-[#223447]">
          <Sparkles className="w-3 h-3 text-[#D7FF64]" />
          <span>CSE UNDERGRAD</span>
        </div>

        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#101820] border-2 border-[#D7FF64]/40 flex items-center justify-center my-4 shadow-lg">
          <span className="font-mono text-3xl sm:text-4xl font-bold tracking-tight text-[#D7FF64]">
            {initials}
          </span>
        </div>

        <p className="font-semibold text-base sm:text-lg text-[#F5F2EA]">{name}</p>
        <p className="font-mono text-xs text-[#DDD7C9]/60 mt-1 max-w-[200px]">
          Place photo at <br />
          <span className="text-[#D7FF64] font-mono">public/images/profile/profile.jpg</span>
        </p>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#162330] border-2 border-[#223447] ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onError={() => setHasError(true)}
      />
    </div>
  );
}
