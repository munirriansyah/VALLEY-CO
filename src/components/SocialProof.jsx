import { AtSign, Camera } from "lucide-react";
import { socials } from "../data/links";
import Section from "./Section";

const instagramUrl =
  socials.find((s) => s.id === "instagram")?.url || "#";

// Placeholder grid — ganti setiap entry dengan foto Instagram asli.
const posts = [
  { id: "post-1" },
  { id: "post-2" },
  { id: "post-3" },
  { id: "post-4" },
  { id: "post-5" },
  { id: "post-6" },
];

/**
 * SocialProof — "Follow The Journey". Grid foto ala Instagram,
 * placeholder mudah diganti, tanpa carousel/API.
 */
export default function SocialProof() {
  return (
    <Section id="social" className="text-center">
      <p className="label-tracked text-brown mb-2 fade-in-up">Community</p>
      <h2 className="font-display text-2xl sm:text-3xl text-olive-deep uppercase tracking-[0.04em] fade-in-up fade-in-up-delay-1">
        Follow The Journey
      </h2>
      <p className="font-body text-sm sm:text-base text-olive/80 mt-4 max-w-xs sm:max-w-sm mx-auto leading-relaxed fade-in-up fade-in-up-delay-1">
        Cerita sehari-hari dari lembah, koleksi terbaru, dan orang-orang yang
        mengenakan VALLEY CO.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-10">
        {posts.map((post) => (
          <a
            key={post.id}
            href={instagramUrl}
            className="fade-in-up aspect-square rounded-md bg-olive-deep/[0.06] flex items-center justify-center overflow-hidden hover:opacity-90 transition-opacity"
          >
            {/* placeholder foto Instagram — ganti dengan <img> saat foto tersedia */}
            <Camera size={22} strokeWidth={0.9} className="text-olive/25" />
          </a>
        ))}
      </div>

      <a
        href={instagramUrl}
        className="fade-in-up fade-in-up-delay-2 inline-flex items-center gap-2 mt-10 label-tracked text-olive-deep hover:text-brown transition-colors"
      >
        <AtSign size={16} strokeWidth={1.5} />
        <span>@valleyco &rarr;</span>
      </a>
    </Section>
  );
}
