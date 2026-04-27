"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Facebook } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

export function CtaSection() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)
    setSuccess(false)

    const form = e.currentTarget

    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
    }

    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    setLoading(false)
    setSuccess(true)
  }

  return (
    <section id="contact" className="bg-primary py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* SOLO 1 ANIMACIÓN GLOBAL (PERFORMANCE OPTIMO) */}
        <motion.div
          className="grid items-center gap-12 lg:grid-cols-2"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >

          {/* LEFT CONTENT */}
          <div>

            <h2 className="font-serif text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl italic">
              Ready to transform your home?
            </h2>

            <p className="mt-4 max-w-lg text-lg text-primary-foreground/80 leading-relaxed font-light">
              Contact us today and get a free estimate. Our team is ready to bring your vision to life with premium craftsmanship.
              <br /><br />
              <span className="sm:hidden font-medium">
                Tap any option below to call, email or locate us instantly.
              </span>
            </p>

            {/* CONTACT OPTIONS (sin scroll animation, solo hover) */}
            <div className="mt-10 flex flex-col gap-6">

              {/* PHONE */}
              <a href="tel:+19186004936" className="flex items-center gap-4 group">
                <div className="bg-white/10 p-3 rounded-full group-hover:scale-110 transition">
                  <Phone className="h-6 w-6 text-white group-hover:text-green-400 transition-colors" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-white/60 font-bold">
                    Call or text
                  </span>
                  <p className="text-xl font-semibold">(918) 600-4936</p>
                </div>
              </a>

              {/* EMAIL */}
              <a href="mailto:info@becerraspainting.com" className="flex items-center gap-4 group">
                <div className="bg-white/10 p-3 rounded-full group-hover:scale-110 transition">
                  <Mail className="h-6 w-6 text-white group-hover:text-red-400 transition-colors" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-white/60 font-bold">
                    Email us
                  </span>
                  <p className="text-lg">info@becerraspainting.com</p>
                </div>
              </a>

              {/* FACEBOOK */}
              <a href="https://www.facebook.com/becerra918" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="bg-white/10 p-3 rounded-full group-hover:bg-[#1877F2] transition">
                  <Facebook className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-white/60 font-bold">
                    Follow us
                  </span>
                  <p className="text-lg">Becerra's painting & remodel</p>
                </div>
              </a>

              {/* LOCATION */}
              <a href="https://www.google.com/maps?q=4810+Nassau+Ave" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="bg-white/10 p-3 rounded-full group-hover:scale-110 transition">
                  <MapPin className="h-6 w-6 text-white group-hover:text-red-400 transition-colors" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-white/60 font-bold">
                    Location
                  </span>
                  <p className="text-lg leading-tight">
                    4810 Nassau Ave, Sand Springs<br />
                    Oklahoma, 74063
                  </p>
                </div>
              </a>

            </div>
          </div>

          {/* FORM */}
          <div className="rounded-3xl bg-card p-10 shadow-2xl border border-white/10">

            <h3 className="mb-6 text-3xl font-bold font-serif italic">
              Request your free quote
            </h3>

            {/* FORM CONTAINER (stagger optimizado SOLO inputs) */}
            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
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

              {/* INPUTS */}
              {[
                { name: "firstName", placeholder: "First name", type: "text" },
                { name: "lastName", placeholder: "Last name", type: "text" },
                { name: "email", placeholder: "Email address", type: "email" },
                { name: "phone", placeholder: "Phone number", type: "tel" },
              ].map((field) => (
                <motion.input
                  key={field.name}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="rounded-xl border border-input bg-background px-4 py-4 text-sm"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0 }
                  }}
                />
              ))}

              {/* SELECT */}
              <motion.select
                name="service"
                defaultValue=""
                className="rounded-xl border border-input bg-background px-4 py-4 text-sm"
                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              >
                <option value="" disabled>Service type</option>
                <option>Interior & Exterior painting</option>
                <option>Installing Doors & Trim</option>
                <option>Drywall Repair & Install</option>
                <option>Bathroom remodeling</option>
                <option>Custom & Kitchen cabinets</option>
              </motion.select>

              {/* TEXTAREA */}
              <motion.textarea
                name="message"
                rows={4}
                placeholder="Tell us about your project..."
                className="rounded-xl border border-input bg-background px-4 py-4 text-sm resize-none"
                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              />

              {/* HONEYPOT */}
              <input
                name="company"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              {/* BUTTON (estado visual claro) */}
              <Button
                type="submit"
                disabled={loading || success}
                size="lg"
                className={`
                  w-full text-lg py-7 rounded-xl font-bold shadow-lg transition-all duration-200
                  ${loading ? "bg-gray-400 cursor-wait" : ""}
                  ${success ? "bg-green-500 cursor-not-allowed" : "hover:scale-[1.02]"}
                `}
              >
                {loading ? "Sending..." : success ? "Sent ✔" : "Send request"}
              </Button>

            </motion.form>
          </div>

        </motion.div>
      </div>
    </section>
  )
}