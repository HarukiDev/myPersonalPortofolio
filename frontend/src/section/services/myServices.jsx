import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const servicesData = [
  {
    id: "01",
    title: "Web Design",
    description:
      "Transforming ideas into stunning and user-friendly website designs that resonate with your audience.",
  },
  {
    id: "02",
    title: "Web Development",
    description:
      "Building responsive and high-performance websites with seamless functionality tailored to your needs.",
  },
  {
    id: "03",
    title: "Collaborative Projects",
    description:
      "Partnering with teams to bring innovative and impactful projects to life through creative collaboration.",
  },
  {
    id: "04",
    title: "Design and Strategy",
    description:
      "Blending creativity with strategic insight to craft designs that align with your brand vision and goals.",
  },
];

export default function myServices() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  return (
    <div id="myServices">
      {/* Services Grid */}
      <div className="container grid grid-cols-1 gap-6 md:grid-cols-12 max-w-[950px]">
        {servicesData.map((service, idx) => (
          <div
            key={idx}
            className={`relative block w-full h-full p-4 group 
              ${idx === 0 || idx === 3 ? "md:col-span-8" : "md:col-span-4"}`}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-slate-500/[0.8] block rounded-3xl"
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
              className="relative flex items-center justify-center w-full h-full p-6 overflow-hidden bg-white border border-transparent shadow-lg rounded-2xl hover:bg-slate-300 hover:text-gray-600"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="flex flex-col items-center justify-center w-full h-full text-center group">
                <span className="absolute top-0 left-0 px-2 py-1 text-sm text-white bg-black rounded-2xl">
                  {service.id}
                </span>
                <h4 className="font-bold tracking-wide text-black group-hover:text-orange-500">{service.title}</h4>
                <p className="mt-4 text-base leading-relaxed tracking-wide md:text-lg group-hover:text-gray-500">
                  {service.description}
                </p>
              </div>

              {/* Arrow Icon */}
              <motion.div
                className="absolute w-6 h-6 text-black transition-transform bottom-4 right-4 group-hover:rotate-90"
                whileHover={{ rotate: 90 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}
