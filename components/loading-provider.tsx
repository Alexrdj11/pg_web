"use client"

import { useEffect, useState, Suspense } from "react"
import { usePathname, useSearchParams } from "next/navigation"

function LoadingContent() {
  const [isLoading, setIsLoading] = useState(true)
  const [isNavigating, setIsNavigating] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Initial page load
  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("hasLoaded")
    
    if (!hasLoaded) {
      // First visit - show full loading
      setIsLoading(true)
      const timer = setTimeout(() => {
        setIsLoading(false)
        sessionStorage.setItem("hasLoaded", "true")
      }, 2500)
      return () => clearTimeout(timer)
    } else {
      setIsLoading(false)
    }
  }, [])

  // Navigation between pages
  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("hasLoaded")
    
    if (hasLoaded) {
      setIsNavigating(true)
      const timer = setTimeout(() => {
        setIsNavigating(false)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [pathname, searchParams])

  const showLoader = isLoading || isNavigating

  if (!showLoader) return null

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center transition-opacity duration-500 ${
        showLoader ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Animated Logo */}
      <div className="relative mb-8">
        {/* Outer rotating ring */}
        <div className="w-32 h-32 rounded-full border-4 border-primary/20 animate-spin-slow" />
        
        {/* Inner pulsing circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-primary/10 animate-pulse flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center bloom">
              <span className="text-primary font-bold text-2xl animate-bounce-slow">JP</span>
            </div>
          </div>
        </div>

        {/* Orbiting dots */}
        <div className="absolute inset-0 animate-spin-reverse">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary" />
        </div>
        <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: "4s" }}>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-primary/60" />
        </div>
      </div>

      {/* Brand name */}
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl font-bold tracking-wider text-foreground mb-2 animate-fade-in">
          Santhrupthi <span className="text-primary">Boys PG</span>
        </h1>
        
        {/* Loading dots */}
        <div className="flex items-center justify-center gap-1 mt-4">
          <span className="text-muted-foreground text-sm">Loading</span>
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }} />
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: "150ms" }} />
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
        </div>
      </div>

      {/* Decorative bloom effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "500ms" }} />
    </div>
  )
}

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={null}>
        <LoadingContent />
      </Suspense>
      {children}
    </>
  )
}
