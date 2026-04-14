"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Carousel from "@/components/Carousel";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#fbfaf3] via-[#f0efe7] to-[#ebe8da]">
      {/* Animated Background Orbs */}
      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-[#3c5c1f]/15 via-[#f4b200]/10 to-[#3e5926]/10 blur-3xl"
      />

      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gradient-to-tr from-[#f4b200]/10 via-[#3e5926]/15 to-[#192e06]/10 blur-3xl"
      />

      {/* Grid Pattern */}
      {/* <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, #FF6B35 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      /> */}

      {/* Main Content */}
      <motion.div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-32 lg:py-40">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
              },
            },
          }}
          className="text-center"
        >
          {/* Premium Badge */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="mb-8 sm:mb-10"
          >
            <span className="inline-flex items-center gap-2.5 px-5 sm:px-7 py-5 sm:py-3.5 rounded-full bg-[#fdfbea]/95 backdrop-blur-sm border-2 border-[#3e5926]/30 shadow-lg text-xs sm:text-sm font-bold text-[#3c5c1f] hover:shadow-xl hover:scale-105 transition-all duration-300">
              <span className="text-base sm:text-xl">🌾</span>
              <span>Premium Dairy Products Since 2014</span>
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-[#192e06] leading-[1.1] tracking-tight mb-8 sm:mb-10 px-4"
          >
            <span className="block">Premium Dairy</span>
            <span className="block mt-2 bg-linear-to-r from-[#3c5c1f] via-[#f4b200] to-[#3e5926] bg-clip-text text-transparent">
              Ingredients
            </span>
            <span className="block mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800">
              for Global Brands
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="mt-8 sm:mt-10 text-base sm:text-lg md:text-xl lg:text-2xl text-[#3c5c1f]/80 max-w-3xl mx-auto leading-relaxed px-6"
          >
            Trusted by food brands worldwide, Vaishno Hills Dairy delivers
            consistent milk powders, dairy whiteners, and whey products with
            uncompromising quality standards.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="mt-12 sm:mt-16 flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-6 px-6"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="group relative w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-[#3e5926] to-[#3c5c1f] text-[#f4b200] font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all overflow-hidden"
            >
              <span className="relative z-10">Request a Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#192e06] to-[#3e5926] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                document.getElementById("products")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 rounded-2xl border-2 border-[#3c5c1f] text-[#3c5c1f] font-bold text-base sm:text-lg hover:bg-[#3c5c1f] hover:text-[#f4b200] transition-all shadow-lg hover:shadow-xl"
            >
              View Products
            </motion.button>
          </motion.div>

          {/* Carousel Section */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="mt-12 sm:mt-16"
          ></motion.div>

          {/* Stats Section */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="mt-20 sm:mt-24 md:mt-28 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto px-6"
          >
            {[
              {
                icon: "📅",
                value: "10+",
                label: "Years of Excellence",
                gradient: "from-[#3c5c1f] to-[#f4b200]",
              },
              {
                icon: "🌍",
                value: "10+",
                label: "Countries Served",
                gradient: "from-amber-500 to-yellow-500",
              },
              {
                icon: "📦",
                value: "50+",
                label: "Premium Products",
                gradient: "from-[#3c5c1f] to-[#192e06]",
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
                className="group relative p-8 sm:p-10 rounded-3xl bg-[#fdfbea]/90 backdrop-blur-lg border-2 border-[#3e5926]/20 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                {/* Hover Gradient Background */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-linear-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative">
                  <motion.p
                    className="text-5xl sm:text-6xl mb-4"
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    {item.icon}
                  </motion.p>
                  <p
                    className={`text-4xl sm:text-5xl font-black bg-gradient-to-r from-[#3c5c1f] to-[#f4b200] bg-clip-text text-transparent mb-3`}
                  >
                    {item.value}
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 font-semibold">
                    {item.label}
                  </p>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#3c5c1f]/40 rounded-tr-2xl opacity-30 group-hover:opacity-60 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="mt-20 sm:mt-24 flex flex-wrap justify-center items-center gap-6 sm:gap-10 px-6"
          >
            {[
              "ISO Certified",
              "FSSAI Approved",
              "Export Quality",
              "100% Pure",
            ].map((badge, index) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3e5926]/10 backdrop-blur-sm border border-[#3c5c1f]/20"
              >
                <svg
                  className="w-5 h-5 text-[#3c5c1f]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-semibold text-[#3c5c1f]">
                  {badge}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-[#3c5c1f] text-sm font-semibold">
          Scroll to explore
        </p>
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <svg
            className="w-6 h-6 text-[#3c5c1f]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
