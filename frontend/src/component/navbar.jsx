import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import Logo from "../assets/logo.svg";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ activeSection }) {
  const isLargeScreen = useMediaQuery("(max-width: 768px)");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [focusedSection, setFocusedSection] = useState(null);
  const sections = ["Home", "Services", "Projects", "Contact"];
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
      transition: { duration: 0.4, ease: "easeInOut" },
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
      <AnimatePresence mode="wait">
        {isLargeScreen || isScrolled ? (
          <motion.header
            key="scrolled-or-mobile"
            className="fixed z-50 flex items-center justify-between w-screen px-8 pt-8 md:px-[10%]"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* Konten Navbar */}
            <nav className="flex items-center justify-between w-full">
              {/* Logo */}
              <div className="w-[40px] md:w-[50px]">
                <a href="#home">
                  <img
                    className="w-full h-full transition duration-300 ease-in-out bg-cover hover:-translate-y-1 hover:scale-110"
                    src={Logo}
                    alt="Logo"
                  />
                </a>
              </div>

              {/* Dropdown Menu */}
              <div className="relative">
                <div className="dropdown">
                  <button
                    tabIndex={0}
                    className="flex items-center justify-center pointer-events-auto btn btn-ghost btn-circle hover:-translate-y-1 hover:scale-110"
                    onClick={handleOpen}
                  >
                    {!dropdownOpen && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 p-2 rounded-full md:w-12 md:h-12 bg-slate-600"
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
                  </button>
                </div>
              </div>
            </nav>

            {/* Dropdown Open Content */}
            {dropdownOpen && (
              <motion.div
                className="fixed inset-0 z-40 flex flex-col items-center justify-center text-white bg-black bg-opacity-90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {/* Background Variants */}
                <motion.div
                  className="absolute inset-0"
                  initial="closed"
                  animate={dropdownOpen ? "openYellow" : "closed"}
                  variants={backgroundVariants}
                ></motion.div>
                <motion.div
                  className={`absolute inset-0 ${dropdownOpen ? "pointer-events-auto" : "pointer-events-none"
                    }`}
                  initial="closed"
                  animate={dropdownOpen ? "openBlack" : "closed"}
                  variants={backgroundVariants}
                ></motion.div>

                {/* Tombol Tutup */}
                <motion.div
                  className="absolute z-50 cursor-pointer pointer-events-auto top-7 right-7 md:top-12 md:right-36"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  exit={{ opacity: 0, y: -20 }}
                  onClick={handleClose}
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

                {/* Dropdown List */}
                <motion.ul
                  className="z-50 text-center pointer-events-auto"
                  initial="hidden"
                  animate="visible"
                  variants={listVariants}
                >
                  {sections.map((section) => (
                    <motion.li
                      key={section}
                      className="my-8 text-2xl font-semibold md:my-14"
                      variants={
                        focusedSection
                          ? listItemVariants(section)
                          : listVariants
                      }
                      animate={focusedSection ? "focused" : "visible"}
                      onClick={() => handleItemClick(section)}
                    >
                      <a
                        href={`#${section.toLowerCase().replace(" ", "")}`}
                        className={`${activeSection === section.toLowerCase().replace(" ", "")
                            ? "text-orange-500 font-bold"
                            : ""
                          } hover:text-[#e9b887] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300`}>
                        {section}
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            )}
          </motion.header>
        ) : (
          <motion.header
            key="default-desktop"
            className="fixed flex top-0 right-0 left-0 items-center z-50 mt-12 lg:mt-8 xl:mt-10 px-[10%] justify-between h-[50px] w-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* Konten Navbar */}
            <nav className="flex items-center justify-between w-full">
              {/* Logo */}
              <div className="w-[50px]">
                <a href="#home">
                  <img
                    className="w-full h-full transition duration-300 ease-in-out bg-cover hover:-translate-y-1 hover:scale-110"
                    src={Logo}
                    alt="Logo"
                  />
                </a>
              </div>

              {/* Links */}
              <div className="flex gap-10 text-lg font-semibold">
                {sections.map((section) => (
                  <a
                    key={section}
                    href={`#${section.toLowerCase().replace(" ", "")}`}
                    className={`${activeSection === section.toLowerCase().replace(" ", "")
                        ? "text-black font-bold"
                        : ""
                      } hover:text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300`}
                  >
                    {section}
                  </a>
                ))}
              </div>
            </nav>
          </motion.header>
        )}
      </AnimatePresence>
    </div>

  );
}
