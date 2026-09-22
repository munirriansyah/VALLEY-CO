import { AtSign } from "lucide-react";
import { socials } from "../data/links";
import Section from "./Section";

import journey1 from "../assets/journey/journey-1.jpg";
import journey2 from "../assets/journey/journey-2.jpg";
import journey3 from "../assets/journey/journey-3.jpg";
import journey4 from "../assets/journey/journey-4.jpg";
import journey5 from "../assets/journey/journey-5.jpg";
import journey6 from "../assets/journey/journey-6.jpg";

const instagramUrl =
  socials.find((social) => social.id === "instagram")?.url || "#";

const posts = [
  { id: "post-1", image: journey1 },
  { id: "post-2", image: journey2 },
  { id: "post-3", image: journey3 },
  { id: "post-4", image: journey4 },
  { id: "post-5", image: journey5 },
  { id: "post-6", image: journey6 },
];

function SocialTile({ image, index }) {
  return (
    <a
      href={instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fade-in-up aspect-square rounded-md bg-olive-deep/[0.06] flex items-center justify-center overflow-hidden hover:opacity-90 transition-opacity"
    >
      <img
        src={image}
        alt={`Valley Co. Journey ${index + 1}`}
        loading="lazy"
        className="w-full h-full object-cover"
      />
    </a>
  );
}

export default function SocialProof() {
  return (
    <Section id="social" className="text-center">
      <p className="label-tracked text-brown mb-2 fade-in-up">
        Community
      </p>

      <h2 className="font-display text-2xl sm:text-3xl text-olive-deep uppercase tracking-[0.04em] fade-in-up fade-in-up-delay-1">
        Follow The Journey
      </h2>

      <p className="font-body text-sm sm:text-base text-olive/80 mt-4 max-w-xs sm:max-w-sm mx-auto leading-relaxed fade-in-up fade-in-up-delay-1">
        Cerita sehari-hari dari lembah, koleksi terbaru, dan orang-orang yang
        mengenakan VALLEY CO.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-10">
        {posts.map((post, index) => (
          <SocialTile
            key={post.id}
            image={post.image}
            index={index}
          />
        ))}
      </div>

      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fade-in-up fade-in-up-delay-2 inline-flex items-center gap-2 mt-10 label-tracked text-olive-deep hover:text-brown transition-colors"
      >
        <AtSign size={16} strokeWidth={1.5} />
        <span>@valleyco &rarr;</span>
      </a>
    </Section>
  );
}