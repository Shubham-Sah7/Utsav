"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  MapPin,
  Calendar,
  Star,
  Check,
  ShieldCheck,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Clock,
  UserCheck,
  Award,
  BookOpen,
  Sparkles,
  Video,
  Package,
  Bell,
  HeartHandshake,
  ChevronLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PujaDetailPage() {
  // State for Gallery
  const galleryImages = [
    { src: "/Images/panchang.jpg", alt: "Chintamani Ganesh Mandir Sanctum Kashi" },
    { src: "/Images/Hero/ganga-aarti-flame.jpg", alt: "Ganga Aarti Flame Kashi" },
    { src: "/Images/scripture.jpg", alt: "Vedic Sahastra Archan Chanting" },
    { src: "/Images/Hero/kashi-golden-shikhara.jpg", alt: "Kashi Temple Shikhara" }
  ];
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);

  // State for Package Selection
  const [selectedPackage, setSelectedPackage] = useState<number>(0);
  const packages = [
    {
      id: 0,
      title: "Individual Puja",
      devotees: "1 Devotee",
      price: 951,
      desc: "Single devotee Sankalp & Prasad delivery."
    },
    {
      id: 1,
      title: "Partner Puja",
      devotees: "Up to 2 Devotees",
      price: 1201,
      desc: "Couple / 2 Family members Sankalp & Prasad."
    },
    {
      id: 2,
      title: "Family Puja",
      devotees: "Up to 4 Devotees",
      price: 1601,
      desc: "Immediate family members Sankalp & Prasad."
    },
    {
      id: 3,
      title: "Joint Family Puja",
      devotees: "Up to 6 Devotees",
      price: 2001,
      desc: "Extended family Sankalp, special ARCHANA & Prasad."
    }
  ];

  // State for Sankalp Form
  const [devoteeNames, setDevoteeNames] = useState("");
  const [devoteeGotra, setDevoteeGotra] = useState("");

  // State for Storytelling Expandable
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);

  // State for FAQ Accordion
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // State for Sticky Bottom Bar Visibility
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToPackage = () => {
    const el = document.getElementById("package-selector");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const faqs = [
    {
      q: "Do I need to be physically present at the temple for this Puja?",
      a: "No, physical presence is not required. Your name and Gotra will be formally recited during the Sankalp by head priest Challa Abhiram S. inside Chintamani Ganesh Mandir, Kashi. You will receive a personalized video proof on WhatsApp."
    },
    {
      q: "How and when will I receive the video proof?",
      a: "The HD Sankalp video clip showing the Pandit chanting your name & Gotra will be sent to your WhatsApp within 24 to 48 hours after the Puja completion."
    },
    {
      q: "What is included inside the Prasad box?",
      a: "The sanctified Prasad box contains energized Ganesh Yantra, sacred Bhasma, Roli, Kumkum, dry fruits prasad, and holy Akshat blessed at the sanctum."
    },
    {
      q: "Can I add names of my family members and Gotra?",
      a: "Yes! Depending on the package selected (Individual, Partner, Family, or Joint Family), you can submit all family member names and Gotra in the Sankalp form."
    },
    {
      q: "What happens if the Puja is delayed or canceled?",
      a: "Under the Utsav 100% Refund Promise, if the Puja is not performed on the announced date or video proof is not delivered, you get a full 100% refund with no questions asked."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-[#C85B12]/10 selection:text-[#C85B12]">
      {/* 1. STICKY HEADER */}
      <Header />

      <main className="flex-grow pt-24 sm:pt-28">
        {/* 2. PUJA HERO SECTION */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
              <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <Link href="/#discover-pujas" className="hover:text-slate-900 transition-colors">Puja Seva</Link>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <span className="text-slate-900 font-bold">1008 Ganesh Sahastra Archan</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* LEFT COLUMN: Gallery */}
              <div className="lg:col-span-6 space-y-4">
                {/* Main Active Image Frame */}
                <div className="w-full h-80 sm:h-96 lg:h-[460px] rounded-2xl overflow-hidden relative border border-slate-200/80 bg-slate-950 group">
                  <motion.img
                    key={selectedImgIndex}
                    src={galleryImages[selectedImgIndex].src}
                    alt={galleryImages[selectedImgIndex].alt}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20">
                    Sacred Temple Sanctum
                  </div>
                </div>

                {/* Thumbnail Navigation */}
                <div className="grid grid-cols-4 gap-3">
                  {galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImgIndex(idx)}
                      className={`h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer relative ${
                        selectedImgIndex === idx ? "border-[#C85B12] opacity-100" : "border-slate-200/80 opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* RIGHT COLUMN: Metadata & Quick Participate */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-3">
                  <span className="inline-block px-3.5 py-1 rounded-full border border-[#C85B12] text-[#C85B12] text-[11px] font-extrabold uppercase tracking-wider bg-transparent">
                    SPECIAL PUJA
                  </span>

                  <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                    1008 Ganesh Sahastra Archan Path Aivam Ketu Shanti Puja
                  </h1>

                  <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-700 font-semibold pt-1">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-[#C85B12]" />
                      <span>Chintamani Ganesh, Kashi</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-[#C85B12]" />
                      <span>Wed · Sep 09, 2026 · Budhvar Visesh</span>
                    </div>
                  </div>

                  {/* Rating & Devotee Stats */}
                  <div className="flex items-center gap-3 pt-1">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-xs font-bold text-slate-900 ml-1">4.6</span>
                    </div>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs font-bold text-slate-700">10 Lakh+ Devotees Participated</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  A sacred 1008-name Ganesh Archana and Ketu Shanti Puja performed at Chintamani Ganesh Mandir, Kashi. Removes life obstacles, financial stress, and bestows peace & career growth.
                </p>

                {/* Quick Benefit Badges */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200/80 bg-slate-50/50">
                    <Check className="w-4 h-4 text-[#C85B12] stroke-[3]" />
                    <span className="text-xs font-bold text-slate-800">HD Video Proof</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200/80 bg-slate-50/50">
                    <Check className="w-4 h-4 text-[#C85B12] stroke-[3]" />
                    <span className="text-xs font-bold text-slate-800">Doorstep Prasad</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200/80 bg-slate-50/50">
                    <Check className="w-4 h-4 text-[#C85B12] stroke-[3]" />
                    <span className="text-xs font-bold text-slate-800">Name & Gotra Recited</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200/80 bg-slate-50/50">
                    <Check className="w-4 h-4 text-[#C85B12] stroke-[3]" />
                    <span className="text-xs font-bold text-slate-800">100% Refund Assurance</span>
                  </div>
                </div>

                {/* Primary Hero CTA */}
                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                  <Button
                    onClick={scrollToPackage}
                    className="w-full sm:w-auto bg-[#C85B12] hover:bg-[#A84A0E] text-white font-extrabold text-sm h-12 px-8 rounded-xl shadow-xs transition-all duration-300"
                  >
                    <span>Participate in Puja →</span>
                  </Button>
                  <span className="text-xs font-bold text-slate-500">Starting from ₹951</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. PARTICIPATION / PACKAGE SELECTOR */}
        <section id="package-selector" className="py-12 sm:py-16 bg-slate-50/60 border-y border-slate-200/80">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-2">
              <span className="inline-block px-3.5 py-1 rounded-full border border-[#C85B12] text-[#C85B12] text-[11px] font-extrabold uppercase tracking-wider bg-transparent">
                SEVA PACKAGES
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                Select Your Participation Package
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-normal">
                Choose the number of family members for Vedic Sankalp & Prasad delivery.
              </p>
            </div>

            {/* Package Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {packages.map((pkg) => {
                const isSelected = selectedPackage === pkg.id;
                return (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`rounded-xl p-5 border transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
                      isSelected
                        ? "bg-white border-[#C85B12] shadow-xs ring-2 ring-[#C85B12]/20"
                        : "bg-white border-slate-200/80 hover:border-slate-300"
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-slate-400">0{pkg.id + 1}</span>
                        {isSelected && (
                          <span className="w-5 h-5 rounded-full bg-[#C85B12] text-white flex items-center justify-center text-xs">
                            ✓
                          </span>
                        )}
                      </div>
                      <h3 className="font-heading text-base font-extrabold text-slate-900">{pkg.title}</h3>
                      <span className="text-xs font-bold text-[#C85B12] block">{pkg.devotees}</span>
                      <p className="text-xs text-slate-500 font-normal leading-relaxed">{pkg.desc}</p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-baseline justify-between">
                      <span className="text-xs font-medium text-slate-500">Dakshina</span>
                      <span className="text-xl font-extrabold text-slate-900">₹{pkg.price}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Sankalp Details Form */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs space-y-6">
              <h3 className="font-heading text-lg font-extrabold text-slate-900">
                Enter Sankalp Details ({packages[selectedPackage].devotees})
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">
                    Devotee Name(s) <span className="text-[#C85B12]">*</span>
                  </label>
                  <input
                    type="text"
                    value={devoteeNames}
                    onChange={(e) => setDevoteeNames(e.target.value)}
                    placeholder="e.g. Shubham Sah, Priya Sah"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#C85B12]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">
                    Family Gotra <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={devoteeGotra}
                    onChange={(e) => setDevoteeGotra(e.target.value)}
                    placeholder="e.g. Kashyap / Vatsa (Leave blank if unknown)"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#C85B12]"
                  />
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left space-y-0.5">
                  <span className="text-xs text-slate-500 font-medium block">Total Seva Amount</span>
                  <span className="text-2xl font-extrabold text-slate-900">₹{packages[selectedPackage].price}</span>
                </div>

                <Button className="w-full sm:w-auto bg-[#C85B12] hover:bg-[#A84A0E] text-white font-extrabold text-sm h-12 px-10 rounded-xl shadow-xs transition-all duration-300">
                  <span>Book this Puja →</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 4. WHAT YOU RECEIVE */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-2">
              <span className="inline-block px-3.5 py-1 rounded-full border border-[#C85B12] text-[#C85B12] text-[11px] font-extrabold uppercase tracking-wider bg-transparent">
                PUJA INCLUSIONS
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                Everything your Puja includes
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { title: "Puja Performed at Temple", desc: "Chintamani Ganesh Sanctum, Kashi", icon: MapPin },
                { title: "Guided Mantras for Home", desc: "Vedic audio & prayer guidelines", icon: BookOpen },
                { title: "Personalised Puja Video", desc: "HD video proof with name chanting", icon: Video },
                { title: "Authentic Prasad Box", desc: "Bhasma, Roli, Kumkum & Yantra", icon: Package },
                { title: "Live WhatsApp Updates", desc: "Real-time ritual notifications", icon: Bell }
              ].map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="p-5 rounded-xl border border-slate-200/80 bg-white text-center space-y-3 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border border-[#C85B12]/30 flex items-center justify-center text-[#C85B12]">
                      <IconComp className="w-5 h-5 stroke-[2]" />
                    </div>
                    <h4 className="font-heading text-xs font-extrabold text-slate-900 leading-tight">{item.title}</h4>
                    <p className="text-[11px] text-slate-500 font-normal leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. UTSAV PROMISE */}
        <section className="py-10 bg-slate-50/60 border-y border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-600 text-emerald-700 text-[11px] font-extrabold uppercase">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>GUARANTEED AUTHENTICITY</span>
            </div>

            <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900">
              The Utsav Promise
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
              If the Puja is not performed or the promised video is not delivered, Utsav assures a 100% refund. No questions asked.
            </p>

            <div className="pt-2 flex flex-wrap justify-center gap-6 text-xs font-extrabold text-slate-800">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#C85B12] stroke-[3]" /> 100% Refund Assurance
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#C85B12] stroke-[3]" /> Guaranteed Video Proof
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#C85B12] stroke-[3]" /> No Questions Asked
              </span>
            </div>
          </div>
        </section>

        {/* 6. ABOUT THE PUJA */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="space-y-2">
              <span className="inline-block px-3.5 py-1 rounded-full border border-[#C85B12] text-[#C85B12] text-[11px] font-extrabold uppercase tracking-wider bg-transparent">
                SCRIPTURAL CONTEXT
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                About this Puja
              </h2>
            </div>

            <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4 font-normal">
              <p>
                <strong>Lord Ganesha</strong> is revered as <em>Vighnaharta</em> (Remover of Obstacles) and the harbinger of auspicious beginnings. Performing 1008 Ganesh Sahastra Archan Path involves sacred recitation of 1008 divine names of Lord Ganesha accompanied by offering of Modak and sacred Durva grass.
              </p>

              <p>
                <strong>Chintamani Ganesh Mandir in Kashi (Varanasi)</strong> is one of the most ancient and powerful Ganesha shrines mentioned in the Kashi Khanda of Skanda Purana. Devotees believe praying here relieves mental anxiety, financial debts, and planetary doshas.
              </p>

              {isReadMoreOpen && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4 pt-2 border-t border-slate-100">
                  <p>
                    <strong>Ketu Shanti Ritual:</strong> Ketu represents spiritual liberation, sudden life shifts, and intuition. When Ketu creates obstacles or health imbalances, performing Ketu Shanti alongside Ganesh Sahastra Archan pacifies malefic planetary transits.
                  </p>
                  <p>
                    <strong>Why Devotees Participate:</strong> Devotees across India and abroad participate to seek financial stability, success in competitive endeavors, marriage harmony, and protection for their family.
                  </p>
                </motion.div>
              )}

              <button
                onClick={() => setIsReadMoreOpen(!isReadMoreOpen)}
                className="text-xs font-extrabold text-[#C85B12] hover:underline flex items-center gap-1 pt-2 cursor-pointer"
              >
                <span>{isReadMoreOpen ? "Show Less ↑" : "Read More About Rituals & History ↓"}</span>
              </button>
            </div>
          </div>
        </section>

        {/* 7. PUJA PERFORMED BY */}
        <section className="py-12 sm:py-16 bg-slate-50/60 border-y border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
              <img
                src="/Images/Hero/devotee-aarti-blessing.jpg"
                alt="Challa Abhiram S. Vedic Acharya"
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover shrink-0 border border-slate-200"
              />
              <div className="space-y-3 text-center md:text-left flex-1">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                    <h3 className="font-heading text-xl font-extrabold text-slate-900">Challa Abhiram S.</h3>
                    <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                      <UserCheck className="w-3 h-3" /> Verified Pandit
                    </span>
                  </div>
                  <p className="text-xs font-bold text-[#C85B12]">Vedic Acharya · Varanasi</p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Senior Vedic Scholar and authorized head priest at Chintamani Ganesh Mandir, Kashi with over 10 years of sacred ritual practice.
                </p>

                <div className="pt-1 flex flex-wrap justify-center md:justify-start gap-4 text-xs font-bold text-slate-700">
                  <span className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-[#C85B12]" /> 9921+ Pujas Performed
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#C85B12]" /> 10+ Years Practice
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. WHY PERFORM THIS PUJA? */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-2">
              <span className="inline-block px-3.5 py-1 rounded-full border border-[#C85B12] text-[#C85B12] text-[11px] font-extrabold uppercase tracking-wider bg-transparent">
                BENEFITS
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                Why Perform This Puja?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { title: "Financial Prosperity", desc: "Attract wealth & remove debts" },
                { title: "Fame & Success", desc: "Enhance prestige & social standing" },
                { title: "Removal of Ketu Dosh", desc: "Pacify malefic planetary effects" },
                { title: "Career Growth", desc: "Overcome work & business hurdles" },
                { title: "Business Growth", desc: "Invite trade stability & profits" }
              ].map((item, idx) => (
                <div key={idx} className="p-5 rounded-xl border border-slate-200/80 bg-white text-center space-y-2 hover:border-[#C85B12] transition-colors">
                  <span className="w-8 h-8 rounded-full bg-[#C85B12]/10 text-[#C85B12] font-bold text-xs flex items-center justify-center mx-auto">
                    0{idx + 1}
                  </span>
                  <h4 className="font-heading text-xs font-extrabold text-slate-900">{item.title}</h4>
                  <p className="text-[11px] text-slate-500 font-normal leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. HOW TO PARTICIPATE (TIMELINE) */}
        <section className="py-12 sm:py-16 bg-slate-50/60 border-y border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-2">
              <span className="inline-block px-3.5 py-1 rounded-full border border-[#C85B12] text-[#C85B12] text-[11px] font-extrabold uppercase tracking-wider bg-transparent">
                STEPS
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                How to Participate
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 relative">
              {[
                { num: "01", title: "Select Puja", desc: "Choose package & date" },
                { num: "02", title: "Pay Dakshina", desc: "Secure online checkout" },
                { num: "03", title: "Fill Sankalp", desc: "Submit Name & Gotra" },
                { num: "04", title: "Watch Video", desc: "HD WhatsApp proof" },
                { num: "05", title: "Prasad Home", desc: "Express delivery" }
              ].map((step, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-slate-200/80 bg-white text-center space-y-2">
                  <span className="text-xs font-mono font-bold text-[#C85B12] px-2 py-0.5 rounded-md bg-[#C85B12]/10 inline-block">
                    {step.num}
                  </span>
                  <h4 className="font-heading text-xs font-extrabold text-slate-900">{step.title}</h4>
                  <p className="text-[11px] text-slate-500 font-normal">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. DEVOTEE REVIEWS */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-2">
              <span className="inline-block px-3.5 py-1 rounded-full border border-[#C85B12] text-[#C85B12] text-[11px] font-extrabold uppercase tracking-wider bg-transparent">
                TESTIMONIALS
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                Devotees who participated
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Suresh Kumar",
                  location: "Bengaluru, KA",
                  quote: "Pandit ji recited my name & Gotra very clearly in the Video. Blessed experience!",
                  rating: 5
                },
                {
                  name: "Meenakshi Sundaram",
                  location: "Chennai, TN",
                  quote: "Received authentic Prasad box at home safely in 3 days. Extremely genuine service.",
                  rating: 5
                },
                {
                  name: "Rajesh Sharma",
                  location: "New Delhi, DL",
                  quote: "Felt as if my family was present inside Chintamani Ganesh sanctum. Highly recommended!",
                  rating: 5
                }
              ].map((rev, idx) => (
                <div key={idx} className="p-6 rounded-2xl border border-slate-200/80 bg-white space-y-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">“{rev.quote}”</p>
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-extrabold text-slate-900">{rev.name}</span>
                    <span className="text-[11px] text-slate-400 font-normal">{rev.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. FAQ ACCORDION */}
        <section className="py-12 sm:py-16 bg-slate-50/60 border-t border-slate-200/80">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-2">
              <span className="inline-block px-3.5 py-1 rounded-full border border-[#C85B12] text-[#C85B12] text-[11px] font-extrabold uppercase tracking-wider bg-transparent">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                Puja FAQ
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="bg-white rounded-xl border border-slate-200/80 overflow-hidden">
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between font-heading text-xs sm:text-sm font-extrabold text-slate-900 cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isOpen && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="px-4 pb-5 sm:px-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.a}
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* 12. STICKY BOTTOM BOOKING BAR */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-slate-200/80 py-3.5 px-4 sm:px-8 z-50 shadow-md flex items-center justify-between"
          >
            <div className="space-y-0.5">
              <h4 className="font-heading text-xs sm:text-sm font-extrabold text-slate-900 line-clamp-1">
                1008 Ganesh Sahastra Archan Path
              </h4>
              <p className="text-[11px] text-[#C85B12] font-bold">Chintamani Ganesh, Kashi • ₹951 onwards</p>
            </div>

            <Button
              onClick={scrollToPackage}
              className="bg-[#C85B12] hover:bg-[#A84A0E] text-white font-extrabold text-xs sm:text-sm h-10 px-6 rounded-xl shadow-xs transition-all duration-300 shrink-0"
            >
              <span>Book Puja →</span>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
