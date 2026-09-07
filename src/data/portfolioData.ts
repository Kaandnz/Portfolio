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
  githubUrl: string;
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
    tr: ".NET Core ve C# kullanarak ölçeklenebilir backend sistemleri ve kurumsal çözümler tasarlayan Full Stack Geliştirici. Saha operasyonlarını ve dijital satışları kolaylaştıran kurumsal B2B ve SFA sistemleri (nopCommerce), yüksek performanslı SQL & NoSQL veritabanı optimizasyonları, test otomasyonu (Selenium) ve CI/CD süreçleri (Jenkins) konularında kanıtlanmış tecrübe. Temiz kod, mikroservis mimarileri ve uçtan uca ürün teslimatına odaklanan mühendislik yaklaşımı.",
    en: "Full Stack Developer with a strong focus on designing and implementing scalable backend systems using .NET Core and C#. Specialized in building enterprise-level B2B and SFA (Sales Force Automation) solutions leveraging nopCommerce to streamline field operations and digital sales. Proven track record in optimizing database performance, test automation (Selenium), and CI/CD pipelines (Jenkins). Focused on clean architecture, microservices, and end-to-end product delivery.",
    tr: "Java Spring Boot, .NET Core, C# ve modern web teknolojileriyle (Angular, React) ölçeklenebilir kurumsal çözümler, B2B platformları, e-ticaret sistemleri ve rota optimizasyonu altyapıları tasarlayan Full Stack Geliştirici. SAP ve Panorama kurumsal entegrasyonları, nopCommerce e-ticaret mimarileri, PostgreSQL & SQL Server veritabanı optimizasyonları, test otomasyonu (Selenium) ve CI/CD süreçleri (Jenkins) konularında kanıtlanmış tecrübe. Temiz kod, mikroservis mimarileri ve uçtan uca ürün teslimatına odaklanan mühendislik yaklaşımı.",
    en: "Full Stack Developer architecting scalable enterprise solutions, B2B platforms, e-commerce systems, and route optimization infrastructure using Java Spring Boot, .NET Core, C#, and modern web technologies (Angular, React). Proven track record in enterprise SAP and Panorama integrations, nopCommerce platforms, PostgreSQL & SQL Server performance tuning, automated testing (Selenium), and CI/CD pipelines (Jenkins). Focused on clean architecture, microservices, and robust product delivery.",
  },
};

