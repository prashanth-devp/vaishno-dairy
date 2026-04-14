"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import dairyBag from "../../public/images/dairy-bag.png";

const features = [
  {
    id: "01",
    title: "Pure & Fresh Milk",
    description:
      "We deliver fresh, unadulterated milk sourced directly from healthy, well-cared cattle.",
    position: "left-top",
  },
  {
    id: "02",
    title: "Chemical-Free",
    description:
      "Our dairy practices are free from harmful chemicals, hormones, and preservatives.",
    position: "right-top",
  },
  {
    id: "03",
    title: "Locally Produced",
    description:
      "Proudly supporting local farmers and communities with ethically produced dairy.",
    position: "left-bottom",
  },
  {
    id: "04",
    title: "Ethical Farming",
    description:
      "We follow humane, sustainable, and transparent dairy farming practices.",
    position: "right-bottom",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="industries" className="relative bg-[#fbfaf3] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-3 rounded-full bg-[#3e5926] px-4 py-1 text-sm text-[#f4b200] font-bold">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#192e06]">
            Pure Dairy, Rooted in Nature
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            At Vaishno Hills Dairy, we combine traditional values with modern
            hygiene to deliver the best quality dairy products.
          </p>
        </motion.div>

        {/* Content */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Features */}
          <div className="space-y-10">
            {features
              .filter((f) => f.position.includes("left"))
              .map((item) => (
                <FeatureCard key={item.id} {...item} align="right" />
              ))}
          </div>

          {/* Center Image */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <div className="absolute h-72 w-72 rounded-full bg-[#f2e8dc]" />
            <Image
              src={dairyBag}
              alt="Vaishno Hills Dairy"
              width={260}
              height={360}
              className="relative z-10 object-contain"
            />
          </motion.div>

          {/* Right Features */}
          <div className="space-y-10">
            {features
              .filter((f) => f.position.includes("right"))
              .map((item) => (
                <FeatureCard key={item.id} {...item} align="left" />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Feature Card ---------------- */

interface FeatureProps {
  id: string;
  title: string;
  description: string;
  align: "left" | "right";
}

function FeatureCard({ id, title, description, align }: FeatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === "left" ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`text-${align === "left" ? "left" : "right"}`}
    >
      <span className="text-5xl font-bold text-[#3c5c1f]/20">{id}</span>
      <h3 className="mt-2 text-xl font-semibold text-[#192e06]">{title}</h3>
      <p className="mt-2 text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}
