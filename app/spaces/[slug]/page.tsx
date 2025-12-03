"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { PageTransition } from "@/components/page-transition"

const spacesData: Record<string, {
  title: string
  description: string
  features: string[]
  images: { src: string; alt: string }[]
}> = {
  rooms: {
    title: "Rooms",
    description: "Our rooms are designed with comfort and functionality in mind. Each room comes fully furnished with quality beds, study desks, and ample storage space to make your stay comfortable and productive.",
    features: [
      "Comfortable twin beds with quality mattresses",
      "Spacious wardrobes for storage",
      "Study desk and chair",
      "Good ventilation and natural lighting",
      "Regular housekeeping services",
      "Attached common bathroom",
    ],
    images: [
      { src: "/images/img-20251203-wa0009.jpg", alt: "Room View " },
    ],
  },
  bathroom: {
    title: "Bathroom",
    description: "Clean and well-maintained bathrooms are our priority. We ensure regular cleaning and maintenance to provide you with hygienic facilities throughout your stay.",
    features: [
      "Clean and hygienic facilities",
      "Cleaning and maintenance available",
      "24/7 hot water availability",
      "Modern fittings and fixtures",
      "Proper ventilation",
    ],
    images: [
      { src: "/images/WhatsApp Image 2025-12-03 at 23.20.12_380e249b.jpg", alt: "Bathroom View " },
      { src: "/images/img-20251203-wa0013.jpg", alt: "Bathroom View " },

    ],
  },
  kitchen: {
    title: "Kitchen",
    description: "Our fully equipped kitchen allows you to prepare your own meals whenever you prefer. Clean, spacious, and well-maintained for your convenience.",
    features: [
      "Clean and hygienic environment",
      "Proper ventilation and exhaust",
      "Designated meal times for common dining",
    ],
    images: [
      { src: "/images/WhatsApp Image 2025-12-03 at 23.30.23_dc8e7e26.jpg", alt: "Kitchen View" },

    ],
  },
  building: {
    title: "Building",
    description: "Located in a prime area, our modern multi-story building offers easy access to nearby amenities, transportation, and educational institutions.",
    features: [
      "Modern multi-story construction",
      "Prime location with easy access",
      "Close to public transportation",
      "Nearby markets and eateries",
      "Safe and secure neighborhood",
      "Secure parking facilities",
    ],
    images: [
      { src: "/images/whatsapp-20image-202025-12-03-20at-2021.jpg", alt: "Building Exterior 1" },
      { src: "/images/IMG-20251203-WA0016.jpg", alt: "Building Exterior 2" },
      
    ],
  },
  corridors: {
    title: "Corridors",
    description: "Spacious and well-lit corridors ensure easy movement throughout the building. Our common areas are designed to be welcoming and comfortable.",
    features: [
      "Spacious and well-lit passages",
      "Regular cleaning and maintenance",
      "Good ventilation throughout",

    ],
    images: [
      { src: "/images/WhatsApp Image 2025-12-03 at 23.04.56_589fa755.jpg", alt: "Corridor View 1" },
      { src: "/images/WhatsApp Image 2025-12-04 at 00.21.48_7e87da31.jpg", alt: "stairs View 2" },
      
    ],
  },
  "reception-security": {
    title: "Reception & Security",
    description: "Your safety is our priority. With 24/7 security monitoring and a dedicated reception, we ensure a safe and secure environment for all residents.",
    features: [
      "24/7 cctv monitoring",
      "Dedicated reception desk",

    ],
    images: [
      { src: "/images/WhatsApp Image 2025-12-04 at 00.46.13_563340ed.jpg", alt: "Reception View 1" },
      { src: "/images/img-20251203-wa0017.jpg", alt: "Reception View 2" },
      
    ],
  },
  laundry: {
    title: "Laundry",
    description: "Convenient laundry facilities available for all residents. Keep your clothes clean and fresh without the hassle of going outside.",
    features: [
      "Washing machine access",
      "Dedicated drying area",
      "Clean and hygienic facilities",
      
    ],
    images: [
      { src: "/images/WhatsApp Image 2025-12-04 at 00.52.00_28c56db6.jpg", alt: "Laundry View 1" },
    ],
  },
}

export default function SpacePage() {
  const params = useParams()
  const slug = params.slug as string
  const space = spacesData[slug]

  if (!space) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Space Not Found</h1>
          <Link href="/" className="text-primary hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </Link>
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold text-lg">JP</span>
              </div>
              <span className="text-xl font-bold tracking-wider text-foreground">
                Santhrupthi<span className="text-primary"> Boys PG</span>
              </span>
            </Link>
          </div>
        </div>
      </header>

      <PageTransition>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 px-6">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="max-w-7xl mx-auto relative z-10">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Our Spaces</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {space.title}
            </h1>
            <p className="max-w-3xl text-muted-foreground text-lg md:text-xl">
              {space.description}
            </p>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={cn(
            "grid gap-6",
            (slug === "bathroom" || slug === "kitchen" || slug === "building" || slug === "corridors" || slug === "reception-security") ? "grid-cols-1 max-w-2xl mx-auto" : "grid-cols-1 md:grid-cols-2"
          )}>
            {space.images.map((image, index) => (
              <div
                key={index}
                className={cn(
                  "relative rounded-2xl overflow-hidden bg-secondary/50",
                  (slug === "bathroom" || slug === "kitchen" || slug === "building" || slug === "corridors" || slug === "reception-security") ? "aspect-[3/4]" : "aspect-[4/3]",
                  index === 0 && slug !== "bathroom" && slug !== "kitchen" && slug !== "building" && slug !== "corridors" && slug !== "reception-security" && "md:col-span-2 md:aspect-[21/9]"
                )}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${image.src}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-sm text-muted-foreground">
                  {image.alt}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Features & Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {space.features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-secondary/30 border border-primary/10 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <ArrowUpRight className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {slug !== "bathroom" && slug !== "building" && slug !== "corridors" && slug !== "reception-security" && slug !== "laundry" && (
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="p-8 md:p-12 rounded-3xl bg-secondary/30 border border-primary/20 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Interested in our {space.title.toLowerCase()}?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contact us to schedule a visit and see our facilities in person. We'd be happy to show you around!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#contact"
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium tracking-wide hover:shadow-[0_0_50px_oklch(0.78_0.12_85/0.5)] transition-all duration-500"
                >
                  Contact Us
                </Link>
                <Link
                  href="/"
                  className="px-8 py-4 border border-primary/30 text-foreground rounded-full font-medium tracking-wide hover:border-primary hover:bg-primary/5 transition-all duration-500"
                >
                  View All Spaces
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-primary/10">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground text-sm">
          © 2025 Santhrupthi Boys PG. All rights reserved.
        </div>
      </footer>
      </PageTransition>
    </div>
  )
}
