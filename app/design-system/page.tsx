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
  CheckCircle2,
  Landmark,
  ArrowRight,
  Play,
  Menu,
  X,
  Search,
  MessageSquare,
  Share2,
  AlertCircle,
  Info,
  Check
} from "lucide-react";

export default function DesignSystemPage() {
  const [activeTab, setActiveTab] = useState<
    "foundations" | "components" | "commerce" | "experience" | "responsive" | "accessibility" | "reference"
  >("foundations");

  const [faqOpen, setFaqOpen] = useState<boolean>(true);
  const [selectedPkg, setSelectedPkg] = useState<number>(1);
  const [mobileViewportWidth, setMobileViewportWidth] = useState<number>(375);
  const [selectedLang, setSelectedLang] = useState<"EN" | "HI">("EN");

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
                UTSAV PRODUCTION DESIGN SYSTEM
              </span>
              <span className="bg-slate-100 text-[#6D1344] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#E8D8C5]">
                v2.0 Formal Specification
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-1.5 max-w-3xl">
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#6D1344] tracking-tight">
                  Utsav Design System
                </h1>
                <p className="text-xs sm:text-sm text-[#7A676E] font-normal leading-relaxed">
                  Extracted directly from the Utsav Home Page & Puja SKU experience. Formalizes variables, reusable components, component variants, interactive states, Auto Layout structures, responsive behavior, Devanagari Hindi string resilience, and token tables.
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <Button asChild variant="outline" className="text-xs font-semibold h-10 px-4 rounded-lg border-[#E8D8C5]">
                  <Link href="/puja/ganesh-sahastra-archan">View Live SKU Page →</Link>
                </Button>
              </div>
            </div>

            {/* CATEGORY TABS (7 NAVIGATION SECTIONS) */}
            <div className="flex items-center gap-2 pt-4 overflow-x-auto no-scrollbar border-t border-slate-100 mt-6">
              {[
                { id: "foundations", label: "01 Foundations" },
                { id: "components", label: "02 Components" },
                { id: "commerce", label: "03 Commerce" },
                { id: "experience", label: "04 Puja Experience" },
                { id: "responsive", label: "05 Responsive" },
                { id: "accessibility", label: "06 Accessibility & Localization" },
                { id: "reference", label: "07 Tokens Reference Table" }
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

        {/* MAIN CONTENT SECTIONS */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
          {/* ==========================================
              01 FOUNDATIONS SECTION
             ========================================== */}
          {activeTab === "foundations" && (
            <section className="space-y-12">
              <div className="space-y-2 border-b border-[#E8D8C5] pb-4">
                <span className="text-[#EA5C26] text-xs font-mono font-bold tracking-wider uppercase">Section 01</span>
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#6D1344]">Foundations</h2>
                <p className="text-xs sm:text-sm text-[#7A676E]">Color tokens, semantic variables, typography scale (English & Hindi), spacing grid, corner radius tokens, shadow elevation, and layout grid variables.</p>
              </div>

              {/* A. COLOR SYSTEM */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-lg font-semibold text-[#6D1344]">A. Color System (Brand, Background, Text, Border & Status Tokens)</h3>
                  <span className="text-xs text-[#7A676E]">Strict palette — No ad-hoc hex values</span>
                </div>

                {/* Brand Tokens */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold text-[#EA5C26] uppercase">1. Brand Tokens</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      { name: "Primary Orange", hex: "#EA5C26", token: "color.brand.primary", usage: "Primary CTAs, price text, active tab indicators" },
                      { name: "Deep Maroon", hex: "#6D1344", token: "color.brand.secondary", usage: "Primary headings, brand accents, footer headers" },
                      { name: "Wine / Crimson", hex: "#7C112F", token: "color.brand.wine", usage: "Special badges, shanti indicators, subtle tags" },
                      { name: "Marigold / Amber", hex: "#FAA531", token: "color.brand.amber", usage: "Star ratings, warm highlights, location icons" }
                    ].map((col) => (
                      <div key={col.hex} className="bg-white rounded-lg p-3.5 border border-[#E8D8C5] shadow-2xs space-y-3">
                        <div className="h-14 w-full rounded-md shadow-inner flex items-end p-2" style={{ backgroundColor: col.hex }}>
                          <span className="text-[10px] font-mono font-bold text-white bg-black/30 px-1.5 py-0.5 rounded">{col.hex}</span>
                        </div>
                        <div className="space-y-1">
                          <h5 className="font-heading text-xs font-semibold text-[#6D1344]">{col.name}</h5>
                          <code className="text-[10px] text-[#EA5C26] block">{col.token}</code>
                          <p className="text-[10px] text-[#7A676E] leading-tight pt-1">{col.usage}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Background & Surface Tokens */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold text-[#EA5C26] uppercase">2. Background Tokens</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      { name: "Cream", hex: "#FFF9EF", token: "color.background.primary", usage: "Main devotional page background fill" },
                      { name: "Sand / Beige", hex: "#F6E1C6", token: "color.background.secondary", usage: "Subdued card containers and step badges" },
                      { name: "Surface White", hex: "#FFFFFF", token: "color.background.surface", usage: "Cards, forms, dropdowns, and modals" },
                      { name: "Elevated Glass", hex: "rgba(255,255,255,0.85)", token: "color.background.elevated", usage: "Glassmorphism sticky header backdrop" }
                    ].map((col) => (
                      <div key={col.hex} className="bg-white rounded-lg p-3.5 border border-[#E8D8C5] shadow-2xs space-y-3">
                        <div className="h-14 w-full rounded-md shadow-inner border border-slate-200 flex items-end p-2" style={{ backgroundColor: col.hex }}>
                          <span className="text-[10px] font-mono font-bold text-slate-800 bg-white/80 px-1.5 py-0.5 rounded">{col.hex}</span>
                        </div>
                        <div className="space-y-1">
                          <h5 className="font-heading text-xs font-semibold text-[#6D1344]">{col.name}</h5>
                          <code className="text-[10px] text-[#EA5C26] block">{col.token}</code>
                          <p className="text-[10px] text-[#7A676E] leading-tight pt-1">{col.usage}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Text, Border & Status Tokens */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold text-[#EA5C26] uppercase">3. Text, Border & Status Tokens</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      { name: "Espresso Text", hex: "#2C151B", token: "color.text.primary", usage: "Body copy, subtitles, high-contrast text" },
                      { name: "Muted Text", hex: "#7A676E", token: "color.text.secondary", usage: "Metadata, dates, helper text" },
                      { name: "Gold Border", hex: "#E8D8C5", token: "color.border.default", usage: "Standard card and input container borders" },
                      { name: "Emerald Success", hex: "#10B981", token: "color.status.success", usage: "Verified badges, 100% refund assurance" }
                    ].map((col) => (
                      <div key={col.hex} className="bg-white rounded-lg p-3.5 border border-[#E8D8C5] shadow-2xs space-y-3">
                        <div className="h-14 w-full rounded-md shadow-inner border border-slate-200 flex items-end p-2" style={{ backgroundColor: col.hex }}>
                          <span className="text-[10px] font-mono font-bold text-white bg-black/40 px-1.5 py-0.5 rounded">{col.hex}</span>
                        </div>
                        <div className="space-y-1">
                          <h5 className="font-heading text-xs font-semibold text-[#6D1344]">{col.name}</h5>
                          <code className="text-[10px] text-[#EA5C26] block">{col.token}</code>
                          <p className="text-[10px] text-[#7A676E] leading-tight pt-1">{col.usage}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* B. TYPOGRAPHY */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-lg font-semibold text-[#6D1344]">B. Typography Hierarchy (Poppins Headings + Quicksand Body)</h3>
                  <span className="text-xs text-[#7A676E]">Supports English & Devanagari Hindi</span>
                </div>

                <div className="bg-white rounded-lg p-6 border border-[#E8D8C5] shadow-2xs space-y-6">
                  <div className="space-y-4 divide-y divide-slate-100">
                    <div className="pt-2 flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <span className="text-xs font-mono font-semibold text-[#EA5C26] w-36 shrink-0">Display (60/36px)</span>
                      <div className="flex-1 space-y-1">
                        <p className="font-heading text-2xl sm:text-4xl font-semibold text-[#6D1344] leading-tight">Be part of your temple, wherever you are.</p>
                        <p className="font-heading text-xl sm:text-2xl font-semibold text-[#EA5C26]">१०0८ गणेश सहस्र अर्चना एवं केतु शांति पूजा</p>
                      </div>
                    </div>

                    <div className="pt-4 flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <span className="text-xs font-mono font-semibold text-[#EA5C26] w-36 shrink-0">H1 (36/24px)</span>
                      <div className="flex-1 space-y-1">
                        <p className="font-heading text-xl sm:text-2xl font-semibold text-[#6D1344]">1008 Ganesh Sahastra Archana Path Aivam Ketu Shanti Puja</p>
                        <p className="font-heading text-lg sm:text-xl font-semibold text-[#6D1344]">मां दक्षिणा काली महायज्ञ एवं शत्रु बाधा शांति</p>
                      </div>
                    </div>

                    <div className="pt-4 flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <span className="text-xs font-mono font-semibold text-[#EA5C26] w-36 shrink-0">H2 (28/20px)</span>
                      <p className="font-heading text-lg sm:text-xl font-semibold text-[#6D1344] flex-1">Upcoming Sacred Temple Pujas</p>
                    </div>

                    <div className="pt-4 flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <span className="text-xs font-mono font-semibold text-[#EA5C26] w-36 shrink-0">Body (14/13px)</span>
                      <p className="text-xs sm:text-sm text-[#3D262D] font-normal leading-relaxed flex-1">
                        A sacred 1008-name Ganesh Archana and Ketu Shanti Puja performed at Sri Chintamani Ganesh Mandir, Kashi. Removes life obstacles, financial stress, and bestows peace & career growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* C. SPACING & D. CORNER RADIUS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* SPACING GRID */}
                <div className="bg-white rounded-lg p-5 border border-[#E8D8C5] shadow-2xs space-y-4">
                  <h3 className="font-heading text-base font-semibold text-[#6D1344]">C. Spacing Scale Grid (Base 4px)</h3>
                  <div className="space-y-2">
                    {[
                      { token: "spacing.4", px: 4, usage: "Icon/internal micro spacing" },
                      { token: "spacing.8", px: 8, usage: "Compact badge padding" },
                      { token: "spacing.12", px: 12, usage: "Metadata flex gaps" },
                      { token: "spacing.16", px: 16, usage: "Standard component padding" },
                      { token: "spacing.24", px: 24, usage: "Card internal padding" },
                      { token: "spacing.32", px: 32, usage: "Section vertical spacing" },
                      { token: "spacing.48", px: 48, usage: "Large section padding" }
                    ].map((sp) => (
                      <div key={sp.token} className="flex items-center gap-3 text-xs">
                        <span className="font-mono text-[#7A676E] w-24 shrink-0">{sp.token}</span>
                        <div className="bg-[#EA5C26] h-4 rounded-xs shrink-0" style={{ width: `${sp.px * 3}px` }} />
                        <span className="font-mono text-[10px] text-slate-500 w-10 shrink-0">{sp.px}px</span>
                        <span className="text-[10px] text-[#7A676E] truncate">{sp.usage}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CORNER RADIUS */}
                <div className="bg-white rounded-lg p-5 border border-[#E8D8C5] shadow-2xs space-y-4">
                  <h3 className="font-heading text-base font-semibold text-[#6D1344]">D. Corner Radius Tokens (Clean & Moderate)</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { token: "radius.none", val: "0px", class: "rounded-none", comp: "Full-bleed banners" },
                      { token: "radius.sm", val: "4px", class: "rounded-xs", comp: "Checkboxes & micro pills" },
                      { token: "radius.md", val: "6px", class: "rounded-md", comp: "Thumbnails & buttons" },
                      { token: "radius.lg", val: "8px", class: "rounded-lg", comp: "Puja cards & inputs" },
                      { token: "radius.xl", val: "12px", class: "rounded-xl", comp: "Modal boxes & banners" },
                      { token: "radius.pill", val: "9999px", class: "rounded-full", comp: "Date & category pills" }
                    ].map((rad) => (
                      <div key={rad.token} className={`p-3 border-2 border-[#EA5C26]/40 bg-[#FFF9EF] flex flex-col items-center justify-center text-center ${rad.class}`}>
                        <span className="text-xs font-bold text-[#6D1344]">{rad.token}</span>
                        <span className="text-[10px] text-[#EA5C26] font-mono">{rad.val}</span>
                        <span className="text-[9px] text-[#7A676E] pt-0.5">{rad.comp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* E. SHADOWS & F. GRID LAYOUT */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* SHADOWS */}
                <div className="bg-white rounded-lg p-5 border border-[#E8D8C5] shadow-2xs space-y-4">
                  <h3 className="font-heading text-base font-semibold text-[#6D1344]">E. Shadow & Elevation Tokens</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { token: "shadow.none", class: "shadow-none border border-slate-200", label: "Flat elements" },
                      { token: "shadow.2xs", class: "shadow-2xs border border-[#E8D8C5]", label: "Puja card default" },
                      { token: "shadow.xs", class: "shadow-xs border border-[#EA5C26]/40", label: "Hover / Active cards" },
                      { token: "shadow.md", class: "shadow-md border border-slate-300", label: "Dropdowns & Modals" }
                    ].map((sh) => (
                      <div key={sh.token} className={`p-4 rounded-lg bg-white flex flex-col items-center justify-center text-center ${sh.class}`}>
                        <span className="text-xs font-bold text-[#6D1344]">{sh.token}</span>
                        <span className="text-[10px] text-[#7A676E]">{sh.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* GRID LAYOUT */}
                <div className="bg-white rounded-lg p-5 border border-[#E8D8C5] shadow-2xs space-y-4">
                  <h3 className="font-heading text-base font-semibold text-[#6D1344]">F. Grid & Layout System Variables</h3>
                  <div className="space-y-2.5 text-xs">
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <code className="text-[#EA5C26]">layout.maxWidth</code>
                      <span className="font-medium text-[#2C151B]">1280px (max-w-7xl)</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <code className="text-[#EA5C26]">layout.mobilePadding</code>
                      <span className="font-medium text-[#2C151B]">16px (px-4)</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <code className="text-[#EA5C26]">layout.desktopPadding</code>
                      <span className="font-medium text-[#2C151B]">32px (px-8) / 48px (px-12)</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <code className="text-[#EA5C26]">layout.gridGap</code>
                      <span className="font-medium text-[#2C151B]">20px (gap-5) / 28px (gap-7)</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ==========================================
              02 COMPONENTS SECTION
             ========================================== */}
          {activeTab === "components" && (
            <section className="space-y-12">
              <div className="space-y-2 border-b border-[#E8D8C5] pb-4">
                <span className="text-[#EA5C26] text-xs font-mono font-bold tracking-wider uppercase">Section 02</span>
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#6D1344]">Core UI Components</h2>
                <p className="text-xs sm:text-sm text-[#7A676E]">Button variants & states, badge pills, stroke-consistent icon system, navigation components, and form controls.</p>
              </div>

              {/* BUTTON VARIANTS & STATES */}
              <div className="bg-white rounded-lg p-6 border border-[#E8D8C5] shadow-2xs space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="font-heading text-base font-semibold text-[#6D1344]">1. Button Component (`Button / Primary`, `Secondary`, `Ghost`, `Text`)</h3>
                  <span className="text-xs text-[#7A676E]">Min 44px touch targets — Content-driven auto layout</span>
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

                  {/* Text Link */}
                  <div className="space-y-3">
                    <span className="text-xs font-mono font-semibold text-[#EA5C26]">Button / Text Link</span>
                    <button className="text-xs font-semibold text-[#EA5C26] hover:underline flex items-center gap-1 min-h-[44px] cursor-pointer">
                      <span>Read Full Details →</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* BADGES / PILLS */}
              <div className="bg-white rounded-lg p-6 border border-[#E8D8C5] shadow-2xs space-y-5">
                <h3 className="font-heading text-base font-semibold text-[#6D1344]">2. Badge & Pill Component (`Badge / Category`, `Temple`, `Date`, `Special`)</h3>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-block px-3.5 py-1 rounded-full border border-[#EA5C26] text-[#EA5C26] text-[11px] font-bold uppercase tracking-wider bg-transparent">
                    Badge / Category: AUSPICIOUS PUJA SEVA
                  </span>
                  <span className="inline-block px-3.5 py-1 rounded-full border border-[#6D1344] text-[#6D1344] text-[11px] font-bold uppercase tracking-wider bg-slate-50">
                    Badge / Special: Special Ketu Graha Shanti Remedy
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full border border-[#E8D8C5] text-xs text-[#2C151B] font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#EA5C26]" /> Badge / Temple: Chintamani Ganesh, Kashi
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-full border border-[#E8D8C5] text-xs text-[#2C151B] font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#EA5C26]" /> Badge / Date: Sep 09, Wed • Budhvar Visesh
                  </span>
                  <span className="inline-flex items-center gap-1 bg-[#10B981]/10 text-[#10B981] text-[11px] font-bold px-3 py-1 rounded-full border border-[#10B981]/30">
                    <CheckCircle2 className="w-3.5 h-3.5" /> VERIFIED PANDITJI
                  </span>
                </div>
              </div>

              {/* ICON SYSTEM */}
              <div className="bg-white rounded-lg p-6 border border-[#E8D8C5] shadow-2xs space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-base font-semibold text-[#6D1344]">3. Icon System (16px, 20px, 24px, 32px — Consistent 2px Stroke Weight)</h3>
                  <span className="text-xs text-[#7A676E]">Lucide-React stroke weight 2.0</span>
                </div>

                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-3 text-center">
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
                    { icon: Download, label: "App" },
                    { icon: MessageSquare, label: "WhatsApp" }
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

              {/* FORM INPUTS */}
              <div className="bg-white rounded-lg p-6 border border-[#E8D8C5] shadow-2xs space-y-5">
                <h3 className="font-heading text-base font-semibold text-[#6D1344]">4. Form Input Controls (`Input / Text`, `Input / Phone`, `Input / Select`, `Form Label`, `Form Error`)</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#6D1344] block">Devotee Full Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Rajesh Sharma / राजेश शर्मा"
                      defaultValue="Rajesh Sharma"
                      className="w-full text-xs h-11 px-3.5 rounded-lg border border-[#E8D8C5] bg-[#FFF9EF] focus:outline-none focus:border-[#EA5C26]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#6D1344] block">WhatsApp Mobile Number *</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      defaultValue="+91 98765 43210"
                      className="w-full text-xs h-11 px-3.5 rounded-lg border border-[#E8D8C5] bg-[#FFF9EF] focus:outline-none focus:border-[#EA5C26]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#6D1344] block">Gotra / Kula *</label>
                    <select className="w-full text-xs h-11 px-3.5 rounded-lg border border-[#E8D8C5] bg-[#FFF9EF] focus:outline-none focus:border-[#EA5C26]">
                      <option>Kashyap (काश्यप)</option>
                      <option>Bharadwaj (भारद्वाज)</option>
                      <option>Vashistha (वशिष्ठ)</option>
                      <option>Kashyapa / Don't Know (ज्ञात नहीं)</option>
                    </select>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ==========================================
              03 COMMERCE SECTION
             ========================================== */}
          {activeTab === "commerce" && (
            <section className="space-y-12">
              <div className="space-y-2 border-b border-[#E8D8C5] pb-4">
                <span className="text-[#EA5C26] text-xs font-mono font-bold tracking-wider uppercase">Section 03</span>
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#6D1344]">Commerce Components</h2>
                <p className="text-xs sm:text-sm text-[#7A676E]">Puja cards, participation package cards, pricing tiers, and sticky booking bar components.</p>
              </div>

              {/* PUJA CARD COMPONENT */}
              <div className="space-y-4">
                <h3 className="font-heading text-lg font-semibold text-[#6D1344]">1. Puja Card Component (`Card / Puja`)</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Default Puja Card */}
                  <div className="bg-white rounded-lg p-4 flex flex-col justify-between border border-[#E8D8C5] shadow-2xs space-y-3.5">
                    <div className="space-y-3">
                      <div className="relative h-48 w-full rounded-md overflow-hidden bg-slate-100">
                        <img src="/Images/panchang.jpg" alt="Puja" className="w-full h-full object-cover" />
                        <span className="absolute top-2.5 right-2.5 bg-[#6D1344] text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-full">
                          Budhvar Visesh
                        </span>
                      </div>
                      <h4 className="font-heading text-base font-semibold text-[#6D1344]">1008 Ganesh Sahastra Archana Path & Ketu Shanti Puja</h4>
                      <div className="flex items-center gap-1.5 text-xs text-[#7A676E]">
                        <MapPin className="w-3.5 h-3.5 text-[#EA5C26]" />
                        <span>Chintamani Ganesh, Kashi</span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6D1344] bg-[#FFF9EF] px-2.5 py-1 rounded-lg border border-[#E8D8C5]">
                        <Calendar className="w-3.5 h-3.5 text-[#EA5C26]" />
                        <span>Sep 09, Wed • Budhvar Visesh</span>
                      </div>
                    </div>
                    <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                      <div>
                        <span className="text-[10px] text-[#7A676E] block">Dakshina from</span>
                        <span className="font-heading text-base font-bold text-[#6D1344]">₹951</span>
                      </div>
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
              04 PUJA EXPERIENCE SECTION
             ========================================== */}
          {activeTab === "experience" && (
            <section className="space-y-12">
              <div className="space-y-2 border-b border-[#E8D8C5] pb-4">
                <span className="text-[#EA5C26] text-xs font-mono font-bold tracking-wider uppercase">Section 04</span>
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#6D1344]">Puja Experience Components</h2>
                <p className="text-xs sm:text-sm text-[#7A676E]">Puja hero modules, benefit cards, 5-step puja journey, Pandit profiles, trust banners, reviews, and FAQ accordion items.</p>
              </div>

              {/* BENEFIT CARDS (1:1 SQUARE ON MOBILE) */}
              <div className="space-y-4">
                <h3 className="font-heading text-lg font-semibold text-[#6D1344]">1. Benefit Card Component (`Card / Benefit`)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {[
                    { title: "Financial Prosperity", desc: "Attract wealth and blessings for financial well-being", img: "/Images/Benefits/financial_prosperity.jpg" },
                    { title: "Fame & Success", desc: "Opens doors to success and popularity in career", img: "/Images/Benefits/fame_success.jpg" },
                    { title: "Removal of Ketu Dosh", desc: "Balance planetary influences to bring peace & clarity", img: "/Images/Benefits/ketu_dosh_removal.jpg" }
                  ].map((b, i) => (
                    <div key={i} className="bg-white rounded-lg border border-[#E8D8C5] overflow-hidden space-y-3 p-3">
                      <div className="relative aspect-square sm:aspect-auto sm:h-36 w-full rounded-md overflow-hidden bg-slate-100">
                        <img src={b.img} alt={b.title} className="w-full h-full object-cover" />
                      </div>
                      <h4 className="font-heading text-sm font-semibold text-[#6D1344]">{b.title}</h4>
                      <p className="text-xs text-[#7A676E]">{b.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* PANDIT PROFILE CARD */}
              <div className="space-y-4">
                <h3 className="font-heading text-lg font-semibold text-[#6D1344]">2. Verified Pandit Profile Component (`Card / Pandit Profile`)</h3>
                <div className="bg-white rounded-lg p-6 border border-[#E8D8C5] shadow-xs flex flex-col md:flex-row items-center md:items-start gap-6 max-w-2xl">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#EA5C26] shrink-0 shadow-xs relative">
                    <img src="/Images/pandit.jpg" alt="Panditji" className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-2 text-center md:text-left">
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                      <h4 className="font-heading text-base font-bold text-[#6D1344]">Challa Abhiram S.</h4>
                      <span className="bg-[#10B981]/10 text-[#10B981] text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-[#10B981]/30">
                        ✓ VERIFIED PANDITJI
                      </span>
                    </div>
                    <p className="text-xs text-[#7A676E]">Senior Vedic Priest, Chintamani Ganesh Mandir, Kashi • 22+ Years Exp.</p>
                  </div>
                </div>
              </div>

              {/* FAQ ITEM */}
              <div className="space-y-4">
                <h3 className="font-heading text-lg font-semibold text-[#6D1344]">3. FAQ Accordion Item Component (`FAQ / Item`)</h3>
                <div className="bg-white rounded-lg border border-[#E8D8C5] p-4 space-y-2 max-w-2xl cursor-pointer" onClick={() => setFaqOpen(!faqOpen)}>
                  <div className="flex items-center justify-between">
                    <h4 className="font-heading text-xs sm:text-sm font-semibold text-[#6D1344]">What happens after I book a Puja on Utsav?</h4>
                    <ChevronDown className={`w-4 h-4 text-[#EA5C26] transition-transform ${faqOpen ? "rotate-180" : ""}`} />
                  </div>
                  {faqOpen && (
                    <p className="text-xs text-[#7A676E] leading-relaxed pt-2 border-t border-slate-100">
                      After booking, your name and gotra are shared with the temple. On the day of the puja, the panditji chants your details during the Sankalp. You receive a video update on WhatsApp within 1 to 3 days.
                    </p>
                  )}
                </div>
              </div>
            </section>
          )}

          {/* ==========================================
              05 RESPONSIVE SECTION
             ========================================== */}
          {activeTab === "responsive" && (
            <section className="space-y-12">
              <div className="space-y-2 border-b border-[#E8D8C5] pb-4">
                <span className="text-[#EA5C26] text-xs font-mono font-bold tracking-wider uppercase">Section 05</span>
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#6D1344]">Responsive Mobile System</h2>
                <p className="text-xs sm:text-sm text-[#7A676E]">Target Android viewports: 360px, 375px, 390px, and 430px with one-thumb reach rules and 44px+ touch targets.</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-[#6D1344]">Select Test Viewport Width:</span>
                {[360, 375, 390, 430].map((w) => (
                  <button
                    key={w}
                    onClick={() => setMobileViewportWidth(w)}
                    className={`px-3.5 py-1 rounded-md text-xs font-mono cursor-pointer ${
                      mobileViewportWidth === w ? "bg-[#EA5C26] text-white font-bold" : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {w}px
                  </button>
                ))}
              </div>

              {/* MOBILE DEVICE FRAME PREVIEW */}
              <div className="flex justify-center bg-slate-200/60 p-6 rounded-xl border border-slate-300">
                <div
                  className="bg-white rounded-[32px] p-4 border-[6px] border-slate-900 shadow-2xl space-y-4 overflow-hidden"
                  style={{ width: `${mobileViewportWidth}px`, minHeight: "520px" }}
                >
                  <div className="w-20 h-4 bg-black rounded-full mx-auto" />
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-[#EA5C26] uppercase">SACRED CALENDAR RITUAL</span>
                    <h4 className="font-heading text-base font-semibold text-[#6D1344] leading-tight">1008 Ganesh Sahastra Archana</h4>
                    <p className="text-xs text-[#7A676E]">Sri Chintamani Ganesh Mandir, Kashi</p>
                  </div>
                  <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-slate-100">
                    <img src="/Images/panchang.jpg" alt="Puja" className="w-full h-full object-cover" />
                  </div>

                  {/* STICKY BOTTOM BAR DEMO */}
                  <div className="bg-white border-t border-[#E8D8C5] pt-3 flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] text-[#7A676E] block">Sep 09, Wed • Budhvar Visesh</span>
                      <span className="font-heading text-xs font-bold text-[#6D1344]">Dakshina from ₹951</span>
                    </div>
                    <Button size="sm" className="bg-[#EA5C26] text-white font-semibold text-xs h-11 min-h-[44px] px-4 rounded-lg">
                      Participate →
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ==========================================
              06 ACCESSIBILITY & LOCALIZATION SECTION
             ========================================== */}
          {activeTab === "accessibility" && (
            <section className="space-y-12">
              <div className="space-y-2 border-b border-[#E8D8C5] pb-4">
                <span className="text-[#EA5C26] text-xs font-mono font-bold tracking-wider uppercase">Section 06</span>
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#6D1344]">Accessibility & Multilingual Localization</h2>
                <p className="text-xs sm:text-sm text-[#7A676E]">Devanagari Hindi string resilience stress-tests, line-height rules, zero text clipping, and WCAG AA contrast standards.</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-[#6D1344]">Toggle Language Demonstration:</span>
                  <button
                    onClick={() => setSelectedLang("EN")}
                    className={`px-3 py-1 rounded-md text-xs font-semibold ${selectedLang === "EN" ? "bg-[#6D1344] text-white" : "bg-slate-100 text-slate-700"}`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => setSelectedLang("HI")}
                    className={`px-3 py-1 rounded-md text-xs font-semibold ${selectedLang === "HI" ? "bg-[#6D1344] text-white" : "bg-slate-100 text-slate-700"}`}
                  >
                    हिंदी (Hindi)
                  </button>
                </div>

                <div className="bg-white rounded-lg p-6 border border-[#E8D8C5] shadow-2xs space-y-4">
                  <h3 className="font-heading text-base font-semibold text-[#6D1344]">
                    {selectedLang === "HI" ? "१०0८ गणेश सहस्र अर्चना पाठ एवं केतु ग्रह शांति पूजा" : "1008 Ganesh Sahastra Archana Path & Ketu Shanti Puja"}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2C151B] leading-relaxed">
                    {selectedLang === "HI"
                      ? "यह शक्तिशाली 1008 गणेश सहस्र अर्चना पाठ एवं संकल्प पूजा काशी के श्री चिंतामणि गणेश मंदिर में आयोजित की जाती है। यह आपके जीवन से बाधाएं दूर कर सुख, शांति और समृद्धि प्रदान करती है।"
                      : "This powerful 1008 Ganesh Sahasra Archana Path & Sankalp Puja is performed at the sacred Sri Chintamani Ganesh Mandir in Kashi to remove life obstacles and bestow peace and prosperity."}
                  </p>
                  <div className="pt-2">
                    <Button className="bg-[#EA5C26] text-white font-semibold text-xs h-11 min-h-[44px] px-6 rounded-lg">
                      {selectedLang === "HI" ? "पूजा सेवा में भाग लें" : "Participate in Puja"}
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ==========================================
              07 TOKENS REFERENCE TABLE SECTION
             ========================================== */}
          {activeTab === "reference" && (
            <section className="space-y-12">
              <div className="space-y-2 border-b border-[#E8D8C5] pb-4">
                <span className="text-[#EA5C26] text-xs font-mono font-bold tracking-wider uppercase">Section 07</span>
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#6D1344]">Design Tokens Reference Table</h2>
                <p className="text-xs sm:text-sm text-[#7A676E]">Complete programmatic variable dictionary mapping token names, values, and design intentions.</p>
              </div>

              <div className="bg-white rounded-lg border border-[#E8D8C5] overflow-hidden shadow-2xs">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#FFF9EF] border-b border-[#E8D8C5] font-heading font-semibold text-[#6D1344]">
                    <tr>
                      <th className="p-3.5">TOKEN NAME</th>
                      <th className="p-3.5">CSS / VALUE</th>
                      <th className="p-3.5">DESIGN PURPOSE & APPLICATION</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-[#2C151B]">
                    <tr>
                      <td className="p-3.5 font-mono text-[#EA5C26]">color.brand.primary</td>
                      <td className="p-3.5 font-mono">#EA5C26</td>
                      <td className="p-3.5">Primary brand orange for high-priority CTAs, price tags, and active navigation indicators.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-mono text-[#EA5C26]">color.brand.secondary</td>
                      <td className="p-3.5 font-mono">#6D1344</td>
                      <td className="p-3.5">Deep Maroon for primary headers, brand accents, and section titles.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-mono text-[#EA5C26]">color.background.primary</td>
                      <td className="p-3.5 font-mono">#FFF9EF</td>
                      <td className="p-3.5">Warm devotional background fill for page wrappers and hero sections.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-mono text-[#EA5C26]">color.text.primary</td>
                      <td className="p-3.5 font-mono">#2C151B</td>
                      <td className="p-3.5">High-contrast Dark Espresso body text for optimum legibility.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-mono text-[#EA5C26]">spacing.16</td>
                      <td className="p-3.5 font-mono">16px / 1rem</td>
                      <td className="p-3.5">Standard component padding and container gutting.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-mono text-[#EA5C26]">radius.lg</td>
                      <td className="p-3.5 font-mono">8px / 0.5rem</td>
                      <td className="p-3.5">Moderate corner radius for Puja cards, buttons, and form containers.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
