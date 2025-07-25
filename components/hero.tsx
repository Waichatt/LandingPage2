"use client"

import { ArrowRight, Play } from "lucide-react"
import { useState } from "react"

export default function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center hero-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-in-left">
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="gradient-text">Automatizá</span><br />
              tu negocio con<br />
              <span className="text-glow">IA conversacional</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              CRM, Agentes Inteligentes y Reportes que transforman tu WhatsApp 
              en una <span className="text-cyan-400 font-semibold">máquina de ventas</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => setIsVideoPlaying(true)}
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <Play size={20} />
                <span>Ver demo</span>
              </button>
              <a href="#contacto" className="btn-secondary flex items-center justify-center space-x-2">
                <span>Agenda gratis tu auditoría</span>
                <ArrowRight size={20} />
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">24/7</div>
                <div className="text-gray-400 text-sm">Atención automática</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">+300%</div>
                <div className="text-gray-400 text-sm">Aumento en ventas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">5min</div>
                <div className="text-gray-400 text-sm">Setup inicial</div>
              </div>
            </div>
          </div>

          {/* Mockup */}
          <div className="relative animate-slide-in-right">
            <div className="relative animate-float">
              {/* Main Dashboard */}
              <div className="bg-gray-900/50 backdrop-blur-xl rounded-3xl p-6 border border-gray-700 glow-cyan">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-400">Waichatt CRM</div>
                </div>
                
                {/* Chat Interface */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold">
                      C
                    </div>
                    <div className="bg-gray-800 rounded-2xl rounded-tl-sm p-3 max-w-xs">
                      <p className="text-sm">¡Hola! Me interesa conocer sus productos</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 justify-end">
                    <div className="bg-gradient-cyan rounded-2xl rounded-tr-sm p-3 max-w-xs">
                      <p className="text-sm text-gray-900">¡Perfecto! Te voy a mostrar nuestro catálogo. ¿Qué tipo de producto buscás?</p>
                    </div>
                    <div className="w-8 h-8 bg-gradient-cyan rounded-full flex items-center justify-center text-xs font-bold text-gray-900">
                      AI
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-cyan-400 text-sm">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span>IA analizando intención de compra...</span>
                  </div>
                </div>

                {/* Customer Status */}
                <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-green-400">Cliente Caliente 🔥</div>
                      <div className="text-xs text-gray-400">Probabilidad de compra: 85%</div>
                    </div>
                    <div className="text-2xl">💰</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-purple-500/20 backdrop-blur-xl rounded-xl p-3 border border-purple-500/30">
                <div className="text-xs text-purple-300">+1 Lead generado</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-green-500/20 backdrop-blur-xl rounded-xl p-3 border border-green-500/30">
                <div className="text-xs text-green-300">Venta automatizada</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 z-50 modal-backdrop flex items-center justify-center p-4">
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden max-w-4xl w-full">
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
            >
              <X size={20} />
            </button>
            <div className="aspect-video bg-gray-800 flex items-center justify-center">
              <div className="text-center">
                <Play size={64} className="mx-auto mb-4 text-cyan-400" />
                <p className="text-gray-400">Demo de Waichatt CRM</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}