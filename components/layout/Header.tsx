"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Globe, User, Menu, ChevronDown, CalendarCheck, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { LoginModal } from "@/components/utsav/LoginModal"

export function Header() {
  const pathname = usePathname()
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [language, setLanguage] = useState<"EN" | "HI">("EN")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Pujas", href: "/puja/ganesh-sahastra-archan" },
    { name: "Bhet", href: "/#discover-pujas" },
    { name: "Store", href: "/#discover-pujas" },
    { name: "Panchang", href: "/#panchang" },
    { name: "Rashifal", href: "/#panchang" },
    { name: "Gyan", href: "/#gyan" },
  ]

  return (
    <>
      {/* Sticky Header Wrapper */}
      <header
        className={`sticky top-0 z-50 w-full flex justify-center pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled ? "pt-2 sm:pt-3" : "pt-0"
        }`}
      >
        {/* Nav Container: Clean full-width header at start, floating rounded pill on scroll */}
        <div
          className={`pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between gap-2 sm:gap-3 ${
            isScrolled
              ? "w-[96%] sm:w-[94%] lg:w-[92%] max-w-7xl rounded-full bg-[#FFF9EF]/95 backdrop-blur-2xl px-4 sm:px-6 h-14 shadow-xs border border-[#F6E1C6]"
              : "w-full rounded-none bg-[#FFF9EF]/90 backdrop-blur-md border-b border-[#F6E1C6] px-4 sm:px-8 lg:px-12 h-16 shadow-none"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 group">
            <img
              src="/Logo.png"
              alt="Utsav Logo"
              className="h-6 sm:h-7 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? "bg-[#F6E1C6] text-[#EA5C26] font-bold"
                      : "text-[#6D1344] hover:text-[#EA5C26] hover:bg-[#F6E1C6]/50"
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1 text-xs font-semibold text-[#6D1344] bg-[#F6E1C6]/60 rounded-xl px-2.5 py-1.5 hover:bg-[#F6E1C6] shrink-0"
                >
                  <Globe className="w-3.5 h-3.5 text-[#6D1344]" />
                  <span>{language === "EN" ? "Hindi" : "English"}</span>
                  <ChevronDown className="w-3 h-3 text-[#6D1344]/70" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-36 bg-[#FFF9EF] backdrop-blur-xl rounded-xl border border-[#F6E1C6]">
                <DropdownMenuItem
                  onClick={() => setLanguage("HI")}
                  className="text-xs cursor-pointer font-medium hover:bg-[#F6E1C6] text-[#6D1344]"
                >
                  हिंदी (Hindi)
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage("EN")}
                  className="text-xs cursor-pointer font-medium hover:bg-[#F6E1C6] text-[#6D1344]"
                >
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Login Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsLoginOpen(true)}
              className="hidden md:flex items-center gap-1.5 text-xs font-bold text-[#6D1344] hover:text-[#EA5C26] px-3 py-1.5 rounded-xl hover:bg-[#F6E1C6]/60 shrink-0"
            >
              <User className="w-3.5 h-3.5 text-[#6D1344]" />
              <span>Login</span>
            </Button>

            {/* Book Puja Now CTA Button */}
            <Button
              asChild
              size="sm"
              className="bg-[#C85B12] hover:bg-[#A84B0E] text-white font-bold text-xs sm:text-sm h-10 px-4 rounded-xl shadow-xs transition-all duration-300 shrink-0"
            >
              <Link href="#discover-pujas" className="flex items-center gap-1.5">
                <CalendarCheck className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                <span className="whitespace-nowrap">Book Puja Now</span>
              </Link>
            </Button>

            {/* Download App CTA Button */}
            <Button
              size="sm"
              className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold text-xs sm:text-sm h-10 px-4 rounded-xl transition-all duration-300 hidden xl:flex shrink-0"
            >
              <div className="flex items-center gap-1.5">
                <Download className="w-3.5 h-3.5 text-slate-700 stroke-[2.5]" />
                <span className="whitespace-nowrap">Download App</span>
              </div>
            </Button>

            {/* Mobile Drawer */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-slate-700">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white p-6 w-[300px] border-none shadow-xs">
                <SheetHeader className="text-left pb-4 mb-4">
                  <SheetTitle className="text-lg font-bold flex items-center">
                    <img src="/Logo.png" alt="Utsav" className="h-6" />
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-2 py-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="py-2.5 px-3.5 rounded-xl text-sm font-semibold text-slate-800 hover:text-[#C85B12] hover:bg-[#F8F4EA]"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                <div className="pt-6 mt-6 flex flex-col gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setIsLoginOpen(true)}
                    className="w-full justify-center gap-2 border-none shadow-xs font-bold rounded-xl text-slate-800 bg-slate-100"
                  >
                    <User className="w-4 h-4 text-slate-600" /> Devotee Login
                  </Button>

                  {/* Mobile Drawer Official Download Badges */}
                  <div className="pt-2 flex flex-col items-center gap-2.5">
                    <a href="#app-store" className="hover:opacity-90 transition-opacity cursor-pointer w-full flex justify-center">
                      <img src="/Images/Badges/app_store_badge.png" alt="Download on the App Store" className="h-10 w-auto object-contain" />
                    </a>
                    <a href="#google-play" className="hover:opacity-90 transition-opacity cursor-pointer w-full flex justify-center">
                      <img src="/Images/Badges/google_play_badge.png" alt="Get it on Google Play" className="h-10 w-auto object-contain" />
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  )
}
