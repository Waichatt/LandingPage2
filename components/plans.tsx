"use client"

import { useLanguage } from "./language-provider"
import { Check, X } from "lucide-react"
import { useState } from "react"

export default function Plans() {
  const { t, language } = useLanguage()
  const [isAnnual, setIsAnnual] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState({
    billing: false,
    productImages: false,
    fileSharing: false,
  })

  const optionalAddons = [
    {
      id: "billing",
      title: language === "es" ? "Facturación" : "Billing",
      price: 50,
      selected: selectedOptions.billing,
    },
    {
      id: "fileSharing",
      title: language === "es" ? "Envío de Archivos" : "File sharing",
      price: 25,
      selected: selectedOptions.fileSharing,
    },
    {
      id: "productImages",
      title: language === "es" ? "Envío de imágenes" : "Product image sending",
      price: 15,
      selected: selectedOptions.productImages,
    },
  ]

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

  const calculateAddonsPrice = (basePrice: string) => {
    let numericValue = Number.parseInt(basePrice.replace(/\D/g, ""))

    // Add the price of selected add-ons
    if (selectedOptions.billing) numericValue += 50
    if (selectedOptions.productImages) numericValue += 15
    if (selectedOptions.fileSharing) numericValue += 25

    return basePrice.replace(/\d+/, numericValue.toString())
  }

  const calculateFinalPrice = (basePrice: string) => {
    let finalPrice = basePrice

    // First add the optional add-ons
    finalPrice = calculateAddonsPrice(finalPrice)

    // Then apply annual discount if applicable
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

  const handleOptionToggle = (optionId: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [optionId]: !prev[optionId as keyof typeof prev],
    }))
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
        t("plans.business.support"),
        t("plans.business.analytics"),
        t("plans.business.response"),
        t("plans.business.products"),
      ],
      cta: t("plans.business.cta"),
    },
  ]

  return (
    <div className="container mx-auto px-4 ">
      <h2 className="section-title gradient-text ">{t("plans.title")}</h2>
      <div style={{ height: '35px' }}></div>
      {/* Grid de 4 columnas: 3 planes + opcionales */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Los 3 planes */}
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`card relative flex flex-col h-full ${plan.popular ? "border-2 border-[#268656] transform lg:scale-105 shadow-xl" : ""
              }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 right-4 bg-[#268656] text-white px-4 py-1 rounded-full text-sm font-bold">
                ⭐ {t("plans.pro.popular")}
              </div>
            )}

            {/* Header section */}
            <div className="text-center pb-6 mb-6 border-b border-gray-100">
              <h3 className="text-xl font-bold mb-4">{plan.title}</h3>

              {/* Price section */}
              <div>
                {plan.originalPrice && <p className="text-sm text-gray-500 line-through mb-1">{plan.originalPrice}</p>}
                <p className="text-3xl font-bold gradient-text">{plan.price}</p>
                {(selectedOptions.billing || selectedOptions.productImages || selectedOptions.fileSharing) && (
                  <div className="flex items-center justify-center mt-2 text-xs text-[#268656]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    {language === "es" ? "Incluye opcionales" : "Includes add-ons"}
                  </div>
                )}
              </div>
            </div>

            {/* Features section */}
            <div className="flex-grow mb-6">
              <p className="text-sm text-gray-500 mb-4 text-center">
                {language === "es" ? "El plan incluye:" : "This plan includes:"}
              </p>
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    {feature.includes("❌") ? (
                      <X className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={18} />
                    ) : (
                      <Check className="text-[#268656] mr-2 mt-0.5 flex-shrink-0" size={18} />
                    )}
                    <span className="text-sm">{feature.replace("❌", "")}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA button */}
            <div className="mt-auto pt-4">
              <a
                href={`https://api.whatsapp.com/send?phone=5493816814079&text=Hola!! Estoy interesado en su plan ${plan.title
                  }${selectedOptions.billing ? " con Facturación" : ""}${selectedOptions.productImages ? " con Envío de imágenes" : ""
                  }${selectedOptions.fileSharing ? " con Envío de Archivos" : ""}`}
                target="_blank"
                rel="noreferrer"
                className="block w-full"
              >
                <button
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-all ${plan.popular
                      ? "bg-[#268656] text-white hover:bg-[#1f6b4a]"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                >
                  {plan.cta}
                </button>
              </a>
            </div>
          </div>
        ))}

        {/* Columna de opcionales */}
        <div className="card bg-gradient-to-br from-[#f9fdfb] to-[#f0f9f4] border border-[#e6f5ec] flex flex-col h-full">
          <div className="text-center pb-6 mb-6 border-b border-gray-100">
            <h3 className="text-xl font-bold mb-2 text-[#268656]">
              {language === "es" ? "Opcionales" : "Optional Add-ons"}
            </h3>
            <p className="text-xs text-gray-600">
              {language === "es"
                ? "Personaliza tu plan con estas características adicionales"
                : "Customize your plan with these additional features"}
            </p>
          </div>

          <div className="flex-grow space-y-4 mb-6">
            {optionalAddons.map((addon) => (
              <div
                key={addon.id}
                onClick={() => handleOptionToggle(addon.id)}
                className={`relative overflow-hidden rounded-lg border transition-all duration-300 cursor-pointer ${addon.selected
                    ? "border-[#268656] bg-white shadow-md"
                    : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                  }`}
              >
                <div className="p-4">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center">
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 transition-all ${addon.selected ? "border-[#268656] bg-[#268656]" : "border-gray-300"
                          }`}
                      >
                        {addon.selected && <Check className="text-white" size={12} />}
                      </div>
                      <h4 className={`font-medium ${addon.selected ? "text-[#268656]" : "text-gray-800"}`}>
                        {addon.title}
                      </h4>
                    </div>
                    <p className={`font-bold ${addon.selected ? "text-[#268656]" : "text-gray-800"}`}>${addon.price}</p>
                  </div>
                  <p className="text-xs text-gray-500 ml-8">
                    {addon.id === "billing" &&
                      (language === "es" ? "Genera facturas automáticamente" : "Generate invoices automatically")}
                    {addon.id === "productImages" &&
                      (language === "es" ? "Comparte catálogos de productos" : "Share product catalogs")}
                    {addon.id === "fileSharing" &&
                      (language === "es" ? "Envía documentos y archivos" : "Send documents and files")}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-4 border-t border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-gray-600">
                {language === "es" ? "Total opcionales:" : "Add-ons total:"}
              </span>
              <span className="font-bold text-[#268656]">
                $
                {(selectedOptions.billing ? 50 : 0) +
                  (selectedOptions.productImages ? 15 : 0) +
                  (selectedOptions.fileSharing ? 25 : 0)}
                <span className="text-sm font-normal text-gray-500">{language === "es" ? "/mes" : "/month"}</span>
              </span>
            </div>
            <p className="text-xs text-gray-500">
              {language === "es"
                ? "Este monto se añadirá al precio base del plan que elijas"
                : "This amount will be added to the base price of your chosen plan"}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
