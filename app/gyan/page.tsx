"use client"

import React from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { DharmikGyanCard } from "@/components/utsav/DharmikGyanCard"
import { DHARMIK_GYAN_ARTICLES } from "@/lib/utsav-data"
import { BookOpen } from "lucide-react"

export default function GyanPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] flex flex-col font-sans">
      <Header />

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:text-left space-y-2">
            <span className="text-xs font-bold text-[#C2410C] uppercase tracking-widest flex items-center justify-center sm:justify-start gap-1">
              <BookOpen className="w-4 h-4" /> Spiritual Knowledge Hub
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-[#4A0E17]">
              Dharmik Gyan, Chalisa & Mantras
            </h1>
            <p className="text-sm text-[#6B655F] max-w-xl">
              Deepen your spiritual knowledge with verse-by-verse Chalisa explanations, sacred Mantras, Stotras, and Vedic literature.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DHARMIK_GYAN_ARTICLES.map((article) => (
              <DharmikGyanCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
