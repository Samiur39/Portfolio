"use client";

import { ArrowDown, Terminal, FolderGit2 } from "lucide-react";
import { profileData } from "@/data/profile";
import { AvatarFallback } from "@/components/ui/AvatarFallback";
import { ResumeButton } from "@/components/ui/ResumeButton";
import { GithubIcon, LinkedinIcon, TwitterIcon, FacebookIcon } from "@/components/ui/SocialIcons";
import { TypewriterText } from "@/components/ui/TypewriterText";

export function HeroSection() {
  const { name, displayInitials, designation, subDesignation, shortBio, contact, assets, statusText } = profileData;

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 pb-20 flex items-center bg-[#101820] text-[#F5F2EA] tech-grid-dark border-b border-[#223447]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Status Pill */}
        <div className="hero-stagger-1 inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-[#223447] bg-[#162330]/90 mb-8 font-mono text-xs hover:border-[#D7FF64]/50 transition-colors">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span className="text-[#D7FF64] uppercase tracking-wider font-semibold">
            {statusText}
          </span>
          <span className="text-[#DDD7C9]/40">|</span>
          <span className="text-[#DDD7C9]/70 font-mono text-[11px]">
            CSE UNDERGRADUATE • DHAKA
          </span>
        </div>

        {/* Asymmetrical Hero Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Heading Block */}
            <div className="hero-stagger-2 space-y-2">
              <p className="font-mono text-sm tracking-widest text-[#D7FF64] uppercase flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#D7FF64]" />
                <TypewriterText
                  text="HELLO, I AM SAMIUR RAHMAN SIFAT"
                  typeSpeed={55}
                  eraseSpeed={30}
                  holdDuration={2800}
                  pauseAfterErase={600}
                  loop={true}
                />
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F2EA] font-heading leading-none">
                {name}
              </h1>
              <div className="pt-2">
                <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#D7FF64] tracking-tight block">
                  {designation}
                </span>
                <span className="text-sm sm:text-base font-mono text-[#DDD7C9]/70">
                  {subDesignation}
                </span>
              </div>
            </div>

            {/* Bio Description */}
            <p className="hero-stagger-3 text-base sm:text-lg text-[#DDD7C9] leading-relaxed max-w-2xl font-normal">
              {shortBio}
            </p>

            {/* Action Buttons */}
            <div className="hero-stagger-4 pt-2 flex flex-wrap items-center gap-4">
              <ResumeButton
                resumeUrl={assets.resume}
                isReady={assets.isResumeReady}
                variant="primary"
              />
              <a
                href="#projects"
                className="btn-micro inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm uppercase tracking-wider font-mono bg-transparent text-[#F5F2EA] border-2 border-[#223447] hover:border-[#D7FF64] hover:text-[#D7FF64] transition-all duration-200"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>View Projects</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="hero-stagger-5 pt-6 border-t border-[#223447]/80">
              <p className="font-mono text-xs uppercase tracking-widest text-[#DDD7C9]/60 mb-3">
                CONNECT & VERIFY // SOCIAL CHANNELS
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {contact.socials.github && (
                  <a
                    href={contact.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="btn-micro flex items-center gap-2 px-3.5 py-2 border border-[#223447] bg-[#162330] text-xs font-mono text-[#DDD7C9] hover:text-[#101820] hover:bg-[#D7FF64] hover:border-[#D7FF64] hover:-translate-y-0.5 transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                )}
                {contact.socials.linkedin && (
                  <a
                    href={contact.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="btn-micro flex items-center gap-2 px-3.5 py-2 border border-[#223447] bg-[#162330] text-xs font-mono text-[#DDD7C9] hover:text-[#101820] hover:bg-[#D7FF64] hover:border-[#D7FF64] hover:-translate-y-0.5 transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                )}
                {contact.socials.twitter && (
                  <a
                    href={contact.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter Profile"
                    className="btn-micro flex items-center gap-2 px-3.5 py-2 border border-[#223447] bg-[#162330] text-xs font-mono text-[#DDD7C9] hover:text-[#101820] hover:bg-[#D7FF64] hover:border-[#D7FF64] hover:-translate-y-0.5 transition-all"
                  >
                    <TwitterIcon className="w-4 h-4" />
                    <span>Twitter</span>
                  </a>
                )}
                {contact.socials.facebook && (
                  <a
                    href={contact.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook Profile"
                    className="btn-micro flex items-center gap-2 px-3.5 py-2 border border-[#223447] bg-[#162330] text-xs font-mono text-[#DDD7C9] hover:text-[#101820] hover:bg-[#D7FF64] hover:border-[#D7FF64] hover:-translate-y-0.5 transition-all"
                  >
                    <FacebookIcon className="w-4 h-4" />
                    <span>Facebook</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Portrait */}
          <div className="hero-stagger-portrait lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] aspect-[4/5] group">
              <div className="absolute -top-3 -right-3 w-full h-full border-2 border-[#D7FF64]/30 pointer-events-none hidden sm:block group-hover:border-[#D7FF64]/60 transition-colors duration-300" />
              <div className="absolute -bottom-3 -left-3 w-full h-full border-2 border-[#223447] pointer-events-none hidden sm:block group-hover:border-[#223447]/80 transition-colors duration-300" />

              <AvatarFallback
                src={assets.avatar}
                alt={`${name} portrait`}
                initials={displayInitials}
                name={name}
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-16 flex justify-start items-center gap-2 font-mono text-xs text-[#DDD7C9]/50">
          <ArrowDown className="w-3.5 h-3.5 text-[#D7FF64] animate-bounce" />
          <span>SCROLL TO EXPLORE PROFILE</span>
        </div>
      </div>
    </section>
  );
}
