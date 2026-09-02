import React from "react"
import Link from "next/link"
import { Calendar, MapPin, Users, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react"
import { PujaItem } from "@/lib/utsav-data"
import { Button } from "@/components/ui/button"

interface PujaCardProps {
  puja: PujaItem
}

export function PujaCard({ puja }: PujaCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-[#E7E0D3] overflow-hidden flex flex-col justify-between group">
      {/* Image Header */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#F5EFE6]">
        <img
          src={puja.imageUrl}
          alt={puja.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
          <span className="bg-[#4A0E17]/90 backdrop-blur-xs text-amber-300 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-amber-500/30">
            {puja.categoryLabel}
          </span>
          {puja.badge && (
            <span className="bg-[#C2410C] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
              {puja.badge}
            </span>
          )}
        </div>

        {/* Bottom Temple & Deity Overlay */}
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <div className="flex items-center gap-1.5 text-xs font-medium text-white">
            <MapPin className="w-3.5 h-3.5 text-white shrink-0" />
            <span>{puja.templeName}</span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="font-heading text-lg font-bold text-[#4A0E17] group-hover:text-[#C2410C] transition-colors leading-snug line-clamp-2">
            {puja.title}
          </h3>

          {/* Date & Tithi */}
          <div className="mt-2.5 flex items-center gap-2 text-xs font-semibold text-[#78716C] bg-[#FAFAF7] p-2 rounded-xl border border-[#E7E0D3]">
            <Calendar className="w-4 h-4 text-[#C2410C] shrink-0" />
            <span>{puja.date}</span>
          </div>

          {/* Key Benefits List */}
          <ul className="mt-3.5 space-y-1.5">
            {puja.benefits.slice(0, 2).map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-[#2D2A26]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Devotees count strip */}
        <div className="flex items-center justify-between text-xs text-[#78716C] pt-2">
          <span className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5 text-[#C2410C]" />
            <strong className="text-[#2D2A26]">{puja.devoteesBooked.toLocaleString()}</strong> devotees booked
          </span>
          <span className="flex items-center gap-1 text-[11px] text-emerald-700 font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" /> Prasad Included
          </span>
        </div>

        {/* Pricing & CTA */}
        <div className="flex items-center justify-between gap-3 pt-3">
          <div>
            <span className="text-[10px] uppercase font-bold text-[#78716C] block">Starting from</span>
            <span className="font-heading text-xl font-bold text-[#4A0E17]">
              ₹{puja.startingPrice}
            </span>
          </div>

          <Button
            asChild
            size="sm"
            className="bg-[#C2410C] hover:bg-[#9A3412] text-white font-bold text-xs px-4 py-2 rounded-xl shadow-md group-hover:scale-102 transition-transform"
          >
            <Link href="/pujas">
              <span>Book Seva</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
