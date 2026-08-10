import * as Icons from "lucide-react";

/**
 * LinkButton — tombol tautan generik (marketplace/social),
 * dipakai berulang dengan icon dari lucide-react berdasarkan nama string.
 */
export default function LinkButton({ label, url, icon, variant = "outline" }) {
  const Icon = Icons[icon] || Icons.Link;

  const base =
    "w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-md border transition-colors font-body text-sm tracking-wide";
  const styles =
    variant === "solid"
      ? "bg-olive-deep text-cream border-olive-deep hover:bg-olive"
      : "bg-transparent text-olive-deep border-line hover:border-olive-deep";

  return (
    <a href={url} className={`${base} ${styles}`}>
      <Icon size={18} strokeWidth={1.75} />
      <span>{label}</span>
    </a>
  );
}
