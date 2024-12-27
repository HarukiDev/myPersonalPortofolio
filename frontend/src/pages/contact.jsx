import React, { useState } from "react";

//Navbar and Footer
import Navbar from "../component/navbar.jsx";
import Footer from "../component/footer.jsx";

//main of contact
import Hero from "../section/contact/hero.jsx";
import MyBackground from "../section/contact/myBackground.jsx";
import MyContact from "../section/contact/myContact.jsx";

export default function contact() {
  const [activeSection, setActiveSection] = useState("contact");

  return (
    <div id="contact">
      {/* Navbar */}
      <header>
        <Navbar activeSection={activeSection} />
      </header>
      
      {/* Main Sections */}
      <main className="relative flex flex-col w-full overflow-hidden">
        <section id="hero">
          <Hero />
        </section>

        <section id="myBackground" className="relative flex flex-col items-center w-full h-auto py-20 text-white bg-[#0F172A]">
          <MyBackground />
        </section>

        <section id="myContact" className="flex flex-col items-center justify-center w-full h-auto py-20 mx-auto lg:h-screen">
          <MyContact />
        </section>
      </main>
      
      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
