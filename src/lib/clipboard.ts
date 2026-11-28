/**
 * Clipboard API first, legacy execCommand second. Resolves false when both are
 * unavailable or denied, so callers can show the address instead of a fake
 * "copied" state.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // fall through to the legacy path
  }
  try {
    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(field);
    return ok;
  } catch {
    return false;
  }
}

export type CopyState = "idle" | "copied" | "failed";

/** "https://www.linkedin.com/in/ka%C4%9Fandeniz/" -> "linkedin.com/in/kağandeniz" */
export function displayUrl(url: string): string {
  try {
    const { hostname, pathname } = new URL(url);
    return `${hostname.replace(/^www\./, "")}${decodeURIComponent(pathname).replace(/\/$/, "")}`;
  } catch {
    return url;
  }
}
