import React from "react";
import { motion } from "framer-motion";

import DottedBackground from "../../component/dottedBackground.jsx";
import CardProfil from "../../component/cardProfil.jsx";

export default function myBackgrouund() {
  const handleScrollToContact = () => {
    const servicesSection = document.getElementById("myContact");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Dotted Background */}
      <DottedBackground />

      <div className="relative flex flex-col items-center justify-center w-full">
        {/* Title */}
        <CardProfil />

        <div className="max-w-[800px] text-center flex flex-col justify-center items-center mt-6">
          <div className="px-12">
            {/* Title */}
            <motion.h1
              className="font-extrabold text-[30px] md:text-[40px] lg:text-[60px] text-center mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              My Background
            </motion.h1>
    
            {/* Subtitle */}
            <div>
                <motion.p
                    className="mb-10 text-base text-center md:text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
                >
                    Hi! I'm Jimmy, an Informatics Engineering student with a strong passion for web development. I enjoy exploring new ways to design and develop websites that are not only functional but also visually appealing. Additionally, my experience in teamwork has shaped me into a flexible and adaptable individual in various situations.
                </motion.p>
                <motion.p
                    className="mb-10 text-base text-center md:text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
                >
                    I'm always eager to deepen my knowledge of web development. With the experience I have, I feel more prepared to tackle challenges and engage in projects that can make a real impact. I'm constantly seeking opportunities to expand my skills, collaborate with others, and contribute to innovative solutions.
                </motion.p>
            </div>
          </div>
        </div>

        {/* Scroll Down Section */}
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={handleScrollToContact}
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
