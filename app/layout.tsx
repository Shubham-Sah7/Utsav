import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Utsav - Experience Hindu Pujas & Rituals",
  description:
    "Offer pujas and prasad at India's most famous temples directly from your home on auspicious occasions.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="antialiased">
      <body className="min-h-screen bg-white text-gray-900 font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
