"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const allProjects = [
  {
    category: "Farm Life",
    title: "Green Harvest Initiative",
    description:
      "Promoting sustainable agricultural practices through organic farming methods and eco-friendly crop management across our dairy farmlands.",
    image:
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&h=600&fit=crop&q=80",
  },
  {
    category: "Livestock",
    title: "Healthy Herd Program",
    description:
      "Ensuring the well-being of our dairy cattle through advanced veterinary care, balanced nutrition, and humane animal husbandry practices.",
    image:
      "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800&h=600&fit=crop&q=80",
  },
  {
    category: "Agro Tourism",
    title: "Farm Experience Retreat",
    description:
      "Inviting visitors to experience authentic rural life, learn about dairy farming, and enjoy the serene beauty of our green pastures.",
    image:
      "https://images.unsplash.com/photo-1595855759920-86582396756a?w=800&h=600&fit=crop&q=80",
  },
  {
    category: "Milk & Produce",
    title: "Pure Dairy Products",
    description:
      "Delivering the finest quality milk, milk powder, dairy whitener, and other dairy products crafted with care and purity.",
    image:
      "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=800&h=600&fit=crop&q=80",
  },
  {
    category: "Dairy Tech",
    title: "Smart Dairy Operations",
    description:
      "Leveraging modern technology and automation for efficient milk processing, quality control, and supply chain operations.",
    image:
      "https://images.unsplash.com/photo-1634141510639-d691d86f47be?w=800&h=600&fit=crop&q=80",
  },
  {
    category: "Quality Control",
    title: "Lab Testing & Assurance",
    description:
      "Rigorous quality testing at every stage — from raw milk collection to finished product packaging — ensuring 100% purity and safety.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop&q=80",
  },
  {
    category: "Community",
    title: "Farmer Support Program",
    description:
      "Empowering local farmers with fair-trade practices, training workshops, and direct procurement partnerships across Marathwada.",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop&q=80",
  },
  {
    category: "Sustainability",
    title: "Eco-Friendly Packaging",
    description:
      "Transitioning to biodegradable and recyclable packaging solutions to reduce our environmental footprint and promote green practices.",
    image:
      "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=800&h=600&fit=crop&q=80",
  },
  {
    category: "Processing",
    title: "Milk Chilling Infrastructure",
    description:
      "Operating state-of-the-art chilling plants with a processing capacity of 30,000 litres per hour to maintain freshness and quality.",
    image:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800&h=600&fit=crop&q=80",
  },
];

export default function ProjectsPage() {
  return (
    <section className="min-h-screen bg-[var(--color-cream-1)] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-8 text-sm"
        >
          <Link
            href="/"
            className="text-[var(--color-forest-500)] hover:underline"
          >
            Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Projects</span>
        </motion.nav>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-3 rounded-full bg-[var(--color-forest-600)] px-4 py-1 text-sm text-white">
            Our Projects
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-forest-900)]">
            Dairy Initiatives & Beyond
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
            From sustainable farming to cutting-edge dairy technology, explore
            the projects that drive Vaishno Hills Dairy Industries forward.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute top-4 left-4 rounded-full bg-[var(--color-gold-400)] px-3 py-1 text-xs font-semibold text-[var(--color-forest-900)]">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-[var(--color-forest-900)] group-hover:text-[var(--color-forest-500)] transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Back CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-forest-600)] px-6 py-3 text-white font-medium hover:bg-[var(--color-forest-500)] transition-colors"
          >
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
