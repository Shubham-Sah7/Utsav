"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Calendar,
  Star,
  ShieldCheck,
  Video,
  Package,
  BookOpen,
  ChevronRight,
  ChevronDown,
  User,
  Globe,
  Download,
  CheckCircle2
} from "lucide-react";

export default function DesignSystemPage() {
  const [activeTab, setActiveTab] = useState<"foundations" | "components" | "commerce" | "trust" | "mobile">("foundations");
  const [faqOpen, setFaqOpen] = useState(true);
  const [selectedPkg, setSelectedPkg] = useState<number>(1);
  const [mobileViewportWidth, setMobileViewportWidth] = useState<number>(375);

  return (
    <div className="min-h-screen bg-[#FFF9EF] text-[#2C151B] flex flex-col font-sans selection:bg-[#EA5C26]/20 selection:text-[#6D1344]">
      {/* HEADER */}
      <Header />

      <main className="flex-grow pt-14 sm:pt-16 max-w-full overflow-x-hidden">
        {/* DESIGN SYSTEM HERO BANNER */}
        <section className="bg-white border-b border-[#E8D8C5] py-10 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-[#EA5C26] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                UTSAV PRODUCT SPECIFICATION
              </span>
              <span className="bg-slate-100 text-[#6D1344] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#E8D8C5]">
                v1.0 Design System
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-1.5 max-w-3xl">
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#6D1344] tracking-tight">
                  Utsav Design System
                </h1>
                <p className="text-xs sm:text-sm text-[#7A676E] font-normal leading-relaxed">
                  Derived directly from the Utsav Home Page & Puja Landing SKU experience. Formalizes reusable tokens, components, variants, auto layout structures, and mobile-first guidelines with Devanagari Hindi support.
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <Button asChild variant="outline" className="text-xs font-semibold h-10 px-4 rounded-lg border-[#E8D8C5]">
                  <Link href="/puja/ganesh-sahastra-archan">View Live SKU Page →</Link>
                </Button>
              </div>
            </div>

            {/* CATEGORY TABS */}
            <div className="flex items-center gap-2 pt-4 overflow-x-auto no-scrollbar border-t border-slate-100 mt-6">
              {[
                { id: "foundations", label: "01 Foundations" },
                { id: "components", label: "02 Components" },
                { id: "commerce", label: "03 Commerce" },
                { id: "trust", label: "04 Trust & Content" },
                { id: "mobile", label: "05 Mobile Foundation" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-[#6D1344] text-white shadow-2xs"
                      : "bg-slate-100 text-[#7A676E] hover:text-[#6D1344] hover:bg-slate-200/60"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* CONTENT SECTIONS */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
          {/* ==========================================
              01 FOUNDATIONS SECTION
             ========================================== */}
          {(activeTab === "foundations" || activeTab === undefined) && (
            <section className="space-y-12">
              <div className="space-y-2 border-b border-[#E8D8C5] pb-4">
                <span className="text-[#EA5C26] text-xs font-mono font-bold tracking-wider uppercase">Section 01</span>
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#6D1344]">Foundations</h2>
                <p className="text-xs sm:text-sm text-[#7A676E]">Color palette tokens, semantic mapping, typography scale, spacing grid, and corner radius definitions.</p>
              </div>

              {/* COLORS */}
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-lg font-semibold text-[#6D1344]">1. Color Tokens & Semantic Variables</h3>
                  <span className="text-xs text-[#7A676E]">Strict palette — No ad-hoc hex codes</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                  {[
                    { name: "Primary Orange", varName: "color.brand.primary", hex: "#EA5C26", textLight: true, note: "Main CTAs, price text, active tabs" },
                    { name: "Deep Maroon", varName: "color.brand.secondary", hex: "#6D1344", textLight: true, note: "Primary headings, brand accent" },
                    { name: "Wine / Crimson", varName: "color.brand.wine", hex: "#7C112F", textLight: true, note: "Urgency badges, shanti indicators" },
                    { name: "Marigold / Amber", varName: "color.brand.amber", hex: "#FAA531", textLight: false, note: "Star ratings, warm highlights" },
                    { name: "Cream", varName: "color.background.primary", hex: "#FFF9EF", textLight: false, note: "Devotional page background" },
                    { name: "Sand / Beige", varName: "color.background.sand", hex: "#F6E1C6", textLight: false, note: "Subdued container fills, step badges" }
                  ].map((col) => (
                    <div key={col.hex} className="bg-white rounded-lg p-3 border border-[#E8D8C5] shadow-2xs space-y-3">
                      <div className="h-16 w-full rounded-md shadow-inner flex items-end p-2" style={{ backgroundColor: col.hex }}>
                        <span className={`text-[10px] font-mono font-bold ${col.textLight ? "text-white" : "text-slate-900"}`}>{col.hex}</span>
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="font-heading text-xs font-semibold text-[#6D1344]">{col.name}</h4>
                        <code className="text-[10px] text-[#EA5C26] block">{col.varName}</code>
                        <p className="text-[10px] text-[#7A676E] leading-tight pt-1">{col.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* TYPOGRAPHY */}
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-lg font-semibold text-[#6D1344]">2. Typography Hierarchy (English & Devanagari Hindi)</h3>
                  <span className="text-xs text-[#7A676E]">Poppins (Headings) + Quicksand (Body/UI)</span>
                </div>

                <div className="bg-white rounded-lg p-6 border border-[#E8D8C5] shadow-2xs space-y-6">
                  <div className="space-y-4 divide-y divide-slate-100">
                    <div className="pt-2 flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <span className="text-xs font-mono font-semibold text-[#EA5C26] w-32 shrink-0">Display (60/36px)</span>
                      <div className="flex-1 space-y-1">
                        <p className="font-heading text-2xl sm:text-4xl font-semibold text-[#6D1344] leading-tight">Be part of your temple, wherever you are.</p>
                        <p className="font-heading text-xl sm:text-2xl font-semibold text-[#EA5C26]">१०0८ गणेश सहस्र अर्चना एवं केतु शांति पूजा</p>
                      </div>
                    </div>

                    <div className="pt-4 flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <span className="text-xs font-mono font-semibold text-[#EA5C26] w-32 shrink-0">H1 (36/24px)</span>
                      <div className="flex-1 space-y-1">
                        <p className="font-heading text-xl sm:text-2xl font-semibold text-[#6D1344]">1008 Ganesh Sahastra Archana Path Aivam Ketu Shanti Puja</p>
                        <p className="font-heading text-lg sm:text-xl font-semibold text-[#6D1344]">मां दक्षिणा काली महायज्ञ एवं शत्रु बाधा शांति</p>
                      </div>
                    </div>

                    <div className="pt-4 flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <span className="text-xs font-mono font-semibold text-[#EA5C26] w-32 shrink-0">H2 (28/20px)</span>
                      <p className="font-heading text-lg sm:text-xl font-semibold text-[#6D1344] flex-1">Upcoming Sacred Temple Pujas</p>
                    </div>

                    <div className="pt-4 flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <span className="text-xs font-mono font-semibold text-[#EA5C26] w-32 shrink-0">Body (14/13px)</span>
                      <p className="text-xs sm:text-sm text-[#3D262D] font-normal leading-relaxed flex-1">
                        A sacred 1008-name Ganesh Archana and Ketu Shanti Puja performed at Sri Chintamani Ganesh Mandir, Kashi. Removes life obstacles, financial stress, and bestows peace & career growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SPACING & RADIUS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* SPACING GRID */}
                <div className="bg-white rounded-lg p-5 border border-[#E8D8C5] shadow-2xs space-y-4">
                  <h3 className="font-heading text-base font-semibold text-[#6D1344]">3. Spacing Scale Grid (Base 4px)</h3>
                  <div className="space-y-2">
                    {[
                      { token: "spacing.4", px: 4 },
                      { token: "spacing.8", px: 8 },
                      { token: "spacing.12", px: 12 },
                      { token: "spacing.16", px: 16 },
                      { token: "spacing.24", px: 24 },
                      { token: "spacing.32", px: 32 },
                      { token: "spacing.48", px: 48 }
                    ].map((sp) => (
                      <div key={sp.token} className="flex items-center gap-3 text-xs">
                        <span className="font-mono text-[#7A676E] w-24">{sp.token}</span>
                        <div className="bg-[#EA5C26] h-4 rounded-xs" style={{ width: `${sp.px * 3}px` }} />
                        <span className="font-mono text-[10px] text-slate-500">{sp.px}px</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CORNER RADIUS */}
                <div className="bg-white rounded-lg p-5 border border-[#E8D8C5] shadow-2xs space-y-4">
                  <h3 className="font-heading text-base font-semibold text-[#6D1344]">4. Reusable Corner Radius Tokens</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { token: "radius.sm", val: "rounded-xs (4px)", class: "rounded-xs" },
                      { token: "radius.md", val: "rounded-md (6px)", class: "rounded-md" },
                      { token: "radius.lg", val: "rounded-lg (8px)", class: "rounded-lg" },
                      { token: "radius.xl", val: "rounded-xl (12px)", class: "rounded-xl" },
                      { token: "radius.pill", val: "rounded-full (9999px)", class: "rounded-full" }
                    ].map((rad) => (
                      <div key={rad.token} className={`p-4 border-2 border-[#EA5C26]/40 bg-[#FFF9EF] flex flex-col items-center justify-center text-center ${rad.class}`}>
                        <span className="text-xs font-bold text-[#6D1344]">{rad.token}</span>
                        <span className="text-[10px] text-[#7A676E]">{rad.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ==========================================
              02 COMPONENTS SECTION
             ========================================== */}
          {(activeTab === "components" || activeTab === undefined) && (
            <section className="space-y-12">
              <div className="space-y-2 border-b border-[#E8D8C5] pb-4">
                <span className="text-[#EA5C26] text-xs font-mono font-bold tracking-wider uppercase">Section 02</span>
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#6D1344]">Core UI Components</h2>
                <p className="text-xs sm:text-sm text-[#7A676E]">Buttons, badge pills, form inputs, navigation items, and stroke-consistent icons.</p>
              </div>

              {/* BUTTON VARIANTS & STATES */}
              <div className="bg-white rounded-lg p-6 border border-[#E8D8C5] shadow-2xs space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="font-heading text-base font-semibold text-[#6D1344]">1. Button Component Variants & Touch Targets (min 44px)</h3>
                  <span className="text-xs text-[#7A676E]">Variants: Primary, Secondary, Ghost, Text</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {/* Primary */}
                  <div className="space-y-3">
                    <span className="text-xs font-mono font-semibold text-[#EA5C26]">Button / Primary</span>
                    <Button className="w-full bg-[#EA5C26] hover:bg-[#D44B17] text-white font-semibold text-xs h-11 min-h-[44px] rounded-lg">
                      <span>Participate in Puja</span>
                    </Button>
                    <Button disabled className="w-full bg-[#EA5C26]/50 text-white font-semibold text-xs h-11 min-h-[44px] rounded-lg">
                      <span>Disabled State</span>
                    </Button>
                  </div>

                  {/* Secondary */}
                  <div className="space-y-3">
                    <span className="text-xs font-mono font-semibold text-[#EA5C26]">Button / Secondary</span>
                    <Button className="w-full bg-[#FF6B50] hover:bg-[#EA5C26] text-white font-semibold text-xs h-11 min-h-[44px] rounded-lg">
                      <span>Book Now</span>
                    </Button>
                    <Button variant="outline" className="w-full border-[#6D1344]/30 text-[#6D1344] font-semibold text-xs h-11 min-h-[44px] rounded-lg">
                      <span>Download App</span>
                    </Button>
                  </div>

                  {/* Ghost */}
                  <div className="space-y-3">
                    <span className="text-xs font-mono font-semibold text-[#EA5C26]">Button / Ghost</span>
                    <Button variant="ghost" className="w-full text-[#6D1344] hover:bg-slate-100 font-semibold text-xs h-11 min-h-[44px] rounded-lg border border-slate-200/60">
                      <span>Select Puja</span>
                    </Button>
                  </div>

                  {/* Text */}
                  <div className="space-y-3">
                    <span className="text-xs font-mono font-semibold text-[#EA5C26]">Button / Text Link</span>
                    <button className="text-xs font-semibold text-[#EA5C26] hover:underline flex items-center gap-1 min-h-[44px]">
                      <span>Read Full Details →</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* BADGES / PILLS */}
              <div className="bg-white rounded-lg p-6 border border-[#E8D8C5] shadow-2xs space-y-5">
                <h3 className="font-heading text-base font-semibold text-[#6D1344]">2. Badge & Pill Component (English & Hindi String Support)</h3>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-block px-3.5 py-1 rounded-full border border-[#EA5C26] text-[#EA5C26] text-[11px] font-semibold uppercase tracking-wider bg-transparent">
                    Badge / Category: AUSPICIOUS PUJA SEVA
                  </span>
                  <span className="inline-block px-3.5 py-1 rounded-full border border-[#6D1344] text-[#6D1344] text-[11px] font-semibold uppercase tracking-wider bg-slate-50">
                    Badge / Special: Special Ketu Graha Shanti Remedy
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full border border-[#E8D8C5] text-xs text-[#2C151B] font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#EA5C26]" /> Badge / Temple: Chintamani Ganesh, Kashi
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full border border-[#E8D8C5] text-xs text-[#2C151B] font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#EA5C26]" /> Badge / Date: Wed · Sep 09, 2026
                  </span>
                  <span className="inline-flex items-center gap-1 bg-[#10B981]/10 text-[#10B981] text-[11px] font-bold px-3 py-1 rounded-full border border-[#10B981]/30">
                    <CheckCircle2 className="w-3.5 h-3.5" /> VERIFIED on Utsav
                  </span>
                </div>
              </div>

              {/* ICON SYSTEM */}
              <div className="bg-white rounded-lg p-6 border border-[#E8D8C5] shadow-2xs space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-base font-semibold text-[#6D1344]">3. Icon System (2px Consistent Stroke Weight)</h3>
                  <span className="text-xs text-[#7A676E]">Lucide-React icons scaled to 16px/20px/24px</span>
                </div>

                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-11 gap-4 text-center">
                  {[
                    { icon: MapPin, label: "Location" },
                    { icon: Calendar, label: "Calendar" },
                    { icon: Star, label: "Rating" },
                    { icon: Video, label: "Video Proof" },
                    { icon: Package, label: "Prasad" },
                    { icon: BookOpen, label: "Sankalp" },
                    { icon: ShieldCheck, label: "Refund" },
                    { icon: ChevronRight, label: "Chevron" },
                    { icon: User, label: "User" },
                    { icon: Globe, label: "Language" },
                    { icon: Download, label: "App" }
                  ].map((ic) => {
                    const IconC = ic.icon;
                    return (
                      <div key={ic.label} className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex flex-col items-center gap-1.5">
                        <IconC className="w-5 h-5 text-[#EA5C26] stroke-[2]" />
                        <span className="text-[10px] text-[#7A676E] font-medium">{ic.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          )}

          {/* ==========================================
              03 COMMERCE SECTION
             ========================================== */}
          {(activeTab === "commerce" || activeTab === undefined) && (
            <section className="space-y-12">
              <div className="space-y-2 border-b border-[#E8D8C5] pb-4">
                <span className="text-[#EA5C26] text-xs font-mono font-bold tracking-wider uppercase">Section 03</span>
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#6D1344]">Commerce Components</h2>
                <p className="text-xs sm:text-sm text-[#7A676E]">Puja cards, participation package cards, and pricing booking CTAs.</p>
              </div>

              {/* PUJA CARD COMPONENT */}
              <div className="space-y-4">
                <h3 className="font-heading text-lg font-semibold text-[#6D1344]">1. Puja Card Component (`Card / Puja`)</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Default Puja Card */}
                  <div className="bg-white rounded-lg p-4 flex flex-col justify-between border border-[#E8D8C5] shadow-2xs space-y-3">
                    <div className="space-y-3">
                      <div className="relative h-48 w-full rounded-md overflow-hidden bg-slate-100">
                        <img src="/Images/panchang.jpg" alt="Puja" className="w-full h-full object-cover" />
                        <span className="absolute top-2.5 left-2.5 bg-[#6D1344] text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-full">
                          Ketu Shanti
                        </span>
                      </div>
                      <h4 className="font-heading text-base font-semibold text-[#6D1344]">1008 Ganesh Sahastra Archana Path</h4>
                      <p className="text-xs text-[#7A676E]">Chintamani Ganesh, Kashi • Sep 09, 2026</p>
                    </div>
                    <div className="pt-2 flex items-center justify-between">
                      <span className="font-heading text-base font-semibold text-[#6D1344]">Starting ₹951</span>
                      <Button size="sm" className="bg-[#EA5C26] text-white font-semibold text-xs h-10 px-4 rounded-lg">
                        Participate →
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* PARTICIPATION PACKAGE CARDS */}
              <div className="space-y-4">
                <h3 className="font-heading text-lg font-semibold text-[#6D1344]">2. Participation Package Card (`Card / Package`)</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {[
                    { id: 0, title: "Individual Puja", devs: "1 Devotee", price: 951, badge: null, selected: false },
                    { id: 1, title: "Partner Puja", devs: "Upto 2 Devotees", price: 1201, badge: "Most Chosen", selected: true },
                    { id: 2, title: "Family Puja", devs: "Upto 4 Devotees", price: 1601, badge: "Best Value", selected: false },
                    { id: 3, title: "Joint Family Puja", devs: "Upto 6 Devotees", price: 2001, badge: null, selected: false }
                  ].map((pkg) => (
                    <div
                      key={pkg.id}
                      onClick={() => setSelectedPkg(pkg.id)}
                      className={`rounded-lg overflow-hidden border transition-all cursor-pointer bg-white p-4 space-y-4 ${
                        selectedPkg === pkg.id ? "border-[#EA5C26] ring-2 ring-[#EA5C26]/20 shadow-md" : "border-[#E8D8C5]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-heading text-sm font-semibold text-[#6D1344]">{pkg.title}</h4>
                        {pkg.badge && (
                          <span className="bg-[#EA5C26] text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                            {pkg.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#7A676E]">{pkg.devs}</p>
                      <span className="font-heading text-lg font-bold text-[#6D1344] block">₹{pkg.price}</span>
                      <Button className={`w-full text-xs font-semibold h-10 rounded-lg ${selectedPkg === pkg.id ? "bg-[#FF6B50] text-white" : "bg-slate-100 text-slate-700"}`}>
                        {selectedPkg === pkg.id ? "Selected" : "Book Now"}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* ==========================================
              04 TRUST & CONTENT SECTION
             ========================================== */}
          {(activeTab === "trust" || activeTab === undefined) && (
            <section className="space-y-12">
              <div className="space-y-2 border-b border-[#E8D8C5] pb-4">
                <span className="text-[#EA5C26] text-xs font-mono font-bold tracking-wider uppercase">Section 04</span>
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#6D1344]">Trust & Content Components</h2>
                <p className="text-xs sm:text-sm text-[#7A676E]">Benefit cards, devotee testimonials, FAQ accordions, and Pandit profile modules.</p>
              </div>

              {/* BENEFIT CARD */}
              <div className="space-y-4">
                <h3 className="font-heading text-lg font-semibold text-[#6D1344]">1. Benefit Card Component (`Card / Benefit`)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { title: "Financial Prosperity", desc: "Attract wealth and blessings for financial well-being", img: "/Images/Benefits/financial_prosperity.jpg" },
                    { title: "Fame & Success", desc: "Opens doors to success and popularity in career", img: "/Images/Benefits/fame_success.jpg" },
                    { title: "Removal of Ketu Dosh", desc: "Balance planetary influences to bring peace & clarity", img: "/Images/Benefits/ketu_dosh_removal.jpg" }
                  ].map((b, i) => (
                    <div key={i} className="bg-white rounded-lg border border-[#E8D8C5] overflow-hidden space-y-3 p-3">
                      <img src={b.img} alt={b.title} className="w-full h-32 object-cover rounded-md" />
                      <h4 className="font-heading text-sm font-semibold text-[#6D1344]">{b.title}</h4>
                      <p className="text-xs text-[#7A676E]">{b.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* TESTIMONIAL CARD */}
              <div className="space-y-4">
                <h3 className="font-heading text-lg font-semibold text-[#6D1344]">2. Devotee Review Component (`Card / Testimonial`)</h3>
                <div className="bg-white rounded-lg p-6 border border-[#E8D8C5] shadow-2xs space-y-3 max-w-lg">
                  <div className="flex items-center gap-3">
                    <img src="/Images/Avatars/indian_devotee_1_1788330405371.jpg" alt="Devotee" className="w-10 h-10 rounded-full object-cover border border-[#E8D8C5]" />
                    <div>
                      <h4 className="font-heading text-xs font-bold text-[#6D1344]">Preeti Rana</h4>
                      <span className="text-[11px] text-[#7A676E]">Pune, Maharashtra • 5★ Rating</span>
                    </div>
                  </div>
                  <p className="text-xs text-[#2C151B] leading-relaxed">
                    "The Utsav app is awesome! They sent a video of the puja being performed, and I could clearly hear my name and gotra being chanted. Highly recommended!"
                  </p>
                </div>
              </div>

              {/* FAQ ITEM */}
              <div className="space-y-4">
                <h3 className="font-heading text-lg font-semibold text-[#6D1344]">3. FAQ Accordion Item Component (`FAQ / Item`)</h3>
                <div className="bg-white rounded-lg border border-[#E8D8C5] p-4 space-y-2 max-w-2xl cursor-pointer" onClick={() => setFaqOpen(!faqOpen)}>
                  <div className="flex items-center justify-between">
                    <h4 className="font-heading text-xs sm:text-sm font-semibold text-[#6D1344]">What happens after I book a Puja?</h4>
                    <ChevronDown className={`w-4 h-4 text-[#EA5C26] transition-transform ${faqOpen ? "rotate-180" : ""}`} />
                  </div>
                  {faqOpen && (
                    <p className="text-xs text-[#7A676E] leading-relaxed pt-2 border-t border-slate-100">
                      After booking, your name and gotra are shared with the temple. On the day of the puja, the panditji chants your details during the Sankalp. You receive a video update on WhatsApp within 3 to 5 days.
                    </p>
                  )}
                </div>
              </div>
            </section>
          )}

          {/* ==========================================
              05 MOBILE FOUNDATION SECTION
             ========================================== */}
          {(activeTab === "mobile" || activeTab === undefined) && (
            <section className="space-y-12">
              <div className="space-y-2 border-b border-[#E8D8C5] pb-4">
                <span className="text-[#EA5C26] text-xs font-mono font-bold tracking-wider uppercase">Section 05</span>
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#6D1344]">Mobile Foundation (360px – 430px)</h2>
                <p className="text-xs sm:text-sm text-[#7A676E]">One-thumb interaction rules, mobile viewport frames, and sticky booking bar previews.</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-[#6D1344]">Test Viewport Target:</span>
                {[360, 375, 390, 430].map((w) => (
                  <button
                    key={w}
                    onClick={() => setMobileViewportWidth(w)}
                    className={`px-3 py-1 rounded-md text-xs font-mono cursor-pointer ${
                      mobileViewportWidth === w ? "bg-[#EA5C26] text-white font-bold" : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {w}px
                  </button>
                ))}
              </div>

              {/* MOBILE FRAME PREVIEW */}
              <div className="flex justify-center bg-slate-200/60 p-6 rounded-xl border border-slate-300">
                <div
                  className="bg-white rounded-[32px] p-4 border-[6px] border-slate-900 shadow-2xl space-y-4 overflow-hidden"
                  style={{ width: `${mobileViewportWidth}px`, minHeight: "500px" }}
                >
                  <div className="w-20 h-4 bg-black rounded-full mx-auto" />
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-[#EA5C26] uppercase">AUSPICIOUS PUJA SEVA</span>
                    <h4 className="font-heading text-base font-semibold text-[#6D1344] leading-tight">1008 Ganesh Sahastra Archana</h4>
                    <p className="text-xs text-[#7A676E]">Sri Chintamani Ganesh Mandir, Kashi</p>
                  </div>
                  <img src="/Images/panchang.jpg" alt="Puja" className="w-full h-40 object-cover rounded-lg" />

                  {/* STICKY BOTTOM BAR DEMO */}
                  <div className="bg-white border-t border-[#E8D8C5] pt-3 flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] text-[#7A676E] block">Wed · Sep 09, 2026</span>
                      <span className="font-heading text-xs font-bold text-[#6D1344]">Starting ₹951</span>
                    </div>
                    <Button size="sm" className="bg-[#EA5C26] text-white font-semibold text-xs h-10 min-h-[44px] px-4 rounded-lg">
                      Participate →
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
