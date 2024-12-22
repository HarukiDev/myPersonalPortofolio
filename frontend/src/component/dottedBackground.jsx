import React from 'react'

export default function dottedBackground() {
  return (
    <div>
      {/* Dotted Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none bg-dotted-pattern"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      {/* Gradient Overlay for Darkness */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Sisi Kiri */}
        <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-[#0F172A] via-transparent to-transparent"></div>
        {/* Sisi Kanan */}
        <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-[#0F172A] via-transparent to-transparent"></div>
        {/* Atas */}
        <div className="absolute top-0 left-0 w-full h-52 bg-gradient-to-b from-[#0F172A] via-transparent to-transparent"></div>
        {/* Bawah */}
        <div className="absolute bottom-0 left-0 w-full h-52 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent"></div>
      </div>
    </div>
  )
}
