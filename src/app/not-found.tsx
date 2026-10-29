import Link from "next/link";
import { ArrowLeft, FileQuestion, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#101820] text-[#F5F2EA] flex flex-col items-center justify-center p-6 tech-grid-dark selection:bg-[#D7FF64] selection:text-[#101820]">
      <div className="w-full max-w-lg bg-[#131E2A] border-2 border-[#223447] p-8 sm:p-10 text-center shadow-2xl relative">
        <div className="w-16 h-16 rounded-none bg-[#162330] border-2 border-[#D7FF64]/40 text-[#D7FF64] flex items-center justify-center mx-auto mb-6 shadow-inner">
          <FileQuestion className="w-8 h-8" />
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#101820] border border-[#223447] font-mono text-xs text-[#D7FF64] uppercase tracking-widest mb-4">
          <Terminal className="w-3.5 h-3.5 text-[#D7FF64]" />
          <span>HTTP 404 // RESOURCE UNRESOLVED</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-[#F5F2EA] mb-3">
          Page or Project Not Found
        </h1>

        <p className="text-sm font-mono text-[#DDD7C9]/80 leading-relaxed mb-8">
          The requested route, slug, or document does not exist in this portfolio index. Please verify the URL or return to the main dashboard.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D7FF64] text-[#101820] font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#C5F348] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#223447] bg-[#162330] text-[#F5F2EA] font-mono text-xs uppercase tracking-wider hover:border-[#D7FF64] hover:text-[#D7FF64] transition-colors"
          >
            <span>View All Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
