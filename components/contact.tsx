"use client"

import type React from "react"

import { useLanguage } from "./language-provider"
import { Send, Facebook, Instagram, Linkedin, Check, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"


export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(false);
    setIsSubmitting(true)
    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      if (res.status === 200) {
        setSubmitSuccess(true)
        setFormData({ name: "", email: "", message: "" })
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
      console.error("Error sending message:", error);
    }
    finally {
      setIsSubmitting(false)
    }

  }

  return (
    <div className="container mx-auto px-4">
      <h2 className="section-title gradient-text">{t("contact.title")}</h2>
      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <div>
          <form onSubmit={handleSubmit} method="POST" className="card">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 mb-2">
                {t("contact.form.name")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#268656] focus:border-transparent"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                {t("contact.form.email")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#268656] focus:border-transparent"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 mb-2">
                {t("contact.form.message")}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#268656] focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary flex items-center justify-center w-full"
            >
              {isSubmitting ? (
                <span className="animate-pulse">Enviando...</span>
              ) : (
                <>
                  {t("contact.form.submit")}
                  <Send className="ml-2" size={18} />
                </>
              )}
            </button>
            {submitSuccess && (
              <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-[10px] flex gap-2 justify-start items-center">
                <Check className="h-8 w-8 rounded-full p-1  bg-green-500" /> Mensaje enviado con éxito. Nos pondremos en contacto pronto.
              </div>
            )}
            {error && (
              <div className="mt-4 p-3 bg-red-100 text-red-800 rounded-[10px] flex gap-2 justify-start items-center">
                <X className="h-8 w-8 rounded-full p-1  bg-red-500" /> Hubo un error al enviar el mensaje. ¡Intentelo Nuevamente!
              </div>
            )}
          </form>
        </div>
        <div>
          <div className="card h-full flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-6 gradient-text">{t("contact.whatsapp")}</h3>
              <a href="https://wa.me/+5493816814079" target="_blank" rel="noopener noreferrer">
                <button className="bg-[#25D366] text-white py-3 px-8 rounded-[10px] flex items-center mb-8 gap-3 hover:bg-opacity-90 transition-all">
                  <Image src="whatsapp.svg" width={20} height={20} alt="logo whatsapp" />
                  WhatsApp
                </button>
              </a>

              <h3 className="text-xl font-bold mb-4 gradient-text">{t("contact.social")}</h3>
              <div className="flex space-x-4 mb-8">
                <a
                  href="https://www.facebook.com/share/1HQFRz6wav/?mibextid=wwXIfr"
                  className="w-12 h-12 bg-[#1877F2] text-white rounded-full flex items-center justify-center hover:opacity-90 transition-all"
                  aria-label="Facebook"
                  target="_blank"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://www.instagram.com/waichatt?igsh=bzY0ZHFlb29mY2Uz&utm_source=qr"
                  className="w-12 h-12 bg-[#E4405F] text-white rounded-full flex items-center justify-center hover:opacity-90 transition-all"
                  aria-label="Instagram"
                  target="_blank"
                >
                  <Instagram size={24} />
                </a>
                <a

                  href="https://www.linkedin.com/company/waichatt/about"
                  className="w-12 h-12 bg-[#0A66C2] text-white rounded-full flex items-center justify-center hover:opacity-90 transition-all"
                  aria-label="LinkedIn"
                  target="_blank"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

            <div className="mt-8">
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-600 text-sm">Horario de atención: Lunes a Viernes de 9:00 a 18:00 hs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

