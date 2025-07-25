"use client"

import { Brain, MessageCircle, BarChart3, Zap } from "lucide-react"

export default function Education() {
  const concepts = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Inteligencia Artificial Conversacional",
      description: "Tecnología que permite a las máquinas entender y responder en lenguaje natural, como si fuera una conversación humana real."
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "WhatsApp Business Automatizado",
      description: "Transformación de WhatsApp en una herramienta de ventas y atención al cliente completamente automatizada y eficiente."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Business Intelligence",
      description: "Análisis inteligente de datos para tomar decisiones estratégicas basadas en el comportamiento real de tus clientes."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "CRM Conversacional",
      description: "Sistema que gestiona relaciones con clientes directamente desde las conversaciones, sin formularios ni procesos complejos."
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-transparent to-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-6 py-3 mb-6">
            <Brain className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-semibold">Educación</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            ¿Qué es la <span className="gradient-text">inteligencia artificial</span><br />
            conversacional?
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Entendé los conceptos clave que están revolucionando la forma en que los negocios 
            se comunican con sus clientes y por qué tu empresa necesita esta tecnología hoy.
          </p>
        </div>

        {/* Concepts Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {concepts.map((concept, index) => (
            <div
              key={index}
              className="card-hover bg-gray-900/30 backdrop-blur-xl rounded-3xl p-8 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-6">
                <div className="feature-icon flex-shrink-0">
                  {concept.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-4 gradient-text">{concept.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{concept.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Now Section */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-3xl p-8 lg:p-12 animate-fade-in-up">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 gradient-text">¿Por qué implementarlo ahora?</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Las empresas que adoptan IA conversacional hoy tienen una ventaja competitiva decisiva
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-xl font-bold mb-3 text-cyan-400">Ventaja Competitiva</h4>
              <p className="text-gray-400">Sé el primero en tu sector en ofrecer atención 24/7 inteligente</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h4 className="text-xl font-bold mb-3 text-purple-400">ROI Inmediato</h4>
              <p className="text-gray-400">Reduce costos operativos mientras aumentas las ventas</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h4 className="text-xl font-bold mb-3 text-green-400">Escalabilidad</h4>
              <p className="text-gray-400">Atiende miles de clientes simultáneamente sin contratar personal</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <h3 className="text-3xl font-bold mb-6 gradient-text">¿Listo para transformar tu negocio?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            No esperes a que tu competencia se adelante. Implementá IA conversacional hoy y 
            comenzá a ver resultados desde el primer día.
          </p>
          <a href="#contacto" className="btn-primary text-lg px-8 py-4">
            Comenzar mi transformación digital
          </a>
        </div>
      </div>
    </section>
  )
}