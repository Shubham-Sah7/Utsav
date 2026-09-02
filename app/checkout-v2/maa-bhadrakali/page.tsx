"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ChevronLeft,
  Calendar,
  MapPin,
  Plus,
  Trash2,
  Lock,
  Gift,
  Phone,
  User,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Devotee {
  name: string;
  gotra: string;
  unknownGotra: boolean;
}

interface BhetItem {
  id: string;
  title: string;
  price: number;
  desc: string;
  img: string;
}

const BHET_OPTIONS: BhetItem[] = [
  {
    id: "nariyal",
    title: "Nariyal Daan",
    price: 201,
    desc: "Sacred coconut offering dedicated at the deity shrine",
    img: "/images/thumbnails/utsav_prasad_thali_1788276509377.jpg"
  },
  {
    id: "gau_seva",
    title: "Gau Seva",
    price: 351,
    desc: "Feed green fodder & jaggery to temple gaushala cows",
    img: "/images/benefits/financial_prosperity.jpg"
  },
  {
    id: "chunni",
    title: "Chunni Arpan",
    price: 125,
    desc: "Consecrated red chunni offered to Maa Bhadrakali",
    img: "/images/benefits/fame_success.jpg"
  }
];

export default function CheckoutV2Page() {
  const [step, setStep] = useState<1 | 2>(1);

  // Form State
  const [devotees, setDevotees] = useState<Devotee[]>([
    { name: "Shubham Sah", gotra: "Kashyap", unknownGotra: false }
  ]);
  const [phone, setPhone] = useState("9876543210");
  const [prasadPref, setPrasadPref] = useState<"yes" | "no">("yes");
  const [address, setAddress] = useState({
    street: "Flat 402, Golden Shikhara Apts",
    city: "Kolkata",
    pincode: "700026",
    state: "West Bengal"
  });

  // Bhet State
  const [selectedBhet, setSelectedBhet] = useState<string[]>([]);
  
  // Payment Modal Simulation State
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);

  // Calculations
  const dakshinaPrice = 951;
  const bhetTotal = selectedBhet.reduce((sum, id) => {
    const item = BHET_OPTIONS.find((b) => b.id === id);
    return sum + (item ? item.price : 0);
  }, 0);
  const totalPrice = dakshinaPrice + bhetTotal;

  // Handlers for Devotees
  const addDevotee = () => {
    setDevotees([...devotees, { name: "", gotra: "Kashyap", unknownGotra: false }]);
  };

  const updateDevotee = (index: number, field: keyof Devotee, value: any) => {
    const updated = [...devotees];
    if (field === "unknownGotra") {
      updated[index].unknownGotra = value;
      if (value) updated[index].gotra = "Kashyap (Default)";
    } else {
      updated[index][field] = value;
    }
    setDevotees(updated);
  };

  const removeDevotee = (index: number) => {
    if (devotees.length > 1) {
      setDevotees(devotees.filter((_, i) => i !== index));
    }
  };

  // Toggle Bhet
  const toggleBhet = (id: string) => {
    if (selectedBhet.includes(id)) {
      setSelectedBhet(selectedBhet.filter((item) => item !== id));
    } else {
      setSelectedBhet([...selectedBhet, id]);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF7] font-sans text-[#2C151B] flex flex-col">
      {/* 1. SECURE CHECKOUT HEADER */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#E8D8C5] px-4 sm:px-8 py-3.5 shadow-2xs">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          {/* Left: Back button or Logo */}
          <div className="flex items-center gap-3">
            {step === 2 ? (
              <button
                onClick={() => setStep(1)}
                className="flex items-center gap-1 text-xs font-semibold text-[#6D1344] hover:text-[#EA5C26] transition-colors cursor-pointer bg-[#FFF9EF] px-3 py-1.5 rounded-full border border-[#E8D8C5]"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back to Sankalp</span>
              </button>
            ) : (
              <Link href="/" className="flex items-center gap-2">
                <img src="/logo.png" alt="Utsav Logo" className="h-7 w-auto object-contain" />
              </Link>
            )}
          </div>

          {/* Center: Brand Title on Mobile */}
          <div className="text-center hidden sm:block">
            <span className="font-heading text-sm font-bold text-[#6D1344] block">
              Sacred Puja Checkout
            </span>
            <span className="text-[10px] text-[#7A676E] font-medium block">
              100% Authentic Shrine Seva Guarantee
            </span>
          </div>

          {/* Right: Security Badge */}
          <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
            <span className="hidden sm:inline">256-bit SSL Encrypted</span>
            <span className="sm:hidden">Secure</span>
          </div>
        </div>
      </header>

      {/* 2. PROGRESS STEP BAR */}
      <div className="bg-[#FFF9EF] border-b border-[#E8D8C5] py-3.5 px-4">
        <div className="max-w-xl mx-auto flex items-center justify-between text-xs font-semibold">
          {/* Step 1 */}
          <div className="flex items-center gap-2">
            <span
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                step === 1
                  ? "bg-[#EA5C26] text-white shadow-xs"
                  : "bg-emerald-600 text-white"
              }`}
            >
              {step > 1 ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : "1"}
            </span>
            <span className={step === 1 ? "text-[#EA5C26] font-bold" : "text-emerald-800"}>
              1. Sankalp + Contact
            </span>
          </div>

          <div className="flex-1 max-w-[40px] sm:max-w-[80px] h-[2px] bg-[#E8D8C5] mx-2" />

          {/* Step 2 */}
          <div className="flex items-center gap-2">
            <span
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                step === 2
                  ? "bg-[#EA5C26] text-white shadow-xs"
                  : "bg-slate-200 text-slate-600"
              }`}
            >
              2
            </span>
            <span className={step === 2 ? "text-[#EA5C26] font-bold" : "text-[#7A676E]"}>
              2. Review + Bhet
            </span>
          </div>

          <div className="flex-1 max-w-[40px] sm:max-w-[80px] h-[2px] bg-[#E8D8C5] mx-2" />

          {/* Step 3 */}
          <div className="flex items-center gap-2 opacity-50">
            <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-bold">
              3
            </span>
            <span className="text-[#7A676E]">3. Payment</span>
          </div>
        </div>
      </div>

      {/* MAIN CONTAINER */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 pb-28 sm:pb-12">
        <AnimatePresence mode="wait">
          {/* ========================================================================= */}
          {/* SCREEN 1: SANKALP + CONTACT */}
          {/* ========================================================================= */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Column: Form Fields (7 Cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h1 className="font-heading text-2xl sm:text-3xl font-bold text-[#6D1344]">
                    Complete your Sankalp
                  </h1>
                  <p className="text-xs sm:text-sm text-[#7A676E] pt-1">
                    Your Puja will be performed with the names and gotra entered here.
                  </p>
                </div>

                {/* Devotees Card */}
                <div className="bg-white rounded-2xl border border-[#E8D8C5] shadow-sm p-5 sm:p-6 space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="font-heading font-semibold text-sm text-[#6D1344] flex items-center gap-2">
                      <User className="w-4 h-4 text-[#EA5C26]" />
                      <span>Devotee Details for Sankalp</span>
                    </span>
                    <span className="text-[11px] text-[#7A676E] font-medium">
                      {devotees.length} {devotees.length === 1 ? "Name" : "Names"} Included
                    </span>
                  </div>

                  {devotees.map((devotee, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#FFF9EF]/60 border border-[#E8D8C5]/70 space-y-4 relative"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#6D1344] uppercase tracking-wider">
                          Devotee #{idx + 1}
                        </span>
                        {devotees.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeDevotee(idx)}
                            className="text-red-500 hover:text-red-700 text-xs font-medium flex items-center gap-1 cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Remove</span>
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Name Input */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-[#2C151B] block">
                            Full Name <span className="text-[#EA5C26]">*</span>
                          </label>
                          <input
                            type="text"
                            value={devotee.name}
                            onChange={(e) => updateDevotee(idx, "name", e.target.value)}
                            placeholder="e.g. Shubham Sah"
                            className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-[#2C151B] focus:outline-none focus:border-[#EA5C26] focus:ring-1 focus:ring-[#EA5C26] transition-all"
                          />
                        </div>

                        {/* Gotra Input */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-[#2C151B] block">
                            Gotra <span className="text-[#EA5C26]">*</span>
                          </label>
                          <input
                            type="text"
                            disabled={devotee.unknownGotra}
                            value={devotee.gotra}
                            onChange={(e) => updateDevotee(idx, "gotra", e.target.value)}
                            placeholder="e.g. Kashyap"
                            className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-[#2C151B] focus:outline-none focus:border-[#EA5C26] focus:ring-1 focus:ring-[#EA5C26] disabled:bg-slate-100 disabled:text-slate-500 transition-all"
                          />
                        </div>
                      </div>

                      {/* Unknown Gotra Checkbox */}
                      <label className="flex items-center gap-2 cursor-pointer select-none pt-1">
                        <input
                          type="checkbox"
                          checked={devotee.unknownGotra}
                          onChange={(e) => updateDevotee(idx, "unknownGotra", e.target.checked)}
                          className="w-4 h-4 accent-[#EA5C26] rounded cursor-pointer"
                        />
                        <span className="text-[11px] text-[#7A676E] font-medium">
                          I don't know my Gotra (Kashyap Gotra will be used automatically)
                        </span>
                      </label>
                    </div>
                  ))}

                  {/* Add Another Devotee Button */}
                  <button
                    type="button"
                    onClick={addDevotee}
                    className="w-full py-2.5 px-4 rounded-xl border border-dashed border-[#EA5C26] text-[#EA5C26] bg-[#FFF9EF]/40 hover:bg-[#FFF9EF] text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>+ Add Another Devotee Name</span>
                  </button>
                </div>

                {/* WhatsApp Contact & Prasad Preferences */}
                <div className="bg-white rounded-2xl border border-[#E8D8C5] shadow-sm p-5 sm:p-6 space-y-5">
                  {/* Phone Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#2C151B] block">
                      WhatsApp Mobile Number <span className="text-[#EA5C26]">*</span>
                    </label>
                    <div className="flex items-center gap-2">
                      <div className="bg-slate-100 border border-slate-300 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-700 shrink-0 flex items-center gap-1.5">
                        <span>🇮🇳</span>
                        <span>+91</span>
                      </div>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="98765 43210"
                        className="flex-1 bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-[#2C151B] focus:outline-none focus:border-[#EA5C26] focus:ring-1 focus:ring-[#EA5C26] transition-all font-mono"
                      />
                    </div>
                    <p className="text-[11px] text-emerald-800 font-medium flex items-center gap-1.5 pt-1">
                      <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Puja updates, video and Prasad details will be shared on WhatsApp.</span>
                    </p>
                  </div>

                  {/* Prasad Preference Selector */}
                  <div className="pt-2 border-t border-slate-100 space-y-3">
                    <label className="text-xs font-semibold text-[#2C151B] block">
                      Would you like to receive Prasad for the Puja?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setPrasadPref("yes")}
                        className={`p-3.5 rounded-xl border text-left flex items-start gap-3 transition-all cursor-pointer ${
                          prasadPref === "yes"
                            ? "border-[#EA5C26] bg-[#FFF9EF] ring-1 ring-[#EA5C26]/30 shadow-xs"
                            : "border-slate-200 bg-white hover:border-slate-300"
                        }`}
                      >
                        <span
                          className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                            prasadPref === "yes"
                              ? "border-[#EA5C26] bg-[#EA5C26] text-white"
                              : "border-slate-300"
                          }`}
                        >
                          {prasadPref === "yes" && <Check className="w-3 h-3 stroke-[3]" />}
                        </span>
                        <div>
                          <span className="font-semibold text-xs text-[#6D1344] block">
                            Yes, send Prasad
                          </span>
                          <span className="text-[11px] text-[#7A676E] block leading-relaxed pt-0.5">
                            Delivered to your address across India
                          </span>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPrasadPref("no")}
                        className={`p-3.5 rounded-xl border text-left flex items-start gap-3 transition-all cursor-pointer ${
                          prasadPref === "no"
                            ? "border-[#EA5C26] bg-[#FFF9EF] ring-1 ring-[#EA5C26]/30 shadow-xs"
                            : "border-slate-200 bg-white hover:border-slate-300"
                        }`}
                      >
                        <span
                          className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                            prasadPref === "no"
                              ? "border-[#EA5C26] bg-[#EA5C26] text-white"
                              : "border-slate-300"
                          }`}
                        >
                          {prasadPref === "no" && <Check className="w-3 h-3 stroke-[3]" />}
                        </span>
                        <div>
                          <span className="font-semibold text-xs text-[#6D1344] block">
                            No, only Digital Proof
                          </span>
                          <span className="text-[11px] text-[#7A676E] block leading-relaxed pt-0.5">
                            Receive live Puja video on WhatsApp
                          </span>
                        </div>
                      </button>
                    </div>

                    {/* Address Fields if Prasad = Yes */}
                    {prasadPref === "yes" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="pt-3 space-y-3"
                      >
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-semibold text-[#2C151B] block">
                            Delivery Address
                          </label>
                          <input
                            type="text"
                            value={address.street}
                            onChange={(e) => setAddress({ ...address, street: e.target.value })}
                            placeholder="Flat / House No., Street, Landmark"
                            className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-[#2C151B] focus:outline-none focus:border-[#EA5C26]"
                          />
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <input
                            type="text"
                            value={address.city}
                            onChange={(e) => setAddress({ ...address, city: e.target.value })}
                            placeholder="City"
                            className="bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs text-[#2C151B]"
                          />
                          <input
                            type="text"
                            value={address.pincode}
                            onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                            placeholder="Pincode"
                            className="bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs text-[#2C151B]"
                          />
                          <input
                            type="text"
                            value={address.state}
                            onChange={(e) => setAddress({ ...address, state: e.target.value })}
                            placeholder="State"
                            className="bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs text-[#2C151B]"
                          />
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column: Order Summary Card (5 Cols) */}
              <div className="lg:col-span-5 space-y-5 sticky top-24">
                <div className="bg-[#FFF9EF] rounded-2xl border border-[#E8D8C5] p-5 sm:p-6 space-y-4 shadow-sm">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#EA5C26] block">
                    Selected Seva Summary
                  </span>

                  <div className="flex gap-3.5 items-center pb-4 border-b border-[#E8D8C5]">
                    <img
                      src="/images/pujas/kali_sanctum_hero.jpg"
                      alt="Maa Bhadrakali Puja"
                      className="w-16 h-16 rounded-xl object-cover border border-[#E8D8C5] shrink-0"
                    />
                    <div className="space-y-1">
                      <h3 className="font-heading font-bold text-sm text-[#6D1344] leading-snug">
                        Maa Bhadrakali 108 Munda Mala Seva
                      </h3>
                      <p className="text-xs text-[#7A676E] flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#EA5C26]" />
                        <span>Kalighat Shaktipeeth, Kolkata</span>
                      </p>
                      <p className="text-xs text-[#EA5C26] font-semibold flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>Tue, Sep 08, 2026 • Mangalvar Visesh</span>
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between text-[#7A676E]">
                      <span>Puja Dakshina</span>
                      <span className="font-semibold text-[#6D1344]">₹{dakshinaPrice}</span>
                    </div>
                    <div className="flex items-center justify-between text-[#7A676E]">
                      <span>Prasad Shipping</span>
                      <span className="font-semibold text-emerald-700">FREE</span>
                    </div>
                    <div className="pt-2 border-t border-[#E8D8C5] flex items-center justify-between text-sm font-bold text-[#6D1344]">
                      <span>Total Amount</span>
                      <span className="text-[#EA5C26] text-base">₹{dakshinaPrice}</span>
                    </div>
                  </div>

                  {/* Desktop Primary CTA */}
                  <Button
                    onClick={() => setStep(2)}
                    className="w-full bg-[#EA5C26] hover:bg-[#D44B17] text-white font-semibold text-sm min-h-[48px] rounded-xl shadow-md transition-all cursor-pointer hidden md:flex items-center justify-center gap-2"
                  >
                    <span>Continue to Review</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>

                {/* Devotee Guarantee Badge */}
                <div className="bg-white rounded-xl border border-[#E8D8C5] p-4 flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-[#EA5C26] shrink-0" />
                  <p className="text-[11px] text-[#7A676E] leading-relaxed">
                    <strong className="text-[#6D1344] font-semibold">100% Video Proof Guarantee:</strong> Dedicated pandit ji will chant your name & gotra live in Sankalp.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* SCREEN 2: REVIEW + OPTIONAL BHET */}
          {/* ========================================================================= */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Column: Review & Optional Bhet (7 Cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h1 className="font-heading text-2xl sm:text-3xl font-bold text-[#6D1344]">
                    Review your Puja
                  </h1>
                  <p className="text-xs sm:text-sm text-[#7A676E] pt-1">
                    Please verify your Sankalp details before making your offering.
                  </p>
                </div>

                {/* Sankalp Summary Box */}
                <div className="bg-white rounded-2xl border border-[#E8D8C5] shadow-sm p-5 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="font-heading font-semibold text-sm text-[#6D1344] flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#EA5C26]" />
                      <span>Your Sankalp Summary</span>
                    </span>
                    <button
                      onClick={() => setStep(1)}
                      className="text-xs font-bold text-[#EA5C26] hover:underline cursor-pointer"
                    >
                      Edit Sankalp
                    </button>
                  </div>

                  <div className="space-y-3 text-xs">
                    {/* Devotees List */}
                    <div>
                      <span className="text-[#7A676E] font-medium block">Devotee Name(s):</span>
                      <div className="pt-1 space-y-1">
                        {devotees.map((d, i) => (
                          <div key={i} className="flex items-center gap-2 font-semibold text-[#6D1344]">
                            <span>• {d.name || "Devotee"}</span>
                            <span className="text-[11px] text-[#EA5C26] font-normal bg-[#FFF9EF] px-2 py-0.5 rounded border border-[#E8D8C5]">
                              Gotra: {d.gotra || "Kashyap"}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Contact & Prasad */}
                    <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-100">
                      <div>
                        <span className="text-[#7A676E] font-medium block">WhatsApp Contact:</span>
                        <span className="font-semibold text-[#6D1344] font-mono">+91 {phone}</span>
                      </div>
                      <div>
                        <span className="text-[#7A676E] font-medium block">Prasad Status:</span>
                        <span className="font-semibold text-[#6D1344]">
                          {prasadPref === "yes" ? "Yes, Doorstep Delivery" : "Digital Video Only"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* OPTIONAL BHET SELECTION SECTION */}
                <div className="space-y-3 pt-2">
                  <div>
                    <h2 className="font-heading text-lg font-bold text-[#6D1344] flex items-center gap-2">
                      <Gift className="w-5 h-5 text-[#EA5C26]" />
                      <span>Add something to your Puja, if you wish</span>
                    </h2>
                    <p className="text-xs text-[#7A676E] pt-0.5">
                      Optional sacred offerings dedicated at the shrine in your name.
                    </p>
                  </div>

                  {/* 3 Compact Add-On Cards */}
                  <div className="space-y-3">
                    {BHET_OPTIONS.map((item) => {
                      const isAdded = selectedBhet.includes(item.id);
                      return (
                        <div
                          key={item.id}
                          className={`p-4 rounded-2xl border transition-all flex items-center justify-between gap-4 ${
                            isAdded
                              ? "border-[#EA5C26] bg-[#FFF9EF] shadow-xs"
                              : "border-[#E8D8C5] bg-white hover:border-[#EA5C26]/50"
                          }`}
                        >
                          <div className="flex items-center gap-3.5">
                            <img
                              src={item.img}
                              alt={item.title}
                              className="w-14 h-14 rounded-xl object-cover border border-[#E8D8C5] shrink-0"
                            />
                            <div className="space-y-0.5">
                              <div className="flex items-center gap-2">
                                <h3 className="font-heading font-bold text-sm text-[#6D1344]">
                                  {item.title}
                                </h3>
                                <span className="text-xs font-bold text-[#EA5C26]">
                                  ₹{item.price}
                                </span>
                              </div>
                              <p className="text-[11px] text-[#7A676E] leading-relaxed max-w-sm">
                                {item.desc}
                              </p>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => toggleBhet(item.id)}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 flex items-center gap-1.5 ${
                              isAdded
                                ? "bg-emerald-600 text-white shadow-xs"
                                : "bg-[#FFF9EF] text-[#EA5C26] border border-[#EA5C26] hover:bg-[#EA5C26] hover:text-white"
                            }`}
                          >
                            {isAdded ? (
                              <>
                                <Check className="w-3.5 h-3.5 stroke-[3]" />
                                <span>Added</span>
                              </>
                            ) : (
                              <>
                                <Plus className="w-3.5 h-3.5" />
                                <span>Add</span>
                              </>
                            )}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Column: Final Order Summary & CTAs (5 Cols) */}
              <div className="lg:col-span-5 space-y-5 sticky top-24">
                <div className="bg-[#FFF9EF] rounded-2xl border border-[#E8D8C5] p-5 sm:p-6 space-y-4 shadow-sm">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#EA5C26] block">
                    Final Order Summary
                  </span>

                  <div className="space-y-2.5 text-xs pb-3 border-b border-[#E8D8C5]">
                    <div className="flex items-center justify-between text-[#7A676E]">
                      <span>Puja Dakshina</span>
                      <span className="font-semibold text-[#6D1344]">₹{dakshinaPrice}</span>
                    </div>

                    <div className="flex items-center justify-between text-[#7A676E]">
                      <span>Optional Bhet Add-ons</span>
                      <span className="font-semibold text-[#EA5C26]">
                        {bhetTotal > 0 ? `+₹${bhetTotal}` : "₹0"}
                      </span>
                    </div>

                    {prasadPref === "yes" && (
                      <div className="flex items-center justify-between text-[#7A676E]">
                        <span>Prasad Doorstep Delivery</span>
                        <span className="font-semibold text-emerald-700">FREE</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-base font-bold text-[#6D1344]">
                    <span>Total Amount</span>
                    <span className="text-[#EA5C26] text-xl">₹{totalPrice}</span>
                  </div>

                  {/* Primary CTA */}
                  <Button
                    onClick={() => setShowPaymentSuccess(true)}
                    className="w-full bg-[#EA5C26] hover:bg-[#D44B17] text-white font-semibold text-sm min-h-[50px] rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Lock className="w-4 h-4" />
                    <span>Continue to Payment (₹{totalPrice})</span>
                  </Button>

                  {/* Secondary Skip Bhet Option */}
                  {selectedBhet.length > 0 ? (
                    <button
                      onClick={() => setSelectedBhet([])}
                      className="w-full text-center text-xs text-[#7A676E] hover:text-[#6D1344] font-medium py-1 cursor-pointer block"
                    >
                      Clear Bhet Add-ons
                    </button>
                  ) : (
                    <button
                      onClick={() => setShowPaymentSuccess(true)}
                      className="w-full text-center text-xs text-[#7A676E] hover:text-[#6D1344] font-medium py-1 cursor-pointer block"
                    >
                      Skip Bhet & Pay ₹{dakshinaPrice}
                    </button>
                  )}
                </div>

                <div className="bg-white rounded-xl border border-[#E8D8C5] p-4 text-center text-xs text-[#7A676E]">
                  <p>
                    Need assistance with your booking? Contact Support on WhatsApp at{" "}
                    <strong className="text-[#6D1344]">+91 80446 30858</strong>
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* 3. MOBILE STICKY BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-[#E8D8C5] p-3.5 shadow-xl md:hidden">
        <div className="flex items-center justify-between gap-3">
          <div>
            <span className="text-[10px] text-[#7A676E] font-medium block">Total Payable</span>
            <span className="font-heading text-lg font-bold text-[#EA5C26]">₹{totalPrice}</span>
          </div>

          {step === 1 ? (
            <Button
              onClick={() => setStep(2)}
              className="bg-[#EA5C26] hover:bg-[#D44B17] text-white font-semibold text-xs h-11 px-5 rounded-xl shadow-md cursor-pointer flex items-center gap-1.5"
            >
              <span>Continue to Review</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              onClick={() => setShowPaymentSuccess(true)}
              className="bg-[#EA5C26] hover:bg-[#D44B17] text-white font-semibold text-xs h-11 px-5 rounded-xl shadow-md cursor-pointer flex items-center gap-1.5"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Pay ₹{totalPrice}</span>
            </Button>
          )}
        </div>
      </div>

      {/* 4. PAYMENT SIMULATION MODAL */}
      {showPaymentSuccess && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl border border-[#E8D8C5] max-w-md w-full p-6 text-center space-y-5 shadow-2xl relative"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-300">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <div className="space-y-1.5">
              <h3 className="font-heading text-xl font-bold text-[#6D1344]">
                Connecting to Secure Payment
              </h3>
              <p className="text-xs text-[#7A676E] leading-relaxed">
                Redirecting to existing UPI / Razorpay gateway for{" "}
                <strong className="text-[#6D1344]">₹{totalPrice}</strong>...
              </p>
            </div>

            <div className="bg-[#FFF9EF] rounded-xl p-4 border border-[#E8D8C5] text-left text-xs space-y-1.5">
              <div className="flex justify-between">
                <span className="text-[#7A676E]">Puja:</span>
                <span className="font-semibold text-[#6D1344]">Maa Bhadrakali Seva</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7A676E]">Devotee:</span>
                <span className="font-semibold text-[#6D1344]">{devotees[0]?.name || "Shubham Sah"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7A676E]">Gotra:</span>
                <span className="font-semibold text-[#6D1344]">{devotees[0]?.gotra || "Kashyap"}</span>
              </div>
              {selectedBhet.length > 0 && (
                <div className="flex justify-between text-[#EA5C26]">
                  <span>Added Bhet:</span>
                  <span className="font-semibold">
                    {selectedBhet.map((id) => BHET_OPTIONS.find((b) => b.id === id)?.title).join(", ")}
                  </span>
                </div>
              )}
            </div>

            <div className="pt-2 flex gap-3">
              <Link href="/puja/ganesh-sahastra-archan" className="flex-1">
                <Button className="w-full bg-[#EA5C26] hover:bg-[#D44B17] text-white font-semibold text-xs h-11 rounded-xl cursor-pointer">
                  <span>Go to Existing Checkout →</span>
                </Button>
              </Link>
              <button
                onClick={() => setShowPaymentSuccess(false)}
                className="px-4 py-2 rounded-xl text-xs text-[#7A676E] hover:text-[#6D1344] font-medium border border-slate-200 cursor-pointer"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
