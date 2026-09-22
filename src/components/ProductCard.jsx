import { Shirt } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <a
      href={`#product/${product.id}`}
      className="group flex flex-col fade-in-up"
    >
      <div className="aspect-[4/5] w-full rounded-md overflow-hidden bg-line/15 flex items-center justify-center">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextElementSibling.style.display = "flex";
            }}
          />
        ) : null}
        <Shirt
          size={28}
          strokeWidth={1}
          className="text-olive/25"
          style={product.image ? { display: "none" } : undefined}
        />
      </div>

      <div className="mt-3">
        <p className="label-tracked text-brown">{product.category}</p>
        <h3 className="font-display text-base sm:text-lg text-olive-deep mt-1 leading-snug">
          {product.name}
        </h3>
        <p className="font-body text-sm text-olive/80 mt-1">{product.price}</p>
        <span className="label-tracked text-olive-deep mt-2 inline-block group-hover:text-brown transition-colors">
          View Product &rarr;
        </span>
      </div>
    </a>
  );
}
