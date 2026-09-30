import React from 'react';
import { FileText, History, ExternalLink, Zap } from 'lucide-react';

interface NavbarProps {
  onOpenHistory: () => void;
  historyCount: number;
  onScrollToAnalyzer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenHistory,
  historyCount,
  onScrollToAnalyzer,
}) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/85 border-b border-slate-800/80 px-4 lg:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="text-lg lg:text-xl font-bold tracking-tight text-white hover:text-indigo-300 transition-colors flex items-center gap-2"
        >
          <span className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
            <FileText className="w-4 h-4" />
          </span>
          Resume Analyzer
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#analyzer" className="hover:text-white transition-colors">
            Analyzer
          </a>
          <a href="#workflow" className="hover:text-white transition-colors">
            n8n Automation
          </a>
          <a href="#benchmarks" className="hover:text-white transition-colors">
            ATS Benchmarks
          </a>
          <a href="#templates" className="hover:text-white transition-colors">
            Sample Resumes
          </a>
          <a 
            href="https://ravadasunitha.app.n8n.cloud/form/8f6d0468-7958-4bdf-8f97-47741d5b3be5" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-indigo-300 transition-colors flex items-center gap-1"
          >
            Direct n8n Form
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          {historyCount > 0 && (
            <button
              onClick={onOpenHistory}
              className="px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap"
              title="View past submissions"
            >
              <History className="w-3.5 h-3.5 text-indigo-400" />
              <span className="tabular-nums font-mono">{historyCount}</span>
              <span className="hidden sm:inline">Saved</span>
            </button>
          )}

          <button
            onClick={onScrollToAnalyzer}
            className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm hover:shadow-indigo-500/20 transition-all flex items-center gap-1.5 whitespace-nowrap"
          >
            <Zap className="w-3.5 h-3.5" />
            Analyze Resume
          </button>
        </div>
      </div>
    </header>
  );
};
