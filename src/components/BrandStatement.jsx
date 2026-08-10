import brand from "../data/brand";
import Section from "./Section";

/**
 * BrandStatement — pernyataan filosofi brand, sangat minimal.
 * Tanpa card, hanya eyebrow + headline + whitespace luas.
 */
export default function BrandStatement() {
  return (
    <Section id="philosophy" className="text-center">
      <p className="label-tracked text-brown mb-5 fade-in-up">
        The Valley Co. Philosophy
      </p>
      <h2 className="font-display text-xl sm:text-2xl md:text-3xl text-olive-deep leading-relaxed max-w-md mx-auto fade-in-up fade-in-up-delay-1">
        {brand.shortStatement}
      </h2>
    </Section>
  );
}
