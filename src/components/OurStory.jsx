import { Mountain } from "lucide-react";
import brand from "../data/brand";
import Section from "./Section";

/**
 * OurStory — cerita singkat brand, layout editorial (bukan card).
 * Mobile: gambar lalu teks. Desktop: gambar & teks berdampingan.
 */
export default function OurStory() {
  return (
    <Section id="story">
      <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
        {/* Visual pendamping — placeholder valley/nature */}
        <div className="fade-in-up aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] w-full rounded-md bg-olive-deep/[0.06] flex items-center justify-center overflow-hidden">
          {/* placeholder gambar valley/nature — ganti dengan <img> saat foto tersedia */}
          <Mountain size={34} strokeWidth={0.9} className="text-olive/25" />
        </div>

        {/* Teks cerita */}
        <div className="fade-in-up fade-in-up-delay-1 text-center md:text-left">
          <p className="label-tracked text-brown mb-3">Our Story</p>
          <h2 className="font-display text-2xl sm:text-3xl text-olive-deep leading-snug">
            {brand.story.heading}
          </h2>
          <div className="mt-5 space-y-4">
            {brand.story.paragraphs.map((p, i) => (
              <p
                key={i}
                className="font-body text-sm sm:text-base text-olive/80 leading-relaxed"
              >
                {p}
              </p>
            ))}
          </div>
          <p className="label-tracked text-olive/60 mt-6">
            {brand.established}
          </p>
        </div>
      </div>
    </Section>
  );
}
