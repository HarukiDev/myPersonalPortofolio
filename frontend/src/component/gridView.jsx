import React from "react";
import { motion } from "framer-motion";

export default function gridView({ displayedProjects }) {
  return (
    <div className="grid h-auto grid-cols-1 gap-6 md:grid-cols-2 lg:hidden">
      {displayedProjects.map((project, index) => (
        <motion.div
          key={index}
          className="flex flex-col p-6 overflow-hidden border border-gray-300 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <img
            src={project.image}
            alt={project.project}
            className="object-cover w-full h-40"
          />
          <div className="p-4 w-[300px] md:w-[500px]">
            <h3 className="text-lg font-bold">{project.project}</h3>
            <p className="text-sm text-gray-600">{project.author}</p>
            <p className="text-sm">{project.location}</p>
            <p className="text-sm">{project.services}</p>
            <p className="text-sm">{project.year}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
