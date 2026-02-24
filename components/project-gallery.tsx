"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const categories = [
  "All",
  "Kitchen",
  "Bathroom",
  "Living Room",
  "Exterior",
  "Bedroom",
  "Office",
  "Dining Room",
] as const

type Category = (typeof categories)[number]

const projects = [
  {
    title: "Minimalist Modern Kitchen",
    category: "Kitchen" as Category,
    image: "/images/kitchen-remodel.jpg",
    description: "Complete remodel with white cabinets and natural wood accents.",
  },
  {
    title: "Spa-Style Bathroom",
    category: "Bathroom" as Category,
    image: "/images/bathroom-remodel.jpg",
    description: "Total transformation with glass shower and premium finishes.",
  },
  {
    title: "Living Room in Warm Tones",
    category: "Living Room" as Category,
    image: "/images/living-room-paint.jpg",
    description: "Terracotta tones with modern furniture and a cozy atmosphere.",
  },
  {
    title: "Renovated Facade",
    category: "Exterior" as Category,
    image: "/images/exterior-paint.jpg",
    description: "Exterior painting in white with dark accents and great curb appeal.",
  },
  {
    title: "Contemporary Bedroom",
    category: "Bedroom" as Category,
    image: "/images/bedroom-remodel.jpg",
    description: "Accent wall with warm colors and renovated flooring.",
  },
  {
    title: "Remodeled Terrace",
    category: "Exterior" as Category,
    image: "/images/deck-remodel.jpg",
    description: "Wooden deck with professional finish and ambient lighting.",
  },
  {
    title: "Home Office",
    category: "Office" as Category,
    image: "/images/office-paint.jpg",
    description: "Workspace featuring a calming blue-green paint tone.",
  },
  {
    title: "Elegant Dining Room",
    category: "Dining Room" as Category,
    image: "/images/dining-room.jpg",
    description: "Renovation with terracotta tones and modern lighting fixtures.",
  },
]

export function ProjectGallery() {
  const [active, setActive] = useState<Category>("All")

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            Our Work
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Project catalog
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Discover the quality of our work. Each project is a 
            story of transformation and satisfaction.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={active === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setActive(cat)}
              className="rounded-full font-medium"
            >
              {cat}
            </Button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((project) => (
            <div
              key={project.title}
              className="group cursor-pointer overflow-hidden rounded-xl bg-card border border-border shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/20" />
                <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground font-bold uppercase tracking-tighter">
                  {project.category}
                </Badge>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed font-light">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}