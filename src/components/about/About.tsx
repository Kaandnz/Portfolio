"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Server, Layers, CheckCircle2, GraduationCap } from "lucide-react";
import PortraitCard from "./PortraitCard";
import SectionHeader from "../ui/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { personalInfo, educationData } from "@/data/portfolioData";

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeTab, setActiveTab] = useState("philosophy");

  const philosophyTabs = [
    {
      id: "philosophy",
      label: t.about.tabPhilosophy,
      icon: Sparkles,
      title:
        language === "tr"
          ? "Kurumsal sistemler ve kendi ürünlerim."
          : "Enterprise systems and products of my own.",
      content: personalInfo.bio[language],
      bullets:
        language === "tr"
          ? [
              ".NET Core ve C# ile kurumsal mikroservisler",
              "Entity Framework Core & Dapper ile veritabanı optimizasyonu",
              "Selenium WebDriver ve NUnit ile uçtan uca test otomasyonu",
              "Jenkins ve Docker ile CI/CD pipeline'ları",
            ]
          : [
              "Enterprise microservices with .NET Core & C#",
              "Database query optimization with EF Core and Dapper",
              "End-to-end test automation with Selenium WebDriver & NUnit",
              "CI/CD pipelines with Jenkins & Docker",
            ],
    },
    {
      id: "architecture",
      label: t.about.tabArchitecture,
      icon: Server,
      title:
        language === "tr"
          ? "Kurumsal Dağıtım, B2B ve E-Ticaret Sistemleri."
          : "Enterprise Distribution, B2B & E-Commerce Systems.",
      content:
        language === "tr"
          ? "Düzey bünyesinde rota optimizasyonu ve dağıtım yönetimi web uygulamaları, kurumsal B2B platformları ve e-ticaret altyapılarının yazılım geliştirme süreçlerine katkı sağladım. Angular, Java Spring Boot, PostgreSQL, C# ve ASP.NET Core ile SAP ve Panorama kurumsal entegrasyonlarını hayata geçirdim."
          : "Contributed to software engineering across route optimization web applications, enterprise B2B platforms, and e-commerce solutions at Düzey. Built SAP and Panorama integrations utilizing Angular, Java Spring Boot, PostgreSQL, C#, and ASP.NET Core.",
      bullets:
        language === "tr"
          ? [
              "Angular, Spring Boot & PostgreSQL ile rota optimizasyonu, araç/sürücü yönetimi ve harita planlama",
              "C# & ASP.NET Core nopCommerce ile sipariş, müşteri, fiyat ve indirim yönetimli kurumsal B2B platformu",
              "Düzey e-ticaret projesinde güvenli ödeme sistemleri, Panorama entegrasyonu ve özel e-ticaret modülleri",
              "SAP ve Panorama kurumsal sistemleriyle çift yönlü veri senkronizasyonu ve operasyonel raporlama",
            ]
          : [
              "Map-based route optimization, fleet dispatch, and driver management with Angular, Spring Boot & PostgreSQL",
              "Enterprise B2B platform on C# & ASP.NET Core (nopCommerce) covering order, pricing, and discount rules",
              "Düzey e-commerce platform with payment system integrations, Panorama sync, and custom modules",
              "Bidirectional data synchronization and operational reporting with SAP and Panorama backends",
            ],
    },
    {
      id: "products",
      label: t.about.tabProducts,
      icon: Layers,
      title:
        language === "tr"
          ? "Veri pipeline'ları, CI/CD ve test otomasyonu."
          : "Data pipelines, CI/CD automation, and testing.",
      content:
        language === "tr"
          ? "D&R (Turkuvaz Medya) bünyesinde SQL Server'dan MongoDB'ye Hangfire ile veri pipeline'ları kurdum. Jenkins ile IIS sunucularına otomatik deployment sürecini ve ELK Stack log analitiğini kurdum."
          : "At D&R (Turkuvaz Medya) I set up Hangfire data pipelines from SQL Server to MongoDB, automated deployments to IIS servers with Jenkins, and set up ELK Stack log analytics.",
      bullets:
        language === "tr"
          ? [
              "Hangfire ile zamanlanmış background job'lar ve ETL pipeline'ları",
              "Jenkins ile GitHub'dan IIS Sunucusuna otomatik CI/CD deployment",
              "Elasticsearch, Logstash ve Kibana ile log izleme ve dashboard'lar",
              "Selenium WebDriver ile otomatik test ve web scraping",
            ]
          : [
              "Scheduled background jobs and ETL pipelines with Hangfire",
              "Automated Jenkins CI/CD deployments to IIS Server",
              "Log monitoring and dashboards with Elasticsearch, Logstash and Kibana",
              "Automated testing and web scraping with Selenium WebDriver",
            ],
    },
  ];

  const currentTab = philosophyTabs.find((item) => item.id === activeTab) || philosophyTabs[0];

  return (
    <section id="about" className="relative py-24 md:py-36 px-6 md:px-12 lg:px-20 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionHeader
          icon={Sparkles}
          badge={t.about.badge}
          heading1={t.about.heading1}
          heading2={t.about.heading2}
          subtitle={t.about.description}
          layout="stacked"
          className="mb-16 md:mb-20"
        />

        {/* Editorial Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait & Education */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full max-w-md mx-auto lg:max-w-none">
            <PortraitCard />

            {/* Education Badge */}
            <div className="p-5 rounded-2xl apple-glass-subtle specular-border border border-white/[0.06] flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                <GraduationCap size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs uppercase tracking-wider font-mono text-sky-400">
                    {t.about.educationTitle}
                  </span>
                  <span className="text-xs font-mono text-white/60 bg-white/[0.04] px-2 py-0.5 rounded-full border border-white/[0.08]">
                    {t.about.gpaLabel}: {educationData.gpa}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-white mt-1 truncate">
                  {educationData.degree[language]}
                </h4>
                <p className="text-xs text-white/50 mt-0.5">
                  {educationData.school[language]}
                </p>
                <p className="text-xs text-white/40 mt-2 leading-relaxed">
                  {educationData.details[language]}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Philosophy & Engineering Tabs */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Tab Selectors */}
            <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] w-fit">
              {philosophyTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-colors ${
                      isActive ? "text-white" : "text-white/50 hover:text-white/80"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTabPill"
                        className="absolute inset-0 rounded-xl bg-white/[0.1] border border-white/[0.15] shadow-inner"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <Icon size={14} className={isActive ? "text-sky-400 relative z-10" : "relative z-10"} />
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Dynamic Content */}
            <div className="relative p-8 md:p-10 rounded-3xl apple-glass specular-border border border-white/[0.08] min-h-[380px] flex flex-col justify-between overflow-hidden">
              <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-sky-500/10 blur-[90px]" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTab.id + language}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="relative space-y-6"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug">
                    {currentTab.title}
                  </h3>

                  <p className="text-sm md:text-base text-white/70 leading-relaxed">
                    {currentTab.content}
                  </p>

                  <div className="pt-4 border-t border-white/[0.08] space-y-3">
                    {currentTab.bullets.map((bullet, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs md:text-sm text-white/80">
                        <CheckCircle2 size={16} className="text-sky-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: t.about.statYears, label: t.about.statYearsLabel, tone: "text-white" },
                { value: t.about.statStack, label: t.about.statStackLabel, tone: "text-white" },
                { value: t.about.statQuality, label: t.about.statQualityLabel, tone: "text-emerald-400" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="p-4 md:p-5 rounded-2xl apple-glass-subtle specular-border border border-white/[0.06] text-center"
                >
                  <div className={`text-lg sm:text-xl md:text-2xl font-bold font-mono tracking-tight ${stat.tone}`}>
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-white/50 uppercase tracking-wider mt-1.5">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
