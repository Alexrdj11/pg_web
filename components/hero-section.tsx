"use client"

import { useEffect, useRef } from "react"
import { ChevronDown, Play } from "lucide-react"

export function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.4}px)`
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <div ref={parallaxRef} className="absolute inset-0 scale-110" style={{ willChange: "transform" }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/whatsapp-20image-202025-12-03-20at-2021.jpg')`,
          }}
        />
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
        {/* Film Grain Effect */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
      </div>

      {/* Bloom Light Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px] animate-pulse delay-1000" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        {/* Tagline */}
        <div className="mb-6 overflow-hidden">
          <p className="text-primary/80 text-sm tracking-[0.3em] uppercase animate-in slide-in-from-bottom duration-700">
            Comfortable • Affordable • Premium Guest Accommodation
          </p>
        </div>

        {/* Main Title - Movie Poster Style */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-balance">
          <span className="block text-foreground animate-in slide-in-from-bottom duration-700 delay-150">
            Santhrupthi 
          </span>
          <span className="block text-primary bloom animate-in slide-in-from-bottom duration-700 delay-300">
            Boys PG
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-xl text-muted-foreground text-lg md:text-xl mb-10 animate-in slide-in-from-bottom duration-700 delay-500 text-pretty">
          Thoughtfully designed rooms and reliable facilities, everything you need to feel at home.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-bottom duration-700 delay-700">
          <a href="#rooms" className="group px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium tracking-wide hover:shadow-[0_0_50px_oklch(0.78_0.12_85/0.5)] transition-all duration-500 flex items-center gap-2">
            <span>Explore Rooms</span>
            <ChevronDown className="group-hover:translate-y-1 transition-transform" size={18} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-primary/50" size={24} />
        </div>
      </div>

      {/* Letterbox Effect */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-background to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
