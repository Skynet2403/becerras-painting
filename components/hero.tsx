import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-paint.jpg"
          alt="Professional painters working on a luxury home"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-32 text-center lg:py-44">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 backdrop-blur-sm">
          <Star className="h-4 w-4 text-primary" fill="currentColor" />
          <span className="text-sm font-medium text-primary-foreground tracking-wide">
            Over 500 projects completed
          </span>
        </div>

        <h1 className="font-serif text-4xl font-bold leading-[1.1] text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance italic">
          Transform your home
          <br />
          <span className="text-primary not-italic font-black uppercase tracking-tighter">With Color & Style</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 text-pretty font-light">
          Premium painting and remodeling experts. From a fresh coat of paint 
          to complete home renovations, we bring your vision to life with 
          unmatched quality and craftsmanship.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button size="lg" className="gap-2 text-base px-10 py-7 rounded-xl font-bold" asChild>
            <a href="#projects">
              View portfolio
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-2 text-base px-10 py-7 rounded-xl bg-white/5 border-primary-foreground/30 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground backdrop-blur-md"
            asChild
          >
            <a href="#contact">Get a free estimate</a>
          </Button>
        </div>

        <div className="mt-20 flex items-center gap-8 md:gap-16">
          <div className="text-center">
            <p className="text-4xl font-black text-primary-foreground tracking-tighter">500+</p>
            <p className="text-xs uppercase tracking-widest text-primary-foreground/60 font-bold">Projects</p>
          </div>
          <div className="h-12 w-px bg-primary-foreground/20" />
          <div className="text-center">
            <p className="text-4xl font-black text-primary-foreground tracking-tighter">12+</p>
            <p className="text-xs uppercase tracking-widest text-primary-foreground/60 font-bold">Years Exp.</p>
          </div>
          <div className="h-12 w-px bg-primary-foreground/20" />
          <div className="text-center">
            <p className="text-4xl font-black text-primary-foreground tracking-tighter">98%</p>
            <p className="text-xs uppercase tracking-widest text-primary-foreground/60 font-bold">Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}