export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  year: string;
  category: string;
  role: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  accentColor: string;
  image: string;
  caseStudy: {
    overview: string;
    challenge: string;
    solution: string;
    keyFeatures: string[];
    metrics: { label: string; value: string }[];
  };
}

export interface LiveExperiment {
  id: string;
  title: string;
  description: string;
  tag: string;
  url: string;
  github?: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: "aetheria-os",
    title: "Aetheria OS",
    tagline: "Spatial Audio & Generative Visual Operating Environment",
    description:
      "An experimental browser operating system merging 3D spatial acoustic nodes with generative visual computing. Engineered for musicians, creative coders, and spatial designers seeking ambient, non-linear workflows.",
    year: "2025",
    category: "Web Application / OS",
    role: "Lead Creative Technologist",
    technologies: ["Next.js 15", "Web Audio API", "WebGL", "Tailwind CSS", "TypeScript", "Framer Motion"],
    liveUrl: "https://aetheria-os.vercel.app",
    githubUrl: "https://github.com/kagandeniz/aetheria-os",
    accentColor: "#38bdf8",
    image: "/images/projects/aetheria.svg",
    caseStudy: {
      overview:
        "Aetheria reimagines the desktop metaphor into an infinite spatial canvas where audio plugins and visual canvas nodes communicate over low-latency Web Worker pipelines.",
      challenge:
        "Achieving zero-stutter 120fps rendering while synthesizing 16 simultaneous binaural 3D audio channels directly in the client without exhausting browser thread budgets.",
      solution:
        "Offloaded audio worklet processing into dedicated AudioWorkletNodes and offscreen canvas rendering via WebGL shaders, achieving sub-5ms input latency and silky fluid window physics.",
      keyFeatures: [
        "Binaural 3D spatial node panning with Doppler acoustic modeling",
        "Fluid window management with Apple-style momentum projection",
        "Zero-runtime bundle overhead using custom WebGL shader passes",
        "Modular audio routing matrix with real-time waveform inspection",
      ],
      metrics: [
        { label: "Rendering Rate", value: "120 FPS" },
        { label: "Audio Latency", value: "< 4.8ms" },
        { label: "Awwwards Nominee", value: "Site of the Day" },
      ],
    },
  },
  {
    id: "chronos-engine",
    title: "Chronos Engine",
    tagline: "Procedural 3D Planetary Simulation & Particle Physics",
    description:
      "A real-time WebGPU celestial physics sandbox simulating gravitational tidal forces, atmospheric scattering shaders, and procedural planetary topography directly in the browser.",
    year: "2024",
    category: "Graphics & Simulation",
    role: "Graphics Engineer",
    technologies: ["Three.js", "GLSL Shaders", "WebGPU", "TypeScript", "GSAP", "Compute Shaders"],
    liveUrl: "https://chronos-engine.dev",
    githubUrl: "https://github.com/kagandeniz/chronos-engine",
    accentColor: "#818cf8",
    image: "/images/projects/chronos.svg",
    caseStudy: {
      overview:
        "Chronos allows researchers and space enthusiasts to interactively simulate N-body orbital trajectories with physically accurate planetary Rayleigh and Mie atmospheric scattering.",
      challenge:
        "Rendering over 500,000 active gravitational particles without dropping below 60fps on consumer laptops and mobile GPUs.",
      solution:
        "Implemented compute shaders via WebGPU for parallel matrix calculations and customized dynamic level-of-detail (LOD) quadtree terrain chunking.",
      keyFeatures: [
        "Physically accurate atmospheric scattering GLSL pipeline",
        "Interactive time-dilation controls with spring damping",
        "Procedural crater and biome generation via simplex noise",
        "Interactive orbital trajectory trajectory projection curves",
      ],
      metrics: [
        { label: "Particle Capacity", value: "500K+" },
        { label: "Frame Budget", value: "16.6ms Flat" },
        { label: "GitHub Stars", value: "1.4k+" },
      ],
    },
  },
  {
    id: "lumina-design-system",
    title: "Lumina UI",
    tagline: "Apple-Grade Fluid Interface System & Physics Engine",
    description:
      "A curated, open-source design system and motion toolkit translating Apple WWDC fluid interface principles into battle-tested React & Tailwind primitives.",
    year: "2024",
    category: "Open Source / Systems",
    role: "Author & Maintainer",
    technologies: ["React", "Framer Motion", "Tailwind CSS", "TypeScript", "Radix Primitives"],
    liveUrl: "https://lumina-ui.com",
    githubUrl: "https://github.com/kagandeniz/lumina-design-system",
    accentColor: "#34d399",
    image: "/images/projects/lumina.svg",
    caseStudy: {
      overview:
        "Modern web applications frequently suffer from clunky CSS keyframe animations that break direct manipulation. Lumina provides components that inherit pointer velocity, support interruption, and respect physical limits.",
      challenge:
        "Providing accessible, headless keyboard navigation while maintaining fluid pointer physics and velocity inheritance during gesture release.",
      solution:
        "Engineered custom pointer capture hooks with momentum projection and critically damped spring formulas, paired with Radix UI accessibility foundations.",
      keyFeatures: [
        "Velocity-aware bottom sheets with exponential drag rubber-banding",
        "Translucent backdrop blur materials with specular light rims",
        "Optical tracking typography scale matching Apple SF Pro",
        "Complete WCAG AAA contrast and reduced-motion fallbacks",
      ],
      metrics: [
        { label: "NPM Downloads", value: "48k/mo" },
        { label: "Lighthouse Score", value: "100/100" },
        { label: "Bundle Size", value: "< 12kb gzip" },
      ],
    },
  },
  {
    id: "novascope",
    title: "Novascope Orbital",
    tagline: "Real-Time Satellite Telemetry & Constellation Tracker",
    description:
      "A high-frequency satellite telemetry dashboard streaming live NORAD orbital coordinate vectors, solar illumination angles, and ground track predictions across thousands of active spacecraft.",
    year: "2023",
    category: "Real-Time Systems",
    role: "Full-Stack Technologist",
    technologies: ["Next.js", "MapLibre GL", "WebSockets", "Rust", "TimescaleDB", "Tailwind CSS"],
    liveUrl: "https://novascope-orbital.io",
    githubUrl: "https://github.com/kagandeniz/novascope",
    accentColor: "#f59e0b",
    image: "/images/projects/novascope.svg",
    caseStudy: {
      overview:
        "Novascope was commissioned to provide space researchers and satellite operators with a latency-free visual telemetry platform capable of monitoring orbital passes and conjunction alerts in real time.",
      challenge:
        "Handling incoming telemetry streams at 15,000 updates/second while rendering 3D globe coordinates without UI thread freezes.",
      solution:
        "Designed a Rust WebSocket ingestion microservice transmitting compressed binary FlatBuffers to a client-side Web Worker, which updates GPU buffer instances directly.",
      keyFeatures: [
        "Live satellite pass trajectory and ground track prediction",
        "Interactive 3D globe with real-time solar terminator shadow",
        "Conjunction risk alert pipeline with automated push feeds",
        "Offline caching for remote observatory field research",
      ],
      metrics: [
        { label: "Throughput", value: "15k msgs/s" },
        { label: "Stream Latency", value: "12ms" },
        { label: "Active Satellites", value: "8,500+" },
      ],
    },
  },
  {
    id: "kroma-studio",
    title: "Kroma Studio",
    tagline: "Generative AI Brand Canvas & Vector Typography Synth",
    description:
      "An editorial design studio application leveraging diffusion models and bezier curve morphing algorithms to generate dynamic, responsive vector brand marks and fluid typographic systems.",
    year: "2023",
    category: "AI & Creative Tooling",
    role: "Product Architect",
    technologies: ["Canvas API", "Python", "FastAPI", "React", "Node.js", "Tailwind CSS"],
    liveUrl: "https://kroma-studio.design",
    githubUrl: "https://github.com/kagandeniz/kroma-studio",
    accentColor: "#ec4899",
    image: "/images/projects/kroma.svg",
    caseStudy: {
      overview:
        "Kroma bridges the gap between raw generative image prompts and precision vector typography. Designers can manipulate semantic levers (warmth, tension, geometry) to generate exportable SVG brand systems.",
      challenge:
        "Converting pixel raster inference results into ultra-clean, minimal cubic bezier paths with under 20 anchor points for production use.",
      solution:
        "Implemented an adaptive Ramer-Douglas-Peucker contour simplification algorithm combined with a custom physics-based bezier smoothing solver.",
      keyFeatures: [
        "Real-time semantic typography sliders with instant vector preview",
        "Direct export to production-ready SVG, PDF, and variable font files",
        "Infinite infinite-zoom infinite canvas with GPU pan/pinch",
        "Collaborative multi-user cursor sync via WebRTC",
      ],
      metrics: [
        { label: "Export Quality", value: "Pure SVG" },
        { label: "Generation Speed", value: "< 1.2s" },
        { label: "Active Designers", value: "12,000+" },
      ],
    },
  },
];

