import { CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

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
    <section id="about" className="bg-secondary py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          
          {/* Text Column */}
          <div className="order-2 lg:order-1">
            <Badge variant="outline" className="mb-4 border-primary text-primary px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-background">
              Full-Service Contractors
            </Badge>
            
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-8 leading-[1.1] italic">
              Excellence in <br />
              <span className="text-primary not-italic uppercase tracking-tighter font-black">Remodeling</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-light">
              <span className="font-bold text-foreground">Becerra’s Painting and Remodeling</span> specializes in high-quality home transformations. 
              Whether it's a structural repair or a custom finish, we deliver expert craftsmanship for both 
              <span className="text-foreground font-medium italic"> Commercial and Residential </span> projects.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
              {specialties.map((item) => (
                <div key={item} className="flex items-center gap-3 group">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 transition-transform group-hover:scale-110" />
                  <span className="text-sm font-medium text-foreground/80 tracking-tight">{item}</span>
                </div>
              ))}
            </div>

            <div className="inline-block p-6 bg-background rounded-3xl border border-primary/20 shadow-sm backdrop-blur-sm">
              <p className="text-2xl font-serif font-bold text-foreground italic leading-none">
                Interior & Exterior Specialists.
              </p>
              <p className="mt-2 text-primary font-black uppercase tracking-[0.2em] text-sm">
                Free Estimates!
              </p>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="/images/kitchen-init.jpg" 
                alt="Construction and Remodeling professionals" 
                className="w-full h-full object-cover hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Trust Badge */}
            <div className="absolute -bottom-8 -right-8 hidden md:block bg-card border border-border p-8 rounded-[2rem] shadow-2xl">
              <div className="text-center">
                <p className="text-5xl font-black text-primary leading-none">12+</p>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground mt-2">
                  Years of <br /> Experience
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}