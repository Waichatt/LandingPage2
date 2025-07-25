"use client"

import { Check, Star, Zap } from "lucide-react"
import { useState } from "react"

export default function Pricing() {
  const [showComparison, setShowComparison] = useState(false)

  const plans = [
    {
      name: "Starter",
      price: "$60",
      period: "/mes",
      description: "Perfecto para emprendedores y pequeños negocios",
      features: [
        "500 mensajes incluidos",
        "1 agente de IA",
        "CRM básico",
        "Reportes estándar",
        "Soporte por email",
        "Integraciones básicas"
      ],
      cta: "Comenzar ahora",
      popular: false
    },
    {
      name: "Business",
      price: "$180",
      period: "/mes",
      description: "Ideal para empresas en crecimiento",
      features: [
        "2,500 mensajes incluidos",
        "3 agentes de IA",
        "CRM avanzado",
        "Reportes detallados",
        "Soporte prioritario",
        "Todas las integraciones",
        "Automatizaciones avanzadas",
        "API access"
      ],
      cta: "Elegir Business",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$450",
      period: "/mes",
      description: "Para empresas que necesitan máximo rendimiento",
      features: [
        "7,000 mensajes incluidos",
        "Agentes ilimitados",
        "CRM empresarial",
        "Business Intelligence",
        "Soporte 24/7",
        "Integraciones personalizadas",
        "Desarrollo a medida",
        "Consultoría estratégica"
      ],
      cta: "Contactar ventas",
      popular: false
    }
  ]

  const comparisonFeatures = [
    { feature: "Mensajes incluidos", starter: "500", business: "2,500", enterprise: "7,000" },
    { feature: "Agentes de IA", starter: "1", business: "3", enterprise: "Ilimitados" },
    { feature: "CRM", starter: "Básico", business: "Avanzado", enterprise: "Empresarial" },
    { feature: "Reportes", starter: "Estándar", business: "Detallados", enterprise: "BI Completo" },
    { feature: "Soporte", starter: "Email", business: "Prioritario", enterprise: "24/7" },
    { feature: "Integraciones", starter: "Básicas", business: "Todas", enterprise: "Personalizadas" },
    { feature: "API Access", starter: "❌", business: "✅", enterprise: "✅" },
    { feature: "Desarrollo a medida", starter: "❌", business: "❌", enterprise: "✅" }
  ]

  return (
    <section id="planes" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/30 rounded-full px-6 py-3 mb-6">
            <Zap className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-semibold">Planes</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            Elegí el plan perfecto<br />
            <span className="gradient-text">para tu negocio</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Todos los planes incluyen acceso completo a la plataforma. 
            Los mensajes no utilizados se acumulan para el siguiente mes.
          </p>

          <button
            onClick={() => setShowComparison(!showComparison)}
            className="btn-secondary mb-8"
          >
            {showComparison ? "Ocultar comparación" : "Comparar planes"}
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card animate-fade-in-up ${plan.popular ? 'relative' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-cyan text-gray-900 px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Más Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 gradient-text">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-black text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`block text-center py-4 px-6 rounded-2xl font-bold transition-all duration-300 ${
                  plan.popular
                    ? 'btn-primary'
                    : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700 hover:border-cyan-400'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        {showComparison && (
          <div className="animate-fade-in-up bg-gray-900/30 backdrop-blur-xl rounded-3xl p-8 border border-gray-700 overflow-x-auto">
            <h3 className="text-2xl font-bold mb-6 text-center gradient-text">Comparación Detallada</h3>
            <div className="min-w-full">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-4 px-4 text-gray-300">Característica</th>
                    <th className="text-center py-4 px-4 text-cyan-400">Starter</th>
                    <th className="text-center py-4 px-4 text-cyan-400">Business</th>
                    <th className="text-center py-4 px-4 text-cyan-400">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row, index) => (
                    <tr key={index} className="border-b border-gray-800">
                      <td className="py-4 px-4 text-gray-300 font-medium">{row.feature}</td>
                      <td className="py-4 px-4 text-center text-gray-400">{row.starter}</td>
                      <td className="py-4 px-4 text-center text-gray-400">{row.business}</td>
                      <td className="py-4 px-4 text-center text-gray-400">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-6 animate-fade-in-up">
            <h4 className="text-xl font-bold mb-3 text-cyan-400">💡 Mensajes Acumulativos</h4>
            <p className="text-gray-300">Los mensajes no utilizados se suman al siguiente mes. ¡No perdés nada!</p>
          </div>
          
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-2xl p-6 animate-fade-in-up">
            <h4 className="text-xl font-bold mb-3 text-purple-400">🚀 Setup Gratuito</h4>
            <p className="text-gray-300">Configuración e implementación incluida en todos los planes.</p>
          </div>
        </div>
      </div>
    </section>
  )
}