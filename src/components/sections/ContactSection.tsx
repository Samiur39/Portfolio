"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  Copy,
  Check,
  Send,
  ExternalLink,
} from "lucide-react";
import { profileData } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GithubIcon, LinkedinIcon, TwitterIcon, FacebookIcon } from "@/components/ui/SocialIcons";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ContactSection() {
  const { contact } = profileData;
  const [copied, setCopied] = useState(false);

  // Form state
  const [formState, setFormState] = useState({
    senderName: "",
    senderEmail: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formState.senderName.trim()) errs.senderName = "Please provide your name";
    if (!formState.senderEmail.trim()) {
      errs.senderEmail = "Email address is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formState.senderEmail)) {
      errs.senderEmail = "Please enter a valid email format";
    }
    if (!formState.subject.trim()) errs.subject = "Subject is required";
    if (!formState.message.trim() || formState.message.length < 10) {
      errs.message = "Message must be at least 10 characters";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Genuine mailto client trigger
    const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formState.subject}`
    )}&body=${encodeURIComponent(
      `From: ${formState.senderName} (${formState.senderEmail})\n\nMessage:\n${formState.message}`
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-[#F5F2EA] text-[#101820] border-b border-[#D1CAC0] relative tech-grid-light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            title="Contact Information"
            description="Have an internship opportunity, project collaboration, or question? Reach out through direct channels or the message prompt."
            theme="light"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Contact Cards & Information */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Card with Copy Action */}
            <ScrollReveal delay={100}>
              <div className="bg-[#FAF8F4] border-2 border-[#D1CAC0] p-6 shadow-sm hover:border-[#101820] transition-colors duration-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#555044] font-semibold flex items-center gap-1.5">
                    <Mail className="w-4 h-4 text-[#0D5C46]" />
                    <span>DIRECT EMAIL</span>
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="btn-micro font-mono text-[11px] inline-flex items-center gap-1 px-2.5 py-1 bg-[#E8E3D5] text-[#101820] hover:bg-[#101820] hover:text-[#F5F2EA] transition-all"
                    aria-label="Copy email address to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-[#0D5C46]" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-lg font-bold font-mono text-[#101820] hover:text-[#0D5C46] transition-colors break-all"
                >
                  {contact.email}
                </a>
              </div>
            </ScrollReveal>

            {/* Phone & WhatsApp Card */}
            <ScrollReveal delay={180}>
              <div className="bg-[#FAF8F4] border-2 border-[#D1CAC0] p-6 shadow-sm space-y-4 hover:border-[#101820] transition-colors duration-200">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#555044] font-semibold flex items-center gap-1.5 mb-1">
                    <Phone className="w-4 h-4 text-[#0D5C46]" />
                    <span>PHONE NUMBER</span>
                  </span>
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-base font-bold font-mono text-[#101820] hover:text-[#0D5C46] transition-colors"
                  >
                    {contact.phone}
                  </a>
                </div>

                {contact.whatsapp && (
                  <div className="pt-3 border-t border-[#D1CAC0]">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#555044] font-semibold flex items-center gap-1.5 mb-1">
                      <MessageSquare className="w-4 h-4 text-[#0D5C46]" />
                      <span>WHATSAPP</span>
                    </span>
                    <a
                      href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold font-mono text-[#0D5C46] hover:underline"
                    >
                      <span>{contact.whatsapp}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            </ScrollReveal>

            {/* Location Card */}
            <ScrollReveal delay={240}>
              <div className="bg-[#FAF8F4] border-2 border-[#D1CAC0] p-5 shadow-sm flex items-center gap-3 hover:border-[#101820] transition-colors duration-200">
                <div className="w-9 h-9 bg-[#E8E3D5] flex items-center justify-center text-[#0D5C46] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#555044] font-semibold block">
                    BASE LOCATION
                  </span>
                  <span className="font-bold text-sm text-[#101820]">
                    {contact.location}
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Social Network Profiles */}
            <ScrollReveal delay={300}>
              <div className="bg-[#FAF8F4] border-2 border-[#D1CAC0] p-6 shadow-sm hover:border-[#101820] transition-colors duration-200">
                <span className="font-mono text-xs uppercase tracking-wider text-[#555044] font-semibold block mb-3">
                  SOCIAL MEDIA PROFILES
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  {contact.socials.github && (
                    <a
                      href={contact.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-micro flex items-center gap-2 p-2.5 bg-[#E8E3D5] text-xs font-mono text-[#101820] hover:bg-[#101820] hover:text-[#F5F2EA] hover:-translate-y-0.5 transition-all"
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
                      className="btn-micro flex items-center gap-2 p-2.5 bg-[#E8E3D5] text-xs font-mono text-[#101820] hover:bg-[#101820] hover:text-[#F5F2EA] hover:-translate-y-0.5 transition-all"
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
                      className="btn-micro flex items-center gap-2 p-2.5 bg-[#E8E3D5] text-xs font-mono text-[#101820] hover:bg-[#101820] hover:text-[#F5F2EA] hover:-translate-y-0.5 transition-all"
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
                      className="btn-micro flex items-center gap-2 p-2.5 bg-[#E8E3D5] text-xs font-mono text-[#101820] hover:bg-[#101820] hover:text-[#F5F2EA] hover:-translate-y-0.5 transition-all"
                    >
                      <FacebookIcon className="w-4 h-4" />
                      <span>Facebook</span>
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Genuine Client-side Validated Contact Form */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={150}>
              <div className="bg-[#FAF8F4] border-2 border-[#D1CAC0] p-6 sm:p-8 shadow-sm hover:border-[#101820] transition-colors duration-200">
                <div className="border-b border-[#D1CAC0] pb-4 mb-6">
                  <h3 className="text-xl font-bold font-heading text-[#101820]">
                    Send a Message
                  </h3>
                  <p className="text-sm text-[#555044] mt-1">
                    Submitting this form prepares a pre-filled direct message in your email client addressed to {contact.email}.
                  </p>
                </div>

                {submitted && (
                  <div className="mb-6 p-4 bg-[#E8E3D5] border-l-4 border-[#0D5C46] text-xs font-mono text-[#101820] space-y-1">
                    <p className="font-bold flex items-center gap-1.5 text-[#0D5C46]">
                      <Check className="w-4 h-4" />
                      <span>Email client prompted!</span>
                    </p>
                    <p>
                      Your default email client has been opened. If it didn&apos;t open automatically, you can write directly to{" "}
                      <a href={`mailto:${contact.email}`} className="underline font-bold">
                        {contact.email}
                      </a>.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="senderName"
                        className="block font-mono text-xs uppercase tracking-wider text-[#555044] font-semibold mb-1.5"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="senderName"
                        name="senderName"
                        value={formState.senderName}
                        onChange={(e) =>
                          setFormState({ ...formState, senderName: e.target.value })
                        }
                        placeholder="e.g. Alex Rahman"
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F4] border-2 border-[#D1CAC0] text-[#101820] text-sm font-sans focus:border-[#101820] focus:outline-none transition-colors duration-200"
                      />
                      {errors.senderName && (
                        <p className="text-xs text-red-600 font-mono mt-1">{errors.senderName}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="senderEmail"
                        className="block font-mono text-xs uppercase tracking-wider text-[#555044] font-semibold mb-1.5"
                      >
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="senderEmail"
                        name="senderEmail"
                        value={formState.senderEmail}
                        onChange={(e) =>
                          setFormState({ ...formState, senderEmail: e.target.value })
                        }
                        placeholder="alex@example.com"
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F4] border-2 border-[#D1CAC0] text-[#101820] text-sm font-sans focus:border-[#101820] focus:outline-none transition-colors duration-200"
                      />
                      {errors.senderEmail && (
                        <p className="text-xs text-red-600 font-mono mt-1">{errors.senderEmail}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block font-mono text-xs uppercase tracking-wider text-[#555044] font-semibold mb-1.5"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={(e) =>
                        setFormState({ ...formState, subject: e.target.value })
                      }
                      placeholder="Internship opportunity / Web development project"
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F4] border-2 border-[#D1CAC0] text-[#101820] text-sm font-sans focus:border-[#101820] focus:outline-none transition-colors duration-200"
                    />
                    {errors.subject && (
                      <p className="text-xs text-red-600 font-mono mt-1">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-mono text-xs uppercase tracking-wider text-[#555044] font-semibold mb-1.5"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Write your message here..."
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F4] border-2 border-[#D1CAC0] text-[#101820] text-sm font-sans focus:border-[#101820] focus:outline-none transition-colors duration-200 resize-y"
                    />
                    {errors.message && (
                      <p className="text-xs text-red-600 font-mono mt-1">{errors.message}</p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="btn-micro inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#101820] text-[#F5F2EA] font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#0D5C46] transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>Open Email Client & Send</span>
                    </button>
                  </div>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
