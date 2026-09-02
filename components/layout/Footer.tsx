import React from "react"
import Link from "next/link"
import { Phone, Mail, MapPin, Share2, Globe, MessageCircle, ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#6D1344] text-[#FFF9EF] pt-16 pb-0 relative overflow-hidden border-t border-[#7C112F]">
      {/* AUTHENTIC BLENDED TEMPLE GOPURAM SILHOUETTE AT BOTTOM */}
      <div className="absolute bottom-0 left-0 right-0 h-72 sm:h-96 pointer-events-none z-0 overflow-hidden select-none opacity-25">
        <img
          src="/images/Hero/gold-temple-gopuram.jpg"
          alt="Temple Gopuram Silhouette"
          className="w-full h-full object-cover object-bottom mix-blend-luminosity filter brightness-110 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#6D1344] via-[#6D1344]/60 to-[#6D1344]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* TOP TIER: BRAND INFO + NEWSLETTER SUBSCRIBE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Brand Logo & Description (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <Link href="/" className="inline-block">
              <img
                src="/Logo.png"
                alt="Utsav Logo"
                className="h-10 sm:h-11 object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-xs sm:text-sm text-[#F6E1C6]/90 leading-relaxed max-w-xl font-normal">
              UTSAV is where ancient Vedic traditions meet modern convenience. We connect millions of Hindu devotees worldwide with authentic pujas, live video proof, and doorstep prasad delivery from India’s most sacred shrines.
            </p>
          </div>

          {/* Right Column: Newsletter Subscription Box (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="font-heading font-bold text-base text-[#FFF9EF]">
              Newsletter
            </h4>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center">
              <input
                type="email"
                placeholder="Enter email address"
                className="bg-white/10 border border-[#F6E1C6]/30 border-r-0 px-4 py-2.5 rounded-l-xl text-xs sm:text-sm text-[#FFF9EF] placeholder-[#F6E1C6]/60 focus:outline-none focus:ring-1 focus:ring-[#EA5C26] flex-1 min-w-0"
              />
              <button
                type="submit"
                className="bg-[#EA5C26] hover:bg-[#D44B17] text-white px-6 py-2.5 rounded-r-xl font-bold text-xs sm:text-sm transition-colors cursor-pointer shrink-0"
              >
                Submit
              </button>
            </form>
            <p className="text-[11px] sm:text-xs text-[#F6E1C6]/70 font-normal">
              Stay connected with sacred updates, upcoming auspicious tithis, and festival pujas.
            </p>

            {/* Official Google Play & App Store Download Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a href="#app-store" className="hover:opacity-90 transition-opacity cursor-pointer inline-block">
                <img src="/images/Badges/app_store_badge.png" alt="Download on the App Store" className="h-10 sm:h-11 w-auto object-contain drop-shadow-2xs" />
              </a>

              <a href="#google-play" className="hover:opacity-90 transition-opacity cursor-pointer inline-block">
                <img src="/images/Badges/google_play_badge.png" alt="Get it on Google Play" className="h-10 sm:h-11 w-auto object-contain drop-shadow-2xs" />
              </a>
            </div>
          </div>
        </div>

        {/* MIDDLE TIER: 4 NAVIGATION & CONTACT COLUMNS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-4">
          {/* Column 1: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-xs sm:text-sm text-[#FAA531] uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#F6E1C6]/80 font-normal">
              <li>
                <Link href="/" className="hover:text-[#EA5C26] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/puja/ganesh-sahastra-archan" className="hover:text-[#EA5C26] transition-colors">
                  Book Puja
                </Link>
              </li>
              <li>
                <Link href="/#discover-pujas" className="hover:text-[#EA5C26] transition-colors">
                  Temples
                </Link>
              </li>
              <li>
                <Link href="/#gyan" className="hover:text-[#EA5C26] transition-colors">
                  Dharmik Gyan
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Customer Care */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-xs sm:text-sm text-[#FAA531] uppercase tracking-wider">
              Customer Care
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#F6E1C6]/80 font-normal">
              <li>
                <Link href="#faq" className="hover:text-[#EA5C26] transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/puja/ganesh-sahastra-archan#how-it-works" className="hover:text-[#EA5C26] transition-colors">
                  Video Proof Guide
                </Link>
              </li>
              <li>
                <Link href="/puja/ganesh-sahastra-archan" className="hover:text-[#EA5C26] transition-colors">
                  Prasad Shipping
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-xs sm:text-sm text-[#FAA531] uppercase tracking-wider">
              Company Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#F6E1C6]/80 font-normal">
              <li>
                <Link href="/#support" className="hover:text-[#EA5C26] transition-colors">
                  Help & Support
                </Link>
              </li>
              <li>
                <Link href="/#privacy" className="hover:text-[#EA5C26] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/#terms" className="hover:text-[#EA5C26] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect With Us */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-xs sm:text-sm text-[#FAA531] uppercase tracking-wider">
              Connect With Us
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-[#F6E1C6]/80 font-normal">
              <p className="hover:text-[#EA5C26] transition-colors">
                support@utsavapp.in
              </p>
              <p className="hover:text-[#EA5C26] transition-colors">
                +91 98765 43210
              </p>
            </div>

            {/* Circular Social Buttons Row */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-[#EA5C26] hover:bg-[#D44B17] flex items-center justify-center text-white transition-all cursor-pointer group"
              >
                <MessageCircle className="w-4.5 h-4.5 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[#EA5C26] hover:bg-[#D44B17] flex items-center justify-center text-white transition-all cursor-pointer group"
              >
                <svg className="w-4.5 h-4.5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-[#EA5C26] hover:bg-[#D44B17] flex items-center justify-center text-white transition-all cursor-pointer group"
              >
                <svg className="w-4.5 h-4.5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT TEXT */}
        <div className="text-center text-xs text-[#F6E1C6]/60 font-normal pt-4 pb-2 border-t border-[#7C112F]/60">
          <p>© {new Date().getFullYear()} UTSAV Devotional Services. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
