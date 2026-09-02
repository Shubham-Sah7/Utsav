"use client"

import React from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { TempleCard } from "@/components/utsav/TempleCard"
import { FEATURED_TEMPLES } from "@/lib/utsav-data"
import { Compass } from "lucide-react"

export default function TemplesPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] flex flex-col font-sans">
      <Header />

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:text-left space-y-2">
            <span className="text-xs font-bold text-[#C2410C] uppercase tracking-widest flex items-center justify-center sm:justify-start gap-1">
              <Compass className="w-4 h-4" /> Sacred Shrines Directory
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-[#4A0E17]">
              Sacred Temples & Dham of India
            </h1>
            <p className="text-sm text-[#6B655F] max-w-xl">
              Discover 12 Jyotirlingas, 51 Shaktipeeths, and ancient holy temples where Utsav performs authentic rituals on your behalf.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURED_TEMPLES.map((temple) => (
              <TempleCard key={temple.id} temple={temple} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
