import { ShoppingBag, Store, MessageCircle, Link as LinkIcon } from "lucide-react";
import { marketplaces } from "../data/links";
import Section from "./Section";

// Peta icon eksplisit (bukan import * ) agar bundler bisa tree-shake
// icon lucide-react yang tidak dipakai.
const Icons = { ShoppingBag, Store, MessageCircle, Link: LinkIcon };

/**
 * MarketplaceCTA — "Find Us Online". Daftar link editorial
 * (bukan card) menuju marketplace, dengan hairline antar item.
 */
export default function MarketplaceCTA() {
  return (
    <Section id="marketplace" className="text-center">
      <p className="label-tracked text-brown mb-3 fade-in-up">
        Where To Buy
      </p>
      <h2 className="font-display text-2xl sm:text-3xl text-olive-deep uppercase tracking-[0.04em] fade-in-up fade-in-up-delay-1">
        Find Us Online
      </h2>
      <p className="font-body text-sm sm:text-base text-olive/80 mt-4 max-w-xs sm:max-w-sm mx-auto leading-relaxed fade-in-up fade-in-up-delay-1">
        Koleksi VALLEY CO. tersedia di marketplace favoritmu, atau pesan
        langsung lewat WhatsApp.
      </p>

      <div className="mt-10 max-w-sm mx-auto border-t border-line fade-in-up fade-in-up-delay-2">
        {marketplaces.map((item) => {
          const Icon = Icons[item.icon] || Icons.Link;
          return (
            <a
              key={item.id}
              href={item.url}
              className="group flex items-center justify-between py-5 border-b border-line text-left transition-colors hover:bg-olive-deep/[0.03]"
            >
              <span className="flex items-center gap-3">
                <Icon
                  size={18}
                  strokeWidth={1.5}
                  className="text-brown shrink-0"
                />
                <span className="font-body text-sm sm:text-base text-olive-deep tracking-wide">
                  {item.label}
                </span>
              </span>
              <span className="label-tracked text-olive/60 group-hover:text-olive-deep group-hover:translate-x-0.5 transition-all">
                &rarr;
              </span>
            </a>
          );
        })}
      </div>
    </Section>
  );
}
