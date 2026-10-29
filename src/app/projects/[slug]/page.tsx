import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Sparkles,
  Layers,
  Terminal,
} from "lucide-react";
import { projects } from "@/data/projects";
import { profileData } from "@/data/profile";
import { ProjectImageFallback } from "@/components/ui/ProjectImageFallback";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GithubIcon } from "@/components/ui/SocialIcons";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | ${profileData.name} Portfolio`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#101820] text-[#F5F2EA] pt-32 pb-24 tech-grid-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Navigation Button */}
          <div className="mb-8">
            <Link
              href="/#projects"
              className="btn-micro inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#DDD7C9] hover:text-[#D7FF64] border border-[#223447] bg-[#162330] px-4 py-2 hover:border-[#D7FF64] hover:-translate-x-0.5 transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Projects</span>
            </Link>
          </div>

          {/* Project Header */}
          <div className="space-y-4 pb-8 border-b border-[#223447]">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs text-[#D7FF64] bg-[#162330] border border-[#D7FF64]/40 px-2.5 py-0.5 uppercase tracking-widest font-semibold">
                PROJECT DETAIL // CASE STUDY
              </span>
              {project.isPlaceholder && (
                <span className="font-mono text-[11px] text-[#DDD7C9]/80 border border-[#223447] px-2 py-0.5">
                  SAMPLE SPECIFICATION
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F2EA] font-heading">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl font-mono text-[#DDD7C9]/80">
              {project.tagline}
            </p>

            {/* Quick Action Links: Live Demo & Client GitHub Repo */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-micro inline-flex items-center gap-2 px-5 py-2.5 bg-[#D7FF64] text-[#101820] font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#C5F348] hover:-translate-y-0.5 transition-all duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Project Demo</span>
                </a>
              )}
              {project.clientRepoUrl && (
                <a
                  href={project.clientRepoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-micro inline-flex items-center gap-2 px-5 py-2.5 border-2 border-[#223447] bg-[#162330] hover:border-[#D7FF64] text-[#F5F2EA] hover:text-[#D7FF64] font-mono text-xs uppercase tracking-wider hover:-translate-y-0.5 transition-all duration-200"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Client-Side Repository (GitHub)</span>
                </a>
              )}
            </div>
          </div>

          {/* Project Preview Image / Screenshot Frame */}
          <div className="my-10 relative aspect-[16/9] w-full border-2 border-[#223447] overflow-hidden shadow-2xl group">
            <ProjectImageFallback
              src={project.previewImage}
              alt={`${project.title} detailed screenshot`}
              title={project.title}
              priority
            />
          </div>

          {/* Content Layout */}
          <div className="space-y-12">
            {/* 1. Technology Stack Used */}
            <div className="bg-[#131E2A] border-2 border-[#223447] p-6 sm:p-8 hover:border-[#D7FF64]/40 transition-colors duration-300">
              <div className="flex items-center gap-2 pb-4 mb-4 border-b border-[#223447]">
                <Layers className="w-5 h-5 text-[#D7FF64]" />
                <h2 className="text-xl font-bold font-heading text-[#F5F2EA]">
                  Main Technology Stack Used
                </h2>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-3 py-1.5 bg-[#162330] border border-[#223447] text-[#D7FF64] font-semibold hover:border-[#D7FF64] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 2. Overview & Brief Description */}
            <div className="bg-[#131E2A] border-2 border-[#223447] p-6 sm:p-8 hover:border-[#D7FF64]/40 transition-colors duration-300">
              <div className="flex items-center gap-2 pb-4 mb-4 border-b border-[#223447]">
                <Terminal className="w-5 h-5 text-[#D7FF64]" />
                <h2 className="text-xl font-bold font-heading text-[#F5F2EA]">
                  Project Overview & Architecture
                </h2>
              </div>
              <p className="text-base text-[#DDD7C9] leading-relaxed mb-6">
                {project.overview}
              </p>

              <h3 className="font-mono text-xs uppercase tracking-wider text-[#D7FF64] font-bold mb-3">
                Key Features & Capabilities:
              </h3>
              <ul className="space-y-2.5 font-mono text-xs text-[#DDD7C9]">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Development Challenges Faced & Solutions */}
            <div className="bg-[#131E2A] border-2 border-[#223447] p-6 sm:p-8 hover:border-[#D7FF64]/40 transition-colors duration-300">
              <div className="flex items-center gap-2 pb-4 mb-4 border-b border-[#223447]">
                <AlertTriangle className="w-5 h-5 text-[#D7FF64]" />
                <h2 className="text-xl font-bold font-heading text-[#F5F2EA]">
                  Development Challenges & Solutions
                </h2>
              </div>
              <div className="space-y-6">
                {project.challenges.map((c, idx) => (
                  <div
                    key={idx}
                    className="bg-[#162330] border border-[#223447] p-5 space-y-3 hover:border-[#223447]/90 transition-colors"
                  >
                    <div>
                      <span className="font-mono text-[11px] text-amber-400 font-bold uppercase tracking-wider block mb-1">
                        Challenge #{idx + 1}
                      </span>
                      <p className="text-sm font-semibold text-[#F5F2EA]">
                        {c.challenge}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-[#223447]/80">
                      <span className="font-mono text-[11px] text-[#10B981] font-bold uppercase tracking-wider block mb-1">
                        Engineering Solution
                      </span>
                      <p className="text-sm text-[#DDD7C9]/90 leading-relaxed font-mono text-xs">
                        {c.solution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Potential Improvements and Future Plans */}
            <div className="bg-[#131E2A] border-2 border-[#223447] p-6 sm:p-8 hover:border-[#D7FF64]/40 transition-colors duration-300">
              <div className="flex items-center gap-2 pb-4 mb-4 border-b border-[#223447]">
                <Lightbulb className="w-5 h-5 text-[#D7FF64]" />
                <h2 className="text-xl font-bold font-heading text-[#F5F2EA]">
                  Potential Improvements & Future Plans
                </h2>
              </div>
              <ul className="space-y-3 font-mono text-xs text-[#DDD7C9]">
                {project.futureImprovements.map((imp, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-[#D7FF64] shrink-0 mt-0.5" />
                    <span>{imp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Navigation */}
            <div className="pt-8 border-t border-[#223447] flex items-center justify-between">
              <Link
                href="/#projects"
                className="btn-micro inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#DDD7C9] hover:text-[#D7FF64] hover:-translate-x-0.5 transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Projects List</span>
              </Link>

              <a
                href="#top"
                className="font-mono text-xs uppercase tracking-wider text-[#D7FF64] hover:underline"
              >
                Top of Page ↑
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
