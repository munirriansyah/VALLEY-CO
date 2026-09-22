import products from "../data/products";
import Section from "./Section";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const featured = products.filter((p) => p.featured).slice(0, 4);

  return (
    <Section id="collection">
      <p className="label-tracked text-brown mb-2 text-center fade-in-up">
        Koleksi
      </p>
      <h2 className="font-display text-2xl sm:text-3xl text-olive-deep mb-10 text-center uppercase tracking-[0.04em] fade-in-up fade-in-up-delay-1">
        Featured Collection
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Section>
  );
}
