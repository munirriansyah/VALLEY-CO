const brand = {
  name: "VALLEY CO.",
  tagline: "From the Heart of the Valley",
  established: "EST. 2026",

  // Cerita brand versi ringkas untuk section "Our Story"
  story: {
    heading: "Cerita Kami",
    paragraphs: [
      "VALLEY CO. lahir dari kecintaan pada alam dan kehidupan yang bergerak lebih pelan — udara pagi di lembah, jejak kaki di tanah basah, dan ketenangan yang hanya bisa ditemukan jauh dari keramaian.",
      "Setiap koleksi kami dirancang dengan filosofi yang sama: sederhana, tahan lama, dan terasa jujur — seperti alam itu sendiri.",
    ],
  },

  // Kontak & lokasi (opsional, dipakai di footer)
  contact: {
    email: "hello@valleyco.id",
  },

  // Menu navigasi (desktop & mobile)
  navItems: [
    { label: "Home", href: "#hero" },
    { label: "Collection", href: "#collection" },
    { label: "About", href: "#story" },
    { label: "Contact", href: "#footer" },
  ],
};

export default brand;
