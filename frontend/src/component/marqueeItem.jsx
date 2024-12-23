import React from "react";
import { motion } from "framer-motion";

const MarqueeItem = ({ images, from, to }) => {
  return (
    <div className="flex">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-56 h-40 px-20 border border-gray-200"
          >
            <img className="w-12 h-12" src={image.src} alt={image.name} />
            <p className="ml-4 text-sm font-semibold text-gray-700">{image.name}</p>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => (
          <div
            key={`duplicate-${index}`}
            className="flex items-center justify-center w-56 h-40 px-20 border border-gray-200"
          >
            <img className="w-12 h-12" src={image.src} alt={image.name} />
            <p className="ml-4 text-sm font-semibold text-gray-700">{image.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeItem;
