import React, { useState } from "react";
import { motion } from "framer-motion";
import CardProfil from "../assets/cardProfile.svg";

export default function tiltCard() {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    // posisi kursor relatif terhadap elemen
    const x = clientX - left;
    const y = clientY - top;

    // rotasi berdasarkan posisi kursor
    const rotateX = ((y / height) - 0.5) * -15; // Range: -15 to 15
    const rotateY = ((x / width) - 0.5) * 15; // Range: -15 to 15

    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 }); 
  };

  return (
    <motion.div
      className="absolute top-[-220%] md:bottom-0 left-0 right-0 z-40 flex items-center justify-center m-auto md:top-[30%] lg:top-[120%]"
      style={{
        perspective: "1000px", // Untuk efek 3D
      }}
      initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 8 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: false }} 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.img
        src={CardProfil}
        alt="Card Profile"
        className="w-48 md:w-64 lg:w-80 p-2 border-2 border-[#FEAF60] rounded-md"
        animate={{
          rotateX: tilt.rotateX,
          rotateY: tilt.rotateY,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 80,
        }}
      />
    </motion.div>
  );
}
