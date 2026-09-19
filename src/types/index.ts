export interface Profile {
  name: string;
  heroTitle: string;
  tagline: string;
  degree: string;
  specialization: string;
  university: string;
  academicYear: string;
  cgpa: string;
  twelfthPercentage: string;
  languages: string[];
  coursework: string[];
  professionalElective: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  profilePhoto: string;
  resumeUrl: string;
  positioning: string;
  bio: string[];
  formspreeId?: string;
}

export interface ArchitectureStage {
  step: number;
  name: string;
  category: 'frontend' | 'api' | 'backend' | 'database' | 'model' | 'analytics' | 'visualization';
  description: string;
  detail: string;
}

export interface WorkflowStep {
  title: string;
  summary: string;
}

export type ProjectCategory = 'Full Stack' | 'AI/ML' | 'NLP' | 'Data Analysis' | 'All';

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'Full Stack' | 'AI/ML' | 'Data Analysis' | 'NLP';
  categories: ProjectCategory[];
  summary: string;
  technologies: string[];
  problem: string;
  solution: string;
  coreFeatures: string[];
  technicalImplementation: string[];
  architectureStages: ArchitectureStage[];
  challenges: string[];
  learnings: string[];
  futureImprovements: string[];
  image: string;
  githubUrl: string | null;
  demoUrl: string | null;
  featured: boolean;
  academicDisclaimer?: string;
}

export type SkillCategoryName =
  | 'Programming Languages'
  | 'Frameworks & Libraries'
  | 'Databases'
  | 'Data & Analytics'
  | 'Tools & Platforms'
  | 'Techniques / Concepts';

export interface SkillItem {
  name: string;
  category: SkillCategoryName;
  level: 'Working Knowledge' | 'Familiar' | 'Learning';
  tag?: string;
  description: string;
}

export interface Achievement {
  id: string;
  title: string;
  event: string;
  issuer: string;
  year: string;
  rank: 'Winner' | 'Runner-Up' | 'Certified';
  description: string;
  badge: string;
}

export interface Certification {
  id: string;
  name: string;
  organization: string;
  date: string;
  credentialId: string;
  credentialUrl: string;
  image: string;
  pdfUrl?: string;
  skillsDemonstrated: string[];
  description: string;
}

export interface TimelineMilestone {
  id: string;
  title: string;
  stage: string;
  year: string;
  category: 'Education' | 'Development' | 'Security' | 'AI/ML' | 'Hackathon' | 'Future';
  description: string;
  details: string[];
  current?: boolean;
}
