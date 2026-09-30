import React from 'react';
import { Network, Database, Cpu, Mail, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import workflowImg from '../assets/images/workflow_automation_concept_1790759353873.jpg';

export const WorkflowSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Cloud Form Ingestion',
      subtitle: 'Webhook Trigger Node',
      description: 'Incoming candidate data and resume binaries are received instantly through the authenticated n8n form trigger endpoint.',
      icon: Network,
      endpoint: 'ravadasunitha.app.n8n.cloud'
    },
    {
      num: '02',
      title: 'Document Binary Parsing',
      subtitle: 'Data Extraction Node',
      description: 'PDF and DOCX attachments are decoded into structured text chunks with extraction of work experience, skills, and certifications.',
      icon: Database,
      endpoint: 'n8n Binary Buffer Stream'
    },
    {
      num: '03',
      title: 'Intelligent Evaluation',
      subtitle: 'LLM Reasoning Node',
      description: 'The extracted text is evaluated against industry job benchmarks, measuring bullet impact, quantitative data, and keyword relevance.',
      icon: Cpu,
      endpoint: 'AI Scoring Engine'
    },
    {
      num: '04',
      title: 'Feedback & Notification',
      subtitle: 'Dispatch & Recording Node',
      description: 'The candidate profile and parsed findings are finalized, returning real-time status 200 and dispatching analytical feedback.',
      icon: Mail,
      endpoint: 'Automated Response Router'
    }
  ];

  return (
    <section id="workflow" className="py-16 lg:py-24 border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Asset and Specs */}
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
              <img
                src={workflowImg}
                alt="Automated n8n workflow pipeline visual"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/70">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    n8n Cloud Workflow Active
                  </span>
                  <span className="font-mono text-[11px] text-indigo-400">status: 200</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1 font-mono truncate">
                  Target: https://ravadasunitha.app.n8n.cloud/form/8f6d...
                </p>
              </div>
            </div>

            {/* Workflow Spec Indicators */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Author / Workspace:</span>
                <span className="font-semibold text-white">ravadasunitha</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Form ID:</span>
                <span className="font-mono text-[11px] text-indigo-300">8f6d0468-7958-4bdf-8f97-47741d5b3be5</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Accepts Files:</span>
                <span className="text-emerald-400 font-medium">Yes (.pdf, .docx, multiple)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Execution Mode:</span>
                <span className="text-slate-200">Asynchronous Webhook Trigger</span>
              </div>
            </div>
          </div>

          {/* Right Column: Pipeline Architecture */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 bg-indigo-950/40 border border-indigo-800/60 px-3 py-1 rounded-full mb-3">
                <Network className="w-3.5 h-3.5" />
                <span>Under The Hood</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                How n8n Powers End-to-End Resume Intelligence
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
                Rather than manual spreadsheet logging or error-prone resume inbox sorting, 
                this workflow standardizes candidate intake through a resilient automated pipeline.
              </p>
            </div>

            <div className="space-y-4">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 transition-colors flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-indigo-950/70 border border-indigo-800/60 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1 space-y-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="text-sm font-bold text-white flex items-center gap-2">
                          <span className="text-xs font-mono text-indigo-400">{step.num}.</span>
                          {step.title}
                        </h4>
                        <span className="text-[11px] font-mono text-slate-500">
                          {step.endpoint}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
