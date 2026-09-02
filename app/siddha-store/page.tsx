"use client"

import React from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ShoppingBag, ShieldCheck, Star } from "lucide-react"

export default function SiddhaStorePage() {
  const storeItems = [
    { title: "Original Kashi Vishwanath Bhasma & Prasad Box", price: 551, rating: "4.9" },
    { title: "Siddha Mahakaleshwar Mahamrityunjaya Raksha Sutra", price: 351, rating: "4.9" },
    { title: "Kamakhya Rakt Vastra & Energized Sindoor", price: 751, rating: "5.0" },
    { title: "Pure Brass Panchamrut Kalash & Aarti Diya", price: 1100, rating: "4.8" },
  ]

  return (
    <div className="min-h-screen bg-[#FAFAF7] flex flex-col font-sans">
      <Header />

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:text-left space-y-2">
            <span className="text-xs font-bold text-[#C2410C] uppercase tracking-widest flex items-center justify-center sm:justify-start gap-1">
              <ShoppingBag className="w-4 h-4" /> Authentic Spiritual Store
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-[#4A0E17]">
              Siddha Store & Prasad Delivery
            </h1>
            <p className="text-sm text-[#6B655F] max-w-xl">
              Authentic temple prasad, energized rudraksha, siddha yantras & puja samagri dispatched straight from holy sanctums.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {storeItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-[#E7E0D3] shadow-spiritual flex flex-col justify-between"
              >
                <div>
                  <div className="h-40 bg-[#F5EFE6] rounded-xl flex items-center justify-center text-[#C2410C] font-bold text-lg mb-4">
                    🎁 Temple Prasad Item
                  </div>
                  <h3 className="font-heading text-sm font-bold text-[#4A0E17]">{item.title}</h3>
                  <div className="flex items-center gap-1 text-xs text-amber-600 mt-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{item.rating} Devotee Verified</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E7E0D3] flex items-center justify-between">
                  <span className="font-heading text-lg font-bold text-[#4A0E17]">₹{item.price}</span>
                  <button className="bg-[#C2410C] hover:bg-[#9A3412] text-white text-xs font-bold px-3 py-1.5 rounded-lg">
                    Order Prasad
                  </button>
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
