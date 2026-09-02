"use client"

import React from "react"
import Link from "next/link"
import {
  Flame,
  Star,
  ShieldCheck,
  Play,
  ArrowRight,
  Download,
  Calendar,
  ChevronRight,
  ChevronLeft,
  Users,
  BookOpen,
  MapPin,
  Sparkles,
  Scroll,
  BookMarked,
  Sun,
  FlameKindling,
  Sparkle,
  Bookmark,
  Compass,
  ChevronDown,
  Plus,
  Minus,
  Check,
} from "lucide-react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"

import { motion, AnimatePresence } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function HomePage() {
  const [pujasStyleOption, setPujasStyleOption] = React.useState<1 | 2>(1)
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(0)
  const [isLoading, setIsLoading] = React.useState(true)
  const [activeStepIndex, setActiveStepIndex] = React.useState(0)

  // Auto-rotate How It Works steps every 4 seconds
  React.useEffect(() => {
    const stepTimer = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % 4)
    }, 4000)
    return () => clearInterval(stepTimer)
  }, [])

  // 2-Second Om Loading Splash Timer
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white text-[#2C151B] flex flex-col font-sans selection:bg-amber-200 selection:text-amber-900">
      {/* 0. 2-SECOND OM LOADING SPLASH REVEAL ANIMATION */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="om-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center pointer-events-auto"
          >
            {/* Ambient Radiant Rotating Dashed Ring & Pulsing Om Badge */}
            <div className="relative flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute w-36 h-36 rounded-full border border-dashed border-[#EA5C26]/30"
              />
              
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: [0.92, 1.08, 1], opacity: 1 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                className="w-24 h-24 rounded-full bg-white border border-[#E8D8C5] flex items-center justify-center relative z-10 shadow-sm"
              >
                {/* Sacred Om Symbol */}
                <span className="font-serif text-5xl font-bold text-[#EA5C26] drop-shadow-xs select-none">
                  ॐ
                </span>
              </motion.div>
            </div>

            {/* Sub-Brand Text & Animated Progress Bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-7 text-center space-y-3"
            >
              <span className="font-heading font-bold text-[#6D1344] tracking-[0.25em] text-sm uppercase block">
                UTSAV
              </span>
              <span className="text-xs font-bold text-[#EA5C26] tracking-wider block">
                Connecting You with Sacred Shrines...
              </span>

              <div className="w-36 h-1 bg-[#F6E1C6] rounded-full mx-auto overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 1.8, ease: "easeInOut" }}
                  className="w-full h-full bg-[#EA5C26] rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HEADER */}
      <Header />

      <main className="flex-1 max-w-full overflow-x-hidden">
        {/* HERO SECTION: CENTERED MOVING HERITAGE GALLERY WITH TEMPLE PILLARS */}
        <motion.section id="hero-section" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
          {/* Left-Most Authentic Temple Pillar (Un-cropped Full Image) */}
          <div className="absolute top-0 -left-4 lg:-left-6 bottom-0 pointer-events-none z-10 select-none hidden lg:block h-full opacity-95">
            <img
              src="/Images/temple-pillar.png"
              alt="Temple Pillar Left"
              className="h-full w-auto object-contain object-left scale-x-[-1]"
            />
          </div>

          {/* Right-Most Authentic Temple Pillar (Un-cropped Full Image) */}
          <div className="absolute top-0 -right-4 lg:-right-6 bottom-0 pointer-events-none z-10 select-none hidden lg:block h-full opacity-95">
            <img
              src="/Images/temple-pillar.png"
              alt="Temple Pillar Right"
              className="h-full w-auto object-contain object-right"
            />
          </div>

          <div id="hero-content" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-20">
            {/* Trusted Devotees Pill Badge */}
            <div className="inline-flex items-center gap-3 bg-white border border-[#E8D8C5] px-4 py-1.5 rounded-full mb-1 shadow-2xs">
              <div className="flex items-center -space-x-2.5 shrink-0">
                <img
                  src="/Images/Avatars/indian_devotee_1_1788330405371.jpg"
                  alt="Devotee 1"
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full object-cover border-2 border-white"
                />
                <img
                  src="/Images/Avatars/indian_devotee_2_1788330428136.jpg"
                  alt="Devotee 2"
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full object-cover border-2 border-white"
                />
                <img
                  src="/Images/Avatars/indian_devotee_3_1788330480133.jpg"
                  alt="Devotee 3"
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full object-cover border-2 border-white"
                />
              </div>

              <span className="text-xs sm:text-sm font-medium text-[#6D1344] tracking-tight whitespace-nowrap">
                Trusted by <span className="font-semibold text-[#EA5C26]">100,000+</span> devotees
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-semibold text-[#6D1344] tracking-tight leading-[1.15]">
              Be part of your temple, <span className="text-[#EA5C26]">wherever you are.</span>
            </h1>

            {/* Subtitle Text */}
            <p className="text-sm sm:text-base text-[#7A676E] font-normal leading-relaxed max-w-xl mx-auto">
              Participate in authentic temple Pujas even when you cannot be there. Your name and gotra are included in the Sankalp, with Puja video and Prasad delivered to your doorstep.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-[#6D1344]">
              <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-[#E8D8C5]">
                <Star className="w-3.5 h-3.5 fill-[#FAA531] text-[#FAA531]" />
                <span className="font-semibold text-[#6D1344]">4.8★ Rated</span>
              </span>
              <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-[#E8D8C5]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#EA5C26]" />
                <span className="font-semibold text-[#6D1344]">100k+ Devotees</span>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-[#EA5C26] hover:bg-[#D44B17] text-white font-semibold text-sm sm:text-base min-h-[48px] px-8 rounded-xl shadow-xs transition-all"
                >
                  <Link href="#discover-pujas">
                    <span>Participate in Puja</span>
                  </Link>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-white hover:bg-[#F6E1C6]/50 text-[#6D1344] border border-[#6D1344]/30 font-semibold text-sm sm:text-base min-h-[48px] px-8 rounded-xl shadow-xs transition-all"
                >
                  <Link href="#download-banner" className="flex items-center gap-2">
                    <Download className="w-4 h-4 text-[#6D1344] stroke-[2.5]" />
                    <span>Download App</span>
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Continuous Moving Infinite Marquee Showcase of Pure Authentic Photographs */}
            <div id="hero-marquee" className="w-full overflow-hidden pt-8 pb-4 relative">
              <div className="animate-marquee flex items-center gap-6 shrink-0">
                {/* Set 1: Authentic Inspiration Images */}
                <div className="flex items-center gap-6 shrink-0">
                  {[
                    "/Images/Hero/varanasi-sunset-nandi.jpg",
                    "/Images/kashi-vishwanath-spire.jpg",
                    "/Images/Hero/ganga-aarti-flame.jpg",
                    "/Images/Hero/devotee-aarti-blessing.jpg",
                    "/Images/Hero/vedic-yajna-fire.jpg",
                  ].map((imgUrl, idx) => (
                    <div
                      key={idx}
                      className="w-72 sm:w-80 h-80 sm:h-88 rounded-lg overflow-hidden relative group shrink-0 hover:shadow-xs transition-all duration-500 cursor-pointer border border-slate-200/60"
                    >
                      <img
                        src={imgUrl}
                        alt="Authentic Temple Photograph"
                        className="w-full h-full object-cover object-[center_15%] group-hover:scale-108 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
                    </div>
                  ))}
                </div>

                {/* Set 2: Duplicated for seamless infinite continuous scroll loop */}
                <div className="flex items-center gap-6 shrink-0">
                  {[
                    "/Images/Hero/varanasi-sunset-nandi.jpg",
                    "/Images/kashi-vishwanath-spire.jpg",
                    "/Images/Hero/ganga-aarti-flame.jpg",
                    "/Images/Hero/devotee-aarti-blessing.jpg",
                    "/Images/Hero/vedic-yajna-fire.jpg",
                  ].map((imgUrl, idx) => (
                    <div
                      key={`dup-${idx}`}
                      className="w-72 sm:w-80 h-80 sm:h-88 rounded-lg overflow-hidden relative group shrink-0 hover:shadow-xs transition-all duration-500 cursor-pointer border border-slate-200/60"
                    >
                      <img
                        src={imgUrl}
                        alt="Authentic Temple Photograph"
                        className="w-full h-full object-cover object-[center_15%] group-hover:scale-108 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 2. MEDIA TRUST & AS FEATURED ON STRIP */}
        <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="w-full bg-white py-10 sm:py-12 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs sm:text-sm font-semibold text-[#EA5C26] text-center tracking-wider uppercase block mb-8">
              As featured in leading news & media outlets across India
            </p>

            {/* Seamless Continuous Marquee Track */}
            <div className="w-full overflow-hidden relative">
              <div className="animate-marquee flex items-center gap-12 sm:gap-16 shrink-0">
                {/* Set 1 */}
                <div className="flex items-center gap-12 sm:gap-16 shrink-0">
                  <img src="/Images/Logos/img1.png" alt="Economic Times" className="h-7 sm:h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                  <img src="/Images/Logos/img2.png" alt="Entrackr" className="h-7 sm:h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                  <img src="/Images/Logos/img3.png" alt="Entrepreneur India" className="h-7 sm:h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                  <img src="/Images/Logos/abp.0blgc1fjdoxrf.svg" alt="ABP News" className="h-7 sm:h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                  <img src="/Images/Logos/inc42.33a5jvta684y_.svg" alt="Inc42" className="h-7 sm:h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                  <img src="/Images/Logos/img4.png" alt="VCCircle" className="h-7 sm:h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                </div>

                {/* Set 2 (Duplicated for seamless continuous loop) */}
                <div className="flex items-center gap-12 sm:gap-16 shrink-0">
                  <img src="/Images/Logos/img1.png" alt="Economic Times" className="h-7 sm:h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                  <img src="/Images/Logos/img2.png" alt="Entrackr" className="h-7 sm:h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                  <img src="/Images/Logos/img3.png" alt="Entrepreneur India" className="h-7 sm:h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                  <img src="/Images/Logos/abp.0blgc1fjdoxrf.svg" alt="ABP News" className="h-7 sm:h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                  <img src="/Images/Logos/inc42.33a5jvta684y_.svg" alt="Inc42" className="h-7 sm:h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                  <img src="/Images/Logos/img4.png" alt="VCCircle" className="h-7 sm:h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 4. UPCOMING SACRED PUJAS & SEVA */}
        <motion.section id="discover-pujas" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="py-10 sm:py-12 lg:py-14 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Header & Filter Tabs */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-3.5 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-slate-50 text-[#6D1344] text-[10px] sm:text-xs font-medium uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-[#E8D8C5] mb-1">
                  <span>Auspicious Rituals</span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#6D1344] leading-tight">
                  Upcoming <span className="text-[#EA5C26]">Sacred Temple Pujas</span>
                </h2>
                <p className="text-xs sm:text-sm text-[#7A676E] font-normal max-w-xl pt-1">
                  Choose a Puja from India's sacred temples and participate from wherever you are.
                </p>
              </div>

              {/* Filter Tabs */}
              <div className="inline-flex flex-wrap items-center justify-center p-1.5 rounded-full bg-slate-50 border border-[#E8D8C5] shadow-2xs">
                {["All Pujas", "Pradosh Vrat", "Shaktipeeth", "Jyotirlinga"].map((tab, i) => (
                  <button
                    key={tab}
                    className={`text-xs font-semibold px-4 sm:px-5 py-2 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap ${
                      i === 0
                        ? "bg-[#EA5C26] text-white"
                        : "text-[#6D1344] hover:text-[#EA5C26] hover:bg-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* PUJA CARDS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
              {[
                {
                  title: "1008 Ganesh Sahastra Archana & Ketu Shanti Puja",
                  tag: "Special Budhvar",
                  loc: "Chintamani Ganesh, Kashi",
                  date: "Sep 09, Wednesday",
                  booked: "10 Lakh+ Devotees",
                  price: "₹951",
                  img: "/Images/panchang.jpg",
                  slug: "/puja/ganesh-sahastra-archan"
                },
                {
                  title: "Maa Dakshina Kali Mahayajna & Shatru Badha Shanti",
                  tag: "Shaktipeeth Seva",
                  loc: "Kalighat Shaktipeeth, Kolkata",
                  date: "Sep 11, Friday",
                  booked: "6.1k Participated",
                  price: "₹951",
                  img: "/Images/Pujas/kali_sanctum_hero.jpg",
                  slug: "/puja/maa-kali-puja"
                },
                {
                  title: "1008 Archana Seva & Special Bilva Patra Abhishekam",
                  tag: "Special Pradosh",
                  loc: "Kashi Vishwanath, Varanasi",
                  date: "Sep 15, Tuesday",
                  booked: "4.8k Participated",
                  price: "₹851",
                  img: "/Images/Hero/ganga-aarti-flame.jpg",
                  slug: "/puja/kashi-vishwanath-abhishekam"
                },
                {
                  title: "Mahamrityunjaya Jaap & Bhasma Aarti Seva",
                  tag: "Bhasma Aarti",
                  loc: "Mahakaleshwar, Ujjain",
                  date: "Sep 18, Friday",
                  booked: "8.4k Participated",
                  price: "₹751",
                  img: "/Images/Hero/vedic-yajna-fire.jpg",
                  slug: "/puja/mahakaleshwar-bhasma-aarti"
                }
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="puja-card-item bg-white rounded-lg p-4 flex flex-col justify-between group hover:border-[#EA5C26]/40 hover:shadow-md transition-all duration-300 border border-[#E8D8C5]"
                >
                  <div className="space-y-3.5">
                    <div className="relative h-60 sm:h-64 w-full rounded-md overflow-hidden bg-slate-100">
                      <img
                        src={card.img}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      
                      <span className="absolute top-2.5 right-2.5 bg-[#6D1344] text-white text-[10px] font-semibold uppercase px-3 py-1 rounded-full border border-white/20">
                        {card.tag}
                      </span>

                      <div className="absolute bottom-2.5 left-2.5 right-2.5">
                        <span className="bg-[#2C151B]/90 text-white text-xs font-medium px-3 py-1 rounded-full inline-flex items-center gap-1.5 max-w-full">
                          <MapPin className="w-3.5 h-3.5 text-[#FAA531] shrink-0" />
                          <span className="truncate">{card.loc}</span>
                        </span>
                      </div>
                    </div>

                    <div className="px-0.5 space-y-2.5">
                      <h3 className="font-heading font-semibold text-sm sm:text-base text-[#6D1344] leading-snug line-clamp-2 min-h-[2.75rem] group-hover:text-[#EA5C26] transition-colors">
                        {card.title}
                      </h3>

                      <div className="flex items-center justify-between text-xs text-[#7A676E] font-medium pt-0.5">
                        <span className="flex items-center gap-1.5 font-semibold text-[#6D1344] bg-slate-50 px-2.5 py-1 rounded-lg border border-[#E8D8C5]">
                          <Calendar className="w-3.5 h-3.5 text-[#EA5C26]" />
                          {card.date}
                        </span>
                        <span className="text-[#7A676E] font-medium text-[11px]">
                          {card.booked}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="px-0.5 pt-3 space-y-2.5 mt-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-[#7A676E] font-medium uppercase tracking-wider">Starting Seva</span>
                      <span className="font-heading text-lg font-semibold text-[#6D1344]">{card.price}</span>
                    </div>

                    <Link href={card.slug} className="block w-full">
                      <Button className="w-full bg-[#EA5C26] hover:bg-[#D44B17] text-white font-semibold text-xs min-h-[44px] rounded-xl transition-colors cursor-pointer">
                        <span>Participate in Puja →</span>
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* 5. HOW YOUR PUJA & SANKALP IS PERFORMED */}
        <motion.section id="how-it-works" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="py-10 sm:py-12 lg:py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 bg-slate-50 text-[#6D1344] text-[10px] sm:text-xs font-medium uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-[#E8D8C5]">
                    <span>Transparent Process</span>
                  </div>

                  <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#6D1344] tracking-tight leading-tight">
                    Know what happens <span className="text-[#EA5C26]">after you book.</span>
                  </h2>
                </div>

                {/* Vertical Step Tab List */}
                <div className="space-y-3">
                  {[
                    { id: 0, num: "01", label: "Choose your Puja" },
                    { id: 1, num: "02", label: "Add your name & gotra" },
                    { id: 2, num: "03", label: "Receive your Darshan video" },
                    { id: 3, num: "04", label: "Get Prasad at home" }
                  ].map((step) => {
                    const isActive = activeStepIndex === step.id;
                    return (
                      <button
                        key={step.id}
                        onClick={() => setActiveStepIndex(step.id)}
                        className={`w-full text-left transition-all duration-300 flex items-center justify-between px-6 py-3.5 rounded-full border cursor-pointer ${
                          isActive
                            ? "bg-white text-[#EA5C26] border-[#EA5C26] shadow-2xs font-semibold"
                            : "bg-slate-50/60 hover:bg-white text-[#6D1344] border-[#E8D8C5]/80 font-medium"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          {/* AUTHENTIC INDIAN TEMPLE SHIKHARA / MANDIR SPIRE BADGE */}
                          <div className="relative inline-flex items-center justify-center shrink-0 w-9 h-11">
                            <svg
                              viewBox="0 0 40 48"
                              className="w-full h-full"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              {/* Temple Kalash Top Finial */}
                              <path
                                d="M20 2L22 6H18L20 2Z"
                                className={isActive ? "fill-[#EA5C26]" : "fill-[#6D1344]"}
                              />
                              <circle
                                cx="20"
                                cy="7"
                                r="1.5"
                                className={isActive ? "fill-[#EA5C26]" : "fill-[#6D1344]"}
                              />

                              {/* Temple Shikhara Spire Outline & Background */}
                              <path
                                d="M20 9.5 C22.5 14 25.5 18.5 27.5 24 C29.5 29.5 31.5 36 33.5 46 H6.5 C8.5 36 10.5 29.5 12.5 24 C14.5 18.5 17.5 14 20 9.5 Z"
                                className={
                                  isActive
                                    ? "fill-[#EA5C26]/15 stroke-[#EA5C26]"
                                    : "fill-slate-100 stroke-slate-300"
                                }
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                              />
                            </svg>

                            <span
                              className={`absolute bottom-2.5 inset-x-0 text-center text-[11px] font-mono font-bold tracking-tight ${
                                isActive ? "text-[#EA5C26]" : "text-[#6D1344]"
                              }`}
                            >
                              {step.num}
                            </span>
                          </div>

                          <span className="text-sm sm:text-base tracking-tight font-semibold">
                            {step.label}
                          </span>
                        </div>
                        <ChevronRight
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isActive ? "text-[#EA5C26] translate-x-0.5" : "text-[#7A676E] opacity-0 group-hover:opacity-100"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Dynamic Step Showcase */}
              <div className="lg:col-span-7">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStepIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white rounded-lg p-6 sm:p-7 border border-[#E8D8C5] shadow-xs space-y-5"
                  >
                    <div className="space-y-1.5">
                      <span className="inline-block text-xs font-mono font-semibold text-[#EA5C26] bg-slate-100 px-3.5 py-1 rounded-full border border-[#E8D8C5]">
                        STEP 0{activeStepIndex + 1} OF 04
                      </span>
                      <h3 className="font-heading text-xl sm:text-2xl font-semibold text-[#6D1344]">
                        {[
                          "Choose your Puja",
                          "Add your name & gotra",
                          "Receive your Darshan video",
                          "Get Prasad at home"
                        ][activeStepIndex]}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#7A676E] font-normal leading-relaxed">
                        {[
                          "Select your desired Puja package and Seva option for your family.",
                          "Your name and gotra are shared with the temple and included in the Sankalp.",
                          "Receive a same day Darshan video, followed by your full Puja video on WhatsApp in 3 to 5 days.",
                          "For applicable main Pujas, Prasad is delivered to your doorstep in 7 to 10 days."
                        ][activeStepIndex]}
                      </p>
                    </div>

                    {/* EXPANDED UN-CROPPED STEP IMAGE CONTAINER */}
                    <div className="w-full h-80 sm:h-96 lg:h-[380px] rounded-md overflow-hidden relative border border-[#E8D8C5] bg-slate-100">
                      <img
                        src={[
                          "/Images/Hero/ganga-aarti-flame.jpg",
                          "/Images/scripture.jpg",
                          "/Images/Hero/devotee-aarti-blessing.jpg",
                          "/Images/prasad_thali.jpg"
                        ][activeStepIndex]}
                        alt="Step Proof"
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2C151B]/80 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-semibold">
                        {[
                          "Varanasi & Ujjain Shrines • Pradosh Archana",
                          "Kashi & Kamakhya Mandap • Naam & Gotra Recited",
                          "WhatsApp HD Video Clip • Direct Sanctum Feed",
                          "Doorstep Express Delivery • Blessed Prasad Box"
                        ][activeStepIndex]}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
        </motion.section>

        {/* 6. A GUIDE THROUGH YOUR DHARMIK PATH */}
        <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="py-10 sm:py-12 lg:py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center space-y-3.5">
              <div className="inline-flex items-center gap-2 bg-slate-50 text-[#6D1344] text-[10px] sm:text-xs font-medium uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-[#E8D8C5] mb-1">
                <span>Sacred Heritage</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#6D1344] leading-tight">
                A guide through your <span className="text-[#EA5C26]">Dharmik Path</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#7A676E] font-normal max-w-lg mx-auto pt-1">
                Discover rituals, mantras and ancient wisdom tailored for your spiritual journey
              </p>
            </div>

            {/* Row 1: Panchang */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="dharmik-row-item grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center"
            >
              <div className="w-full h-80 sm:h-96 lg:h-[420px] rounded-xl overflow-hidden relative group flex items-center justify-center border border-[#E8D8C5]">
                <img src="/Images/panchang.jpg" alt="Sacred Panchang Guide" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>

              <div className="dharmik-text-box space-y-4 text-center md:text-left">
                <span className="inline-block px-3.5 py-1 rounded-full border border-[#EA5C26] text-[#EA5C26] text-[11px] font-semibold uppercase tracking-wider mb-2 bg-transparent">Panchang</span>
                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#6D1344]">Today's Sacred Panchang</h3>
                <p className="text-xs sm:text-sm text-[#7A676E] leading-relaxed font-normal">
                  Check today's Tithi, Nakshatra, Auspicious Muhurat and Rahukaal for planning daily sacred rituals.
                </p>

                <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-[#2C151B] font-medium max-w-md mx-auto md:mx-0">
                  <li className="flex items-center gap-2.5 justify-center md:justify-start">
                    <span className="w-4 h-4 rounded-[4px] border-2 border-[#EA5C26] flex items-center justify-center text-[#EA5C26] shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span>Daily Tithi, Nakshatra & Rahukaal Timings</span>
                  </li>
                  <li className="flex items-center gap-2.5 justify-center md:justify-start">
                    <span className="w-4 h-4 rounded-[4px] border-2 border-[#EA5C26] flex items-center justify-center text-[#EA5C26] shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span>Auspicious Choghadiya & Abhijit Muhurat</span>
                  </li>
                  <li className="flex items-center gap-2.5 justify-center md:justify-start">
                    <span className="w-4 h-4 rounded-[4px] border-2 border-[#C85B12] flex items-center justify-center text-[#C85B12] shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span>Location-Based Precise Calculations</span>
                  </li>
                  <li className="flex items-center gap-2.5 justify-center md:justify-start">
                    <span className="w-4 h-4 rounded-[4px] border-2 border-[#C85B12] flex items-center justify-center text-[#C85B12] shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span>Festival & Vrat Calendar Notifications</span>
                  </li>
                </ul>

                <div className="pt-3">
                  <Button asChild className="bg-[#C85B12] hover:bg-[#A84A0E] text-white font-extrabold text-xs sm:text-sm h-11 px-7 rounded-xl hover:shadow-xs transition-all duration-300">
                    <Link href="/panchang">
                      <span>Explore Panchang</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Row 2: Puja & Seva Store */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="dharmik-row-item grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center"
            >
              <div className="dharmik-text-box space-y-4 text-center md:text-left md:order-1">
                <span className="inline-block px-3.5 py-1 rounded-full border border-[#EA5C26] text-[#EA5C26] text-[11px] font-semibold uppercase tracking-wider mb-2 bg-transparent">Store</span>
                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#6D1344]">Puja & Seva Store</h3>
                <p className="text-xs sm:text-sm text-[#7A676E] leading-relaxed font-normal">
                  Explore authentic puja items, energized yantras, rudraksha and doorstep sacred prasad from top temples.
                </p>

                <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-[#2C151B] font-medium max-w-md mx-auto md:mx-0">
                  <li className="flex items-center gap-2.5 justify-center md:justify-start">
                    <span className="w-4 h-4 rounded-[4px] border-2 border-[#EA5C26] flex items-center justify-center text-[#EA5C26] shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span>100% Authentic Temples Prasad Delivery</span>
                  </li>
                  <li className="flex items-center gap-2.5 justify-center md:justify-start">
                    <span className="w-4 h-4 rounded-[4px] border-2 border-[#EA5C26] flex items-center justify-center text-[#EA5C26] shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span>Energized Rudraksha & Sacred Yantras</span>
                  </li>
                  <li className="flex items-center gap-2.5 justify-center md:justify-start">
                    <span className="w-4 h-4 rounded-[4px] border-2 border-[#EA5C26] flex items-center justify-center text-[#EA5C26] shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span>Direct Doorstep Express Shipping</span>
                  </li>
                  <li className="flex items-center gap-2.5 justify-center md:justify-start">
                    <span className="w-4 h-4 rounded-[4px] border-2 border-[#EA5C26] flex items-center justify-center text-[#EA5C26] shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span>Blessed by Shrine Head Priests</span>
                  </li>
                </ul>

                <div className="pt-3">
                  <Button asChild className="bg-[#EA5C26] hover:bg-[#D44B17] text-white font-semibold text-xs sm:text-sm h-11 px-7 rounded-xl hover:shadow-xs transition-all duration-300">
                    <Link href="/siddha-store">
                      <span>Explore Seva Store</span>
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="w-full h-80 sm:h-96 lg:h-[420px] rounded-xl overflow-hidden relative group flex items-center justify-center border border-[#E8D8C5] md:order-2">
                <img src="/Images/prasad_thali.jpg" alt="Puja Seva Store" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
            </motion.div>

            {/* Row 3: Dharmik Gyan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="dharmik-row-item grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center"
            >
              <div className="w-full h-80 sm:h-96 lg:h-[420px] rounded-xl overflow-hidden relative group flex items-center justify-center border border-[#E8D8C5]">
                <img src="/Images/scripture.jpg" alt="Dharmik Gyan & Scriptures" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>

              <div className="dharmik-text-box space-y-4 text-center md:text-left">
                <span className="inline-block px-3.5 py-1 rounded-full border border-[#EA5C26] text-[#EA5C26] text-[11px] font-semibold uppercase tracking-wider mb-2 bg-transparent">Scriptures</span>
                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#6D1344]">Dharmik Gyan & Scriptures</h3>
                <p className="text-xs sm:text-sm text-[#7A676E] leading-relaxed font-normal">
                  Unlock the wisdom of ancient scriptures, puranas, mantras and stories that illuminate your spiritual journey.
                </p>

                <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-[#2C151B] font-medium max-w-md mx-auto md:mx-0">
                  <li className="flex items-center gap-2.5 justify-center md:justify-start">
                    <span className="w-4 h-4 rounded-[4px] border-2 border-[#EA5C26] flex items-center justify-center text-[#EA5C26] shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span>Ancient Puranas & Vedic Texts Library</span>
                  </li>
                  <li className="flex items-center gap-2.5 justify-center md:justify-start">
                    <span className="w-4 h-4 rounded-[4px] border-2 border-[#EA5C26] flex items-center justify-center text-[#EA5C26] shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span>Daily Mantra & Chalisa Audio Recitations</span>
                  </li>
                  <li className="flex items-center gap-2.5 justify-center md:justify-start">
                    <span className="w-4 h-4 rounded-[4px] border-2 border-[#EA5C26] flex items-center justify-center text-[#EA5C26] shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span>Spiritual Stories for Daily Guidance</span>
                  </li>
                  <li className="flex items-center gap-2.5 justify-center md:justify-start">
                    <span className="w-4 h-4 rounded-[4px] border-2 border-[#EA5C26] flex items-center justify-center text-[#EA5C26] shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span>Curated by Experienced Vedic Scholars</span>
                  </li>
                </ul>

                <div className="pt-3">
                  <Button asChild className="bg-[#EA5C26] hover:bg-[#D44B17] text-white font-semibold text-xs sm:text-sm h-11 px-7 rounded-xl hover:shadow-xs transition-all duration-300">
                    <Link href="/gyan">
                      <span>Read Dharmik Gyan</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Row 4: Rashifal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="dharmik-row-item grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center"
            >
              <div className="dharmik-text-box space-y-4 text-center md:text-left md:order-1">
                <span className="inline-block px-3.5 py-1 rounded-full border border-[#EA5C26] text-[#EA5C26] text-[11px] font-semibold uppercase tracking-wider mb-2 bg-transparent">Astrology</span>
                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#6D1344]">Daily Rashifal</h3>
                <p className="text-xs sm:text-sm text-[#7A676E] leading-relaxed font-normal">
                  Understand your astrological forecasts, daily horoscopes and planetary remedies tailored for your Rashi.
                </p>

                <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-[#2C151B] font-medium max-w-md mx-auto md:mx-0">
                  <li className="flex items-center gap-2.5 justify-center md:justify-start">
                    <span className="w-4 h-4 rounded-[4px] border-2 border-[#EA5C26] flex items-center justify-center text-[#EA5C26] shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span>Precise Daily Planetary Transit Forecasts</span>
                  </li>
                  <li className="flex items-center gap-2.5 justify-center md:justify-start">
                    <span className="w-4 h-4 rounded-[4px] border-2 border-[#EA5C26] flex items-center justify-center text-[#EA5C26] shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span>Personalized Rashi & Graha Remedies</span>
                  </li>
                  <li className="flex items-center gap-2.5 justify-center md:justify-start">
                    <span className="w-4 h-4 rounded-[4px] border-2 border-[#EA5C26] flex items-center justify-center text-[#EA5C26] shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span>Nakshatra-Based Personal Guidance</span>
                  </li>
                  <li className="flex items-center gap-2.5 justify-center md:justify-start">
                    <span className="w-4 h-4 rounded-[4px] border-2 border-[#EA5C26] flex items-center justify-center text-[#EA5C26] shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span>Daily Auspicious Color & Gemstone Tips</span>
                  </li>
                </ul>

                <div className="pt-3">
                  <Button asChild className="bg-[#EA5C26] hover:bg-[#D44B17] text-white font-semibold text-xs sm:text-sm h-11 px-7 rounded-xl hover:shadow-xs transition-all duration-300">
                    <Link href="/rashifal">
                      <span>Check Rashifal</span>
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="w-full h-80 sm:h-96 lg:h-[420px] rounded-xl overflow-hidden relative group flex items-center justify-center border border-[#E8D8C5] md:order-2">
                <img src="/Images/temple_diya.jpg" alt="Daily Rashifal" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
            </motion.div>

            {/* Row 5: Temples of India */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="dharmik-row-item grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center"
            >
              <div className="w-full h-80 sm:h-96 lg:h-[420px] rounded-xl overflow-hidden relative group flex items-center justify-center border border-[#E8D8C5]">
                <img src="/Images/Hero/gold-temple-gopuram.jpg" alt="Temples of India" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>

              <div className="dharmik-text-box space-y-4 text-center md:text-left">
                <span className="inline-block px-3.5 py-1 rounded-full border border-[#EA5C26] text-[#EA5C26] text-[11px] font-semibold uppercase tracking-wider mb-2 bg-transparent">Shrines</span>
                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#6D1344]">Temples of India</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Discover history, significance, and rituals of thousands of ancient temples across India.
                </p>

                <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700 font-medium max-w-md mx-auto md:mx-0">
                  <li className="flex items-center gap-2.5 justify-center md:justify-start">
                    <span className="w-4 h-4 rounded-[4px] border-2 border-[#C85B12] flex items-center justify-center text-[#C85B12] shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span>Detailed Sthan Purana & Shrine History</span>
                  </li>
                  <li className="flex items-center gap-2.5 justify-center md:justify-start">
                    <span className="w-4 h-4 rounded-[4px] border-2 border-[#C85B12] flex items-center justify-center text-[#C85B12] shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span>Live Aarti & Sacred Darshan Timings</span>
                  </li>
                  <li className="flex items-center gap-2.5 justify-center md:justify-start">
                    <span className="w-4 h-4 rounded-[4px] border-2 border-[#C85B12] flex items-center justify-center text-[#C85B12] shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span>Pilgrimage & Yatra Planning Guidelines</span>
                  </li>
                  <li className="flex items-center gap-2.5 justify-center md:justify-start">
                    <span className="w-4 h-4 rounded-[4px] border-2 border-[#C85B12] flex items-center justify-center text-[#C85B12] shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span>High-Res Shrine Architecture Gallery</span>
                  </li>
                </ul>

                <div className="pt-3">
                  <Button asChild className="bg-[#C85B12] hover:bg-[#A84A0E] text-white font-extrabold text-xs sm:text-sm h-11 px-7 rounded-xl hover:shadow-xs transition-all duration-300">
                    <Link href="/temples">
                      <span>Explore Temples</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* 7. WHAT DEVOTEES SAY ABOUT UTSAV - DUAL OPPOSITE MARQUEE WALL WITH DEVOTEE PHOTOS */}
        <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="py-10 sm:py-12 lg:py-14 bg-white overflow-hidden relative ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              {/* Left Column: Heading & Subtitle */}
              <div className="space-y-3.5 text-left">
                <div className="inline-flex items-center gap-2 bg-slate-50 text-[#6D1344] text-[10px] sm:text-xs font-medium uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-[#E8D8C5] mb-1">
                  <span>Devotee Experiences</span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#6D1344] leading-tight">
                  They couldn't be at the temple. <span className="text-[#EA5C26]">So they joined from home.</span>
                </h2>
                <p className="text-xs sm:text-sm text-[#7A676E] font-normal pt-1">
                  Real experiences from devotees across India and beyond.
                </p>
              </div>

              {/* Right Column: Follow Us Pill Button */}
              <div className="shrink-0">
                <Link
                  href="#community"
                  className="inline-flex items-center gap-2 bg-white hover:bg-white text-slate-800 border border-slate-200/80 px-5 py-2.5 rounded-full text-xs font-bold hover:shadow-xs transition-all duration-300 group cursor-pointer"
                >
                  <span>Follow us</span>
                  <span className="text-slate-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-sm font-semibold">↗</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* ROW 1: TOP MARQUEE (MOVING LEFT ←) */}
            <div className="overflow-hidden w-full">
              <div className="animate-marquee flex gap-6 w-max" style={{ animation: "marquee 28s linear infinite" }}>
                {[
                  {
                    name: "Suresh Kumar",
                    city: "Bengaluru, KA",
                    puja: "Kashi Vishwanath Archana",
                    avatar: "/Images/Avatars/indian_devotee_3_1788330480133.jpg",
                    quote: "Superb experience! Pandit ji took my name and gotra distinctly during Sankalp. Got the HD video proof on WhatsApp within 2 days.",
                    rating: 5,
                  },
                  {
                    name: "Meenakshi Sundaram",
                    city: "Chennai, TN",
                    puja: "Kamakhya Shaktipeeth Seva",
                    avatar: "/Images/Avatars/indian_devotee_2_1788330428136.jpg",
                    quote: "Got the video proof on WhatsApp quickly and sacred Mahaprasad reached my home safely in Chennai. Highly authentic service!",
                    rating: 5,
                  },
                  {
                    name: "Rajesh Sharma",
                    city: "New Delhi, DL",
                    puja: "Mahakaleshwar Bhasma Aarti",
                    avatar: "/Images/Avatars/indian_devotee_1_1788330405371.jpg",
                    quote: "Very genuine temple seva platform. Sitting in Delhi, I felt as if my whole family was present inside Ujjain sanctum.",
                    rating: 5,
                  },
                  {
                    name: "Anita Deshmukh",
                    city: "Mumbai, MH",
                    puja: "Ashtavinayak Ganapati Seva",
                    avatar: "/Images/Avatars/indian_devotee_4_1788330503434.jpg",
                    quote: "Felt like sitting inside the temple itself! The prasad box was beautifully packaged with genuine Bhasma and Kumkum.",
                    rating: 5,
                  },
                  // Duplicate for continuous loop
                  {
                    name: "Suresh Kumar",
                    city: "Bengaluru, KA",
                    puja: "Kashi Vishwanath Archana",
                    avatar: "/Images/Avatars/indian_devotee_3_1788330480133.jpg",
                    quote: "Superb experience! Pandit ji took my name and gotra distinctly during Sankalp. Got the HD video proof on WhatsApp within 2 days.",
                    rating: 5,
                  },
                  {
                    name: "Meenakshi Sundaram",
                    city: "Chennai, TN",
                    puja: "Kamakhya Shaktipeeth Seva",
                    avatar: "/Images/Avatars/indian_devotee_2_1788330428136.jpg",
                    quote: "Got the video proof on WhatsApp quickly and sacred Mahaprasad reached my home safely in Chennai. Highly authentic service!",
                    rating: 5,
                  },
                  {
                    name: "Rajesh Sharma",
                    city: "New Delhi, DL",
                    puja: "Mahakaleshwar Bhasma Aarti",
                    avatar: "/Images/Avatars/indian_devotee_1_1788330405371.jpg",
                    quote: "Very genuine temple seva platform. Sitting in Delhi, I felt as if my whole family was present inside Ujjain sanctum.",
                    rating: 5,
                  },
                  {
                    name: "Anita Deshmukh",
                    city: "Mumbai, MH",
                    puja: "Ashtavinayak Ganapati Seva",
                    avatar: "/Images/Avatars/indian_devotee_4_1788330503434.jpg",
                    quote: "Felt like sitting inside the temple itself! The prasad box was beautifully packaged with genuine Bhasma and Kumkum.",
                    rating: 5,
                  },
                ].map((rev, idx) => (
                  <div
                    key={`row1-${idx}`}
                    className="w-[320px] sm:w-[360px] shrink-0 flex flex-col justify-between bg-white rounded-lg p-6 border border-slate-200/80 shadow-2xs group"
                  >
                    <div>
                      <span className="text-2xl font-serif text-[#C85B12]/40 font-extrabold leading-none block mb-2 select-none">
                        “
                      </span>
                      <p className="font-heading text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                        {rev.quote}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 pt-3 mt-3">
                      <img
                        src={rev.avatar}
                        alt={rev.name}
                        className="w-9 h-9 rounded-full object-cover shrink-0 border border-slate-200"
                      />
                      <div className="space-y-0.5">
                        <h4 className="font-heading text-xs font-extrabold text-slate-900 leading-tight">
                          {rev.name}
                        </h4>
                        <span className="text-[11px] text-[#C85B12] font-medium block">
                          @{rev.city.toLowerCase().replace(/[^a-z]/g, '')}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ROW 2: BOTTOM MARQUEE (MOVING RIGHT →) */}
            <div className="overflow-hidden w-full">
              <div className="animate-marquee-reverse flex gap-6 w-max" style={{ animation: "marqueeReverse 28s linear infinite" }}>
                {[
                  {
                    name: "Vikram Singh",
                    city: "Kolkata, WB",
                    puja: "Ashta Lakshmi Dhan Yajna",
                    avatar: "/Images/Avatars/indian_devotee_1_1788330405371.jpg",
                    quote: "Authentic prasad, timely video updates, and prompt customer support. Highly recommended!",
                    rating: 5,
                  },
                  {
                    name: "Pooja Kapoor",
                    city: "Pune, MH",
                    puja: "Solah Somvar Vrat Puja",
                    avatar: "/Images/Avatars/indian_devotee_4_1788330503434.jpg",
                    quote: "Extremely peaceful experience. Booking online puja through Utsav was smooth and transparent.",
                    rating: 5,
                  },
                  {
                    name: "Ramesh Menon",
                    city: "Kochi, KL",
                    puja: "Mangal Dosh Bhat Puja",
                    avatar: "/Images/Avatars/indian_devotee_3_1788330480133.jpg",
                    quote: "Live Sankalp video proof gave immense satisfaction and spiritual bliss to my parents.",
                    rating: 5,
                  },
                  {
                    name: "Sanjay Verma",
                    city: "Jaipur, RJ",
                    puja: "Siddh Khatu Shyam Puja",
                    avatar: "/Images/Avatars/indian_devotee_2_1788330428136.jpg",
                    quote: "Very reliable platform for NRIs and devotees living far away. Received pure Prasad safely.",
                    rating: 5,
                  },
                  // Duplicate for continuous loop
                  {
                    name: "Vikram Singh",
                    city: "Kolkata, WB",
                    puja: "Ashta Lakshmi Dhan Yajna",
                    avatar: "/Images/Avatars/indian_devotee_1_1788330405371.jpg",
                    quote: "Authentic prasad, timely video updates, and prompt customer support. Highly recommended!",
                    rating: 5,
                  },
                  {
                    name: "Pooja Kapoor",
                    city: "Pune, MH",
                    puja: "Solah Somvar Vrat Puja",
                    avatar: "/Images/Avatars/indian_devotee_4_1788330503434.jpg",
                    quote: "Extremely peaceful experience. Booking online puja through Utsav was smooth and transparent.",
                    rating: 5,
                  },
                  {
                    name: "Ramesh Menon",
                    city: "Kochi, KL",
                    puja: "Mangal Dosh Bhat Puja",
                    avatar: "/Images/Avatars/indian_devotee_3_1788330480133.jpg",
                    quote: "Live Sankalp video proof gave immense satisfaction and spiritual bliss to my parents.",
                    rating: 5,
                  },
                  {
                    name: "Sanjay Verma",
                    city: "Jaipur, RJ",
                    puja: "Siddh Khatu Shyam Puja",
                    avatar: "/Images/Avatars/indian_devotee_2_1788330428136.jpg",
                    quote: "Very reliable platform for NRIs and devotees living far away. Received pure Prasad safely.",
                    rating: 5,
                  },
                ].map((rev, idx) => (
                  <div
                    key={`row2-${idx}`}
                    className="w-[320px] sm:w-[360px] shrink-0 flex flex-col justify-between bg-white rounded-lg p-6 border border-slate-200/80 shadow-2xs group"
                  >
                    <div>
                      <span className="text-2xl font-serif text-[#C85B12]/40 font-extrabold leading-none block mb-2 select-none">
                        “
                      </span>
                      <p className="font-heading text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                        {rev.quote}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 pt-3 mt-3">
                      <img
                        src={rev.avatar}
                        alt={rev.name}
                        className="w-9 h-9 rounded-full object-cover shrink-0 border border-slate-200"
                      />
                      <div className="space-y-0.5">
                        <h4 className="font-heading text-xs font-extrabold text-slate-900 leading-tight">
                          {rev.name}
                        </h4>
                        <span className="text-[11px] text-[#C85B12] font-medium block">
                          @{rev.city.toLowerCase().replace(/[^a-z]/g, '')}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* 8. COLLECTION OF DHARMIK GYAN & SPIRITUAL WISDOM (COMBINED SINGLE SECTION) */}
        <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="py-10 sm:py-12 lg:py-14 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            
            {/* Unified Section Header */}
            <div className="text-center space-y-3.5">
              <div className="inline-flex items-center gap-2 bg-slate-50 text-[#6D1344] text-[10px] sm:text-xs font-medium uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-[#E8D8C5] mb-1">
                <span>Spiritual Wisdom & Gyan</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#6D1344] leading-tight">
                Collection of <span className="text-[#EA5C26]">Dharmik Gyan</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#7A676E] font-normal max-w-xl mx-auto pt-1">
                Explore ancient scriptures, daily panchang, chalisa, mantras, and spiritual reads tailored for your journey.
              </p>
            </div>

            {/* Scripture Category Photo Thumbnail Tiles Bar */}
            <div id="gyan-grid-tiles" className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3 sm:gap-4">
              {[
                { title: "Tithi", img: "/Images/Thumbnails/tithi_thumbnail_1788285465435.jpg" },
                { title: "Chalisa", img: "/Images/Thumbnails/chalisa_thumbnail_1788285480897.jpg" },
                { title: "Temples", img: "/Images/Thumbnails/temples_thumbnail_1788285499254.jpg" },
                { title: "Stotra", img: "/Images/Thumbnails/stotra_thumbnail_1788285525647.jpg" },
                { title: "Aarti", img: "/Images/Thumbnails/aarti_thumbnail_1788285547720.jpg" },
                { title: "Dharmik Gyan", img: "/Images/Thumbnails/dharmik_gyan_thumbnail_1788285643296.jpg" },
                { title: "Bhagavad Gita", img: "/Images/scripture.jpg" },
                { title: "Mantra", img: "/Images/temple_diya.jpg" },
                { title: "Astrology", img: "/Images/panchang.jpg" },
              ].map((tile, idx) => {
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.4, delay: idx * 0.03, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href="/gyan"
                      className="h-32 sm:h-36 rounded-xl overflow-hidden relative flex flex-col justify-end p-2.5 group cursor-pointer hover:shadow-2xs transition-all border border-slate-200/60"
                    >
                      <img
                        src={tile.img}
                        alt={tile.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent z-0" />
                      <span className="relative z-10 text-xs font-extrabold text-white text-center group-hover:text-white transition-colors drop-shadow-xs">
                        {tile.title}
                      </span>
                    </Link>
                  </motion.div>
                )
              })}
            </div>

            {/* TOP FEATURED HERO + LATEST POSTS STACK */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column: Featured Hero Post (8 cols) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-8 relative rounded-xl overflow-hidden min-h-[380px] sm:min-h-[440px] flex flex-col justify-end p-6 sm:p-8 group cursor-pointer hover:shadow-xs"
              >
                <img
                  src="/Images/Blogs/rohini_nakshatra_astrology.jpg"
                  alt="Rohini Nakshatra Destiny"
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent z-0" />

                <div className="relative z-10 space-y-3">
                  {/* Category Pill */}
                  <span className="bg-white/95 text-slate-800 text-xs font-extrabold px-3 py-1.5 rounded-md inline-block w-fit">
                    Astrology & Nakshatra
                  </span>

                  <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-snug group-hover:text-white transition-colors">
                    The Personality Traits & Destiny of Rohini Nakshatra: A Comprehensive Vedic Guide
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 font-medium">
                    Aug 10 • 10 min read
                  </p>
                </div>
              </motion.div>

              {/* Right Column: Latest Posts Stack (4 cols) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-4 flex flex-col justify-between space-y-4"
              >
                <h3 className="font-heading text-xl font-semibold text-[#6D1344]">Latest post</h3>

                <div className="space-y-4 flex-1 flex flex-col justify-between">
                  {[
                    {
                      title: "Creating an Intuitive Puja Routine for Your Home Altar",
                      date: "Aug 10 • 8 min read",
                      img: "/Images/temple_diya.jpg"
                    },
                    {
                      title: "Tips for Designing Clear and Peaceful Meditation Spaces",
                      date: "Aug 08 • 5 min read",
                      img: "/Images/prasad_thali.jpg"
                    },
                    {
                      title: "Exploring How Ancient Temple Architecture Guides Devotion",
                      date: "Aug 05 • 7 min read",
                      img: "/Images/kashi-vishwanath-spire.jpg"
                    },
                    {
                      title: "How Color & Fragrance Influence Sacred Ritual Energies",
                      date: "Aug 02 • 6 min read",
                      img: "/Images/Pujas/devi-shaktipeeth-aarti.jpg"
                    }
                  ].map((post, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3.5 group cursor-pointer p-2 rounded-lg hover:bg-white transition-all"
                    >
                      <div className="w-16 h-16 rounded-md overflow-hidden shrink-0 bg-slate-100">
                        <img
                          src={post.img}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-heading text-xs sm:text-sm font-semibold text-[#6D1344] leading-snug line-clamp-2 group-hover:text-[#EA5C26] transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-[11px] text-[#7A676E] font-normal">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* BOTTOM SECTION: BLOG GRID */}
            <div className="space-y-8">
              {/* Section Header with Left Title & Right Navigation Arrows */}
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-2xl font-semibold text-[#6D1344]">Blog</h3>
                <div className="flex items-center gap-2">
                  <button className="w-9 h-9 rounded-full border border-[#E8D8C5] flex items-center justify-center text-[#6D1344] hover:bg-white hover:border-[#EA5C26] transition-all cursor-pointer">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="w-9 h-9 rounded-full border border-[#E8D8C5] flex items-center justify-center text-[#6D1344] hover:bg-white hover:border-[#EA5C26] transition-all cursor-pointer">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* 3 Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {[
                  {
                    title: "Vastu Shastra Remedies for Financial Abundance & Peace",
                    category: "Vastu Shastra",
                    desc: "Discover simple yet powerful Vastu adjustments for your home entrance, altar, and living spaces to invite positive energy.",
                    date: "Aug 10 • 10 min read",
                    img: "/Images/Blogs/1787647032386_47122.avif"
                  },
                  {
                    title: "How Shani Mahadasha Affects Your Horoscope & Remedial Pujas",
                    category: "Shani Remedies",
                    desc: "Learn about the transit of Saturn, its impact on different Rashis, and scripture-sanctioned Telabhishekam and Shanti rituals.",
                    date: "Aug 10 • 10 min read",
                    img: "/Images/Blogs/1787648514924_109784.avif"
                  },
                  {
                    title: "Solah Somvar Vrat Vidhi, Fasting Rules & Sacred Katha",
                    category: "Vrat Katha",
                    desc: "Step-by-step rituals, auspicious dates, and sacred mantras for observing 16 Mondays fast for Lord Shiva's divine blessings.",
                    date: "Aug 10 • 10 min read",
                    img: "/Images/Blogs/1787648948047_60418.avif"
                  }
                ].map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-white rounded-xl p-4 sm:p-5 space-y-4 shadow-xs hover:shadow-2xs transition-shadow group cursor-pointer flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      {/* Rounded Image Frame */}
                      <div className="h-44 sm:h-48 w-full rounded-lg overflow-hidden bg-slate-100">
                        <img
                          src={card.img}
                          alt={card.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Category Pill */}
                      <span className="bg-slate-50 text-[#EA5C26] text-xs font-semibold px-3 py-1 rounded-md inline-block w-fit border border-[#E8D8C5]">
                        {card.category}
                      </span>

                      {/* Title */}
                      <h4 className="font-heading text-base font-semibold text-[#6D1344] leading-snug group-hover:text-[#EA5C26] transition-colors line-clamp-2">
                        {card.title}
                      </h4>

                      {/* Description */}
                      <p className="text-xs text-[#7A676E] font-normal leading-relaxed line-clamp-3">
                        {card.desc}
                      </p>
                    </div>

                    {/* Meta Footer */}
                    <div className="pt-2 flex items-center justify-between text-[11px] text-[#7A676E] font-medium">
                      <span>{card.date}</span>
                      <span className="text-[#EA5C26] group-hover:translate-x-1 transition-transform">Read →</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* PAGINATION BAR */}
              <div className="pt-6 flex items-center justify-between">
                <button className="p-2 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer">
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center cursor-pointer">
                    1
                  </span>
                  <span className="w-8 h-8 rounded-full text-slate-600 hover:bg-white hover:text-slate-900 font-bold text-xs flex items-center justify-center cursor-pointer transition-colors">
                    2
                  </span>
                  <span className="w-8 h-8 rounded-full text-slate-600 hover:bg-white hover:text-slate-900 font-bold text-xs flex items-center justify-center cursor-pointer transition-colors">
                    3
                  </span>
                  <span className="w-8 h-8 rounded-full text-slate-600 hover:bg-white hover:text-slate-900 font-bold text-xs flex items-center justify-center cursor-pointer transition-colors">
                    4
                  </span>
                  <span className="w-8 h-8 rounded-full text-slate-600 hover:bg-white hover:text-slate-900 font-bold text-xs flex items-center justify-center cursor-pointer transition-colors">
                    5
                  </span>
                </div>

                <button className="p-2 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </motion.section>

        {/* 9. EXPERIENCE UTSAV MOBILE APP SHOWCASE */}
        <motion.section id="app-showcase" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="py-10 sm:py-12 lg:py-14 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            {/* Header Section */}
            <div className="text-center space-y-3.5 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-slate-50 text-[#6D1344] text-[10px] sm:text-xs font-medium uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-[#E8D8C5] mb-1">
                <span>Spiritual Devotion Anywhere</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#6D1344] leading-tight max-w-2xl mx-auto">
                Your Puja, <span className="text-[#EA5C26] whitespace-nowrap">wherever you are.</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#7A676E] font-normal max-w-xl mx-auto pt-1">
                Follow your Puja, receive updates and stay connected with Utsav from your phone.
              </p>
            </div>

            {/* 3 iPhone Mockup Screen Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch justify-items-center">
              {/* Phone Card 1: Live Video Proof */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center group w-full"
              >
                {/* 100% Single iPhone Device Frame */}
                <div className="relative w-[260px] sm:w-[275px] h-[520px] sm:h-[550px] bg-slate-950 rounded-[40px] p-2.5 shadow-2xl border-[3px] border-slate-800 ring-1 ring-slate-700/40 flex flex-col justify-between overflow-hidden group-hover:-translate-y-2 transition-all duration-500">
                  {/* Dynamic Island Notch */}
                  <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-22 h-4 bg-black rounded-full z-30 flex items-center justify-end px-2 gap-1.5 shadow-xs pointer-events-none">
                    <div className="w-2 h-2 rounded-full bg-slate-900 border border-slate-800" />
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-950/80" />
                  </div>

                  {/* Pure Screen Content (Zoomed 1.38x to remove inner duplicate bezels) */}
                  <div className="w-full h-full rounded-[32px] overflow-hidden relative bg-white">
                    <img
                      src="/Images/App/screen_puja.jpg"
                      alt="Utsav App Puja Seva Screen"
                      className="w-full h-full object-cover scale-[1.38] object-[center_42%]"
                    />
                  </div>

                  {/* Bottom Home Indicator Bar */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-slate-400/50 rounded-full z-30 pointer-events-none" />
                </div>

                {/* Card Description underneath */}
                <div className="pt-6 text-center max-w-xs space-y-1.5">
                  <h3 className="font-heading text-lg font-semibold text-[#6D1344]">
                    Puja Seva & Mantra Jaap
                  </h3>
                  <p className="text-xs text-[#7A676E] font-normal leading-relaxed">
                    Book authentic Pujas, Khatta Dahi Arpan, and Vedic Mantra Jaap Seva at prominent temples.
                  </p>
                </div>
              </motion.div>

              {/* Phone Card 2: Daily Panchang & Rashifal */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center group w-full"
              >
                {/* 100% Single iPhone Device Frame */}
                <div className="relative w-[260px] sm:w-[275px] h-[520px] sm:h-[550px] bg-slate-950 rounded-[40px] p-2.5 shadow-2xl border-[3px] border-slate-800 ring-1 ring-slate-700/40 flex flex-col justify-between overflow-hidden group-hover:-translate-y-2 transition-all duration-500">
                  {/* Dynamic Island Notch */}
                  <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-22 h-4 bg-black rounded-full z-30 flex items-center justify-end px-2 gap-1.5 shadow-xs pointer-events-none">
                    <div className="w-2 h-2 rounded-full bg-slate-900 border border-slate-800" />
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-950/80" />
                  </div>

                  {/* Pure Screen Content (Zoomed 1.38x to remove inner duplicate bezels) */}
                  <div className="w-full h-full rounded-[32px] overflow-hidden relative bg-white">
                    <img
                      src="/Images/App/screen_home.jpg"
                      alt="Utsav App Home Screen"
                      className="w-full h-full object-cover scale-[1.38] object-[center_42%]"
                    />
                  </div>

                  {/* Bottom Home Indicator Bar */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-slate-400/50 rounded-full z-30 pointer-events-none" />
                </div>

                {/* Card Description underneath */}
                <div className="pt-6 text-center max-w-xs space-y-1.5">
                  <h3 className="font-heading text-lg font-semibold text-[#6D1344]">
                    Today's Special & Panchang
                  </h3>
                  <p className="text-xs text-[#7A676E] font-normal leading-relaxed">
                    Access daily Panchang, Rashifal horoscopes, Vedic calendar, and life problem solutions.
                  </p>
                </div>
              </motion.div>

              {/* Phone Card 3: Doorstep Prasad Delivery */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center group w-full"
              >
                {/* 100% Single iPhone Device Frame */}
                <div className="relative w-[260px] sm:w-[275px] h-[520px] sm:h-[550px] bg-slate-950 rounded-[40px] p-2.5 shadow-2xl border-[3px] border-slate-800 ring-1 ring-slate-700/40 flex flex-col justify-between overflow-hidden group-hover:-translate-y-2 transition-all duration-500">
                  {/* Dynamic Island Notch */}
                  <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-22 h-4 bg-black rounded-full z-30 flex items-center justify-end px-2 gap-1.5 shadow-xs pointer-events-none">
                    <div className="w-2 h-2 rounded-full bg-slate-900 border border-slate-800" />
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-950/80" />
                  </div>

                  {/* Pure Screen Content (Zoomed 1.38x to remove inner duplicate bezels) */}
                  <div className="w-full h-full rounded-[32px] overflow-hidden relative bg-white">
                    <img
                      src="/Images/App/screen_store.jpg"
                      alt="Utsav App Siddha Store Screen"
                      className="w-full h-full object-cover scale-[1.38] object-[center_42%]"
                    />
                  </div>

                  {/* Bottom Home Indicator Bar */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-slate-400/50 rounded-full z-30 pointer-events-none" />
                </div>

                {/* Card Description underneath */}
                <div className="pt-6 text-center max-w-xs space-y-1.5">
                  <h3 className="font-heading text-lg font-semibold text-[#6D1344]">
                    Siddha Store & Healing Bracelets
                  </h3>
                  <p className="text-xs text-[#7A676E] font-normal leading-relaxed">
                    Shop energized Money Magnet bracelets, 5 Mukhi Rudraksha, and authentic shrine Prasad.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Official Google Play & App Store Download Badges */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#app-store" className="hover:opacity-90 transition-opacity cursor-pointer inline-block">
                <img src="/Images/Badges/app_store_badge.png" alt="Download on the App Store" className="h-12 sm:h-13 w-auto object-contain drop-shadow-xs" />
              </a>

              <a href="#google-play" className="hover:opacity-90 transition-opacity cursor-pointer inline-block">
                <img src="/Images/Badges/google_play_badge.png" alt="Get it on Google Play" className="h-12 sm:h-13 w-auto object-contain drop-shadow-xs" />
              </a>
            </div>
          </div>
        </motion.section>

        {/* 10. FREQUENTLY ASKED QUESTIONS */}
        <motion.section id="faq" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="py-10 sm:py-12 lg:py-14 bg-white relative ">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Header Section */}
            <div className="text-center space-y-3.5 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-slate-50 text-[#6D1344] text-[10px] sm:text-xs font-medium uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-[#E8D8C5] mb-1">
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#6D1344] leading-tight">
                Frequently Asked <span className="text-[#EA5C26]">Questions</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#7A676E] font-normal max-w-lg mx-auto pt-1">
                Got questions about booking, video proof or doorstep prasad? We've got answers.
              </p>
            </div>

            {/* Accordion List with Horizontal Separators matching reference */}
            <div id="faq-list-container" className="space-y-3">
              {[
                {
                  q: "What happens after I book a Puja?",
                  a: "Your Sankalp details are shared with the temple. The Pandit performs the Puja in your name, followed by your Darshan and Puja video updates and Prasad delivery where applicable."
                },
                {
                  q: "When will I receive the video proof on WhatsApp?",
                  a: "Video proof is recorded live during the temple ritual and sent to your registered WhatsApp phone number within 24 to 48 hours after the Puja is completed."
                },
                {
                  q: "How is Prasad delivered to my home address?",
                  a: "After the ritual concludes, temple Prasad (dry fruits, sacred Bhasma, Roli, Kumkum, and energized yantra) is sanctified, packed in tamper-evident sealed boxes, and dispatched via SpeedPost/Courier directly to your address across India and internationally."
                },
                {
                  q: "Can I book a Puja if I don't know my family Gotra?",
                  a: "Yes, absolutely! If you do not know your Gotra, Pandit ji recites the universal 'Kashyap' Gotra during Sankalp, which is scriptures-sanctioned for all Vedic rituals."
                },
                {
                  q: "Is Utsav affiliated directly with authentic prominent temples?",
                  a: "Yes! We partner directly with authorized temple priests, pandas, and mathas across Varanasi, Ujjain, Kamakhya, Haridwar, Ayodhya, and major Jyotirlingas to ensure 100% authentic Vedic Vidhi."
                },
                {
                  q: "Can I perform Puja on behalf of my family members?",
                  a: "Yes, you can include names and gotra of up to 6 family members for a single Puja booking. All names will be chanted during the sacred Sankalp."
                }
              ].map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="py-5 sm:py-6 cursor-pointer transition-colors group"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  >
                    <div className="w-full text-left flex items-center justify-between gap-4">
                      <h3
                        className={`font-heading text-base sm:text-lg font-semibold transition-colors ${
                          isOpen ? "text-[#EA5C26]" : "text-[#6D1344] group-hover:text-[#EA5C26]"
                        }`}
                      >
                        {faq.q}
                      </h3>

                      <ChevronDown
                        className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-[#EA5C26]" : "text-[#7A676E] group-hover:text-[#EA5C26]"
                        }`}
                      />
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="text-[#7A676E] text-xs sm:text-sm font-normal leading-relaxed pt-3">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Bottom Contact Support Prompt matching reference */}
            <div className="text-center pt-2">
              <p className="text-xs sm:text-sm text-[#7A676E] font-medium">
                Have more questions?{" "}
                <a href="#support" className="text-[#EA5C26] hover:underline font-semibold transition-all">
                  Contact our support
                </a>
              </p>
            </div>
          </div>
        </motion.section>



        {/* 11. PRE-FOOTER APP DOWNLOAD HERO BANNER */}
        <motion.section id="download-banner" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.15 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="w-full bg-white py-10 sm:py-14 relative overflow-hidden ">
          {/* Soft Pastel Mesh Glow & Background Grid matching reference image */}
          <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-30 -z-10" />
          <div className="absolute -top-24 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#FFEDD5]/70 via-[#FEF3C7]/50 to-[#FFE4E6]/60 rounded-full blur-3xl -z-10 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column: Text & Official Download Badges (7 cols) */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-transparent text-[#6D1344] text-[10px] sm:text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-[#E8D8C5]">
                  <span>Devotion at Your Fingertips</span>
                </div>

                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#6D1344] tracking-tight leading-tight">
                  Your spiritual journey, finally under control.{" "}
                  <span className="text-[#EA5C26]">Download Utsav today</span>
                </h2>

                <p className="text-sm sm:text-base text-[#7A676E] font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Utsav brings sacred pujas, live video proof, daily Panchang, and doorstep Mahaprasad together in one smart dashboard — built for how you actually practice your faith.
                </p>

                {/* Official Download Badges matching uploaded graphics */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <a href="#app-store" className="hover:opacity-90 transition-opacity cursor-pointer inline-block">
                    <img src="/Images/Badges/app_store_badge.png" alt="Download on the App Store" className="h-12 sm:h-13 w-auto object-contain drop-shadow-xs" />
                  </a>

                  <a href="#google-play" className="hover:opacity-90 transition-opacity cursor-pointer inline-block">
                    <img src="/Images/Badges/google_play_badge.png" alt="Get it on Google Play" className="h-12 sm:h-13 w-auto object-contain drop-shadow-xs" />
                  </a>
                </div>
              </div>

              {/* Right Column: 100% Unclipped Mobile Mockup Graphic (5 cols) */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-[300px] sm:max-w-[320px] transform lg:translate-y-10 group hover:-translate-y-1 transition-transform duration-500 flex justify-center"
                >
                  <img
                    src="/Images/App/utsav_app_screen_1.jpg"
                    alt="Utsav Mobile App Showcase Screen"
                    className="w-full h-auto object-contain drop-shadow-xs"
                  />
                </motion.div>
              </div>

            </div>
          </div>
        </motion.section>

      </main>

      {/* 11. FOOTER */}
      <Footer />
    </div>
  )
}
