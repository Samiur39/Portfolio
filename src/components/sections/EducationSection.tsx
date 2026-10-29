import { GraduationCap, Calendar, Award, BookCheck, Briefcase } from "lucide-react";
import { profileData } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function EducationSection() {
  const { education, experience } = profileData;

  return (
    <section
      id="education"
      className="py-24 sm:py-32 bg-[#F5F2EA] text-[#101820] border-b border-[#D1CAC0] relative tech-grid-light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            title="Education & Experience"
            description="Formal academic qualifications in Computer Science & Engineering and professional journey status."
            theme="light"
          />
        </ScrollReveal>

        <div className="space-y-12">
          {/* Education Timeline Cards */}
          <div className="space-y-6">
            <ScrollReveal delay={50}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#0D5C46] font-bold flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#0D5C46]" />
                <span>EDUCATIONAL QUALIFICATIONS</span>
              </h3>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {education.map((edu, idx) => (
                <ScrollReveal key={edu.id} delay={idx * 120 + 100}>
                  <div className="bg-[#FAF8F4] border-2 border-[#D1CAC0] p-6 sm:p-8 flex flex-col justify-between shadow-sm relative group hover:border-[#101820] hover:shadow-md transition-all duration-300 h-full">
                    <div>
                      {/* Period & Status Badge */}
                      <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-[#D1CAC0]">
                        <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[#555044]">
                          <Calendar className="w-3.5 h-3.5 text-[#0D5C46]" />
                          <span>{edu.period}</span>
                        </span>
                        <span className="font-mono text-[11px] px-2.5 py-0.5 bg-[#E8E3D5] text-[#101820] font-semibold uppercase tracking-wider group-hover:bg-[#101820] group-hover:text-[#F5F2EA] transition-colors duration-200">
                          {edu.status}
                        </span>
                      </div>

                      <h4 className="text-xl font-bold font-heading text-[#101820] leading-snug">
                        {edu.degree}
                      </h4>
                      <p className="font-mono text-sm font-semibold text-[#0D5C46] mt-1">
                        {edu.department}
                      </p>
                      <p className="text-sm text-[#555044] font-medium mt-1">
                        {edu.institution}
                      </p>

                      {edu.highlights && edu.highlights.length > 0 && (
                        <div className="mt-5 pt-4 border-t border-[#D1CAC0]/70 space-y-2">
                          <span className="font-mono text-[11px] uppercase tracking-wider text-[#555044] font-semibold block">
                            Academic Highlights & Coursework:
                          </span>
                          <ul className="space-y-1.5 font-mono text-xs text-[#33302A]">
                            {edu.highlights.map((h, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <BookCheck className="w-3.5 h-3.5 text-[#0D5C46] shrink-0 mt-0.5" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {!edu.isVerified && (
                      <div className="mt-6 pt-3 border-t border-[#D1CAC0]/60 font-mono text-[10px] text-[#555044]/80 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-[#0D5C46]" />
                        <span>Placeholder entry • Update with your verified institution in profile.ts</span>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Professional Experience Section */}
          <div className="pt-6 border-t border-[#D1CAC0]">
            <ScrollReveal delay={150}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#0D5C46] font-bold flex items-center gap-2 mb-6">
                <Briefcase className="w-4 h-4 text-[#0D5C46]" />
                <span>PROFESSIONAL EXPERIENCE</span>
              </h3>
            </ScrollReveal>

            {experience.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {experience.map((exp) => (
                  <ScrollReveal key={exp.id}>
                    <div className="bg-[#FAF8F4] border-2 border-[#D1CAC0] p-6 shadow-sm hover:border-[#101820] transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-lg text-[#101820]">{exp.role}</h4>
                        <span className="font-mono text-xs text-[#555044]">{exp.period}</span>
                      </div>
                      <p className="font-mono text-xs text-[#0D5C46] font-semibold mb-4">
                        {exp.company} {exp.location ? `• ${exp.location}` : ""}
                      </p>
                      <ul className="space-y-1 text-sm text-[#33302A]">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="list-disc ml-4">{desc}</li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            ) : (
              <ScrollReveal delay={200}>
                <div className="bg-[#FAF8F4] border-2 border-dashed border-[#D1CAC0] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:border-[#0D5C46]/60 transition-colors duration-200">
                  <div className="space-y-1">
                    <h4 className="font-bold text-base text-[#101820] font-heading">
                      Undergraduate Student & Aspiring Software Engineer
                    </h4>
                    <p className="text-sm text-[#555044] max-w-xl">
                      I am actively seeking software engineering internships, frontend/backend junior roles, and open-source project opportunities. To avoid fabricating work history, professional experience entries will appear here once officially verified.
                    </p>
                  </div>
                  <a
                    href="#contact"
                    className="btn-micro inline-flex items-center gap-2 px-5 py-2.5 font-mono text-xs uppercase tracking-wider bg-[#101820] text-[#F5F2EA] hover:bg-[#0D5C46] font-semibold transition-colors shrink-0"
                  >
                    <span>Discuss Opportunities</span>
                  </a>
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
