"use client";

import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FFF9EF]/95 backdrop-blur-md transition-all duration-300">
      <div className="relative flex flex-col items-center justify-center space-y-4">
        {/* Pulsing Warm Glow Effect */}
        <div className="absolute w-28 h-28 rounded-full bg-[#EA5C26]/15 blur-xl animate-pulse" />

        {/* Rotating Sacred Ring */}
        <div className="relative w-20 h-20 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-t-[#EA5C26] border-r-transparent border-b-[#6D1344] border-l-transparent animate-spin duration-1000" />

          {/* Central Utsav Om Logo */}
          <div className="w-14 h-14 rounded-full bg-white shadow-md border border-[#E8D8C5] flex items-center justify-center p-2.5 animate-pulse">
            <img
              src="/Logo.png"
              alt="Utsav Om Logo Loading"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Brand Caption */}
        <div className="text-center space-y-1 pt-2">
          <span className="font-heading text-sm font-bold text-[#6D1344] tracking-tight block">
            Utsav
          </span>
          <span className="text-[11px] font-medium text-[#EA5C26] tracking-wider uppercase block">
            Connecting Devotees & Sacred Shrines
          </span>
        </div>
      </div>
    </div>
  );
}
