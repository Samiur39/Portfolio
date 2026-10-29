export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  facebook?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp?: string;
  location: string;
  socials: SocialLinks;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  department: string;
  period: string;
  status: string;
  highlights?: string[];
  isVerified?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  description: string[];
  technologies?: string[];
}

export interface SkillItem {
  name: string;
  icon?: string;
  context?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  badge: string;
  skills: SkillItem[];
}

export interface ProjectChallenge {
  challenge: string;
  solution: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  overview: string;
  previewImage: string;
  gallery?: string[];
  technologies: string[];
  keyFeatures: string[];
  challenges: ProjectChallenge[];
  futureImprovements: string[];
  liveUrl?: string;
  clientRepoUrl?: string;
  isPlaceholder?: boolean;
}

export interface ProfileData {
  name: string;
  displayInitials: string;
  designation: string;
  subDesignation: string;
  shortBio: string;
  location: string;
  statusText: string;
  about: {
    journey: string;
    focus: string;
    personalityAndHobbies: string;
  };
  contact: ContactInfo;
  education: EducationItem[];
  experience: ExperienceItem[];
  assets: {
    avatar: string;
    resume: string;
    isResumeReady: boolean;
  };
}
