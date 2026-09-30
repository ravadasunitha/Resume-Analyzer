import React from 'react';
import { CheckCircle2, AlertTriangle, ArrowUpRight, BarChart2, ShieldCheck, Target, Sparkles } from 'lucide-react';
import { AtsAuditResult } from '../types/resume';

interface AtsScoreCardProps {
  audit: AtsAuditResult;
  targetRoleTitle: string;
  applicantName: string;
}

export const AtsScoreCard: React.FC<AtsScoreCardProps> = ({
  audit,
  targetRoleTitle,
  applicantName,
}) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-emerald-400 border-emerald-500/30 bg-emerald-950/20';
    if (score >= 60) return 'text-amber-400 border-amber-500/30 bg-amber-950/20';
    return 'text-rose-400 border-rose-500/30 bg-rose-950/20';
  };

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-8">
      {/* Header with Overall Score */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
            <span>ATS Diagnostic Audit</span>
            <span aria-hidden="true">·</span>
            <span>Target: {targetRoleTitle}</span>
          </div>
          <h3 className="text-xl font-bold text-white">
            Resume Compatibility Score
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Calculated against real recruitment parsing standards and recruiter keyword benchmarks.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className={`px-5 py-3 rounded-xl border flex flex-col items-center justify-center ${getScoreColor(audit.overallScore)}`}>
            <span className="text-3xl font-extrabold tabular-nums tracking-tight">
              {audit.overallScore}
            </span>
            <span className="text-[11px] font-medium tracking-wide uppercase mt-0.5 opacity-80">
              ATS Score / 100
            </span>
          </div>
        </div>
      </div>

      {/* Sub-Score Metrics Matrix */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
          <p className="text-xs text-slate-400 font-medium">Role Keywords</p>
          <p className="text-2xl font-bold text-white mt-1 tabular-nums">
            {audit.roleMatchScore}%
          </p>
          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
            <div 
              className="bg-indigo-500 h-full rounded-full transition-all duration-500" 
              style={{ width: `${audit.roleMatchScore}%` }} 
            />
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
          <p className="text-xs text-slate-400 font-medium">Quantified Impact</p>
          <p className="text-2xl font-bold text-white mt-1 tabular-nums">
            {audit.impactScore}%
          </p>
          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
            <div 
              className="bg-indigo-500 h-full rounded-full transition-all duration-500" 
              style={{ width: `${audit.impactScore}%` }} 
            />
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
          <p className="text-xs text-slate-400 font-medium">Layout Hygiene</p>
          <p className="text-2xl font-bold text-white mt-1 tabular-nums">
            {audit.formattingScore}%
          </p>
          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
            <div 
              className="bg-indigo-500 h-full rounded-full transition-all duration-500" 
              style={{ width: `${audit.formattingScore}%` }} 
            />
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
          <p className="text-xs text-slate-400 font-medium">Action Velocity</p>
          <p className="text-2xl font-bold text-white mt-1 tabular-nums">
            {audit.metricsSummary.actionVerbCount} <span className="text-xs font-normal text-slate-400">verbs</span>
          </p>
          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
            <div 
              className="bg-emerald-500 h-full rounded-full transition-all duration-500" 
              style={{ width: `${Math.min(100, audit.metricsSummary.actionVerbCount * 12)}%` }} 
            />
          </div>
        </div>
      </div>

      {/* Keywords Breakdown */}
      <div className="space-y-4">
        <h4 className="text-sm font-semibold text-white flex items-center gap-2">
          <Target className="w-4 h-4 text-indigo-400" />
          Role Keyword Match Analysis ({targetRoleTitle})
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Matched Keywords */}
          <div className="p-4 rounded-xl bg-slate-950/40 border border-emerald-900/30">
            <p className="text-xs font-semibold text-emerald-400 mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Keywords Detected ({audit.matchedKeywords.length})
            </p>
            {audit.matchedKeywords.length > 0 ? (
              <div className="flex flex-wrap gap-1.5">
                {audit.matchedKeywords.map((kw, idx) => (
                  <span 
                    key={idx}
                    className="text-xs font-medium px-2.5 py-1 rounded bg-emerald-950/40 border border-emerald-800/50 text-emerald-300"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-400 italic">No targeted keywords matched yet.</p>
            )}
          </div>

          {/* Missing Keywords */}
          <div className="p-4 rounded-xl bg-slate-950/40 border border-amber-900/30">
            <p className="text-xs font-semibold text-amber-400 mb-3 flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5" />
              High-Value Missing Keywords ({audit.missingKeywords.length})
            </p>
            {audit.missingKeywords.length > 0 ? (
              <div className="flex flex-wrap gap-1.5">
                {audit.missingKeywords.map((kw, idx) => (
                  <span 
                    key={idx}
                    className="text-xs font-medium px-2.5 py-1 rounded bg-amber-950/40 border border-amber-800/50 text-amber-300"
                  >
                    + {kw}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-xs text-emerald-400">All targeted role keywords detected!</p>
            )}
          </div>
        </div>
      </div>

      {/* Actionable Feedback */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
        <div className="space-y-3">
          <h5 className="text-xs uppercase tracking-wider font-semibold text-slate-400">
            Verified Strengths
          </h5>
          <ul className="space-y-2">
            {audit.keyStrengths.map((str, idx) => (
              <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{str}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h5 className="text-xs uppercase tracking-wider font-semibold text-slate-400">
            Recommended Improvements
          </h5>
          <ul className="space-y-2">
            {audit.criticalIssues.map((issue, idx) => (
              <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{issue}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
