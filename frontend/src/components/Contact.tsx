"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Visit Us",
      info: "Plot No 39 & 40, KIADB Industrial Area",
      subInfo: "Basavakalyan, Bidar, Karnataka - 585327",
      gradient: "from-[#3c5c1f] to-[#f4b200]",
    },
    {
      icon: "📧",
      title: "Email Us",
      info: "vaishnohills@gmail.com",
      subInfo: "We'll respond within 24 hours",
      gradient: "from-[#f4b200] to-[#3c5c1f]",
    },
    {
      icon: "📞",
      title: "Call Us",
      info: "+91 93411 30708",
      subInfo: "Mon - Sat: 9:00 AM - 6:00 PM",
      gradient: "from-[#3e5926] to-[#3c5c1f]",
    },
    {
      icon: "🌐",
      title: "GST Number",
      info: "29AALFV3594K1ZA",
      subInfo: "Registered & Verified",
      gradient: "from-[#f4b200] to-[#3e5926]",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 sm:py-32 bg-linear-to-br from-[#fbfaf3] via-[#f0efe7] to-[#ebe8da] relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-linear-to-bl from-[#3c5c1f]/8 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-linear-to-tr from-[#f4b200]/8 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2.5 rounded-full bg-[#3e5926]/15 text-[#3c5c1f] font-bold text-sm mb-6">
            Get in Touch
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Let's Start a
            <span className="block mt-2 bg-linear-to-r from-[#3e5926] to-[#3c5c1f] bg-clip-text text-transparent">
              Conversation
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Have questions about our products? Need a quote? Our team is ready
            to help you.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#3c5c1f]/15"
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-linear-to-br ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}
              />

              <div className="relative">
                <motion.div
                  className="text-5xl mb-4"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  {info.icon}
                </motion.div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  {info.title}
                </h3>
                <p
                  className={`font-semibold bg-linear-to-r ${info.gradient} bg-clip-text text-transparent mb-1`}
                >
                  {info.info}
                </p>
                <p className="text-sm text-gray-600">{info.subInfo}</p>
              </div>

              {/* Corner Decoration */}
              <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#3c5c1f]/30 rounded-tr-xl" />
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border-2 border-[#3c5c1f]/15"
          >
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#3c5c1f]/25 focus:border-[#3c5c1f] focus:outline-none transition-colors bg-[#3c5c1f]/5"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#3c5c1f]/25 focus:border-[#3c5c1f] focus:outline-none transition-colors bg-[#3c5c1f]/5"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#3c5c1f]/25 focus:border-[#3c5c1f] focus:outline-none transition-colors bg-[#3c5c1f]/5"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#3c5c1f]/25 focus:border-[#3c5c1f] focus:outline-none transition-colors bg-[#3c5c1f]/5"
                  placeholder="Your Company Pvt. Ltd."
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#3c5c1f]/25 focus:border-[#3c5c1f] focus:outline-none transition-colors resize-none bg-[#3c5c1f]/5"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 rounded-xl bg-linear-to-r from-[#3e5926] to-[#3c5c1f] text-white font-bold text-lg shadow-xl shadow-[#3c5c1f]/30 hover:shadow-2xl transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Quick Facts & Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-6"
          >
            {/* Map Placeholder */}
            <div className="bg-linear-to-br from-[#f0efe7] to-[#ebe8da] rounded-3xl p-8 shadow-xl border-2 border-[#3c5c1f]/25 h-75 flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl mb-4">📍</div>
                <p className="text-lg font-bold text-gray-800">
                  Basavakalyan, Karnataka
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Click to view on map
                </p>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#3c5c1f]/15">
              <h3 className="text-2xl font-black text-gray-900 mb-6">
                Why Choose Us?
              </h3>

              <div className="space-y-4">
                {[
                  { icon: "⚡", text: "Fast Response Time - Within 24 hours" },
                  { icon: "🎯", text: "Customized Solutions for Your Needs" },
                  { icon: "✅", text: "ISO Certified & Quality Assured" },
                  { icon: "🚚", text: "Pan-India Delivery Network" },
                  { icon: "💯", text: "100% Customer Satisfaction" },
                ].map((fact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-[#3c5c1f]/8 hover:bg-[#3c5c1f]/10 transition-colors"
                  >
                    <span className="text-2xl shrink-0">{fact.icon}</span>
                    <p className="text-gray-700 font-semibold">{fact.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 bg-linear-to-r from-[#3e5926] to-[#3c5c1f] rounded-3xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Animated Background Pattern */}
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, white 10px, white 20px)`,
            }}
            animate={{
              backgroundPosition: ["0px 0px", "40px 40px"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Ready to Partner with Us?
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who trust Vaishno Hills Dairy
              for their premium dairy needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl bg-white text-[#3c5c1f] font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                Download Catalog
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl bg-transparent border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-[#3c5c1f] transition-all"
              >
                Schedule a Call
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
