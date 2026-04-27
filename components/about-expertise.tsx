"use client"

import { CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Image from "next/image"

export function AboutExpertise() {
  const specialties: string[] = [
    "Interior & Exterior painting",
    "Installing Doors & Trim",
    "Drywall Repair & Install",
    "Professional framing",
    "Bathroom remodeling",
    "Custom & Kitchen cabinets",
    "Cabinet Painting & Install",
    "Siding Repair & Install",
    "Rotten wood replacement",
    "Custom shutters from scratch",
    "Professional roofing",
    "Professional Cleaning Services"
  ]

  return (
    <motion.section
      id="about"
      className="bg-secondary py-12 sm:py-20 lg:py-24 px-4 sm:px-6 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-2 items-center">

          {/* IMAGEN */}
          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-[4/3] sm:aspect-square rounded-2xl sm:rounded-[3rem] overflow-hidden shadow-xl group hover-lift">
              
              <Image
                src="/images/kitchen-init.jpg"
                alt="Construction and Remodeling professionals"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none" />
            </div>

            {/* Badge flotante */}
            <div className="absolute -bottom-6 -right-6 hidden sm:block bg-card border border-border p-6 rounded-2xl shadow-xl animate-float">
              <div className="text-center">
                <p className="text-4xl font-black text-primary leading-none">
                  12+
                </p>
                <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-muted-foreground mt-2">
                  Years of <br /> Experience
                </p>
              </div>
            </div>
          </div>

          {/* CONTENIDO */}
          <div className="order-2 lg:order-1 bg-background/70 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-0 p-5 sm:p-6 lg:p-0 rounded-2xl lg:rounded-none shadow-md lg:shadow-none">

            {/* BADGE */}
            <Badge className="mb-3 sm:mb-4 border-primary text-primary px-3 sm:px-4 py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase bg-primary/10">
              Full-Service Contractors
            </Badge>

            {/* TITULO */}
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-8 leading-tight italic">
              Excellence in <br />
              <span className="text-primary not-italic uppercase tracking-tighter font-black">
                Remodeling
              </span>
            </h2>

            {/* TEXTO */}
            <p className="text-left text-sm sm:text-lg text-muted-foreground mb-5 sm:mb-8 leading-relaxed max-w-prose">
              <span className="font-bold text-foreground">
                Becerra’s Painting and Remodeling
              </span>{" "}
              specializes in high-quality home transformations. Whether it's a structural repair or a custom finish, we deliver expert craftsmanship for both{" "}
              <span className="text-foreground font-medium italic">
                Commercial and Residential
              </span>{" "}
              projects.
            </p>

            {/* LISTA (stagger SOLO aquí) */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 sm:gap-y-4 gap-x-6 mb-6 sm:mb-10"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
            >
              {specialties.map((item) => (
                <motion.div
                  key={item}
                  className="flex items-start gap-2"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0 }
                  }}
                >
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-foreground/80 leading-snug">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <div className="p-4 sm:p-6 bg-background rounded-xl sm:rounded-3xl border border-primary/20 shadow-sm hover-lift">
              <p className="text-base sm:text-2xl font-serif font-bold text-foreground italic leading-tight">
                Interior & Exterior Specialists.
              </p>

              <p className="mt-1 sm:mt-2 text-primary font-black uppercase tracking-[0.15em] text-xs sm:text-sm">
                Free Estimates!
              </p>
            </div>

          </div>
        </div>
      </div>
    </motion.section>
  )
}