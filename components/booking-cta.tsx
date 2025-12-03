"use client"

import { Phone, MessageCircle } from "lucide-react"

export function BookingCTA() {
  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      {/* Cinematic Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('/cinematic-luxury-interior-lobby-warm-ambient-light.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />

      {/* Bloom Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Content Card */}
        <div className="glossy rounded-3xl p-8 md:p-12 lg:p-16 text-center">
          {/* Header */}
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Contact Us
            <span className="text-primary bloom"> Today</span>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground text-lg mb-12 text-pretty">
            Ready to find your perfect living space? Reach out to us and we'll help you get started.
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Call Us Button */}
            <a
              href="tel:9886217207"
              className="group w-full sm:w-auto px-10 py-5 bg-primary text-primary-foreground rounded-xl font-medium tracking-wide hover:shadow-[0_0_50px_oklch(0.78_0.12_85/0.5)] transition-all duration-500 flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5" />
              <span>Call Us</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919538072720"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto px-10 py-5 bg-green-600 text-white rounded-xl font-medium tracking-wide hover:bg-green-700 hover:shadow-[0_0_50px_rgba(34,197,94,0.5)] transition-all duration-500 flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Text Us on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
