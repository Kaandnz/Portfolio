import { type ProjectImage } from "@/data/projectImages";
import { cn } from "@/lib/utils";

export type ShotLoading = "lcp" | "eager" | "lazy";

export function frameRatio(images: (ProjectImage | undefined)[]): number {
  const landscape = images.filter((img): img is ProjectImage => !!img && img.shape === "landscape");
  if (landscape.length === 0) return 16 / 10;
  return landscape.reduce((sum, img) => sum + img.width / img.height, 0) / landscape.length;
}

/**
 * Unretouched UI screenshot inside a clean dark hardware stage.
 * Landscape interfaces fill edge-to-edge top-anchored; portrait phone screens
 * sit centered cleanly without distortion or cropping.
 */
export default function ProjectShot({
  image,
  alt,
  ratio,
  loading = "lazy",
  decoding = "auto",
  className,
}: {
  image: ProjectImage;
  alt: string;
  ratio: number;
  loading?: ShotLoading;
  decoding?: "async" | "auto" | "sync";
  className?: string;
}) {
  const portrait = image.shape === "portrait";
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-line bg-stage",
        portrait && "flex items-center justify-center bg-radial from-[#191b22] to-[#0c0d10] p-3",
        className,
      )}
      style={{ aspectRatio: ratio }}
    >
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
        className={cn(
          "block h-full w-full",
          portrait ? "w-auto max-w-full rounded-md object-contain shadow-lg" : "object-cover object-top",
        )}
      />
    </div>
  );
}
