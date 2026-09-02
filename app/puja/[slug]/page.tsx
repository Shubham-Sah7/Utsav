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
  UserCheck,
  Award,
  Clock,
  Video,
  Package,
  BookOpen,
  Sparkles,
  Flame,
  HelpCircle,
  PhoneCall
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
  const [selectedPackage, setSelectedPackage] = useState<number>(1); // Default to Partner Puja (Most Chosen)
  const packages = [
    {
      id: 0,
      title: "Individual Puja",
      devotees: "1 Devotee",
      price: 951,
      originalPrice: 1051,
      badge: null,
      desc: "Single devotee Sankalp & Prasad delivery.",
      img: "/Images/Avatars/indian_devotee_1_1788330405371.jpg",
      features: [
        "Sankalp with your Name & Gotra",
        "Full puja video shared with you",
        "Live updates via WhatsApp",
        "Blessed Prasad delivered to your home"
      ]
    },
    {
      id: 1,
      title: "Partner Puja",
      devotees: "Upto 2 Devotees",
      price: 1201,
      originalPrice: 1301,
      badge: "Most Chosen",
      desc: "Couple / 2 Family members Sankalp & Prasad.",
      img: "/Images/Packages/partner_couple.jpg",
      features: [
        "Joint Sankalp for both Names & Gotras",
        "Full puja video shared with you",
        "Live updates via WhatsApp",
        "Special blessings for you & your partner",
        "Blessed Prasad delivered to your home"
      ]
    },
    {
      id: 2,
      title: "Family Puja",
      devotees: "Upto 4 Devotees",
      price: 1601,
      originalPrice: 1801,
      badge: "Best Value",
      desc: "Immediate family members Sankalp & Prasad.",
      img: "/Images/Packages/family_group.jpg",
      features: [
        "Family Sankalp for up to 4 members",
        "Full puja video shared with you",
        "Live updates via WhatsApp",
        "Divine protection for your entire family",
        "+ Special Ganesh Chalisa Path Seva",
        "Blessed Prasad delivered to your home"
      ]
    },
    {
      id: 3,
      title: "Joint Family Puja",
      devotees: "Upto 6 Devotees",
      price: 2001,
      originalPrice: 2201,
      badge: null,
      desc: "Extended family Sankalp, special ARCHANA & Prasad.",
      img: "/Images/Packages/joint_family_havan.jpg",
      features: [
        "Full Family Sankalp for up to 6 members",
        "Full puja video shared with you",
        "Live updates via WhatsApp",
        "Blessings for your entire Kul",
        "+ Special Ganesh Chalisa Path Seva",
        "Blessed Prasad delivered to your home"
      ]
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

  const inclusions = [
    {
      title: "Puja Performed at Temple",
      tag: "Sanctum Ritual",
      desc: "An experienced and verified Panditji performs the puja following proper Vedic rituals at the temple.",
      img: "/Images/panchang.jpg"
    },
    {
      title: "Guided Mantras for Home",
      tag: "Vedic Guidance",
      desc: "Receive a mantra chanting guide along with do's & don'ts to follow during the puja.",
      img: "/Images/scripture.jpg"
    },
    {
      title: "Personalised Puja Video",
      tag: "WhatsApp Proof",
      desc: "Full video of your Puja with Naam-Gotra sankalp chanting. Shared on WhatsApp within 1-3 days.",
      img: "/Images/Hero/ganga-aarti-flame.jpg"
    },
    {
      title: "Authentic Prasad Box",
      tag: "Doorstep Delivery",
      desc: "Prasad prepared at the temple will be packed and delivered to your home within 7-10 days.",
      img: "/Images/prasad_thali.jpg"
    },
    {
      title: "Live WhatsApp Updates",
      tag: "Real-time Alert",
      desc: "Get updates on WhatsApp for all steps of your Puja.",
      img: "/Images/Hero/kashi-golden-shikhara.jpg"
    }
  ];

  const faqs = [
    {
      q: "What is Chintamani Ganpati famous for?",
      a: "Chintamani Ganpati in Kashi is famous for fulfilling all sincere desires and removing deep-rooted worries ('Chinta'). Mentioned in the Skanda Purana, praying here brings mental peace and relief from life obstacles."
    },
    {
      q: "Which god is called Chintamani?",
      a: "Lord Ganesha in his Swayambhu form is called Chintamani Vinayak — the divine deity who absorbs all anxieties and bestows wisdom, prosperity, and clarity."
    },
    {
      q: "What is the significance of Chintamani Ganpati?",
      a: "This ancient Kashi shrine is one of the most powerful Ganesha sanctums. A 1008 Sahasra Archana performed here invokes Lord Ganesha's 1,008 divine names, pacifying planetary doshas and bestowing success."
    },
    {
      q: "What is Ketu Graha Shanti pooja?",
      a: "Ketu Graha Shanti Puja is a specialized Vedic ritual performed to pacify the malefic effects of Ketu (sudden losses, confusion, health issues). Offering 108 White Madar flowers into the Havan fire turns Ketu's energy into spiritual strength and career growth."
    },
    {
      q: "What is the power of Chintamani?",
      a: "Chintamani Ganesha holds the unique power to control Ketu Graha. Worshipping this sacred form purifies karmic blocks, grants financial stability, and bestows victory in personal & professional endeavors."
    }
  ];

  const userReviews = [
    {
      name: "Preeti Rana",
      location: "Pune, Maharashtra",
      time: "7 months ago",
      avatar: "/Images/Avatars/indian_devotee_2_1788330428136.jpg",
      quote: "The Utsav app is awesome and at very reasonable price we can offer... The packaging of the Prasad was also awesome. The best part is that the CEO himself is reaching out to customers. I will definitely be a permanent customer for UTSAV."
    },
    {
      name: "Bideshwari Uniyal",
      location: "Ghaziabad, UP",
      time: "7 months ago",
      avatar: "/Images/Avatars/indian_devotee_4_1788330503434.jpg",
      quote: "It's Excellent service. They sent a video of the puja being performed, and I could clearly hear my name being chanted. As someone living far from these temples, this app is a blessing!"
    },
    {
      name: "Rajalakshmi Saravanan",
      location: "Bengaluru, KA",
      time: "7 months ago",
      avatar: "/Images/Avatars/indian_devotee_3_1788330480133.jpg",
      quote: "It was a nice experience for me to have done the puja with Utsav app. It was done within the auspicious time period. Prasad packing & delivery time were great. Thank you Utsav. 🙏"
    },
    {
      name: "Sacchin Subhash Ratnaparkhi",
      location: "Mumbai, MH",
      time: "8 months ago",
      avatar: "/Images/Avatars/indian_devotee_1_1788330405371.jpg",
      quote: "Nice puja mai achha fresh feel kar raha hoo, mere raste khul gaye hai, Ab sab sahi ho raha hai. Great regular updates, customer support, and prasad contents."
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
                <div className="w-full h-80 sm:h-96 lg:h-[460px] rounded-xl overflow-hidden relative border border-slate-200/80 bg-slate-950 group">
                  <motion.img
                    key={selectedImgIndex}
                    src={galleryImages[selectedImgIndex].src}
                    alt={galleryImages[selectedImgIndex].alt}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/90 text-white text-[11px] font-bold px-3 py-1 rounded-sm border border-white/20">
                    Sacred Temple Sanctum
                  </div>
                </div>

                {/* Thumbnail Navigation */}
                <div className="grid grid-cols-4 gap-3">
                  {galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImgIndex(idx)}
                      className={`h-20 rounded-lg overflow-hidden border-2 transition-all cursor-pointer relative ${
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
                  <div className="flex items-center gap-2">
                    <span className="inline-block px-3 py-1 rounded-full border border-[#C85B12] text-[#C85B12] text-[11px] font-extrabold uppercase tracking-wider bg-transparent">
                      SPECIAL PUJA
                    </span>
                    <span className="text-xs font-extrabold text-red-600 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-red-600 animate-ping inline-block" />
                      Puja to Protects from Ketu's Sudden Negative Effects
                    </span>
                  </div>

                  <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                    1008 Ganesh Sahastra Archan Path Aivam Ketu Shanti Puja
                  </h1>

                  <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-700 font-semibold pt-1">
                    <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-sm">
                      <MapPin className="w-4 h-4 text-[#C85B12]" />
                      <span>Chintamani Ganesh, Kashi</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-sm">
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
                    <span className="text-xs font-bold text-slate-700">10 Lakh+ Devotees have offered Puja (1k+ Reviews)</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  A sacred 1008-name Ganesh Archana and Ketu Shanti Puja performed at Chintamani Ganesh Mandir, Kashi. Removes life obstacles, financial stress, and bestows peace & career growth.
                </p>

                {/* Quick Benefit Badges */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {[
                    { label: "HD Video Proof", icon: Video },
                    { label: "Doorstep Prasad", icon: Package },
                    { label: "Name & Gotra Recited", icon: BookOpen },
                    { label: "100% Refund Assurance", icon: ShieldCheck }
                  ].map((item, idx) => {
                    const IconComp = item.icon;
                    return (
                      <div key={idx} className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl border border-slate-200/80 bg-white shadow-2xs">
                        <div className="w-7 h-7 rounded-full bg-[#C85B12]/10 text-[#C85B12] flex items-center justify-center shrink-0">
                          <IconComp className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span className="text-xs font-extrabold text-slate-900">{item.label}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Primary Hero CTA */}
                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                  <Button
                    onClick={scrollToPackage}
                    className="w-full sm:w-auto bg-[#C85B12] hover:bg-[#A84A0E] text-white font-extrabold text-sm h-12 px-8 rounded-lg shadow-xs transition-all duration-300 cursor-pointer"
                  >
                    <span>Participate in Puja →</span>
                  </Button>
                  <span className="text-xs font-bold text-slate-500">Starting from ₹951 <span className="line-through text-slate-400">₹1,051</span></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. PARTICIPATION / PACKAGE SELECTOR */}
        <section id="package-selector" className="py-12 sm:py-16 bg-slate-50/60 border-y border-slate-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {packages.map((pkg) => {
                const isSelected = selectedPackage === pkg.id;
                return (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`rounded-lg overflow-hidden border transition-all duration-300 cursor-pointer flex flex-col justify-between group bg-white shadow-2xs relative ${
                      isSelected
                        ? "border-[#C85B12] ring-2 ring-[#C85B12]/20 shadow-xs"
                        : "border-slate-200/80 hover:border-slate-300"
                    }`}
                  >
                    <div className="space-y-3">
                      {/* Image Header with Top Badges */}
                      <div className="relative h-36 w-full overflow-hidden bg-slate-100">
                        <img
                          src={pkg.img}
                          alt={pkg.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                        <span className="absolute top-2.5 left-2.5 bg-slate-900/90 text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-sm">
                          0{pkg.id + 1}
                        </span>
                        <span className="absolute top-2.5 right-2.5 bg-white/95 text-[#C85B12] text-[10px] font-extrabold px-2.5 py-0.5 rounded-sm shadow-xs">
                          {pkg.devotees}
                        </span>
                        {pkg.badge && (
                          <span className="absolute bottom-2.5 left-2.5 bg-[#C85B12] text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-sm shadow-xs">
                            {pkg.badge}
                          </span>
                        )}
                        {isSelected && (
                          <div className="absolute inset-0 bg-[#C85B12]/15 flex items-center justify-center backdrop-blur-[1px]">
                            <span className="w-8 h-8 rounded-full bg-[#C85B12] text-white flex items-center justify-center text-sm font-extrabold shadow-md">
                              ✓
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Card Content Body */}
                      <div className="p-4 pt-1 space-y-2.5">
                        <div className="space-y-1">
                          <h3 className="font-heading text-base font-extrabold text-slate-900 leading-tight">{pkg.title}</h3>
                          <p className="text-xs text-slate-500 font-normal leading-relaxed">{pkg.desc}</p>
                        </div>

                        {/* Feature Bullet Points */}
                        <ul className="space-y-1.5 pt-1 text-[11px] text-slate-700 font-medium">
                          {pkg.features.map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <Check className="w-3.5 h-3.5 text-[#C85B12] shrink-0 mt-0.5 stroke-[2.5]" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="p-4 pt-0 space-y-3">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs font-semibold text-slate-500">Dakshina</span>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-xs text-slate-400 line-through font-medium">₹{pkg.originalPrice}</span>
                          <span className="text-xl font-extrabold text-slate-900">₹{pkg.price}</span>
                        </div>
                      </div>

                      <Button className={`w-full text-xs font-extrabold h-9 rounded-md cursor-pointer transition-colors ${
                        isSelected ? "bg-[#C85B12] text-white" : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                      }`}>
                        <span>{isSelected ? "Selected ✓" : "Book Now"}</span>
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Sankalp Details Form */}
            <div className="bg-white rounded-lg p-6 sm:p-8 border border-slate-200/80 shadow-2xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1">
                <div>
                  <h3 className="font-heading text-lg font-extrabold text-slate-900">
                    Enter Sankalp Details
                  </h3>
                  <p className="text-xs text-slate-500 font-normal pt-0.5">
                    Selected Package: <span className="font-bold text-[#C85B12]">{packages[selectedPackage].title} ({packages[selectedPackage].devotees})</span>
                  </p>
                </div>
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 w-max">
                  Step 2 of 2
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-extrabold text-slate-800 block">
                    Devotee Name(s) <span className="text-[#C85B12]">*</span>
                  </label>
                  <input
                    type="text"
                    value={devoteeNames}
                    onChange={(e) => setDevoteeNames(e.target.value)}
                    placeholder="e.g. Shubham Sah, Priya Sah"
                    className="w-full px-4 py-2.5 rounded-md border border-slate-200 text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:border-[#C85B12] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-extrabold text-slate-800 block">
                    Family Gotra <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={devoteeGotra}
                    onChange={(e) => setDevoteeGotra(e.target.value)}
                    placeholder="e.g. Kashyap / Vatsa (Leave blank if unknown)"
                    className="w-full px-4 py-2.5 rounded-md border border-slate-200 text-sm bg-slate-50/50 focus:bg-white focus:outline-none focus:border-[#C85B12] transition-colors"
                  />
                </div>
              </div>

              <div className="pt-1 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left space-y-0.5">
                  <span className="text-xs text-slate-500 font-semibold block">Total Seva Amount</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-slate-400 line-through font-medium">₹{packages[selectedPackage].originalPrice}</span>
                    <span className="text-2xl font-extrabold text-slate-900">₹{packages[selectedPackage].price}</span>
                  </div>
                </div>

                <Button className="w-full sm:w-auto bg-[#C85B12] hover:bg-[#A84A0E] text-white font-extrabold text-xs sm:text-sm h-11 px-8 rounded-md shadow-xs transition-colors cursor-pointer">
                  <span>Book this Puja →</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 4. WHAT YOU RECEIVE (RICH PHOTOGRAPHY IMAGE-FEATURE CARDS) */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-2">
              <span className="inline-block px-3.5 py-1 rounded-full border border-[#C85B12] text-[#C85B12] text-[11px] font-extrabold uppercase tracking-wider bg-transparent">
                EVERY PUJA PACKAGE INCLUDES
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                Here's what you get with every booking
              </h2>
            </div>

            {/* Rich Photography Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {inclusions.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-2xs group flex flex-col justify-between hover:shadow-xs transition-all duration-300">
                  <div className="space-y-3.5">
                    {/* Rich Image Header */}
                    <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <span className="absolute top-2.5 right-2.5 bg-white/95 text-slate-900 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-sm shadow-xs">
                        {item.tag}
                      </span>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-4 pt-1 space-y-1.5">
                      <h4 className="font-heading text-sm font-extrabold text-slate-900 leading-snug">{item.title}</h4>
                      <p className="text-xs text-slate-500 font-normal leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. UTSAV PROMISE */}
        <section className="py-10 bg-slate-50/60 border-y border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-600 text-emerald-700 text-[11px] font-extrabold uppercase bg-transparent">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>GUARANTEED AUTHENTICITY</span>
            </div>

            <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900">
              The Utsav Promise
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
              If puja is not performed, or video is not delivered — we assure you a 100% refund. No questions asked.
            </p>

            <div className="pt-2 flex flex-wrap justify-center gap-6 text-xs font-extrabold text-slate-800">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#C85B12] stroke-[3]" /> 100% Refund
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#C85B12] stroke-[3]" /> Guaranteed Video
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#C85B12] stroke-[3]" /> No Questions Asked
              </span>
            </div>
          </div>
        </section>

        {/* 6. ABOUT THE PUJA, MANDIR & BHAGWAN */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="space-y-2">
              <span className="inline-block px-3.5 py-1 rounded-full border border-[#C85B12] text-[#C85B12] text-[11px] font-extrabold uppercase tracking-wider bg-transparent">
                SCRIPTURAL CONTEXT
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                About - Puja, Mandir & Bhagwan
              </h2>
            </div>

            <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4 font-normal">
              <p>
                This powerful Visesh 1008 Ganesh Sahasra Archana Path & Sankalp Puja is performed at the sacred Sri Chintamani Ganesh Mandir in Kashi, the divine abode of Chintamani Vinayak — the remover of worries, fulfiller of desires, and the bestower of clarity, stability, and auspiciousness.
              </p>

              <p>
                This anushthan involves the chanting of 1,008 sacred names of Bhagwan Ganesh, each carrying a unique vibration that removes obstacles, attracts wisdom, and purifies deep-rooted karmic blocks. Devotees seeking solutions for long-standing problems, clarity in decisions, peace of mind, career growth, relationship harmony, or protection from negativity are highly advised to perform this puja.
              </p>

              {isReadMoreOpen && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 pt-4 border-t border-slate-100">
                  <div className="space-y-2">
                    <h3 className="font-heading text-base font-extrabold text-slate-900">About the Deity: Swayambhu Swetark Ganesha</h3>
                    <p>The deity worshipped in this puja is a very rare form called Swetark Ganesha.</p>
                    <ul className="list-disc pl-5 space-y-1 text-slate-600">
                      <li><strong>Self-Manifested:</strong> This idol is not made by human hands; it appears naturally in the root of the Aak (Madar) plant after years of growth.</li>
                      <li><strong>The Master of Ketu:</strong> Lord Ganesha is the only deity who can control Ketu. Worshipping this "Swetark" form converts Ketu's destructive energy into spiritual strength and success.</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-heading text-base font-extrabold text-slate-900">About the Temple: Chintamani Ganesh Mandir, Kashi</h3>
                    <p>This special Ketu Shanti Puja involves the 1008 Ganesh Sahasra Archana Path and is performed at the Chintamani Ganesh Mandir in Kashi.</p>
                    <ul className="list-disc pl-5 space-y-1 text-slate-600">
                      <li><strong>The Ritual:</strong> On Wednesday, priests will offer 108 White Madar flowers into the sacred Havan fire.</li>
                      <li><strong>The Result:</strong> This specific offering is believed to calm Ketu immediately, turning your struggles into Career Growth, Fame, and Wealth.</li>
                    </ul>
                  </div>

                  <p className="font-bold text-slate-900">
                    Don't let anxiety and invisible obstacles hold you back. Perform this powerful remedy to pacify Ketu and open your path to victory. Book this puja via the Utsav App now.
                  </p>
                </motion.div>
              )}

              <button
                onClick={() => setIsReadMoreOpen(!isReadMoreOpen)}
                className="text-xs font-extrabold text-[#C85B12] hover:underline flex items-center gap-1 pt-2 cursor-pointer"
              >
                <span>{isReadMoreOpen ? "Show Less ↑" : "Show More Details About Deity & Temple ↓"}</span>
              </button>
            </div>
          </div>
        </section>

        {/* 7. PUJA PERFORMED BY */}
        <section className="py-12 sm:py-16 bg-slate-50/60 border-y border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
              <img
                src="/Images/Hero/devotee-aarti-blessing.jpg"
                alt="Challa Abhiram S. Vedic Acharya"
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl object-cover shrink-0 border border-slate-200"
              />
              <div className="space-y-3 text-center md:text-left flex-1">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                    <h3 className="font-heading text-xl font-extrabold text-slate-900">Challa Abhiram S.</h3>
                    <span className="bg-transparent text-emerald-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-600/40 flex items-center gap-1">
                      <UserCheck className="w-3 h-3" /> VERIFIED on Utsav since 2023
                    </span>
                  </div>
                  <p className="text-xs font-bold text-[#C85B12]">Vedic Acharya · Varanasi</p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Authorised Pandit at Chintamani Ganesh Mandir, Kashi. Senior Vedic Scholar with over 10 years of sacred ritual practice.
                </p>

                <div className="pt-1 flex flex-wrap justify-center md:justify-start gap-4 text-xs font-bold text-slate-700">
                  <span className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-[#C85B12]" /> 9921+ Pujas Performed
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#C85B12]" /> 10+ Years of Practice
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
                { title: "Financial Prosperity", desc: "Attract wealth and blessings for overall financial well-being 💸" },
                { title: "Fame & Success", desc: "Opens doors to success and popularity. Empower yourself to shine in your career" },
                { title: "Removal of Ketu Dosh", desc: "Balance planetary influences to bring peace, clarity, and spiritual growth" },
                { title: "Career Growth", desc: "Remove professional hurdles and open new doors for opportunity" },
                { title: "Business Growth", desc: "Attracts financial prosperity for the overall growth of business" }
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
                How to Participate in Puja?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-normal">
                Few easy steps to seek blessings with Utsav
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 relative">
              {[
                { num: "1", title: "Select Puja", desc: "Select a puja and bhet daan options such as vastra daan, gau seva, brahman bhojan etc." },
                { num: "2", title: "Pay Dakshina", desc: "Securely pay your dakshina using UPI, Card or Net Banking." },
                { num: "3", title: "Fill Sankalp Form", desc: "Enter offering name(s), gotra, prasad delivery address & puja wish." },
                { num: "4", title: "Watch Puja Video", desc: "Short darshan video shared on tithi. Full video with name-gotra on WhatsApp within 3-5 days." },
                { num: "5", title: "Prasad Delivered", desc: "Authentic prasad from the temple will be delivered within 7 - 10 days" }
              ].map((step, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-slate-200/80 bg-white text-center space-y-2">
                  <span className="text-xs font-mono font-bold text-[#C85B12] px-2 py-0.5 rounded-sm bg-[#C85B12]/10 inline-block">
                    {step.num}
                  </span>
                  <h4 className="font-heading text-xs font-extrabold text-slate-900">{step.title}</h4>
                  <p className="text-[11px] text-slate-500 font-normal leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. DEVOTEE REVIEWS (AUTHENTIC USER REVIEWS) */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-2">
              <span className="inline-block px-3.5 py-1 rounded-full border border-[#C85B12] text-[#C85B12] text-[11px] font-extrabold uppercase tracking-wider bg-transparent">
                REVIEWS FROM USERS
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
                4.5⭐ 10 Lakh+ Users | 100+ Puja Performed
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {userReviews.map((rev, idx) => (
                <div key={idx} className="p-6 rounded-2xl border border-slate-200/80 bg-white shadow-2xs flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-2xl font-serif text-[#C85B12]/40 font-extrabold leading-none block mb-2 select-none">
                      “
                    </span>
                    <p className="font-heading text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                      {rev.quote}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-3 mt-3 border-t border-slate-100">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="w-10 h-10 rounded-full object-cover shrink-0 border border-slate-200"
                    />
                    <div className="space-y-0.5">
                      <h4 className="font-heading text-xs font-extrabold text-slate-900 leading-tight">
                        {rev.name}
                      </h4>
                      <span className="text-[11px] text-slate-500 font-medium block">
                        {rev.location} • {rev.time}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. FREQUENTLY ASKED QUESTIONS (EXACT MATCHING HOMEPAGE STYLE) */}
        <section className="py-12 sm:py-16 bg-white border-t border-slate-200/80">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-3">
              <span className="inline-block px-3.5 py-1.5 rounded-full border border-slate-200/80 text-slate-800 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider bg-transparent">
                Frequently Asked Questions
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Puja <span className="text-[#C85B12]">FAQ</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-lg mx-auto">
                Got questions about booking, video proof or doorstep prasad? We've got answers.
              </p>
            </div>

            {/* Accordion List with Horizontal Separators matching homepage */}
            <div className="divide-y divide-slate-200/80 border-t border-b border-slate-200/80">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="py-5 sm:py-6 cursor-pointer transition-colors group"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  >
                    <div className="w-full text-left flex items-center justify-between gap-4">
                      <h3
                        className={`font-heading text-base sm:text-lg font-bold transition-colors ${
                          isOpen ? "text-[#C85B12]" : "text-slate-900 group-hover:text-[#C85B12]"
                        }`}
                      >
                        {faq.q}
                      </h3>

                      <ChevronDown
                        className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-[#C85B12]" : "text-slate-700 group-hover:text-[#C85B12]"
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
                          <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed pt-3">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
              className="bg-[#C85B12] hover:bg-[#A84A0E] text-white font-extrabold text-xs sm:text-sm h-10 px-6 rounded-lg shadow-xs transition-all duration-300 shrink-0 cursor-pointer"
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
