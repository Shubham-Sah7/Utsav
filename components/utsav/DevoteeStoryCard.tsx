import React from "react"
import { Star, Video, Image as ImageIcon, Quote } from "lucide-react"
import { DevoteeReview } from "@/lib/utsav-data"

interface DevoteeStoryCardProps {
  review: DevoteeReview
}

export function DevoteeStoryCard({ review }: DevoteeStoryCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-[#E7E0D3] shadow-spiritual shadow-spiritual-hover flex flex-col justify-between relative">
      <Quote className="absolute top-4 right-4 w-8 h-8 text-amber-200/50" />

      <div>
        <div className="flex items-center gap-1 mb-3">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
          <span className="text-xs font-bold text-[#4A0E17] ml-2">Verified Devotee</span>
        </div>

        <p className="text-xs sm:text-sm text-[#2D2A26] leading-relaxed italic">
          &ldquo;{review.comment}&rdquo;
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-[#E7E0D3] flex items-center justify-between">
        <div>
          <h4 className="font-heading text-sm font-bold text-[#4A0E17]">{review.name}</h4>
          <span className="text-xs text-[#78716C]">{review.location}</span>
          <div className="text-[11px] text-[#C2410C] font-semibold mt-0.5">
            {review.pujaName} • {review.templeName}
          </div>
        </div>

        <div className="flex flex-col gap-1 items-end">
          {review.hasVideoProof && (
            <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
              <Video className="w-3 h-3" /> Video Proof
            </span>
          )}
          {review.hasPrasadPhoto && (
            <span className="bg-amber-50 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-200 flex items-center gap-1">
              <ImageIcon className="w-3 h-3" /> Prasad Delivered
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
