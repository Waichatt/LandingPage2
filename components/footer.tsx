"use client"

import { useLanguage } from "./language-provider"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react"
import Image from "next/image"


export default function Footer() {
  const { t } = useLanguage()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-[#1f6b4a] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="w-12 h-12 bg-white rounded-full mr-3 flex items-center justify-center">
              <Image src="waichattLogo.png" width={75} height={75} alt="logo waichatt"/>
            </div>
            <span className="text-2xl font-bold">Waichatt</span>
          </div>
          <div className="flex space-x-6">
            <a href="https://www.facebook.com/share/1HQFRz6wav/?mibextid=wwXIfr" target="_blank" className="hover:text-[#5dae85] transition-colors" aria-label="Facebook">
              <Facebook size={24} />
            </a>
            <a href="https://www.instagram.com/waichatt?igsh=bzY0ZHFlb29mY2Uz&utm_source=qr" target="_blank" className="hover:text-[#5dae85] transition-colors" aria-label="Instagram">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-[#5dae85] transition-colors cursor-not-allowed " aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        <div className="border-t border-[#5dae85]/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>{t("footer.copyright")}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#inicio" className="hover:text-[#5dae85] transition-colors">
              {t("nav.home")}
            </Link>
            <Link href="#que-es-waichatt" className="hover:text-[#5dae85] transition-colors">
              {t("nav.about")}
            </Link>
            <Link href="#planes" className="hover:text-[#5dae85] transition-colors">
              {t("nav.plans")}
            </Link>
            <Link href="#contacto" className="hover:text-[#5dae85] transition-colors">
              {t("nav.contact")}
            </Link>
          </div>
          <button
            onClick={scrollToTop}
            className="mt-6 md:mt-0 w-10 h-10 bg-[#5dae85] rounded-full flex items-center justify-center hover:bg-[#268656] transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  )
}

