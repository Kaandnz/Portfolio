import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Antonio, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { languageFromSegments, languagePaths, languageRedirectScript } from "@/lib/i18n";

// latin-ext carries the Turkish glyphs (ğ, ş, ı, İ, ö, ü, ç)
const antonio = Antonio({
  subsets: ["latin", "latin-ext"],
  variable: "--font-antonio",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  variable: "--font-bricolage",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jetbrains",
  display: "swap",
});

// Only "/" (Turkish) and "/en/" (English) exist; everything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: [] }, { lang: ["en"] }];
}

const meta = {
  tr: {
    title: "Kağan Deniz — Full Stack Geliştirici",
    description:
      "Kağan Deniz, İstanbul'da Full Stack Geliştirici. Düzey'de .NET Core / C# ve Java Spring Boot ile B2B, e-ticaret ve rota optimizasyonu sistemleri; kendi zamanında WebRTC, yapay zekâ, Android ve macOS ürünleri.",
    locale: "tr_TR",
  },
  en: {
    title: "Kağan Deniz — Full Stack Developer",
    description:
      "Portfolio of Kağan Deniz, Full Stack Developer in Istanbul. Builds B2B, e-commerce and route optimization systems at Düzey with .NET Core / C# and Java Spring Boot, plus personal products across WebRTC, AI, Android and macOS.",
    locale: "en_US",
  },
} as const;

type LayoutParams = { params: Promise<{ lang?: string[] }> };

export async function generateMetadata({ params }: LayoutParams): Promise<Metadata> {
  const lang = languageFromSegments((await params).lang) ?? "tr";
  const m = meta[lang];
  return {
    metadataBase: new URL("https://kagandeniz.com"),
    title: m.title,
    description: m.description,
    authors: [{ name: "Kağan Deniz" }],
    creator: "Kağan Deniz",
    alternates: {
      canonical: languagePaths[lang],
      languages: { tr: languagePaths.tr, en: languagePaths.en, "x-default": languagePaths.tr },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      url: languagePaths[lang],
      siteName: "Kağan Deniz",
      locale: m.locale,
      alternateLocale: lang === "tr" ? "en_US" : "tr_TR",
      type: "website",
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default async function RootLayout({ children, params }: LayoutParams & { children: React.ReactNode }) {
  const lang = languageFromSegments((await params).lang);
  if (!lang) notFound();

  return (
    <html lang={lang} className={`${antonio.variable} ${bricolage.variable} ${jetbrainsMono.variable}`}>
      <body>
        {lang === "tr" && (
          // Before first paint: send saved-English or non-Turkish first-time visitors to /en/.
          <script dangerouslySetInnerHTML={{ __html: languageRedirectScript }} />
        )}
        <LanguageProvider language={lang}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
