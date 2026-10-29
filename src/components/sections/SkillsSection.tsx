import { Layers, Terminal, Globe, Server, Wrench, CheckCircle2 } from "lucide-react";
import { skillCategories } from "@/data/skills";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const categoryIcons: Record<string, React.ReactNode> = {
  languages: <Terminal className="w-5 h-5 text-[#D7FF64]" />,
  frontend: <Globe className="w-5 h-5 text-[#D7FF64]" />,
  backend: <Server className="w-5 h-5 text-[#D7FF64]" />,
  tools: <Wrench className="w-5 h-5 text-[#D7FF64]" />,
};

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-24 sm:py-32 bg-[#101820] text-[#F5F2EA] border-b border-[#223447] relative tech-grid-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            title="Technical Skills"
            description="A graphical breakdown of technologies and foundational languages I work with, categorized by engineering domain."
            theme="dark"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => (
            <ScrollReveal key={category.id} delay={catIdx * 100}>
              <div className="bg-[#131E2A] border-2 border-[#223447] p-6 sm:p-8 flex flex-col justify-between hover:border-[#D7FF64]/60 transition-all duration-300 group shadow-md hover:shadow-lg h-full">
                <div>
                  {/* Header with Icon & Category Badge */}
                  <div className="flex items-center justify-between pb-5 mb-6 border-b border-[#223447]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#162330] border border-[#223447] flex items-center justify-center group-hover:border-[#D7FF64]/50 transition-colors">
                        {categoryIcons[category.id] || <Layers className="w-5 h-5 text-[#D7FF64]" />}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-heading text-[#F5F2EA] group-hover:text-[#D7FF64] transition-colors">
                          {category.title}
                        </h3>
                        <span className="font-mono text-xs text-[#DDD7C9]/60">
                          {category.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Graphical Skill Tiles with Descriptive Context and Micro-hover */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="skill-tile bg-[#162330] border border-[#223447] p-3.5 hover:border-[#D7FF64] hover:bg-[#1A2837] group/tile cursor-default transition-all duration-200"
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D7FF64] shrink-0 group-hover/tile:scale-110 transition-transform duration-200" />
                          <span className="font-mono text-sm font-bold text-[#F5F2EA] group-hover/tile:text-[#D7FF64] transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        {skill.context && (
                          <p className="font-mono text-[11px] text-[#DDD7C9]/70 leading-normal pl-5">
                            {skill.context}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Subtle Domain Tag with Ambient Restrained Indicator */}
                <div className="pt-6 mt-6 border-t border-[#223447]/60 flex items-center justify-between font-mono text-[11px] text-[#DDD7C9]/50">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                    <span>VERIFIED TECH STACK</span>
                  </div>
                  <span className="text-[#D7FF64]">
                    {category.skills.length} TECHNOLOGIES
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
