import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@uidotdev/usehooks";
import TableView from "../../component/tableView";
import GridView from "../../component/gridView";


//Projects Image
import HealthyLife from "../../assets/projects/HealthyLife.svg"
import Calculator from "../../assets/projects/Calculator.svg"
import Steakgacor from "../../assets/projects/Steakgacor.svg"
import Altalim from "../../assets/projects/Altalim.svg"
import Hydrocare from "../../assets/projects/Hydrocare.svg"
import Aitalentdna from "../../assets/projects/Aitalentdna.svg"

const projectData = [
  {
    author: "Jimmy",
    project: "HealthyLife Website Prototype",
    location: "Indonesia",
    services: "UI Design",
    year: 2023,
    category: ["UI/UX"],
    image: HealthyLife,
  },
  {
    author: "Jimmy",
    project: "Kalkulator Sederhana",
    location: "Indonesia",
    services: "Java Swing Application",
    year: 2023,
    category: ["Other"],
    image: Calculator,
  },
  {
    author: "Jimmy",
    project: "SteakGacor Website",
    location: "Indonesia",
    services: "UI/UX & Web Development",
    year: 2023,
    category: ["Web", "UI/UX"],
    image: Steakgacor,
  },
  {
    author: "Jimmy",
    project: "Al-Ta’lim Mobile Prototype",
    location: "Indonesia",
    services: "UI Design",
    year: 2023,
    category: ["UI/UX"],
    image: Altalim,
  },
  {
    author: "Jimmy",
    project: "Kursus Pemrograman Komputer Prototype",
    location: "Indonesia",
    services: "UI Design",
    year: 2023,
    category: ["UI/UX"],
    image: "https://via.placeholder.com/300",
  },
  {
    author: "w/Team",
    project: "ElyTech Website",
    location: "Indonesia",
    services: "UI/UX & Web Development",
    year: 2022,
    category: ["Web"],
    image: "https://via.placeholder.com/300",
  },
  {
    author: "w/Team",
    project: "Sistem Informasi Pendaftaran Tugas Akhir (SIPTA)",
    location: "Indonesia",
    services: "UI/UX & Web Development",
    year: 2023,
    category: ["Web", "UI/UX"],
    image: "https://via.placeholder.com/300",
  },
  {
    author: "w/Team",
    project: "Rekomendasi Laptop Berbasis RAM dan Penyimpanan",
    location: "Indonesia",
    services: "Web Development",
    year: 2023,
    category: ["Web"],
    image: "https://via.placeholder.com/300",
  },
  {
    author: "w/Team",
    project: "Brute Force vs Greedy Algorithm",
    location: "Indonesia",
    services: "Python Programming",
    year: 2023,
    category: ["Other"],
    image: "https://via.placeholder.com/300",
  },
  {
    author: "w/Team",
    project: "Hydrocare Srifoton Website",
    location: "Indonesia",
    services: "UI/UX & Web Development",
    year: 2024,
    category: ["Web", "UI/UX"],
    image: Hydrocare,
  },
  {
    author: "w/Team",
    project: "AITalentDNA Website",
    location: "Indonesia",
    services: "Web Development",
    year: 2024,
    category: ["Web"],
    image: Aitalentdna,
  },
];


export default function myProjects() {
    const [filter, setFilter] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 5;
    
    // Check screen size for large screens
    const isLargeScreen = useMediaQuery("(min-width: 1024px)");

    // Sort projects by year descending
    const sortedProjects = projectData.sort((a, b) => b.year - a.year);
  
    // Filter projects based on selected category
    const filteredProjects =
      filter === "All"
        ? sortedProjects
        : sortedProjects.filter((project) =>
            project.category.includes(filter)
          );
  
    // Calculate pagination
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
    const displayedProjects = filteredProjects.slice(
      (currentPage - 1) * projectsPerPage,
      currentPage * projectsPerPage
    );
  
    return (
      <div className="flex flex-col items-center w-full p-6">
        {/* Filter Buttons & Pagination */}
        <motion.div
          className="flex items-center justify-between w-full gap-4 mb-6 md:w-[800px] xl:w-[950px] px-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        > 
            <div className="flex flex-row flex-wrap gap-4 md:w-[50%]">
                {/* Category Buttons */}
                {["All", "Web", "UI/UX", "Other"].map((category) => (
                    <button
                    key={category}
                    className={`px-4 py-2 rounded-full border ${
                        filter === category
                        ? "bg-black text-white"
                        : "bg-white text-black border-black"
                    }`}
                    onClick={() => setFilter(category)}
                    >
                    {category}
                    </button>
                ))}
            </div>
            
            <div className="flex flex-row flex-wrap justify-end gap-4 md:w-36 lg:w-[50%]">
                {/* Pagination */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                    key={page}
                    className={`px-3 py-1 rounded-full border ${
                        currentPage === page
                        ? "bg-black text-white"
                        : "bg-white text-black border-black"
                    }`}
                    onClick={() => setCurrentPage(page)}
                    >
                    {page}
                    </button>
                ))}  
            </div>
        </motion.div>
  
        <AnimatePresence mode="wait">
            <motion.div
                key={filter} 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Conditional Rendering for TableView and GridView */}
              {isLargeScreen ? (
                <TableView displayedProjects={displayedProjects} />
              ) : (
                <GridView displayedProjects={displayedProjects} />
              )}
            </motion.div>
        </AnimatePresence>
      </div>
    );
  }