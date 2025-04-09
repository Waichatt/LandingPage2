"use client"

import { useLanguage } from "./language-provider"

export default function About() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto px-4">
      <h2 className="section-title gradient-text">{t("about.title")}</h2>
      <p className="section-subtitle max-w-4xl mx-auto">{t("about.description")}</p>
      <div className="mt-12 flex justify-center">
        <div className="relative w-full max-w-3xl">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#5dae85]/10 rounded-full"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#1f6b4a]/10 rounded-full"></div>
          <div className="relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="h-[300px] sm:h-[400px] bg-gradient-to-br from-[#1f6b4a] to-[#5dae85] flex items-center justify-center">
              <div className="text-white text-center p-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">WaiChatt AI</h3>
                <p className="max-w-md">
                  Nuestros agentes de IA aprenden de cada interacción para brindar respuestas cada vez más precisas y
                  personalizadas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

