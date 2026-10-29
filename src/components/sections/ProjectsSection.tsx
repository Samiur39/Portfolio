import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectImageFallback } from "@/components/ui/ProjectImageFallback";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 sm:py-32 bg-[#101820] text-[#F5F2EA] border-b border-[#223447] relative tech-grid-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            title="Featured Projects"
            description="A selection of software and web development projects demonstrating component architecture, frontend skills, and full-stack integration."
            theme="dark"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 120}>
              <article
                className="card-lift bg-[#131E2A] border-2 border-[#223447] flex flex-col justify-between group hover:border-[#D7FF64]/80 transition-all duration-300 shadow-lg relative h-full"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full border-b-2 border-[#223447] overflow-hidden">
                    <ProjectImageFallback
                      src={project.previewImage}
                      alt={`${project.title} Preview Screenshot`}
                      title={project.title}
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] px-2 py-0.5 bg-[#162330] border border-[#223447] text-[#DDD7C9] group-hover:border-[#D7FF64]/40 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="font-mono text-[10px] px-1.5 py-0.5 text-[#DDD7C9]/50">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold font-heading text-[#F5F2EA] group-hover:text-[#D7FF64] transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="mt-2.5 text-sm text-[#DDD7C9]/80 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#223447]/60 mt-4">
                  <div className="flex items-center justify-between pt-4">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="btn-micro inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#101820] bg-[#D7FF64] hover:bg-[#C5F348] font-bold px-3.5 py-2 transition-colors active:scale-95"
                    >
                      <span>View Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </Link>

                    <div className="flex items-center gap-2">
                      {project.clientRepoUrl && (
                        <a
                          href={project.clientRepoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-micro p-2 border border-[#223447] hover:border-[#D7FF64] text-[#DDD7C9] hover:text-[#D7FF64] hover:-translate-y-0.5 transition-all"
                          aria-label={`GitHub repository for ${project.title}`}
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-micro p-2 border border-[#223447] hover:border-[#D7FF64] text-[#DDD7C9] hover:text-[#D7FF64] hover:-translate-y-0.5 transition-all"
                          aria-label={`Live demo for ${project.title}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
