"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const productCategories = [
    {
      name: "Milk Powder",
      items: [
        "Instant Whole Milk Powder (26%)",
        "Whole Milk Powder CM (26%)",
        "Skimmed Milk Powder CM",
        "Skimmed Milk Powder BM",
      ],
    },
    {
      name: "Dairy Whiteners",
      items: [
        "Beverage Whitener Classic (22%)",
        "Beverage Whitener Gold (22%)",
        "Dairy Whitener Premium (20%)",
        "Premix Sugarless (22%)",
      ],
    },
    {
      name: "Dairy Premix",
      items: ["Chai Special 6%", "Premium Mix 18%"],
    },
    {
      name: "Other Products",
      items: ["Whey Powder", "Fat Powder (36% & 75%)", "Chhena Powder"],
    },
  ];

  const quickLinks = [
    { label: "About Us",          href: "#about" },
    { label: "Our Process",       href: "#stats" },
    { label: "Why Choose Us",     href: "#industries" },
    { label: "Products",          href: "#products" },
    { label: "Contact Us",        href: "#contact" },
  ];

  const industries = [
    "Chocolate & Toffee",
    "Biscuit Industry",
    "Bakery Industry",
    "Tea & Coffee",
    "Ice Cream",
    "Confectionery",
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#192e06] text-white relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, #f4b200 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Gold top accent bar */}
      <div className="h-1 bg-gradient-to-r from-[#3e5926] via-[#f4b200] to-[#3e5926]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* ── Main columns ─────────────────────────────── */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo row */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#3e5926] border-2 border-[#f4b200]/40 flex items-center justify-center text-xl">
                  🥛
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#f4b200] leading-tight">
                    Vaishno Hills
                  </h3>
                  <p className="text-[10px] text-[#f4b200]/60 font-semibold uppercase tracking-wider">
                    Dairy Industries
                  </p>
                </div>
              </div>

              <p className="text-[#fbfaf3]/70 leading-relaxed mb-6 text-sm">
                Leading processor of premium dairy products since 2014. Trusted
                by food brands across India for consistent quality and
                innovation.
              </p>

              {/* Contact quick-links */}
              <div className="space-y-2 text-sm text-[#fbfaf3]/70 mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-[#f4b200] mt-0.5 shrink-0">📍</span>
                  <span>Plot No 39 &amp; 40, KIADB Industrial Area,<br />Basavakalyan, Bidar, Karnataka — 585327</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#f4b200] shrink-0">📧</span>
                  <a href="mailto:vaishnohills@gmail.com" className="hover:text-[#f4b200] transition-colors">
                    vaishnohills@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#f4b200] shrink-0">📞</span>
                  <a href="tel:+919341130708" className="hover:text-[#f4b200] transition-colors">
                    +91 93411 30708
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#f4b200] shrink-0">🏢</span>
                  <span>GST: 29AALFV3594K1ZA</span>
                </div>
              </div>

              {/* Social icons */}
              <div className="flex gap-3">
                {["FB", "TW", "LI", "IG"].map((s) => (
                  <motion.a
                    key={s}
                    href="#"
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-9 h-9 rounded-full border border-[#f4b200]/30 bg-[#3e5926]/40 flex items-center justify-center text-[#f4b200]/70 hover:bg-[#f4b200] hover:text-[#192e06] hover:border-[#f4b200] transition-all text-xs font-bold"
                  >
                    {s}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-sm font-bold mb-5 text-[#f4b200] uppercase tracking-widest">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                      className="text-[#fbfaf3]/65 hover:text-[#f4b200] transition-colors flex items-center gap-2 group text-sm"
                    >
                      <span className="w-0 h-px bg-[#f4b200] group-hover:w-4 transition-all duration-300" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Industries Served */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-sm font-bold mb-5 text-[#f4b200] uppercase tracking-widest">
                Industries Served
              </h4>
              <ul className="space-y-3">
                {industries.map((industry) => (
                  <li key={industry} className="flex items-center gap-2 text-sm text-[#fbfaf3]/65">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f4b200]/60 shrink-0" />
                    {industry}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Product Range */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-sm font-bold mb-5 text-[#f4b200] uppercase tracking-widest">
                Our Products
              </h4>
              <div className="space-y-4">
                {productCategories.map((cat) => (
                  <div key={cat.name}>
                    <p className="text-xs font-bold text-[#f4b200]/80 mb-1.5 uppercase tracking-wide">
                      {cat.name}
                    </p>
                    <ul className="space-y-1">
                      {cat.items.map((item) => (
                        <li key={item} className="text-xs text-[#fbfaf3]/55 flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-[#f4b200]/40 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Certifications strip ─────────────────────── */}
        <div className="py-6 border-t border-[#3e5926]/60">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              { icon: "✓", text: "ISO Certified" },
              { icon: "✓", text: "FSSAI Approved" },
              { icon: "✓", text: "Export Quality" },
              { icon: "✓", text: "GMP Certified" },
            ].map((cert) => (
              <div key={cert.text} className="flex items-center gap-2 text-[#fbfaf3]/60">
                <span className="w-5 h-5 rounded-full bg-[#3e5926] border border-[#f4b200]/40 flex items-center justify-center text-[#f4b200] text-[10px] font-bold shrink-0">
                  {cert.icon}
                </span>
                <span className="text-sm font-semibold">{cert.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom bar ───────────────────────────────── */}
        <div className="py-5 border-t border-[#3e5926]/60">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-[#fbfaf3]/50 text-xs">
            <p>© {new Date().getFullYear()} Vaishno Hills Dairy Industries. All rights reserved.</p>
            <div className="flex gap-5">
              <a href="#" className="hover:text-[#f4b200] transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-[#f4b200] transition-colors">Terms &amp; Conditions</a>
              <span>•</span>
              <a href="#" className="hover:text-[#f4b200] transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>

      {/* Gold bottom accent bar */}
      <div className="h-1 bg-gradient-to-r from-[#3e5926] via-[#f4b200] to-[#3e5926]" />
    </footer>
  );
}
