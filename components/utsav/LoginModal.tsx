"use client"

import React, { useState } from "react"
import { ShieldCheck, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [mobileNumber, setMobileNumber] = useState("")
  const [step, setStep] = useState<"phone" | "otp">("phone")
  const [otp, setOtp] = useState("")

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault()
    if (mobileNumber.length === 10) {
      setStep("otp")
    }
  }

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault()
    onClose()
    setStep("phone")
    setMobileNumber("")
    setOtp("")
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md bg-[#FAFAF7] border-[#E7E0D3] p-6 rounded-2xl">
        <DialogHeader className="text-center pb-2">
          <div className="mx-auto w-12 h-12 rounded-full bg-[#4A0E17] flex items-center justify-center text-amber-300 mb-2">
            <Sparkles className="w-6 h-6 fill-amber-400" />
          </div>
          <DialogTitle className="font-heading text-xl font-bold text-[#4A0E17]">
            Welcome to Utsav Devotee Portal
          </DialogTitle>
          <p className="text-xs text-[#78716C]">
            Track your booked pujas, view Sankalp video proof & get authentic Prasad updates.
          </p>
        </DialogHeader>

        {step === "phone" ? (
          <form onSubmit={handleSendOtp} className="space-y-4 mt-2">
            <div>
              <label className="block text-xs font-semibold text-[#2D2A26] mb-1.5">
                Mobile Number
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-3 text-xs font-bold text-[#78716C] border-r border-[#E7E0D3] pr-2">
                  +91
                </span>
                <input
                  type="tel"
                  maxLength={10}
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ""))}
                  placeholder="Enter 10-digit mobile number"
                  className="w-full bg-white border border-[#E7E0D3] rounded-xl pl-14 pr-4 py-2.5 text-sm text-[#1F1E1D] focus:ring-2 focus:ring-[#C2410C]/50 focus:outline-hidden"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={mobileNumber.length !== 10}
              className="w-full bg-[#C2410C] hover:bg-[#9A3412] text-white font-bold rounded-xl py-2.5 shadow-md disabled:opacity-50"
            >
              Get OTP for Login
            </Button>
          </form>
        ) : (
          <form onSubmit={handleVerify} className="space-y-4 mt-2">
            <div>
              <label className="block text-xs font-semibold text-[#2D2A26] mb-1.5">
                Enter 4-digit OTP sent to +91 {mobileNumber}
              </label>
              <input
                type="text"
                maxLength={4}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="1 2 3 4"
                className="w-full text-center tracking-widest bg-white border border-[#E7E0D3] rounded-xl py-2.5 text-lg font-bold text-[#4A0E17] focus:ring-2 focus:ring-[#C2410C]/50 focus:outline-hidden"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#4A0E17] hover:bg-[#3B0712] text-amber-300 font-bold rounded-xl py-2.5 shadow-md"
            >
              Verify & Proceed
            </Button>
          </form>
        )}

        <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#78716C] pt-2 border-t border-[#E7E0D3] mt-4">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Your privacy & devotee details are 100% encrypted & secure</span>
        </div>
      </DialogContent>
    </Dialog>
  )
}
