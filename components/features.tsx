"use client"

import { Brain, MessageSquare, Zap, BarChart3, Puzzle, Code } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <MessageSquare className="w-12 h-12" />,
      title: "CRM Conversacional",
      description: "Gestiona todos tus contactos, conversaciones y ventas desde una sola plataforma intuitiva.",
      details: ["Historial completo de conversaciones", "Segmentación automática de clientes", "Pipeline de ventas visual"]
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Agentes de IA por lenguaje natural",
      description: "Chatbots inteligentes que entienden el contexto y responden como un humano experto.",
      details: ["Procesamiento de lenguaje natural", "Aprendizaje continuo", "Personalidad de marca"]
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Automatizaciones 100% personalizadas",
      description: "Flujos de trabajo diseñados específicamente para tu tipo de negocio y procesos.",
      details: ["Workflows personalizados", "Triggers inteligentes", "Acciones automáticas"]
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Reportes y Alertas Inteligentes",
      description: "Métricas en tiempo real y alertas proactivas para optimizar tu rendimiento.",
      details: ["Dashboard en tiempo real", "Alertas personalizables", "Análisis predictivo"]
    },
    {
      icon: <Puzzle className="w-12 h-12" />,
      title: "Integraciones con sistemas externos",
      description: "Conecta Waichatt con todas las herramientas que ya usas en tu negocio.",
      details: ["APIs nativas", "Webhooks bidireccionales", "Sincronización automática"]
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Desarrollo a medida",
      description: "Funcionalidades específicas desarrolladas exclusivamente para tu empresa.",
      details: ["Desarrollo personalizado", "Integraciones únicas", "Soporte técnico dedicado"]
    }
  ]

  return (
    <section id="funcionalidades" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-6 py-3 mb-6">
            <Zap className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold">Funcionalidades</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            Todo lo que necesitás para<br />
            <span className="gradient-text">automatizar tu negocio</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Una plataforma completa que combina IA conversacional, CRM avanzado y 
            business intelligence para transformar tu WhatsApp en una máquina de ventas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-hover bg-gray-900/30 backdrop-blur-xl rounded-3xl p-8 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-6">
                <div className="feature-icon flex-shrink-0">
                  {feature.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 gradient-text">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                  
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-3 text-gray-400">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-3xl p-8">
            <h3 className="text-3xl font-bold mb-4 gradient-text">¿Querés ver cómo funciona en tu negocio?</h3>
            <p className="text-gray-300 mb-6">Agenda una demo personalizada y descubrí el potencial de tu WhatsApp</p>
            <a href="#contacto" className="btn-primary text-lg px-8 py-4">
              Agendar demo gratuita
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}