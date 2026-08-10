import brand from "../data/brand";
import logo from "../assets/valley-co-logo.png";

/**
 * Hero — logo sebagai fokus utama di atas ilustrasi valley/mountain
 * line-art yang senada dengan gaya logo (bukan foto stok generik).
 * Whitespace luas, tanpa card/gradient berat, animasi fade-in halus.
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-cream"
    >
      {/* Visual latar — siluet valley/mountain line-art, sangat halus */}
      <svg
        viewBox="0 0 800 400"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full text-olive opacity-[0.07]"
      >
        <path
          d="M0 300 L90 250 L160 290 L230 210 L300 270 L360 190 L430 260 L500 200 L570 265 L640 220 L710 275 L800 240 L800 400 L0 400 Z"
          fill="currentColor"
        />
        <path
          d="M0 340 L120 300 L200 330 L280 280 L370 320 L460 270 L560 325 L650 290 L730 330 L800 300 L800 400 L0 400 Z"
          fill="currentColor"
          opacity="0.6"
        />
      </svg>

      <div className="relative container-app px-6 pt-20 pb-24 sm:pt-28 sm:pb-32 flex flex-col items-center text-center">
        {/* Logo — fokus utama */}
        <img
          src={logo}
          alt={brand.name}
          className="fade-in-up w-48 sm:w-56 h-auto mb-8"
        />

        {/* Headline */}
        <h1 className="fade-in-up fade-in-up-delay-1 font-display text-2xl sm:text-3xl tracking-[0.06em] uppercase text-olive-deep leading-snug">
          {brand.tagline}
        </h1>

        {/* Subtext */}
        <p className="fade-in-up fade-in-up-delay-2 font-body text-sm sm:text-base text-olive/80 mt-5 max-w-[300px] sm:max-w-sm leading-relaxed">
          Pakaian yang terinspirasi dari alam — dibuat sederhana, tahan lama,
          dan jujur seperti lembah tempatnya berasal.
        </p>

        {/* CTA utama */}
        <a
          href="#collection"
          className="fade-in-up fade-in-up-delay-3 mt-10 inline-block bg-olive-deep text-cream label-tracked px-9 py-4 rounded-md hover:bg-olive transition-colors"
        >
          Shop Collection
        </a>
      </div>
    </section>
  );
}
