"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-10 sm:pt-12">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Image
          src="/images/hero-paint.jpg"
          alt="Professional painters working on a luxury home"
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 sm:px-6 py-20 text-center min-h-[100svh]">

        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 backdrop-blur-sm"
        >
          <Star className="h-4 w-4 text-primary" fill="currentColor" />
          <span className="text-xs sm:text-sm font-medium text-primary-foreground">
            Over 500 projects completed
          </span>
        </motion.div>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] text-primary-foreground italic"
        >
          Transform your home
          <br />
          <span className="text-primary not-italic font-black uppercase tracking-tighter">
            With Color & Style
          </span>
        </motion.h1>

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-sm sm:text-lg leading-relaxed text-primary-foreground/80 font-light"
        >
          Premium painting and remodeling experts. From a fresh coat of paint
          to complete home renovations, we bring your vision to life with
          unmatched quality and craftsmanship.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
        >
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button size="lg" className="gap-2 font-bold rounded-xl px-10 py-7" asChild>
              <a href="#projects">
                View portfolio
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              variant="outline"
              size="lg"
              className="rounded-xl bg-white/5 border-primary-foreground/30 text-primary-foreground hover:bg-white/10 backdrop-blur-md px-10 py-7"
              asChild
            >
              <a href="#contact">Get a free estimate</a>
            </Button>
          </motion.div>
        </motion.div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 flex items-center justify-center gap-10"
        >
          {[
            { value: "500+", label: "Projects" },
            { value: "12+", label: "Years Exp." },
            { value: "98%", label: "Satisfaction" },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl sm:text-4xl font-black text-primary-foreground">
                {item.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest text-primary-foreground/60 font-bold">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}