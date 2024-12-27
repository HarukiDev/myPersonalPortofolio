import React, { useState } from "react";

//Navbar and Footer
import Navbar from "../component/navbar.jsx";
import Footer from "../component/footer.jsx";

//main of services
import Hero from "../section/services/hero.jsx";
import WhyHireMe from "../section/services/whyHireMe.jsx";
import MyServices from "../section/services/myServices.jsx";

export default function services() {
  const [activeSection, setActiveSection] = useState("services");

  return (
    <div id="services">
      {/* Navbar */}
      <header>
        <Navbar activeSection={activeSection} />
      </header>
      
      {/* Main Sections */}
      <main className="relative flex flex-col w-full overflow-hidden">
        <section id="hero">
          <Hero />
        </section>
        
        <section id="whyHireMe" className="relative flex flex-col items-center w-full h-auto py-20 text-white bg-[#0F172A]">
          <WhyHireMe />
        </section>

        <section id="myServices" className="flex flex-col items-center justify-center w-full h-auto py-20 mx-auto lg:h-screen">
          <MyServices />
        </section>
      </main>
      
      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
