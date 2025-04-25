"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

type Language = "es" | "en"

type Translations = {
  [key: string]: {
    es: string
    en: string
  }
}

// Dictionary of translations
const translations: Translations = {
  // Navbar
  "nav.home": {
    es: "Inicio",
    en: "Home",
  },
  "nav.about": {
    es: "¿Qué es Waichatt?",
    en: "What is Waichatt?",
  },
  "nav.plans": {
    es: "Planes",
    en: "Plans",
  },
  "nav.testimonials": {
    es: "Testimonios",
    en: "Testimonials",
  },
  "nav.contact": {
    es: "Contacto",
    en: "Contact",
  },

  // Hero
  "hero.title": {
    es: "¿Cansado de perder clientes por respuestas lentas?",
    en: "Tired of losing customers due to slow responses?",
  },
  "hero.subtitle": {
    es: "Revoluciona tu comunicación con Waichatt",
    en: "Revolutionize your communication with Waichatt",
  },
  "hero.description": {
    es: "Agentes de IA integrados con WhatsApp",
    en: "AI agents integrated with WhatsApp",
  },
  "hero.cta": {
    es: "Comenzar ahora",
    en: "Start now",
  },

  // About
  "about.title": {
    es: "¿Qué es Waichatt?",
    en: "What is Waichatt?",
  },
  "about.description": {
    es: "Waichatt es la solución de automatización que integra inteligencia artificial en tu WhatsApp Business para vender y agendar turnos sin intervención manual. Elimina la frustración de respuestas tardías y la pérdida de oportunidades; tu negocio trabaja 24/7, atendiendo cada consulta y potenciando tus ventas.",
    en: "Waichatt is the automation solution that integrates artificial intelligence into your WhatsApp Business to sell and schedule appointments without manual intervention. Eliminate the frustration of late responses and lost opportunities; your business works 24/7, attending to every inquiry and boosting your sales.",
  },

  // Benefits
  "benefits.title": {
    es: "Beneficios",
    en: "Benefits",
  },
  "benefits.automation.title": {
    es: "Automatización Inteligente",
    en: "Intelligent Automation",
  },
  "benefits.automation.description": {
    es: "Olvídate de las respuestas repetitivas y dedicá tu tiempo a crecer.",
    en: "Forget about repetitive responses and dedicate your time to growth.",
  },
  "benefits.sales.title": {
    es: "Ventas 24/7",
    en: "24/7 Sales",
  },
  "benefits.sales.description": {
    es: "No pierdas ni una oportunidad; tus clientes son atendidos a toda hora.",
    en: "Don't miss a single opportunity; your customers are served at all hours.",
  },
  "benefits.analytics.title": {
    es: "Análisis Detallado",
    en: "Detailed Analytics",
  },
  "benefits.analytics.description": {
    es: "Descubrí qué buscan tus clientes para afinar tu estrategia.",
    en: "Discover what your customers are looking for to refine your strategy.",
  },

   // Plans
   "plans.nacional": {
    es: "Nacionales",
    en: "Nationals",
  },
  "plans.mensual": {
    es: "Mensual",
    en: "Monthly",
  },
  "plans.anual": {
    es: "Anual",
    en: "Yearly",
  },
   // Plans
   "plans.internacional": {
    es: "Internacionales",
    en: "International",
  },
  // Plans
  "plans.title": {
    es: "Planes",
    en: "Plans",
  },
  "plans.basic.title": {
    es: "Inicial",
    en: "Starter",
  },
  "plans.basic.price": {
    es: "$40/mes",
    en: "$40/month",
  },
  "plans.basic.messages": {
    es: "500 mensajes",
    en: "500 messages",
  },
  "plans.basic.autoresponses": {
    es: "Atención 24/7",
    en: "24/7 Attention",
  },
  "plans.basic.support": {
    es: "Agenda Citas / Turnos",
    en: "Schedule Appointments",
  },
  "plans.basic.products": {
    es: "Venta de productos",
    en: "Product sales",
  },
  "plans.basic.crm": {
    es: "CRM Integrado",
    en: "CRM Integrated",
  },
  "plans.basic.cta": {
    es: "Elegir plan",
    en: "Choose plan",
  },
  "plans.pro.title": {
    es: "Pro",
    en: "Pro",
  },
  "plans.pro.popular": {
    es: "Popular",
    en: "Popular",
  },
  "plans.pro.price": {
    es: "$120/mes",
    en: "$120/month",
  },
  "plans.pro.messages": {
    es: "2500 mensajes",
    en: "2500 messages",
  },
  "plans.pro.products": {
    es: "Venta de productos",
    en: "Product sales",
  },
  "plans.pro.support": {
    es: "Agenda Citas / Turnos",
    en: "Schedule Appointments",
  },
  "plans.pro.response": {
    es: "Atención 24/7",
    en: "24/7 Attention",
  },
  "plans.pro.crm": {
    es: "CRM Integrado",
    en: "CRM Integrated",
  },
  "plans.pro.cta": {
    es: "Elegir plan",
    en: "Choose plan",
  },
  "plans.business.title": {
    es: "Empresarial",
    en: "Business",
  },
  "plans.business.price": {
    es: "$270/mes",
    en: "$270/month",
  },
  "plans.business.messages": {
    es: "7000 mensajes",
    en: "7000 messages",
  },
  "plans.business.products": {
    es: "Venta de productos",
    en: "Product sales",
  },
  "plans.business.support": {
    es: "Atención 24/7",
    en: "24/7 Attention",
  },
  "plans.business.analytics": {
    es: "Agenda Citas / Turnos",
    en: "Schedule Appointments",
  },
  "plans.business.response": {
    es: "CRM Integrado",
    en: "Integrated CRM",
  },
  "plans.bussiness.crm": {
    es: "Venta de productos",
    en: "Product sales",
  },
  "plans.business.cta": {
    es: "Elegir plan",
    en: "Choose plan",
  },
  "plans.custom.title": {
    es: "A Medida",
    en: "Custom",
  },
  "plans.custom.price": {
    es: "Contactar",
    en: "Contact us",
  },
  "plans.custom.messages": {
    es: "Mensajes ilimitados",
    en: "Unlimited messages",
  },
  "plans.custom.products": {
    es: "Venta de productos",
    en: "Product sales",
  },
  "plans.custom.support": {
    es: "CRM Integrado",
    en: "Integrated CRM",
  },
  "plans.custom.integration": {
    es: "Atención 24/7",
    en: "24/7 Attention",
  },
  "plans.custom.training": {
    es: "Agendas Citas / Turnos",
    en: "Schedule Appointments",
  },
  "plans.custom.crm": {
    es: "Analisis avanzado",
    en: "Advanced analytics",
  },
  "plans.custom.cta": {
    es: "Contactar",
    en: "Contact us",
  },


  // Testimonials
  "testimonials.title": {
    es: "Testimonios",
    en: "Testimonials",
  },
  "testimonials.1.text": {
    es: "Waichatt ha transformado mi negocio. Ahora la atención a mis clientes es 24/7 y las ventas aumentaron un 40%.",
    en: "Waichatt has transformed my business. Now I serve my customers 24/7 and sales increased by 40%.",
  },
  "testimonials.1.name": {
    es: "María García",
    en: "Maria Garcia",
  },
  "testimonials.1.role": {
    es: "Dueña de Tienda Online",
    en: "Online Store Owner",
  },
  "testimonials.2.text": {
    es: "La capacidad de respuesta de Waichatt es impresionante. Mis clientes reciben atención rápida y precisa.",
    en: "Waichatt's responsiveness is impressive. My customers receive quick and accurate attention.",
  },
  "testimonials.2.name": {
    es: "Carlos Rodríguez",
    en: "Carlos Rodriguez",
  },
  "testimonials.2.role": {
    es: "Importador de China",
    en: "Importer from China",
  },
  "testimonials.3.text": {
    es: "Recomiendo Waichatt a cualquier negocio que quiera mejorar el servicio al cliente y aumentar ventas sin incrementar costos.",
    en: "I recommend Waichatt to any business that wants to improve customer service and increase sales without increasing costs.",
  },
  "testimonials.3.name": {
    es: "Laura Martínez",
    en: "Laura Martinez",
  },
  "testimonials.3.role": {
    es: "Consultora de Negocios",
    en: "Business Consultant",
  },

  // Contact
  "contact.title": {
    es: "Contacto",
    en: "Contact",
  },
  "contact.form.name": {
    es: "Nombre",
    en: "Name",
  },
  "contact.form.phone": {
    es: "Telefono",
    en: "Phone",
  },
  "contact.form.message": {
    es: "Mensaje",
    en: "Message",
  },
  "contact.form.submit": {
    es: "Enviar mensaje",
    en: "Send message",
  },
  "contact.whatsapp": {
    es: "Contáctanos por WhatsApp",
    en: "Contact us via WhatsApp",
  },
  "contact.social": {
    es: "Redes sociales",
    en: "Social media",
  },

  // Footer
  "footer.copyright": {
    es: "© 2025 Waichatt",
    en: "© 2025 Waichatt",
  },

}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`)
      return key
    }
    return translations[key][language]
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

