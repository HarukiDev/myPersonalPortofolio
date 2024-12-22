import React, { useState } from "react";
import Navbar from "../component/navbar.jsx";
import { useInView } from "react-intersection-observer";
import Hero from "../section/hero.jsx";
import Experience from "../section/experience.jsx";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

  const { ref: heroRef, inView: isHeroInView } = useInView({
    threshold: 0.3,
    onChange: (inView) => {
      if (inView) {
        setActiveSection("home"); 
      }
    },
  });

  return (
    <div>
      {/* Navbar menerima activeSection sebagai prop */}
      <Navbar activeSection={activeSection} />
      <div className="relative flex flex-col w-full overflow-hidden" ref={heroRef}>
        <Hero />
        <Experience />
      </div>
    </div>
  );
}
