import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[100svh] sm:min-h-screen overflow-hidden pt-10 sm:pt-12">
      
      {/* Fondo */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Image
          src="/images/hero-paint.jpg"
          alt="Professional painters working on a luxury home"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between sm:justify-center px-4 sm:px-6 py-12 sm:py-20 md:py-24 lg:py-28 text-center min-h-[100svh] sm:min-h-0">
        
        {/* BADGE (ARRIBA) */}
        <div className="mb-3 sm:mb-5 inline-flex items-center gap-2 rounded-full bg-primary/20 px-3 sm:px-4 py-1.5 sm:py-2 backdrop-blur-sm">
          <Star className="h-3 w-3 sm:h-4 sm:w-4 text-primary" fill="currentColor" />
          <span className="text-xs sm:text-sm font-medium text-primary-foreground tracking-wide">
            Over 500 projects completed
          </span>
        </div>

        {/* CONTENIDO CENTRADO */}
        <div className="flex flex-col items-center justify-center flex-1">
          
          {/* Título */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-primary-foreground italic">
            Transform your home
            <br />
            <span className="text-primary not-italic font-black uppercase tracking-tighter">
              With Color & Style
            </span>
          </h1>

          {/* Texto */}
          <p className="mx-auto mt-3 sm:mt-5 max-w-xl sm:max-w-2xl text-sm sm:text-lg leading-relaxed text-primary-foreground/80 font-light px-2 sm:px-0">
            Premium painting and remodeling experts. From a fresh coat of paint 
            to complete home renovations, we bring your vision to life with 
            unmatched quality and craftsmanship.
          </p>

          {/* Botones */}
          <div className="mt-5 sm:mt-8 flex flex-col items-center gap-3 sm:gap-4 sm:flex-row">
            <Button
              size="lg"
              className="gap-2 text-sm sm:text-base px-6 sm:px-10 py-4 sm:py-7 rounded-xl font-bold"
              asChild
            >
              <a href="#projects">
                View portfolio
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="gap-2 text-sm sm:text-base px-6 sm:px-10 py-4 sm:py-7 rounded-xl bg-white/5 border-primary-foreground/30 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground backdrop-blur-md"
              asChild
            >
              <a href="#contact">Get a free estimate</a>
            </Button>
          </div>

        </div>

        {/* STATS (ABAJO) */}
        <div className="w-full mt-8 sm:mt-14 flex items-center justify-center gap-6 sm:gap-12 md:gap-16">
          
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-black text-primary-foreground tracking-tighter">
              500+
            </p>
            <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs uppercase tracking-widest text-primary-foreground/60 font-bold">
              Projects
            </p>
          </div>

          <div className="h-10 sm:h-12 w-px bg-primary-foreground/20" />

          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-black text-primary-foreground tracking-tighter">
              12+
            </p>
            <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs uppercase tracking-widest text-primary-foreground/60 font-bold">
              Years Exp.
            </p>
          </div>

          <div className="h-10 sm:h-12 w-px bg-primary-foreground/20" />

          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-black text-primary-foreground tracking-tighter">
              98%
            </p>
            <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs uppercase tracking-widest text-primary-foreground/60 font-bold">
              Satisfaction
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}