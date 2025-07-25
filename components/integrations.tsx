"use client"

import Image from "next/image"

export default function Integrations() {
  const integrations = [
    { name: "Chatwoot", logo: "🗨️" },
    { name: "WhatsApp Cloud", logo: "📱" },
    { name: "Meta Ads", logo: "📊" },
    { name: "Google Ads", logo: "🎯" },
    { name: "Supabase", logo: "⚡" },
    { name: "n8n", logo: "🔗" },
    { name: "Mercado Pago", logo: "💳" },
    { name: "PayPal", logo: "💰" },
    { name: "Qdrant", logo: "🧠" },
    { name: "Tokko Bróker", logo: "🏠" },
    { name: "Gmail", logo: "📧" },
    { name: "Google Maps", logo: "🗺️" },
    { name: "Google Calendar", logo: "📅" },
    { name: "Google Sheets", logo: "📊" },
    { name: "Telegram", logo: "✈️" },
    { name: "LinkedIn", logo: "💼" }
  ]

  // Duplicate for seamless scroll
  const duplicatedIntegrations = [...integrations, ...integrations]

  return (
    <section id="integraciones" className="section-padding bg-gradient-to-b from-transparent to-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-6 py-3 mb-6">
            <span className="text-purple-400 font-semibold">🔗 Integraciones</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            Conecta con todas<br />
            <span className="gradient-text">tus herramientas favoritas</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Waichatt se integra perfectamente con las plataformas que ya usás, 
            creando un ecosistema unificado para tu negocio.
          </p>
        </div>

        {/* Integration Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-8 integration-scroll">
            {duplicatedIntegrations.map((integration, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-32 bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-700 flex flex-col items-center justify-center hover:border-cyan-400 hover:glow-cyan transition-all duration-300 group"
              >
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {integration.logo}
                </div>
                <div className="text-sm text-gray-400 text-center font-medium">
                  {integration.name}
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none"></div>
        </div>

        {/* Integration Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center animate-fade-in-up">
            <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold mb-3 gradient-text">Setup Instantáneo</h3>
            <p className="text-gray-400">Conecta tus herramientas en minutos, no en días</p>
          </div>
          
          <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="w-16 h-16 bg-purple-500/10 border border-purple-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔄</span>
            </div>
            <h3 className="text-xl font-bold mb-3 gradient-text">Sincronización Automática</h3>
            <p className="text-gray-400">Datos siempre actualizados en tiempo real</p>
          </div>
          
          <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="text-xl font-bold mb-3 gradient-text">Seguridad Garantizada</h3>
            <p className="text-gray-400">Conexiones encriptadas y datos protegidos</p>
          </div>
        </div>

        {/* Custom Integration CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">¿No encontrás tu herramienta?</h3>
            <p className="text-gray-300 mb-6">Desarrollamos integraciones personalizadas para cualquier sistema</p>
            <a href="#contacto" className="btn-secondary">
              Solicitar integración personalizada
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}