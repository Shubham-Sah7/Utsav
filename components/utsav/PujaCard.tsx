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
    <div className="bg-white rounded-2xl border border-[#E8D8C5] overflow-hidden flex flex-col justify-between group hover:border-[#EA5C26]/40 hover:shadow-md transition-all duration-300">
      {/* Image Header */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#F6E1C6]/30">
        <img
          src={puja.imageUrl}
          alt={puja.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C151B]/85 via-[#2C151B]/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
          <span className="bg-[#6D1344]/90 backdrop-blur-xs text-[#FFF9EF] text-[11px] font-semibold px-3 py-1 rounded-full border border-[#FFF9EF]/20">
            {puja.categoryLabel}
          </span>
          {puja.badge && (
            <span className="bg-[#EA5C26] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
              {puja.badge}
            </span>
          )}
        </div>

        {/* Bottom Temple Overlay */}
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#FFF9EF]">
            <MapPin className="w-3.5 h-3.5 text-[#FAA531] shrink-0" />
            <span>{puja.templeName}</span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="font-heading text-lg font-bold text-[#6D1344] group-hover:text-[#EA5C26] transition-colors leading-snug line-clamp-2">
            {puja.title}
          </h3>

          {/* Date & Tithi */}
          <div className="mt-2.5 flex items-center gap-2 text-xs font-medium text-[#7A676E] bg-[#FFF9EF] p-2.5 rounded-xl border border-[#E8D8C5]">
            <Calendar className="w-4 h-4 text-[#EA5C26] shrink-0" />
            <span>{puja.date}</span>
          </div>

          {/* Key Benefits List */}
          <ul className="mt-3.5 space-y-1.5">
            {puja.benefits.slice(0, 2).map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-[#2C151B]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#EA5C26] shrink-0 mt-0.5" />
                <span className="line-clamp-1">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Devotees count strip */}
        <div className="flex items-center justify-between text-xs text-[#7A676E] pt-2 border-t border-[#E8D8C5]/60">
          <span className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5 text-[#EA5C26]" />
            <strong className="text-[#6D1344]">{puja.devoteesBooked.toLocaleString()}</strong> devotees participated
          </span>
          <span className="flex items-center gap-1 text-[11px] text-[#6D1344] font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-[#EA5C26]" /> Prasad Delivery
          </span>
        </div>

        {/* Pricing & CTA */}
        <div className="flex items-center justify-between gap-3 pt-2">
          <div>
            <span className="text-[10px] uppercase font-semibold text-[#7A676E] block">Dakshina from</span>
            <span className="font-heading text-xl font-bold text-[#6D1344]">
              ₹{puja.startingPrice}
            </span>
          </div>

          <Button
            asChild
            size="sm"
            className="bg-[#EA5C26] hover:bg-[#D44B17] text-white font-bold text-xs min-h-[44px] px-5 rounded-xl shadow-xs transition-colors"
          >
            <Link href="/puja/ganesh-sahastra-archan">
              <span>Participate</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
