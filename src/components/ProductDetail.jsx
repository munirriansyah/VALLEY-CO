import { useRef, useState } from "react";
import { ArrowLeft, Minus, Plus, Ruler } from "lucide-react";
import Section from "./Section";

function findFirstAvailableSize(sizes = []) {
  const index = sizes.findIndex((item) => item.stock > 0);
  return index >= 0 ? index : 0;
}

export default function ProductDetail({ product, onBack }) {
  const images =
    product.images && product.images.length > 0
      ? product.images
      : [product.image];

  const initialSizes =
    product.fits?.[0]?.sizes || product.sizes || [];

  const [activeImage, setActiveImage] = useState(0);
  const [activeColor, setActiveColor] = useState(0);
  const [activeFit, setActiveFit] = useState(0);
  const [activeSize, setActiveSize] = useState(() =>
    findFirstAvailableSize(initialSizes)
  );
  const [qty, setQty] = useState(1);
  const [showSizeChart, setShowSizeChart] = useState(false);

  const touchStartX = useRef(null);

  const selectedFit = product.fits?.[activeFit];
  const availableSizes =
    selectedFit?.sizes || product.sizes || [];

  const selectedSize = availableSizes[activeSize];
  const selectedColor = product.colors?.[activeColor];
  const displayedPrice = selectedFit?.price || product.price;

  const inStock = (selectedSize?.stock ?? 0) > 0;
  const maxQty = selectedSize?.stock ?? 0;

  const selectFit = (fitIndex) => {
    const newSizes = product.fits?.[fitIndex]?.sizes || [];
    const firstAvailable = findFirstAvailableSize(newSizes);

    setActiveFit(fitIndex);
    setActiveSize(firstAvailable);
    setQty(1);
  };

  const selectSize = (sizeIndex) => {
    setActiveSize(sizeIndex);
    setQty(1);
  };

  const goTo = (index) => {
    if (images.length === 0) return;

    setActiveImage(
      (index + images.length) % images.length
    );
  };

  const onTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const onTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const delta =
      event.changedTouches[0].clientX - touchStartX.current;

    if (Math.abs(delta) > 40) {
      goTo(activeImage + (delta < 0 ? 1 : -1));
    }

    touchStartX.current = null;
  };

  const decQty = () => {
    setQty((currentQty) => Math.max(1, currentQty - 1));
  };

  const incQty = () => {
    setQty((currentQty) =>
      Math.min(maxQty || 1, currentQty + 1)
    );
  };

  const waMessage = encodeURIComponent(
    `Halo VALLEY CO., saya mau pesan:

Produk: ${product.name}
Model: ${selectedFit?.name || "-"}
Warna: ${selectedColor?.name || "-"}
Ukuran: ${selectedSize?.size || "-"}
Jumlah: ${qty}
Harga satuan: ${displayedPrice}`
  );

  const whatsappBase =
    product.marketplaceUrl &&
    product.marketplaceUrl !== "#"
      ? product.marketplaceUrl
      : "https://wa.me/6285814538774";

  const separator = whatsappBase.includes("?") ? "&" : "?";
  const buyUrl = `${whatsappBase}${separator}text=${waMessage}`;

  return (
    <Section
      id="product-detail"
      divider={false}
      className="pt-6 sm:pt-10"
    >
      <button
        type="button"
        onClick={onBack}
        className="fade-in-up flex items-center gap-2 label-tracked text-olive-deep hover:text-brown transition-colors mb-6"
      >
        <ArrowLeft size={16} strokeWidth={1.75} />
        <span>Kembali</span>
      </button>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Galeri foto */}
        <div className="fade-in-up">
          <div
            className="aspect-[4/5] w-full rounded-md overflow-hidden bg-line/15 select-none"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <img
              src={images[activeImage]}
              alt={`${product.name} — foto ${activeImage + 1}`}
              loading="lazy"
              className="w-full h-full object-cover"
              onError={(event) => {
                event.currentTarget.src = product.image;
              }}
            />
          </div>

          {images.length > 1 && (
            <div className="flex gap-3 mt-4 overflow-x-auto pb-1">
              {images.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={`shrink-0 w-16 h-20 rounded-md overflow-hidden border transition-colors ${
                    index === activeImage
                      ? "border-olive-deep"
                      : "border-line/60 opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    onError={(event) => {
                      event.currentTarget.src = product.image;
                    }}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Informasi produk */}
        <div className="fade-in-up fade-in-up-delay-1">
          <p className="label-tracked text-brown mb-2">
            {product.category}
          </p>

          <h1 className="font-display text-2xl sm:text-3xl text-olive-deep leading-snug">
            {product.name}
          </h1>

          <p className="font-display text-xl text-olive-deep mt-3">
            {displayedPrice}
          </p>

          <p className="font-body text-sm sm:text-base text-olive/80 mt-5 leading-relaxed">
            {product.description}
          </p>

          {product.material && (
            <p className="label-tracked text-olive/60 mt-5">
              Bahan &middot; {product.material}
            </p>
          )}

          {/* Pilihan model */}
          {product.fits && product.fits.length > 0 && (
            <div className="mt-6">
              <p className="label-tracked text-olive-deep mb-3">
                Model &middot; {selectedFit?.name}
              </p>

              <div className="flex flex-wrap gap-2">
                {product.fits.map((fit, index) => {
                  const totalStock = fit.sizes.reduce(
                    (total, item) => total + item.stock,
                    0
                  );

                  return (
                    <button
                      key={fit.name}
                      type="button"
                      onClick={() => selectFit(index)}
                      className={`px-4 py-3 rounded-md border text-left transition-colors ${
                        index === activeFit
                          ? "bg-olive-deep text-cream border-olive-deep"
                          : "border-line text-olive-deep hover:border-olive-deep"
                      }`}
                    >
                      <span className="block font-body text-sm">
                        {fit.name}
                      </span>

                      <span
                        className={`block text-xs mt-1 ${
                          index === activeFit
                            ? "text-cream/75"
                            : "text-olive/60"
                        }`}
                      >
                        {fit.price} · Total stok {totalStock}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Pilihan warna */}
          {product.colors && product.colors.length > 0 && (
            <div className="mt-6">
              <p className="label-tracked text-olive-deep mb-3">
                Warna &middot; {selectedColor?.name}
              </p>

              <div className="flex gap-3">
                {product.colors.map((color, index) => (
                  <button
                    key={color.name}
                    type="button"
                    aria-label={color.name}
                    onClick={() => setActiveColor(index)}
                    className={`h-8 w-8 rounded-full border-2 transition-colors ${
                      index === activeColor
                        ? "border-olive-deep"
                        : "border-line/60"
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Pilihan ukuran */}
          {availableSizes.length > 0 && (
            <div className="mt-6">
              <div className="flex items-center justify-between mb-3">
                <p className="label-tracked text-olive-deep">
                  Ukuran
                </p>

                <button
                  type="button"
                  onClick={() =>
                    setShowSizeChart((current) => !current)
                  }
                  className="flex items-center gap-1.5 label-tracked text-olive/60 hover:text-olive-deep transition-colors"
                >
                  <Ruler size={14} strokeWidth={1.75} />
                  <span>Size Chart</span>
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {availableSizes.map((item, index) => {
                  const disabled = item.stock <= 0;

                  return (
                    <button
                      key={item.size}
                      type="button"
                      disabled={disabled}
                      onClick={() => selectSize(index)}
                      className={`min-w-[3rem] px-3 py-2.5 rounded-md border text-sm font-body tracking-wide transition-colors ${
                        disabled
                          ? "border-line/40 text-olive/30 line-through cursor-not-allowed"
                          : index === activeSize
                          ? "bg-olive-deep text-cream border-olive-deep"
                          : "border-line text-olive-deep hover:border-olive-deep"
                      }`}
                    >
                      {item.size}
                    </button>
                  );
                })}
              </div>

              {showSizeChart && product.sizeChart && (
                <div className="mt-4 border border-line rounded-md overflow-hidden">
                  <table className="w-full text-sm font-body">
                    <thead>
                      <tr className="bg-olive-deep/[0.04]">
                        <th className="label-tracked text-olive-deep text-left px-3 py-2">
                          Size
                        </th>
                        <th className="label-tracked text-olive-deep text-left px-3 py-2">
                          Height (cm)
                        </th>
                        <th className="label-tracked text-olive-deep text-left px-3 py-2">
                          Width (cm)
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {product.sizeChart.map((row) => (
                        <tr
                          key={row.size}
                          className="border-t border-line/60"
                        >
                          <td className="px-3 py-2 text-olive-deep">
                            {row.size}
                          </td>
                          <td className="px-3 py-2 text-olive/80">
                            {row.height}
                          </td>
                          <td className="px-3 py-2 text-olive/80">
                            {row.width}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <p className="text-xs text-olive/60 px-3 py-2">
                    *Bandingkan ukuran dengan kaos yang sudah
                    kamu miliki.
                  </p>
                </div>
              )}

              <p className="text-xs text-olive/60 mt-3">
                {inStock
                  ? `Stok ${selectedFit?.name || ""} ukuran ${
                      selectedSize?.size
                    }: ${selectedSize?.stock}`
                  : "Ukuran ini sedang habis"}
              </p>
            </div>
          )}

          {/* Jumlah */}
          <div className="mt-6">
            <p className="label-tracked text-olive-deep mb-3">
              Jumlah
            </p>

            <div className="inline-flex items-center border border-line rounded-md">
              <button
                type="button"
                onClick={decQty}
                disabled={!inStock || qty <= 1}
                aria-label="Kurangi jumlah"
                className="p-3 text-olive-deep disabled:text-olive/30 hover:bg-olive-deep/[0.04] transition-colors"
              >
                <Minus size={16} strokeWidth={1.75} />
              </button>

              <span className="w-10 text-center font-body text-sm text-olive-deep">
                {qty}
              </span>

              <button
                type="button"
                onClick={incQty}
                disabled={!inStock || qty >= maxQty}
                aria-label="Tambah jumlah"
                className="p-3 text-olive-deep disabled:text-olive/30 hover:bg-olive-deep/[0.04] transition-colors"
              >
                <Plus size={16} strokeWidth={1.75} />
              </button>
            </div>

            {inStock && (
              <p className="text-xs text-olive/60 mt-2">
                Maksimal pembelian: {maxQty}
              </p>
            )}
          </div>

          {/* Tombol pembelian */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={inStock ? buyUrl : undefined}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={!inStock}
              className={`flex-1 text-center label-tracked px-6 py-4 rounded-md transition-colors ${
                inStock
                  ? "bg-olive-deep text-cream hover:bg-olive"
                  : "bg-line/40 text-olive/40 pointer-events-none"
              }`}
            >
              {inStock ? "Beli Sekarang" : "Stok Habis"}
            </a>

            <button
              type="button"
              onClick={onBack}
              className="flex-1 text-center label-tracked px-6 py-4 rounded-md border border-line text-olive-deep hover:border-olive-deep transition-colors"
            >
              Kembali
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}