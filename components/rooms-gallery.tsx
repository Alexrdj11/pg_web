"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

const spaces = [
  {
    id: 1,
    title: "Rooms",
    slug: "rooms",
    image: "/images/img-20251203-wa0007.jpg",
    description: "Comfortable rooms with ample storage",
  },
  {
    id: 2,
    title: "Bathroom",
    slug: "bathroom",
    image: "/images/WhatsApp Image 2025-12-03 at 23.20.12_380e249b.jpg",
    description: "Clean & well-maintained facilities",
  },
  {
    id: 3,
    title: "Kitchen",
    slug: "kitchen",
    image: "/images/WhatsApp Image 2025-12-03 at 23.30.23_dc8e7e26.jpg",
    description: "Fully equipped cooking space",
  },
  {
    id: 4,
    title: "Building",
    slug: "building",
    image: "/images/whatsapp-20image-202025-12-03-20at-2021.jpg",
    description: "Modern multi-story building",
  },
  {
    id: 5,
    title: "Corridors",
    slug: "corridors",
    image: "/images/WhatsApp Image 2025-12-03 at 23.04.56_589fa755.jpg",
    description: "Spacious & well-lit common areas",
  },
  {
    id: 6,
    title: "Reception & Security",
    slug: "reception-security",
    image: "/images/img-20251203-wa0017.jpg",
    description: "24/7 CCTV monitored premises",
  },
  {
    id: 7,
    title: "Laundry",
    slug: "laundry",
    image: "/images/WhatsApp Image 2025-12-04 at 00.52.00_28c56db6.jpg",
    description: "Convenient laundry facilities",
  },
]

export function RoomsGallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="rooms" className="relative py-24 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Our Spaces</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Premium Living Spaces
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg text-pretty">
            Experience comfort and convenience in our thoughtfully designed accommodations, built for the modern student
            lifestyle.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spaces.map((space, index) => (
            <Link
              key={space.id}
              href={`/spaces/${space.slug}`}
              className={cn(
                "relative group rounded-2xl overflow-hidden glossy cursor-pointer aspect-[4/3]",
              )}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
              onMouseEnter={() => setHoveredId(space.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div
                className={cn(
                  "absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out",
                  hoveredId === space.id && "scale-110",
                )}
                style={{ backgroundImage: `url('${space.image}')` }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />

              {/* Hover Glow Effect */}
              <div
                className={cn(
                  "absolute inset-0 bg-primary/10 transition-opacity duration-500",
                  hoveredId === space.id ? "opacity-100" : "opacity-0",
                )}
              />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {/* Space Info */}
                <div className="relative">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                    {space.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{space.description}</p>
                  <div className="flex items-center justify-end">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center transition-all duration-300",
                        hoveredId === space.id && "bg-primary scale-110 shadow-[0_0_30px_oklch(0.78_0.12_85/0.5)]",
                      )}
                    >
                      <ArrowUpRight
                        className={cn(
                          "w-5 h-5 transition-colors",
                          hoveredId === space.id ? "text-primary-foreground" : "text-primary",
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Shimmer Effect on Hover */}
              <div
                className={cn(
                  "absolute inset-0 shimmer pointer-events-none transition-opacity duration-500",
                  hoveredId === space.id ? "opacity-100" : "opacity-0",
                )}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
