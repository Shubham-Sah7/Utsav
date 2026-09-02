import React from "react"
import { cn } from "@/lib/utils"

function Spinner({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("relative inline-flex items-center justify-center size-5 shrink-0", className)} {...props}>
      <div className="absolute inset-0 rounded-full border-2 border-t-[#EA5C26] border-r-transparent border-b-[#6D1344] border-l-transparent animate-spin" />
      <img
        src="/logo.png"
        alt="Om Logo Loading"
        className="w-3.5 h-3.5 object-contain animate-pulse"
      />
    </div>
  )
}

export { Spinner }
