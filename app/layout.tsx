import type { Metadata } from "next"
import { Poppins, Quicksand } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
})

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Utsav - Connect with India's Sacred Temples & Book Authentic Pujas",
  description:
    "Experience authentic pujas, bhet offerings, and divine prasad delivery at home from India's most revered temples including Kashi Vishwanath, Mahakaleshwar, and Kamakhya.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`antialiased ${poppins.variable} ${quicksand.variable}`}>
      <body className="min-h-screen bg-[#FFF9EF] text-[#2C151B] font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

