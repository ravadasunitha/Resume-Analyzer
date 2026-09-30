import React from 'react';
import { Check, X, BookOpen, AlertCircle, Sparkles, TrendingUp } from 'lucide-react';
import atsGuideImg from '../assets/images/resume_ats_dashboard_1790759342478.jpg';

export const GuidelinesSection: React.FC = () => {
  return (
    <section id="benchmarks" className="py-16 lg:py-24 border-t border-slate-800/80 bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 bg-indigo-950/40 border border-indigo-800/60 px-3 py-1 rounded-full mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Recruiter & ATS Blueprint</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            How to Build an ATS-Compliant Resume
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Modern Applicant Tracking Systems (Workday, Greenhouse, Lever, Taleo) parse resumes through 
            strict hierarchical extractors. Here are the core rules to score above 85.
          </p>
        </div>

        {/* Feature Grid with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-900 group">
            <img
              src={atsGuideImg}
              alt="ATS layout inspection visual"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/70 text-xs">
              <p className="font-semibold text-white">ATS Parsing Rule #1:</p>
              <p className="text-slate-300 mt-0.5">
                Single-column linear layouts achieve a 99.4% error-free parsing rate across all enterprise ATS engines.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {/* The Google XYZ Formula Card */}
            <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-400">
                <Sparkles className="w-4 h-4" />
                <span>The Google "XYZ" Bullet Formula</span>
              </div>
              <p className="text-sm font-semibold text-white">
                "Accomplished [X], as measured by [Y], by doing [Z]"
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Rather than writing passive duties ("Responsible for backend APIs"), write measurable impact: 
                <span className="text-slate-200"> "Decreased API p99 latency by 45% (from 420ms to 230ms) by executing Redis caching and query index restructuring."</span>
              </p>
            </div>

            {/* Do's vs Don'ts Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-emerald-900/40 space-y-2">
                <p className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                  <Check className="w-4 h-4" />
                  ATS Best Practices
                </p>
                <ul className="text-xs text-slate-300 space-y-1.5">
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-400">·</span>
                    <span>Standard section titles (Experience, Education, Skills)</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-400">·</span>
                    <span>Direct contact info in body text, not embedded in header/footer</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-400">·</span>
                    <span>PDF or DOCX saved directly from text editors</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-rose-900/40 space-y-2">
                <p className="text-xs font-bold text-rose-400 flex items-center gap-1.5">
                  <X className="w-4 h-4" />
                  Common ATS Pitfalls
                </p>
                <ul className="text-xs text-slate-300 space-y-1.5">
                  <li className="flex items-start gap-1.5">
                    <span className="text-rose-400">·</span>
                    <span>Complex multi-column tables and non-standard layout grids</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-rose-400">·</span>
                    <span>Putting critical skills inside raster graphics or icon meters</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-rose-400">·</span>
                    <span>Keyword stuffing with uncontextualized lists of buzzwords</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
