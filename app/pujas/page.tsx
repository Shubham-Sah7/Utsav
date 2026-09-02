"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { PujaCard } from "@/components/utsav/PujaCard"
import { FEATURED_PUJAS, PUJA_CATEGORIES } from "@/lib/utsav-data"
import { Search, Flame, Filter } from "lucide-react"

export default function PujasPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [search, setSearch] = useState("")

  const filtered = FEATURED_PUJAS.filter((p) => {
    const catMatch = selectedCategory === "all" || p.category === selectedCategory
    const searchMatch =
      !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.templeName.toLowerCase().includes(search.toLowerCase())
    return catMatch && searchMatch
  })

  return (
    <div className="min-h-screen bg-[#FAFAF7] flex flex-col font-sans">
      <Header />

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10 text-center sm:text-left space-y-2">
            <span className="text-xs font-bold text-[#C2410C] uppercase tracking-widest flex items-center justify-center sm:justify-start gap-1">
              <Flame className="w-4 h-4" /> Sacred Seva Catalog
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-[#4A0E17]">
              Explore Authentic Temple Pujas
            </h1>
            <p className="text-sm text-[#6B655F] max-w-xl">
              Book Pujas performed by certified Veda Pandits with your Naam & Gotra. Receive live video proof & authentic Prasad.
            </p>
          </div>

          {/* Filters Bar */}
          <div className="bg-white p-4 rounded-2xl border border-[#E7E0D3] shadow-xs mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {PUJA_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                    selectedCategory === cat.id
                      ? "bg-[#C2410C] text-white"
                      : "bg-[#FAFAF7] text-[#2D2A26] border border-[#E7E0D3] hover:border-[#C2410C]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-[#78716C]" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search pujas..."
                className="w-full bg-[#FAFAF7] border border-[#E7E0D3] rounded-xl pl-9 pr-3 py-2 text-xs text-[#1F1E1D] focus:outline-hidden focus:ring-2 focus:ring-[#C2410C]/50"
              />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((puja) => (
              <PujaCard key={puja.id} puja={puja} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
