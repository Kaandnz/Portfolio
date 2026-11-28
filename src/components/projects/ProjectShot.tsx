import { type ProjectImage } from "@/data/projectImages";
import { cn } from "@/lib/utils";

/** How urgently the browser should fetch a screenshot. "lcp" is the first Düzey item only. */
export type ShotLoading = "lcp" | "eager" | "lazy";

/**
 * One frame ratio (width / height) for a group of screenshots, taken from the
 * landscape images in that group so the ruled cells line up. Portrait phone
 * screens sit inside a frame of this ratio instead of setting their own.
 */
export function frameRatio(images: (ProjectImage | undefined)[]): number {
  const landscape = images.filter((img): img is ProjectImage => !!img && img.shape === "landscape");
  if (landscape.length === 0) return 16 / 10;
  return landscape.reduce((sum, img) => sum + img.width / img.height, 0) / landscape.length;
}

/**
 * A screenshot in a 1.5px ink-ruled cell. Landscape UI fills the cell (anchored
 * to the top, so the app's header always shows); a portrait phone screen is
 * centred at full cell height on the ply's own colour, never stretched or cropped.
 * The frame has a fixed ratio, so nothing shifts while the image loads.
 */
export default function ProjectShot({
  image,
  alt,
  ratio,
  loading = "lazy",
  decoding = "async",
  className,
}: {
  image: ProjectImage;
  alt: string;
  ratio: number;
  loading?: ShotLoading;
  /** "auto" where the image must paint with its container (the case-study sheet). */
  decoding?: "async" | "auto" | "sync";
  className?: string;
}) {
  const portrait = image.shape === "portrait";
  return (
    <div className={cn("form-rule overflow-hidden", className)} style={{ aspectRatio: ratio }}>
      {/* Static export with unoptimized images: a plain img with intrinsic size. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image.src}
        width={image.width}
        height={image.height}
        alt={alt}
        loading={loading === "lazy" ? "lazy" : "eager"}
        fetchPriority={loading === "lcp" ? "high" : "auto"}
        decoding={decoding}
        className={cn("block h-full w-full", portrait ? "object-contain" : "object-cover object-top")}
      />
    </div>
  );
}
