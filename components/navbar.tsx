"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useLanguage } from "./language-provider"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es")
  }

  let flag = language === "es" ? "/eeuu.svg" : "/argentina.svg"

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#268656] rounded-full mr-3 flex items-center justify-center text-white font-bold">
             <Image src="waichattLogo.png" priority width={45} height={45} alt="logo waichatt"/>
            </div>
            <span className="text-xl font-bold gradient-text">WaiChatt</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#inicio" className="text-gray-700 hover:text-[#268656] transition-colors">
              {t("nav.home")}
            </Link>
            <Link href="#que-es-waichatt" className="text-gray-700 hover:text-[#268656] transition-colors">
              {t("nav.about")}
            </Link>
            <Link href="#planes" className="text-gray-700 hover:text-[#268656] transition-colors">
              {t("nav.plans")}
            </Link>
            <Link href="#testimonios" className="text-gray-700 hover:text-[#268656] transition-colors">
              {t("nav.testimonials")}
            </Link>
            <Link href="#contacto" className="text-gray-700 hover:text-[#268656] transition-colors">
              {t("nav.contact")}
            </Link>
            <div className="flex items-center justify-center">
              <Image src={flag} width={40} height={40} alt="Bandera de idioma" />
              <button
                onClick={toggleLanguage}
                className="ml-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Toggle language"
              >
                {language === "es" ? "EN" : "ES"}
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col space-y-4 rounded-lg  mt-2">
            <Link
              href="#inicio"
              className="text-gray-700 hover:text-[#268656] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.home")}
            </Link>
            <Link
              href="#que-es-waichatt"
              className="text-gray-700 hover:text-[#268656] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.about")}
            </Link>
            <Link
              href="#planes"
              className="text-gray-700 hover:text-[#268656] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.plans")}
            </Link>
            <Link
              href="#testimonios"
              className="text-gray-700 hover:text-[#268656] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.testimonials")}
            </Link>
            <Link
              href="#contacto"
              className="text-gray-700 hover:text-[#268656] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.contact")}
            </Link>
            <div className="flex items-center justify-start gap-2">
              <button
                onClick={toggleLanguage}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors self-start"
                aria-label="Toggle language"
              >
                {language === "es" ? "EN" : "ES"}
              </button>
              <Image src={flag} width={30} height={30} alt="Bandera de idioma" />
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

