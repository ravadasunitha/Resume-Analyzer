import React from 'react';
import { FileText, ExternalLink, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12 px-4 lg:px-8 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
              <FileText className="w-3.5 h-3.5" />
            </span>
            <span className="font-bold text-white text-sm">Resume Analyzer</span>
          </div>
          <p className="text-slate-400 max-w-md">
            Automated resume parsing, keyword matching, and candidate intake engine connected 
            to the live n8n cloud workflow.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-slate-400">
          <a href="#analyzer" className="hover:text-white transition-colors">
            Analyzer
          </a>
          <a href="#workflow" className="hover:text-white transition-colors">
            n8n Automation
          </a>
          <a href="#benchmarks" className="hover:text-white transition-colors">
            ATS Benchmarks
          </a>
          <a
            href="https://ravadasunitha.app.n8n.cloud/form/8f6d0468-7958-4bdf-8f97-47741d5b3be5"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-400 transition-colors flex items-center gap-1 font-mono text-[11px]"
          >
            <span>ravadasunitha.app.n8n.cloud</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
        <p>© {new Date().getFullYear()} Resume Analyzer. Built for n8n Cloud Automation.</p>
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Encrypted Webhook Transmission · ISO-aligned ATS Parsing</span>
        </div>
      </div>
    </footer>
  );
};
