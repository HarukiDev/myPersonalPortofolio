import React from "react";
import { motion } from "framer-motion";

export default function hero() {
  return (
    <div className="relative w-full h-[40vh] flex items-center justify-center flex-col mt-20">
      <motion.h1
        className="font-extrabold text-[45px] md:text-[60px] lg:text-[80px] xl:text-[100px] text-start"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact
      </motion.h1>
      <motion.p 
        className="text-base text-start md:text-lg max-w-[800px] px-12 md:px-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Get in Touch: Let’s Collaborate and Create Something Extraordinary Together. Reach Out to Discuss Opportunities, Ideas, or Simply Say Hello!</motion.p>
    </div>
  );
}
