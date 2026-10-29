import { Compass, Code2, Sparkles, Cpu } from "lucide-react";
import { profileData } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function AboutSection() {
  const { about } = profileData;

  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-[#F5F2EA] text-[#101820] border-b border-[#D1CAC0] relative tech-grid-light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            title="About Me"
            description="A look into my academic journey, passion for software engineering, and the technical principles guiding my work."
            theme="light"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Narrative Columns */}
          <div className="lg:col-span-8 space-y-8">
            {/* Programming Journey Card */}
            <ScrollReveal delay={100}>
              <div className="bg-[#FAF8F4] border-2 border-[#D1CAC0] p-6 sm:p-8 shadow-sm hover:border-[#101820] transition-colors duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 bg-[#E8E3D5] border border-[#D1CAC0] flex items-center justify-center text-[#0D5C46]">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#101820]">
                    The Programming Journey
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-[#33302A] leading-relaxed">
                  {about.journey}
                </p>
              </div>
            </ScrollReveal>

            {/* Focus & Problems I Enjoy */}
            <ScrollReveal delay={200}>
              <div className="bg-[#FAF8F4] border-2 border-[#D1CAC0] p-6 sm:p-8 shadow-sm hover:border-[#101820] transition-colors duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 bg-[#E8E3D5] border border-[#D1CAC0] flex items-center justify-center text-[#0D5C46]">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#101820]">
                    Engineering Interests & Focus
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-[#33302A] leading-relaxed">
                  {about.focus}
                </p>
              </div>
            </ScrollReveal>

            {/* Personality, Learning & Hobbies */}
            <ScrollReveal delay={300}>
              <div className="bg-[#FAF8F4] border-2 border-[#D1CAC0] p-6 sm:p-8 shadow-sm hover:border-[#101820] transition-colors duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 bg-[#E8E3D5] border border-[#D1CAC0] flex items-center justify-center text-[#0D5C46]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#101820]">
                    Approach & Interests Outside Code
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-[#33302A] leading-relaxed">
                  {about.personalityAndHobbies}
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Quick Technical Fact Sheet (Sidebar) */}
          <div className="lg:col-span-4 space-y-6">
            <ScrollReveal delay={150}>
              <div className="bg-[#101820] text-[#F5F2EA] border-2 border-[#223447] p-6 sm:p-7 shadow-lg hover:border-[#D7FF64]/40 transition-colors duration-300">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#223447]">
                  <Cpu className="w-4 h-4 text-[#D7FF64]" />
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D7FF64]">
                    STUDENT PROFILE SNAPSHOT
                  </span>
                </div>

                <dl className="space-y-4 font-mono text-xs">
                  <div>
                    <dt className="text-[#DDD7C9]/60 uppercase tracking-wider">Status</dt>
                    <dd className="font-semibold text-sm text-[#F5F2EA] mt-0.5">
                      Undergraduate Student (CSE)
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[#DDD7C9]/60 uppercase tracking-wider">Location</dt>
                    <dd className="font-semibold text-sm text-[#F5F2EA] mt-0.5">
                      Dhaka, Bangladesh
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[#DDD7C9]/60 uppercase tracking-wider">Primary Stack</dt>
                    <dd className="font-semibold text-sm text-[#D7FF64] mt-0.5">
                      Next.js • React • Java • Spring Boot
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[#DDD7C9]/60 uppercase tracking-wider">Foundational Languages</dt>
                    <dd className="font-semibold text-sm text-[#F5F2EA] mt-0.5">
                      C, C++, Java, JavaScript
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[#DDD7C9]/60 uppercase tracking-wider">Collaboration</dt>
                    <dd className="font-semibold text-sm text-[#10B981] mt-0.5">
                      Open to Internships & Projects
                    </dd>
                  </div>
                </dl>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
