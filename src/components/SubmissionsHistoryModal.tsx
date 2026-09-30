import React from 'react';
import { X, Trash2, CheckCircle2, FileText, Calendar, ExternalLink, Download } from 'lucide-react';
import { ResumeSubmission } from '../types/resume';

interface SubmissionsHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  submissions: ResumeSubmission[];
  onClearHistory: () => void;
}

export const SubmissionsHistoryModal: React.FC<SubmissionsHistoryModalProps> = ({
  isOpen,
  onClose,
  submissions,
  onClearHistory,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-indigo-400" />
              Submission History & Receipts
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Resumes transmitted to the n8n Resume Analyzer webhook
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-3 flex-1">
          {submissions.length === 0 ? (
            <div className="text-center py-12 text-slate-500 text-xs">
              No submissions recorded in this session.
            </div>
          ) : (
            submissions.map(sub => (
              <div
                key={sub.id}
                className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">{sub.name}</span>
                    <span className="text-xs text-slate-400">({sub.targetRole})</span>
                  </div>
                  <p className="text-xs text-slate-400 flex items-center gap-2">
                    <span>{sub.email}</span>
                    <span>·</span>
                    <span className="text-indigo-400 font-mono truncate max-w-xs">{sub.fileName}</span>
                  </p>
                  <p className="text-[11px] text-slate-500 flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(sub.timestamp).toLocaleString()}</span>
                  </p>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white tabular-nums px-2 py-0.5 rounded bg-slate-800 border border-slate-700">
                      ATS: {sub.atsScore}/100
                    </span>
                    <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      n8n: {sub.n8nStatus}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-800 flex items-center justify-between bg-slate-950/50">
          {submissions.length > 0 ? (
            <button
              onClick={onClearHistory}
              className="text-xs font-medium text-rose-400 hover:text-rose-300 flex items-center gap-1.5 cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Clear All Records
            </button>
          ) : (
            <span className="text-xs text-slate-500">History empty</span>
          )}

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
