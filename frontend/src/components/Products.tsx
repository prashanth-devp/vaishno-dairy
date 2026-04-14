"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { products, type Product } from "@/lib/products";

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all",         name: "All Products",  icon: "📦" },
    { id: "milk-powder", name: "Milk Powder",   icon: "🥛" },
    { id: "whitener",    name: "Dairy Whitener",icon: "☕" },
    { id: "whey",        name: "Whey Powder",   icon: "🧪" },
    { id: "premix",      name: "Dairy Premix",  icon: "🥄" },
  ];

  const filtered: Product[] =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section
      id="products"
      ref={ref}
      className="py-20 sm:py-32 bg-[#fbfaf3] relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, #3c5c1f 35px, #3c5c1f 36px)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-6 py-2.5 rounded-full bg-[#3e5926] text-[#f4b200] font-bold text-sm mb-6">
            Our Products
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#192e06] mb-6">
            Premium Dairy
            <span className="block mt-2 bg-gradient-to-r from-[#3c5c1f] to-[#f4b200] bg-clip-text text-transparent">
              Product Range
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Explore our comprehensive range of high-quality dairy products
            designed for the food industry
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`px-5 sm:px-6 py-3 rounded-full font-semibold text-sm sm:text-base transition-all shadow-md hover:shadow-lg ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-[#3e5926] to-[#3c5c1f] text-[#f4b200]"
                  : "bg-[#fdfbea] text-[#3c5c1f] border-2 border-[#3c5c1f]/30 hover:border-[#3c5c1f]"
              }`}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
        >
          {filtered.map((product, index) => (
            <motion.div
              key={product.slug}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-[#fdfbea] rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-[#3c5c1f]/15 flex flex-col"
            >
              {/* Hover tint */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
              />

              <div className="relative p-6 flex flex-col flex-1">
                {/* Product Image */}
                <div className="relative mb-4 rounded-xl overflow-hidden bg-[#f0efe7] h-40 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain p-3"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "/images/products/instant-whole-milk-powder.jpg";
                    }}
                  />
                  <div
                    className={`absolute top-2 right-2 px-2.5 py-1 rounded-full bg-gradient-to-r ${product.gradient} text-white font-bold text-xs shadow-md`}
                  >
                    {product.fat}
                  </div>
                </div>

                {/* Info */}
                <div className="mb-4">
                  <h3 className="text-base font-black text-[#192e06] mb-1.5 leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {product.tagline}
                  </p>
                </div>

                {/* Feature chips */}
                <div className="space-y-1.5 mb-5 flex-1">
                  {product.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-xs text-[#3c5c1f] bg-[#3e5926]/10 rounded-lg px-3 py-1.5"
                    >
                      <svg
                        className="w-3.5 h-3.5 text-[#3c5c1f] shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* View Details → opens /products/[slug] */}
                <Link href={`/products/${product.slug}`}>
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full px-5 py-2.5 rounded-xl bg-gradient-to-r ${product.gradient} text-white font-bold text-sm shadow-md hover:shadow-lg transition-all text-center cursor-pointer`}
                  >
                    View Details →
                  </motion.div>
                </Link>
              </div>

              {/* Corner accent */}
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-[#3c5c1f]/10 to-transparent rounded-tr-full pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-700 mb-6 text-lg">
            Looking for custom solutions? We can help!
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-10 py-4 rounded-2xl bg-gradient-to-r from-[#3e5926] to-[#3c5c1f] text-[#f4b200] font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
          >
            Request Product Catalog
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
