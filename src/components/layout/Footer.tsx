import { ArrowUp, Terminal } from "lucide-react";
import { profileData } from "@/data/profile";
import { GithubIcon, LinkedinIcon, TwitterIcon, FacebookIcon } from "@/components/ui/SocialIcons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0F14] border-t border-[#223447] text-[#DDD7C9] py-14 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#223447]/60">
          {/* Brand & Wordmark */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-[#162330] border border-[#223447] flex items-center justify-center text-[#D7FF64]">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-mono text-base font-bold text-[#F5F2EA] tracking-tight">
                {profileData.name}
              </span>
            </div>
            <p className="text-sm text-[#DDD7C9]/80 max-w-sm leading-relaxed">
              {profileData.designation}. Focused on web development, clean system design, and software fundamentals.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="font-mono text-xs text-[#D7FF64]">
                {profileData.statusText}
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs uppercase tracking-wider">
            <p className="text-[11px] text-[#DDD7C9]/50 tracking-widest uppercase">
              INDEX // NAVIGATION
            </p>
            <div className="grid grid-cols-2 gap-2">
              <a href="#home" className="hover:text-[#D7FF64] transition-colors py-1">
                {"//"} 00. Home
              </a>
              <a href="#about" className="hover:text-[#D7FF64] transition-colors py-1">
                {"//"} 01. About
              </a>
              <a href="#skills" className="hover:text-[#D7FF64] transition-colors py-1">
                {"//"} 02. Skills
              </a>
              <a href="#education" className="hover:text-[#D7FF64] transition-colors py-1">
                {"//"} 03. Education
              </a>
              <a href="#projects" className="hover:text-[#D7FF64] transition-colors py-1">
                {"//"} 04. Projects
              </a>
              <a href="#contact" className="hover:text-[#D7FF64] transition-colors py-1">
                {"//"} 05. Contact
              </a>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="md:col-span-3 space-y-3">
            <p className="font-mono text-[11px] text-[#DDD7C9]/50 tracking-widest uppercase">
              NETWORK // PROFILES
            </p>
            <div className="flex flex-wrap gap-2">
              {profileData.contact.socials.github && (
                <a
                  href={profileData.contact.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-10 h-10 border border-[#223447] bg-[#162330] flex items-center justify-center text-[#F5F2EA] hover:text-[#101820] hover:bg-[#D7FF64] hover:border-[#D7FF64] transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}
              {profileData.contact.socials.linkedin && (
                <a
                  href={profileData.contact.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-10 h-10 border border-[#223447] bg-[#162330] flex items-center justify-center text-[#F5F2EA] hover:text-[#101820] hover:bg-[#D7FF64] hover:border-[#D7FF64] transition-all"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              )}
              {profileData.contact.socials.twitter && (
                <a
                  href={profileData.contact.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter Profile"
                  className="w-10 h-10 border border-[#223447] bg-[#162330] flex items-center justify-center text-[#F5F2EA] hover:text-[#101820] hover:bg-[#D7FF64] hover:border-[#D7FF64] transition-all"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
              )}
              {profileData.contact.socials.facebook && (
                <a
                  href={profileData.contact.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Profile"
                  className="w-10 h-10 border border-[#223447] bg-[#162330] flex items-center justify-center text-[#F5F2EA] hover:text-[#101820] hover:bg-[#D7FF64] hover:border-[#D7FF64] transition-all"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              )}
            </div>
            <p className="font-mono text-xs text-[#DDD7C9]/60 pt-2">
              Dhaka, Bangladesh
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#DDD7C9]/70">
          <p>© {currentYear} {profileData.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#DDD7C9]/50">
              NEXT.JS • TAILWIND CSS • TYPESCRIPT
            </span>
            <a
              href="#home"
              className="inline-flex items-center gap-1.5 text-[#F5F2EA] hover:text-[#D7FF64] transition-colors p-1"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
