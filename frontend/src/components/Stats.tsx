"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Years Experience", value: 10, suffix: "+", icon: "📅" },
  { label: "Products Range", value: 50, suffix: "+", icon: "📦" },
  { label: "Countries Served", value: 10, suffix: "+", icon: "🌍" },
  { label: "Quality Tested", value: 100, suffix: "%", icon: "✓" },
];

const CounterAnimation = ({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-[#3c5c1f] to-[#f4b200] bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Counter from={0} to={value} /> {suffix}
      </motion.div>
    </motion.span>
  );
};

const Counter = ({ from, to }: { from: number; to: number }) => {
  const [count, setCount] = require("react").useState(from);

  require("react").useEffect(() => {
    let animationFrame: NodeJS.Timeout;
    const startTime = Date.now();
    const duration = 2500;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(from + (to - from) * progress);
      setCount(current);

      if (progress < 1) {
        animationFrame = setTimeout(animate, 16);
      }
    };

    animationFrame = setTimeout(animate, 16);
    return () => clearTimeout(animationFrame);
  }, [to, from]);

  return <span>{count}</span>;
};

export default function Stats() {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="stats" className="relative py-40 bg-gradient-to-b from-[#ebe8da] to-[#fbfaf3] overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-[#3c5c1f]/10 to-[#f4b200]/10 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-[#3e5926]/10 to-[#f4b200]/10 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
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
            Our Impact by <span className="text-gradient">Numbers</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Building trust through quality, innovation, and reliability
          </p>
        </motion.div>

        {/* Stats grid with better spacing */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="h-full p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift text-center"
              >
                {/* Icon */}
                <motion.div
                  className="text-4xl md:text-5xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.icon}
                </motion.div>

                {/* Counter */}
                <div className="mb-4">
                  <CounterAnimation value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <p className="text-sm md:text-base font-semibold text-gray-700">
                  {stat.label}
                </p>

                {/* Decorative bar */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#3c5c1f] to-[#f4b200] rounded-b-2xl"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certification badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 flex justify-center"
        >
          <div className="inline-block p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/60">
            <p className="text-center text-gray-700 font-medium">
              ⭐ ISO Certified | FDA Approved | Quality Assured
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
