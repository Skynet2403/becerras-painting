"use client"

import { CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Image from "next/image"

export function AboutExpertise() {
  const specialties = [
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
    <section
      id="about"
      className="relative bg-secondary py-12 sm:py-20 lg:py-24 px-4 sm:px-6 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">

        {/* SOLO 1 ANIMACIÓN GLOBAL */}
        <motion.div
          className="grid gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-2 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >

          {/* IMAGEN (sin animación pesada) */}
          <div className="relative order-1 lg:order-2">

            <div className="relative aspect-[4/3] sm:aspect-square rounded-2xl sm:rounded-[3rem] overflow-hidden shadow-2xl group">
              <Image
                src="/images/kitchen-init.jpg"
                alt="Remodeling work"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>

            {/* Badge SIN ANIMACIÓN SCROLL (solo hover visual implícito) */}
            <div className="absolute -bottom-6 -right-6 hidden sm:block bg-card border border-border p-6 rounded-2xl shadow-xl">
              <div className="text-center">
                <p className="text-4xl font-black text-primary leading-none">
                  12+
                </p>
                <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-muted-foreground mt-2">
                  Years Experience
                </p>
              </div>
            </div>
          </div>

          {/* CONTENIDO */}
          <div className="order-2 lg:order-1">

            {/* BADGE (sin motion) */}
            <Badge className="mb-4 bg-primary/10 text-primary border-primary px-4 py-1 tracking-widest uppercase">
              Full-Service Contractors
            </Badge>

            {/* TITULO */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold italic mb-6">
              Excellence in{" "}
              <span className="text-primary uppercase font-black not-italic">
                Remodeling
              </span>
            </h2>

            {/* TEXTO */}
            <p className="text-muted-foreground mb-8 leading-relaxed">
              <span className="text-foreground font-bold">
                Becerra’s Painting and Remodeling
              </span>{" "}
              delivers premium residential and commercial transformations.
            </p>

            {/* LISTA — ÚNICO LUGAR CON ANIMACIÓN (stagger optimizado) */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.04
                  }
                }
              }}
            >
              {specialties.map((item) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-2"
                  variants={{
                    hidden: { opacity: 0, y: 8 },
                    show: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.25 }}
                >
                  <CheckCircle2 className="text-primary w-4 h-4 shrink-0" />
                  <span className="text-sm text-foreground/80">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA (sin scroll animation) */}
            <div className="p-6 bg-background rounded-3xl border border-primary/20">
              <p className="text-xl font-serif italic font-bold">
                Interior & Exterior Specialists.
              </p>
              <p className="text-primary uppercase font-black tracking-widest text-sm mt-2">
                Free Estimates!
              </p>
            </div>

          </div>

        </motion.div>
      </div>
    </section>
  )
}