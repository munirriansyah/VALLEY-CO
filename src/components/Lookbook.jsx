import { Mountain, Trees, Wind, Backpack } from "lucide-react";
import Section from "./Section";

// Placeholder visual lookbook — ganti tone/icon dengan foto asli
// (mountain, valley, fabric, outdoor lifestyle) saat sudah tersedia.
const plates = [
  { id: "valley-view", icon: Mountain, span: "col-span-3 row-span-2 aspect-[4/5] sm:aspect-[3/4]" },
  { id: "forest-trail", icon: Trees, span: "col-span-2 aspect-square mt-8" },
  { id: "open-air", icon: Wind, span: "col-span-2 aspect-square" },
  { id: "on-the-trail", icon: Backpack, span: "col-span-3 aspect-[16/10] -mt-4 sm:mt-6" },
];

/**
 * Lookbook — visual editorial, tidak simetris, tanpa carousel.
 * Grid 5 kolom yang dipecah menjadi blok besar/kecil agar terasa
 * seperti tata letak majalah, bukan grid galeri standar.
 */
export default function Lookbook() {
  return (
    <Section id="lookbook">
      <p className="label-tracked text-brown mb-2 text-center fade-in-up">
        Lifestyle
      </p>
      <h2 className="font-display text-2xl sm:text-3xl text-olive-deep mb-10 text-center uppercase tracking-[0.04em] fade-in-up fade-in-up-delay-1">
        The Valley Lookbook
      </h2>

      <div className="grid grid-cols-5 gap-4 sm:gap-6">
        {plates.map(({ id, icon: Icon, span }) => (
          <div
            key={id}
            className={`fade-in-up ${span} rounded-md bg-olive-deep/[0.06] flex items-center justify-center overflow-hidden`}
          >
            {/* placeholder gambar lifestyle — ganti dengan <img> saat foto tersedia */}
            <Icon size={30} strokeWidth={0.9} className="text-olive/25" />
          </div>
        ))}
      </div>
    </Section>
  );
}
