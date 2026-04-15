"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    name: "Ramesh Kumar",
    role: "Milk Subscription Customer, Hyderabad",
    feedback:
      "Vaishno Hills Dairy milk tastes pure and natural, just like traditional village milk. My family loves the freshness and quality.",
    rating: "4.8 / 5",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face&q=80",
  },
  {
    name: "Anjali Sharma",
    role: "Homemaker",
    feedback:
      "We trust Vaishno Hills Dairy for our daily milk needs. Knowing it is chemical-free gives complete peace of mind.",
    rating: "5 / 5",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face&q=80",
  },
  {
    name: "Suresh Reddy",
    role: "Retail Partner",
    feedback:
      "Consistent quality, ethical sourcing, and excellent service. Vaishno Hills Dairy stands out in today's market.",
    rating: "4.9 / 5",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face&q=80",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const next = () =>
    setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  const t = testimonials[active];

  return (
    <section className="relative h-[700px] overflow-hidden">
      {/* Background */}
      <Image
        src="https://images.unsplash.com/photo-1594761051656-a42e4e63e2e6?w=1600&h=900&fit=crop&q=80"
        alt="Vaishno Hills Dairy Farm"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[var(--color-forest-900)]/70" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="relative max-w-4xl w-full">
          {/* Side Avatars */}
          <div className="hidden md:block">
            <Image
              src={testimonials[(active + 1) % testimonials.length].image}
              alt="Customer"
              width={70}
              height={70}
              className="absolute -left-10 top-1/2 -translate-y-1/2 rounded-xl border-4 border-[var(--color-gold-400)] opacity-60"
            />
            <Image
              src={
                testimonials[
                  (active + testimonials.length - 1) % testimonials.length
                ].image
              }
              alt="Customer"
              width={70}
              height={70}
              className="absolute -right-10 top-1/2 -translate-y-1/2 rounded-xl border-4 border-[var(--color-gold-400)] opacity-60"
            />
          </div>

          {/* Testimonial Card */}
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-[var(--color-forest-600)]/95 backdrop-blur-sm text-white rounded-xl px-10 py-12 text-center shadow-xl border border-[var(--color-gold-400)]/20"
          >
            {/* Quote */}
            <div className="flex justify-center mb-4">
              <span className="h-12 w-12 rounded-full bg-[var(--color-gold-400)] text-[var(--color-forest-900)] flex items-center justify-center text-2xl font-bold">
                &ldquo;
              </span>
            </div>

            <h3 className="text-xl font-semibold mb-4 text-[var(--color-gold-400)]">
              Trusted by Families Who Value Purity
            </h3>

            <p className="text-sm leading-relaxed text-[var(--color-cream-1)] max-w-2xl mx-auto">
              {t.feedback}
            </p>

            {/* Avatar + Info */}
            <div className="mt-6 flex flex-col items-center gap-3">
              <Image
                src={t.image}
                alt={t.name}
                width={56}
                height={56}
                className="rounded-full border-3 border-[var(--color-gold-400)] object-cover"
              />
              <div>
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-sm text-[var(--color-cream-2)]">{t.role}</p>
                <p className="mt-2 text-[var(--color-gold-400)] text-sm">
                  ⭐ {t.rating}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
            <button
              onClick={prev}
              className="h-10 w-10 rounded-full bg-[var(--color-gold-400)] text-[var(--color-forest-900)] flex items-center justify-center hover:bg-[var(--color-gold-500)] transition font-bold"
            >
              ←
            </button>
            <button
              onClick={next}
              className="h-10 w-10 rounded-full bg-[var(--color-gold-400)] text-[var(--color-forest-900)] flex items-center justify-center hover:bg-[var(--color-gold-500)] transition font-bold"
            >
              →
            </button>
          </div>

          {/* Footer Trust Icons */}
          <div className="mt-12 text-center text-[var(--color-gold-400)] text-sm font-medium">
            Partners in sustainable &amp; ethical dairy farming
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-8 text-[var(--color-cream-1)] text-xs opacity-80">
            <span>🥛 100% Pure Milk</span>
            <span>🌿 Chemical Free</span>
            <span>🐄 Ethical Farming</span>
            <span>🌾 Farm Fresh</span>
            <span>✅ Quality Assured</span>
          </div>
        </div>
      </div>
    </section>
  );
}
