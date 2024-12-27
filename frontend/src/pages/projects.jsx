import React, { useState } from "react";

//Navbar and Footer
import Navbar from "../component/navbar.jsx";
import Footer from "../component/footer.jsx";

//main of projects
import Hero from "../section/projects/hero.jsx";
import MyProjects from "../section/projects/myProjects.jsx"

export default function projects() {
  const [activeSection, setActiveSection] = useState("projects");

  return (
    <div id="projects">
      {/* Navbar */}
      <header>
        <Navbar activeSection={activeSection} />
      </header>

      {/* Main Sections */}
      <main className="relative flex flex-col w-full overflow-hidden">
        <section id="hero">
          <Hero />
        </section>

        <section id="whyHireMe" className="flex flex-col items-center justify-center w-full h-auto mx-auto">
          <MyProjects />
        </section>
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
