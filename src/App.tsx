import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ResumeAnalyzer } from './components/ResumeAnalyzer';
import { WorkflowSection } from './components/WorkflowSection';
import { GuidelinesSection } from './components/GuidelinesSection';
import { SubmissionsHistoryModal } from './components/SubmissionsHistoryModal';
import { Footer } from './components/Footer';
import { ResumeSubmission } from './types/resume';

export default function App() {
  const [submissions, setSubmissions] = useState<ResumeSubmission[]>(() => {
    try {
      const stored = localStorage.getItem('n8n_resume_submissions');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('n8n_resume_submissions', JSON.stringify(submissions));
    } catch (e) {
      console.error('Failed to save submissions to localStorage', e);
    }
  }, [submissions]);

  const handleSubmissionComplete = (newSubmission: ResumeSubmission) => {
    setSubmissions(prev => [newSubmission, ...prev]);
  };

  const handleClearHistory = () => {
    setSubmissions([]);
    try {
      localStorage.removeItem('n8n_resume_submissions');
    } catch {}
  };

  const scrollToAnalyzer = () => {
    document.getElementById('analyzer')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWorkflow = () => {
    document.getElementById('workflow')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-600/30 selection:text-indigo-200">
      <Navbar
        onOpenHistory={() => setIsHistoryModalOpen(true)}
        historyCount={submissions.length}
        onScrollToAnalyzer={scrollToAnalyzer}
      />

      <main className="flex-1">
        <Hero
          onStartAnalyzing={scrollToAnalyzer}
          onExploreWorkflow={scrollToWorkflow}
        />

        <ResumeAnalyzer
          onSubmissionComplete={handleSubmissionComplete}
        />

        <WorkflowSection />

        <GuidelinesSection />
      </main>

      <Footer />

      <SubmissionsHistoryModal
        isOpen={isHistoryModalOpen}
        onClose={() => setIsHistoryModalOpen(false)}
        submissions={submissions}
        onClearHistory={handleClearHistory}
      />
    </div>
  );
}
