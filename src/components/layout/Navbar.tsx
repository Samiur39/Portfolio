"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Terminal } from "lucide-react";
import { profileData } from "@/data/profile";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section intersection detection
      const sections = ["home", "about", "skills", "education", "projects", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-[#101820]/95 backdrop-blur-md border-b border-[#223447] py-3.5 shadow-lg"
          : "bg-[#101820]/80 backdrop-blur-sm border-b border-[#223447]/60 py-5"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between"
        aria-label="Main Navigation"
      >
        {/* Brand Wordmark */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 font-mono text-sm tracking-tight text-[#F5F2EA] focus-visible:ring-2 focus-visible:ring-[#D7FF64] transition-transform duration-200"
          aria-label={`${profileData.name} - Home`}
        >
          <div className="w-8 h-8 rounded-none bg-[#162330] border border-[#223447] flex items-center justify-center text-[#D7FF64] group-hover:border-[#D7FF64] group-hover:bg-[#101820] transition-colors duration-200">
            <Terminal className="w-4 h-4 text-[#D7FF64]" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-[#F5F2EA] group-hover:text-[#D7FF64] transition-colors duration-200 leading-tight">
              {profileData.name}
            </span>
            <span className="text-[10px] text-[#DDD7C9]/60 font-mono tracking-widest uppercase">
              PORTFOLIO // 2026
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1 font-mono text-xs uppercase tracking-wider">
          {navItems.map((item) => {
            const sectionKey = item.href.replace("#", "");
            const isActive = activeSection === sectionKey;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-3.5 py-2 transition-colors duration-200 ${
                  isActive
                    ? "text-[#D7FF64] font-semibold"
                    : "text-[#DDD7C9] hover:text-[#F5F2EA]"
                }`}
              >
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#D7FF64] transition-all duration-300" />
                )}
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="btn-micro inline-flex items-center gap-1.5 px-4 py-2 font-mono text-xs uppercase tracking-wider bg-[#162330] hover:bg-[#D7FF64] text-[#F5F2EA] hover:text-[#101820] border border-[#223447] hover:border-[#D7FF64] transition-all duration-200"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn-micro p-2 border border-[#223447] bg-[#162330] text-[#F5F2EA] hover:text-[#D7FF64] hover:border-[#D7FF64] transition-colors duration-200"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-x-0 top-[65px] bg-[#101820]/98 backdrop-blur-md border-b-2 border-[#223447] shadow-2xl p-6 transition-all animate-in slide-in-from-top-3 duration-200"
          role="dialog"
          aria-label="Mobile Navigation Menu"
        >
          <div className="flex flex-col space-y-3 font-mono text-sm uppercase tracking-wider">
            {navItems.map((item) => {
              const sectionKey = item.href.replace("#", "");
              const isActive = activeSection === sectionKey;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-3 border border-[#223447] transition-all duration-200 ${
                    isActive
                      ? "bg-[#162330] text-[#D7FF64] border-[#D7FF64]/50 font-bold"
                      : "text-[#DDD7C9] hover:bg-[#162330] hover:text-[#F5F2EA]"
                  }`}
                >
                  <span>{item.label}</span>
                </a>
              );
            })}

            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-micro w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#D7FF64] text-[#101820] font-bold uppercase tracking-wider text-xs shadow-md"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