export const liveExperiments: LiveExperiment[] = [
  {
    id: "exp-1",
    title: "Spectral Audio Synth",
    description: "Interactive browser synthesizer with WebGL audio spectrum reactive shaders.",
    tag: "Audio / WebGL",
    url: "https://spectral-canvas.vercel.app",
    github: "https://github.com/kagandeniz/spectral-audio-canvas",
    year: "2025",
  },
  {
    id: "exp-2",
    title: "Fluid Particle Physics",
    description: "Eulerian grid fluid simulation reacting to pointer velocity and pressure.",
    tag: "Canvas / Physics",
    url: "https://fluid-dynamics-web.vercel.app",
    github: "https://github.com/kagandeniz/fluid-physics-playground",
    year: "2024",
  },
  {
    id: "exp-3",
    title: "Kinetic Variable Type",
    description: "Interactive variable font sandbox reacting to audio mic frequencies and scroll.",
    tag: "Typography",
    url: "https://kinetic-type-lab.dev",
    github: "https://github.com/kagandeniz/kinetic-variable-type",
    year: "2024",
  },
  {
    id: "exp-4",
    title: "Raymarching SDF World",
    description: "Signed distance field 3D fractal exploration in single GLSL fragment shader.",
    tag: "GLSL / Math",
    url: "https://sdf-raymarcher.vercel.app",
    github: "https://github.com/kagandeniz/glsl-raymarcher-sandbox",
    year: "2024",
  },
];
