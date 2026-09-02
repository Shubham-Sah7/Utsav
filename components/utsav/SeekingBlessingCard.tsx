import React from "react"
import Link from "next/link"
import {
  Coins,
  Briefcase,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Users,
  ArrowUpRight,
} from "lucide-react"
import { IntentionCategory } from "@/lib/utsav-data"

interface SeekingBlessingCardProps {
  category: IntentionCategory
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Coins: <Coins className="w-6 h-6 text-amber-600" />,
  Briefcase: <Briefcase className="w-6 h-6 text-orange-600" />,
  HeartPulse: <HeartPulse className="w-6 h-6 text-rose-600" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-red-600" />,
  Sparkles: <Sparkles className="w-6 h-6 text-emerald-600" />,
  Users: <Users className="w-6 h-6 text-purple-600" />,
}

export function SeekingBlessingCard({ category }: SeekingBlessingCardProps) {
  return (
    <Link
      href="/pujas"
      className="p-5 rounded-2xl bg-white border border-[#E7E0D3] shadow-spiritual shadow-spiritual-hover flex flex-col justify-between group cursor-pointer hover:border-[#C2410C] transition-all"
    >
      <div className="flex items-start justify-between">
        <div className="w-12 h-12 rounded-xl bg-[#FAFAF7] border border-[#E7E0D3] flex items-center justify-center group-hover:scale-110 transition-transform">
          {ICON_MAP[category.icon] || <Sparkles className="w-6 h-6 text-[#C2410C]" />}
        </div>
        <span className="text-[11px] font-bold text-[#C2410C] bg-[#FEF3C7]/60 px-2.5 py-1 rounded-full border border-amber-200">
          {category.pujaCount} Pujas
        </span>
      </div>

      <div className="mt-4">
        <div className="flex items-baseline gap-2">
          <h3 className="font-heading text-base font-bold text-[#4A0E17] group-hover:text-[#C2410C] transition-colors">
            {category.name}
          </h3>
        </div>
        <span className="text-xs font-semibold text-[#B45309] block mt-0.5">
          {category.hindiName}
        </span>
        <p className="text-xs text-[#78716C] mt-2 line-clamp-2 leading-relaxed">
          {category.description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-[#E7E0D3] flex items-center justify-between text-xs font-bold text-[#4A0E17] group-hover:text-[#C2410C]">
        <span>Explore Solutions</span>
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  )
}
