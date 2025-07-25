"use client"

import { Clock, MessageCircle, TrendingUp, Calendar, DollarSign, BarChart3 } from "lucide-react"

export default function ProblemSolution() {
  const solutions = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Atención 24/7",
      description: "Respuestas instantáneas sin importar la hora"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Venta Automática",
      description: "Convierte conversaciones en ventas reales"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Agenda Inteligente",
      description: "Coordina citas y seguimientos automáticamente"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Cobranza Eficiente",
      description: "Recordatorios y gestión de pagos automatizada"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Reportes Avanzados",
      description: "Métricas y análisis para optimizar tu negocio"
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-gray-900/50 to-transparent">
      <div className="container mx-auto px-4">
        {/* Problem */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/30 rounded-full px-6 py-3 mb-6">
            <Clock className="w-5 h-5 text-red-400" />
            <span className="text-red-400 font-semibold">El Problema</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            ¿Cansado de <span className="text-red-400">perder clientes</span><br />
            por respuestas lentas?
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cada minuto que un cliente espera una respuesta es una oportunidad de venta que se escapa. 
            Los negocios pierden hasta un 70% de leads por demoras en la atención.
          </p>
        </div>

        {/* Solution */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-6 py-3 mb-6">
            <MessageCircle className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold">La Solución</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            <span className="gradient-text">Waichatt responde por vos</span><br />
            24/7, aprende y te ayuda a vender más
          </h2>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="card-hover bg-gray-900/30 backdrop-blur-xl rounded-2xl p-6 text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon mx-auto">
                {solution.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 gradient-text">{solution.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <a href="#contacto" className="btn-primary text-lg px-8 py-4">
            Quiero automatizar mi negocio
          </a>
        </div>
      </div>
    </section>
  )
}