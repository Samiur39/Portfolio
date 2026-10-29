import { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "proj-fintracker",
    slug: "fintracker",
    title: "FinTracker - Personal Finance Manager",
    tagline: "A clean and intuitive personal finance tracking application",
    description:
      "A web application to track personal income, expenses, and budgets with visual summaries, category breakdowns, and transaction history management.",
    overview:
      "FinTracker is a personal finance management tool designed to help users take control of their money. It offers a clean dashboard with income/expense tracking, category-based spending analysis, and a historical transaction log — all with a simple and accessible UI.",
    previewImage: "/images/projects/fintracker.jpg",
    technologies: ["Java, Java Swing"],
    keyFeatures: [
      "Add, edit, and delete income and expense transactions",
      "Category-based breakdown of spending with visual indicators",
      "Running balance and monthly summary dashboard",
      "Persistent data storage using browser localStorage",
      "Responsive layout optimized for both desktop and mobile",
    ],
    challenges: [
      {
        challenge: "Keeping the UI state consistent across multiple transaction operations.",
        solution: "Used centralized state management with React hooks to ensure all components reflect the latest data.",
      },
      {
        challenge: "Designing a clear financial summary without overwhelming the user.",
        solution: "Applied progressive disclosure — showing totals first, with drill-down into categories on demand.",
      },
    ],
    futureImprovements: [
      "Add chart visualizations (pie/bar) for spending categories using Chart.js or Recharts.",
      "Integrate a backend API with user authentication for cloud-synced data.",
      "Support multi-currency and monthly budget limit alerts.",
    ],
    liveUrl: "",
    clientRepoUrl: "https://github.com/Samiur39/FinTracker",
    isPlaceholder: false,
  },
  {
    id: "proj-assignment5",
    slug: "assignment-5",
    title: "Assignment 5",
    tagline: "Academic web development assignment showcasing core concepts",
    description:
      "A structured web project completed as part of the CSE curriculum, demonstrating proficiency in frontend technologies and responsive design principles.",
    overview:
      "This assignment covers fundamental web development concepts including semantic HTML structure, CSS styling, and JavaScript interactivity. It reflects core academic coursework in web technologies.",
    previewImage: "/images/projects/assignment5.jpg",
    technologies: ["JavaScript, React, TailwindCSS"],
    keyFeatures: [
      "Semantic and accessible HTML5 document structure",
      "Responsive CSS layout with Flexbox/Grid",
      "Interactive JavaScript functionality",
      "Clean, readable and well-commented code",
    ],
    challenges: [
      {
        challenge: "Building a fully responsive layout from scratch without a CSS framework.",
        solution: "Used CSS Grid and media queries to achieve a fluid layout across all screen sizes.",
      },
    ],
    futureImprovements: [
      "Refactor with a modern JS framework like React.",
      "Add unit tests for JavaScript logic.",
    ],
    liveUrl: "",
    clientRepoUrl: "https://github.com/Samiur39/Assignment-5",
    isPlaceholder: false,
  },
  {
    id: "proj-assignment6",
    slug: "assignment-6",
    title: "FitLog",
    tagline: "Advanced academic web project with enhanced interactivity",
    description:
      "A more advanced academic web project building upon previous assignments, incorporating dynamic content rendering, DOM manipulation, and improved UI/UX patterns.",
    overview:
      "Assignment 6 extends prior coursework by introducing more complex JavaScript patterns, dynamic DOM updates, and polished visual design. It demonstrates progressive skill growth in frontend web development.",
    previewImage: "/images/projects/assignment6.jpg",
    technologies: ["JavaScript, React, Nest.js, TailwindCSS"],
    keyFeatures: [
      "Dynamic content rendering using vanilla JavaScript DOM APIs",
      "Event-driven UI interactions and form handling",
      "Modular JavaScript structure for maintainability",
      "Polished visual design with hover states and transitions",
    ],
    challenges: [
      {
        challenge: "Managing complex DOM state without a framework.",
        solution: "Structured the JavaScript into small focused functions and used data attributes to track UI state cleanly.",
      },
    ],
    futureImprovements: [
      "Migrate to a component-based framework for better scalability.",
      "Integrate a REST API to fetch and display real data.",
    ],
    liveUrl: "",
    clientRepoUrl: "https://github.com/Samiur39/Assignment-6",
    isPlaceholder: false,
  },
];
