export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "exp-lead",
    role: "Senior Creative Technologist & UI Architect",
    company: "Studio Obsidian",
    companyUrl: "https://studio-obsidian.design",
    period: "2023 — Present",
    location: "Istanbul & Remote",
    description:
      "Directing creative engineering, interactive design systems, and WebGL experiences for global luxury, architecture, and technology brands.",
    technologies: ["Next.js 15", "WebGL", "GSAP", "Tailwind CSS", "TypeScript", "Three.js"],
    achievements: [
      "Led design engineering for 8+ international client launches recognized on Awwwards and FWA",
      "Architected a unified fluid motion engine reducing client transition frame-drops to zero",
      "Mentored junior creative developers in spring mechanics and GPU shader pipelines",
    ],
  },
  {
    id: "exp-frontend",
    role: "Lead Frontend Engineer",
    company: "Vektor Labs",
    companyUrl: "https://vektor-labs.io",
    period: "2021 — 2023",
    location: "Remote",
    description:
      "Engineered high-concurrency cloud telemetry interfaces and interactive dashboard systems with real-time data visualizers.",
    technologies: ["React", "TypeScript", "D3.js", "WebSockets", "Node.js", "Tailwind CSS"],
    achievements: [
      "Scaled real-time telemetry throughput to 100k data points/sec with sub-frame render times",
      "Pioneered the company's first headless design system with full WCAG accessibility compliance",
      "Cut client initial bundle load times by 42% via route-based tree-shaking and asset optimization",
    ],
  },
  {
    id: "exp-engineer",
    role: "Creative Developer & UI/UX Specialist",
    company: "Nexus Digital",
    period: "2019 — 2021",
    location: "Istanbul, TR",
    description:
      "Crafted bespoke digital marketing experiences, interactive product showcases, and kinetic typography installations.",
    technologies: ["JavaScript / ES6+", "Three.js", "Canvas API", "SCSS", "GSAP ScrollTrigger"],
    achievements: [
      "Delivered 15+ interactive commercial micro-sites with custom 3D model loaders",
      "Increased user session dwell time by 65% through immersive scroll-driven narratives",
    ],
  },
];

