"use client"

import { useLanguage } from "./language-provider"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function Testimonials() {
  const { t } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      text: t("testimonials.1.text"),
      name: t("testimonials.1.name"),
      role: t("testimonials.1.role"),
      avatar: "/testimonio1.jpg?height=80&width=80",
    },
    {
      text: t("testimonials.2.text"),
      name: t("testimonials.2.name"),
      role: t("testimonials.2.role"),
      avatar: "/testimonio4.jpeg?height=80&width=80",
    },
    {
      text: t("testimonials.3.text"),
      name: t("testimonials.3.name"),
      role: t("testimonials.3.role"),
      avatar: "/testimonio3.jpg?height=80&width=80",
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="container mx-auto px-4">
      <h2 className="section-title gradient-text">{t("testimonials.title")}</h2>
      <div className="mt-12 max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute -top-10 -left-10 text-[#5dae85]/20">
            <Quote size={80} />
          </div>
          <div className="card">
            <div className="mb-8">
              <p className="text-lg text-gray-700 italic">"{testimonials[activeIndex].text}"</p>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <img
                  src={testimonials[activeIndex].avatar || "/placeholder.svg"}
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold">{testimonials[activeIndex].name}</h4>
                <p className="text-gray-600">{testimonials[activeIndex].role}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-[#268656]" : "bg-gray-300"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}

