"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function TechMarquee() {
  const { language } = useLanguage();
  const isTr = language === "tr";

  const marqueeItems1 = [
    ".NET CORE",
    "C#",
    "JAVA SPRING BOOT",
    "ANGULAR",
    "POSTGRESQL",
    "MS SQL SERVER",
    "MONGODB",
    "ELASTICSEARCH",
    "MICROSERVICES",
    "ENTITY FRAMEWORK CORE",
    "RESTFUL APIS",
    "NEXT.JS 16",
    "REACT 19",
    "APPLE FLUID MOTION",
    isTr ? "ROTA OPTİMİZASYONU" : "ROUTE OPTIMIZATION",
    "TYPESCRIPT",
  ];

  const marqueeItems2 = [
    "NOPCOMMERCE",
    "SAP / ERP",
    "PANORAMA",
    "JENKINS CI/CD",
    "DOCKER",
    "ELK STACK",
    "SELENIUM WEBDRIVER",
    isTr ? "SİSTEM MİMARİSİ" : "SYSTEM ARCHITECTURE",
    isTr ? "ÖDEME SİSTEMLERİ" : "PAYMENT GATEWAYS",
    "HANGFIRE ETL",
    "SOLID ARCHITECTURE",
    "IIS SERVER",
    "TAILWIND CSS v4",
    "SQL QUERY TUNING",
    "DATABASE INDEXING",
    "AGILE / SCRUM",
  ];
  return (
    <div className="w-full overflow-hidden py-8 space-y-3 select-none opacity-80">
      {/* Ribbon 1 - Moving Left */}
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex items-center gap-8 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white/20 font-mono"
        >
          {[...marqueeItems1, ...marqueeItems1].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="hover:text-white transition-colors duration-300">
                {item}
              </span>
              <span className="w-2 h-2 rounded-full bg-sky-500/40" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Ribbon 2 - Moving Right */}
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
          className="flex items-center gap-8 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white/10 font-mono"
        >
          {[...marqueeItems2, ...marqueeItems2].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="hover:text-white/80 transition-colors duration-300">
                {item}
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500/30" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
