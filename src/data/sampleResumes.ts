import { SampleResume } from '../types/resume';

export const TARGET_ROLES = [
  {
    id: 'software-engineer',
    title: 'Senior Software Engineer',
    category: 'Engineering',
    keywords: [
      'TypeScript', 'React', 'Node.js', 'Distributed Systems', 'PostgreSQL', 
      'Cloud Architecture', 'CI/CD', 'Docker', 'GraphQL', 'System Design', 'REST API'
    ],
    idealMetrics: ['latency reduction', 'test coverage', 'cost savings', 'throughput']
  },
  {
    id: 'product-manager',
    title: 'Principal Product Manager',
    category: 'Product',
    keywords: [
      'Product Strategy', 'Roadmapping', 'User Research', 'A/B Testing', 'OKRs',
      'Go-To-Market', 'Metrics & Analytics', 'Cross-functional Leadership', 'Agile'
    ],
    idealMetrics: ['ARR growth', 'retention rate', 'customer NPS', 'conversion rate']
  },
  {
    id: 'data-scientist',
    title: 'Machine Learning / Data Scientist',
    category: 'AI & Data',
    keywords: [
      'Python', 'Machine Learning', 'PyTorch', 'SQL', 'Deep Learning', 
      'Feature Engineering', 'Statistical Analysis', 'Pandas', 'Model Deployment'
    ],
    idealMetrics: ['model accuracy', 'AUC-ROC', 'inference speed', 'pipeline latency']
  },
  {
    id: 'growth-marketing',
    title: 'Growth Marketing Lead',
    category: 'Marketing',
    keywords: [
      'Customer Acquisition', 'SEO & SEM', 'Paid Media', 'HubSpot', 'Google Analytics',
      'Lifecycle Marketing', 'Conversion Rate Optimization', 'Cohort Analysis'
    ],
    idealMetrics: ['CAC reduction', 'ROAS improvement', 'LTV expansion', 'inbound pipeline']
  }
];

export const SAMPLE_RESUMES: SampleResume[] = [
  {
    id: 'sample-alex-dev',
    title: 'Senior Software Engineer (Full Stack)',
    applicantName: 'Alex Mercer',
    applicantEmail: 'alex.mercer.tech@gmail.com',
    role: 'Senior Software Engineer',
    fileName: 'Alex_Mercer_Senior_Engineer_Resume.pdf',
    highlight: '8+ yrs exp in scalable cloud architectures, React/Node.js, microservices & latency optimization',
    content: `ALEX MERCER
San Francisco, CA | alex.mercer.tech@gmail.com | linkedin.com/in/alex-mercer-tech | github.com/alexmercer

PROFESSIONAL SUMMARY
Results-driven Senior Full Stack Engineer with 8+ years architecting fault-tolerant web applications, distributed systems, and real-time APIs. Proven record reducing cloud infrastructure costs by 34% and cutting API latency by 45% across high-traffic platforms serving 4M+ daily active users.

TECHNICAL SKILLS
Languages: TypeScript, JavaScript, Python, Go, SQL, Bash
Frontend: React 19, Next.js, Redux, Tailwind CSS, WebSockets
Backend: Node.js, Express, PostgreSQL, Redis, GraphQL, REST APIs
DevOps & Cloud: AWS (ECS, S3, RDS), Docker, Kubernetes, GitHub Actions CI/CD, Datadog

WORK EXPERIENCE
Lead Software Engineer | Apex Cloud Systems | San Francisco, CA | 2022 - Present
- Architected and delivered event-driven microservices processing 12M daily transactions with 99.99% uptime.
- Decreased API p99 latency by 45% (from 420ms to 230ms) by executing aggressive Redis caching and query index restructuring.
- Spearheaded company-wide migration to Next.js and TypeScript, improving Core Web Vitals scores by 28 points.
- Mentored a distributed team of 7 engineers, implementing automated linting and test coverage standards exceeding 85%.

Senior Software Engineer | Horizon Fintech | Austin, TX | 2019 - 2022
- Spearheaded development of payment reconciliation gateway processing $65M+ in quarterly transactions.
- Automated end-to-end CI/CD deployment pipelines using GitHub Actions and Docker, reducing release cycle time from 3 hours to 14 minutes.
- Refactored legacy monolithic PostgreSQL schema into modular tables, cutting database CPU consumption by 32%.

EDUCATION
B.S. in Computer Science | University of California, Berkeley | 2015 - 2019
Honors: Magna Cum Laude, ACM Chapter Officer`
  },
  {
    id: 'sample-sarah-pm',
    title: 'Principal Product Manager',
    applicantName: 'Sarah Jenkins',
    applicantEmail: 'sarah.jenkins.pm@gmail.com',
    role: 'Principal Product Manager',
    fileName: 'Sarah_Jenkins_Principal_PM.pdf',
    highlight: 'Product leader who scaled B2B SaaS platform from $4M to $22M ARR with data-driven experimentation',
    content: `SARAH JENKINS
New York, NY | sarah.jenkins.pm@gmail.com | linkedin.com/in/sarahjenkins-pm

EXECUTIVE SUMMARY
Product executive with 7+ years directing product strategy, zero-to-one launches, and growth monetization for high-velocity enterprise B2B SaaS platforms. Scaled flagship product revenue from $4.2M to $22M ARR while maintaining 118% net revenue retention.

CORE COMPETENCIES
Product Strategy & Vision | Enterprise Roadmapping | Quantitative A/B Testing | Go-to-Market Strategy | Customer Discovery | Agile / Scrum | Pricing & Packaging | Retention & Churn Reduction

PROFESSIONAL EXPERIENCE
Principal Product Manager | Nexus Enterprise Software | New York, NY | 2021 - Present
- Led discovery, architecture, and go-to-market for AI-assisted workflow engine, driving $9.4M in first-year new ARR.
- Designed continuous experimentation framework executing 40+ iterative tests, boosting checkout conversion by 22.4%.
- Partnered directly with Fortune 500 sales teams to close enterprise contracts averaging $250k ACV.
- Managed sprint backlog across 3 squads (22 engineers, 3 product designers) achieving 94% on-time milestone delivery.

Senior Product Manager | Veloce Analytics | Boston, MA | 2018 - 2021
- Defined roadmap for real-time customer data platform adopted by 350+ mid-market brands.
- Increased user 30-day retention from 41% to 63% through structured onboarding checklist revamp and contextual tooltips.

EDUCATION & CERTIFICATIONS
B.A. in Economics & Behavioral Science | Columbia University
Certified Scrum Product Owner (CSPO) | Pragmatic Institute Certified (PMC-III)`
  }
];
