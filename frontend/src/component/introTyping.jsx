import React from "react";
import { motion } from "framer-motion";

export default function IntroTyping({
  text = "Welcome To My Page",
  delayAfterH1 = 1,
  className = "",
  disableStroke = false,
}) {
  return (
    <motion.h2
      className={`font-bold ${
        disableStroke
          ? "" // Tidak ada stroke
          : "text-stroke md:text-stroke-2 text-stroke-black text-transparent"
      } ${className}`}
    >
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          viewport={{
            once: false,
            amount: 0.5,
          }}
          transition={{
            duration: index === 0 ? 0.4 : 0.1,
            delay: delayAfterH1 + index * 0.1,
            ease: index === 0 ? "easeInOut" : "linear",
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.h2>
  );
}
