"use client"

import React from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { TODAY_PANCHANG } from "@/lib/utsav-data"
import { Sun, Moon, Calendar, Clock } from "lucide-react"

export default function PanchangPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] flex flex-col font-sans">
      <Header />

      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8 text-center space-y-2">
            <span className="text-xs font-bold text-[#C2410C] uppercase tracking-widest flex items-center justify-center gap-1">
              <Sun className="w-4 h-4 text-amber-500" /> Vedic Calendar
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-[#4A0E17]">
              Today's Hindu Panchang & Muhurat
            </h1>
            <p className="text-sm text-[#6B655F]">
              Accurate daily Tithi, Nakshatra, Rahukaal & Abhijit Muhurat derived from authentic Hindu Samvat.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-[#E7E0D3] shadow-spiritual space-y-6">
            <div className="border-b border-[#E7E0D3] pb-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
              <div>
                <h2 className="font-heading text-xl font-bold text-[#4A0E17]">{TODAY_PANCHANG.dateStr}</h2>
                <span className="text-xs text-[#C2410C] font-semibold">{TODAY_PANCHANG.vikramSamvat}</span>
              </div>
              <div className="bg-[#FEF3C7] text-[#92400E] text-xs font-bold px-3 py-1.5 rounded-full border border-amber-300">
                {TODAY_PANCHANG.tithi}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div className="p-4 rounded-xl bg-[#FAFAF7] border border-[#E7E0D3] space-y-2">
                <span className="text-xs font-bold text-[#78716C] uppercase">Nakshatra & Yoga</span>
                <p className="font-semibold text-[#4A0E17]">{TODAY_PANCHANG.nakshatra}</p>
                <p className="text-xs text-[#6B655F]">Yoga: {TODAY_PANCHANG.yoga}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAFAF7] border border-[#E7E0D3] space-y-2">
                <span className="text-xs font-bold text-[#78716C] uppercase">Sunrise & Sunset</span>
                <p className="font-semibold text-[#4A0E17]">{TODAY_PANCHANG.sunriseSunset}</p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2">
                <span className="text-xs font-bold text-emerald-800 uppercase">Auspicious Abhijit Muhurat</span>
                <p className="font-bold text-emerald-900">{TODAY_PANCHANG.auspiciousMuhurat}</p>
              </div>

              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 space-y-2">
                <span className="text-xs font-bold text-rose-800 uppercase">Rahu Kaal (Avoid New Tasks)</span>
                <p className="font-bold text-rose-900">{TODAY_PANCHANG.rahukaal}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
