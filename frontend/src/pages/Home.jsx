import React, { useState } from "react";

//Navbar and Footer
import Navbar from "../component/navbar.jsx";
import Footer from "../component/footer.jsx";

//main of home
import Hero from "../section/home/hero.jsx";
import Experience from "../section/home/experience.jsx";
import Achivements from "../section/home/achivements.jsx";
import ToolsUsed from "../component/marquee.jsx";

export default function home() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div id="home">
      {/* Navbar */}
      <header>
        <Navbar activeSection={activeSection} />
      </header>

      {/* Main Sections */}
      <main className="relative flex flex-col w-full overflow-hidden">
        <section id="hero">
          <Hero />
        </section>

        <section id="experience" className="relative flex flex-col items-center w-full h-auto py-20 text-white bg-[#0F172A]">
          <Experience />
        </section>

        <section id="achievements" className="flex flex-col items-center w-full h-auto px-6 py-20 mx-auto">
          <Achivements />
        </section>

        <section id="tools" className="w-full h-auto py-20 mx-auto">
          <ToolsUsed />
        </section>
      </main>
      
      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
