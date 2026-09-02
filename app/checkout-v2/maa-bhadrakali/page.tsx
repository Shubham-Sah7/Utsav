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
  
  // Payment Modal Simulation
  const [showPaymentModal, setShowPaymentModal] = useState(false);

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
            {step === 2 ? (
              <button
                onClick={() => setStep(1)}
                className="text-xs font-medium text-[#6D1344] hover:underline cursor-pointer flex items-center gap-1"
              >
                ← Back to Sankalp
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
                  : "bg-[#6D1344] text-white"
              }`}
            >
              {step > 1 ? "✓" : "1"}
            </span>
            <span className={step === 1 ? "font-bold text-[#6D1344]" : "text-slate-600 font-medium"}>
              Sankalp
            </span>
          </div>

          <div className="flex-1 h-[1px] bg-slate-200 mx-3" />

          {/* Step 2 */}
          <div className="flex items-center gap-2">
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${
                step === 2
                  ? "bg-[#EA5C26] text-white"
                  : "bg-slate-200 text-slate-600"
              }`}
            >
              2
            </span>
            <span className={step === 2 ? "font-bold text-[#6D1344]" : "text-slate-400 font-medium"}>
              Review & Bhet
            </span>
          </div>

          <div className="flex-1 h-[1px] bg-slate-200 mx-3" />

          {/* Step 3 */}
          <div className="flex items-center gap-2 opacity-40">
            <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-[11px] font-bold">
              3
            </span>
            <span className="text-slate-400 font-medium">Payment</span>
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
                  onClick={() => setShowPaymentModal(true)}
                  className="w-full bg-[#EA5C26] hover:bg-[#D44B17] text-white font-semibold text-xs py-3 rounded cursor-pointer transition-colors block text-center"
                >
                  Continue to Payment
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
                      onClick={() => setShowPaymentModal(true)}
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
      </main>

      {/* MOBILE STICKY BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 p-3 flex items-center justify-between md:hidden">
        <div>
          <span className="text-[10px] text-slate-500 block">Total Amount</span>
          <span className="font-bold text-sm text-[#EA5C26]">₹{totalPrice}</span>
        </div>

        {step === 1 ? (
          <button
            onClick={() => setStep(2)}
            className="bg-[#EA5C26] hover:bg-[#D44B17] text-white font-semibold text-xs px-4 py-2.5 rounded cursor-pointer"
          >
            Continue to Review →
          </button>
        ) : (
          <button
            onClick={() => setShowPaymentModal(true)}
            className="bg-[#EA5C26] hover:bg-[#D44B17] text-white font-semibold text-xs px-4 py-2.5 rounded cursor-pointer"
          >
            Continue to Payment
          </button>
        )}
      </div>

      {/* PAYMENT SIMULATION MODAL */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg border border-slate-200 max-w-sm w-full p-6 text-center space-y-4">
            <h3 className="font-heading text-lg font-bold text-[#6D1344]">
              Payment Connection
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Navigating to payment gateway for <strong className="text-slate-900">₹{totalPrice}</strong>.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded p-3 text-left text-xs space-y-1">
              <div>
                <span className="text-slate-500">Devotee: </span>
                <span className="font-semibold">{devotees[0]?.name || "Shubham Sah"}</span>
              </div>
              <div>
                <span className="text-slate-500">Gotra: </span>
                <span className="font-semibold">{devotees[0]?.gotra || "Kashyap"}</span>
              </div>
              {selectedBhet.length > 0 && (
                <div>
                  <span className="text-slate-500">Bhet: </span>
                  <span className="font-semibold text-[#EA5C26]">
                    {selectedBhet.map((id) => BHET_OPTIONS.find((b) => b.id === id)?.title).join(", ")}
                  </span>
                </div>
              )}
            </div>

            <div className="flex gap-2 pt-2">
              <Link href="/puja/ganesh-sahastra-archan" className="flex-1">
                <button className="w-full bg-[#EA5C26] hover:bg-[#D44B17] text-white font-semibold text-xs py-2 rounded cursor-pointer">
                  Go to Checkout
                </button>
              </Link>
              <button
                onClick={() => setShowPaymentModal(false)}
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
