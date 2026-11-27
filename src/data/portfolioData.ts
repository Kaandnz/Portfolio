export type LocalizedString = { tr: string; en: string };
export type LocalizedSkill = string | LocalizedString;

export interface ProjectItem {
  id: string;
  title: string;
  year: string;
  category: LocalizedString;
  role: LocalizedString;
  tagline: LocalizedString;
  description: LocalizedString;
  technologies: string[];
  liveUrl?: string;
  /** Overrides the default live-link label, e.g. when the link is a company site rather than the app itself. */
  liveLabel?: LocalizedString;
  githubUrl?: string;
  accentColor: string;
  image: string;
  caseStudy: {
    overview: LocalizedString;
    challenge: LocalizedString;
    solution: LocalizedString;
    keyFeatures: { tr: string[]; en: string[] };
    metrics: { label: LocalizedString; value: string | LocalizedString }[];
  };
}

export interface ExperienceItem {
  id: string;
  role: { tr: string; en: string };
  company: string;
  period: { tr: string; en: string };
  location: { tr: string; en: string };
  description: { tr: string; en: string };
  achievements: { tr: string[]; en: string[] };
  technologies: string[];
}

export interface EducationItem {
  degree: { tr: string; en: string };
  school: { tr: string; en: string };
  gpa: string;
  details: { tr: string; en: string };
}

export const personalInfo = {
  name: "Kağan Deniz",
  title: {
    tr: "Full Stack Geliştirici",
    en: "Full Stack Developer",
  },
  location: "Istanbul, Turkey",
  email: "konmdeniz@gmail.com",
  phone: "+90 532 389 5097",
  github: "https://github.com/Kaandnz",
  linkedin: "https://www.linkedin.com/in/ka%C4%9Fandeniz/",
  bio: {
    tr: "Java Spring Boot, .NET Core, C# ve modern web teknolojileriyle (Angular, React) kurumsal çözümler, B2B platformları, e-ticaret sistemleri ve rota optimizasyonu uygulamaları geliştiren Full Stack Geliştirici. SAP ve Panorama kurumsal entegrasyonları, nopCommerce e-ticaret mimarileri, PostgreSQL & SQL Server veritabanı optimizasyonları, test otomasyonu (Selenium) ve CI/CD süreçleri (Jenkins) konularında deneyim. Temiz kod, mikroservis mimarileri ve uçtan uca ürün teslimatına odaklanan mühendislik yaklaşımı.",
    en: "Full Stack Developer building enterprise solutions, B2B platforms, e-commerce systems, and route optimization applications with Java Spring Boot, .NET Core, C#, and modern web technologies (Angular, React). Experience with enterprise SAP and Panorama integrations, nopCommerce e-commerce, PostgreSQL & SQL Server database optimization, test automation (Selenium), and CI/CD (Jenkins). Focused on clean code, microservice architectures, and end-to-end product delivery.",
  },
};

