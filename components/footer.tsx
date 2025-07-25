"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#que-es-waichatt", label: "Qué es Waichatt" },
    { href: "#funcionalidades", label: "Funcionalidades" },
    { href: "#planes", label: "Planes" },
    { href: "#testimonios", label: "Testimonios" },
    { href: "#integraciones", label: "Integraciones" },
    { href: "#contacto", label: "Contacto" }
  ]

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="#inicio" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-cyan rounded-full flex items-center justify-center">
                <Image src="/waichattLogo.png" width={35} height={35} alt="Waichatt Logo" />
              </div>
              <span className="text-3xl font-bold gradient-text">Waichatt</span>
            </Link>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-md">
              Transformamos tu WhatsApp en una máquina de ventas con IA conversacional, 
              CRM integrado y automatizaciones inteligentes.
            </p>
            
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1HQFRz6wav/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/waichatt?igsh=bzY0ZHFlb29mY2Uz&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-pink-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/waichatt/about"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-blue-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-6 gradient-text">Navegación</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold mb-6 gradient-text">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacidad"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/terminos"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <a
                  href="mailto:info@waichatt.com"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  info@waichatt.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2025 Waichatt. Todos los derechos reservados.
          </p>
          
          <div className="flex items-center space-x-4">
            <span className="text-gray-500 text-sm">Hecho con ❤️ en Argentina</span>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-gradient-cyan rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
            >
              <ArrowUp className="w-5 h-5 text-gray-900" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}