export const projectsData: ProjectItem[] = [
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
        { label: { tr: "Müfredat Kapsamı", en: "Curriculum" }, value: "30+ Vaka" },
        { label: { tr: "Müfredat Kapsamı", en: "Curriculum" }, value: "30+ Senaryo" },
        { label: { tr: "Mimari", en: "Architecture" }, value: "Pure WASM" },
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
    liveUrl: "https://github.com/Kaandnz/Sql-List-Formatter",
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
    githubUrl: "https://github.com/Kaandnz",
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
    id: "duzey-sfa-b2b",
    title: "Enterprise SFA & B2B Mobile Infrastructure",
    title: "Enterprise B2B & E-Commerce Infrastructure",
    year: "2025",
    category: {
      tr: "Kurumsal Çözüm / Backend",
      en: "Enterprise Solution / Backend",
      tr: "Kurumsal B2B & E-Ticaret / Backend",
      en: "Enterprise B2B & E-Commerce / Backend",
    },
    role: {
      tr: "Software Developer @ Düzey",
      en: "Software Developer @ Düzey",
    },
    tagline: {
      tr: "nopCommerce & .NET Core ile Saha Satış ve B2B Altyapısı",
      en: "Scalable SFA & B2B Mobile Infrastructure with nopCommerce & .NET",
      tr: "C# & ASP.NET Core nopCommerce ile B2B, E-Ticaret ve Ödeme Sistemleri",
      en: "Scalable B2B, E-Commerce & Payment Systems with C# & nopCommerce",
    },
    description: {
      tr: "Düzey bünyesinde saha operasyonlarını ve dijital satış verimliliğini yöneten, merkezi SAP/ERP sistemleri ile mikroservis entegrasyonu sağlayan kurumsal SFA ve B2B backend mimarisi.",
      en: "Enterprise backend architecture powering SFA and B2B mobile applications at Düzey, integrating nopCommerce with central SAP/ERP pipelines to streamline nationwide sales operations.",
      tr: "C# ve ASP.NET Core kullanılarak nopCommerce altyapısı üzerine geliştirilen; sipariş, müşteri, fiyat ve indirim yönetimi ile SAP ve Panorama entegrasyonlarını kapsayan kurumsal B2B platformu ve ödeme sistemleri entegrasyonlu Düzey e-ticaret altyapısı.",
      en: "Enterprise B2B and e-commerce platforms engineered on nopCommerce with C# and ASP.NET Core. Powers end-to-end order processing, customer pricing, tiered discount rules, secure payment gateway integrations, and SAP/Panorama enterprise synchronization.",
    },
    technologies: [".NET Core", "C#", "nopCommerce", "MS SQL Server", "SAP / ERP Integration", "RESTful APIs"],
    technologies: [".NET Core", "C#", "ASP.NET Core", "nopCommerce", "MS SQL Server", "Payment Systems", "SAP", "Panorama", "RESTful APIs"],
    liveUrl: "https://duzey.com.tr",
    githubUrl: "https://github.com/Kaandnz",
    accentColor: "#f59e0b",
    image: "/images/projects/aetheria.svg",
    caseStudy: {
      overview: {
        tr: "Türkiye genelindeki saha ekiplerinin sipariş, onay ve stok süreçlerini gerçek zamanlı yöneten yüksek hacimli kurumsal mobil arka uç altyapısı.",
        en: "High-volume enterprise backend supporting nationwide field sales representatives with real-time catalog access, automated order approvals, and ERP sync.",
        tr: "Türkiye genelindeki kurumsal bayilerin ve müşterilerin sipariş, dinamik fiyatlandırma, kampanya indirimleri ve güvenli online ödeme süreçlerini kesintisiz yürüten yüksek hacimli B2B ve e-ticaret ekosistemi.",
        en: "Nationwide enterprise B2B and e-commerce ecosystem facilitating streamlined digital ordering, tiered customer pricing, promotional discounts, and payment processing.",
      },
      challenge: {
        tr: "Yüksek işlem hacmine sahip veritabanında onay mekanizmalarını ve ERP veri senkronizasyonunu gecikmesiz yönetmek.",
        en: "Achieving real-time bidirectional synchronization between field mobile apps, nopCommerce, and central SAP systems under heavy transactional loads.",
        tr: "Farklı müşteri segmentlerine özel dinamik fiyat/iskonto matrislerini, karmaşık ödeme sistemlerini ve SAP/Panorama stok-sipariş senkronizasyonunu yüksek eşzamanlılık altında hatasız işletmek.",
        en: "Handling complex customer-specific pricing matrixes, multi-provider payment integrations, and high-concurrency order processing in lockstep with SAP and Panorama.",
      },
      solution: {
        tr: "Onay Yönetim Sistemi için merkezi RESTful API'ler kurgulandı; eski iş kuralları refactor edilerek veri çekme süreleri büyük ölçüde düşürüldü.",
        en: "Engineered a centralized Approval Management REST API suite and refactored core database queries, significantly decreasing response times.",
        tr: "nopCommerce çekirdeği kurumsal ihtiyaçlara göre özelleştirildi; güvenli ödeme altyapıları, Panorama ve SAP veri hatları bağlandı; Onay Yönetim Sistemi API'leri ile operasyonel süreçler otomatikleştirildi.",
        en: "Engineered bespoke nopCommerce enterprise plugins, integrated multi-tier payment gateways, built robust Panorama and SAP connectors, and deployed centralized Approval Management APIs.",
      },
      keyFeatures: {
        tr: [
          "nopCommerce çekirdek mimari optimizasyonu ve özel modül geliştirimi",
          "Saha kaynaklı talepleri otomatikleştiren merkezi Onay Yönetim Sistemi",
          "Kurumsal SAP/ERP sistemleriyle kesintisiz çift yönlü veri entegrasyonu",
          "Backoffice dashboard için anlık iş akışı ve audit izlenebilirliği",
          "C# ve ASP.NET Core nopCommerce üzerinde sipariş, müşteri, dinamik fiyat ve indirim yönetimi",
          "Düzey e-ticaret projesinde güvenli ödeme sistemleri, Panorama entegrasyonu ve iş ihtiyaçlarına özel modüller",
          "SAP ve Panorama kurumsal sistemleriyle kesintisiz çift yönlü sipariş ve stok senkronizasyonu",
          "Saha operasyonlarını hızlandıran merkezi Onay Yönetim Sistemi RESTful API'leri",
        ],
        en: [
          "nopCommerce core refactoring and bespoke enterprise extension modules",
          "Centralized Approval Management System automating field-originated workflows",
          "Seamless microservice integration with enterprise SAP/ERP data pipelines",
          "Live telemetry and audit trail visibility for backoffice administrative teams",
          "Comprehensive order, customer tier, dynamic pricing, and discount rule management on nopCommerce",
          "Secure payment gateway integration, Panorama synchronization, and tailored enterprise e-commerce modules",
          "Seamless bidirectional order and inventory synchronization with SAP and Panorama",
          "Centralized Approval Management REST API suite automating field workflow approvals",
        ],
      },
      metrics: [
        { label: { tr: "Mimari", en: "Architecture" }, value: "Microservices" },
        { label: { tr: "Veri Çekme Hızı", en: "Query Speed" }, value: "%40+ Hız" },
        { label: { tr: "Kullanıcı", en: "Field Reach" }, value: "Kurumsal" },
        { label: { tr: "Mimari", en: "Architecture" }, value: "nopCommerce .NET" },
        { label: { tr: "Entegrasyon", en: "Enterprise Sync" }, value: "SAP & Panorama" },
        { label: { tr: "Ödeme Altyapısı", en: "Payment Gateways" }, value: "3D Secure / POS" },
      ],
    },
  },
  {
    id: "dr-turkuvaz-pipeline",
    title: "D&R High-Speed Hangfire & ELK Pipeline",
    year: "2025",
    category: {
      tr: "Veri Mühendisliği / DevOps",
      en: "Data Engineering / DevOps",
    },
    role: {
      tr: "Software Development Intern @ D&R",
      en: "Software Development Intern @ D&R",
    },
    tagline: {
      tr: "SQL Server'dan MongoDB'ye Hangfire ETL & ELK Stack İzleme",
      en: "Automated SQL-to-MongoDB Hangfire Pipeline & ELK Monitoring",
    },
    description: {
      tr: "D&R (Turkuvaz Medya) bünyesinde büyük veri setlerinin Hangfire ve Entity Framework Core ile SQL Server'dan MongoDB'ye otomatik aktarımı, Jenkins CI/CD ve ELK Stack ile gerçek zamanlı log analitiği.",
      en: "High-performance data synchronization pipelines built at D&R (Turkuvaz Medya) using Hangfire to automate dataset migration from SQL Server to MongoDB, with Jenkins CI/CD and ELK monitoring.",
    },
    technologies: [".NET Core", "Hangfire", "MongoDB", "MS SQL Server", "ELK Stack", "Jenkins", "Selenium"],
    liveUrl: "https://dr.com.tr",
    githubUrl: "https://github.com/Kaandnz",
    accentColor: "#8b5cf6",
    image: "/images/projects/novascope.svg",
    caseStudy: {
      overview: {
        tr: "D&R e-ticaret platformunda büyük ölçekli veri setlerinin yüksek erişilebilirlikle MongoDB'ye aktarılması ve sistem sağlığının ELK ile 7/24 izlenmesi projesi.",
        en: "Automated high-concurrency ETL synchronization for D&R's e-commerce ecosystem, backed by real-time proactive log telemetry on ELK Stack.",
      },
      challenge: {
        tr: "Devasa katalog ve işlem verilerini canlı sistem performansını düşürmeden zamanlanmış background job'lar ile güvenli şekilde transfer etmek.",
        en: "Transferring millions of relational rows into document structures during peak shopping hours without causing database locking or downtime.",
      },
      solution: {
        tr: "Hangfire ile parçalı batch işleme kurgulandı; Jenkins ile GitHub'dan IIS'e otomatik deployment ve ELK Stack ile anlık hata tespit panoları devreye alındı.",
        en: "Orchestrated chunked batch processing via Hangfire, established Jenkins automated deployment scripts to IIS Server, and configured Elasticsearch/Kibana alerting.",
      },
      keyFeatures: {
        tr: [
          "Hangfire & Entity Framework Core ile SQL'den MongoDB'ye otomatik veri pipeline'ı",
          "GitHub'dan IIS Server'a sıfır kesintili Jenkins CI/CD otomatik deployment",
          "Elasticsearch, Logstash ve Kibana (ELK) ile gerçek zamanlı log analitiği",
          "Selenium ile otomatik test senaryoları ve pazar analizi için web scraping",
        ],
        en: [
          "Automated SQL Server to MongoDB data pipeline using Hangfire and EF Core",
          "Jenkins CI/CD automated deployment pipeline to IIS Server from GitHub",
          "Real-time log ingestion and dashboard monitoring via ELK Stack",
          "Automated Selenium test suites and competitor market intelligence scrapers",
        ],
      },
      metrics: [
        { label: { tr: "Otomasyon", en: "CI/CD" }, value: "Jenkins" },
        { label: { tr: "Log İzleme", en: "Telemetry" }, value: "ELK Stack" },
        { label: { tr: "Veritabanı", en: "Sync Target" }, value: "MongoDB" },
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
      tr: "nopCommerce ve .NET Core kullanarak saha operasyonlarını ve dijital satış verimliliğini doğrudan destekleyen SFA ve B2B mobil uygulamalarının backend altyapısını mimari olarak tasarladı ve sürdürdü.",
      en: "Architected and maintained the backend infrastructure of SFA and B2B mobile applications using nopCommerce and .NET Core, directly supporting field operations and digital sales efficiency.",
      tr: "Düzey bünyesinde rota optimizasyonu web uygulamaları, kurumsal B2B platformları ve e-ticaret sistemlerinin yazılım geliştirme süreçlerini yürüttü; Angular, Java Spring Boot, PostgreSQL, C# ve ASP.NET Core ile SAP ve Panorama entegrasyonlarını başarıyla hayata geçirdi.",
      en: "Architects and develops enterprise software at Düzey across route optimization web applications, enterprise B2B platforms, and e-commerce solutions; delivers mission-critical SAP and Panorama integrations using Angular, Java Spring Boot, PostgreSQL, C#, and ASP.NET Core.",
    },
    achievements: {
      tr: [
        "Onay Yönetim Sistemi için merkezi RESTful API'ler kurgulandı; saha kaynaklı talepler otomatikleştirildi ve Backoffice paneline gerçek zamanlı iş akışı izlenebilirliği kazandırıldı.",
        ".NET tabanlı mikroservisleri kurumsal SAP/ERP sistemleriyle entegre ederek mobil istemciler ile merkezi veritabanları arasında kesintisiz veri senkronizasyonu sağlandı.",
        "Sistem performansını artırmak için nopCommerce çekirdek modülleri optimize edildi ve eski iş mantığı refactor edilerek yüksek hacimli işlemlerde veri çekme süreleri ciddi oranda düşürüldü.",
        "Angular, Java Spring Boot ve PostgreSQL ile geliştirilen; rota optimizasyonu, harita üzerinden planlama, araç ve sürücü yönetimi sunan web uygulamasının geliştirilmesi; SAP ve Panorama entegrasyonlarıyla dağıtım süreçlerinin yönetimi ve raporlanması.",
        "C# ve ASP.NET Core kullanılarak nopCommerce altyapısı üzerine geliştirilen; sipariş, müşteri, fiyat ve indirim yönetimi ile SAP ve Panorama entegrasyonlarını kapsayan kurumsal B2B platformunun geliştirilmesinde aktif rol.",
        "C# ve ASP.NET Core ile nopCommerce altyapısı üzerinde geliştirilen Düzey e-ticaret projesinde yazılım geliştirme süreçlerine katkı; ödeme sistemleri, Panorama entegrasyonu ve iş ihtiyaçlarına özel e-ticaret modüllerinin geliştirilmesi.",
        "Saha operasyonlarını hızlandıran merkezi Onay Yönetim Sistemi RESTful API'lerinin kurgulanması; eski iş mantıklarının ve nopCommerce çekirdek modüllerinin refactor edilerek yüksek hacimli işlemlerde sorgu sürelerinin optimize edilmesi.",
      ],
      en: [
        "Engineered the backend logic for the Approval Management System, creating centralized RESTful APIs to automate field requests and enable real-time workflow traceability.",
        "Integrated .NET-based microservices with enterprise SAP/ERP systems, ensuring seamless data synchronization between mobile clients and central databases.",
        "Optimized nopCommerce core modules and refactored legacy business logic to boost system performance, significantly reducing data retrieval times for high-volume transactions.",
        "Engineered a route optimization and fleet dispatch web app using Angular, Java Spring Boot, and PostgreSQL; automated distribution tracking and operational reporting via SAP and Panorama integrations.",
        "Contributed to building an enterprise B2B platform using C# and ASP.NET Core on nopCommerce, encompassing order, customer, dynamic pricing, and discount rule management with SAP & Panorama integrations.",
        "Contributed to software development for Düzey's enterprise e-commerce platform built with C# and ASP.NET Core on nopCommerce, delivering payment systems, Panorama integration, and custom e-commerce modules.",
        "Architected centralized Approval Management RESTful APIs automating field workflows; refactored core modules and optimized database queries to significantly accelerate response times in high-volume transactions.",
      ],
    },
    technologies: [".NET Core", "C#", "nopCommerce", "MS SQL Server", "SAP / ERP", "Microservices", "RESTful APIs"],
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
    skills: [".NET Core", "C#", "ASP.NET MVC", "Entity Framework Core", "RESTful APIs", "Microservices"],
    skills: [".NET Core", "C#", "ASP.NET Core", "Java Spring Boot", "Entity Framework Core", "RESTful APIs", "Microservices"],
  },
  database: {
    title: { tr: "Veritabanı & Arama Motorları", en: "Databases & Storage" },
    skills: ["MS SQL Server", "MongoDB", "Elasticsearch", "Database Optimization", "Query Tuning"],
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

