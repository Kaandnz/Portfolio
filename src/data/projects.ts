export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  year: string;
  category: string;
  role: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
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
    id: "duzey-sfa-b2b",
    title: "Enterprise B2B & E-Commerce Infrastructure",
    tagline: "Scalable B2B, E-Commerce & Payment Systems with C# & nopCommerce",
    description:
      "Enterprise B2B and e-commerce platforms engineered on nopCommerce with C# and ASP.NET Core. Powers end-to-end order processing, customer pricing, tiered discount rules, secure payment gateway integrations, and SAP/Panorama enterprise synchronization.",
    year: "2025",
    category: "Enterprise B2B & E-Commerce / Backend",
    role: "Software Developer @ Düzey",
    technologies: [".NET Core", "C#", "ASP.NET Core", "nopCommerce", "MS SQL Server", "Payment Systems", "SAP", "Panorama", "RESTful APIs"],
    liveUrl: "https://www.duzeymarket.com/",
    accentColor: "#f59e0b",
    image: "/images/projects/aetheria.svg",
    caseStudy: {
      overview:
        "Nationwide enterprise B2B and e-commerce ecosystem facilitating streamlined digital ordering, tiered customer pricing, promotional discounts, and payment processing.",
      challenge:
        "Handling complex customer-specific pricing matrixes, multi-provider payment integrations, and high-concurrency order processing in lockstep with SAP and Panorama.",
      solution:
        "Engineered bespoke nopCommerce enterprise plugins, integrated multi-tier payment gateways, built robust Panorama and SAP connectors, and deployed centralized Approval Management APIs.",
      keyFeatures: [
        "Comprehensive order, customer tier, dynamic pricing, and discount rule management on nopCommerce",
        "Secure payment gateway integration, Panorama synchronization, and tailored enterprise e-commerce modules",
        "Seamless bidirectional order and inventory synchronization with SAP and Panorama",
        "Centralized Approval Management REST API suite automating field workflow approvals",
      ],
      metrics: [
        { label: "Architecture", value: "nopCommerce .NET" },
        { label: "Enterprise Sync", value: "SAP & Panorama" },
        { label: "Payment Gateways", value: "3D Secure / POS" },
      ],
    },
  },
  {
    id: "duzey-route-opt",
    title: "Enterprise Fleet & Route Optimization Platform",
    tagline: "Map-Based Route Optimization & Fleet Dispatch with Spring Boot & Angular",
    description:
      "Enterprise fleet logistics and route optimization web application engineered with Angular, Java Spring Boot, and PostgreSQL. Features interactive map-based dispatch, vehicle and driver management, and automated distribution tracking via SAP and Panorama integrations.",
    year: "2025",
    category: "Enterprise Logistics / Full Stack",
    role: "Software Developer @ Düzey",
    technologies: ["Java Spring Boot", "Angular", "PostgreSQL", "SAP Integration", "Panorama", "RESTful APIs", "Docker"],
    liveUrl: "https://duzey.com.tr",
    accentColor: "#06b6d4",
    image: "/images/projects/chronos.svg",
    caseStudy: {
      overview:
        "High-throughput dispatch platform managing nationwide distribution routes, interactive map planning, driver-vehicle assignments, and operational delivery metrics in real time.",
      challenge:
        "Optimizing dynamic delivery waypoints, vehicle capacity constraints, and driver schedules on live map interfaces while maintaining continuous synchronization with SAP and Panorama backends.",
      solution:
        "Engineered scalable route calculation backend services using Java Spring Boot and PostgreSQL, paired with a responsive Angular map UI and reliable bidirectional SAP/Panorama data connectors.",
      keyFeatures: [
        "Interactive map-based route planning, dynamic waypoint sorting, and algorithmic route optimization",
        "Comprehensive fleet asset management, driver assignment tracking, and live shipment dispatch status",
        "Real-time bidirectional enterprise data synchronization with SAP and Panorama systems",
        "Operational telemetry and analytics reporting for distribution turnaround and route variance",
      ],
      metrics: [
        { label: "Route Engine", value: "Dynamic Routing" },
        { label: "ERP Connect", value: "SAP & Panorama" },
        { label: "Database", value: "PostgreSQL" },
      ],
    },
  },
  {
    id: "dailyrota",
    title: "DailyRota: Personal Life & Routine Hub",
    tagline: "Voice & NLP-Powered Mobile-First Personal Life, Finance & Routine Management Platform",
    description:
      "A mobile-first personal operating hub unifying personal finance, budgeting, scheduling, pantry inventory, and habit tracking—translating natural Turkish voice and text commands into atomic database entries with offline-first Firestore architecture.",
    year: "2026",
    category: "Mobile Web / Personal Hub & Finance",
    role: "Full Stack Creator & Architect",
    technologies: ["React 19", "TypeScript", "Firebase Auth", "Cloud Firestore", "Tailwind CSS", "Web Speech API", "PWA", "Base UI"],
    liveUrl: "https://dailyrota.web.app",
    githubUrl: "https://github.com/Kaandnz/DailyRota",
    accentColor: "#10b981",
    image: "/images/projects/dailyrota.svg",
    caseStudy: {
      overview:
        "An all-in-one personal operating ecosystem replacing fragmented todo, finance, grocery, and calendar apps with an intuitive hub that translates conversational Turkish voice and text commands directly into structured atomic database records.",
      challenge:
        "Parsing unstructured natural language and browser speech inputs into strictly-typed transactional entities client-side with zero paid API overhead, while ensuring seamless offline-first synchronization and conflict-free guest-to-authenticated Firebase account migration.",
      solution:
        "Architected a zero-latency client-side Turkish NLP rule parser coupled with the Web Speech API. Deployed strict UID-isolated Cloud Firestore security rules with offline persistence, validated by a comprehensive suite of 114 automated unit and emulator tests.",
      keyFeatures: [
        "Deterministic Turkish NLP and voice command engine converting speech into structured entries",
        "Full financial management suite: Category budgets, subscriptions, debts/receivables, and savings goals",
        "Home and personal logistics: Grocery checklists, pantry inventory, warranties, and vehicle maintenance",
        "Seamless guest-to-cloud Firebase Auth with offline persistence and zero-loss Firestore synchronization",
      ],
      metrics: [
        { label: "Automated Tests", value: "114/114" },
        { label: "NLP Latency", value: "< 5ms" },
        { label: "Architecture", value: "PWA + Firebase" },
      ],
    },
  },
  {
    id: "sql-game",
    title: "SQL Quest: Data Detective",
    tagline: "Interactive Gamified SQL & Forensic Database Learning Platform",
    description:
      "A browser-based investigative forensics game powered by WebAssembly (WASM). Players solve corporate forensic dossiers by executing queries ranging from foundational SELECT to advanced Window Functions and Recursive CTEs.",
    year: "2025",
    category: "Interactive Web / EdTech Game",
    role: "Full Stack Creator & Architect",
    technologies: ["React", "TypeScript", "SQL (WASM)", "Tailwind CSS", "Firebase", "Web Audio API"],
    liveUrl: "https://learn-sql-game.web.app/",
    githubUrl: "https://github.com/Kaandnz/SQL-Game",
    accentColor: "#38bdf8",
    image: "/images/projects/sql-game.svg",
    caseStudy: {
      overview:
        "Replaces dry SQL documentation with a compelling forensic storyline where developers and analysts master complex queries through real-world cyber crime and financial auditing scenarios.",
      challenge:
        "Executing complex relational SQL schemas client-side with zero server latency, maintaining instant sub-2ms query evaluation while isolating user input securely.",
      solution:
        "Integrated a WebAssembly SQLite engine offloaded to a Web Worker, ensuring zero UI thread blocking during high-volume query parsing and live table visualizations.",
      keyFeatures: [
        "Client-side WASM query engine with sub-2ms execution latency",
        "Real-world forensic dossiers: Money laundering, fraudulent logs, corporate leaks",
        "Dynamic skill tree mapping from basic syntax to recursive queries",
        "Retro-futuristic tactical terminal UI with reactive audio feedback",
      ],
      metrics: [
        { label: "Query Latency", value: "1.4ms" },
        { label: "Curriculum", value: "30+ Cases" },
        { label: "Architecture", value: "Pure WASM" },
      ],
    },
  },
  {
    id: "elementa",
    title: "Elementa: Periodic Laboratory",
    tagline: "Precision Periodic Laboratory with Quantum Orbitals & Thermodynamic Phase Simulation",
    description:
      "A futuristic precision periodic laboratory presenting all 118 IUPAC chemical elements with quantum electron configurations, 0 K – 6000 K thermodynamic phase simulations, periodic trend heatmaps, and side-by-side element comparison matrices.",
    year: "2025",
    category: "Interactive Web / Scientific Laboratory",
    role: "Full Stack Creator & Architect",
    technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Firebase", "Web Audio API"],
    liveUrl: "https://periodictableviewer.web.app",
    githubUrl: "https://github.com/Kaandnz/PeriodicTable",
    accentColor: "#06b6d4",
    image: "/images/projects/elementa.svg",
    caseStudy: {
      overview:
        "Reimagining static chemistry references into an interactive, high-precision periodic laboratory that allows researchers, students, and engineers to explore quantum electron shells, thermodynamic phase shifts, and empirical periodic trends in real time.",
      challenge:
        "Rendering complex atomic structures, real-time thermodynamic phase transitions across a 0 K – 6000 K continuous range at 60 FPS, and calculating Hund's rule quantum orbital spin vectors entirely on the client side with sub-millisecond responsiveness.",
      solution:
        "Engineered a reactive state architecture with Next.js 15 and React 19. Designed optimized TypeScript evaluation engines for thermodynamic phase modeling and quantum orbital population, paired with smooth CSS transform pipelines and global edge delivery via Firebase Hosting.",
      keyFeatures: [
        "Complete 118 IUPAC elements with 10 chemical categories and s/p/d/f quantum block separation",
        "Real-time thermodynamic phase simulation (0 K – 6000 K) with dynamic phase percentage telemetry",
        "Empirical periodic trends heatmap for electronegativity, ionization energy, and atomic radius",
        "Side-by-side differential quantum and thermodynamic comparison matrix for up to 4 elements",
      ],
      metrics: [
        { label: "IUPAC Elements", value: "118" },
        { label: "Phase Range", value: "0K - 6000K" },
        { label: "Render Latency", value: "< 16ms" },
        { label: "Architecture", value: "Next 15 Edge" },
      ],
    },
  },
  {
    id: "sql-formatter",
    title: "SQL List Formatter",
    tagline: "High-Speed SQL Batch & IN-Clause Query Transformation Tool",
    description:
      "High-performance developer utility converting raw clipboard data, Excel columns, and unformatted log lines into sanitized, quoted SQL IN (...) query clauses with custom delimiters and batch splitting.",
    year: "2025",
    category: "Developer Tool / Database",
    role: "Author & Core Engineer",
    technologies: ["C# / .NET", "TypeScript", "SQL Server", "RegEx Engine", "Tailwind CSS"],
    githubUrl: "https://github.com/Kaandnz/Sql-List-Formatter",
    accentColor: "#10b981",
    image: "/images/projects/sql-formatter.svg",
    caseStudy: {
      overview:
        "A focused developer productivity tool designed to eliminate the repetitive friction of transforming raw spreadsheet IDs into formatted SQL IN-clauses.",
      challenge:
        "Sanitizing, deduping, and splitting large datasets (10,000+ rows) without memory spikes while supporting customizable batching parameters.",
      solution:
        "Implemented an optimized streaming regex token parser and fast clipboard pipeline that operates with zero latency.",
      keyFeatures: [
        "Instant single/double quote wrapping and comma separation",
        "Automated batch chunking to comply with SQL Server 1000-item IN limits",
        "Whitespace trimming, deduplication, and invalid token sanitization",
        "Lightweight, keyboard-friendly workflow with instant copy",
      ],
      metrics: [
        { label: "Format Time", value: "< 5ms" },
        { label: "Row Capacity", value: "50K+ Rows" },
        { label: "Time Saved", value: "10x Speedup" },
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
    github: "https://github.com/Kaandnz/spectral-audio-canvas",
    year: "2025",
  },
  {
    id: "exp-2",
    title: "Fluid Particle Physics",
    description: "Eulerian grid fluid simulation reacting to pointer velocity and pressure.",
    tag: "Canvas / Physics",
    url: "https://fluid-dynamics-web.vercel.app",
    github: "https://github.com/Kaandnz/fluid-physics-playground",
    year: "2024",
  },
  {
    id: "exp-3",
    title: "Kinetic Variable Type",
    description: "Interactive variable font sandbox reacting to audio mic frequencies and scroll.",
    tag: "Typography",
    url: "https://kinetic-type-lab.dev",
    github: "https://github.com/Kaandnz/kinetic-variable-type",
    year: "2024",
  },
  {
    id: "exp-4",
    title: "Raymarching SDF World",
    description: "Signed distance field 3D fractal exploration in single GLSL fragment shader.",
    tag: "GLSL / Math",
    url: "https://sdf-raymarcher.vercel.app",
    github: "https://github.com/Kaandnz/glsl-raymarcher-sandbox",
    year: "2024",
  },
];
