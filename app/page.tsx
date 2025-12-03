import { HeroSection } from "@/components/hero-section"
import { Navigation } from "@/components/navigation"
import { RoomsGallery } from "@/components/rooms-gallery"
import { AmenitiesSection } from "@/components/amenities-section"
import { BookingCTA } from "@/components/booking-cta"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PageTransition>
        <HeroSection />
        <RoomsGallery />
        <AmenitiesSection />
        <BookingCTA />
        <Footer />
      </PageTransition>
    </main>
  )
}
