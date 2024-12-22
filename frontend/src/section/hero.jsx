import React from "react";
import { motion } from "framer-motion";
import LocationTag from "../component/locationTag.jsx";
import TiltCard from "../component/tiltCard.jsx";
import IntroTyping from "../component/introTyping.jsx";

export default function Hero() {
  return (
    <div className="relative flex items-center justify-center w-full h-screen bg-[#F4F3ED]">
      {/* Nama Besar */}
      <div className="relative mt-20 mb-28 md:mt-0 md:mb-0">
        <IntroTyping 
          text="Welcome To My Page"
          delayAfterH1={1.2}
        />
        <motion.h1
          className="font-extrabold text-[45px] md:text-[60px] lg:text-[80px] xl:text-[100px] text-center transition-all ease-in-out duration-300 lg:mb-24 md:mb-64"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }} // Animasi akan dipicu setiap kali elemen terlihat
        >
          JIMMY MAULANA
        </motion.h1>
        {/* Card Image */}
        <TiltCard />
      </div>
      
      {/* Lokasi */}
      <motion.div
        className="absolute bottom-5 lg:bottom-[20%] left-0 transform rotate-6 z-40"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: false }} // Animasi dipicu ulang saat elemen terlihat
      >
        <LocationTag />
      </motion.div>
      
      {/* Deskripsi dan Tombol */}
      <motion.div
        className="absolute bottom-36 md:bottom-5 lg:bottom-[20%] right-[5%] md:text-start text-end w-[75%] md:w-[25%] z-30"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: false }} // Animasi dipicu ulang saat elemen terlihat
      >
        <p className="text-base md:text-lg">
          Hi, I’m Jimmy Maulana! I specialize in React.js, UI design, and creating innovative, user-friendly solutions.
        </p>
        <button className="px-6 py-2 mt-5 text-white bg-black rounded-lg shadow-lg hover:bg-gray-800">
          Get in touch
        </button>
      </motion.div>
    </div>
  );
}
