import { AtsAuditResult } from '../types/resume';
import { TARGET_ROLES } from '../data/sampleResumes';

const STRONG_ACTION_VERBS = [
  'accelerated', 'achieved', 'administered', 'analyzed', 'architected', 'automated',
  'budgeted', 'built', 'centralized', 'championed', 'coached', 'consolidated',
  'decreased', 'delivered', 'deployed', 'designed', 'developed', 'directed',
  'engineered', 'enhanced', 'established', 'executed', 'expanded', 'expedited',
  'formulated', 'founded', 'generated', 'governed', 'guided', 'headed',
  'implemented', 'improved', 'increased', 'initiated', 'instituted', 'integrated',
  'launched', 'led', 'managed', 'mentored', 'modernized', 'negotiated',
  'optimized', 'orchestrated', 'overhauled', 'partnered', 'pioneered', 'produced',
  'reduced', 'refactored', 'restructured', 'revamped', 'scaled', 'spearheaded',
  'standardized', 'streamlined', 'strengthened', 'structured', 'transformed'
];

export function analyzeResumeContent(
  text: string,
  targetRoleId: string = 'software-engineer'
): AtsAuditResult {
  const normalized = text.toLowerCase();
  const words = text.split(/\s+/).filter(w => w.trim().length > 0);
  const wordCount = words.length;

  // Selected role keywords
  const selectedRole = TARGET_ROLES.find(r => r.id === targetRoleId) || TARGET_ROLES[0];
  const roleKeywords = selectedRole.keywords;

  // Keyword Matching
  const matchedKeywords: string[] = [];
  const missingKeywords: string[] = [];

  roleKeywords.forEach(kw => {
    if (normalized.includes(kw.toLowerCase())) {
      matchedKeywords.push(kw);
    } else {
      missingKeywords.push(kw);
    }
  });

  const roleMatchRatio = roleKeywords.length > 0 
    ? matchedKeywords.length / roleKeywords.length 
    : 0.8;
  const roleMatchScore = Math.round(roleMatchRatio * 100);

  // Action Verbs Analysis
  const foundVerbs = STRONG_ACTION_VERBS.filter(v => normalized.includes(v));
  const actionVerbCount = foundVerbs.length;

  // Quantified Metrics Analysis (numbers followed by %, $, M, K, x, or words like percent, million, reduction)
  const metricRegex = /(\b\d+(\.\d+)?%|\$\d+(\.\d+)?[kmb]?|\b\d+\s?(users|engineers|clients|customers|daily|weekly|hours|minutes|seconds|percent|days|months|years|fold|x)\b)/gi;
  const metricMatches = text.match(metricRegex) || [];
  const quantifiedMetricsCount = metricMatches.length;

  // Impact Scoring (max 100)
  // Good impact: >= 5 verbs and >= 3 quantifiable metrics
  const impactScore = Math.min(100, Math.round(
    (Math.min(actionVerbCount, 10) / 10) * 50 + 
    (Math.min(quantifiedMetricsCount, 8) / 8) * 50
  ));

  // Formatting and Structural Hygiene
  const hasEmail = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(text);
  const hasLinkedIn = /linkedin\.com/i.test(text);
  const hasExperience = /(experience|work history|employment|career)/i.test(text);
  const hasEducation = /(education|university|college|bachelor|degree)/i.test(text);
  const hasSkills = /(skills|technologies|proficiencies|stack)/i.test(text);

  let formattingScore = 60;
  if (hasEmail) formattingScore += 10;
  if (hasLinkedIn) formattingScore += 8;
  if (hasExperience) formattingScore += 8;
  if (hasEducation) formattingScore += 7;
  if (hasSkills) formattingScore += 7;
  formattingScore = Math.min(100, formattingScore);

  // Skills Score
  const skillsScore = Math.min(100, Math.round(roleMatchScore * 0.7 + (actionVerbCount >= 5 ? 30 : actionVerbCount * 6)));

  // Overall Weighted Score
  const overallScore = Math.round(
    roleMatchScore * 0.35 +
    impactScore * 0.35 +
    formattingScore * 0.15 +
    skillsScore * 0.15
  );

  // Feedback points
  const keyStrengths: string[] = [];
  const criticalIssues: string[] = [];

  if (actionVerbCount >= 6) {
    keyStrengths.push(`High action verb velocity (${actionVerbCount} leadership and technical verbs detected).`);
  } else {
    criticalIssues.push(`Low action verb variety. Begin each bullet with strong verbs like 'Architected', 'Spearheaded', or 'Automated'.`);
  }

  if (quantifiedMetricsCount >= 4) {
    keyStrengths.push(`Strong quantitative impact evidence (${quantifiedMetricsCount} metrics, metrics %, or dollar figures verified).`);
  } else {
    criticalIssues.push(`Insufficient quantified results. Anchor achievements with concrete numbers (e.g., 'Reduced latency by 35%').`);
  }

  if (roleMatchScore >= 70) {
    keyStrengths.push(`Excellent alignment with ${selectedRole.title} core keywords (${matchedKeywords.length}/${roleKeywords.length} found).`);
  } else {
    criticalIssues.push(`Keyword gap for ${selectedRole.title}. Consider integrating: ${missingKeywords.slice(0, 4).join(', ')}.`);
  }

  if (hasLinkedIn) {
    keyStrengths.push('Professional portfolio / LinkedIn profile presence confirmed for recruiter verification.');
  } else {
    criticalIssues.push('No direct LinkedIn URL detected in contact header. Adding one boosts recruiter engagement.');
  }

  return {
    overallScore: Math.max(30, Math.min(98, overallScore)),
    roleMatchScore,
    impactScore,
    formattingScore,
    skillsScore,
    keyStrengths,
    criticalIssues,
    missingKeywords,
    matchedKeywords,
    metricsSummary: {
      actionVerbCount,
      quantifiedMetricsCount,
      wordCount,
      readingTimeMinutes: Math.max(1, Math.round(wordCount / 200))
    }
  };
}
