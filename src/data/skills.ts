export interface SkillCategory {
  title: string;
  subtitle: string;
  items: {
    name: string;
    level: string;
    context: string;
    isKey?: boolean;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Architecture",
    subtitle: "Modern reactive frameworks, type safety, and component architecture",
    items: [
      { name: "React 19", level: "Expert", context: "Server components, Actions, hooks architecture", isKey: true },
      { name: "Next.js 15", level: "Expert", context: "App router, SSR, Turbopack, edge routing", isKey: true },
      { name: "TypeScript", level: "Expert", context: "Strict typing, generics, AST utilities", isKey: true },
      { name: "Tailwind CSS v4", level: "Expert", context: "Design token systems, container queries, CSS variables", isKey: true },
      { name: "HTML5 / Web APIs", level: "Master", context: "Web Workers, AudioWorklets, Pointer Events, IntersectionObserver" },
    ],
  },
  {
    title: "Creative Motion & Graphics",
    subtitle: "Apple-grade spring physics, GPU shaders, and fluid tactile feedback",
    items: [
      { name: "Framer Motion", level: "Expert", context: "Interruptible spring physics, layout animations, gestures", isKey: true },
      { name: "GSAP & ScrollTrigger", level: "Expert", context: "Complex timeline choreography, pinned scrub sequences", isKey: true },
      { name: "Lenis Smooth Scroll", level: "Expert", context: "Momentum scroll projection and frame synchronization", isKey: true },
      { name: "Three.js / WebGL", level: "Advanced", context: "Scene graphs, custom geometries, PBR materials", isKey: true },
      { name: "GLSL Shaders", level: "Intermediate", context: "Fragment raymarching, post-processing filters, noise functions" },
      { name: "Canvas 2D / Web Audio", level: "Advanced", context: "Binaural audio nodes, 120fps direct pixel manipulation" },
    ],
  },
  {
    title: "Backend & Systems",
    subtitle: "High-performance APIs, real-time data streaming, and persistence",
    items: [
      { name: "Node.js / Bun", level: "Advanced", context: "Fast runtime microservices, streaming SSR" },
      { name: "PostgreSQL & Prisma", level: "Advanced", context: "Relational schema modeling, index optimization" },
      { name: "WebSockets & WebRTC", level: "Advanced", context: "Low-latency binary packet streaming, real-time peer sync" },
      { name: "Docker & CI/CD", level: "Intermediate", context: "Containerized deployment pipelines, automated GH Actions" },
      { name: "REST & GraphQL", level: "Advanced", context: "Type-safe RPC contracts and caching layers" },
    ],
  },
  {
    title: "Design Craft & Systems",
    subtitle: "Apple design principles, optical typography, and ergonomic interfaces",
    items: [
      { name: "Figma", level: "Expert", context: "Design tokens, auto-layout, interactive component prototypes", isKey: true },
      { name: "Apple Fluid Interfaces", level: "Master", context: "WWDC spring dynamics, direct 1:1 manipulation, velocity handoff", isKey: true },
      { name: "Optical Typography", level: "Expert", context: "Size-dependent tracking, negative display kerning, hierarchy" },
      { name: "Design Systems", level: "Expert", context: "Radix UI primitives, headless accessible patterns, token scales" },
      { name: "Micro-interactions", level: "Master", context: "Magnetic buttons, custom cursor state machines, tactile feedback" },
    ],
  },
];

