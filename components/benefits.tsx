"use client"

import { useLanguage } from "./language-provider"
import { Brain, Clock, BarChart3 } from "lucide-react"

export default function Benefits() {
  const { t } = useLanguage()

  const benefits = [
    {
      icon: <Brain size={48} className="text-[#268656]" />,
      title: t("benefits.automation.title"),
      description: t("benefits.automation.description"),
    },
    {
      icon: <Clock size={48} className="text-[#268656]" />,
      title: t("benefits.sales.title"),
      description: t("benefits.sales.description"),
    },
    {
      icon: <BarChart3 size={48} className="text-[#268656]" />,
      title: t("benefits.analytics.title"),
      description: t("benefits.analytics.description"),
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <h2 className="section-title gradient-text">{t("benefits.title")}</h2>
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {benefits.map((benefit, index) => (
          <div key={index} className="card hover:border-[#268656] hover:border-2 group">
            <div className="mb-6 float-animation">{benefit.icon}</div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-[#268656] transition-colors">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

