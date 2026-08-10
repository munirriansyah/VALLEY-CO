import { AtSign, Music2, MessageCircle, Mail, Link as LinkIcon } from "lucide-react";
import brand from "../data/brand";
import { socials, marketplaces } from "../data/links";
import Section from "./Section";
import logo from "../assets/valley-co-logo.png";

// Peta icon eksplisit (bukan import * ) agar bundler bisa tree-shake
// icon lucide-react yang tidak dipakai.
const Icons = { AtSign, Music2, MessageCircle, Mail, Link: LinkIcon };

const whatsapp = marketplaces.find((m) => m.id === "whatsapp");

// Link kontak & sosial footer, disusun dari data yang sudah ada.
const footerLinks = [
  ...socials.map((s) => ({ id: s.id, label: s.label, url: s.url, icon: s.icon })),
  ...(whatsapp
    ? [{ id: whatsapp.id, label: "WhatsApp", url: whatsapp.url, icon: whatsapp.icon }]
    : []),
  { id: "email", label: brand.contact.email, url: `mailto:${brand.contact.email}`, icon: "Mail" },
];

/**
 * Footer — logo kecil, tagline, link kontak/sosial, copyright.
 * Minimal, editorial, hairline divider di atas, tanpa card.
 */
export default function Footer() {
  return (
    <Section id="footer" className="text-center">
      <img
        src={logo}
        alt={brand.name}
        className="fade-in-up w-14 h-14 object-contain mx-auto"
      />

      <p className="fade-in-up fade-in-up-delay-1 label-tracked text-olive mt-4">
        {brand.tagline}
      </p>

      <nav className="fade-in-up fade-in-up-delay-1 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mt-8">
        {footerLinks.map((item) => {
          const Icon = Icons[item.icon] || Icons.Link;
          return (
            <a
              key={item.id}
              href={item.url}
              className="flex items-center gap-2 label-tracked text-olive/80 hover:text-olive-deep transition-colors"
            >
              <Icon size={14} strokeWidth={1.5} />
              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>

      <div className="fade-in-up fade-in-up-delay-2 mt-10 pt-6 border-t border-line">
        <p className="font-body text-xs text-olive/60">
          &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
        </p>
        <p className="label-tracked text-olive/40 mt-2">
          {brand.established}
        </p>
      </div>
    </Section>
  );
}
