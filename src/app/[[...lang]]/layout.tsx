import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Archivo, Courier_Prime } from "next/font/google";
import "../globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { languageFromSegments, languagePaths, languageRedirectScript } from "@/lib/i18n";

// latin-ext carries the Turkish glyphs (ğ, ş, ı, İ)
const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const courierPrime = Courier_Prime({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  variable: "--font-courier",
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
  themeColor: "#c9cdc6",
  colorScheme: "light",
};

export default async function RootLayout({ children, params }: LayoutParams & { children: React.ReactNode }) {
  const lang = languageFromSegments((await params).lang);
  if (!lang) notFound();

  return (
    <html lang={lang} className={`${archivo.variable} ${courierPrime.variable}`}>
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
