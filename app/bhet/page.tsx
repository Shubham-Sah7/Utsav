"use client"

import React from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Gift, Heart, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BhetPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] flex flex-col font-sans">
      <Header />

      <main className="flex-1 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-[#FEF3C7] text-[#C2410C] flex items-center justify-center mx-auto border border-amber-300">
            <Gift className="w-8 h-8" />
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-[#4A0E17]">
            Temple Bhet & Offerings (भेंट एवं चढ़ावा)
          </h1>
          <p className="text-sm text-[#6B655F] max-w-xl mx-auto leading-relaxed">
            Offer Saree to Goddess Kamakhya, Ghee Deepam at Kashi Vishwanath, or Chhatra to Lord Mahakal directly from your home with video confirmation.
          </p>

          <div className="bg-white p-8 rounded-3xl border border-[#E7E0D3] shadow-spiritual max-w-md mx-auto space-y-4">
            <h3 className="font-heading text-lg font-bold text-[#4A0E17]">Popular Bhet Seva</h3>
            <ul className="text-xs text-[#2D2A26] space-y-2 text-left">
              <li className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#C2410C]" /> 108 Ghee Diya Offering at Kashi Ghats
              </li>
              <li className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#C2410C]" /> Rakt Vastra & Chuni to Kamakhya Devi
              </li>
              <li className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#C2410C]" /> Silver Chhatra Bhet to Mahakaleshwar
              </li>
            </ul>

            <Button className="w-full bg-[#C2410C] hover:bg-[#9A3412] text-white font-bold rounded-xl py-3">
              Offer Bhet Now
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
