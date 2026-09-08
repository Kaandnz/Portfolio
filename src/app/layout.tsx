import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Kağan Deniz — Full Stack Developer & System Architect",
  description:
    "Personal portfolio of Kağan Deniz. Full Stack Developer specializing in .NET Core, C#, enterprise B2B/SFA systems, high-performance database optimization, and modern web architectures.",
  keywords: [
    "Kağan Deniz",
    "Full Stack Developer",
    ".NET Core",
    "C#",
    "MS SQL Server",
    "MongoDB",
    "Elasticsearch",
    "Jenkins CI/CD",
    "Docker",
    "ELK Stack",
    "Selenium",
    "nopCommerce",
    "Microservices",
  ],
  authors: [{ name: "Kağan Deniz" }],
  creator: "Kağan Deniz",
  openGraph: {
    title: "Kağan Deniz — Full Stack Developer & System Architect",
    description: "Designing scalable backend architectures, enterprise B2B/SFA solutions, and modern web applications.",
    url: "https://kagandeniz.com",
    siteName: "Kağan Deniz Portfolio",
    locale: "tr_TR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#08080a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="dark scroll-smooth">
      <body className="bg-[#08080a] text-[#f5f5f7] min-h-screen selection:bg-sky-500/30 selection:text-white relative">
        {/* Subtle Film Grain Noise Texture Layer */}
        <div className="fixed inset-0 pointer-events-none z-50 bg-noise opacity-[0.035]" />

        {/* Ambient Top Glow */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-sky-500/10 via-transparent to-transparent pointer-events-none -z-10 blur-[100px]" />

        <LanguageProvider>
          <SmoothScroll>
            <CustomCursor />
            {children}
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
