"use client";

import { useState } from "react";
import { FolderGit2, Image as ImageIcon } from "lucide-react";

interface ProjectImageFallbackProps {
  src: string;
  alt: string;
  title: string;
  className?: string;
  priority?: boolean;
}

export function ProjectImageFallback({
  src,
  alt,
  title,
  className = "",
}: ProjectImageFallbackProps) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div
        className={`w-full h-full min-h-[220px] flex flex-col items-center justify-center bg-[#131E2A] border border-[#223447] text-[#DDD7C9] p-6 text-center select-none relative overflow-hidden tech-grid-dark ${className}`}
        aria-label={`${alt} (preview placeholder)`}
      >
        <div className="absolute top-3 left-3 flex items-center gap-1.5 font-mono text-[11px] text-[#D7FF64]/80 uppercase tracking-widest">
          <FolderGit2 className="w-3.5 h-3.5 text-[#D7FF64]" />
          <span>PROJECT PREVIEW</span>
        </div>
        <div className="w-14 h-14 rounded-full bg-[#101820] border border-[#223447] flex items-center justify-center text-[#D7FF64] mb-3 shadow-inner">
          <ImageIcon className="w-6 h-6 opacity-80" />
        </div>
        <p className="font-mono text-sm font-semibold text-[#F5F2EA] max-w-[85%] truncate">
          {title}
        </p>
        <p className="font-mono text-[11px] text-[#DDD7C9]/60 mt-1">
          Target path: <span className="text-[#D7FF64]/90">{src}</span>
        </p>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#131E2A] ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        onError={() => setError(true)}
      />
    </div>
  );
}
