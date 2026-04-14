"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Product } from "@/lib/products";

export default function ProductDetailClient({
  product,
  allProducts,
}: {
  product: Product;
  allProducts: Product[];
}) {
  const router = useRouter();

  // Related products (same category, excluding current)
  const related = allProducts
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#fbfaf3]">
      {/* ── Breadcrumb Bar ─────────────────────────── */}
      <div className="bg-[#192e06] text-white/80 text-sm py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-[#f4b200] transition-colors">
            Home
          </Link>
          <span className="text-white/40">›</span>
          <Link
            href="/#products"
            onClick={(e) => {
              e.preventDefault();
              router.push("/");
              setTimeout(() => {
                document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
              }, 300);
            }}
            className="hover:text-[#f4b200] transition-colors"
          >
            Products
          </Link>
          <span className="text-white/40">›</span>
          <span className="text-[#f4b200] font-semibold truncate max-w-xs">{product.name}</span>
        </div>
      </div>

      {/* ── Hero Section ───────────────────────────── */}
      <div className={`bg-gradient-to-br ${product.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-[#192e06]/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-2xl border border-white/20 flex-shrink-0"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain p-6"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "/images/products/instant-whole-milk-powder.jpg";
                }}
              />
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white"
            >
              {/* Category badge */}
              <span className="inline-block px-4 py-1 rounded-full bg-[#f4b200]/20 border border-[#f4b200]/50 text-[#f4b200] text-xs font-bold uppercase tracking-widest mb-4">
                {product.category.replace("-", " ")}
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4">
                {product.name}
              </h1>

              <p className="text-white/80 text-lg mb-6 max-w-xl">{product.tagline}</p>

              {/* Fat badge + features */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-4 py-1.5 rounded-full bg-[#f4b200] text-[#192e06] font-black text-sm">
                  Fat: {product.fat}
                </span>
                {product.features.map((f) => (
                  <span
                    key={f}
                    className="px-3 py-1.5 rounded-full border border-white/30 bg-white/10 text-white text-xs font-semibold"
                  >
                    {f}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/");
                    setTimeout(() => {
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }, 300);
                  }}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#f4b200] text-[#192e06] font-bold shadow-lg hover:bg-[#dbaf34] hover:scale-105 transition-all"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-all"
                >
                  ← Back to Home
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Main Content ───────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Left: Description + Applications */}
          <div className="lg:col-span-2 space-y-10">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-[#3c5c1f]/10"
            >
              <h2 className="text-xl font-black text-[#192e06] mb-4 flex items-center gap-2">
                <span className="w-1 h-6 rounded-full bg-[#f4b200] inline-block" />
                Product Overview
              </h2>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </motion.div>

            {/* Applications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-[#3c5c1f]/10"
            >
              <h2 className="text-xl font-black text-[#192e06] mb-6 flex items-center gap-2">
                <span className="w-1 h-6 rounded-full bg-[#f4b200] inline-block" />
                Applications
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {product.applications.map((app) => (
                  <div
                    key={app}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#3e5926]/8 border border-[#3c5c1f]/10"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#f4b200] flex-shrink-0" />
                    <span className="text-sm font-semibold text-[#3c5c1f]">{app}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Why choose us block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-[#3e5926] to-[#192e06] rounded-2xl p-8 text-white shadow-xl"
            >
              <h2 className="text-xl font-black mb-6 text-[#f4b200]">Why Vaishno Hills Dairy?</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: "🏭", text: "ISO Certified manufacturing facility" },
                  { icon: "✅", text: "FSSAI Approved — food grade quality" },
                  { icon: "📦", text: "30,000 L/hr processing capacity" },
                  { icon: "🌍", text: "Pan-India & export distribution" },
                  { icon: "🔬", text: "100% batch-level quality testing" },
                  { icon: "⚡", text: "Fast dispatch & reliable delivery" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <p className="text-sm text-white/85 font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Specifications + Packaging + CTA */}
          <div className="space-y-6">
            {/* Specifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-[#3c5c1f]/10"
            >
              <h2 className="text-lg font-black text-[#192e06] mb-4 flex items-center gap-2">
                <span className="w-1 h-5 rounded-full bg-[#f4b200] inline-block" />
                Specifications
              </h2>
              <div className="divide-y divide-[#3c5c1f]/10">
                {product.specifications.map((spec) => (
                  <div key={spec.label} className="flex justify-between items-center py-2.5 text-sm">
                    <span className="text-gray-600 font-medium">{spec.label}</span>
                    <span className="text-[#192e06] font-black">{spec.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Packaging */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-[#3c5c1f]/10"
            >
              <h2 className="text-lg font-black text-[#192e06] mb-3 flex items-center gap-2">
                <span className="w-1 h-5 rounded-full bg-[#f4b200] inline-block" />
                Packaging
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">{product.packaging}</p>
              <p className="text-xs text-[#3c5c1f] mt-2 font-semibold">
                ✓ Custom packaging available on request
              </p>
            </motion.div>

            {/* Enquiry CTA card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="bg-[#f4b200] rounded-2xl p-6 shadow-xl"
            >
              <h3 className="text-[#192e06] font-black text-lg mb-2">Get a Quote</h3>
              <p className="text-[#192e06]/80 text-sm mb-4">
                Interested in {product.name}? Contact us for pricing, samples, and custom orders.
              </p>
              <Link
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/");
                  setTimeout(() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }, 300);
                }}
                className="block w-full text-center px-5 py-3 rounded-xl bg-[#192e06] text-[#f4b200] font-bold hover:bg-[#3e5926] transition-colors"
              >
                Request a Quote →
              </Link>
              <a
                href="tel:+919341130708"
                className="block w-full text-center mt-2 text-sm text-[#192e06]/80 hover:text-[#192e06] font-semibold"
              >
                📞 +91 93411 30708
              </a>
            </motion.div>
          </div>
        </div>

        {/* ── Related Products ─────────────────────── */}
        {related.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-black text-[#192e06] mb-8">
              Related Products
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-[#3c5c1f]/10 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className={`h-36 bg-gradient-to-br ${p.gradient} flex items-center justify-center relative`}>
                    <div className="absolute inset-0 bg-[#192e06]/20" />
                    <img
                      src={p.image}
                      alt={p.name}
                      className="relative z-10 h-28 w-full object-contain p-3"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "/images/products/instant-whole-milk-powder.jpg";
                      }}
                    />
                  </div>
                  <div className="p-5">
                    <p className="font-black text-[#192e06] text-sm leading-tight mb-1 group-hover:text-[#3e5926] transition-colors">
                      {p.name}
                    </p>
                    <p className="text-xs text-gray-500">{p.tagline}</p>
                    <span className="inline-block mt-3 text-xs font-bold text-[#3c5c1f] group-hover:text-[#f4b200] transition-colors">
                      View Details →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
