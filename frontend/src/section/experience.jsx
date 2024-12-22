import React from "react";
import { motion } from "framer-motion";
import Timeline from "../component/timeline";
import DottedBackground from "../component/dottedBackground";

export default function Experience() {
  return (
    <section className="relative flex flex-col items-center w-full h-auto py-20 text-white bg-[#0F172A]">
      {/* Dotted Background */}
      <DottedBackground />

      {/* Bagian About Me */}
      <header className="relative z-20 w-full max-w-[800px] text-center">
        <motion.div>
          <motion.h2
            className="mb-6 text-3xl font-bold md:text-4xl"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-base md:text-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            I have worked on various projects, specializing in creating modern
            and intuitive web applications using React.js, Node.js, and other
            cutting-edge technologies. I am passionate about delivering
            high-quality solutions that meet user needs and drive business
            goals.
          </motion.p>
        </motion.div>
      </header>

      {/* Bagian Timeline */}
      <article className="relative z-20 w-full mt-20">
        <Timeline />
      </article>
    </section>
  );
}
