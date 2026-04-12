import { Paintbrush } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground py-16 text-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Paintbrush className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-serif text-xl font-bold text-background uppercase tracking-tighter">
                Becerra's Painting & Remodeling
              </span>
            </div>
            <p className="text-sm text-background/60 leading-relaxed">
              Premium painting and remodeling services. We transform residential and commercial spaces with expert craftsmanship and attention to detail. 
              <br /><span className="text-primary font-semibold">Licensed & Insured.</span>
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-background">
              Our services
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-background/60">
              <li><a href="#services" className="transition-colors hover:text-primary">Interior & Exterior painting</a></li>
              <li><a href="#services" className="transition-colors hover:text-primary">Full remodeling</a></li>
              <li><a href="#services" className="transition-colors hover:text-primary">Specialty finishes</a></li>
              <li><a href="#services" className="transition-colors hover:text-primary">Color consultation</a></li>
              <li><a href="#services" className="transition-colors hover:text-primary">Maintenance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-background">
              Company
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-background/60">
              <li><a href="#about" className="transition-colors hover:text-primary">About us</a></li>
              <li><a href="#projects" className="transition-colors hover:text-primary">Our portfolio</a></li>
              <li><a href="#testimonials" className="transition-colors hover:text-primary">Reviews</a></li>
              <li><a href="#contact" className="transition-colors hover:text-primary">Get a free estimate</a></li>
            </ul>
          </div>

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

        <div className="mt-12 border-t border-background/10 pt-8 text-center text-sm text-background/40 font-medium tracking-wide">
          <p>© 2026 Becerra's Painting & Remodeling. Quality service in every stroke.</p>
        </div>
      </div>
    </footer>
  )
}