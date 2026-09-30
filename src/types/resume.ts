export interface ResumeSubmission {
  id: string;
  name: string;
  email: string;
  fileName: string;
  fileSize: number;
  targetRole: string;
  timestamp: string;
  status: 'submitted' | 'processing' | 'verified';
  n8nStatus: number;
  atsScore: number;
}

export interface AtsAuditResult {
  overallScore: number;
  roleMatchScore: number;
  impactScore: number;
  formattingScore: number;
  skillsScore: number;
  keyStrengths: string[];
  criticalIssues: string[];
  missingKeywords: string[];
  matchedKeywords: string[];
  metricsSummary: {
    actionVerbCount: number;
    quantifiedMetricsCount: number;
    wordCount: number;
    readingTimeMinutes: number;
  };
}

export interface SampleResume {
  id: string;
  title: string;
  applicantName: string;
  applicantEmail: string;
  role: string;
  fileName: string;
  content: string;
  highlight: string;
}
