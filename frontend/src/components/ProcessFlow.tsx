"use client";

import { motion } from "framer-motion";

const steps = [
  {
    name: "Milk Collection",
    icon: "🥛",
    description: "Fresh milk collected daily from local farms",
  },
  {
    name: "Processing",
    icon: "⚙️",
    description: "Advanced processing & quality control",
  },
  {
    name: "Quality Testing",
    icon: "✓",
    description: "100% tested for purity & nutrition",
  },
  {
    name: "Packaging",
    icon: "📦",
    description: "Eco-friendly packaging solutions",
  },
  { name: "Dispatch", icon: "🚚", description: "Global distribution network" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function ProcessFlow() {
  return (
    <section className="py-40 bg-linear-to-b from-cream to-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 rounded-full bg-primary/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-5 w-40 h-40 rounded-full bg-accent/5 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section heading with better spacing */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-dark mb-8">
            Our Manufacturing
            <br />
            <span className="text-gradient">Process</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From farm to table, every step is meticulously crafted to ensure the
            highest quality dairy ingredients. Our advanced facilities process
            over 30,000 liters per hour with 100% quality assurance.
          </p>
        </motion.div>

        {/* Process steps with better spacing and infographics */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.name}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              {/* Connection line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 -right-3 w-6 h-1 bg-linear-to-r from-primary to-gold group-hover:w-9 transition-all duration-300" />
              )}

              {/* Card */}
              <div className="h-full p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-300 group hover-lift">
                {/* Step number */}
                <motion.div
                  className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-linear-to-br from-primary to-gold flex items-center justify-center text-yellow-700 font-bold text-lg shadow-lg"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {index + 1}
                </motion.div>

                {/* Icon */}
                <motion.div
                  className="text-5xl mb-4 inline-block"
                  whileHover={{ scale: 1.3, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {step.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-dark mb-3 mt-4">
                  {step.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Accent bar */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-primary to-gold group-hover:w-full transition-all duration-300 rounded-b-2xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/60"
        >
          <p className="text-gray-700 font-medium">
            ✨ Our 30,000+ Liters per hour processing capacity ensures
            consistent, world-class quality
          </p>
        </motion.div>
      </div>
    </section>
  );
}
