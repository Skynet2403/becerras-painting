"use client"

import { Paintbrush, Home, Hammer, Droplets, Palette, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const services = [
  {
    icon: Paintbrush,
    title: "Interior painting",
    description:
      "We transform your living spaces with vibrant colors and professional finishes that reflect your personal style.",
  },
  {
    icon: Home,
    title: "Exterior painting",
    description:
      "We protect and beautify your home's facade using high-durability, weather-resistant premium paints.",
  },
  {
    icon: Hammer,
    title: "Full remodeling",
    description:
      "Expert renovation for kitchens, bathrooms, and complete rooms with modern designs and top-tier materials.",
  },
  {
    icon: Droplets,
    title: "Specialty finishes",
    description:
      "Decorative textures and unique effects that add character and luxury to your walls.",
  },
  {
    icon: Palette,
    title: "Color consultation",
    description:
      "We help you choose the perfect color palette to match the lighting and mood of every room in your home.",
  },
  {
    icon: Shield,
    title: "Maintenance",
    description:
      "Preventive and corrective maintenance services to keep your property looking flawless year-round.",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-background py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            About our Services
          </span>

          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl italic">
            Everything your{" "}
            <span className="text-primary not-italic">home needs</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed font-light">
            We offer a comprehensive range of painting and remodeling services
            to transform any space into the home of your dreams.
          </p>
        </motion.div>

        {/* GRID STAGGER */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95, filter: "blur(10px)" },
                show: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
              }}
              whileHover={{
                y: -10,
                scale: 1.03
              }}
              transition={{ duration: 0.5 }}
            >
              <Card className="group border-border bg-card transition-all rounded-2xl overflow-hidden hover:shadow-2xl hover:border-primary/40">
                <CardContent className="p-8">

                  {/* ICON ANIMADO */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                  >
                    <service.icon className="h-7 w-7" />
                  </motion.div>

                  <h3 className="mb-3 text-xl font-bold text-foreground font-serif italic group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed text-sm font-light">
                    {service.description}
                  </p>

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}