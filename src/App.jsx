import Header from "./components/Header";
import Hero from "./components/Hero";
import BrandStatement from "./components/BrandStatement";
import ProductGrid from "./components/ProductGrid";
import MarketplaceCTA from "./components/MarketplaceCTA";
import Lookbook from "./components/Lookbook";
import OurStory from "./components/OurStory";
import SocialProof from "./components/SocialProof";
import Footer from "./components/Footer";

/**
 * App — menyusun seluruh section utama sesuai urutan yang disepakati.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-cream text-olive font-body">
      <Header />
      <main>
        <Hero />
        <BrandStatement />
        <ProductGrid />
        <MarketplaceCTA />
        <Lookbook />
        <OurStory />
        <SocialProof />
      </main>
      <Footer />
    </div>
  );
}
