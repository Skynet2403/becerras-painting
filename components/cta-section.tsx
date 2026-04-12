"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Facebook } from "lucide-react"
import { useState } from "react"

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
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    setLoading(false)
    setSuccess(true)
  }

  return (
    <section id="contact" className="bg-primary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl text-balance italic">
              Ready to transform your home?
            </h2>
            <p className="mt-4 max-w-lg text-lg text-primary-foreground/80 leading-relaxed font-light">
              Contact us today and get a free estimate. Our team of experts is 
              ready to bring the home of your dreams to life with the best quality in Oklahoma.
            </p>

            <div className="mt-8 flex flex-col gap-6">

              <a
                href="tel:+19186004936"
                className="mt-8 flex flex-col gap-6 group"
              >
                <div className="flex items-center gap-4 text-primary-foreground/90">
                  
                  <div className="bg-white/10 p-3 rounded-full transition-colors">
                    <Phone className="h-6 w-6 text-white group-hover:text-green-400 transition-colors" />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest text-primary-foreground/50 font-bold">
                      Call or text
                    </span>
                    <span className="text-xl font-semibold">
                      (918) 600-4936
                    </span>
                  </div>

                </div>
              </a>

              <a
                href="mailto:info@becerraspainting.com"
                className="flex items-center gap-4 text-primary-foreground/90 group"
              >
                <div className="bg-white/10 p-3 rounded-full transition-colors">
                  <Mail className="h-6 w-6 text-white group-hover:text-red-500 transition-colors" />
                </div>

                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-primary-foreground/50 font-bold">
                    Email us
                  </span>
                  <span className="text-lg">
                    info@becerraspainting.com
                  </span>
                </div>
              </a>

              <a 
                href="https://www.facebook.com/becerra918"
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 text-primary-foreground/90 group transition-all"
              >
                <div className="bg-white/10 p-3 rounded-full group-hover:bg-[#1877F2] transition-colors">
                  <Facebook className="h-6 w-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-primary-foreground/50 font-bold">Follow us</span>
                  <span className="text-lg">Becerra's painting & remodel</span>
                </div>
              </a>

              <a
                href="https://www.google.com/maps?q=4810+Nassau+Ave,+Sand+Springs,+Oklahoma+74063"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-primary-foreground/90 group"
              >
                <div className="bg-white/10 p-3 rounded-full transition-colors">

                  <MapPin className="h-6 w-6 text-white group-hover:text-[#EA4335] transition-colors" />

                </div>

                {/* TEXTO */}
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-primary-foreground/50 font-bold">
                    Location
                  </span>
                  <span className="text-lg leading-tight">
                    4810 Nassau Ave, Sand Springs<br />
                    Oklahoma, 74063
                  </span>
                </div>
              </a>

            </div>
          </div>

          <div className="rounded-3xl bg-card p-10 shadow-2xl border border-white/10 backdrop-blur-sm">
            <h3 className="mb-6 text-3xl font-bold text-foreground font-serif italic">
              Request your free quote
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              <input
                name="firstName"
                type="text"
                placeholder="First name"
                className="rounded-xl border border-input bg-background px-4 py-4 text-sm"
              />

              <input
                name="lastName"
                type="text"
                placeholder="Last name"
                className="rounded-xl border border-input bg-background px-4 py-4 text-sm"
              />

              <input
                name="email"
                type="email"
                placeholder="Email address"
                className="rounded-xl border border-input bg-background px-4 py-4 text-sm"
              />

              <input
                name="phone"
                type="tel"
                placeholder="Phone number"
                className="rounded-xl border border-input bg-background px-4 py-4 text-sm"
              />

              <select
                name="service"
                className="rounded-xl border border-input bg-background px-4 py-4 text-sm"
                defaultValue=""
              >
                <option value="" disabled>Service type</option>
                <option value="Interior & Exterior painting">Interior & Exterior painting</option>
                <option value="Installing Doors & Trim">Installing Doors & Trim</option>
                <option value="Drywall Repair & Install">Drywall Repair & Install</option>
                <option value="Professional framing">Professional framing</option>
                <option value="Bathroom remodeling">Bathroom remodeling</option>
                <option value="Custom & Kitchen cabinets">Custom & Kitchen cabinets</option>
                <option value="Cabinet Painting & Install">Cabinet Painting & Install</option>
                <option value="Siding Repair & Install">Siding Repair & Install</option>
                <option value="Rotten wood replacement">Rotten wood replacement</option>
                <option value="Custom shutters from scratch">Custom shutters from scratch</option>
                <option value="Professional roofing">Professional roofing</option>
                <option value="Professional Cleaning Services">Professional Cleaning Services</option>
              </select>

              <textarea
                name="message"
                placeholder="Tell us about your project..."
                rows={4}
                className="rounded-xl border border-input bg-background px-4 py-4 text-sm resize-none"
              />

              <input
                name="company"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <Button
                type="submit"
                disabled={loading || success} // Bloquea durante envío o si ya se envió
                size="lg"
                className={`
                  w-full text-lg py-7 rounded-xl font-bold shadow-lg
                  transition-transform duration-200
                  ${loading ? "bg-gray-400 cursor-wait" : ""}
                  ${success ? "bg-green-500 text-white cursor-not-allowed" : "hover:scale-[1.02] hover:bg-blue-600"}
                `}
              >
                {loading ? "Sending..." : success ? "Sent ✔" : "Send request"}
              </Button>

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}