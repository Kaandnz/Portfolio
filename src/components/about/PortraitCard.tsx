"use client";

import { useRef, useState, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { Server, Database, Layers, Activity, GraduationCap, CheckCircle2, Sparkles } from "lucide-react";
import { personalInfo, educationData } from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";

export default function PortraitCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const { language } = useLanguage();

  const isTr = language === "tr";

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setRotation({ x: rotateX, y: rotateY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.25,
    });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  const summaryHighlights = [
    {
      icon: Server,
      iconColor: "text-sky-400",
      bgColor: "bg-sky-500/10 border-sky-500/20",
      title: isTr ? "Backend & Core" : "Backend & Core",
      value: ".NET Core, Java Spring Boot, C#, REST APIs",
    },
    {
      icon: Database,
      iconColor: "text-emerald-400",
      bgColor: "bg-emerald-500/10 border-emerald-500/20",
      title: isTr ? "Veritabanı & Storage" : "Databases & Storage",
      value: "PostgreSQL, MS SQL, MongoDB, Elastic",
    },
    {
      icon: Layers,
      iconColor: "text-purple-400",
      bgColor: "bg-purple-500/10 border-purple-500/20",
      title: isTr ? "Mimari & Çözümler" : "Architecture & Solutions",
      value: isTr ? "B2B, Rota Optimizasyonu, SAP, Panorama" : "B2B, Route Optimization, SAP, Panorama",
    },
    {
      icon: Activity,
      iconColor: "text-amber-400",
      bgColor: "bg-amber-500/10 border-amber-500/20",
      title: isTr ? "DevOps & Pipeline" : "DevOps & Pipelines",
      value: "Jenkins CI/CD, ELK Stack, Selenium",
    },
  ];

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.6 }}
      style={{ transformStyle: "preserve-3d" }}
      className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-3xl apple-glass p-7 md:p-8 flex flex-col justify-between overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] border border-white/[0.12] group cursor-pointer"
      data-cursor="pointer"
    >
      {/* Specular Interactive Glare */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 rounded-3xl"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.18), transparent 60%)`,
          opacity: glare.opacity,
        }}
      />

      {/* Top Card Bar */}
      <div className="flex items-center justify-between z-10" style={{ transform: "translateZ(30px)" }}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-white/[0.08] border border-white/15 flex items-center justify-center text-sm font-bold text-white shadow-inner">
            KD
          </div>
          <div>
            <div className="text-sm font-bold text-white tracking-tight">{personalInfo.name}</div>
            <div className="text-[11px] text-white/50 font-mono">
              {personalInfo.title[language]}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-400 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>{isTr ? "Aktif & Hazır" : "Available"}</span>
        </div>
      </div>

      {/* Center Visual: Executive Engineering Overview (No code snippet) */}
      <div className="my-auto z-10 space-y-3" style={{ transform: "translateZ(40px)" }}>
        <div className="flex items-center justify-between text-[11px] font-mono text-white/40 pb-1 border-b border-white/[0.06]">
          <span>{isTr ? "// MÜHENDİSLİK ÖZETİ" : "// ENGINEERING OVERVIEW"}</span>
          <span className="flex items-center gap-1 text-sky-400">
            <Sparkles size={12} />
            <span>Full Stack</span>
          </span>
        </div>

        <div className="grid grid-cols-1 gap-2.5">
          {summaryHighlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] transition-colors"
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${item.bgColor}`}>
                  <Icon size={16} className={item.iconColor} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-mono text-white/50 uppercase tracking-wider">
                    {item.title}
                  </div>
                  <div className="text-xs font-semibold text-white/90 truncate">
                    {item.value}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Tag Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <span className="px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[10px] font-mono text-white/60">
            {isTr ? "Rota Optimizasyonu" : "Route Optimization"}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[10px] font-mono text-white/60">
            {isTr ? "B2B & E-Ticaret" : "B2B & E-Commerce"}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[10px] font-mono text-white/60">
            SAP & Panorama
          </span>
          <span className="px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[10px] font-mono text-white/60">
            ETL Pipelines
          </span>
        </div>
      </div>

      {/* Bottom Education & Status */}
      <div className="pt-3 border-t border-white/[0.08] z-10 space-y-1.5" style={{ transform: "translateZ(25px)" }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-white/80 text-xs">
            <GraduationCap size={15} className="text-sky-400" />
            <span className="font-medium text-[11px] truncate max-w-[210px]">
              {educationData.school[language]}
            </span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-[10px] font-mono text-white/70">
            GPA: {educationData.gpa}
          </span>
        </div>

        <div className="flex items-center justify-between text-[11px] text-white/40 font-mono">
          <span>{educationData.degree[language]}</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <CheckCircle2 size={12} /> {isTr ? "Doğrulandı" : "Verified"}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
