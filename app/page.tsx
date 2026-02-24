import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { MarqueeBand } from "@/components/marquee-band"
import { AboutExpertise} from "@/components/about-expertise"
import { Services } from "@/components/services"
import { ProjectGallery } from "@/components/project-gallery"
import { Testimonials } from "@/components/testimonials"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MarqueeBand />
      <AboutExpertise />
      <Services />
      <ProjectGallery />
      <Testimonials />
      <CtaSection />
      <Footer />
    </main>
  )
}
