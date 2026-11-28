import type { LocalizedString } from "./portfolioData";

/**
 * Screenshot metadata per project id (projectsData[].id).
 * width/height are the intrinsic pixel size of the file at `src`.
 * The files are bare UI crops made by scripts/crop-shots.mjs (no window chrome,
 * phone bezel or backdrop); if it changes a crop, copy its printed sizes here.
 */
export interface ProjectImage {
  src: string;
  width: number;
  height: number;
  /** "landscape" for app/browser UI, "portrait" for a single phone screen. */
  shape: "landscape" | "portrait";
  alt: LocalizedString;
}

export const projectImages: Record<string, ProjectImage> = {
  "duzey-sfa-b2b": {
    src: "/images/projects/duzey-market.webp",
    width: 1376,
    height: 704,
    shape: "landscape",
    alt: {
      tr: "duzeymarket.com ana sayfası: kategori menüsü, kampanya görseli ve marka şeridi",
      en: "duzeymarket.com home page: category menu, campaign banner and brand strip",
    },
  },
  "duzey-route-opt": {
    src: "/images/projects/route-opt.webp",
    width: 1376,
    height: 704,
    shape: "landscape",
    alt: {
      tr: "Rota optimizasyonu planlama ekranı: araç listesi, sıralı teslimat durakları ve harita üzerinde rotalar",
      en: "Route optimization planning screen: vehicle list, ordered delivery stops and routes on a map",
    },
  },
  dailyrota: {
    src: "/images/projects/dailyrota.webp",
    width: 1376,
    height: 834,
    shape: "landscape",
    alt: {
      tr: "Rota · DailyTracker ana sayfası: asistan komut alanı, bütçe ve ödeme özetleri",
      en: "Rota · DailyTracker home: assistant command field, budget and payment summaries",
    },
  },
  squadvoice: {
    src: "/images/projects/squadvoice.webp",
    width: 1376,
    height: 834,
    shape: "landscape",
    alt: {
      tr: "SquadVoice oyun odası: ekran yayını, katılımcı kartları ve oda sohbeti",
      en: "SquadVoice game room: screen share, participant cards and room chat",
    },
  },
  "sql-game": {
    src: "/images/projects/sql-game.webp",
    width: 1376,
    height: 834,
    shape: "landscape",
    alt: {
      tr: "SQL Quest ana ekranı: vaka sorgusu, canlı çıktı tablosu ve müfredat ilerlemesi",
      en: "SQL Quest main screen: case query, live result table and curriculum progress",
    },
  },
  elementa: {
    src: "/images/projects/elementa.webp",
    width: 1374,
    height: 828,
    shape: "landscape",
    alt: {
      tr: "Elementa: kategori filtreleriyle 118 elementlik etkileşimli periyodik tablo",
      en: "Elementa: interactive periodic table of 118 elements with category filters",
    },
  },
  "dnz-market": {
    src: "/images/projects/dnz-market.webp",
    width: 352,
    height: 739,
    shape: "portrait",
    alt: {
      tr: "DNZ Market telefon ekranı: barkod okutma ve ürün fiyatı",
      en: "DNZ Market phone screen: barcode scan and product price",
    },
  },
  "koi-theme": {
    src: "/images/projects/koi-theme.webp",
    width: 1600,
    height: 1000,
    shape: "landscape",
    alt: {
      tr: "Koi Theme: Mac masaüstünde koi göleti, menü çubuğu menüsü ve ayarlar penceresi",
      en: "Koi Theme: koi pond on the Mac desktop, menu bar menu and settings window",
    },
  },
  nodoomscroll: {
    src: "/images/projects/nodoomscroll.webp",
    width: 352,
    height: 754,
    shape: "portrait",
    alt: {
      tr: "NoDoomScroll telefon ekranı: koruma durumu, günlük özet ve engellenecek akışlar",
      en: "NoDoomScroll phone screen: protection status, daily summary and feeds to block",
    },
  },
  "sql-formatter": {
    src: "/images/projects/sql-formatter.webp",
    width: 1376,
    height: 837,
    shape: "landscape",
    alt: {
      tr: "SQL List Formatter penceresi: sorgu profilleri, girdi ve çıktı alanları",
      en: "SQL List Formatter window: query profiles, input and output fields",
    },
  },
};
