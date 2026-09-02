"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
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
  BookOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PujaDetailPage() {
  const params = useParams();
  const rawSlug = (params?.slug as string) || "ganesh-sahastra-archan";
  const isKaliPuja = rawSlug.toLowerCase().includes("kali");

  // Dynamic Content Resolution
  const pujaTitle = isKaliPuja
    ? "Maa Dakshina Kali Mahayajna & Shatru Badha Shanti Puja"
    : "1008 Ganesh Sahastra Archana Path Aivam Ketu Shanti Puja";

  const breadcrumbName = isKaliPuja
    ? "Maa Dakshina Kali Mahayajna"
    : "1008 Ganesh Sahastra Archana";

  const pujaLocation = isKaliPuja
    ? "Maa Kali Shaktipeeth, Kalighat"
    : "Chintamani Ganesh, Kashi";

  const pujaDate = isKaliPuja
    ? "Fri · Sep 11, 2026 · Amavasya Visesh"
    : "Wed · Sep 09, 2026 · Budhvar Visesh";

  const pujaBadge = isKaliPuja
    ? "SHAKTIPEETH MAHAYAJNA"
    : "Special Ketu Graha Shanti Remedy";

  const pujaDesc = isKaliPuja
    ? "A sacred Maa Dakshina Kali Chandi Path and Shatru Badha Nivaran Mahayajna performed at Kalighat Shaktipeeth. Protects family from negative energies, evil eye, and bestows divine health & victory."
    : "A sacred 1008-name Ganesh Archana and Ketu Shanti Puja performed at Sri Chintamani Ganesh Mandir, Kashi. Removes life obstacles, financial stress, and bestows peace & career growth.";

  // State for Gallery
  const galleryImages = isKaliPuja
    ? [
        { src: "/Images/Pujas/kali_sanctum_hero.jpg", alt: "Maa Dakshina Kali Sanctum Kalighat" },
        { src: "/Images/Pujas/kali_chandi_path_havan.jpg", alt: "Sacred Chandi Path Havan Yajna" },
        { src: "/Images/Pujas/kali_aarti_darshan.jpg", alt: "Sacred Evening Kali Aarti Darshan" },
        { src: "/Images/Pujas/kalighat_temple_exterior.jpg", alt: "Historic Kalighat Temple Exterior" }
      ]
    : [
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

  const benefitsWithImages = [
    {
      title: "Financial Prosperity",
      desc: "Attract wealth and blessings for overall financial well-being",
      img: "/Images/prasad_thali.jpg"
    },
    {
      title: "Fame & Success",
      desc: "Opens doors to success and popularity in your career pursuits",
      img: "/Images/Hero/kashi-golden-shikhara.jpg"
    },
    {
      title: "Removal of Ketu Dosh",
      desc: "Balance planetary influences to bring peace & clarity",
      img: "/Images/scripture.jpg"
    },
    {
      title: "Career Growth",
      desc: "Remove professional hurdles and open new doors",
      img: "/Images/Hero/ganga-aarti-flame.jpg"
    },
    {
      title: "Business Growth",
      desc: "Attracts financial prosperity for the overall growth of business",
      img: "/Images/panchang.jpg"
    }
  ];

  const stepsWithImages = [
    {
      num: "01",
      title: "Select Puja",
      desc: "Select a puja and bhet daan options",
      img: "/Images/Hero/ganga-aarti-flame.jpg"
    },
    {
      num: "02",
      title: "Pay Dakshina",
      desc: "Securely pay your dakshina using UPI/Card",
      img: "/Images/scripture.jpg"
    },
    {
      num: "03",
      title: "Fill Sankalp Form",
      desc: "Enter offering name(s), gotra & address",
      img: "/Images/Avatars/indian_devotee_1_1788330405371.jpg"
    },
    {
      num: "04",
      title: "Watch Puja Video",
      desc: "Full video with name-gotra on WhatsApp",
      img: "/Images/Hero/devotee-aarti-blessing.jpg"
    },
    {
      num: "05",
      title: "Prasad Delivered",
      desc: "Authentic prasad delivered to your home",
      img: "/Images/prasad_thali.jpg"
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
    <div className="min-h-screen bg-[#FFF9EF] text-[#2C151B] flex flex-col font-sans selection:bg-[#EA5C26]/20 selection:text-[#6D1344]">
      {/* 1. STICKY HEADER */}
      <Header />

      <main className="flex-grow pt-14 sm:pt-16">
        {/* 2. PUJA HERO SECTION */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="pt-2 sm:pt-3 pb-6 sm:pb-8 bg-[#FFF9EF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-[#7A676E] mb-4 font-medium">
              <Link href="/" className="hover:text-[#6D1344] transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 text-[#7A676E]" />
              <Link href="/#discover-pujas" className="hover:text-[#6D1344] transition-colors">Puja Seva</Link>
              <ChevronRight className="w-3 h-3 text-[#7A676E]" />
              <span className="text-[#6D1344] font-bold">{breadcrumbName}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* LEFT COLUMN: Gallery */}
              <div className="lg:col-span-6 space-y-3">
                {/* Main Active Image Frame */}
                <div className="w-full h-80 sm:h-96 lg:h-[440px] rounded-2xl overflow-hidden relative border border-[#E8D8C5] bg-[#2C151B] group shadow-xs">
                  <motion.img
                    key={selectedImgIndex}
                    src={galleryImages[selectedImgIndex].src}
                    alt={galleryImages[selectedImgIndex].alt}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-[#6D1344]/90 text-[#FFF9EF] text-[11px] font-semibold px-3.5 py-1 rounded-full border border-[#FFF9EF]/20">
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
                        selectedImgIndex === idx ? "border-[#EA5C26] opacity-100" : "border-[#E8D8C5] opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* RIGHT COLUMN: Metadata & Quick Participate */}
              <div className="lg:col-span-6 space-y-5">
                <div className="space-y-2.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-block px-3.5 py-1 rounded-full border border-[#EA5C26] text-[#EA5C26] text-[11px] font-semibold uppercase tracking-wider bg-transparent">
                      AUSPICIOUS PUJA SEVA
                    </span>
                    <span className="text-xs font-semibold text-[#7C112F] flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full border border-[#E8D8C5]">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#EA5C26]" />
                      {pujaBadge}
                    </span>
                  </div>

                  <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#6D1344] leading-tight">
                    {pujaTitle}
                  </h1>

                  <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#2C151B] font-medium pt-0.5">
                    <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-xl border border-[#E8D8C5]">
                      <MapPin className="w-4 h-4 text-[#EA5C26]" />
                      <span className="font-medium">{pujaLocation}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-xl border border-[#E8D8C5]">
                      <Calendar className="w-4 h-4 text-[#EA5C26]" />
                      <span className="font-medium">{pujaDate}</span>
                    </div>
                  </div>

                  {/* Rating & Devotee Stats */}
                  <div className="flex items-center gap-3 pt-0.5">
                    <div className="flex items-center gap-1 text-[#FAA531]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FAA531] text-[#FAA531]" />
                      ))}
                      <span className="text-xs font-semibold text-[#6D1344] ml-1">4.8</span>
                    </div>
                    <span className="text-[#E8D8C5]">•</span>
                    <span className="text-xs font-medium text-[#7A676E]">10 Lakh+ Devotees have participated</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#3D262D] font-normal leading-relaxed">
                  {pujaDesc}
                </p>

                {/* Quick Benefit Badges */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  {[
                    { label: "HD Video Proof", icon: Video },
                    { label: "Doorstep Prasad", icon: Package },
                    { label: "Name & Gotra Recited", icon: BookOpen },
                    { label: "100% Refund Assurance", icon: ShieldCheck }
                  ].map((item, idx) => {
                    const IconComp = item.icon;
                    return (
                      <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl border border-[#E8D8C5] bg-white shadow-2xs">
                        <div className="w-7 h-7 rounded-full bg-[#EA5C26] text-white flex items-center justify-center shrink-0 shadow-2xs">
                          <IconComp className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span className="text-xs font-semibold text-[#6D1344]">{item.label}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Primary Hero CTA */}
                <div className="pt-3 flex flex-col sm:flex-row items-center gap-4">
                  <Button
                    onClick={scrollToPackage}
                    className="w-full sm:w-auto bg-[#EA5C26] hover:bg-[#D44B17] text-white font-semibold text-sm min-h-[48px] px-8 rounded-xl shadow-xs transition-colors cursor-pointer"
                  >
                    <span>Participate in Puja</span>
                  </Button>
                  <span className="text-xs font-medium text-[#7A676E]">Dakshina from ₹951 <span className="line-through text-[#7A676E]/60">₹1,051</span></span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 3. PARTICIPATION / PACKAGE SELECTOR */}
        <motion.section id="package-selector" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.5 }} className="py-12 sm:py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-2">
              <span className="inline-block px-3.5 py-1 rounded-full border border-[#EA5C26] text-[#EA5C26] text-[11px] font-semibold uppercase tracking-wider bg-transparent">
                SEVA OPTIONS
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#6D1344]">
                Choose Your Seva Participation
              </h2>
              <p className="text-xs sm:text-sm text-[#7A676E] font-normal">
                Select the number of family members for Vedic Naam-Gotra Sankalp & Prasad delivery.
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
                        ? "border-[#EA5C26] ring-2 ring-[#EA5C26]/20 shadow-md"
                        : "border-[#E8D8C5] hover:border-[#EA5C26]/40"
                    }`}
                  >
                    <div>
                      {/* HEADER SECTION WITH ENLARGED PRIMARY IMAGE & REDUCED CORNER RADIUS */}
                      <div className="relative p-4 bg-[#FAF4EC] min-h-[135px] flex items-center justify-between border-b border-[#E8D8C5]/50 overflow-hidden rounded-t-lg">
                        {/* Golden Mandala Background SVG Motif */}
                        <div className="absolute -top-6 -right-6 w-40 h-40 opacity-15 pointer-events-none">
                          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[#C85B12]" strokeWidth="0.8">
                            <circle cx="50" cy="50" r="45" />
                            <circle cx="50" cy="50" r="32" />
                            <circle cx="50" cy="50" r="18" />
                            <path d="M50 5 L50 95 M5 50 L95 50 M18 18 L82 82 M18 82 L82 18" />
                          </svg>
                        </div>

                        {/* Left Metadata: Title, Subtitle, Price & Badge */}
                        <div className="relative z-10 space-y-1 pr-2 flex-1 min-w-0">
                          <h3 className="font-heading text-sm sm:text-base font-semibold text-[#6D1344] leading-tight truncate">
                            {pkg.title}
                          </h3>
                          <p className="text-xs text-[#7A676E] font-medium">{pkg.devotees}</p>
                          <div className="flex flex-wrap items-center gap-1.5 pt-1">
                            <span className="text-base font-bold text-[#6D1344]">₹{pkg.price.toLocaleString("en-IN")}</span>
                            {pkg.badge && (
                              <span
                                className={`text-[10px] font-bold px-2 py-0.5 rounded-md text-white ${
                                  pkg.badge === "Most Chosen" ? "bg-[#EA5C26]" : "bg-[#10B981]"
                                }`}
                              >
                                {pkg.badge}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Top-Right PRIMARY ENLARGED IMAGE CONTAINER */}
                        <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-lg overflow-hidden border border-[#E8D8C5] bg-white shadow-2xs">
                          <img
                            src={pkg.img}
                            alt={pkg.title}
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>

                      {/* CARD BODY WITH GREEN CHECKMARKS */}
                      <div className="p-4 space-y-3">
                        <ul className="space-y-2 text-xs text-[#2C151B] font-normal leading-tight">
                          {pkg.features.map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-[#10B981] shrink-0 font-bold text-xs mt-0.5">✓</span>
                              <span className="text-[#3D262D]">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* FOOTER CTA BUTTON WITH REDUCED CORNER RADIUS */}
                    <div className="p-4 pt-0">
                      <Button
                        className={`w-full text-xs font-semibold h-10 rounded-lg cursor-pointer transition-all duration-300 ${
                          isSelected
                            ? "bg-[#FF6B50] hover:bg-[#EA5C26] text-white shadow-xs"
                            : "bg-[#FF6B50] hover:bg-[#EA5C26] text-white"
                        }`}
                      >
                        <span>Book Now</span>
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Sankalp Details Form */}
            <div className="bg-white rounded-lg p-6 sm:p-8 border border-[#E8D8C5] shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1 border-b border-[#E8D8C5]/60">
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#6D1344]">
                    Enter Sankalp Details
                  </h3>
                  <p className="text-xs text-[#7A676E] font-normal pt-0.5">
                    Selected Seva: <span className="font-bold text-[#EA5C26]">{packages[selectedPackage].title} ({packages[selectedPackage].devotees})</span>
                  </p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-[#6D1344] w-max border border-[#E8D8C5]">
                  Guided Step 2 of 4
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#6D1344] block">
                    Devotee Name(s) <span className="text-[#EA5C26]">*</span>
                  </label>
                  <input
                    type="text"
                    value={devoteeNames}
                    onChange={(e) => setDevoteeNames(e.target.value)}
                    placeholder="e.g. Ramesh Kumar, Sunita Kumar"
                    className="w-full px-4 py-3 rounded-xl border border-[#E8D8C5] text-sm bg-slate-50 text-[#2C151B] focus:bg-white focus:outline-none focus:border-[#EA5C26] min-h-[44px] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#6D1344] block">
                    Family Gotra <span className="text-[#7A676E] font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={devoteeGotra}
                    onChange={(e) => setDevoteeGotra(e.target.value)}
                    placeholder="e.g. Kashyap / Vatsa (Leave blank if unknown)"
                    className="w-full px-4 py-3 rounded-xl border border-[#E8D8C5] text-sm bg-slate-50 text-[#2C151B] focus:bg-white focus:outline-none focus:border-[#EA5C26] min-h-[44px] transition-colors"
                  />
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left space-y-0.5">
                  <span className="text-xs text-[#7A676E] font-semibold block">Total Seva Dakshina</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-[#7A676E]/60 line-through font-medium">₹{packages[selectedPackage].originalPrice}</span>
                    <span className="text-2xl font-bold text-[#6D1344]">₹{packages[selectedPackage].price}</span>
                  </div>
                </div>

                <Button className="w-full sm:w-auto bg-[#EA5C26] hover:bg-[#D44B17] text-white font-bold text-sm min-h-[48px] px-8 rounded-xl shadow-xs transition-colors cursor-pointer">
                  <span>Participate in Puja →</span>
                </Button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 4. WHAT YOU RECEIVE */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.5 }} className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-2">
              <span className="inline-block px-3.5 py-1 rounded-full border border-[#EA5C26] text-[#EA5C26] text-[11px] font-bold uppercase tracking-wider bg-transparent">
                EVERY SEVA INCLUDES
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#6D1344]">
                What You Receive With Your Participation
              </h2>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {inclusions.map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-[#E8D8C5] shadow-2xs group flex flex-col justify-between hover:shadow-xs transition-all duration-300">
                  <div className="space-y-3.5">
                    <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <span className="absolute top-2.5 right-2.5 bg-white/95 text-[#6D1344] text-[10px] font-bold uppercase px-2.5 py-1 rounded-full shadow-xs">
                        {item.tag}
                      </span>
                    </div>

                    <div className="p-4 pt-1 space-y-1.5">
                      <h4 className="font-heading text-sm font-bold text-[#6D1344] leading-snug">{item.title}</h4>
                      <p className="text-xs text-[#7A676E] font-normal leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* 5. UTSAV PROMISE BANNER MATCHING REFERENCE */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.5 }} className="py-8 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-[#EAF5EC] border border-[#C8E6C9] rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden shadow-2xs">
              
              {/* Background Mandala Watermark SVG */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-15 pointer-events-none transform translate-x-16">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[#1B5E20]" strokeWidth="0.8">
                  <circle cx="50" cy="50" r="45" />
                  <circle cx="50" cy="50" r="32" />
                  <circle cx="50" cy="50" r="18" />
                  <path d="M50 5 L50 95 M5 50 L95 50 M18 18 L82 82 M18 82 L82 18" />
                </svg>
              </div>

              {/* Left: Shield Icon + Title */}
              <div className="flex items-center gap-3.5 shrink-0 z-10">
                <div className="w-11 h-11 rounded-full bg-[#C8E6C9]/80 text-[#1B5E20] flex items-center justify-center border border-[#A5D6A7] shadow-2xs">
                  <ShieldCheck className="w-5.5 h-5.5 stroke-[2.2]" />
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-[#1B5E20] tracking-tight">
                  Utsav Promise
                </h3>
              </div>

              {/* Center: Guarantee Copy + Pill Badges */}
              <div className="space-y-3 text-center md:text-left z-10 flex-1 max-w-2xl">
                <p className="text-xs sm:text-sm text-[#2E7D32] font-medium leading-relaxed">
                  If puja is not performed, or video is not delivered — we assure you a 100% refund. No questions asked.
                </p>

                {/* Pill Badges */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
                  <span className="inline-flex items-center gap-1.5 bg-white px-3.5 py-1 rounded-full border border-[#C8E6C9] text-xs font-semibold text-[#1B5E20] shadow-2xs">
                    <span className="text-[#10B981] font-bold text-xs">✓</span> 100% Refund
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white px-3.5 py-1 rounded-full border border-[#C8E6C9] text-xs font-semibold text-[#1B5E20] shadow-2xs">
                    <span className="text-[#10B981] font-bold text-xs">✓</span> Guaranteed Video
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white px-3.5 py-1 rounded-full border border-[#C8E6C9] text-xs font-semibold text-[#1B5E20] shadow-2xs">
                    <span className="text-[#10B981] font-bold text-xs">✓</span> No Questions Asked
                  </span>
                </div>
              </div>

            </div>
          </div>
        </motion.section>

        {/* 6. ABOUT THE PUJA, MANDIR & BHAGWAN */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.5 }} className="py-12 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="space-y-2">
              <span className="inline-block px-3.5 py-1 rounded-full border border-[#EA5C26] text-[#EA5C26] text-[11px] font-bold uppercase tracking-wider bg-transparent">
                SCRIPTURAL CONTEXT
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#6D1344]">
                About - Puja, Mandir & Bhagwan
              </h2>
            </div>

            <div className="prose prose-slate max-w-none text-xs sm:text-sm text-[#2C151B] leading-relaxed space-y-4 font-normal">
              <p>
                This powerful Visesh 1008 Ganesh Sahasra Archana Path & Sankalp Puja is performed at the sacred Sri Chintamani Ganesh Mandir in Kashi, the divine abode of Chintamani Vinayak — the remover of worries, fulfiller of desires, and the bestower of clarity, stability, and auspiciousness.
              </p>

              <p>
                This anushthan involves the chanting of 1,008 sacred names of Bhagwan Ganesh, each carrying a unique vibration that removes obstacles, attracts wisdom, and purifies deep-rooted karmic blocks. Devotees seeking solutions for long-standing problems, clarity in decisions, peace of mind, career growth, relationship harmony, or protection from negativity are highly advised to perform this puja.
              </p>

              {isReadMoreOpen && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 pt-4 border-t border-[#E8D8C5]">
                  <div className="space-y-2">
                    <h3 className="font-heading text-base font-bold text-[#6D1344]">About the Deity: Swayambhu Swetark Ganesha</h3>
                    <p>The deity worshipped in this puja is a very rare form called Swetark Ganesha.</p>
                    <ul className="list-disc pl-5 space-y-1 text-[#7A676E]">
                      <li><strong>Self-Manifested:</strong> This idol is not made by human hands; it appears naturally in the root of the Aak (Madar) plant after years of growth.</li>
                      <li><strong>The Master of Ketu:</strong> Lord Ganesha is the only deity who can control Ketu. Worshipping this "Swetark" form converts Ketu's destructive energy into spiritual strength and success.</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-heading text-base font-bold text-[#6D1344]">About the Temple: Chintamani Ganesh Mandir, Kashi</h3>
                    <p>This special Ketu Shanti Puja involves the 1008 Ganesh Sahasra Archana Path and is performed at the Chintamani Ganesh Mandir in Kashi.</p>
                    <ul className="list-disc pl-5 space-y-1 text-[#7A676E]">
                      <li><strong>The Ritual:</strong> On Wednesday, priests will offer 108 White Madar flowers into the sacred Havan fire.</li>
                      <li><strong>The Result:</strong> This specific offering is believed to calm Ketu immediately, turning your struggles into Career Growth, Fame, and Wealth.</li>
                    </ul>
                  </div>

                  <p className="font-bold text-[#6D1344]">
                    Don't let anxiety and invisible obstacles hold you back. Perform this powerful remedy to pacify Ketu and open your path to victory. Book this puja via the Utsav App now.
                  </p>
                </motion.div>
              )}

              <button
                onClick={() => setIsReadMoreOpen(!isReadMoreOpen)}
                className="text-xs font-bold text-[#EA5C26] hover:underline flex items-center gap-1 pt-2 cursor-pointer"
              >
                <span>{isReadMoreOpen ? "Show Less ↑" : "Show More Details About Deity & Temple ↓"}</span>
              </button>
            </div>
          </div>
        </motion.section>

        {/* 7. PUJA PERFORMED BY */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.5 }} className="py-12 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8D8C5] shadow-xs flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
              <img
                src="/Images/Hero/devotee-aarti-blessing.jpg"
                alt="Challa Abhiram S. Vedic Acharya"
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover shrink-0 border border-[#E8D8C5]"
              />
              <div className="space-y-3 text-center md:text-left flex-1">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                    <h3 className="font-heading text-xl font-bold text-[#6D1344]">Challa Abhiram S.</h3>
                    <span className="bg-slate-50 text-[#6D1344] text-[10px] font-bold px-3 py-1 rounded-full border border-[#E8D8C5] flex items-center gap-1">
                      <UserCheck className="w-3 h-3 text-[#EA5C26]" /> VERIFIED on Utsav since 2023
                    </span>
                  </div>
                  <p className="text-xs font-bold text-[#EA5C26]">Vedic Acharya · Varanasi</p>
                </div>

                <p className="text-xs text-[#7A676E] leading-relaxed font-normal">
                  Authorised Pandit at Chintamani Ganesh Mandir, Kashi. Senior Vedic Scholar with over 10 years of sacred ritual practice.
                </p>

                <div className="pt-1 flex flex-wrap justify-center md:justify-start gap-4 text-xs font-bold text-[#6D1344]">
                  <span className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-[#EA5C26]" /> 9,921+ Pujas Performed
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#EA5C26]" /> 10+ Years of Practice
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 8. WHY PERFORM THIS PUJA? */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.5 }} className="py-12 sm:py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-2">
              <span className="inline-block px-3.5 py-1 rounded-full border border-[#EA5C26] text-[#EA5C26] text-[11px] font-bold uppercase tracking-wider bg-transparent">
                BENEFITS
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#6D1344]">
                Why Perform This Puja?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {benefitsWithImages.map((item, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden border border-[#E8D8C5] bg-white shadow-2xs group flex flex-col justify-between hover:shadow-xs transition-all duration-300">
                  <div className="space-y-3">
                    <div className="relative h-32 w-full overflow-hidden bg-slate-100">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <span className="absolute top-2.5 left-2.5 bg-[#6D1344] text-white text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full">
                        0{idx + 1}
                      </span>
                    </div>

                    <div className="p-4 pt-1 space-y-1">
                      <h4 className="font-heading text-xs sm:text-sm font-bold text-[#6D1344] leading-snug">{item.title}</h4>
                      <p className="text-[11px] text-[#7A676E] font-normal leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* 9. HOW TO PARTICIPATE */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.5 }} className="py-12 sm:py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-2">
              <span className="inline-block px-3.5 py-1 rounded-full border border-[#EA5C26] text-[#EA5C26] text-[11px] font-bold uppercase tracking-wider bg-transparent">
                GUIDED STEPS
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#6D1344]">
                How to Participate in Puja
              </h2>
              <p className="text-xs sm:text-sm text-[#7A676E] font-normal">
                A simple 5-step guided journey to seek blessings
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {stepsWithImages.map((step, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden border border-[#E8D8C5] bg-white shadow-2xs group flex flex-col justify-between hover:shadow-xs transition-all duration-300">
                  <div className="space-y-3">
                    <div className="relative h-32 w-full overflow-hidden bg-[#F6E1C6]/30">
                      <img
                        src={step.img}
                        alt={step.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <span className="absolute top-2.5 left-2.5 bg-[#EA5C26] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                        {step.num}
                      </span>
                    </div>

                    <div className="p-4 pt-1 space-y-1">
                      <h4 className="font-heading text-xs sm:text-sm font-bold text-[#6D1344] leading-snug">{step.title}</h4>
                      <p className="text-[11px] text-[#7A676E] font-normal leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* 10. DEVOTEE REVIEWS */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.5 }} className="py-12 sm:py-16 bg-[#FFF9EF]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-2">
              <span className="inline-block px-3.5 py-1 rounded-full border border-[#EA5C26] text-[#EA5C26] text-[11px] font-bold uppercase tracking-wider bg-transparent">
                REAL DEVOTEE REVIEWS
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#6D1344]">
                4.8★ Rated by 10 Lakh+ Devotees
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {userReviews.map((rev, idx) => (
                <div key={idx} className="p-6 rounded-2xl border border-[#E8D8C5] bg-white shadow-2xs flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-2xl font-serif text-[#EA5C26]/40 font-bold leading-none block mb-2 select-none">
                      “
                    </span>
                    <p className="font-heading text-xs sm:text-sm font-medium text-[#2C151B] leading-relaxed">
                      {rev.quote}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-3">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="w-10 h-10 rounded-full object-cover shrink-0 border border-[#E8D8C5]"
                    />
                    <div className="space-y-0.5">
                      <h4 className="font-heading text-xs font-bold text-[#6D1344] leading-tight">
                        {rev.name}
                      </h4>
                      <span className="text-[11px] text-[#7A676E] font-medium block">
                        {rev.location} • {rev.time}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* 11. FREQUENTLY ASKED QUESTIONS */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.5 }} className="py-12 sm:py-16 bg-[#FFF9EF]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-3">
              <span className="inline-block px-3.5 py-1.5 rounded-full border border-[#E8D8C5] text-[#6D1344] text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-transparent">
                Frequently Asked Questions
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#6D1344] tracking-tight">
                Puja <span className="text-[#EA5C26]">FAQ</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#7A676E] font-normal max-w-lg mx-auto">
                Got questions about booking, video proof or doorstep prasad? We've got answers.
              </p>
            </div>

            {/* Accordion List */}
            <div className="space-y-3">
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
          </div>
        </motion.section>
      </main>

      {/* 12. MOBILE STICKY BOTTOM BOOKING BAR */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 inset-x-0 bg-[#FFF9EF]/95 backdrop-blur-md border-t border-[#E8D8C5] py-3.5 px-4 sm:px-8 z-50 shadow-lg flex items-center justify-between"
          >
            <div className="space-y-0.5">
              <h4 className="font-heading text-xs sm:text-sm font-bold text-[#6D1344] line-clamp-1">
                1008 Ganesh Sahastra Archana
              </h4>
              <p className="text-[11px] text-[#EA5C26] font-bold">Chintamani Ganesh, Kashi • ₹951 onwards</p>
            </div>

            <Button
              onClick={scrollToPackage}
              className="bg-[#EA5C26] hover:bg-[#D44B17] text-white font-bold text-xs sm:text-sm min-h-[44px] px-6 rounded-xl shadow-xs transition-colors shrink-0 cursor-pointer"
            >
              <span>Participate</span>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
