import { ProfileData } from "@/types/portfolio";

export const profileData: ProfileData = {
  name: "Samiur Rahman Sifat",
  displayInitials: "SR",
  designation: "Software & Web Developer",
  subDesignation: "Computer Science & Engineering Undergraduate",
  shortBio:
    "CSE undergraduate based in Bangladesh passionate about building robust web applications, exploring backend architectures, and writing clean, maintainable code with modern technologies.",
  location: "Dhaka, Bangladesh",
  statusText: "Available for internships & collaborations",

  about: {
    journey:
      "My programming journey began with foundational languages like C and C++, where I developed a keen interest in problem-solving, data structures, and computer science fundamentals. Over time, I expanded my technical domain into web development, exploring modern JavaScript, React, and Next.js on the frontend, alongside Java and Spring Boot for backend services.",
    focus:
      "I enjoy crafting intuitive web interfaces, architecting reliable server-side endpoints, and dissecting how distributed systems connect together. I am driven by the process of taking a conceptual problem and translating it into a performant, accessible digital solution.",
    personalityAndHobbies:
      "When I am not coding or studying course curricula, I enjoy keeping up with technological advancements, engaging in tech community discussions, reading tech publications, and pursuing hobbies like reading, gaming, and exploring creative visual design.",
  },

  contact: {
    email: "samiurrahmansifat2039@gmail.com",
    phone: "+8801709217557",
    whatsapp: "+8801709217557",
    location: "Dhaka, Bangladesh",
    socials: {
      github: "https://github.com/Samiur39",
      linkedin: "https://linkedin.com/in/samiur--rahman",
      twitter: "https://twitter.com/your-handle",
      facebook: "https://facebook.com/samiurrahman.sifat.",
    },
  },

  education: [
    {
      id: "undergraduate",
      institution: "North South University",
      degree: "Bachelor of Science (B.Sc.)",
      department: "Computer Science and Engineering",
      period: "2025 - Present",
      status: "In Progress (Undergraduate)",
      highlights: [
        "Core Coursework: Structured Programming, OOP, Data Structures & Algorithms, Database Systems, Web Technologies",
        "Active member of student computer club & programming study groups",
      ],
      isVerified: true,
    },
    {
      id: "hsc",
      institution: "Barishal Cadet College  ",
      degree: "Higher Secondary Certificate (HSC)",
      department: "Science Group",
      period: "Completed",
      status: "Completed",
      highlights: [
        "Major subjects: Physics, Chemistry, Higher Mathematics, Biology",
      ],
      isVerified: true,
    },
  ],

  experience: [],

  assets: {
    avatar: "/images/profile/profile.png",
    resume: "/resume/resume.pdf",
    isResumeReady: true,
  },
};
