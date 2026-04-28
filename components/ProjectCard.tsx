"use client";

import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  desc,
  tech,
}: {
  title: string;
  desc: string;
  tech: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md
                 hover:bg-white/10 shadow-lg shadow-black/20"
    >
      <h3 className="text-lg font-semibold text-blue-400">{title}</h3>
      <p className="text-gray-300 mt-2 text-sm leading-relaxed">{desc}</p>
      <p className="text-gray-500 text-xs mt-3">{tech}</p>
    </motion.div>
  );
}