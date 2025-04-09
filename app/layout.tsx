import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Roboto, Montserrat, Poppins } from 'next/font/google';
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"

const inter = Inter({ subsets: ["latin"] })
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "WaiChatt",
  description: "Revoluciona tu comunicación con agentes de IA integrados con WhatsApp",
  keywords: "WhatsApp, IA, chatbot, automatización, ventas, atención al cliente, agente IA",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="">
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'