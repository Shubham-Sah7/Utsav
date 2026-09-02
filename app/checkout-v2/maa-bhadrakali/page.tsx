"use client";

import React, { useState } from "react";
import Link from "next/link";

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
}

const BHET_OPTIONS: BhetItem[] = [
  {
    id: "nariyal",
    title: "Nariyal Daan",
    price: 201,
    desc: "Sacred coconut offering dedicated at the deity shrine"
  },
  {
    id: "gau_seva",
    title: "Gau Seva",
    price: 351,
    desc: "Feed green fodder & jaggery to temple gaushala cows"
  },
  {
    id: "chunni",
    title: "Chunni Arpan",
    price: 125,
    desc: "Consecrated red chunni offered to Maa Bhadrakali"
  }
];

export default function CheckoutV2Page() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<"qr" | "card" | "netbanking" | null>(null);

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
  
  // Payment Success Simulation
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Price Calculations
  const dakshinaPrice = 951;
  const bhetTotal = selectedBhet.reduce((sum, id) => {
    const item = BHET_OPTIONS.find((b) => b.id === id);
    return sum + (item ? item.price : 0);
  }, 0);
  const totalPrice = dakshinaPrice + bhetTotal;

  // Handlers
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

  const toggleBhet = (id: string) => {
    if (selectedBhet.includes(id)) {
      setSelectedBhet(selectedBhet.filter((item) => item !== id));
    } else {
      setSelectedBhet([...selectedBhet, id]);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF7] font-sans text-[#2C151B] flex flex-col antialiased">
      {/* 1. MINIMAL CHECKOUT HEADER */}
      <header className="bg-white border-b border-slate-200 px-4 sm:px-8 py-3.5">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            {step > 1 ? (
              <button
                onClick={() => setStep((step - 1) as 1 | 2)}
                className="text-xs font-medium text-[#6D1344] hover:underline cursor-pointer flex items-center gap-1"
              >
                ← Back
              </button>
            ) : (
              <Link href="/" className="flex items-center gap-2">
                <img src="/logo.png" alt="Utsav Logo" className="h-6 w-auto object-contain" />
              </Link>
            )}
          </div>

          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Checkout Prototype (v2)
          </div>
        </div>
      </header>

      {/* 2. MINIMAL PROGRESS INDICATOR */}
      <div className="bg-white border-b border-slate-200 py-3 px-4">
        <div className="max-w-md mx-auto flex items-center justify-between text-xs">
          {/* Step 1 */}
          <div className="flex items-center gap-2">
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${
                step === 1
                  ? "bg-[#EA5C26] text-white"
                  : "bg-emerald-700 text-white"
              }`}
            >
              {step > 1 ? "✓" : "1"}
            </span>
            <span className={step === 1 ? "font-bold text-[#6D1344]" : "text-emerald-800 font-medium"}>
              Sankalp
            </span>
          </div>

          <div className={`flex-1 h-[1px] mx-3 ${step > 1 ? "bg-emerald-700" : "bg-slate-200"}`} />

          {/* Step 2 */}
          <div className="flex items-center gap-2">
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${
                step === 2
                  ? "bg-[#EA5C26] text-white"
                  : step > 2
                  ? "bg-emerald-700 text-white"
                  : "bg-slate-200 text-slate-600"
              }`}
            >
              {step > 2 ? "✓" : "2"}
            </span>
            <span className={step === 2 ? "font-bold text-[#6D1344]" : step > 2 ? "text-emerald-800 font-medium" : "text-slate-400 font-medium"}>
              Review & Bhet
            </span>
          </div>

          <div className={`flex-1 h-[1px] mx-3 ${step > 2 ? "bg-emerald-700" : "bg-slate-200"}`} />

          {/* Step 3 */}
          <div className="flex items-center gap-2">
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${
                step === 3
                  ? "bg-[#EA5C26] text-white"
                  : "bg-slate-200 text-slate-600"
              }`}
            >
              3
            </span>
            <span className={step === 3 ? "font-bold text-[#6D1344]" : "text-slate-400 font-medium"}>
              Payment
            </span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-12">
        {/* ========================================================================= */}
        {/* SCREEN 1: SANKALP + CONTACT */}
        {/* ========================================================================= */}
        {step === 1 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Form Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h1 className="font-heading text-xl sm:text-2xl font-bold text-[#6D1344]">
                  Complete your Sankalp
                </h1>
                <p className="text-xs text-slate-600 pt-1">
                  Your Puja will be performed with the names and gotra entered here.
                </p>
              </div>

              {/* Devotees Card */}
              <div className="bg-white border border-slate-200 rounded-lg p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-xs font-bold text-[#6D1344] uppercase tracking-wider">
                    Devotee Details
                  </span>
                  <span className="text-[11px] text-slate-500">
                    {devotees.length} {devotees.length === 1 ? "Devotee" : "Devotees"}
                  </span>
                </div>

                {devotees.map((devotee, idx) => (
                  <div key={idx} className="p-4 rounded bg-slate-50 border border-slate-200 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-700">
                        Devotee #{idx + 1}
                      </span>
                      {devotees.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeDevotee(idx)}
                          className="text-xs text-red-600 hover:underline cursor-pointer"
                        >
                          Remove
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-medium text-slate-700 block mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={devotee.name}
                          onChange={(e) => updateDevotee(idx, "name", e.target.value)}
                          placeholder="e.g. Shubham Sah"
                          className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#EA5C26]"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-medium text-slate-700 block mb-1">
                          Gotra <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          disabled={devotee.unknownGotra}
                          value={devotee.gotra}
                          onChange={(e) => updateDevotee(idx, "gotra", e.target.value)}
                          placeholder="e.g. Kashyap"
                          className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#EA5C26] disabled:bg-slate-100 disabled:text-slate-500"
                        />
                      </div>
                    </div>

                    <label className="flex items-center gap-2 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={devotee.unknownGotra}
                        onChange={(e) => updateDevotee(idx, "unknownGotra", e.target.checked)}
                        className="w-3.5 h-3.5 accent-[#EA5C26] cursor-pointer"
                      />
                      <span className="text-[11px] text-slate-600">
                        I don't know my Gotra (Kashyap Gotra will be used)
                      </span>
                    </label>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={addDevotee}
                  className="text-xs font-semibold text-[#EA5C26] hover:underline cursor-pointer block pt-1"
                >
                  + Add another devotee
                </button>
              </div>

              {/* Phone & Prasad Preferences */}
              <div className="bg-white border border-slate-200 rounded-lg p-5 space-y-4">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    WhatsApp Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center gap-2 max-w-sm">
                    <span className="bg-slate-100 border border-slate-300 rounded px-3 py-2 text-xs font-medium text-slate-600">
                      +91
                    </span>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="9876543210"
                      className="flex-1 bg-white border border-slate-300 rounded px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#EA5C26]"
                    />
                  </div>
                  <p className="text-[11px] text-slate-500 pt-1.5">
                    Puja updates, video and Prasad details will be shared on WhatsApp.
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <label className="text-xs font-semibold text-slate-700 block">
                    Would you like to receive Prasad for the Puja?
                  </label>
                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setPrasadPref("yes")}
                      className={`px-4 py-2 rounded text-xs font-medium border cursor-pointer ${
                        prasadPref === "yes"
                          ? "border-[#EA5C26] bg-[#FFF9EF] text-[#6D1344] font-semibold"
                          : "border-slate-300 bg-white text-slate-700 hover:border-slate-400"
                      }`}
                    >
                      Yes, receive Prasad
                    </button>
                    <button
                      type="button"
                      onClick={() => setPrasadPref("no")}
                      className={`px-4 py-2 rounded text-xs font-medium border cursor-pointer ${
                        prasadPref === "no"
                          ? "border-[#EA5C26] bg-[#FFF9EF] text-[#6D1344] font-semibold"
                          : "border-slate-300 bg-white text-slate-700 hover:border-slate-400"
                      }`}
                    >
                      No, digital video only
                    </button>
                  </div>

                  {prasadPref === "yes" && (
                    <div className="pt-3 space-y-2 max-w-md">
                      <div>
                        <label className="text-[11px] font-medium text-slate-600 block mb-1">
                          Delivery Address
                        </label>
                        <input
                          type="text"
                          value={address.street}
                          onChange={(e) => setAddress({ ...address, street: e.target.value })}
                          placeholder="Address Line"
                          className="w-full bg-white border border-slate-300 rounded px-3 py-1.5 text-xs"
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <input
                          type="text"
                          value={address.city}
                          onChange={(e) => setAddress({ ...address, city: e.target.value })}
                          placeholder="City"
                          className="bg-white border border-slate-300 rounded px-2.5 py-1.5 text-xs"
                        />
                        <input
                          type="text"
                          value={address.pincode}
                          onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                          placeholder="Pincode"
                          className="bg-white border border-slate-300 rounded px-2.5 py-1.5 text-xs"
                        />
                        <input
                          type="text"
                          value={address.state}
                          onChange={(e) => setAddress({ ...address, state: e.target.value })}
                          placeholder="State"
                          className="bg-white border border-slate-300 rounded px-2.5 py-1.5 text-xs"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Summary Column (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white border border-slate-200 rounded-lg p-5 space-y-4">
                <h3 className="font-heading text-sm font-bold text-[#6D1344] border-b border-slate-100 pb-2">
                  Order Summary
                </h3>

                <div>
                  <h4 className="font-semibold text-xs text-slate-900">
                    Maa Bhadrakali 108 Munda Mala Seva
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Tue, Sep 08, 2026 • Mangalvar Visesh
                  </p>
                </div>

                <div className="space-y-1.5 text-xs pt-2 border-t border-slate-100">
                  <div className="flex justify-between text-slate-600">
                    <span>Puja Dakshina</span>
                    <span className="font-semibold text-slate-900">₹{dakshinaPrice}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Prasad Shipping</span>
                    <span className="text-emerald-700 font-medium">Free</span>
                  </div>
                  <div className="flex justify-between font-bold text-sm text-[#6D1344] pt-2 border-t border-slate-200">
                    <span>Total</span>
                    <span className="text-[#EA5C26]">₹{dakshinaPrice}</span>
                  </div>
                </div>

                <button
                  onClick={() => setStep(2)}
                  className="w-full bg-[#EA5C26] hover:bg-[#D44B17] text-white font-semibold text-xs py-3 rounded cursor-pointer transition-colors block text-center"
                >
                  Continue to Review
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SCREEN 2: REVIEW + OPTIONAL BHET */}
        {/* ========================================================================= */}
        {step === 2 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Review Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h1 className="font-heading text-xl sm:text-2xl font-bold text-[#6D1344]">
                  Review your Puja
                </h1>
                <p className="text-xs text-slate-600 pt-1">
                  Maa Bhadrakali 108 Munda Mala Seva • Tue, Sep 08, 2026 (Mangalvar Visesh)
                </p>
              </div>

              {/* Sankalp Summary Box */}
              <div className="bg-white border border-slate-200 rounded-lg p-5 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-xs font-bold text-[#6D1344] uppercase tracking-wider">
                    Your Sankalp
                  </span>
                  <button
                    onClick={() => setStep(1)}
                    className="text-xs text-[#EA5C26] hover:underline font-medium cursor-pointer"
                  >
                    Edit
                  </button>
                </div>

                <div className="text-xs space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-800">
                      {devotees.map((d) => d.name).filter(Boolean).join(", ") || "Shubham Sah"}
                    </span>
                    <span className="text-slate-500">
                      (Gotra: {devotees[0]?.gotra || "Kashyap"})
                    </span>
                  </div>
                  <div className="text-slate-600">
                    WhatsApp: +91 {phone}
                  </div>
                  <div className="text-slate-600">
                    Prasad: {prasadPref === "yes" ? "Doorstep Delivery Requested" : "Digital Video Only"}
                  </div>
                </div>
              </div>

              {/* OPTIONAL BHET SECTION */}
              <div className="space-y-3 pt-2">
                <div>
                  <h2 className="font-heading text-sm font-bold text-[#6D1344]">
                    Add something to your Puja, if you wish
                  </h2>
                  <p className="text-xs text-slate-500">
                    Optional additions dedicated at the shrine during Seva.
                  </p>
                </div>

                {/* 3 Compact Add-on Rows */}
                <div className="space-y-2">
                  {BHET_OPTIONS.map((item) => {
                    const isAdded = selectedBhet.includes(item.id);
                    return (
                      <div
                        key={item.id}
                        className={`p-3.5 rounded border transition-colors flex items-center justify-between gap-4 ${
                          isAdded
                            ? "border-[#EA5C26] bg-[#FFF9EF]"
                            : "border-slate-200 bg-white hover:border-slate-300"
                        }`}
                      >
                        <div className="space-y-0.5 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-xs text-slate-900">
                              {item.title}
                            </span>
                            <span className="text-xs font-bold text-[#EA5C26]">
                              ₹{item.price}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 truncate">
                            {item.desc}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => toggleBhet(item.id)}
                          className={`px-3 py-1.5 rounded text-xs font-semibold cursor-pointer shrink-0 transition-colors ${
                            isAdded
                              ? "bg-emerald-700 text-white"
                              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                          }`}
                        >
                          {isAdded ? "Added ✓" : "+ Add"}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Summary Column (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white border border-slate-200 rounded-lg p-5 space-y-4">
                <h3 className="font-heading text-sm font-bold text-[#6D1344] border-b border-slate-100 pb-2">
                  Payment Summary
                </h3>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Puja Dakshina</span>
                    <span className="font-semibold text-slate-900">₹{dakshinaPrice}</span>
                  </div>

                  <div className="flex justify-between text-slate-600">
                    <span>Bhet Add-ons</span>
                    <span className="font-semibold text-slate-900">
                      {bhetTotal > 0 ? `+₹${bhetTotal}` : "₹0"}
                    </span>
                  </div>

                  <div className="flex justify-between font-bold text-sm text-[#6D1344] pt-2 border-t border-slate-200">
                    <span>Total</span>
                    <span className="text-[#EA5C26]">₹{totalPrice}</span>
                  </div>
                </div>

                <button
                  onClick={() => setStep(3)}
                  className="w-full bg-[#EA5C26] hover:bg-[#D44B17] text-white font-semibold text-xs py-3 rounded cursor-pointer transition-colors block text-center"
                >
                  Continue to Payment (₹{totalPrice})
                </button>

                <div className="text-center pt-1">
                  {selectedBhet.length > 0 ? (
                    <button
                      onClick={() => setSelectedBhet([])}
                      className="text-xs text-slate-500 hover:underline cursor-pointer"
                    >
                      Clear Bhet Add-ons
                    </button>
                  ) : (
                    <button
                      onClick={() => setStep(3)}
                      className="text-xs text-slate-500 hover:underline cursor-pointer"
                    >
                      Skip Bhet
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SCREEN 3: PAYMENT OPTIONS (MATCHING USER SCREENSHOT) */}
        {/* ========================================================================= */}
        {step === 3 && (
          <div className="max-w-2xl mx-auto space-y-6">
            <div>
              <h1 className="font-heading text-xl sm:text-2xl font-bold text-[#6D1344]">
                Select Payment Method
              </h1>
              <p className="text-xs text-slate-600 pt-1">
                Total Amount Payable: <strong className="text-[#EA5C26]">₹{totalPrice}</strong>
              </p>
            </div>

            {/* Recommended UPI Section */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-[#6D1344] uppercase tracking-wider relative inline-block">
                <span>Recommended UPI</span>
                <div className="h-[2px] bg-[#EA5C26] w-full mt-0.5" />
              </div>

              <div
                onClick={() => setSelectedPaymentMethod("qr")}
                className="bg-white border border-slate-300 hover:border-[#EA5C26] rounded-xl p-4 flex items-center justify-between cursor-pointer transition-all shadow-2xs hover:shadow-xs group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center p-1.5">
                    <span className="text-[11px] font-bold text-slate-700 tracking-tighter">UPI</span>
                  </div>
                  <div>
                    <span className="font-semibold text-sm text-slate-900 group-hover:text-[#6D1344]">
                      Pay using QR Code
                    </span>
                    <span className="text-[11px] text-slate-500 block">
                      Google Pay, PhonePe, Paytm, BHIM UPI
                    </span>
                  </div>
                </div>
                <span className="text-slate-400 group-hover:text-[#EA5C26] font-bold text-lg">›</span>
              </div>
            </div>

            {/* Credit & Debit Cards Section */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold text-[#6D1344] uppercase tracking-wider relative inline-block">
                <span>Credit & Debit Cards</span>
                <div className="h-[2px] bg-[#EA5C26] w-full mt-0.5" />
              </div>

              <div
                onClick={() => setSelectedPaymentMethod("card")}
                className="bg-white border border-slate-300 hover:border-[#EA5C26] rounded-xl p-4 flex items-center justify-between cursor-pointer transition-all shadow-2xs hover:shadow-xs group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center p-1.5">
                    <span className="text-base">💳</span>
                  </div>
                  <div>
                    <span className="font-semibold text-sm text-slate-900 group-hover:text-[#6D1344]">
                      Pay using Card
                    </span>
                    <span className="text-[11px] text-slate-500 block">
                      Visa, Mastercard, RuPay, Maestro
                    </span>
                  </div>
                </div>
                <span className="text-slate-400 group-hover:text-[#EA5C26] font-bold text-lg">›</span>
              </div>
            </div>

            {/* Net Banking Section */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold text-[#6D1344] uppercase tracking-wider relative inline-block">
                <span>Net Banking</span>
                <div className="h-[2px] bg-[#EA5C26] w-full mt-0.5" />
              </div>

              <div
                onClick={() => setSelectedPaymentMethod("netbanking")}
                className="bg-white border border-slate-300 hover:border-[#EA5C26] rounded-xl p-4 flex items-center justify-between cursor-pointer transition-all shadow-2xs hover:shadow-xs group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center p-1.5">
                    <span className="text-base">🏛️</span>
                  </div>
                  <div>
                    <span className="font-semibold text-sm text-slate-900 group-hover:text-[#6D1344]">
                      Pay using Net Banking
                    </span>
                    <span className="text-[11px] text-slate-500 block">
                      SBI, HDFC, ICICI, Axis, Kotak & All Major Banks
                    </span>
                  </div>
                </div>
                <span className="text-slate-400 group-hover:text-[#EA5C26] font-bold text-lg">›</span>
              </div>
            </div>

            {/* Payment Summary Box */}
            <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-2 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Puja Dakshina (Maa Bhadrakali Seva)</span>
                <span className="font-semibold text-slate-900">₹{dakshinaPrice}</span>
              </div>
              {bhetTotal > 0 && (
                <div className="flex justify-between text-[#EA5C26]">
                  <span>Optional Bhet Add-ons</span>
                  <span className="font-semibold">+₹{bhetTotal}</span>
                </div>
              )}
              <div className="flex justify-between font-bold text-sm text-[#6D1344] pt-2 border-t border-slate-200">
                <span>Total Amount Payable</span>
                <span className="text-[#EA5C26]">₹{totalPrice}</span>
              </div>
            </div>

            {/* Active Payment Method Modal / QR Display */}
            {selectedPaymentMethod && (
              <div className="bg-[#FFF9EF] border border-[#EA5C26] rounded-xl p-6 text-center space-y-4">
                <h3 className="font-heading font-bold text-base text-[#6D1344]">
                  {selectedPaymentMethod === "qr" && "Scan QR Code to Pay"}
                  {selectedPaymentMethod === "card" && "Enter Card Details"}
                  {selectedPaymentMethod === "netbanking" && "Select Your Bank"}
                </h3>

                {selectedPaymentMethod === "qr" && (
                  <div className="space-y-3">
                    <div className="w-44 h-44 bg-white border border-slate-300 rounded-xl mx-auto p-2.5 flex items-center justify-center shadow-inner">
                      <img
                        src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=upi://pay?pa=utsav@upi&pn=Utsav%20Devotional&am=951"
                        alt="UPI QR Code"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-xs text-slate-600">
                      Scan with Google Pay, PhonePe, Paytm or any UPI App to complete <strong>₹{totalPrice}</strong>
                    </p>
                  </div>
                )}

                {selectedPaymentMethod === "card" && (
                  <div className="space-y-3 max-w-sm mx-auto text-left">
                    <input
                      type="text"
                      placeholder="Card Number (4532 •••• •••• 8892)"
                      className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="MM / YY"
                        className="bg-white border border-slate-300 rounded px-3 py-2 text-xs"
                      />
                      <input
                        type="password"
                        placeholder="CVV"
                        className="bg-white border border-slate-300 rounded px-3 py-2 text-xs"
                      />
                    </div>
                  </div>
                )}

                {selectedPaymentMethod === "netbanking" && (
                  <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto text-xs">
                    {["SBI", "HDFC", "ICICI", "Axis", "Kotak", "PNB"].map((bank) => (
                      <button
                        key={bank}
                        onClick={() => setShowSuccessModal(true)}
                        className="p-2.5 bg-white border border-slate-300 rounded hover:border-[#EA5C26] font-semibold text-slate-800"
                      >
                        {bank}
                      </button>
                    ))}
                  </div>
                )}

                <button
                  onClick={() => setShowSuccessModal(true)}
                  className="w-full max-w-xs bg-[#EA5C26] hover:bg-[#D44B17] text-white font-bold text-xs py-3 rounded-lg cursor-pointer transition-colors shadow-xs"
                >
                  Complete Payment of ₹{totalPrice}
                </button>
              </div>
            )}
          </div>
        )}
      </main>

      {/* MOBILE STICKY BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 p-3 flex items-center justify-between md:hidden">
        <div>
          <span className="text-[10px] text-slate-500 block">Total Amount</span>
          <span className="font-bold text-sm text-[#EA5C26]">₹{totalPrice}</span>
        </div>

        {step === 1 && (
          <button
            onClick={() => setStep(2)}
            className="bg-[#EA5C26] hover:bg-[#D44B17] text-white font-semibold text-xs px-4 py-2.5 rounded cursor-pointer"
          >
            Continue to Review →
          </button>
        )}

        {step === 2 && (
          <button
            onClick={() => setStep(3)}
            className="bg-[#EA5C26] hover:bg-[#D44B17] text-white font-semibold text-xs px-4 py-2.5 rounded cursor-pointer"
          >
            Continue to Payment
          </button>
        )}

        {step === 3 && (
          <button
            onClick={() => setShowSuccessModal(true)}
            className="bg-[#EA5C26] hover:bg-[#D44B17] text-white font-semibold text-xs px-4 py-2.5 rounded cursor-pointer"
          >
            Pay ₹{totalPrice}
          </button>
        )}
      </div>

      {/* SUCCESS CONFIRMATION MODAL */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl border border-slate-200 max-w-sm w-full p-6 text-center space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-xl font-bold">
              ✓
            </div>

            <div className="space-y-1">
              <h3 className="font-heading text-lg font-bold text-[#6D1344]">
                Puja Seva Booked Successfully!
              </h3>
              <p className="text-xs text-slate-600">
                Your Sankalp for <strong className="text-slate-900">{devotees[0]?.name || "Shubham Sah"}</strong> has been confirmed.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded p-3 text-left text-xs space-y-1">
              <div>
                <span className="text-slate-500">Transaction ID: </span>
                <span className="font-mono font-semibold text-slate-800">UTSAV-2026-9812</span>
              </div>
              <div>
                <span className="text-slate-500">Amount Paid: </span>
                <span className="font-semibold text-emerald-700">₹{totalPrice}</span>
              </div>
              <div>
                <span className="text-slate-500">WhatsApp Proof: </span>
                <span className="font-semibold text-slate-800">+91 {phone}</span>
              </div>
            </div>

            <div className="flex gap-2 pt-1">
              <Link href="/" className="flex-1">
                <button className="w-full bg-[#EA5C26] hover:bg-[#D44B17] text-white font-semibold text-xs py-2.5 rounded cursor-pointer">
                  Return to Home
                </button>
              </Link>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="px-3 py-2 text-xs text-slate-600 hover:bg-slate-100 rounded border border-slate-200 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
