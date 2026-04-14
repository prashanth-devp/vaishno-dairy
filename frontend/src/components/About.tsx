"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const features = [
    {
      icon: "🏭",
      title: "State-of-the-Art Facility",
      description: "Advanced processing with 30,000 liters/hour capacity",
      stat: "30K L/hr",
      color: "green",
    },
    {
      icon: "🥛",
      title: "Daily Milk Collection",
      description: "Fresh milk sourced from Marathwada region",
      stat: "2.5 Lakh L",
      color: "amber",
    },
    {
      icon: "✅",
      title: "Quality Assurance",
      description: "ISO certified and FSSAI approved products",
      stat: "100%",
      color: "green",
    },
    {
      icon: "🌐",
      title: "Global Reach",
      description: "Serving food industries worldwide",
      stat: "10+ Countries",
      color: "amber",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 sm:py-32 bg-gradient-to-br from-[#fbfaf3] via-[#f0efe7]/30 to-[#ebe8da]/30 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-[#3c5c1f]/8 to-[#f4b200]/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-tl from-[#3c5c1f]/8 to-[#f4b200]/8 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block px-6 py-2.5 rounded-full bg-[#3e5926]/15 text-[#3c5c1f] font-bold text-sm mb-6">
              About Vaishno Hills
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6"
          >
            Leading Processor of
            <span className="block mt-2 bg-linear-to-r from-[#3e5926] to-[#3c5c1f] bg-clip-text text-transparent">
              Dairy Excellence
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Since 2014, we've been dedicated to processing premium dairy
            products with cutting-edge technology and unwavering commitment to
            quality.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className={`group relative p-8 rounded-3xl bg-white border-2 border-${feature.color}-100 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden`}
            >
              {/* Animated Background */}
              <motion.div
                className={`absolute inset-0 bg-linear-to-br from-${feature.color}-500/10 to-${feature.color}-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                initial={false}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon with Animation */}
                <motion.div
                  className="text-6xl mb-4"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  {feature.icon}
                </motion.div>

                {/* Stat Number */}
                <div
                  className={`text-3xl font-black bg-linear-to-r from-${feature.color}-600 to-${feature.color}-500 bg-clip-text text-transparent mb-3`}
                >
                  {feature.stat}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Corner Accent */}
              <div
                className={`absolute bottom-0 right-0 w-20 h-20 bg-linear-to-tl from-${feature.color}-200/30 to-transparent rounded-tl-full`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Company Description */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left: Infographic */}
          <motion.div variants={itemVariants} className="relative">
            <div className="bg-linear-to-br from-[#f0efe7] to-[#ebe8da] rounded-3xl p-8 sm:p-12 shadow-xl">
              {/* Production Flow Infographic */}
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">
                    Our Process
                  </h3>
                  <p className="text-sm text-gray-600">From Farm to Factory</p>
                </div>

                {/* Process Steps */}
                {[
                  { step: "01", title: "Raw Milk Collection", icon: "🚜" },
                  { step: "02", title: "Quality Testing", icon: "🔬" },
                  { step: "03", title: "Processing", icon: "⚙️" },
                  { step: "04", title: "Packaging", icon: "📦" },
                  { step: "05", title: "Distribution", icon: "🚚" },
                ].map((process, index) => (
                  <motion.div
                    key={process.step}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-4 bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-full bg-linear-to-br from-[#3c5c1f] to-[#f4b200] flex items-center justify-center text-white font-black text-lg shadow-lg">
                      {process.step}
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-900">{process.title}</p>
                    </div>
                    <div className="text-3xl">{process.icon}</div>
                  </motion.div>
                ))}
              </div>

              {/* Animated Circle */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-linear-to-br from-[#f4b200] to-[#dbaf34] opacity-20 blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
              Commitment to
              <span className="block text-[#3c5c1f]">
                Quality & Innovation
              </span>
            </h3>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                <strong className="text-[#3c5c1f]">
                  Vaishno Hills Dairy Industries
                </strong>{" "}
                has established itself as one of India's premier processors of
                dairy-based products. Operating since 2014, we specialize in a
                comprehensive range of premium dairy products.
              </p>

              <p>
                Our product portfolio includes Pure Cow Ghee, Milk Powder, Dairy
                Premix, Dairy Whitener, Beverage Whitener, Skimmed Milk Powder
                (SMP), Whole Milk Powder (WMP), Whey Powder, Fat Powder, and
                Chhena Powder.
              </p>

              <p>
                With our extensive raw milk collection network spanning the
                Marathwada region of Maharashtra, we process approximately{" "}
                <strong className="text-[#3c5c1f]">
                  2,00,000 to 2,50,000 liters of milk daily
                </strong>
                . Our state-of-the-art milk chilling plant boasts a processing
                capacity of{" "}
                <strong className="text-[#3c5c1f]">
                  30,000 liters per hour
                </strong>
                .
              </p>
            </div>

            {/* Industries Served */}
            <div className="pt-6">
              <h4 className="font-bold text-gray-900 mb-4 text-lg">
                Industries We Serve:
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "Chocolate & Toffee",
                  "Biscuit Industry",
                  "Bakery Industry",
                  "Tea & Coffee Beverages",
                  "Ice Cream",
                  "Confectionery",
                ].map((industry) => (
                  <span
                    key={industry}
                    className="px-4 py-2 rounded-full bg-linear-to-r from-[#f0efe7] to-[#ebe8da] border border-[#3c5c1f]/25 text-sm font-semibold text-[#192e06] hover:shadow-md transition-shadow"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
