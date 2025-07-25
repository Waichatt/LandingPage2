"use client"

import { Calendar, MessageCircle, ArrowRight } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-900/50 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl lg:text-6xl font-black mb-6">
              ¿Querés ver cómo funcionaría<br />
              <span className="gradient-text">en tu negocio?</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              No te quedes con dudas. Agenda una demo personalizada y descubrí exactamente 
              cómo Waichatt puede transformar tu WhatsApp en una máquina de ventas.
            </p>

            {/* CTA Options */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="card-hover bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700">
                <Calendar className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 gradient-text">Demo Personalizada</h3>
                <p className="text-gray-300 mb-6">
                  15 minutos donde te mostramos exactamente cómo funcionaría en tu negocio
                </p>
                <a href="#contacto" className="btn-primary w-full flex items-center justify-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Agendar Demo</span>
                </a>
              </div>

              <div className="card-hover bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700">
                <MessageCircle className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 gradient-text">Auditoría Gratuita</h3>
                <p className="text-gray-300 mb-6">
                  Analizamos tu WhatsApp actual y te mostramos oportunidades de mejora
                </p>
                <a href="#contacto" className="btn-secondary w-full flex items-center justify-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>Solicitar Auditoría</span>
                </a>
              </div>
            </div>

            {/* Guarantees */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="flex items-center justify-center space-x-3 text-gray-400">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Sin compromiso</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-400">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Setup gratuito</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Resultados garantizados</span>
              </div>
            </div>

            {/* Urgency */}
            <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-2xl p-6">
              <p className="text-lg text-gray-300">
                <span className="text-red-400 font-bold">⚡ Oferta limitada:</span> Los primeros 50 clientes obtienen 
                <span className="text-cyan-400 font-bold"> 3 meses gratis</span> de nuestro plan Business
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}