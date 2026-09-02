import React from "react"
import Link from "next/link"
import { Clock, User, ArrowRight } from "lucide-react"
import { ArticleItem } from "@/lib/utsav-data"

interface DharmikGyanCardProps {
  article: ArticleItem
}

export function DharmikGyanCard({ article }: DharmikGyanCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-[#E7E0D3] overflow-hidden shadow-spiritual shadow-spiritual-hover flex flex-col justify-between group">
      <div className="relative h-44 w-full overflow-hidden bg-[#F5EFE6]">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 bg-[#4A0E17] text-amber-300 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-amber-500/30">
          {article.category}
        </span>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-center gap-3 text-xs text-[#78716C] mb-1.5">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#C2410C]" /> {article.readTime}
            </span>
            <span>•</span>
            <span>{article.date}</span>
          </div>

          <h3 className="font-heading text-base font-bold text-[#4A0E17] group-hover:text-[#C2410C] transition-colors leading-snug line-clamp-2">
            {article.title}
          </h3>

          <p className="text-xs text-[#6B655F] mt-2 line-clamp-2 leading-relaxed">
            {article.summary}
          </p>
        </div>

        <div className="pt-3 border-t border-[#E7E0D3] flex items-center justify-between">
          <span className="text-[11px] font-semibold text-[#78716C] flex items-center gap-1">
            <User className="w-3.5 h-3.5 text-[#C2410C]" /> {article.author}
          </span>

          <Link
            href="/gyan"
            className="text-xs font-bold text-[#4A0E17] group-hover:text-[#C2410C]"
          >
            <span>Read Article</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
