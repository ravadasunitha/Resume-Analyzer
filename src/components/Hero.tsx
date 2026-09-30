import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import heroImg from '../assets/images/hero_resume_analyzer_1790759330535.jpg';

interface HeroProps {
  onStartAnalyzing: () => void;
  onExploreWorkflow: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartAnalyzing, onExploreWorkflow }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-800/80">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-96 bg-indigo-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Proposition and Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Connected to live n8n cloud webhook</span>
              <span className="text-slate-500">·</span>
              <span className="text-indigo-400">v2026 Engine</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] text-balance">
              Transform Your Resume into Interviews with Automated Intelligence.
            </h1>

            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
              Upload your resume for real-time ATS keyword matching, impact metrics scoring, 
              and direct ingestion into the automated <strong className="text-white font-medium">n8n Resume Analyzer</strong> workflow pipeline.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onStartAnalyzing}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:scale-[0.99] rounded-xl shadow-lg shadow-indigo-600/25 transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Upload & Analyze Resume</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onExploreWorkflow}
                className="px-5 py-3.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Explore n8n Pipeline</span>
              </button>
            </div>

            {/* Proof indicators */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-xs text-slate-400">
              <div>
                <p className="text-lg lg:text-xl font-bold text-white tabular-nums">98%</p>
                <p className="mt-0.5">ATS Parser Accuracy</p>
              </div>
              <div>
                <p className="text-lg lg:text-xl font-bold text-white tabular-nums">&lt; 2s</p>
                <p className="mt-0.5">n8n Ingestion Latency</p>
              </div>
              <div>
                <p className="text-lg lg:text-xl font-bold text-white tabular-nums">100%</p>
                <p className="mt-0.5">Strict Cloud Privacy</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Anchor */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900/60 group">
              <img
                src={heroImg}
                alt="Executive desk featuring document analytics dashboard"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/70 text-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Automated Ingestion Ready
                  </span>
                  <span className="text-slate-400 font-mono text-[11px]">POST /form/8f6d0468...</span>
                </div>
                <p className="text-slate-300">
                  Ready to stream Name, Email, and Resume Binary directly to n8n Cloud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
