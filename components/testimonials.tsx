import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Maria Gonzalez",
    role: "Homeowner",
    initials: "MG",
    stars: 5,
    text: "Incredible work on my kitchen. They exceeded all my expectations. The team was professional, clean, and very punctual. My kitchen now looks like it belongs in a magazine.",
  },
  {
    name: "Carlos Ramirez",
    role: "Business Owner",
    initials: "CR",
    stars: 5,
    text: "They painted the entire facade of my business and it looks spectacular. Customers always comment on how great it looks. Highly recommended.",
  },
  {
    name: "Laura Mendez",
    role: "Interior Designer",
    initials: "LM",
    stars: 5,
    text: "As a designer, I am very demanding with finishes. Becerras Painting perfectly understood my vision and the result was flawless. They are my go-to team.",
  },
  {
    name: "Robert Torres",
    role: "Homeowner",
    initials: "RT",
    stars: 5,
    text: "They completely remodeled our bathroom and now it's a true spa. The quality of the materials and the fine craftsmanship is evident in every detail.",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance italic">
            What our <span className="text-primary not-italic">clients are saying</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed font-light">
            Our customers' satisfaction is our best calling card and the greatest 
            proof of our commitment to quality.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className="border-border bg-card transition-shadow hover:shadow-xl rounded-2xl overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-primary"
                      fill="currentColor"
                    />
                  ))}
                </div>
                <p className="mb-6 text-sm text-muted-foreground leading-relaxed font-light">
                  {`"${t.text}"`}
                </p>
                <div className="flex items-center gap-3 border-t border-border pt-4">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary/10 text-primary text-sm font-bold">
                      {t.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-tighter">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}