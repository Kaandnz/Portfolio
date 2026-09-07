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
    id: "duzey-sfa-b2b",
    title: "Enterprise SFA & B2B Mobile Infrastructure",
    year: "2025",
    category: {
      tr: "Kurumsal Çözüm / Backend",
      en: "Enterprise Solution / Backend",
    },
    role: {
      tr: "Software Developer @ Düzey",
      en: "Software Developer @ Düzey",
    },
    tagline: {
      tr: "nopCommerce & .NET Core ile Saha Satış ve B2B Altyapısı",
      en: "Scalable SFA & B2B Mobile Infrastructure with nopCommerce & .NET",
    },
    description: {
      tr: "Düzey bünyesinde saha operasyonlarını ve dijital satış verimliliğini yöneten, merkezi SAP/ERP sistemleri ile mikroservis entegrasyonu sağlayan kurumsal SFA ve B2B backend mimarisi.",
      en: "Enterprise backend architecture powering SFA and B2B mobile applications at Düzey, integrating nopCommerce with central SAP/ERP pipelines to streamline nationwide sales operations.",
    },
    technologies: [".NET Core", "C#", "nopCommerce", "MS SQL Server", "SAP / ERP Integration", "RESTful APIs"],
    liveUrl: "https://duzey.com.tr",
    githubUrl: "https://github.com/Kaandnz",
    accentColor: "#f59e0b",
    image: "/images/projects/aetheria.svg",
    caseStudy: {
      overview: {
        tr: "Türkiye genelindeki saha ekiplerinin sipariş, onay ve stok süreçlerini gerçek zamanlı yöneten yüksek hacimli kurumsal mobil arka uç altyapısı.",
        en: "High-volume enterprise backend supporting nationwide field sales representatives with real-time catalog access, automated order approvals, and ERP sync.",
      },
      challenge: {
        tr: "Yüksek işlem hacmine sahip veritabanında onay mekanizmalarını ve ERP veri senkronizasyonunu gecikmesiz yönetmek.",
        en: "Achieving real-time bidirectional synchronization between field mobile apps, nopCommerce, and central SAP systems under heavy transactional loads.",
      },
      solution: {
        tr: "Onay Yönetim Sistemi için merkezi RESTful API'ler kurgulandı; eski iş kuralları refactor edilerek veri çekme süreleri büyük ölçüde düşürüldü.",
        en: "Engineered a centralized Approval Management REST API suite and refactored core database queries, significantly decreasing response times.",
      },
      keyFeatures: {
        tr: [
          "nopCommerce çekirdek mimari optimizasyonu ve özel modül geliştirimi",
          "Saha kaynaklı talepleri otomatikleştiren merkezi Onay Yönetim Sistemi",
          "Kurumsal SAP/ERP sistemleriyle kesintisiz çift yönlü veri entegrasyonu",
          "Backoffice dashboard için anlık iş akışı ve audit izlenebilirliği",
        ],
        en: [
          "nopCommerce core refactoring and bespoke enterprise extension modules",
          "Centralized Approval Management System automating field-originated workflows",
          "Seamless microservice integration with enterprise SAP/ERP data pipelines",
          "Live telemetry and audit trail visibility for backoffice administrative teams",
        ],
      },
      metrics: [
        { label: { tr: "Mimari", en: "Architecture" }, value: "Microservices" },
        { label: { tr: "Veri Çekme Hızı", en: "Query Speed" }, value: "%40+ Hız" },
        { label: { tr: "Kullanıcı", en: "Field Reach" }, value: "Kurumsal" },
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
    },
    achievements: {
      tr: [
        "Onay Yönetim Sistemi için merkezi RESTful API'ler kurgulandı; saha kaynaklı talepler otomatikleştirildi ve Backoffice paneline gerçek zamanlı iş akışı izlenebilirliği kazandırıldı.",
        ".NET tabanlı mikroservisleri kurumsal SAP/ERP sistemleriyle entegre ederek mobil istemciler ile merkezi veritabanları arasında kesintisiz veri senkronizasyonu sağlandı.",
        "Sistem performansını artırmak için nopCommerce çekirdek modülleri optimize edildi ve eski iş mantığı refactor edilerek yüksek hacimli işlemlerde veri çekme süreleri ciddi oranda düşürüldü.",
      ],
      en: [
        "Engineered the backend logic for the Approval Management System, creating centralized RESTful APIs to automate field requests and enable real-time workflow traceability.",
        "Integrated .NET-based microservices with enterprise SAP/ERP systems, ensuring seamless data synchronization between mobile clients and central databases.",
        "Optimized nopCommerce core modules and refactored legacy business logic to boost system performance, significantly reducing data retrieval times for high-volume transactions.",
      ],
    },
    technologies: [".NET Core", "C#", "nopCommerce", "MS SQL Server", "SAP / ERP", "Microservices", "RESTful APIs"],
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
  },
  database: {
    title: { tr: "Veritabanı & Arama Motorları", en: "Databases & Storage" },
    skills: ["MS SQL Server", "MongoDB", "Elasticsearch", "Database Optimization", "Query Tuning"],
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

