import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/jimmy.svg"; 

export default function CardProfil() {
  return (
    <motion.div
      className="w-full h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.div
        className="flex flex-col justify-center max-w-xs p-5 mx-auto bg-[#1C2638] shadow-xl rounded-xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img
            className="object-cover w-24 h-24 mx-auto bg-orange-500 rounded-full shadow-xl"
            src={profileImage}
            alt="Profile of Jimmy Maulana"
          />
        </motion.div>

        {/* Profile Details */}
        <div className="mt-5 text-center">
          <motion.p
            className="text-xl font-semibold text-zinc-100 sm:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Jimmy Maulana
          </motion.p>
          <motion.p
            className="inline-block px-5 pt-2 pb-4 text-xs border-b-2 text-zinc-400 sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Informatics Engineering Student at Universitas Sriwijaya
          </motion.p>

          {/* Contact Button */}
          <motion.button
            className="flex justify-center w-full mt-4 bg-orange-500 rounded-lg hover:bg-orange-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a className="px-6 py-2 font-bold text-white" href="#myContact">
              Contact Me!
            </a>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
