import { SkillCategory } from "@/types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    badge: "Core Foundations",
    skills: [
      { name: "C", context: "Procedural logic & memory management fundamentals" },
      { name: "C++", context: "Object-oriented programming, STL & algorithms" },
      { name: "Java", context: "Core OOP concepts & enterprise development foundation" },
      { name: "JavaScript", context: "Modern ES6+ syntax, asynchronous programming & DOM" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    badge: "User Interface & Experience",
    skills: [
      { name: "React", context: "Component architecture, hooks & reactive interfaces" },
      { name: "Next.js", context: "App Router, Server Components & fullstack SSR/SSG" },
      { name: "HTML5", context: "Semantic document structure & web accessibility (a11y)" },
      { name: "CSS3 / Tailwind CSS", context: "Modern utility layouts, responsive design & CSS variables" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Systems",
    badge: "Server-side & Architecture",
    skills: [
      { name: "Spring Boot", context: "Java-based RESTful web services & backend architecture" },
      { name: "RESTful APIs", context: "Endpoint design, HTTP methods & JSON data contracts" },
    ],
  },
  {
    id: "tools",
    title: "Developer Tools & Workflow",
    badge: "Productivity & Versioning",
    skills: [
      { name: "Git & GitHub", context: "Branching workflows, version control & collaborative repos" },
      { name: "Postman", context: "API validation, request debugging & integration testing" },
      { name: "VS Code", context: "Primary development workspace, debugging & extensions" },
    ],
  },
];
