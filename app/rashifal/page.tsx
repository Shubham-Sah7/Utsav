"use client"

import React from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Compass, Sparkles } from "lucide-react"

export default function RashifalPage() {
  const rashiList = [
    { name: "Mesh (Aries)", symbol: "♈", pred: "Career advancement expected. Offer Jal to Surya Dev in morning." },
    { name: "Vrishabh (Taurus)", symbol: "♉", pred: "Financial gains. Worship Goddess Lakshmi for sustained prosperity." },
    { name: "Mithun (Gemini)", symbol: "♊", pred: "Good news in family. Recite Vishnu Sahasranamam." },
    { name: "Kark (Cancer)", symbol: "♋", pred: "Inner peace restored. Perform Shiva Abhishekam." },
    { name: "Singh (Leo)", symbol: "♌", pred: "Leadership opportunities ahead. Recite Aditya Hrudayam." },
    { name: "Kanya (Virgo)", symbol: "♍", pred: "Business growth. Offer Durva grass to Lord Ganesha." },
  ]

  return (
    <div className="min-h-screen bg-[#FAFAF7] flex flex-col font-sans">
      <Header />

      <main className="flex-1 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-10 text-center space-y-2">
            <span className="text-xs font-bold text-[#C2410C] uppercase tracking-widest flex items-center justify-center gap-1">
              <Sparkles className="w-4 h-4" /> Daily Horoscope Predictions
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-[#4A0E17]">
              Today's Rashifal & Remedies
            </h1>
            <p className="text-sm text-[#6B655F]">
              Plan your day with Vedic astrological insights and recommended temple Pujas for your Rashi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rashiList.map((rashi, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#E7E0D3] shadow-spiritual flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-10 h-10 rounded-full bg-[#FEF3C7] text-[#92400E] font-bold text-xl flex items-center justify-center">
                      {rashi.symbol}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-[#4A0E17]">{rashi.name}</h3>
                  </div>
                  <p className="text-xs text-[#6B655F] leading-relaxed">{rashi.pred}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
