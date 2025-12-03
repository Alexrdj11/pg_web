"use client"

import { useEffect, useRef } from "react"
import {
  Wifi,
  ShieldCheck,
  Utensils,
  Car,
  Zap,
  Wind,
  Sparkles,
  BookOpen,
  Coffee,
  Tv,
  WashingMachine,
} from "lucide-react"
import { cn } from "@/lib/utils"

const amenities = [
  { icon: Wifi, label: "High-Speed WiFi", description: "500 Mbps fiber" },
  { icon: ShieldCheck, label: "24/7 Security", description: "CCTV surveillance" },
  { icon: Utensils, label: "Dining area", description: "spacious and clean" },
  { icon: Car, label: "Parking Space", description: "Secure parking" },
  { icon: Tv, label: "Entertainment", description: "Smart TV in dining area" },
  { icon: WashingMachine, label: "Laundry", description: "automatic washing machines" },
]

export function AmenitiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const icons = sectionRef.current.querySelectorAll(".floating-icon")
      const scrolled = window.scrollY
      const sectionTop = sectionRef.current.offsetTop
      const offset = (scrolled - sectionTop + 500) * 0.1

      icons.forEach((icon, i) => {
        const element = icon as HTMLElement
        const direction = i % 2 === 0 ? 1 : -1
        element.style.transform = `translateY(${offset * direction * 0.5}px)`
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} id="amenities" className="relative py-24 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Premium Features</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Beyond Accommodation
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg text-pretty">
            Every amenity designed to elevate your student experience. Live the lifestyle you deserve.
          </p>
        </div>

        {/* Amenities Grid with Floating Icons */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon
            return (
              <div
                key={index}
                className={cn(
                  "floating-icon group relative p-6 rounded-2xl glossy transition-all duration-500 hover:shadow-[0_0_40px_oklch(0.78_0.12_85/0.2)] hover:-translate-y-2",
                  index % 3 === 0 && "animate-float",
                  index % 3 === 1 && "animate-float [animation-delay:1s]",
                  index % 3 === 2 && "animate-float [animation-delay:2s]",
                )}
                style={{ willChange: "transform" }}
              >
                {/* Icon Container */}
                <div className="relative mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-500">
                    <Icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 w-14 h-14 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Text */}
                <h3 className="text-foreground font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                  {amenity.label}
                </h3>
                <p className="text-sm text-muted-foreground">{amenity.description}</p>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/5 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
