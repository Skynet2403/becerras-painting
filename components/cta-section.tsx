import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"

export function CtaSection() {
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
              <div className="flex items-center gap-4 text-primary-foreground/90 group">
                <div className="bg-white/10 p-3 rounded-full group-hover:bg-white/20 transition-colors">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-primary-foreground/50 font-bold">Call or text</span>
                  <span className="text-xl font-semibold">(918) 600-4936</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-primary-foreground/90 group">
                <div className="bg-white/10 p-3 rounded-full group-hover:bg-white/20 transition-colors">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-primary-foreground/50 font-bold">Email us</span>
                  <span className="text-lg">info@becerraspainting.com</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-primary-foreground/90 group">
                <div className="bg-white/10 p-3 rounded-full group-hover:bg-white/20 transition-colors">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-primary-foreground/50 font-bold">Location</span>
                  <span className="text-lg leading-tight">
                    4810 Nassau Ave, Sand Springs<br />
                    Oklahoma, 74063
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-card p-10 shadow-2xl border border-white/10 backdrop-blur-sm">
            <h3 className="mb-6 text-3xl font-bold text-foreground font-serif italic">
              Request your free quote
            </h3>
            <form className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="First name"
                  className="rounded-xl border border-input bg-background px-4 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="rounded-xl border border-input bg-background px-4 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <input
                type="email"
                placeholder="Email address"
                className="rounded-xl border border-input bg-background px-4 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="rounded-xl border border-input bg-background px-4 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <select
                className="rounded-xl border border-input bg-background px-4 py-4 text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer"
                defaultValue=""
              >
                <option value="" disabled>Service type</option>
                <option>Interior painting</option>
                <option>Exterior painting</option>
                <option>Kitchen remodeling</option>
                <option>Cabinet refinishing</option>
                <option>Color consultation</option>
                <option>Other / maintenance</option>
              </select>
              <textarea
                placeholder="Tell us about your project..."
                rows={4}
                className="rounded-xl border border-input bg-background px-4 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
              <Button type="submit" size="lg" className="w-full text-lg py-7 rounded-xl font-bold shadow-lg hover:scale-[1.02] transition-transform">
                Send request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}