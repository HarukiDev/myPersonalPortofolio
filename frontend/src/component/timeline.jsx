import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const timelineData = [
  {
    title: "Lintasarta - Capstone Project",
    date: "October 2024",
    description:
      "Led the design and development of a modern, user-friendly recruitment platform interface, focusing on accessibility, responsiveness, and interactivity. Integrated 'Adinda,' an intuitive chatbot assistant.",
  },
  {
    title: "Bangkit Academy - Cloud Computing",
    date: "September 2024",
    description:
      "Comprehensive training on Google Cloud technologies as part of the Kampus Merdeka program. Developed technical and soft skills, including project management, teamwork, and critical thinking.",
  },
  {
    title: "Fasilkom Science Community - Head of Multimedia",
    date: "January 2024",
    description:
      "Designed organizational materials, coordinated multimedia events, and represented the organization at faculty-level and academic forums.",
  },
  {
    title: "Himpunan Mahasiswa Informatika - Multimedia Staff",
    date: "February 2023",
    description:
      "Created Instagram feed templates, edited multimedia content, and managed documentation for major events like Srifoton and PKKMB Jurusan.",
  },
];

export default function Timeline() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="max-w-5xl px-8 py-10 mx-auto">
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-white">Experience Timeline</h2>
      </motion.div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {timelineData.map((item, idx) => (
          <div
            key={idx}
            className="relative block w-full h-full p-2 group"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <motion.div
              className="rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-800/[0.2] border border-transparent group-hover:border-slate-700 relative z-50"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="relative z-50">
                <div className="p-4">
                  <span className="block mb-2 font-semibold text-orange-500">
                    {item.date}
                  </span>
                  <h4 className="mt-4 font-bold tracking-wide text-zinc-100">
                    {item.title}
                  </h4>
                  <p className="mt-4 text-sm leading-relaxed tracking-wide text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
