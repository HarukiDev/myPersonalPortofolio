import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TableView({ displayedProjects }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredProject, setHoveredProject] = useState(null);
  const tableRef = useRef();

  const getRelativeCoordinates = (event, referenceElement) => {
    const position = {
      x: event.pageX,
      y: event.pageY,
    };

    const offset = {
      left: referenceElement.offsetLeft,
      top: referenceElement.offsetTop,
      width: referenceElement.clientWidth,
      height: referenceElement.clientHeight,
    };

    let reference = referenceElement.offsetParent;

    while (reference) {
      offset.left += reference.offsetLeft;
      offset.top += reference.offsetTop;
      reference = reference.offsetParent;
    }

    return {
      x: position.x - offset.left,
      y: position.y - offset.top,
    };
  };

  const handleMouseMove = (event) => {
    const coords = getRelativeCoordinates(event, tableRef.current);
    setMousePosition(coords);
  };

  return (
    <motion.div
      ref={tableRef}
      className="relative lg:w-[800px] xl:w-[950px] h-[900px] border-t border-gray-300"
      onMouseMove={handleMouseMove}
    >
      {/* Custom Cursor Image */}
      <AnimatePresence mode="wait">
        {hoveredProject && (
          <motion.div
            key={hoveredProject.image}
            className="absolute overflow-hidden rounded-lg shadow-lg pointer-events-none"
            style={{
              width: "300px",
              height: "180px",
              zIndex: 50,
            }}
            initial={{
              opacity: 0,
              scale: 0.9, 
              x: mousePosition.x - 150,
              y: mousePosition.y - 100,
            }}
            animate={{
              opacity: 1,
              scale: 1, 
              x: mousePosition.x - 150,
              y: mousePosition.y - 100,
            }}
            exit={{
              opacity: 0,
              scale: 0.9, 
              x: mousePosition.x - 150,
              y: mousePosition.y - 100,
            }}
            transition={{
              type: "tween",
              duration: 0.2, 
              ease: "easeOut", 
            }}
          >
            <img
              src={hoveredProject.image}
              alt={hoveredProject.project}
              className="object-contain w-full h-full bg-slate-600"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Table */}
      <table className="w-full text-left border-collapse cursor-pointer">
        <thead>
          <tr className="items-center h-24">
            <th className="w-32 px-4 py-2 ">AUTHOR</th>
            <th className="w-32 px-4 py-2 ">PROJECT</th>
            <th className="w-32 px-4 py-2 ">LOCATION</th>
            <th className="w-32 px-4 py-2 ">SERVICES</th>
            <th className="w-5 px-4 py-2 ">YEAR</th>
          </tr>
        </thead>
        <tbody>
          {displayedProjects.map((project, index) => (
            <motion.tr
              key={index}
              className="relative border-gray-300 border-y"
              style={{ height: "150px" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
              transition={{
                duration: 0.3, // Waktu transisi baris lebih cepat
                ease: "easeOut",
              }}
            >
              <td className="w-32 px-4 py-2">{project.author}</td>
              <td className="w-32 px-4 py-2">{project.project}</td>
              <td className="w-32 px-4 py-2">{project.location}</td>
              <td className="w-32 px-4 py-2" >{project.services}</td>
              <td className="w-5 px-4 py-2">{project.year}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}
