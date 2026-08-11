import Section from "./Section";
import lookbook1 from "../assets/images/lookbook1.jpg";
import lookbook2 from "../assets/images/lookbook2.jpg";
import lookbook3 from "../assets/images/lookbook3.jpg";

const plates = [
  {
    id: "valley-view",
    image: lookbook1,
    alt: "Valley Co. lifestyle",
    span: "col-span-3 row-span-2 aspect-[4/5] sm:aspect-[3/4]",
  },
  {
    id: "forest-trail",
    image: lookbook2,
    alt: "Valley Co. outdoor lifestyle",
    span: "col-span-2 aspect-square mt-8",
  },
  {
    id: "open-air",
    image: lookbook3,
    alt: "Valley Co. nature lifestyle",
    span: "col-span-2 aspect-square",
  },
];

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
        {plates.map(({ id, image, alt, span }) => (
          <div
            key={id}
            className={`fade-in-up ${span} rounded-md overflow-hidden`}
          >
            <img
              src={image}
              alt={alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}