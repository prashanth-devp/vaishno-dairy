// ─────────────────────────────────────────────────────────────────
//  Shared Vaishno Hills Dairy — Product Data
//  Used by: Products section (listing) + /products/[slug] (detail)
// ─────────────────────────────────────────────────────────────────

export type ProductSpec = { label: string; value: string };

export type Product = {
  slug: string;            // URL-safe ID  e.g. "instant-whole-milk-powder"
  category: string;        // filter key
  name: string;
  tagline: string;         // short one-liner shown on card
  description: string;     // paragraph for detail page
  fat: string;             // badge text
  features: string[];      // bullet chips on card
  applications: string[];  // use-cases on detail page
  specifications: ProductSpec[];
  packaging: string;
  image: string;           // /images/products/...
  gradient: string;        // Tailwind from-X to-Y
};

export const products: Product[] = [
  {
    slug: "instant-whole-milk-powder",
    category: "milk-powder",
    name: "Instant Whole Milk Powder (26%)",
    tagline: "Used mainly in Tea & Coffee Instant Premixes",
    description:
      "Our Instant Whole Milk Powder (26% fat) is manufactured using state-of-the-art spray drying technology to preserve the natural nutrients and flavour of fresh milk. It dissolves quickly and completely in both hot and cold water, making it ideal for instant beverage applications. Produced at our ISO-certified facility in Basavakalyan, Karnataka, every batch undergoes rigorous quality control.",
    fat: "26%",
    features: ["Instant Soluble", "Rich Taste", "Premium Quality"],
    applications: [
      "Tea & Coffee Premixes",
      "Flavoured Milk Powder",
      "Nutritional Supplements",
      "Bakery & Confectionery",
      "Chocolates",
    ],
    specifications: [
      { label: "Fat Content",  value: "Min 26%" },
      { label: "Moisture",     value: "Max 4%" },
      { label: "Protein",      value: "Min 24%" },
      { label: "Solubility",   value: "> 99%" },
      { label: "Shelf Life",   value: "24 months" },
      { label: "Storage",      value: "Cool & Dry Place" },
    ],
    packaging: "25 Kg HDPE bags / Custom packaging available",
    image: "/images/products/instant-whole-milk-powder.jpg",
    gradient: "from-[#3e5926] to-[#3c5c1f]",
  },
  {
    slug: "whole-milk-powder-cm",
    category: "milk-powder",
    name: "Whole Milk Powder CM (26%)",
    tagline: "Used in Dairy, Chocolate, Confectionery & Ice Cream",
    description:
      "Whole Milk Powder (Conventional Method) with 26% fat content is produced by conventional spray-drying. Rich in natural milk fat, it provides excellent texture and flavour to chocolate, confectionery, ice cream, and recombined dairy products. Its high fat content gives a creamy, full-bodied taste that is hard to match.",
    fat: "26%",
    features: ["High Fat Content", "Smooth Texture", "Versatile Use"],
    applications: [
      "Chocolate & Confectionery",
      "Ice Cream",
      "Recombined Dairy",
      "Biscuits & Bakery",
      "Infant Foods",
    ],
    specifications: [
      { label: "Fat Content",  value: "Min 26%" },
      { label: "Moisture",     value: "Max 4%" },
      { label: "Protein",      value: "Min 24%" },
      { label: "Bulk Density", value: "0.45–0.60 g/ml" },
      { label: "Shelf Life",   value: "24 months" },
      { label: "Storage",      value: "Cool & Dry Place" },
    ],
    packaging: "25 Kg HDPE / Kraft bags",
    image: "/images/products/whole-milk-powder-cm.jpg",
    gradient: "from-[#f4b200] to-[#dbaf34]",
  },
  {
    slug: "skimmed-milk-powder-bm",
    category: "milk-powder",
    name: "Skimmed Milk Powder (BM)",
    tagline: "Perfect for Khoya, Rasgulla, Chhena & Sweet items",
    description:
      "Our Skimmed Milk Powder (Brush Method) is a low-fat, high-protein milk powder ideal for traditional Indian sweets manufacturing. It provides the authentic taste and texture required for products like Khoya, Rasgulla, Gulab Jamun, Chhena, and other milk-based sweets. It is also widely used in functional food and dietary supplement applications.",
    fat: "Low Fat",
    features: ["Low Fat", "High Protein", "Traditional Sweets"],
    applications: [
      "Khoya & Indian Sweets",
      "Rasgulla & Chhena",
      "Gulab Jamun Premix",
      "Functional Foods",
      "Dietary Supplements",
    ],
    specifications: [
      { label: "Fat Content",  value: "Max 1.5%" },
      { label: "Moisture",     value: "Max 4%" },
      { label: "Protein",      value: "Min 34%" },
      { label: "Acidity",      value: "Max 0.15%" },
      { label: "Shelf Life",   value: "24 months" },
      { label: "Storage",      value: "Cool & Dry Place" },
    ],
    packaging: "25 Kg HDPE bags",
    image: "/images/products/skimmed-milk-powder-bm.jpg",
    gradient: "from-[#3c5c1f] to-[#192e06]",
  },
  {
    slug: "beverage-whitener-gold",
    category: "whitener",
    name: "Beverage Whitener Gold (22%)",
    tagline: "Instant Soluble in Hot water for Tea & Coffee",
    description:
      "Beverage Whitener Gold (22% fat) is a premium dairy-based whitener formulated for instant solubility in hot beverages. It imparts a rich, creamy colour and flavour to tea and coffee with no curdling or sedimentation. The Gold variant ensures superior taste and a golden creamy appearance, preferred by vending machine operators, hotels, and food-service companies.",
    fat: "22%",
    features: ["Instant Dissolve", "Rich Creamy", "Perfect Blend"],
    applications: [
      "Tea & Coffee Whitening",
      "Instant Beverage Mixes",
      "Vending Machines",
      "Hotel & Catering",
      "Institutional Kitchens",
    ],
    specifications: [
      { label: "Fat Content",    value: "Min 22%" },
      { label: "Moisture",       value: "Max 3.5%" },
      { label: "Solubility",     value: "Instant" },
      { label: "Heat Stability", value: "Excellent" },
      { label: "Shelf Life",     value: "18 months" },
      { label: "Storage",        value: "Cool & Dry Place" },
    ],
    packaging: "10 Kg Jar / 25 Kg HDPE bags",
    image: "/images/products/beverage-whitener-gold.jpg",
    gradient: "from-[#f4b200] to-[#3e5926]",
  },
  {
    slug: "dairy-whitener-premium",
    category: "whitener",
    name: "Dairy Whitener Premium (20%)",
    tagline: "Specially developed for Tea & Coffee Beverage",
    description:
      "Our Dairy Whitener Premium (20% fat) is specially formulated for the tea and coffee beverage industry. It is engineered to resist curdling in high-tannin environments and provides a consistent creamy texture in all types of tea and coffee preparations. Its premium formulation ensures consistent dissolving performance across a wide temperature range.",
    fat: "20%",
    features: ["Premium Quality", "Instant Mix", "Great Taste"],
    applications: [
      "Tea & Coffee Industry",
      "Beverage Manufacturing",
      "Instant Drink Mixes",
      "Institutional Catering",
      "Food Service",
    ],
    specifications: [
      { label: "Fat Content",    value: "Min 20%" },
      { label: "Moisture",       value: "Max 3.5%" },
      { label: "Protein",        value: "Min 18%" },
      { label: "Heat Stability", value: "High" },
      { label: "Shelf Life",     value: "18 months" },
      { label: "Storage",        value: "Cool & Dry Place" },
    ],
    packaging: "25 Kg HDPE bags / 10 Kg Jars",
    image: "/images/products/dairy-whitener-premium-20.jpg",
    gradient: "from-[#3e5926] to-[#f4b200]",
  },
  {
    slug: "whey-powder",
    category: "whey",
    name: "Whey Powder",
    tagline: "High-quality whey for various food applications",
    description:
      "Our Sweet Whey Powder is a by-product of natural cheese making. Rich in whey proteins, lactose, and minerals, it is widely used in the food industry for its nutritional, functional, and economic benefits — improving texture, moisture retention, and shelf life of bakery products, dairy analogs, and sports nutrition formulations.",
    fat: "Variable",
    features: ["Pure Whey", "High Protein", "Multi-purpose"],
    applications: [
      "Bread & Bakery",
      "Processed Cheese",
      "Sports Nutrition",
      "Infant Foods",
      "Animal Feed",
    ],
    specifications: [
      { label: "Protein",    value: "Min 11%" },
      { label: "Lactose",    value: "65–75%" },
      { label: "Moisture",   value: "Max 4%" },
      { label: "Fat",        value: "Max 1%" },
      { label: "Shelf Life", value: "24 months" },
      { label: "Storage",    value: "Cool & Dry Place" },
    ],
    packaging: "25 Kg HDPE bags",
    image: "/images/products/whey-powder.jpg",
    gradient: "from-[#3c5c1f] to-[#dbaf34]",
  },
  {
    slug: "chai-special-premix",
    category: "premix",
    name: "Dairy Mix — Chai Special (6%)",
    tagline: "Used in Milk, Tea & Coffee Preparation",
    description:
      "Dairy Mix Chai Special (6% fat) is a perfectly proportioned blend designed for ready-to-mix chai preparations. It combines dairy solids with tea-compatible ingredients to deliver consistent taste, colour, and body to every cup of masala or plain chai. Ideal for street vendors, vending machine operators, and institutional kitchens.",
    fat: "6%",
    features: ["Tea Special", "Rich Flavor", "Easy Mix"],
    applications: [
      "Chai Premix",
      "Milk Tea Vending",
      "Roadside Chai Stalls",
      "Food Service Industry",
      "Institutional Kitchens",
    ],
    specifications: [
      { label: "Fat Content",  value: "Min 6%" },
      { label: "Moisture",     value: "Max 4%" },
      { label: "Sugar",        value: "As per formulation" },
      { label: "Blend",        value: "Dairy + Tea Solids" },
      { label: "Shelf Life",   value: "12 months" },
      { label: "Storage",      value: "Cool & Dry Place" },
    ],
    packaging: "10 Kg Jar / 25 Kg bags",
    image: "/images/products/chai-special-premix.jpg",
    gradient: "from-[#f4b200] to-[#3c5c1f]",
  },
  {
    slug: "dairy-mix-premium",
    category: "premix",
    name: "Dairy Mix — Premium (18%)",
    tagline: "Premium blend for beverages and sweets",
    description:
      "Dairy Mix Premium (18% fat) is a versatile high-fat dairy premix for premium beverage applications and sweet preparations. It delivers a rich, full-bodied dairy flavour and smooth texture, making it the preferred choice for premium chai, flavoured milk drinks, and traditional sweet recipes in hotel chains and restaurant kitchens.",
    fat: "18%",
    features: ["Premium Mix", "Rich Taste", "Versatile"],
    applications: [
      "Premium Chai Premix",
      "Flavoured Milk",
      "Milk-Based Desserts",
      "Restaurants & Hotels",
      "Cafes & Beverage Chains",
    ],
    specifications: [
      { label: "Fat Content",  value: "Min 18%" },
      { label: "Moisture",     value: "Max 4%" },
      { label: "Protein",      value: "Min 20%" },
      { label: "Solubility",   value: "Excellent" },
      { label: "Shelf Life",   value: "18 months" },
      { label: "Storage",      value: "Cool & Dry Place" },
    ],
    packaging: "10 Kg Jar / 25 Kg HDPE bags",
    image: "/images/products/premium-18-premix.jpg",
    gradient: "from-[#3e5926] to-[#dbaf34]",
  },
];

/** Look up a single product by its URL slug */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
