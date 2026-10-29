"use client";

import { useState } from "react";
import { Download, FileText, X, AlertCircle, Mail } from "lucide-react";

interface ResumeButtonProps {
  resumeUrl: string;
  isReady: boolean;
  className?: string;
  variant?: "primary" | "secondary";
}

export function ResumeButton({
  resumeUrl,
  isReady,
  className = "",
  variant = "primary",
}: ResumeButtonProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const baseStyles =
    variant === "primary"
      ? "bg-[#D7FF64] text-[#101820] font-semibold hover:bg-[#C5F348] border-2 border-[#D7FF64] shadow-[4px_4px_0px_0px_#101820]"
      : "bg-transparent text-[#F5F2EA] border-2 border-[#223447] hover:border-[#D7FF64] hover:text-[#D7FF64]";

  if (isReady) {
    return (
      <a
        href={resumeUrl}
        download="Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm uppercase tracking-wider font-mono transition-all duration-200 active:translate-x-[2px] active:translate-y-[2px] ${baseStyles} ${className}`}
        aria-label="Download Curriculum Vitae (PDF)"
      >
        <Download className="w-4 h-4" />
        <span>Download Resume</span>
      </a>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setModalOpen(true)}
        className={`inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm uppercase tracking-wider font-mono transition-all duration-200 cursor-pointer active:translate-x-[2px] active:translate-y-[2px] ${baseStyles} ${className}`}
        aria-label="View Resume status"
      >
        <Download className="w-4 h-4" />
        <span>Download Resume</span>
      </button>

      {/* Accessible Status Notice Modal */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-dialog-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-md bg-[#131E2A] border-2 border-[#223447] p-6 shadow-2xl text-[#F5F2EA]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-[#DDD7C9] hover:text-[#D7FF64] border border-[#223447] hover:border-[#D7FF64] transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#101820] border border-[#D7FF64]/50 flex items-center justify-center text-[#D7FF64]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#D7FF64]">
                  Document Notice
                </span>
                <h3 id="resume-dialog-title" className="text-lg font-bold">
                  Resume File Notice
                </h3>
              </div>
            </div>

            <div className="bg-[#101820] border border-[#223447] p-4 text-xs font-mono text-[#DDD7C9] space-y-2 mb-5">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-[#D7FF64] shrink-0 mt-0.5" />
                <p>
                  The official PDF file has not been placed in the public directory yet.
                </p>
              </div>
              <p className="text-[11px] text-[#DDD7C9]/70 pl-6">
                To enable single-click download, place your resume at:
                <code className="block mt-1 text-[#D7FF64] bg-[#162330] p-1.5 border border-[#223447]">
                  public/resume/resume.pdf
                </code>
                and set <code className="text-[#D7FF64]">isResumeReady: true</code> in <code className="text-[#D7FF64]">src/data/profile.ts</code>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                onClick={() => setModalOpen(false)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono uppercase tracking-wider bg-[#D7FF64] text-[#101820] font-bold hover:bg-[#C5F348] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact Directly</span>
              </a>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="px-4 py-2.5 text-xs font-mono uppercase tracking-wider border border-[#223447] text-[#DDD7C9] hover:text-[#F5F2EA] transition-colors"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
