export interface ProjectItem {
  id: string;
  title: string;
  year: string;
  category: { tr: string; en: string };
  role: { tr: string; en: string };
  tagline: { tr: string; en: string };
  description: { tr: string; en: string };
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  accentColor: string;
  image: string;
  caseStudy: {
    overview: { tr: string; en: string };
    challenge: { tr: string; en: string };
    solution: { tr: string; en: string };
    keyFeatures: { tr: string[]; en: string[] };
    metrics: { label: { tr: string; en: string }; value: string }[];
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
  linkedin: "https://linkedin.com/in/kagan-deniz",
  bio: {
    tr: "Java Spring Boot, .NET Core, C# ve modern web teknolojileriyle (Angular, React) ölçeklenebilir kurumsal çözümler, B2B platformları, e-ticaret sistemleri ve rota optimizasyonu altyapıları tasarlayan Full Stack Geliştirici. SAP ve Panorama kurumsal entegrasyonları, nopCommerce e-ticaret mimarileri, PostgreSQL & SQL Server veritabanı optimizasyonları, test otomasyonu (Selenium) ve CI/CD süreçleri (Jenkins) konularında kanıtlanmış tecrübe. Temiz kod, mikroservis mimarileri ve uçtan uca ürün teslimatına odaklanan mühendislik yaklaşımı.",
    en: "Full Stack Developer architecting scalable enterprise solutions, B2B platforms, e-commerce systems, and route optimization infrastructure using Java Spring Boot, .NET Core, C#, and modern web technologies (Angular, React). Proven track record in enterprise SAP and Panorama integrations, nopCommerce platforms, PostgreSQL & SQL Server performance tuning, automated testing (Selenium), and CI/CD pipelines (Jenkins). Focused on clean architecture, microservices, and robust product delivery.",
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
      tr: "Software Developer @ Düzey",
      en: "Software Developer @ Düzey",
    },
    tagline: {
      tr: "C# & ASP.NET Core nopCommerce ile B2B, E-Ticaret ve Ödeme Sistemleri",
      en: "Scalable B2B, E-Commerce & Payment Systems with C# & nopCommerce",
    },
    description: {
      tr: "C# ve ASP.NET Core kullanılarak nopCommerce altyapısı üzerine geliştirilen; sipariş, müşteri, fiyat ve indirim yönetimi ile SAP ve Panorama entegrasyonlarını kapsayan kurumsal B2B platformu ve ödeme sistemleri entegrasyonlu Düzey e-ticaret altyapısı.",
      en: "Enterprise B2B and e-commerce platforms engineered on nopCommerce with C# and ASP.NET Core. Powers end-to-end order processing, customer pricing, tiered discount rules, secure payment gateway integrations, and SAP/Panorama enterprise synchronization.",
    },
    technologies: [".NET Core", "C#", "ASP.NET Core", "nopCommerce", "MS SQL Server", "Payment Systems", "SAP", "Panorama", "RESTful APIs"],
    liveUrl: "https://www.duzeymarket.com/",
    accentColor: "#f59e0b",
    image: "/images/projects/aetheria.svg",
    caseStudy: {
      overview: {
        tr: "Türkiye genelindeki kurumsal bayilerin ve müşterilerin sipariş, dinamik fiyatlandırma, kampanya indirimleri ve güvenli online ödeme süreçlerini kesintisiz yürüten yüksek hacimli B2B ve e-ticaret ekosistemi.",
        en: "Nationwide enterprise B2B and e-commerce ecosystem facilitating streamlined digital ordering, tiered customer pricing, promotional discounts, and payment processing.",
      },
      challenge: {
        tr: "Farklı müşteri segmentlerine özel dinamik fiyat/iskonto matrislerini, karmaşık ödeme sistemlerini ve SAP/Panorama stok-sipariş senkronizasyonunu yüksek eşzamanlılık altında hatasız işletmek.",
        en: "Handling complex customer-specific pricing matrixes, multi-provider payment integrations, and high-concurrency order processing in lockstep with SAP and Panorama.",
      },
      solution: {
        tr: "nopCommerce çekirdeği kurumsal ihtiyaçlara göre özelleştirildi; güvenli ödeme altyapıları, Panorama ve SAP veri hatları bağlandı; Onay Yönetim Sistemi API'leri ile operasyonel süreçler otomatikleştirildi.",
        en: "Engineered bespoke nopCommerce enterprise plugins, integrated multi-tier payment gateways, built robust Panorama and SAP connectors, and deployed centralized Approval Management APIs.",
      },
      keyFeatures: {
        tr: [
          "C# ve ASP.NET Core nopCommerce üzerinde sipariş, müşteri, dinamik fiyat ve indirim yönetimi",
          "Düzey e-ticaret projesinde güvenli ödeme sistemleri, Panorama entegrasyonu ve iş ihtiyaçlarına özel modüller",
          "SAP ve Panorama kurumsal sistemleriyle kesintisiz çift yönlü sipariş ve stok senkronizasyonu",
          "Saha operasyonlarını hızlandıran merkezi Onay Yönetim Sistemi RESTful API'leri",
        ],
        en: [
          "Comprehensive order, customer tier, dynamic pricing, and discount rule management on nopCommerce",
          "Secure payment gateway integration, Panorama synchronization, and tailored enterprise e-commerce modules",
          "Seamless bidirectional order and inventory synchronization with SAP and Panorama",
          "Centralized Approval Management REST API suite automating field workflow approvals",
        ],
      },
      metrics: [
        { label: { tr: "Mimari", en: "Architecture" }, value: "nopCommerce .NET" },
        { label: { tr: "Entegrasyon", en: "Enterprise Sync" }, value: "SAP & Panorama" },
        { label: { tr: "Ödeme Altyapısı", en: "Payment Gateways" }, value: "3D Secure / POS" },
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
      tr: "Software Developer @ Düzey",
      en: "Software Developer @ Düzey",
    },
    tagline: {
      tr: "Angular & Java Spring Boot ile Rota Optimizasyonu ve Harita Planlama",
      en: "Map-Based Route Optimization & Fleet Dispatch with Spring Boot & Angular",
    },
    description: {
      tr: "Angular, Java Spring Boot ve PostgreSQL ile geliştirilen; rota optimizasyonu, harita üzerinden planlama, araç ve sürücü yönetimi sunan web uygulaması. SAP ve Panorama entegrasyonlarıyla dağıtım süreçlerinin yönetimini ve raporlanmasını sağlar.",
      en: "Enterprise fleet logistics and route optimization web application engineered with Angular, Java Spring Boot, and PostgreSQL. Features interactive map-based dispatch, vehicle and driver management, and automated distribution tracking via SAP and Panorama integrations.",
    },
    technologies: ["Java Spring Boot", "Angular", "PostgreSQL", "SAP Integration", "Panorama", "RESTful APIs", "Docker"],
    liveUrl: "https://duzey.com.tr",
    accentColor: "#06b6d4",
    image: "/images/projects/chronos.svg",
    caseStudy: {
      overview: {
        tr: "Türkiye genelindeki dağıtım filolarının rota planlamasını, harita üzerinden araç ve sürücü koordinasyonunu ve sevkiyat verimliliğini gerçek zamanlı yöneten kurumsal web platformu.",
        en: "High-throughput dispatch platform managing nationwide distribution routes, interactive map planning, driver-vehicle assignments, and operational delivery metrics in real time.",
      },
      challenge: {
        tr: "Yüzlerce dağıtım aracının değişken teslimat noktalarını, harita üzerinde anlık mesafe ve operasyonel kısıtlarla optimize ederek SAP ve Panorama ile gecikmesiz senkronize etmek.",
        en: "Optimizing dynamic delivery waypoints, vehicle capacity constraints, and driver schedules on live map interfaces while maintaining continuous synchronization with SAP and Panorama backends.",
      },
      solution: {
        tr: "Java Spring Boot ve PostgreSQL ile yüksek performanslı rota optimizasyon servisleri geliştirildi; Angular ile harita tabanlı interaktif yönetim panosu kurgulandı ve çift yönlü SAP/Panorama entegrasyonları kuruldu.",
        en: "Engineered scalable route calculation backend services using Java Spring Boot and PostgreSQL, paired with a responsive Angular map UI and reliable bidirectional SAP/Panorama data connectors.",
      },
      keyFeatures: {
        tr: [
          "Harita üzerinden interaktif rota planlama, dinamik durak sıralaması ve rota optimizasyonu",
          "Kapsamlı araç filosu, sürücü yönetimi ve sevkiyat durum takibi",
          "SAP ve Panorama sistemleriyle gerçek zamanlı çift yönlü veri entegrasyonu",
          "Dağıtım süreçlerinin uçtan uca yönetimi, rota sapmaları ve teslimat süreleri için operasyonel raporlama",
        ],
        en: [
          "Interactive map-based route planning, dynamic waypoint sorting, and algorithmic route optimization",
          "Comprehensive fleet asset management, driver assignment tracking, and live shipment dispatch status",
          "Real-time bidirectional enterprise data synchronization with SAP and Panorama systems",
          "Operational telemetry and analytics reporting for distribution turnaround and route variance",
        ],
      },
      metrics: [
        { label: { tr: "Optimizasyon", en: "Route Engine" }, value: "Dinamik Rota" },
        { label: { tr: "Entegrasyon", en: "ERP Connect" }, value: "SAP & Panorama" },
        { label: { tr: "Veritabanı", en: "Database" }, value: "PostgreSQL" },
      ],
    },
  },
  {
    id: "dailyrota",
    title: "DailyRota: Kişisel Yaşam & Rota Yönetim Merkezi",
    year: "2026",
    category: {
      tr: "Mobil Web / Kişisel Yaşam & Finans",
      en: "Mobile Web / Personal Hub & Finance",
    },
    role: {
      tr: "Full Stack Geliştirici & Mimar",
      en: "Full Stack Creator & Architect",
    },
    tagline: {
      tr: "Türkçe Doğal Dil ve Ses Komutlu, Mobil Öncelikli Kişisel Yaşam & Finans Yönetim Platformu",
      en: "Voice & NLP-Powered Mobile-First Personal Life, Finance & Routine Management Hub",
    },
    description: {
      tr: "Finans, bütçe, günlük planlar, alışveriş listeleri, ev stokları ve alışkanlıkları tek ekranda toplayan; Türkçe sesli ve yazılı serbest komutları anında atomik kayıtlara dönüştüren mobil öncelikli yaşam yönetim merkezi.",
      en: "A mobile-first personal operating hub unifying personal finance, budgeting, scheduling, pantry inventory, and habit tracking—translating natural Turkish voice and text commands into atomic database entries.",
    },
    technologies: ["React 19", "TypeScript", "Firebase Auth", "Cloud Firestore", "Tailwind CSS", "Web Speech API", "PWA", "Base UI"],
    liveUrl: "https://dailyrota.web.app",
    githubUrl: "https://github.com/Kaandnz/DailyRota",
    accentColor: "#10b981",
    image: "/images/projects/dailyrota.svg",
    caseStudy: {
      overview: {
        tr: "Kullanıcıların günlük yaşamda farklı uygulamalara dağılan bütçe, görev, alışveriş ve takvim verilerini tek merkezde birleştiren; Türkçe sesli ve yazılı komutlarla ('450 TL market harcadım', 'Yarın 15:00 diş randevusu') anında işlem yapan hepsi-bir-arada kişisel yaşam yönetim merkezi.",
        en: "An all-in-one personal operating ecosystem replacing fragmented todo, finance, grocery, and calendar apps with an intuitive hub that translates conversational Turkish voice and text commands directly into structured atomic database records.",
      },
      challenge: {
        tr: "Serbest metin ve konuşma verilerini harici ücretli yapay zeka servislerine bağımlı olmadan istemci tarafında deterministik kural motoruyla anlık ayrıştırmak; misafir oturumundan e-posta hesabına geçişte veri kaybı yaşamadan çevrimdışı Firestore eşitlemesini sağlamak.",
        en: "Parsing unstructured natural language and browser speech inputs into strictly-typed transactional entities client-side with zero paid API overhead, while ensuring seamless offline-first synchronization and conflict-free guest-to-authenticated Firebase account migration.",
      },
      solution: {
        tr: "Web Speech API ile istemci tarafında çalışan Türkçe doğal dil işleme (NLP) kuralları entegre edildi. Güvenlik kuralları kullanıcı UID bazlı izole edilmiş Firebase Auth & Cloud Firestore mimarisi kurgulandı; 114 birim testi ile uçtan uca veri bütünlüğü doğrulandı.",
        en: "Architected a zero-latency client-side Turkish NLP rule parser coupled with the Web Speech API. Deployed strict UID-isolated Cloud Firestore security rules with offline persistence, validated by a comprehensive suite of 114 automated unit and emulator tests.",
      },
      keyFeatures: {
        tr: [
          "Türkçe ses ve metin komutlarını anında gelir/gider, randevu veya göreve dönüştüren NLP motoru",
          "Kapsamlı finans yönetimi: Kategori bütçeleri, taksit/abonelik takibi, borç/alacak ve birikim hedefleri",
          "Ev ve yaşam envanteri: Alışveriş listesi, kiler stokları, garanti süreleri ve araç kilometre/bakım takibi",
          "Firebase Auth ile misafir oturumunu tek tıkla e-postaya bağlama ve çevrimdışı Firestore senkronizasyonu",
        ],
        en: [
          "Deterministic Turkish NLP and voice command engine converting speech into structured entries",
          "Full financial management suite: Category budgets, subscriptions, debts/receivables, and savings goals",
          "Home and personal logistics: Grocery checklists, pantry inventory, warranties, and vehicle maintenance",
          "Seamless guest-to-cloud Firebase Auth with offline persistence and zero-loss Firestore synchronization",
        ],
      },
      metrics: [
        { label: { tr: "Otomasyon Testi", en: "Automated Tests" }, value: "114/114" },
        { label: { tr: "Komut İşleme Hızı", en: "NLP Latency" }, value: "< 5ms" },
        { label: { tr: "Mimari", en: "Architecture" }, value: "PWA + Firebase" },
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
      tr: "Yaratıcı Geliştirici & Mimari",
      en: "Full Stack Creator & Architect",
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
    accentColor: "#38bdf8",
    image: "/images/projects/sql-game.svg",
    caseStudy: {
      overview: {
        tr: "Geleneksel sıkıcı SQL dökümanlarını bir kenara bırakıp, yazılımcıların ve veri analistlerinin adli soruşturma senaryolarıyla eğlenerek SQL ustası olmalarını sağlayan bir oyun motoru.",
        en: "Replaces dry SQL documentation with a compelling forensic storyline where developers and analysts master complex queries through real-world cyber crime and financial auditing scenarios.",
      },
      challenge: {
        tr: "Herhangi bir backend sunucusuna bağımlı olmadan, tüm SQL sorgu çalıştırma motorunu güvenli ve 60 FPS akıcılıkta tarayıcı içinde (WASM) sıfır gecikmeyle koşturmak.",
        en: "Executing complex relational SQL schemas client-side with zero server latency, maintaining instant sub-2ms query evaluation while isolating user input securely.",
      },
      solution: {
        tr: "WebAssembly tabanlı SQL derleyicisi entegre edildi. Web Worker ile sorgu çalıştırma ana iş parçacığından ayrıldı; böylece UI hiçbir zaman kilitlenmeden anlık doğrulama sağlandı.",
        en: "Integrated a WebAssembly SQLite engine offloaded to a Web Worker, ensuring zero UI thread blocking during high-volume query parsing and live table visualizations.",
      },
      keyFeatures: {
        tr: [
          "WASM tabanlı sıfır sunucu maliyetli yerel sorgu çalıştırma",
          "Adli vaka dosyaları: Kara para aklama, sahte siparişler, vergi kaçırma",
          "Kapsamlı beceri ağacı (Skill Tree) ve seviye ilerleme sistemi",
          "Özel retro-fütüristik terminal UI ve interaktif ses efektleri",
        ],
        en: [
          "Client-side WASM query engine with sub-2ms execution latency",
          "Real-world forensic dossiers: Money laundering, fraudulent logs, corporate leaks",
          "Dynamic skill tree mapping from basic syntax to recursive queries",
          "Retro-futuristic tactical terminal UI with reactive audio feedback",
        ],
      },
      metrics: [
        { label: { tr: "Sorgu Çalışma Hızı", en: "Query Latency" }, value: "1.4ms" },
        { label: { tr: "Adli Vaka Dosyaları", en: "Forensic Cases" }, value: "30+ Vaka" },
        { label: { tr: "Mimari", en: "Architecture" }, value: "Pure WASM" },
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
      tr: "Yaratıcı Geliştirici & Mimari",
      en: "Full Stack Creator & Architect",
    },
    tagline: {
      tr: "118 Element İçin Kuantum Orbitalleri, Termodinamik Faz Simülasyonu ve Isı Haritası",
      en: "Precision Periodic Laboratory with Quantum Orbitals, Thermodynamic Phase Simulation & Heatmaps",
    },
    description: {
      tr: "118 IUPAC kimyasal elementinin tamamını kuantum elektron dizilimleri, 0 K – 6000 K termodinamik faz simülasyonları, periyodik eğilim ısı haritaları ve çoklu element karşılaştırma matrisi ile sunan fütüristik bilimsel laboratuvar platformu.",
      en: "A futuristic precision periodic laboratory presenting all 118 IUPAC chemical elements with quantum electron configurations, 0 K – 6000 K thermodynamic phase simulations, periodic trend heatmaps, and side-by-side element comparison matrices.",
    },
    technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Firebase", "Web Audio API"],
    liveUrl: "https://periodictableviewer.web.app",
    githubUrl: "https://github.com/Kaandnz/PeriodicTable",
    accentColor: "#06b6d4",
    image: "/images/projects/elementa.svg",
    caseStudy: {
      overview: {
        tr: "Geleneksel statik periyodik tabloları modern reaktif web mimarisiyle yeniden tanımlayarak; araştırmacılar, kimyagerler ve öğrenciler için 118 elementin mikroskobik kuantum özelliklerinden makroskopik termodinamik faz dönüşümlerine kadar tüm bilimsel verileri anlık simülasyonlarla sunan etkileşimli bir dijital laboratuvar inşa etmek.",
        en: "Reimagining static chemistry references into an interactive, high-precision periodic laboratory that allows researchers, students, and engineers to explore quantum electron shells, thermodynamic phase shifts, and empirical periodic trends in real time.",
      },
      challenge: {
        tr: "118 elemente ait 18+ fiziksel/kimyasal parametreyi, 0 K'den 6000 K'ye kadar sürekli sıcaklık değişiminde katı/sıvı/gaz faz dönüşümlerini ve Hund kuralına uygun kuantum orbital spin dağılımlarını istemci tarafında sıfır gecikmeyle 60 FPS akıcılıkta hesaplayıp görselleştirmek.",
        en: "Rendering complex atomic structures, real-time thermodynamic phase transitions across a 0 K – 6000 K continuous range at 60 FPS, and calculating Hund's rule quantum orbital spin vectors entirely on the client side with sub-millisecond responsiveness.",
      },
      solution: {
        tr: "Next.js 15 ve React 19 ile derlenen reaktif durum mimarisi kurgulandı. Kuantum elektron dizilimi ve termodinamik faz motoru saf TypeScript algoritmalarıyla optimize edildi; ısı haritası filtrelemeleri ve karşılaştırma matrisleri sıfır UI kilitlenmesiyle küresel edge CDN üzerinden (Firebase Hosting) sunuldu.",
        en: "Engineered a reactive state architecture with Next.js 15 and React 19. Designed optimized TypeScript evaluation engines for thermodynamic phase modeling and quantum orbital population, paired with smooth CSS transform pipelines and global edge delivery via Firebase Hosting.",
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
        { label: { tr: "Arayüz Tepki Hızı", en: "Render Latency" }, value: "< 16ms" },
        { label: { tr: "Mimari", en: "Architecture" }, value: "Next 15 Edge" },
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
      tr: "Tasarımcı & Geliştirici",
      en: "Author & Core Engineer",
    },
    tagline: {
      tr: "Yüksek Hızlı SQL Toplu Liste & IN-Cümlesi Dönüştürücü Araç",
      en: "High-Speed SQL Batch & IN-Clause Query Transformation Tool",
    },
    description: {
      tr: "Ham pano verilerini, Excel sütunlarını ve log listelerini anında temiz, tek tırnaklı ve toplu SQL IN (...) bloklarına dönüştürerek geliştiricilere ve veritabanı yöneticilerine saatler kazandıran pratik geliştirici aracı.",
      en: "High-performance developer utility converting raw clipboard data, Excel columns, and unformatted log lines into sanitized, quoted SQL IN (...) query clauses with custom delimiters and batch splitting.",
    },
    technologies: ["C# / .NET", "TypeScript", "SQL Server", "RegEx Engine", "Tailwind CSS"],
    githubUrl: "https://github.com/Kaandnz/Sql-List-Formatter",
    accentColor: "#10b981",
    image: "/images/projects/sql-formatter.svg",
    caseStudy: {
      overview: {
        tr: "Yazılımcıların ve veritabanı uzmanlarının günlük işlerinde en sık karşılaştığı 'Excel'den gelen yüzlerce ID'yi SQL sorgusuna çevirme' ameleliğini tek tıkla çözen minimalist araç.",
        en: "A focused developer productivity tool designed to eliminate the repetitive friction of transforming raw spreadsheet IDs into formatted SQL IN-clauses.",
      },
      challenge: {
        tr: "Büyük veri listelerinde (10.000+ satır) tarayıcıda bellek tüketimini minimize etmek ve tırnak temizliği ile boşlukları anında işlemek.",
        en: "Sanitizing, deduping, and splitting large datasets (10,000+ rows) without memory spikes while supporting customizable batching parameters.",
      },
      solution: {
        tr: "Optimize edilmiş regex akışı ve parçalı kuyruk mimarisi ile anlık biçimlendirme ve tek tıkla panoya kopyalama özelliği geliştirildi.",
        en: "Implemented an optimized streaming regex token parser and fast clipboard pipeline that operates with zero latency.",
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
        { label: { tr: "İşleme Süresi", en: "Format Time" }, value: "< 5ms" },
        { label: { tr: "Kapasite", en: "Row Capacity" }, value: "50K+ Satır" },
        { label: { tr: "Zaman Tasarrufu", en: "Time Saved" }, value: "10x Hız" },
      ],
    },
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: "duzey",
    role: {
      tr: "Software Developer",
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
      tr: "Düzey bünyesinde rota optimizasyonu web uygulamaları, kurumsal B2B platformları ve e-ticaret sistemlerinin yazılım geliştirme süreçlerini yürüttü; Angular, Java Spring Boot, PostgreSQL, C# ve ASP.NET Core ile SAP ve Panorama entegrasyonlarını başarıyla hayata geçirdi.",
      en: "Architects and develops enterprise software at Düzey across route optimization web applications, enterprise B2B platforms, and e-commerce solutions; delivers mission-critical SAP and Panorama integrations using Angular, Java Spring Boot, PostgreSQL, C#, and ASP.NET Core.",
    },
    achievements: {
      tr: [
        "Angular, Java Spring Boot ve PostgreSQL ile geliştirilen; rota optimizasyonu, harita üzerinden planlama, araç ve sürücü yönetimi sunan web uygulamasının geliştirilmesi; SAP ve Panorama entegrasyonlarıyla dağıtım süreçlerinin yönetimi ve raporlanması.",
        "C# ve ASP.NET Core kullanılarak nopCommerce altyapısı üzerine geliştirilen; sipariş, müşteri, fiyat ve indirim yönetimi ile SAP ve Panorama entegrasyonlarını kapsayan kurumsal B2B platformunun geliştirilmesinde aktif rol.",
        "C# ve ASP.NET Core ile nopCommerce altyapısı üzerinde geliştirilen Düzey e-ticaret projesinde yazılım geliştirme süreçlerine katkı; ödeme sistemleri, Panorama entegrasyonu ve iş ihtiyaçlarına özel e-ticaret modüllerinin geliştirilmesi.",
        "Saha operasyonlarını hızlandıran merkezi Onay Yönetim Sistemi RESTful API'lerinin kurgulanması; eski iş mantıklarının ve nopCommerce çekirdek modüllerinin refactor edilerek yüksek hacimli işlemlerde sorgu sürelerinin optimize edilmesi.",
      ],
      en: [
        "Engineered a route optimization and fleet dispatch web app using Angular, Java Spring Boot, and PostgreSQL; automated distribution tracking and operational reporting via SAP and Panorama integrations.",
        "Contributed to building an enterprise B2B platform using C# and ASP.NET Core on nopCommerce, encompassing order, customer, dynamic pricing, and discount rule management with SAP & Panorama integrations.",
        "Contributed to software development for Düzey's enterprise e-commerce platform built with C# and ASP.NET Core on nopCommerce, delivering payment systems, Panorama integration, and custom e-commerce modules.",
        "Architected centralized Approval Management RESTful APIs automating field workflows; refactored core modules and optimized database queries to significantly accelerate response times in high-volume transactions.",
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
      tr: "Software Development Intern",
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
      tr: "Hangfire ile büyük veri setlerinin senkronizasyonunu otomatikleştiren yüksek performanslı veri pipeline'ları kurguladı, Jenkins ile CI/CD süreçlerini yapılandırdı ve ELK Stack izleme panoları oluşturdu.",
      en: "Orchestrated high-performance data pipelines using Hangfire, automated synchronization to MongoDB, established Jenkins CI/CD to IIS, and configured ELK Stack telemetry dashboards.",
    },
    achievements: {
      tr: [
        "Entity Framework Core üzerinden SQL Server'dan MongoDB'ye büyük veri setlerinin senkronizasyonunu otomatikleştiren Hangfire veri pipeline'ları kuruldu.",
        "GitHub'dan IIS Sunucusuna dağıtım komut dosyalarını otomatikleştiren Jenkins CI/CD iş akışları oluşturularak sürüm güvenilirliği artırıldı.",
        "Sistem loglarını indekslemek için ELK Stack (Elasticsearch, Logstash, Kibana) yapılandırıldı; proaktif hata tespiti için gerçek zamanlı panolar oluşturuldu.",
        "Selenium ile otomatik web test senaryoları ve pazar analizi için veri kazıma (web scraping) algoritmaları geliştirildi.",
      ],
      en: [
        "Automated the synchronization of large datasets from SQL Server to MongoDB via Entity Framework Core using Hangfire.",
        "Established robust CI/CD workflows using Jenkins, automating deployment scripts to IIS Server from GitHub.",
        "Built and configured ELK Stack (Elasticsearch, Logstash, Kibana) to index system logs and created real-time dashboards for proactive error detection.",
        "Designed and executed automated web testing scenarios using Selenium and developed web scraping algorithms for market intelligence.",
      ],
    },
    technologies: ["Hangfire", ".NET Core", "MongoDB", "MS SQL Server", "Jenkins", "ELK Stack", "Selenium"],
  },
  {
    id: "mugla-it",
    role: {
      tr: "IT Intern",
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
      tr: "Üniversite bünyesindeki BT altyapısının bakımına destek sağladı; ağ bütünlüğünü ve sunucu çalışma süresini güvence altına aldı.",
      en: "Assisted in the maintenance of IT infrastructure, ensuring network integrity, server uptime, and providing technical troubleshooting for hardware/software optimizations.",
    },
    achievements: {
      tr: [
        "Ağ anahtarları, sunucu kabinleri ve kampüs içi veri bağlantılarının kesintisiz çalışması sağlandı.",
        "Donanım ve yazılım optimizasyonları ile laboratuvar sistemlerinin performansı artırıldı.",
      ],
      en: [
        "Monitored network integrity, server uptime, and resolved campus-wide IT hardware/software bottlenecks.",
        "Conducted system diagnostics and workstations performance tuning.",
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
    en: "Comprehensive engineering curriculum focusing on software architecture, distributed databases, network security, and algorithm optimization.",
  },
};

export const skillsGrouped = {
  backend: {
    title: { tr: "Arka Uç & Frameworkler", en: "Backend & Frameworks" },
    skills: [".NET Core", "C#", "ASP.NET Core", "Java Spring Boot", "Entity Framework Core", "RESTful APIs", "Microservices"],
  },
  enterprise: {
    title: { tr: "Kurumsal & Entegrasyon", en: "Enterprise & Integrations" },
    skills: ["SAP Entegrasyonu", "Panorama Entegrasyonu", "nopCommerce", "Rota Optimizasyonu", "B2B & E-Ticaret", "Ödeme Sistemleri / POS"],
  },
  frontend: {
    title: { tr: "Ön Yüz & Web", en: "Frontend & Web" },
    skills: ["Angular", "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5 / CSS3"],
  },
  database: {
    title: { tr: "Veritabanı & Arama Motorları", en: "Databases & Storage" },
    skills: ["PostgreSQL", "MS SQL Server", "MongoDB", "Elasticsearch", "Database Optimization", "Query Tuning"],
  },
  devops: {
    title: { tr: "DevOps, CI/CD & İzleme", en: "DevOps & Monitoring" },
    skills: ["Jenkins (CI/CD)", "Docker", "ELK Stack (Elasticsearch, Logstash, Kibana)", "IIS Server", "GitHub"],
  },
  testing: {
    title: { tr: "Test Otomasyonu & Mimarisi", en: "Testing & Architecture" },
    skills: ["Selenium WebDriver", "NUnit", "Web Scraping", "SOLID Principles", "OOP & Design Patterns"],
  },
  tools: {
    title: { tr: "Araçlar & Metodolojiler", en: "Tools & Methodologies" },
    skills: ["Agile / Scrum", "Visual Studio", "SSMS", "JIRA", "Postman", "Cursor", "Copilot"],
  },
};

