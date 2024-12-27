import React from "react";
import { motion } from "framer-motion";
import LocationTag from "../../component/locationTag.jsx";
import TiltCard from "../../component/tiltCard.jsx";
import IntroTyping from "../../component/introTyping.jsx";

export default function hero() {
  return (
    <div className="relative flex items-center justify-center w-full h-screen">
      {/* Nama Besar */}
      <div className="relative mt-20 mb-28 md:mt-0 md:mb-0">
        <IntroTyping 
          text="Welcome To My Page"
          className="text-3xl text-center md:text-6xl"
          delayAfterH1={1.2}
        />
        <motion.h1
          id="hero-heading"
          className="font-extrabold text-[45px] md:text-[60px] lg:text-[80px] xl:text-[100px] text-center transition-all ease-in-out duration-300 lg:mb-24 md:mb-64"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          JIMMY MAULANA
        </motion.h1>
        {/* Card Image */}
        <TiltCard />
      </div>
      
      {/* Lokasi */}
      <motion.aside
        className="absolute bottom-5 lg:bottom-[20%] left-0 transform rotate-6 z-40"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: false }}
      >
        <LocationTag />
      </motion.aside>
      
      {/* Deskripsi dan Tombol */}
      <motion.div
        className="absolute bottom-36 md:bottom-5 lg:bottom-[20%] right-[5%] md:text-start text-end w-[75%] md:w-[25%] z-30"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: false }}
      >
        <p className="text-base md:text-lg">
          Hi, I’m Jimmy Maulana! I specialize in React.js, UI design, and creating innovative, user-friendly solutions.
        </p>
        <div className="flex flex-row-reverse gap-2 py-2 mt-5 md:flex-row">
          <button className="px-6 py-2 text-white transition-transform bg-black rounded-lg shadow-lg hover:bg-gray-800 hover:translate-x-1">
            Get in touch
          </button>
          <a
            href="/CV.pdf"
            download="Jimmy_Maulana_CV.pdf" 
            className="py-2 px-2 border-2 border-[#FEAF60] rounded-lg transition-transform hover:border-[#000000] hover:translate-x-1"
          >
            Download CV
          </a>
        </div>
      </motion.div>
    </div>
  );
}
