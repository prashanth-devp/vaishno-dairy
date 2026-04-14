"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "/images/banners/banner1.jpg",
    alt: "Vaishno Hills Dairy — Premium Milk Powder Products",
    title: "Premium Milk Powders",
    subtitle: "High-quality milk powders for food manufacturers worldwide",
  },
  {
    id: 2,
    image: "/images/banners/banner2.jpg",
    alt: "Vaishno Hills Dairy — Dairy Whiteners",
    title: "Dairy Whiteners",
    subtitle: "Stable whiteners for tea, coffee, confectionery & beverages",
  },
  {
    id: 3,
    image: "/images/products/instant-whole-milk-powder.jpg",
    alt: "Vaishno Hills Dairy — Whey & Premix Products",
    title: "Whey & Dairy Premix",
    subtitle: "Functional dairy ingredients for nutrition & food applications",
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) return;
    timeoutRef.current = setTimeout(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [index, isPaused]);

  function prev() { setIndex((i) => (i - 1 + slides.length) % slides.length); }
  function next() { setIndex((i) => (i + 1) % slides.length); }

  return (
    <div className="relative w-full">
      <div
        className="overflow-hidden w-full shadow-xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Fixed height — tall on desktop */}
        <div className="h-72 sm:h-96 md:h-[480px] relative">
          <AnimatePresence initial={false} mode="wait">
            {slides.map(
              (slide, i) =>
                i === index && (
                  <motion.div
                    key={slide.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.12}
                    onDragStart={() => {
                      setIsPaused(true);
                      if (timeoutRef.current) clearTimeout(timeoutRef.current);
                    }}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -50 || info.velocity.x < -500) next();
                      else if (info.offset.x > 50 || info.velocity.x > 500) prev();
                      setIsPaused(false);
                    }}
                    className="absolute inset-0"
                  >
                    {/* Background photo */}
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Dark gradient overlay for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#192e06]/80 via-[#192e06]/50 to-transparent" />

                    {/* Text content */}
                    <div className="relative z-10 h-full flex items-center">
                      <div className="max-w-6xl mx-auto w-full px-8 sm:px-12">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                        >
                          {/* Badge */}
                          <span className="inline-block px-3 py-1 rounded-full bg-[#f4b200]/20 border border-[#f4b200]/50 text-[#f4b200] text-xs font-bold mb-3 uppercase tracking-wider">
                            Vaishno Hills Dairy Industries
                          </span>

                          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 leading-tight">
                            {slide.title}
                          </h2>

                          <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 max-w-lg">
                            {slide.subtitle}
                          </p>

                          {/* CTAs */}
                          <div className="flex flex-col sm:flex-row gap-3">
                            <a
                              href="#contact"
                              onClick={(e) => {
                                e.preventDefault();
                                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                              }}
                              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#f4b200] text-[#192e06] font-bold shadow-lg hover:bg-[#dbaf34] hover:scale-105 transition-all text-sm"
                            >
                              Request a Quote
                            </a>
                            <a
                              href="#products"
                              onClick={(e) => {
                                e.preventDefault();
                                document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
                              }}
                              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-all text-sm"
                            >
                              View Products
                            </a>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>

          {/* Prev / Next arrows */}
          <button
            aria-label="Previous slide"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#192e06]/60 hover:bg-[#f4b200] text-white hover:text-[#192e06] flex items-center justify-center transition-all"
          >
            ‹
          </button>
          <button
            aria-label="Next slide"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#192e06]/60 hover:bg-[#f4b200] text-white hover:text-[#192e06] flex items-center justify-center transition-all"
          >
            ›
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === index
                    ? "w-6 h-2 bg-[#f4b200]"
                    : "w-2 h-2 bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
