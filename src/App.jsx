import { useEffect, useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import ProductDetail from "./components/ProductDetail";
import MarketplaceCTA from "./components/MarketplaceCTA";
import Lookbook from "./components/Lookbook";
import SocialProof from "./components/SocialProof";
import Footer from "./components/Footer";

import products from "./data/products";

// Contoh: #product/valley-tee menjadi valley-tee
function getProductIdFromHash(hash) {
  const match = hash.match(/^#product\/(.+)$/);

  return match ? decodeURIComponent(match[1]) : null;
}

export default function App() {
  const [productId, setProductId] = useState(() =>
    getProductIdFromHash(window.location.hash)
  );

  useEffect(() => {
    const onHashChange = () => {
      setProductId(getProductIdFromHash(window.location.hash));
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    };

    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  const activeProduct = productId
    ? products.find((product) => product.id === productId)
    : null;

  const goBack = () => {
    window.location.hash = "#collection";
  };

  if (activeProduct) {
    return (
      <div className="min-h-screen bg-cream text-olive font-body">
        <Header />

        <main>
          <ProductDetail
            product={activeProduct}
            onBack={goBack}
          />
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream text-olive font-body">
      <Header />

      <main>
        <Hero />
        <ProductGrid />
        <MarketplaceCTA />
        <Lookbook />
        <SocialProof />
      </main>

      <Footer />
    </div>
  );
}