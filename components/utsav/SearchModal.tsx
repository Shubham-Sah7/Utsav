"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Search, Flame, MapPin, Sparkles, ArrowRight } from "lucide-react"
import { FEATURED_PUJAS, FEATURED_TEMPLES } from "@/lib/utsav-data"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("")

  const filteredPujas = query
    ? FEATURED_PUJAS.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.deity.toLowerCase().includes(query.toLowerCase()) ||
          p.templeName.toLowerCase().includes(query.toLowerCase())
      )
    : FEATURED_PUJAS.slice(0, 3)

  const filteredTemples = query
    ? FEATURED_TEMPLES.filter(
        (t) =>
          t.name.toLowerCase().includes(query.toLowerCase()) ||
          t.location.toLowerCase().includes(query.toLowerCase())
      )
    : FEATURED_TEMPLES.slice(0, 2)

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl bg-[#FAFAF7] border-[#E7E0D3] p-6 rounded-2xl">
        <DialogHeader className="border-b border-[#E7E0D3] pb-4">
          <DialogTitle className="flex items-center gap-2 font-heading text-lg text-[#4A0E17]">
            <Search className="w-5 h-5 text-[#C2410C]" /> Search Sacred Pujas & Temples
          </DialogTitle>
        </DialogHeader>

        <div className="relative mt-2">
          <Search className="absolute left-3.5 top-3.5 w-5 h-5 text-[#78716C]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type 'Kashi', 'Mahakal', 'Health', 'Rahu', or deity name..."
            className="w-full bg-white border border-[#E7E0D3] rounded-xl pl-11 pr-4 py-3 text-sm text-[#1F1E1D] placeholder:text-[#A8A29E] focus:outline-hidden focus:ring-2 focus:ring-[#C2410C]/50 shadow-inner"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3.5 top-3.5 text-xs text-[#78716C] hover:text-[#1F1E1D]"
            >
              Clear
            </button>
          )}
        </div>

        <div className="max-h-[380px] overflow-y-auto space-y-6 mt-4 pr-1">
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-[#78716C] uppercase tracking-wider mb-2">
              <span>{query ? "Matching Pujas" : "Popular Pujas on Utsav"}</span>
              <Sparkles className="w-3.5 h-3.5 text-[#C2410C]" />
            </div>

            <div className="space-y-2">
              {filteredPujas.map((puja) => (
                <Link
                  key={puja.id}
                  href={`/pujas`}
                  onClick={onClose}
                  className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-[#FEF3C7]/40 border border-[#E7E0D3] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#F5EFE6] flex items-center justify-center text-[#C2410C] shrink-0">
                      <Flame className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-[#1F1E1D] group-hover:text-[#C2410C]">
                        {puja.title}
                      </h4>
                      <p className="text-xs text-[#78716C]">
                        {puja.templeName} • {puja.location}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-[#4A0E17]">₹{puja.startingPrice}</span>
                    <ArrowRight className="w-4 h-4 text-[#78716C] group-hover:text-[#C2410C] ml-auto transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-bold text-[#78716C] uppercase tracking-wider mb-2">
              {query ? "Matching Temples" : "Sacred Temples"}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {filteredTemples.map((temple) => (
                <Link
                  key={temple.id}
                  href={`/temples`}
                  onClick={onClose}
                  className="p-3 rounded-xl bg-white border border-[#E7E0D3] hover:border-[#C2410C] transition-all flex items-center gap-3"
                >
                  <MapPin className="w-4 h-4 text-[#C2410C] shrink-0" />
                  <div>
                    <h5 className="font-semibold text-xs text-[#1F1E1D]">{temple.name}</h5>
                    <span className="text-[11px] text-[#78716C]">
                      {temple.location}, {temple.state}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