export const projectsData: ProjectItem[] = [
  {
    id: "duzey-sfa-b2b",
    title: "Enterprise B2B & E-Commerce Infrastructure",
    year: "2025",
    category: {
      tr: "Kurumsal B2B & E-Ticaret / Backend",
      en: "Enterprise B2B & E-Commerce / Backend",
    },
    role: {
      tr: "Yazılım Geliştirici @ Düzey",
      en: "Software Developer @ Düzey",
    },
    tagline: {
      tr: "C# & ASP.NET Core nopCommerce ile B2B, E-Ticaret ve Ödeme Sistemleri",
      en: "B2B, E-Commerce & Payment Systems with C# & nopCommerce",
    },
    description: {
      tr: "C# ve ASP.NET Core kullanılarak nopCommerce altyapısı üzerine geliştirilen; sipariş, müşteri, fiyat ve indirim yönetimi ile SAP ve Panorama entegrasyonlarını kapsayan kurumsal B2B platformu ve ödeme sistemleri entegrasyonlu Düzey e-ticaret altyapısı.",
      en: "Enterprise B2B and e-commerce platforms built on nopCommerce with C# and ASP.NET Core. Covers order processing, customer pricing, tiered discount rules, payment system integrations, and SAP/Panorama synchronization.",
    },
    technologies: [".NET Core", "C#", "ASP.NET Core", "nopCommerce", "MS SQL Server", "Payment Systems", "SAP", "Panorama", "RESTful APIs"],
    liveUrl: "https://www.duzeymarket.com/",
    accentColor: "#3b82f6",
    image: "/images/projects/duzey-market.webp",
    caseStudy: {
      overview: {
        tr: "Düzey'in bayi ve müşterileri için sipariş, dinamik fiyatlandırma, kampanya indirimleri ve online ödeme süreçlerini yürüten B2B ve e-ticaret platformu.",
        en: "B2B and e-commerce platform for Düzey's dealers and customers, covering ordering, dynamic pricing, promotional discounts, and online payments.",
      },
      challenge: {
        tr: "Farklı müşteri segmentlerine özel dinamik fiyat/iskonto matrislerini, karmaşık ödeme sistemlerini ve SAP/Panorama stok-sipariş senkronizasyonunu birlikte doğru çalıştırmak.",
        en: "Keeping customer-specific pricing and discount matrices, complex payment systems, and SAP/Panorama stock and order synchronization working correctly together.",
      },
      solution: {
        tr: "nopCommerce çekirdeği kurumsal ihtiyaçlara göre özelleştirildi; güvenli ödeme altyapıları, Panorama ve SAP veri hatları bağlandı; Onay Yönetim Sistemi API'leri ile operasyonel süreçler otomatikleştirildi.",
        en: "Customized the nopCommerce core for business needs, connected secure payment systems and Panorama and SAP data lines, and automated operational processes with Approval Management APIs.",
      },
      keyFeatures: {
        tr: [
          "C# ve ASP.NET Core nopCommerce üzerinde sipariş, müşteri, dinamik fiyat ve indirim yönetimi",
          "Düzey e-ticaret projesinde güvenli ödeme sistemleri, Panorama entegrasyonu ve iş ihtiyaçlarına özel modüller",
          "SAP ve Panorama kurumsal sistemleriyle çift yönlü sipariş ve stok senkronizasyonu",
          "Saha operasyonları için merkezi Onay Yönetim Sistemi RESTful API'leri",
        ],
        en: [
          "Order, customer tier, dynamic pricing, and discount rule management on nopCommerce",
          "Payment system integration, Panorama synchronization, and custom e-commerce modules",
          "Bidirectional order and inventory synchronization with SAP and Panorama",
          "Centralized Approval Management REST API suite automating field workflow approvals",
        ],
      },
      metrics: [
        { label: { tr: "Mimari", en: "Architecture" }, value: "nopCommerce .NET" },
        { label: { tr: "Entegrasyon", en: "Enterprise Sync" }, value: "SAP & Panorama" },
        { label: { tr: "Ödeme Altyapısı", en: "Payments" }, value: { tr: "Online Ödeme / POS", en: "Online Payments / POS" } },
      ],
    },
  },
  {
    id: "duzey-route-opt",
    title: "Enterprise Fleet & Route Optimization Platform",
    year: "2025",
    category: {
      tr: "Kurumsal Lojistik / Full Stack",
      en: "Enterprise Logistics / Full Stack",
    },
    role: {
      tr: "Yazılım Geliştirici @ Düzey",
      en: "Software Developer @ Düzey",
    },
    tagline: {
      tr: "Angular & Java Spring Boot ile Rota Optimizasyonu ve Harita Planlama",
      en: "Map-Based Route Optimization & Fleet Dispatch with Spring Boot & Angular",
    },
    description: {
      tr: "Angular, Java Spring Boot ve PostgreSQL ile geliştirilen; rota optimizasyonu, harita üzerinden planlama, araç ve sürücü yönetimi sunan web uygulaması. SAP ve Panorama entegrasyonlarıyla dağıtım süreçlerinin yönetimini ve raporlanmasını sağlar.",
      en: "Enterprise fleet logistics and route optimization web application built with Angular, Java Spring Boot, and PostgreSQL. Offers route optimization, map-based planning, and vehicle and driver management, with distribution management and reporting through SAP and Panorama integrations.",
    },
    technologies: ["Java Spring Boot", "Angular", "PostgreSQL", "SAP Integration", "Panorama", "RESTful APIs", "Docker"],
    liveUrl: "https://duzey.com.tr",
    liveLabel: { tr: "Düzey (şirket sitesi)", en: "Düzey (company site)" },
    accentColor: "#06b6d4",
    image: "/images/projects/route-opt.webp",
    caseStudy: {
      overview: {
        tr: "Dağıtım araçları için harita üzerinden rota planlama, araç ve sürücü yönetimi ve sevkiyat raporlaması sunan kurumsal web platformu.",
        en: "Enterprise web platform for distribution vehicles: map-based route planning, vehicle and driver management, and delivery reporting.",
      },
      challenge: {
        tr: "Değişken teslimat noktalarını mesafe ve operasyonel kısıtlara göre harita üzerinde sıralamak ve sonucu SAP ve Panorama ile senkron tutmak.",
        en: "Ordering changing delivery stops on a map against distance and operational constraints, and keeping the result in sync with SAP and Panorama.",
      },
      solution: {
        tr: "Java Spring Boot ve PostgreSQL ile rota optimizasyon servisleri geliştirildi; Angular ile harita tabanlı interaktif yönetim panosu kurgulandı ve çift yönlü SAP/Panorama entegrasyonları kuruldu.",
        en: "Built route calculation backend services with Java Spring Boot and PostgreSQL, an Angular map-based management dashboard, and bidirectional SAP/Panorama data connectors.",
      },
      keyFeatures: {
        tr: [
          "Harita üzerinden interaktif rota planlama, dinamik durak sıralaması ve rota optimizasyonu",
          "Kapsamlı araç filosu, sürücü yönetimi ve sevkiyat durum takibi",
          "SAP ve Panorama sistemleriyle çift yönlü veri entegrasyonu",
          "Dağıtım süreçlerinin uçtan uca yönetimi, rota sapmaları ve teslimat süreleri için operasyonel raporlama",
        ],
        en: [
          "Interactive map-based route planning, dynamic stop ordering, and route optimization",
          "Fleet management, driver assignment, and shipment status tracking",
          "Bidirectional data integration with SAP and Panorama systems",
          "End-to-end distribution management with operational reporting on route deviations and delivery times",
        ],
      },
      metrics: [
        { label: { tr: "Optimizasyon", en: "Route Engine" }, value: { tr: "Dinamik Rota", en: "Dynamic Routing" } },
        { label: { tr: "Entegrasyon", en: "ERP Connect" }, value: "SAP & Panorama" },
        { label: { tr: "Veritabanı", en: "Database" }, value: "PostgreSQL" },
      ],
    },
  },
  {
    id: "dailyrota",
    title: "Rota · DailyTracker: Kişisel Yaşam & Finans Yönetim Merkezi",
    year: "2026",
    category: {
      tr: "Mobil Web / Kişisel Yaşam & Finans",
      en: "Mobile Web / Personal Life & Finance Hub",
    },
    role: {
      tr: "Kişisel proje",
      en: "Personal project",
    },
    tagline: {
      tr: "Türkçe Sesli & Yazılı Asistanlı, Çoklu Yapay Zeka Fallback Zincirli ve Bulut Kasalı Yaşam Yönetim Merkezi",
      en: "Voice & NLP-Powered Mobile-First Personal Life Hub with Multi-Model AI Fallback & Cloud Secret Vault",
    },
    description: {
      tr: "Finans, bütçe, günlük görevler, alışveriş, ev stokları, hedefler ve araç bakımını tek ekranda toplayan; Türkçe sesli ve yazılı serbest komutları işlem önizlemesi ve atomik onay ile hayata geçiren hibrit yapay zeka (Gemini, Groq, Ollama) destekli kişisel yönetim merkezi.",
      en: "An all-in-one personal hub for finance, tasks, groceries, pantry inventory, habits, and vehicle maintenance, driven by conversational Turkish voice/text commands, transactional action previews, offline rules, and resilient multi-model AI fallback.",
    },
    technologies: [
      "React 19",
      "TypeScript",
      "Firebase (Firestore & Auth)",
      "Cloud Functions & Secret Manager",
      "Gemini 3.5 Flash",
      "Multi-LLM Fallback (Groq, DeepSeek)",
      "Web Speech API",
      "PWA",
      "Tailwind CSS",
    ],
    liveUrl: "https://dailyrota.web.app",
    githubUrl: "https://github.com/Kaandnz/DailyRota",
    accentColor: "#f97316",
    image: "/images/projects/dailyrota.webp",
    caseStudy: {
      overview: {
        tr: "Kullanıcıların farklı uygulamalara dağılan bütçe, görev, alışveriş ve takvim verilerini tek merkezde birleştiren; 'Marketten süt ve deterjan aldım 350 TL tuttu' veya bileşik finansal durum gibi serbest komutları işlem önizlemesi ve atomik onay ile anında sisteme işleyen, tam veri bağımsızlığı sunan hepsi-bir-arada kişisel yaşam yönetim merkezi.",
        en: "A single personal hub that replaces separate finance, task, grocery, and calendar apps. It turns free-form voice and text commands into previewed, atomically confirmed actions, and your data stays yours with full JSON backup and calendar export.",
      },
      challenge: {
        tr: "Kullanıcıyı tek bir yapay zeka sağlayıcısına veya sürekli internete bağımlı kılmadan Türkçe serbest niyetleri sıfır maliyetle yerel kurallarla çözmek; karmaşık sorgularda ise Gemini 3.5 Flash, Groq ve yerel Ollama/Whisper modelleri arasında 429 kota hatasına karşı kesintisiz fallback ve Google Cloud Secret Manager ile istemci tarafında sızdırılamaz API anahtarı güvenliği sağlamak.",
        en: "Resolving free-form Turkish intents with zero-cost local rules, without tying the user to a single AI provider or a constant connection; for complex queries, falling back between Gemini 3.5 Flash, Groq and local Ollama/Whisper models when a 429 quota error hits, and keeping API keys off the client with Google Cloud Secret Manager.",
      },
      solution: {
        tr: "İstemci tarafında Rota Komut Motoru (çevrimdışı NLP) geliştirildi; bulutta Firebase Secret Manager ve Cloud Functions destekli çoklu model fallback zinciri (Gemini 3.5 Flash, Groq, OpenRouter) kuruldu. İşlemler için önizleme/atomik onay mekanizması, 100 adımlık anında geri alma (undo) altyapısı ve Firebase App Check güvenliği entegre edildi.",
        en: "Built the client-side Rota Command Engine (offline NLP) plus a cloud multi-model fallback chain (Gemini 3.5 Flash, Groq, OpenRouter) on Firebase Secret Manager and Cloud Functions. Added action previews with atomic confirmation, 100-step undo and Firebase App Check, covered by 114 automated tests.",
      },
      keyFeatures: {
        tr: [
          "Rota Komut Motoru & Hibrit AI: Çevrimdışı Türkçe kural motoru, Gemini 3.5 Flash ve çoklu model (Groq, DeepSeek, Ollama) akıllı fallback mimarisi",
          "İşlem Önizleme & Atomik Onay: Bileşik harcama, stok ve takvim komutlarını tek seferde ayrıştırıp önizleyen ve 100 adımlık geri alma (Undo) sunan güvenli işlem akışı",
          "Hepsi-Bir-Arada Hayat Dashboard'u: Finans & bütçe durumu, yaklaşan faturalar, kiler/market ihtiyaçları, alışkanlıklar ve araç bakım telemetrisi",
          "Kişisel Veri Bağımsızlığı & Bulut Kasası: Firebase Secret Manager ile API kasası, App Check (reCAPTCHA Enterprise), tam JSON yedekleme ve ICS takvim senkronizasyonu",
        ],
        en: [
          "Rota Engine & Hybrid AI: Zero-cost offline Turkish NLP, Gemini 3.5 Flash, and multi-model fallback (Groq, DeepSeek, Ollama) with smart retry",
          "Action Preview & Atomic Undo: Pre-flight validation for complex multi-intent commands, atomic execution, and 100-level instant rollback",
          "Unified Life Dashboard: budget status, upcoming bills, pantry inventory, habit tracking, and vehicle maintenance in one view",
          "Your Data Stays Yours & Cloud Vault: API protection via Google Cloud Secret Manager, Firebase App Check, full JSON backup/restore, and ICS calendar sync",
        ],
      },
      metrics: [
        { label: { tr: "Model Mimarisi", en: "AI Architecture" }, value: { tr: "Hibrit / 5+ LLM", en: "Hybrid / 5+ LLMs" } },
        { label: { tr: "Geri Alma / Güvenlik", en: "Rollback & Safety" }, value: { tr: "100 İşlem (Undo)", en: "100-Step Undo" } },
        { label: { tr: "Otomasyon Testi", en: "Automated Tests" }, value: "114/114" },
      ],
    },
  },
  {
    id: "squadvoice",
    title: "SquadVoice: P2P Voice & Game Streaming Hub",
    year: "2026",
    category: {
      tr: "Gerçek Zamanlı İletişim / Çoklu Platform",
      en: "Real-Time Communication / Cross-Platform",
    },
    role: {
      tr: "Kişisel proje",
      en: "Personal project",
    },
    tagline: {
      tr: "Arkadaş grupları için sunucusuz, P2P WebRTC tabanlı sesli sohbet, 1080p60 oyun yayını ve yazılı sohbet",
      en: "Serverless P2P WebRTC voice chat, 1080p60 game streaming and text chat for friend groups",
    },
    description: {
      tr: "Oda başına 10 kişilik, Discord benzeri ama tamamen kendine ait iletişim uygulaması. Ses ve görüntü bir sunucudan geçmeden P2P WebRTC ile akar; yapay zekâ destekli gürültü engelleme, 1080p60 ekran yayını, soundboard ve DM'ler tek bir React kod tabanıyla Web, Windows, macOS, Android ve iOS'ta çalışır.",
      en: "A self-owned, Discord-style communication app for squads of up to 10. Audio and video flow peer-to-peer over WebRTC with no media server; AI noise suppression, 1080p60 screen sharing, a soundboard and DMs ship from a single React codebase to Web, Windows, macOS, Android and iOS.",
    },
    technologies: [
      "React 19",
      "TypeScript",
      "WebRTC (P2P Mesh)",
      "Firebase Auth & RTDB",
      "Tauri 2",
      "Capacitor 8",
      "Rust (Axum + SQLite)",
      "AudioWorklet (WASM)",
      "Cloudflare TURN",
      "Playwright",
    ],
    liveUrl: "https://squadvoice-kaandnz.web.app/",
    githubUrl: "https://github.com/Kaandnz/SquadVoice",
    accentColor: "#6366f1",
    image: "/images/projects/squadvoice.webp",
    caseStudy: {
      overview: {
        tr: "Küçük arkadaş gruplarının oyun oynarken veya takılırken kullanacağı; davetle girilen, sıfır maliyetli ve tamamen kendi kontrolündeki sesli/görüntülü iletişim platformu. Firebase yalnızca oturum açma, sohbet ve WebRTC sinyalleşmesi için kullanılır; medya hiçbir sunucuya uğramaz.",
        en: "A zero-cost, invite-only voice and video platform for small friend groups to use while gaming or hanging out. Firebase only handles auth, chat and WebRTC signaling, so media never touches a server.",
      },
      challenge: {
        tr: "Mobil veri ve CGNAT altında bile kopmayan, düşük gecikmeli ve yüksek kaliteli bir P2P ses ağı kurmak; oyun penceresi öndeyken çalışan global Bas-Konuş, Android'de arka planda kesintisiz ses ve WebView'in desteklemediği ekran paylaşımını tek bir kod tabanından çözmek.",
        en: "Building a low-latency, high-fidelity P2P audio mesh that survives mobile data and CGNAT, while delivering in-game global push-to-talk, uninterrupted background audio on Android, and screen sharing where the WebView has no getDisplayMedia, all from one codebase.",
      },
      solution: {
        tr: "Perfect negotiation, otomatik ICE restart ve geri çekilmeli yeniden teklif ile kendini onaran bir WebRTC mesh kuruldu; SDP Opus için (FEC, DTX, stereo) ayarlandı. RNNoise, GTCRN ve DeepFilterNet 3 gürültü engelleme WASM olarak AudioWorklet içinde çalışıyor. Masaüstünde Tauri global kısayolları, Android'de yerel Java Foreground ve MediaProjection servisleri, mobil veride Cloudflare TURN yedeği devrede.",
        en: "A self-healing WebRTC mesh with perfect negotiation, automatic ICE restarts and back-off re-offers, plus Opus-tuned SDP (FEC, DTX, stereo). RNNoise, GTCRN and DeepFilterNet 3 noise suppression run as WASM inside AudioWorklets. Tauri global shortcuts on desktop, native Java Foreground and MediaProjection services on Android, and a Cloudflare TURN fallback for mobile data.",
      },
      keyFeatures: {
        tr: [
          "P2P WebRTC mesh: oda başına 10 kişi, kişi başı ping / paket kaybı / jitter grafiği ve P2P–TURN bağlantı göstergesi",
          "5 modlu gürültü azaltma (RNNoise, GTCRN, DeepFilterNet 3), otomatik gürültü kapısı ve %0–%200 kişisel ses seviyesi",
          "720p30 – 1080p60 ekran ve oyun yayını, sistem sesi paylaşımı, 1×–4× yakınlaştırma ve soundboard",
          "Markdown sohbet, DM, tepkiler ve okundu bilgisi; Web, Windows, macOS, Android ve iOS (PWA) desteği",
        ],
        en: [
          "P2P WebRTC mesh for 10 per room, with per-peer ping / loss / jitter graphs and a P2P vs. TURN indicator",
          "5-mode noise suppression (RNNoise, GTCRN, DeepFilterNet 3), adaptive noise gate and 0–200% per-user volume",
          "720p30 – 1080p60 screen and game streaming with system audio, 1×–4× zoom and a shared soundboard",
          "Markdown chat, DMs, reactions and read receipts across Web, Windows, macOS, Android and iOS (PWA)",
        ],
      },
      metrics: [
        { label: { tr: "Medya Mimarisi", en: "Media Topology" }, value: "P2P WebRTC" },
        { label: { tr: "Yayın Kalitesi", en: "Stream Quality" }, value: "1080p60" },
        { label: { tr: "Platform", en: "Platforms" }, value: { tr: "5 Platform", en: "5 Platforms" } },
        { label: { tr: "Altyapı Maliyeti", en: "Infra Cost" }, value: { tr: "0 ₺", en: "$0" } },
      ],
    },
  },
  {
    id: "sql-game",
    title: "SQL Quest: Data Detective",
    year: "2025",
    category: {
      tr: "İnteraktif Web / Eğitici Oyun",
      en: "Interactive Web / EdTech Game",
    },
    role: {
      tr: "Kişisel proje",
      en: "Personal project",
    },
    tagline: {
      tr: "İnteraktif Adli Bilişim & Oyunlaştırılmış SQL Eğitim Platformu",
      en: "Interactive Gamified SQL & Forensic Database Learning Platform",
    },
    description: {
      tr: "Tarayıcı üzerinde WebAssembly (WASM) ile çalışan, gerçekçi kurumsal vaka dosyaları ve adli soruşturmalar üzerinde SELECT'ten Window Functions ve Recursive CTE'lere kadar sorgular yazarak uzmanlaşmayı sağlayan interaktif oyun.",
      en: "A browser-based investigative forensics game powered by WebAssembly (WASM). Players solve corporate forensic dossiers by executing queries ranging from foundational SELECT to advanced Window Functions and Recursive CTEs.",
    },
    technologies: ["React", "TypeScript", "SQL (WASM)", "Tailwind CSS", "Firebase", "Web Audio API"],
    liveUrl: "https://learn-sql-game.web.app/",
    githubUrl: "https://github.com/Kaandnz/SQL-Game",
    accentColor: "#f59e0b",
    image: "/images/projects/sql-game.webp",
    caseStudy: {
      overview: {
        tr: "SQL'i adli vaka senaryoları üzerinden pratik ederek öğreten, yazılımcılar ve veri analistleri için bir tarayıcı oyunu.",
        en: "A browser game for developers and analysts that teaches SQL through practice on forensic case files, built around realistic fictional cyber crime and financial auditing scenarios.",
      },
      challenge: {
        tr: "Herhangi bir backend sunucusuna bağımlı olmadan SQL sorgu motorunu tarayıcı içinde (WASM) güvenli biçimde çalıştırmak ve arayüzü akıcı tutmak.",
        en: "Running the whole SQL query engine safely inside the browser (WASM), with no backend server, while keeping the interface smooth.",
      },
      solution: {
        tr: "WebAssembly tabanlı SQLite motoru entegre edildi. Web Worker ile sorgu çalıştırma ana iş parçacığından ayrıldı; böylece UI kilitlenmeden anlık doğrulama sağlandı.",
        en: "Integrated a WebAssembly SQLite engine and moved query execution off the main thread into a Web Worker, so answers are checked instantly without freezing the UI.",
      },
      keyFeatures: {
        tr: [
          "WASM tabanlı sıfır sunucu maliyetli yerel sorgu çalıştırma",
          "Adli vaka dosyaları: Kara para aklama, sahte siparişler, vergi kaçırma",
          "Kapsamlı beceri ağacı (Skill Tree) ve seviye ilerleme sistemi",
          "Özel retro terminal arayüzü ve interaktif ses efektleri",
        ],
        en: [
          "Local WASM query execution with no server cost",
          "Forensic case files: money laundering, fake orders, tax evasion",
          "Skill tree and level progression system",
          "Custom retro terminal UI with interactive sound effects",
        ],
      },
      metrics: [
        { label: { tr: "Sorgu Motoru", en: "Query Engine" }, value: { tr: "SQLite (WASM) · Web Worker", en: "SQLite (WASM) · Web Worker" } },
        { label: { tr: "Adli Vaka Dosyaları", en: "Forensic Cases" }, value: { tr: "30+ Vaka", en: "30+ Cases" } },
        { label: { tr: "Mimari", en: "Architecture" }, value: { tr: "Tarayıcıda, Sunucusuz", en: "In-Browser, No Backend" } },
      ],
    },
  },
  {
    id: "elementa",
    title: "Elementa: Periodic Laboratory",
    year: "2025",
    category: {
      tr: "İnteraktif Web / Bilimsel Laboratuvar",
      en: "Interactive Web / Scientific Lab",
    },
    role: {
      tr: "Kişisel proje",
      en: "Personal project",
    },
    tagline: {
      tr: "118 Element İçin Kuantum Orbitalleri, Termodinamik Faz Simülasyonu ve Isı Haritası",
      en: "Quantum Orbitals, Thermodynamic Phase Simulation & Heatmaps for All 118 Elements",
    },
    description: {
      tr: "118 IUPAC kimyasal elementinin tamamını kuantum elektron dizilimleri, 0 K – 6000 K termodinamik faz simülasyonları, periyodik eğilim ısı haritaları ve çoklu element karşılaştırma matrisi ile sunan etkileşimli periyodik tablo.",
      en: "An interactive periodic table presenting all 118 IUPAC chemical elements with quantum electron configurations, 0 K – 6000 K thermodynamic phase simulations, periodic trend heatmaps, and side-by-side element comparison matrices.",
    },
    technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Firebase", "Web Audio API"],
    liveUrl: "https://periodictableviewer.web.app",
    githubUrl: "https://github.com/Kaandnz/PeriodicTable",
    accentColor: "#06b6d4",
    image: "/images/projects/elementa.webp",
    caseStudy: {
      overview: {
        tr: "Geleneksel statik periyodik tabloları modern reaktif web mimarisiyle yeniden tanımlayarak; araştırmacılar, kimyagerler ve öğrenciler için 118 elementin mikroskobik kuantum özelliklerinden makroskopik termodinamik faz dönüşümlerine kadar tüm bilimsel verileri anlık simülasyonlarla sunan etkileşimli bir dijital laboratuvar inşa etmek.",
        en: "Turns a static periodic table into an interactive digital lab where students and researchers can explore every element's data, from quantum electron shells to thermodynamic phase changes, through live simulations.",
      },
      challenge: {
        tr: "118 elemente ait 18+ fiziksel/kimyasal parametreyi, 0 K'den 6000 K'ye kadar sürekli sıcaklık değişiminde katı/sıvı/gaz faz dönüşümlerini ve Hund kuralına uygun kuantum orbital spin dağılımlarını istemci tarafında akıcı biçimde hesaplayıp görselleştirmek.",
        en: "Calculating and visualizing 18+ physical and chemical parameters for 118 elements, solid/liquid/gas phase changes across a continuous 0 K – 6000 K range, and Hund's-rule orbital spin distributions smoothly on the client side.",
      },
      solution: {
        tr: "Next.js 15 ve React 19 ile reaktif durum mimarisi kurgulandı. Kuantum elektron dizilimi ve termodinamik faz motoru saf TypeScript algoritmalarıyla yazıldı; ısı haritası filtreleri ve karşılaştırma matrisleri ile birlikte statik site olarak Firebase Hosting üzerinden sunuldu.",
        en: "Built a reactive state architecture with Next.js 15 and React 19. The electron configuration and thermodynamic phase engines are plain TypeScript, and the app, with its heatmap filters and comparison matrices, is served as a static site from Firebase Hosting.",
      },
      keyFeatures: {
        tr: [
          "118 IUPAC elementi, 10 kimyasal kategori ve s/p/d/f kuantum blok ayrımı",
          "0 K – 6000 K gerçek zamanlı termodinamik faz dönüşüm simülasyonu ve telemetri sayaçları",
          "Pauling elektronegatifliği, iyonlaşma enerjisi ve atomik yarıçap için periyodik trend ısı haritası",
          "4 elemente kadar diferansiyel kuantum ve fiziksel özellik karşılaştırma matrisi",
        ],
        en: [
          "Complete 118 IUPAC elements with 10 chemical categories and s/p/d/f quantum block separation",
          "Real-time thermodynamic phase simulation (0 K – 6000 K) with dynamic phase percentage telemetry",
          "Empirical periodic trends heatmap for electronegativity, ionization energy, and atomic radius",
          "Side-by-side differential quantum and thermodynamic comparison matrix for up to 4 elements",
        ],
      },
      metrics: [
        { label: { tr: "Element Sayısı", en: "IUPAC Elements" }, value: "118" },
        { label: { tr: "Faz Simülasyonu", en: "Phase Range" }, value: "0K - 6000K" },
        { label: { tr: "Karşılaştırma", en: "Comparison" }, value: { tr: "4 Elemente Kadar", en: "Up to 4 Elements" } },
        { label: { tr: "Mimari", en: "Architecture" }, value: { tr: "Statik · Firebase Hosting", en: "Static · Firebase Hosting" } },
      ],
    },
  },
  {
    id: "dnz-market",
    title: "DNZ Market: Barcode Pricing & Stock PWA",
    year: "2026",
    category: {
      tr: "Mobil PWA / Perakende",
      en: "Mobile PWA / Retail",
    },
    role: {
      tr: "Kişisel proje",
      en: "Personal project",
    },
    tagline: {
      tr: "Telefon kamerasıyla barkod okutup anında fiyat gösteren, fiyat değiştiren ve satış yapan, çevrimdışı çalışan bakkal uygulaması",
      en: "An offline-first grocery PWA that scans barcodes with the phone camera to check, change and sell at the right price",
    },
    description: {
      tr: "Mahalle bakkalı için geliştirilen barkodlu fiyat takip uygulaması (PWA). Telefonla barkod okutulur, fiyat anında görünür; aynı ekrandan fiyat değiştirme, mal kabul, satış sepeti, stok sayımı, toplu zam ve raf etiketi basımı yapılır. Kayıtlı olmayan ürünlerin adı otomatik bulunur, internet kesildiğinde de çalışır.",
      en: "A barcode-driven pricing PWA built for a neighbourhood grocery. Scan with the phone camera and the price appears instantly; the same screen handles price changes, goods receiving, a sale cart, stock counts, bulk price increases and printable shelf labels. Unknown products are named automatically, and everything keeps working offline.",
    },
    technologies: [
      "React 19",
      "TypeScript",
      "Vite",
      "PWA",
      "Firebase Auth & Firestore",
      "Barcode Detection API",
      "ZXing (WASM)",
      "Tailwind CSS",
      "Vitest",
      "GitHub Actions",
    ],
    liveUrl: "https://dnzbarcode.web.app",
    githubUrl: "https://github.com/Kaandnz/DNZ-Market",
    accentColor: "#10b981",
    image: "/images/projects/dnz-market.webp",
    caseStudy: {
      overview: {
        tr: "Kâğıt fiyat listeleri ve ezberle yürüyen bir bakkalın fiyat, stok ve satış işlerini ek donanım gerektirmeden, yalnızca telefon kamerasıyla yönetilebilir hale getiren çok kullanıcılı market uygulaması.",
        en: "A multi-user store app that moves a grocery's paper price lists and memory-based pricing onto the phone camera, with no extra hardware required.",
      },
      challenge: {
        tr: "Android ve iPhone'un farklı barkod okuma yetenekleriyle tutarlı ve hızlı okuma sağlamak; dükkânda internet kesildiğinde bile fiyat görüp satış yapabilmek; çalışanların fiyat değiştirmesini yetkiyle sınırlamak ve parayı kuruş hassasiyetinde, yuvarlama hatası olmadan işlemek.",
        en: "Delivering fast, consistent scanning across Android's native detector and iPhone's lack of one, keeping price checks and sales working when the shop's internet drops, limiting price edits by role, and handling money to the kuruş without rounding errors.",
      },
      solution: {
        tr: "Android'de tarayıcının yerel BarcodeDetector'ını, iPhone'da ZXing WebAssembly'yi kullanan hibrit bir tarayıcı yazıldı (USB/Bluetooth barkod tabancası da çalışır). Firestore çevrimdışı önbelleği internet gelince eşitleniyor, yetkiler Firestore güvenlik kurallarıyla sunucu tarafında zorlanıyor ve tüm fiyatlar kuruş cinsinden tam sayı tutuluyor. Her push'ta tip kontrolü, birim testleri ve güvenlik kuralı testleri geçmeden yayın yapılmıyor.",
        en: "A hybrid scanner uses the browser's native BarcodeDetector on Android and ZXing WebAssembly on iPhone (USB/Bluetooth scanner guns work too). Firestore offline persistence syncs when the connection returns, permissions are enforced server-side by Firestore security rules, and every price is stored as integer kuruş. Each push must pass type checks, unit tests and security-rule tests before it deploys.",
      },
      keyFeatures: {
        tr: [
          "4 modlu tarama ekranı: Fiyat Gör, Değiştir, Mal Kabul ve sepetli Satış",
          "Kayıtsız ürünün adını otomatik bulma, internette fiyat arama ve sesle ürün arama",
          "Stok sayımı, yüzde veya tutar bazlı toplu zam, fiyat geçmişi ve Excel/CSV yedekleme",
          "Barkodlu raf etiketi basımı, çok kullanıcılı market yönetimi ve rol bazlı yetkiler",
        ],
        en: [
          "Four-mode scan screen: Price Check, Change Price, Goods Receiving and a cart-based Sale mode",
          "Automatic naming of unknown products, web price lookup and voice product search",
          "Stock counts, percentage or fixed-amount bulk price increases, price history and Excel/CSV backup",
          "Printable barcode shelf labels, multi-user store management and role-based permissions",
        ],
      },
      metrics: [
        { label: { tr: "Barkod Motoru", en: "Scanner" }, value: { tr: "Yerel + ZXing WASM", en: "Native + ZXing WASM" } },
        { label: { tr: "Bağlantı", en: "Connectivity" }, value: { tr: "Çevrimdışı Öncelikli", en: "Offline-First" } },
        { label: { tr: "Para Hassasiyeti", en: "Money Precision" }, value: { tr: "Kuruş (Tam Sayı)", en: "Integer Kuruş" } },
      ],
    },
  },
  {
    id: "koi-theme",
    title: "Koi Theme: Live Pond Wallpaper for macOS",
    year: "2026",
    category: {
      tr: "macOS Uygulaması / WebGL",
      en: "macOS App / WebGL",
    },
    role: {
      tr: "Kişisel proje",
      en: "Personal project",
    },
    tagline: {
      tr: "Mac masaüstünü süzülen koi balıkları, ışık huzmeleri, yağmur ve mevsimlerle yaşayan bir gölete çeviren canlı duvar kâğıdı",
      en: "A live wallpaper that turns your Mac desktop into a living pond of gliding koi, light beams, rain and seasons",
    },
    description: {
      tr: "Swift ve WKWebView üzerinde tek geçişli WebGL ile çizilen, tamamen çevrimdışı çalışan canlı koi göleti. 10 tema, 8 hazır görünüm, 5 performans modu, çoklu ekran desteği, beslendikleri yeri ve saati hatırlayan balıklar ve 12 dil; hesap, reklam, ağ isteği veya telemetri yok.",
      en: "A fully offline live koi pond rendered in a single WebGL pass on top of Swift and WKWebView. 10 themes, 8 ready-made looks, 5 performance modes, multi-display support, fish that remember where and when you feed them, and 12 languages, with no accounts, ads, network requests or telemetry.",
    },
    technologies: ["Swift", "AppKit", "SwiftUI", "WKWebView", "WebGL", "JavaScript", "Node.js Tests"],
    githubUrl: "https://github.com/Kaandnz/Koi-Theme-Mac",
    accentColor: "#14b8a6",
    image: "/images/projects/koi-theme.webp",
    caseStudy: {
      overview: {
        tr: "Masaüstü duvar kâğıdını süzülen koi balıkları, nilüferler, yusufçuklar, bir kurbağa, yağmur ve gün boyu değişen ışıkla yaşayan bir gölete çeviren; kodu, çizimleri ve ikonu sıfırdan yazılmış bir macOS uygulaması.",
        en: "A macOS app that turns the desktop wallpaper into a calm, living pond (gliding koi, lily pads, dragonflies, a frog, rain and light that shifts through the day) with all code, artwork and icon written from scratch.",
      },
      challenge: {
        tr: "Masaüstünde sürekli çalışan bir animasyonu pili ve GPU'yu yormadan sürdürmek; her balığı doğal hareket ettirmek; çoklu ekran, Spaces ve kapanan pencerelerde doğru davranmak ve tıklamaları masaüstü dosyalarından çalmamak.",
        en: "Running an always-on desktop animation without draining battery or GPU, giving every fish natural motion, behaving correctly across multiple displays, Spaces and covered screens, and never stealing clicks from desktop files.",
      },
      solution: {
        tr: "Davranış, durumu birebir dışa/içe aktarılabilen deterministik bir simülasyon çekirdeğine (pond-core.js) ayrıldı. Çizim tek geçişli WebGL'e taşındı: koi'ler omurga boyunca CPU'da piksel piksel tek bir atlasa rasterize ediliyor, geri kalan her şey ortak sprite atlasından toplu çiziliyor. Swift tarafındaki görünürlük kapısı kapalı ekranları duraklatıp boştakileri yavaşlatarak tek ekranda GPU payını ≈%6'ya indiriyor.",
        en: "Behaviour lives in a deterministic simulation core (pond-core.js) whose state can be exported and restored exactly. Drawing is a single WebGL pass: koi are rasterised pixel by pixel along their spines into one atlas, and everything else is batched from a shared sprite atlas. A Swift visibility gate pauses covered displays and slows idle ones, keeping GPU share around 6% on a single display.",
      },
      keyFeatures: {
        tr: [
          "12 eklemli omurgayla süzülme–atılma ritminde yüzen koi'ler, büyük balıklardan kaçan küçük balık sürüsü ve günler içinde büyüyen yavrular",
          "10 tema (gün saatine göre değişen ve parlayan temalar), 8 hazır görünüm, yağmur, sakura, sonbahar yaprakları ve kar",
          "Tıklayınca balık çağırma, ⌥ + tık ile yem atma ve ekran başına yer/saat bazlı beslenme hafızası",
          "Ekran başına ayrı gölet, ekran koruyucu, foto/GIF yakalama, menü çubuğu kontrolleri ve 12 dil (sağdan sola dahil)",
        ],
        en: [
          "Koi swimming on a 12-joint spine with a glide-and-burst rhythm, a shoal that flees the big fish, and babies that grow up over days",
          "10 themes (time-of-day and glowing themes), 8 ready-made looks, rain, sakura, autumn leaves and snow",
          "Click to call the fish, ⌥ + click to feed, and a per-display memory of where and when you feed them",
          "A separate pond per display, screen saver, photo/GIF capture, menu bar controls and 12 languages (incl. right-to-left)",
        ],
      },
      metrics: [
        { label: { tr: "GPU Payı (1 Ekran)", en: "GPU Share (1 Display)" }, value: { tr: "≈ %6", en: "≈ 6%" } },
        { label: { tr: "Render", en: "Rendering" }, value: { tr: "Tek Geçiş WebGL", en: "Single-Pass WebGL" } },
        { label: { tr: "Tema & Dil", en: "Themes & Languages" }, value: "10 · 12" },
        { label: { tr: "Gizlilik", en: "Privacy" }, value: { tr: "%100 Çevrimdışı", en: "100% Offline" } },
      ],
    },
  },
  {
    id: "nodoomscroll",
    title: "NoDoomScroll: Anti-Doomscroll Guard for Android",
    year: "2026",
    category: {
      tr: "Android Uygulaması / Dijital Sağlık",
      en: "Android App / Digital Wellbeing",
    },
    role: {
      tr: "Kişisel proje",
      en: "Personal project",
    },
    tagline: {
      tr: "YouTube Shorts, Instagram Reels, TikTok, Facebook Reels ve X Shorts akışlarını algılayıp sonsuz kaydırma döngüsünü kesen native Android uygulaması",
      en: "A native Android app that detects YouTube Shorts, Instagram Reels, TikTok, Facebook Reels and X Shorts feeds and breaks the infinite-scroll loop",
    },
    description: {
      tr: "Sosyal medyayı tamamen yasaklamak yerine, yalnızca kısa video akışına girildiği anda geri ya da ana ekrana yönlendirerek sürtünme yaratan, Kotlin ve Jetpack Compose ile yazılmış hafif bir anti-doomscroll uygulaması. Normal videolar, ana akışlar ve DM'ler açık kalır; ağ izni yoktur, veri toplamaz.",
      en: "A lightweight anti-doomscroll app written in Kotlin and Jetpack Compose. Instead of banning social media outright, it adds friction only when a short-video feed opens, sending you back or home, while regular videos, home feeds and DMs stay untouched. No network permission, no data collection.",
    },
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Material 3",
      "Accessibility Service API",
      "Coroutines",
      "JUnit",
      "GitHub Actions",
      "Firebase App Distribution",
    ],
    githubUrl: "https://github.com/Kaandnz/NoDoomScroll",
    accentColor: "#0ea5e9",
    image: "/images/projects/nodoomscroll.webp",
    caseStudy: {
      overview: {
        tr: "Kısa video platformlarının farkında olmadan saatler tüketen sonsuz kaydırma akışlarına karşı, uygulamaların kendisini engellemeden yalnızca bağımlılık yaratan akışı hedefleyen bir dijital sağlık aracı.",
        en: "A digital-wellbeing tool that targets only the addictive short-video feed inside social apps, rather than blocking the apps themselves.",
      },
      challenge: {
        tr: "Her platformun Shorts/Reels oynatıcısını, uygulamalar güncellendikçe değişen erişilebilirlik ağacından güvenilir biçimde ayırt etmek; özellikle Facebook'ta ana akıştaki Reels raflarını ve normal gönderileri yanlışlıkla engellememek ve arka arkaya tetiklenen geri atma döngülerini önlemek.",
        en: "Reliably telling each platform's Shorts/Reels player apart in an accessibility tree that shifts with every app update (especially on Facebook, without hitting home-feed Reels shelves or normal posts) and preventing repeated back-navigation loops.",
      },
      solution: {
        tr: "Android'den tamamen bağımsız, saf Kotlin bir kural ve analiz motoru (DoomScrollRuleEngine, FacebookAccessibilityAnalyzer) yazıldı; view ID, Activity sınıfı, seçili sekme, dikey aksiyon çubuğu geometrisi ve tam ekran oynatıcı etiketlerinden gelen sinyaller birleştiriliyor. Platform bazlı 1200 ms'lik CooldownGate döngüleri engelliyor, kaydırma freni ek izin gerektirmeyen bir erişilebilirlik overlay'iyle mola ekranı gösteriyor. Motor JVM birim testleriyle doğrulanıyor.",
        en: "A pure-Kotlin rule and analysis engine (DoomScrollRuleEngine, FacebookAccessibilityAnalyzer) with no Android dependencies fuses signals from view IDs, Activity classes, selected tabs, vertical action-bar geometry and full-screen player labels. A per-platform 1200 ms CooldownGate stops loops, and the scroll brake shows a break screen through an accessibility overlay that needs no extra permission. The engine is covered by JVM unit tests.",
      },
      keyFeatures: {
        tr: [
          "5 platformda kısa video engelleme: YouTube Shorts, Instagram Reels, TikTok, Facebook Reels ve X Shorts",
          "Sıkı / Dengeli / Esnek eşikli Sonsuz Kaydırma Freni ve 5 saniyelik nefes molası ekranı",
          "Cihaz içinde tutulan, gece yarısı otomatik sıfırlanan günlük koruma özeti",
          "Gizlilik odaklı tasarım: yalnızca hedef paketleri dinler, ağ izni ve veri toplama yok; Logcat kalibrasyon modu",
        ],
        en: [
          "Short-video blocking across 5 platforms: YouTube Shorts, Instagram Reels, TikTok, Facebook Reels and X Shorts",
          "Infinite-scroll brake with Strict / Balanced / Relaxed thresholds and a 5-second breathing break",
          "On-device daily protection summary that resets automatically at midnight",
          "Privacy-first: listens only to target packages, no network permission or data collection; Logcat calibration mode",
        ],
      },
      metrics: [
        { label: { tr: "Kapsanan Platform", en: "Platforms Covered" }, value: "5" },
        { label: { tr: "Döngü Koruması", en: "Loop Guard" }, value: "1200 ms Cooldown" },
        { label: { tr: "Ağ İzni", en: "Network Access" }, value: { tr: "Yok", en: "None" } },
      ],
    },
  },
  {
    id: "sql-formatter",
    title: "SQL List Formatter",
    year: "2025",
    category: {
      tr: "Geliştirici Aracı / Veritabanı",
      en: "Developer Tool / Database",
    },
    role: {
      tr: "Kişisel proje",
      en: "Personal project",
    },
    tagline: {
      tr: "SQL Toplu Liste & IN-Cümlesi Dönüştürücü Araç",
      en: "SQL Batch & IN-Clause Query Transformation Tool",
    },
    description: {
      tr: "Ham pano verilerini, Excel sütunlarını ve log listelerini anında temiz, tek tırnaklı ve toplu SQL IN (...) bloklarına dönüştüren pratik bir macOS masaüstü aracı.",
      en: "macOS desktop utility converting raw clipboard data, Excel columns, and unformatted log lines into sanitized, quoted SQL IN (...) query clauses with custom delimiters and batch splitting.",
    },
    technologies: ["Python", "CustomTkinter", "Tkinter", "PyInstaller", "macOS (Apple Silicon)", "SQL", "unittest"],
    githubUrl: "https://github.com/Kaandnz/Sql-List-Formatter",
    accentColor: "#2563eb",
    image: "/images/projects/sql-formatter.webp",
    caseStudy: {
      overview: {
        tr: "Yazılımcıların ve veritabanı uzmanlarının günlük işlerinde en sık karşılaştığı 'Excel'den gelen yüzlerce ID'yi SQL sorgusuna çevirme' ameleliğini tek tıkla çözen minimalist araç.",
        en: "A focused developer productivity tool designed to eliminate the repetitive friction of transforming raw spreadsheet IDs into formatted SQL IN-clauses.",
      },
      challenge: {
        tr: "Büyük veri listelerinde (10.000+ satır) bellek tüketimini düşük tutmak ve tırnak temizliği ile boşlukları anında işlemek.",
        en: "Sanitizing, deduping, and splitting large datasets (10,000+ rows) without memory spikes while supporting customizable batching parameters.",
      },
      solution: {
        tr: "Python ve CustomTkinter ile yazılmış macOS masaüstü aracı; listeyi temizler, tekrarları atar, tırnak içine alır, 1000'lik parçalara böler ve sonucu tek tıkla panoya kopyalar.",
        en: "A Python and CustomTkinter macOS desktop app that cleans the list, removes duplicates, adds quotes, splits it into 1000-item batches and copies the result to the clipboard in one click.",
      },
      keyFeatures: {
        tr: [
          "Tek tıkla otomatik tırnak içine alma ve virgülle ayırma",
          "SQL Server 1000'lik IN limiti için otomatik parça bölme (Batching)",
          "Boşlukları, yinelenen kayıtları ve geçersiz karakterleri filtreleme",
          "Hafif, taşınabilir ve anında çalışan modern arayüz",
        ],
        en: [
          "Instant single/double quote wrapping and comma separation",
          "Automated batch chunking to comply with SQL Server 1000-item IN limits",
          "Whitespace trimming, deduplication, and invalid token sanitization",
          "Lightweight, keyboard-friendly workflow with instant copy",
        ],
      },
      metrics: [
        { label: { tr: "Teknoloji", en: "Stack" }, value: "Python · CustomTkinter" },
        { label: { tr: "Toplu Bölme", en: "Batching" }, value: { tr: "1000'lik IN Limiti", en: "1000-Item IN Limit" } },
        { label: { tr: "Platform", en: "Platform" }, value: "macOS (Apple Silicon)" },
      ],
    },
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: "duzey",
    role: {
      tr: "Yazılım Geliştirici",
      en: "Software Developer",
    },
    company: "Düzey",
    period: {
      tr: "Haziran 2025 — Günümüz",
      en: "June 2025 — Present",
    },
    location: {
      tr: "İstanbul, Türkiye",
      en: "Istanbul, Turkey",
    },
    description: {
      tr: "Düzey'de rota optimizasyonu web uygulamaları, kurumsal B2B platformları ve e-ticaret sistemleri üzerinde yazılım geliştiriyor; Angular, Java Spring Boot, PostgreSQL, C# ve ASP.NET Core ile SAP ve Panorama entegrasyonları geliştiriyor.",
      en: "Develops software at Düzey across route optimization web applications, enterprise B2B platforms, and e-commerce systems; builds SAP and Panorama integrations with Angular, Java Spring Boot, PostgreSQL, C#, and ASP.NET Core.",
    },
    achievements: {
      tr: [
        "Angular, Java Spring Boot ve PostgreSQL ile geliştirilen; rota optimizasyonu, harita üzerinden planlama, araç ve sürücü yönetimi sunan web uygulamasının geliştirilmesi; SAP ve Panorama entegrasyonlarıyla dağıtım süreçlerinin yönetimi ve raporlanması.",
        "C# ve ASP.NET Core kullanılarak nopCommerce altyapısı üzerine geliştirilen; sipariş, müşteri, fiyat ve indirim yönetimi ile SAP ve Panorama entegrasyonlarını kapsayan kurumsal B2B platformunun geliştirilmesinde aktif rol.",
        "C# ve ASP.NET Core ile nopCommerce altyapısı üzerinde geliştirilen Düzey e-ticaret projesinde yazılım geliştirme süreçlerine katkı; ödeme sistemleri, Panorama entegrasyonu ve iş ihtiyaçlarına özel e-ticaret modüllerinin geliştirilmesi.",
        "Saha operasyonları için merkezi Onay Yönetim Sistemi RESTful API'lerinin geliştirilmesi; eski iş mantıklarının ve nopCommerce çekirdek modüllerinin refactor edilmesi ve yavaş sorguların optimize edilmesi.",
      ],
      en: [
        "Developed a route optimization web app with map-based planning and vehicle and driver management using Angular, Java Spring Boot, and PostgreSQL; distribution management and reporting through SAP and Panorama integrations.",
        "Active role in building an enterprise B2B platform with C# and ASP.NET Core on nopCommerce, covering order, customer, pricing, and discount management with SAP and Panorama integrations.",
        "Contributed to Düzey's e-commerce platform built with C# and ASP.NET Core on nopCommerce, developing payment systems, Panorama integration, and custom e-commerce modules.",
        "Developed centralized Approval Management RESTful APIs for field operations; refactored legacy business logic and nopCommerce core modules and optimized slow queries.",
      ],
    },
    technologies: [
      ".NET Core",
      "C#",
      "ASP.NET Core",
      "Java Spring Boot",
      "Angular",
      "PostgreSQL",
      "nopCommerce",
      "MS SQL Server",
      "SAP",
      "Panorama",
      "RESTful APIs",
    ],
  },
  {
    id: "dr-turkuvaz",
    role: {
      tr: "Yazılım Geliştirme Stajyeri",
      en: "Software Development Intern",
    },
    company: "D&R (Turkuvaz Medya)",
    period: {
      tr: "Şubat 2025 — Mayıs 2025",
      en: "Feb 2025 — May 2025",
    },
    location: {
      tr: "İstanbul, Türkiye",
      en: "Istanbul, Turkey",
    },
    description: {
      tr: "Hangfire ile SQL Server'dan MongoDB'ye zamanlanmış veri senkronizasyonu kurdu, Jenkins ile CI/CD süreçlerini yapılandırdı ve ELK Stack ile log panoları oluşturdu.",
      en: "Set up scheduled SQL Server to MongoDB data synchronization with Hangfire, configured Jenkins CI/CD to IIS, and built ELK Stack log dashboards.",
    },
    achievements: {
      tr: [
        "Entity Framework Core üzerinden SQL Server'dan MongoDB'ye veri senkronizasyonunu otomatikleştiren zamanlanmış Hangfire job'ları kuruldu.",
        "GitHub'dan IIS sunucusuna dağıtımı otomatikleştiren Jenkins CI/CD iş akışları oluşturuldu.",
        "Sistem loglarını indekslemek için ELK Stack (Elasticsearch, Logstash, Kibana) yapılandırıldı ve hata takibi için Kibana panoları oluşturuldu.",
        "Selenium ile otomatik web test senaryoları ve veri kazıma (web scraping) script'leri yazıldı.",
      ],
      en: [
        "Automated SQL Server to MongoDB data synchronization via Entity Framework Core with scheduled Hangfire jobs.",
        "Set up Jenkins CI/CD workflows that automate deployment from GitHub to IIS Server.",
        "Configured ELK Stack (Elasticsearch, Logstash, Kibana) to index system logs and built Kibana dashboards for error tracking.",
        "Wrote automated web test scenarios and web scraping scripts with Selenium.",
      ],
    },
    technologies: ["Hangfire", ".NET Core", "MongoDB", "MS SQL Server", "Jenkins", "ELK Stack", "Selenium"],
  },
  {
    id: "mugla-it",
    role: {
      tr: "Bilgi İşlem / BT Stajyeri",
      en: "IT Intern",
    },
    company: "Muğla Sıtkı Koçman Üniversitesi",
    period: {
      tr: "Temmuz 2023 — Ağustos 2023",
      en: "July 2023 — Aug 2023",
    },
    location: {
      tr: "Muğla, Türkiye",
      en: "Muğla, Turkey",
    },
    description: {
      tr: "Üniversite BT ekibine ağ, sunucu ve laboratuvar bilgisayarlarının bakımında destek oldu; donanım ve yazılım arızalarını giderdi.",
      en: "Supported the university IT team in maintaining network, server and lab computers; fixed hardware and software issues.",
    },
    achievements: {
      tr: [
        "Ağ anahtarları, sunucu kabinleri ve kampüs içi veri bağlantılarının bakımına destek verildi.",
        "Laboratuvar bilgisayarlarında donanım ve yazılım bakımı yapıldı.",
      ],
      en: [
        "Helped maintain network switches, server cabinets and campus data links.",
        "Carried out hardware and software maintenance on lab computers.",
      ],
    },
    technologies: ["Network Infrastructure", "Server Maintenance", "Troubleshooting", "Hardware Diagnostics"],
  },
];

