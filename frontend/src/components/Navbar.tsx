"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    {
      name: "Products",
      href: "#products",
      submenu: [
        { name: "Milk Powder", href: "#products" },
        { name: "Dairy Whiteners", href: "#products" },
        { name: "Whey Powder", href: "#products" },
        { name: "Dairy Premix", href: "#products" },
      ],
    },
    { name: "About Us", href: "#about" },
    { name: "Industries", href: "#industries" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMobileMenuOpen(false);
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* ── Top info bar ──────────────────────────────── */}
      <div className="bg-[#192e06] text-white py-2 text-sm fixed top-0 left-0 right-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-1">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span>📧</span>
              <a href="mailto:vaishnohills@gmail.com" className="hover:text-[#f4b200] transition-colors">
                vaishnohills@gmail.com
              </a>
            </span>
            <span className="hidden sm:flex items-center gap-2">
              <span>📞</span>
              <a href="tel:+919341130708" className="hover:text-[#f4b200] transition-colors">
                +91 93411 30708
              </a>
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs text-[#f4b200] font-semibold">
            <span>✓ ISO Certified</span>
            <span>✓ FSSAI Approved</span>
            <span className="hidden sm:inline">GST: 29AALFV3594K1ZA</span>
          </div>
        </div>
      </div>

      {/* ── Main Navbar ───────────────────────────────── */}
      <motion.header
        className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#fdfbea] shadow-lg border-b border-[#3e5926]/20"
            : "bg-[#fdfbea]/95 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center gap-3"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="w-10 h-10 rounded-full bg-[#3e5926] flex items-center justify-center shadow-md">
                <span className="text-xl">🥛</span>
              </div>
              <div>
                <h1 className="font-black text-lg leading-tight text-[#3c5c1f]">
                  Vaishno Hills
                </h1>
                <p className="text-[10px] text-[#3e5926]/70 font-semibold tracking-wide uppercase">
                  Dairy Industries
                </p>
              </div>
            </motion.a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-4 py-2 rounded-lg text-[#3c5c1f] font-semibold hover:text-[#f4b200] hover:bg-[#3e5926]/10 transition-all relative flex items-center gap-1"
                  >
                    {link.name}
                    {link.submenu && (
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </a>

                  {/* Submenu */}
                  {link.submenu && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-[#fdfbea] rounded-xl shadow-xl border border-[#3e5926]/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden z-50">
                      {link.submenu.map((sublink) => (
                        <a
                          key={sublink.name}
                          href={sublink.href}
                          onClick={(e) => handleNavClick(e, sublink.href)}
                          className="block px-5 py-3 text-sm text-[#3c5c1f] hover:bg-[#3e5926] hover:text-[#f4b200] font-semibold transition-colors border-b border-[#ebe8da] last:border-0"
                        >
                          {sublink.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={scrollToContact}
                className="px-5 py-2 rounded-xl bg-[#f4b200] text-[#192e06] font-bold shadow-md hover:bg-[#dbaf34] transition-all text-sm"
              >
                Get Quote
              </motion.button>
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#3c5c1f] hover:bg-[#3e5926]/10 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={{ height: isMobileMenuOpen ? "auto" : 0, opacity: isMobileMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          className="lg:hidden overflow-hidden bg-[#fdfbea] border-t border-[#3e5926]/20"
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-4 py-3 rounded-lg text-[#3c5c1f] font-semibold hover:bg-[#3e5926] hover:text-[#f4b200] transition-colors"
                >
                  {link.name}
                </a>
                {link.submenu && (
                  <div className="ml-4 mt-1 space-y-1">
                    {link.submenu.map((sublink) => (
                      <a
                        key={sublink.name}
                        href={sublink.href}
                        onClick={(e) => handleNavClick(e, sublink.href)}
                        className="block px-4 py-2 rounded-lg text-sm text-[#3c5c1f]/80 hover:bg-[#3e5926]/10 hover:text-[#3c5c1f] transition-colors"
                      >
                        {sublink.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-[#3e5926]/20">
              <button
                onClick={scrollToContact}
                className="w-full px-5 py-3 rounded-xl bg-[#f4b200] text-[#192e06] font-bold"
              >
                Get Quote
              </button>
            </div>
          </div>
        </motion.div>
      </motion.header>

      {/* Spacer so page content isn't hidden under the two bars */}
      <div className="h-[88px]" />
    </>
  );
}
