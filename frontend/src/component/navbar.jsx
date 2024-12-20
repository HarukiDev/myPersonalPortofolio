import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import Logo from "../assets/logo.svg";
import { motion } from "framer-motion";

export default function Navbar() {
  const isLargeScreen = useMediaQuery("(max-width: 768px)");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("");
  const [focusedSection, setFocusedSection] = useState(null);
  const sections = ["Home", "Why Us", "QnA", "Testimonial"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id.toLowerCase().replace(" ", ""));
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const backgroundVariants = {
    openYellow: {
      y: "0%",
      backgroundColor: "#FEAF60",
      height: "100vh",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    openBlack: {
      y: "0%",
      backgroundColor: "#000000",
      height: "100vh",
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      y: "-100%",
      height: "0vh",
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };

  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.3 },
    },
  };

  const listItemVariants = (section) => ({
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
    focused: {
      color: section === focusedSection ? "#FEAF60" : "#FFFFFF",
      opacity: section === focusedSection ? 1 : 0,
      y: section === focusedSection ? 0 : 20,
      transition: { duration: 0.4, ease: "easeInOut" }
    },
  });

  const handleOpen = () => {
    if (!dropdownOpen) setDropdownOpen(true);
  };

  const handleClose = () => {
    setFocusedSection(null);
    setDropdownOpen(false);
  };

  const handleItemClick = (section) => {
    setFocusedSection(section); // Fokus pada elemen yang dipilih
    setTimeout(() => {
      handleClose(); 
    }, 700); 
  };

  return (
    <div className="text-[#FEAF60]">
      {isLargeScreen ? (
        <header className="fixed z-50 flex items-center justify-between w-screen px-2 pt-3">
          {/* Logo */}
          <div className="w-[40px]">
            <a href="#home">
              <img className="w-full h-full bg-cover" src={Logo} alt="Logo" />
            </a>
          </div>

          {/* Dropdown Menu */}
          <div className="relative">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="flex items-center justify-center pointer-events-auto btn btn-ghost btn-circle"
                onClick={handleOpen}
              >
                {!dropdownOpen && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>

          {/* Dropdown Full-Screen */}
          <div className="fixed inset-0 z-40 flex flex-col items-center justify-center text-white pointer-events-none">
            <motion.div
              className="absolute inset-0"
              initial="closed"
              animate={dropdownOpen ? "openYellow" : "closed"}
              variants={backgroundVariants}
            ></motion.div>

            <motion.div
              className={`absolute inset-0 ${
                dropdownOpen ? "pointer-events-auto" : "pointer-events-none"
              }`}
              initial="closed"
              animate={dropdownOpen ? "openBlack" : "closed"}
              variants={backgroundVariants}
            ></motion.div>
            
            {dropdownOpen && (
                <motion.div
                className="absolute z-50 cursor-pointer pointer-events-auto top-5 right-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleClose} // Tutup menu
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
                </motion.div>
            )}

            {dropdownOpen && (
              <motion.ul
                className="z-50 text-center pointer-events-auto"
                initial="hidden"
                animate="visible"
                variants={listVariants}
              >
                {sections.map((section, i) => (
                  <motion.li
                    key={i}
                    className="my-4 text-2xl font-bold"
                    variants={focusedSection ? listItemVariants(section) : {}}
                    animate={focusedSection ? "focused" : "visible"}
                    onClick={() => handleItemClick(section)}
                  >
                    <a href={`#${section.toLowerCase().replace(" ", "")}`}>
                      {section}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </div>
        </header>
      ) : (
        <header className="fixed flex top-0 right-0 left-0 items-center z-50 mt-12 lg:mt-8 xl:mt-10 px-[10%] justify-between h-[50px] w-full">
          <div className="flex items-center justify-between w-full">
            <div className="w-[55px]">
              <img className="w-full h-full bg-cover" src={Logo} alt="Logo" />
            </div>
            <div className="flex gap-4 text-base font-extrabold lg:gap-6 xl:gap-8 lg:text-lg xl:text-xl">
              <a
                href="#home"
                className={`${
                  currentSection === "home" ? "text-blue-700" : ""
                }`}
              >
                Home
              </a>
              <a
                href="#whyUs"
                className={`${
                  currentSection === "whyUs" ? "text-blue-700" : ""
                }`}
              >
                Why Us
              </a>
              <a
                href="#qnA"
                className={`${
                  currentSection === "qnA" ? "text-blue-700" : ""
                }`}
              >
                QnA
              </a>
              <a
                href="#testimonial"
                className={`${
                  currentSection === "testimonial" ? "text-blue-700" : ""
                }`}
              >
                Testimonial
              </a>
            </div>
          </div>
        </header>
      )}
    </div>
  );
}
