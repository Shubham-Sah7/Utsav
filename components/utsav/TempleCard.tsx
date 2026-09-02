import React from "react"
import Link from "next/link"
import { MapPin, ArrowRight, Flame } from "lucide-react"
import { TempleItem } from "@/lib/utsav-data"
import { Button } from "@/components/ui/button"

interface TempleCardProps {
  temple: TempleItem
}

export function TempleCard({ temple }: TempleCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-[#E7E0D3] overflow-hidden shadow-spiritual shadow-spiritual-hover flex flex-col justify-between group">
      <div className="relative h-44 w-full overflow-hidden bg-[#F5EFE6]">
        <img
          src={temple.imageUrl}
          alt={temple.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {temple.badge && (
          <span className="absolute top-3 left-3 bg-[#4A0E17] text-amber-300 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-amber-500/30">
            {temple.badge}
          </span>
        )}

        <div className="absolute bottom-3 left-3 right-3 text-white">
          <h3 className="font-heading text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
            {temple.name}
          </h3>
          <div className="flex items-center gap-1 text-xs text-amber-200">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>
              {temple.location}, {temple.state}
            </span>
          </div>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <p className="text-xs text-[#6B655F] leading-relaxed line-clamp-2">
            {temple.description}
          </p>

          <div className="mt-3 p-2.5 rounded-xl bg-[#FAFAF7] border border-[#E7E0D3] text-xs font-semibold text-[#4A0E17]">
            <span className="text-[#C2410C] font-bold">Significance:</span> {temple.significance}
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-[#E7E0D3]">
          <span className="text-xs font-bold text-[#C2410C] flex items-center gap-1">
            <Flame className="w-3.5 h-3.5" /> {temple.pujasAvailable} Pujas Available
          </span>

          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-xs font-bold text-[#4A0E17] hover:text-[#C2410C] hover:bg-[#FEF3C7]/50"
          >
            <Link href="/temples">
              <span>View Temple</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
