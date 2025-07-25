import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Waichatt - Automatizá tu negocio con IA conversacional",
  description: "Transformá tu WhatsApp en una máquina de ventas con CRM, Agentes Inteligentes y Reportes. Atención 24/7, automatización completa y resultados garantizados.",
  keywords: "WhatsApp Business, IA conversacional, automatización, CRM, chatbot, inteligencia artificial, ventas automáticas, atención al cliente",
  authors: [{ name: "Waichatt" }],
  creator: "Waichatt",
  publisher: "Waichatt",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://waichatt.com",
    title: "Waichatt - Automatizá tu negocio con IA conversacional",
    description: "Transformá tu WhatsApp en una máquina de ventas con CRM, Agentes Inteligentes y Reportes. Atención 24/7, automatización completa y resultados garantizados.",
    siteName: "Waichatt",
  },
  twitter: {
    card: "summary_large_image",
    title: "Waichatt - Automatizá tu negocio con IA conversacional",
    description: "Transformá tu WhatsApp en una máquina de ventas con CRM, Agentes Inteligentes y Reportes.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/waichattLogo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#00ffe7" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}