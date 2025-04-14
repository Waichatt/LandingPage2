"use client"

import { useLanguage } from "./language-provider"
import { ArrowRight } from "lucide-react"
import Image from "next/image"


export default function Hero() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text leading-tight">
            {t("hero.title")}
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700">{t("hero.subtitle")}</h2>
          <p className="text-xl text-gray-600 mb-8">{t("hero.description")}</p>
          <a href="#contacto" className="appearance-none">
            <button className="btn-primary flex items-center">
              {t("hero.cta")}
              <ArrowRight className="ml-2" size={20} />
            </button>
          </a>
        </div>
        <div className="lg:w-1/2 float-animation">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#5dae85]/10 rounded-full"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#1f6b4a]/10 rounded-full"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 z-10">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-[#268656] rounded-full flex items-center justify-center text-white font-bold">
                  <Image src="/waichatMuneco2.png" width={50} height={50} alt="logo waichatt" />
                </div>
                <div className="flex-1">
                  <div className="bg-[#f0f0f0] rounded-lg p-3 mb-2">
                    <p className="text-sm">¡Hola! Soy el asistente virtual de WaiChatt. ¿En qué puedo ayudarte hoy?</p>
                  </div>
                  <div className="bg-[#e8f5e9] rounded-lg p-3 mb-2">
                    <p className="text-sm">
                      Puedo responder preguntas sobre nuestros productos, agendar una demostración o ayudarte con el
                      proceso de compra.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                  U
                </div>
                <div className="flex-1">
                  <div className="bg-[#f0f0f0] rounded-lg p-3">
                    <p className="text-sm">Me gustaría saber más sobre los planes disponibles</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-1 h-10 bg-gray-100 rounded-full px-4 flex items-center">
                  <span className="text-gray-400 text-sm">Escribe un mensaje...</span>
                </div>
                <button className="ml-2 w-10 h-10 bg-[#268656] rounded-full flex items-center justify-center text-white">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

