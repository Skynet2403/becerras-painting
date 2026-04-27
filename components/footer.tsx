"use client"

import { Paintbrush } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-foreground py-16 text-background"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* LOGO */}
          <div>
            <motion.div
              className="mb-4 flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Paintbrush className="h-5 w-5 text-primary-foreground" />
              </div>

              <span className="font-serif text-xl font-bold text-background uppercase tracking-tighter">
                Becerra's Painting & Remodeling
              </span>
            </motion.div>

            <p className="text-sm text-background/60 leading-relaxed">
              Premium painting and remodeling services. We transform residential and commercial spaces with expert craftsmanship and attention to detail.
              <br />
              <span className="text-primary font-semibold">Licensed & Insured.</span>
            </p>
          </div>

          {/* LINKS (solo hover suave) */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-background">
              Our services
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-background/60">
              {[
                "Interior & Exterior painting",
                "Full remodeling",
                "Specialty finishes",
                "Color consultation",
                "Maintenance",
              ].map((item) => (
                <li key={item}>
                  <motion.a
                    href="#services"
                    whileHover={{ x: 4 }}
                    className="transition-colors hover:text-primary"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-background">
              Company
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-background/60">
              {["About us", "Our portfolio", "Reviews", "Get a free estimate"].map(
                (item) => (
                  <li key={item}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 4 }}
                      className="transition-colors hover:text-primary"
                    >
                      {item}
                    </motion.a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* HOURS */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-background">
              Business hours
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-background/60">
              <li>Monday - Friday: 7am - 6pm</li>
              <li>Saturday: 8am - 3pm</li>
              <li>Sunday: By appointment only</li>
            </ul>
          </div>

        </div>

        {/* COPYRIGHT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-12 border-t border-background/10 pt-8 text-center text-sm text-background/40 font-medium tracking-wide"
        >
          <p>© 2026 Becerra's Painting & Remodeling. Quality service in every stroke.</p>
        </motion.div>

      </div>
    </motion.footer>
  )
}