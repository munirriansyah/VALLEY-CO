import baju1 from "../assets/products/baju1.jpg";
import baju2 from "../assets/products/baju2.jpg";
import baju3 from "../assets/products/baju3.jpeg";
import baju4 from "../assets/products/baju4.jpeg";

export const defaultSizeChart = [
  { size: "S", height: 63, width: 56 },
  { size: "M", height: 66, width: 58 },
  { size: "L", height: 70, width: 61 },
  { size: "XL", height: 72, width: 65 },
];

const products = [
  {
    id: "valley-tee",
    name: "Along the Way Tee",
    category: "T-Shirt",
    price: "Mulai Rp 130.000",

    image: baju1,
    images: [baju1, baju2, baju3, baju4],

    description:
      "Kaos katun combed 24s dengan sablon line-art Valley Co. di bagian depan.",

    material: "Cotton Combed 24s",

    colors: [
      {
        name: "Cream",
        hex: "#F2EBE0",
      },
    ],

    fits: [
      {
        name: "Regular Fit",
        price: "Rp 130.000",
        sizes: [
          { size: "S", stock: 0 },
          { size: "M", stock: 0 },
          { size: "L", stock: 1 },
          { size: "XL", stock: 1 },
        ],
      },
      {
        name: "Boxy Fit",
        price: "Rp 139.000",
        sizes: [
          { size: "S", stock: 0 },
          { size: "M", stock: 0 },
          { size: "L", stock: 1 },
          { size: "XL", stock: 1 },
        ],
      },
    ],

    sizeChart: defaultSizeChart,
    featured: true,

    marketplaceUrl: "https://wa.me/6285814538774",
  },
];

export default products;