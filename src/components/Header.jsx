import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import brand from "../data/brand";
import logo from "../assets/valley-co-logo.png";

/**
 * Header / Navbar — sticky, hairline bottom border, cream w/ slight
 * transparency + blur. Logo kiri, menu kanan (desktop inline, mobile drawer).
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Kunci scroll body saat menu mobile terbuka
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-sm border-line"
          : "bg-cream/70 backdrop-blur-sm border-line/60"
      }`}
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        {/* Logo — kiri */}
        <a href="#hero" className="flex items-center gap-2 shrink-0">
          <img
            src={logo}
            alt={brand.name}
            className="h-9 w-9 object-contain"
          />
          <span className="font-display text-sm tracking-[0.15em] uppercase text-olive-deep hidden xs:inline">
            {brand.name}
          </span>
        </a>

        {/* Menu desktop — kanan */}
        <nav className="hidden md:flex items-center gap-8">
          {brand.navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="label-tracked text-olive hover:text-olive-deep transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Tombol menu mobile */}
        <button
          type="button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-olive-deep p-1 -mr-1"
        >
          {open ? (
            <X size={22} strokeWidth={1.75} />
          ) : (
            <Menu size={22} strokeWidth={1.75} />
          )}
        </button>
      </div>

      {/* Drawer menu mobile */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col border-t border-line bg-cream/95 backdrop-blur-sm">
          {brand.navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="label-tracked text-olive hover:text-olive-deep transition-colors px-6 py-4 border-b border-line/60 last:border-b-0"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