export const educationData: EducationItem = {
  degree: {
    tr: "Bilişim Sistemleri Mühendisliği (Lisans)",
    en: "Information Systems Engineering (B.Sc.)",
  },
  school: {
    tr: "Muğla Sıtkı Koçman Üniversitesi",
    en: "Muğla Sıtkı Koçman University",
  },
  gpa: "3.13 / 4.0",
  details: {
    tr: "Yazılım mühendisliği, veritabanı sistemleri, ağ mimarisi ve algoritma analizi üzerine kapsamlı mühendislik eğitimi.",
    en: "Engineering curriculum covering software engineering, database systems, network architecture, and algorithm analysis.",
  },
};

export const skillsGrouped: Record<
  string,
  { title: LocalizedString; skills: LocalizedSkill[] }
> = {
  backend: {
    title: { tr: "Arka Uç & Frameworkler", en: "Backend & Frameworks" },
    skills: [
      ".NET Core",
      "C#",
      "ASP.NET Core",
      "Java Spring Boot",
      "Entity Framework Core",
      "RESTful APIs",
      { tr: "Mikroservisler", en: "Microservices" },
      "Rust (Axum, Tokio)",
      "Firebase Cloud Functions",
    ],
  },
  enterprise: {
    title: { tr: "Kurumsal & Entegrasyon", en: "Enterprise & Integrations" },
    skills: [
      { tr: "SAP Entegrasyonu", en: "SAP Integration" },
      { tr: "Panorama Entegrasyonu", en: "Panorama Integration" },
      "nopCommerce",
      { tr: "Rota Optimizasyonu", en: "Route Optimization" },
      { tr: "B2B & E-Ticaret", en: "B2B & E-Commerce" },
      { tr: "Ödeme Sistemleri / POS", en: "Payment Systems / POS" },
    ],
  },
  frontend: {
    title: { tr: "Ön Yüz & Web", en: "Frontend & Web" },
    skills: [
      "Angular",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5 / CSS3",
      "Vite",
      "Framer Motion",
      { tr: "PWA (Çevrimdışı Web Uygulaması)", en: "PWA (Offline-First Web Apps)" },
    ],
  },
  mobile: {
    title: { tr: "Mobil & Masaüstü", en: "Mobile & Desktop" },
    skills: [
      "Kotlin",
      "Jetpack Compose",
      "Material 3",
      "Android Accessibility Service",
      "Swift",
      "SwiftUI",
      "AppKit",
      "Tauri 2",
      "Capacitor",
    ],
  },
  realtime: {
    title: { tr: "Gerçek Zamanlı & Web API'leri", en: "Real-Time & Web Platform" },
    skills: [
      "WebRTC (P2P Mesh)",
      "WebAssembly (WASM)",
      "Web Audio API / AudioWorklet",
      "Web Speech API",
      "WebGL",
      "Barcode Detection API",
    ],
  },
  database: {
    title: { tr: "Veritabanı & Arama Motorları", en: "Databases & Storage" },
    skills: [
      "PostgreSQL",
      "MS SQL Server",
      "MongoDB",
      "Elasticsearch",
      "SQLite",
      "Cloud Firestore",
      "Firebase Realtime Database",
      { tr: "Veritabanı Optimizasyonu", en: "Database Optimization" },
      { tr: "Sorgu Optimizasyonu (Tuning)", en: "SQL Query Tuning" },
    ],
  },
  cloud: {
    title: { tr: "Bulut & Yapay Zekâ", en: "Cloud & AI" },
    skills: [
      "Firebase (Auth, Hosting, App Check)",
      "Google Cloud Secret Manager",
      "Cloudflare TURN",
      "Gemini API",
      { tr: "Çoklu LLM Fallback (Groq, DeepSeek, OpenRouter)", en: "Multi-LLM Fallback (Groq, DeepSeek, OpenRouter)" },
      { tr: "Yerel AI (Ollama, Whisper)", en: "Local AI (Ollama, Whisper)" },
    ],
  },
  devops: {
    title: { tr: "DevOps, CI/CD & İzleme", en: "DevOps & Monitoring" },
    skills: [
      "Jenkins (CI/CD)",
      "GitHub Actions",
      "Docker",
      "ELK Stack (Elasticsearch, Logstash, Kibana)",
      "IIS Server",
      "Firebase App Distribution",
      "Gradle",
      "GitHub",
    ],
  },
  testing: {
    title: { tr: "Test Otomasyonu & Mimarisi", en: "Testing & Architecture" },
    skills: [
      "Selenium WebDriver",
      "NUnit",
      "Vitest",
      { tr: "Playwright (Uçtan Uca)", en: "Playwright (E2E)" },
      "JUnit",
      { tr: "Firebase Emulator & Kural Testleri", en: "Firebase Emulator & Rules Testing" },
      { tr: "Web Kazıma (Scraping)", en: "Web Scraping" },
      { tr: "SOLID Prensipleri", en: "SOLID Principles" },
      { tr: "OOP & Tasarım Kalıpları", en: "OOP & Design Patterns" },
    ],
  },
  tools: {
    title: { tr: "Araçlar & Metodolojiler", en: "Tools & Methodologies" },
    skills: ["Agile / Scrum", "Visual Studio", "SSMS", "JIRA", "Postman", "Cursor", "GitHub Copilot"],
  },
};
