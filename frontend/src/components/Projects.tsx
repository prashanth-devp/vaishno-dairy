"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    category: "Farm Life",
    title: "Green Harvest Initiative",
    image: "/images/projects/green-harvest.jpg",
  },
  {
    category: "Livestock",
    title: "Healthy Herd Program",
    image: "/images/projects/healthy-herd.jpg",
  },
  {
    category: "Agro Tourism",
    title: "Farm Experience Retreat",
    image: "/images/projects/farmstay.jpg",
  },
  {
    category: "Milk & Produce",
    title: "Pure Dairy Products",
    image: "/images/projects/pure-produce.jpg",
  },
  {
    category: "Dairy Tech",
    title: "Smart Dairy Operations",
    image: "/images/projects/dairy-tech.jpg",
  },
];

export default function Projects() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block mb-3 rounded-full bg-[#5c3d2e] px-4 py-1 text-sm text-white">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2e1b12]">
            Exploring Our Dairy Initiatives
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            From sustainable farming to ethical dairy practices, our projects
            reflect our commitment to quality, purity, and innovation.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-xl group ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-5 left-5 right-5">
                <span className="text-sm text-yellow-400 font-medium">
                  {project.category}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-white">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="/projects"
            className="inline-flex items-center gap-2 text-[#5c3d2e] font-medium hover:underline"
          >
            View More Projects →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
