"use client"

import { useState } from "react"
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    service: "demo"
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        setSubmitSuccess(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          service: "demo"
        })
      }
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="section-padding bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-6 py-3 mb-6">
            <Send className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold">Contacto</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            Hablemos de tu<br />
            <span className="gradient-text">transformación digital</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos listos para ayudarte a automatizar tu negocio. 
            Elegí la forma que prefieras para comenzar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Agenda tu consulta gratuita</h3>
              
              {submitSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="text-xl font-bold text-green-400 mb-2">¡Mensaje enviado!</h4>
                  <p className="text-gray-300">Te contactaremos en las próximas 24 horas para coordinar tu demo.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Nombre *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Teléfono *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors"
                        placeholder="+54 9 11 1234-5678"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">Empresa</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">¿Qué te interesa?</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors"
                    >
                      <option value="demo">Ver demo del producto</option>
                      <option value="audit">Auditoría gratuita de WhatsApp</option>
                      <option value="pricing">Información sobre precios</option>
                      <option value="integration">Consulta sobre integraciones</option>
                      <option value="custom">Desarrollo personalizado</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Mensaje</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                      placeholder="Contanos sobre tu negocio y cómo podemos ayudarte..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center space-x-2 text-lg py-4"
                  >
                    {isSubmitting ? (
                      <span>Enviando...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Enviar mensaje</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-8">
              {/* Direct Contact */}
              <div className="bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Contacto directo</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-500/30 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-gray-300 font-medium">Teléfono</p>
                      <a href="tel:+5493816814079" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        +54 9 381 681-4079
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-gray-300 font-medium">Email</p>
                      <a href="mailto:info@waichatt.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                        info@waichatt.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <p className="text-gray-300 font-medium">Ubicación</p>
                      <p className="text-green-400">Tucumán, Argentina</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-yellow-500/20 border border-yellow-500/30 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-gray-300 font-medium">Horarios</p>
                      <p className="text-yellow-400">Lun - Vie: 9:00 - 18:00 hs</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/30 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-green-400">¿Preferís WhatsApp?</h3>
                <p className="text-gray-300 mb-6">
                  Hablá directamente con nuestro equipo por WhatsApp y obtené respuestas inmediatas.
                </p>
                <a
                  href="https://wa.me/5493816814079?text=Hola! Me interesa conocer más sobre Waichatt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full flex items-center justify-center space-x-2"
                >
                  <span className="text-2xl">📱</span>
                  <span>Escribinos por WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}