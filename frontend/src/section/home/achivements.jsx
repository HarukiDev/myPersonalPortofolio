import React from "react";
import { motion } from "framer-motion";

const awardsData = [
  {
    year: "2024",
    awards: [
      {
        title: "Second Place in Web Development Competition",
        highlight: "Srifoton",
        description: "(November 2024)",
        category: "",
      },
      {
        title: "Third Place in Application Design Competition",
        highlight: "PTQ",
        description: "(March 2024)",
        category: "",
      },
    ],
  },
  {
    year: "2023",
    awards: [
      {
        title: "Staff Of The Month Global",
        highlight: "Himpunan Mahasiswa Informatika",
        description: "(April 2023)",
        category: "",
      },
      {
        title: "Staff of the Month for Kominfo Multimedia Division",
        highlight: "Himpunan Mahasiswa Informatika",
        description: "(May 2023)",
        category: "",
      },
      {
        title: "Best Video in the Organization and Computer Architecture Project",
        highlight: "Informatic Engineering Regular 2",
        description: "(May 2023)",
        category: "",
      },
      {
        title: "Third Place in Competitive Programming",
        highlight: "IFFEST",
        description: "(April 2023)",
        category: "",
      },
    ],
  },
  {
    year: "2022",
    awards: [
      {
        title: "Third Overall in Class Ranking",
        highlight: "SMA Negeri 2 Palembang",
        description: "(January 2022)",
        category: "",
      },
    ],
  },
];

export default function achivements() {
  return (
    <div>
      <h1 className="mb-12 text-3xl font-bold text-left">Award Achieved</h1>
      <div className="flex flex-col items-start justify-center w-full max-w-4xl gap-12">
        {awardsData.map((yearData, index) => (
          <div key={index} className="flex justify-between w-full border-t-2">
            {/* Year Section */}
            <motion.div
              className="font-bold text-orange-500 min-w-[80px] text-xl mt-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {yearData.year}
            </motion.div>

            {/* Awards Section */}
            <div className="flex flex-col flex-grow gap-6 mt-4">
              {yearData.awards.map((award, idx) => (
                <motion.div
                  key={idx}
                  className="pb-2"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                >
                  <h3 className="text-lg font-semibold transition duration-300 ease-in-out hover:text-orange-500">
                    {award.category && `${award.category} - `}
                    {award.title} <span className="text-orange-500">{award.highlight}</span>
                  </h3>
                  <p className="text-sm text-gray-400 md:text-base">{award.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}