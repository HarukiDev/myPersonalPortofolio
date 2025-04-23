import React from "react";
import { motion } from "framer-motion";

import DottedBackground from "../../component/dottedBackground.jsx";

export default function whyHireMe() {
  const handleScrollToServices = () => {
    const servicesSection = document.getElementById("myServices");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Dotted Background */}
      <DottedBackground />

      <div className="relative flex flex-col items-center justify-center w-full max-w-[800px]">
        <div className="p-12 lg:p-0">
          {/* Title */}
          <motion.h1
            className="font-extrabold text-[30px] md:text-[40px] lg:text-[60px] text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            Why You Need Hiring Me?
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mb-10 text-base text-center md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          >
            I bring a unique blend of creativity, technical skills, and a
            results-driven mindset to help your team achieve its goals.
          </motion.p>
        </div>
        

        {/* Scroll Down Section */}
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={handleScrollToServices}
        >
          {/* Group Text and SVG with Bounce Animation */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ y: 0 }}
            animate={{
              y: [0, 10, 0], // Bounce effect
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            {/* Scroll Down Text */}
            <span className="mb-2 text-lg font-medium text-gray-600">
              Scroll Down
            </span>

            {/* Panah ke Bawah */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
