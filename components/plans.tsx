"use client"

import { useLanguage } from "./language-provider"
import { Check, X } from "lucide-react"
import { useState } from "react"

export default function Plans() {
  const { t, language } = useLanguage()
  const [isAnnual, setIsAnnual] = useState(false)

  const basePrices = {
    basic: language === "es" ? "$60/mes" : "$60/month",
    pro: language === "es" ? "$180/mes" : "$180/month",
    business: language === "es" ? "$450/mes" : "$450/month",
  }

  const calculateOriginalPrice = (price: string) => {
    const numericValue = Number.parseInt(price.replace(/\D/g, ""))
    const originalValue = Math.round(numericValue * 1.2) // 20% higher

    return price.replace(numericValue.toString(), originalValue.toString())
  }

  const calculateAnnualPrice = (price: string) => {
    const numericValue = Number.parseInt(price.replace(/\D/g, ""))
    const monthlyText = language === "es" ? "/mes" : "/month"
    const annualText = language === "es" ? "/año" : "/year"

    const annualValue = Math.round(numericValue * 12 * 0.85)

    return price.replace(numericValue.toString(), annualValue.toString()).replace(monthlyText, annualText)
  }

  const calculateFinalPrice = (basePrice: string) => {
    let finalPrice = basePrice

    if (isAnnual) {
      finalPrice = calculateAnnualPrice(finalPrice)
    }

    return finalPrice
  }

  const calculateOriginalFinalPrice = (basePrice: string) => {
    let originalPrice = calculateOriginalPrice(basePrice)

    if (isAnnual) {
      originalPrice = calculateAnnualPrice(originalPrice)
    }

    return originalPrice
  }

  const plans = [
    {
      title: t("plans.basic.title"),
      price: calculateFinalPrice(basePrices.basic),
      originalPrice: calculateOriginalFinalPrice(basePrices.basic),
      popular: false,
      features: [
        t("plans.basic.messages"),
        t("plans.basic.autoresponses"),
        t("plans.basic.support"),
        t("plans.basic.crm"),
        t("plans.basic.products"),
      ],
      cta: t("plans.basic.cta"),
    },
    {
      title: t("plans.pro.title"),
      price: calculateFinalPrice(basePrices.pro),
      originalPrice: calculateOriginalFinalPrice(basePrices.pro),
      popular: true,
      features: [
        t("plans.pro.messages"),
        t("plans.pro.response"),
        t("plans.pro.support"),
        t("plans.pro.crm"),
        t("plans.pro.products"),
      ],
      cta: t("plans.pro.cta"),
    },
    {
      title: t("plans.business.title"),
      price: calculateFinalPrice(basePrices.business),
      originalPrice: calculateOriginalFinalPrice(basePrices.business),
      popular: false,
      features: [
        t("plans.business.messages"),
        t("plans.business.response"),
        t("plans.business.products"),
        t("plans.business.support"),
        t("plans.business.analytics"),
      ],
      cta: t("plans.business.cta"),
    },
    {
      title: t("plans.custom.title"),
      price: t("plans.custom.price"),
      originalPrice: null, // Custom plan doesn't have an original price
      popular: false,
      features: [
        t("plans.custom.messages"),
        t("plans.custom.products"),
        t("plans.custom.support"),
        t("plans.custom.integration"),
        t("plans.custom.crm"),
        t("plans.custom.file"),
        t("plans.custom.training"),
      ],
      cta: t("plans.custom.cta"),
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <h2 className="section-title gradient-text">{t("plans.title")}</h2>

      {/* Contenedor para ambos selectores */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
        {/* Selector de facturación (Mensual/Anual) */}
        <div className="inline-flex rounded-md shadow-sm p-1 bg-gray-100">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-6 py-2 text-sm font-medium rounded-md transition-all ${!isAnnual ? "bg-white text-[#268656] shadow-sm" : "text-gray-600 hover:text-gray-800"
              }`}
          >
            {t("plans.mensual")}
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-6 py-2 text-sm font-medium rounded-md transition-all ${isAnnual ? "bg-white text-[#268656] shadow-sm" : "text-gray-600 hover:text-gray-800"
              }`}
          >
            {t("plans.anual")} {isAnnual && "(15% OFF)"}
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`card relative ${plan.popular ? "border-2 border-[#268656] transform scale-105 shadow-2xl" : ""
              }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 right-4 bg-[#268656] text-white px-4 py-1 rounded-full text-sm font-bold">
                ⭐ {t("plans.pro.popular")}
              </div>
            )}
            <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
            <div className="mb-6">
              {plan.originalPrice && <p className="text-lg text-gray-500 line-through mb-1">{plan.originalPrice}</p>}
              <p className="text-2xl font-bold gradient-text">{plan.price}</p>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  {feature.includes("❌") ? (
                    <X className="text-red-500 mr-2" size={18} />
                  ) : (
                    <Check className="text-[#268656] mr-2" size={18} />
                  )}
                  <span>{feature.replace("❌", "")}</span>
                </li>
              ))}
            </ul>
            <a href="https://api.whatsapp.com/send?phone=5493813488076&text=Hola!! Estoy interesado en sus servicios" target="_blank">

              <button
                className={`w-full py-2 px-4 rounded-lg font-medium transition-all ${plan.popular
                    ? "bg-[#268656] text-white hover:bg-[#1f6b4a]"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
              >
                {plan.cta}
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

