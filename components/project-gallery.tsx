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
  // --- KITCHEN ---
  {
    title: "Minimalist Modern Kitchen",
    category: "Kitchen" as Category,
    image: "/images/kitchen/kitchen-remodel.jpg",
    description: "Complete remodel with white cabinets and natural wood accents.",
    featured: true,
  },
  { title: "Cherry Wood Kitchen", category: "Kitchen" as Category, image: "/images/kitchen/kitchen-cherry-wood.png", description: "Premium cherry wood finish." },
  { title: "Contemporary Condo", category: "Kitchen" as Category, image: "/images/kitchen/kitchen-contemporary-condo.png", description: "Sleek and modern handle-less design." },
  { title: "Farmhouse Modern Kitchen", category: "Kitchen" as Category, image: "/images/kitchen/kitchen-farmhouse-modern.png", description: "Rustic charm with a modern touch." },
  { title: "Transitional Grey Kitchen", category: "Kitchen" as Category, image: "/images/kitchen/kitchen-transitional-grey.png", description: "Elegant shaker style in soft grey." },

  // --- BATHROOM ---
  {
    title: "Spa-Style Bathroom",
    category: "Bathroom" as Category,
    image: "/images/Bathroom/bathroom-remodel.jpg",
    description: "Total transformation with glass shower and premium finishes.",
    featured: true,
  },
  { title: "Contemporary Dark Bath", category: "Bathroom" as Category, image: "/images/Bathroom/bathroom-contemporary-dark.jpg", description: "Modern dark tiles for a bold look." },
  { title: "Modern White Bath", category: "Bathroom" as Category, image: "/images/Bathroom/bathroom-modern-white.jpg", description: "Bright and clean marble aesthetics." },
  { title: "Small Efficient Bath", category: "Bathroom" as Category, image: "/images/Bathroom/bathroom-small-efficient.jpg", description: "Perfect space optimization." },
  { title: "Spa Style Bath", category: "Bathroom" as Category, image: "/images/Bathroom/bathroom-spa-style.jpg", description: "Relaxing spa atmosphere at home." },
  { title: "Traditional Bath", category: "Bathroom" as Category, image: "/images/Bathroom/bathroom-traditional.jpg", description: "Classic American traditional bathroom." },

  // --- LIVING ROOM ---
  {
    title: "Living Room in Warm Tones",
    category: "Living Room" as Category,
    image: "/images/living-rooms/living-room-paint.jpg",
    description: "Terracotta tones with modern furniture and a cozy atmosphere.",
    featured: true,
  },
  { title: "Contemporary Living Room", category: "Living Room" as Category, image: "/images/living-rooms/living-room-contemporary.jpg", description: "Modern open-concept living." },
  { title: "Farmhouse Living Room", category: "Living Room" as Category, image: "/images/living-rooms/living-room-farmhouse.jpg", description: "Cosy rustic family space." },
  { title: "Modern Living Room", category: "Living Room" as Category, image: "/images/living-rooms/living-room-modern.jpg", description: "Sharp design and luxury finishes." },
  { title: "Traditional Living Room", category: "Living Room" as Category, image: "/images/living-rooms/living-room-traditional.jpg", description: "Classic American comfort." },
  { title: "Warm Living Room", category: "Living Room" as Category, image: "/images/living-rooms/living-room-warm.jpg", description: "Earth tones and ambient lighting." },

  // --- EXTERIOR ---
  {
    title: "Renovated Facade",
    category: "Exterior" as Category,
    image: "/images/exteriors/exterior-paint.jpg", // Movida a carpeta exteriors
    description: "Exterior painting in white with dark accents and great curb appeal.",
    featured: true,
  },
  {
    title: "Remodeled Terrace",
    category: "Exterior" as Category,
    image: "/images/exteriors/deck-remodel.jpg", // Movida a carpeta exteriors
    description: "Wooden deck with professional finish and ambient lighting.",
    featured: true,
  },
  { title: "Colonial Exterior", category: "Exterior" as Category, image: "/images/exteriors/exterior-colonial.jpg", description: "Detailed colonial style painting." },
  { title: "Craftsman Exterior", category: "Exterior" as Category, image: "/images/exteriors/exterior-craftsman.jpg", description: "Highlighting architectural wood details." },
  { title: "Farmhouse Exterior", category: "Exterior" as Category, image: "/images/exteriors/exterior-farmhouse.jpg", description: "Modern farmhouse outdoor renovation." },
  { title: "Modern Exterior", category: "Exterior" as Category, image: "/images/exteriors/exterior-modern.jpg", description: "Sleek lines and contemporary colors." },
  { title: "Spanish Exterior", category: "Exterior" as Category, image: "/images/exteriors/exterior-spanish.jpg", description: "Stucco and warm earth tones." },

  // --- BEDROOM ---
  {
    title: "Contemporary Bedroom",
    category: "Bedroom" as Category,
    image: "/images/bedrooms/bedroom-remodel.jpg",
    description: "Accent wall with warm colors and renovated flooring.",
    featured: true,
  },
  { title: "Coastal Bedroom", category: "Bedroom" as Category, image: "/images/bedrooms/bedroom-coastal.jpg", description: "Breezy and light coastal design." },
  { title: "Elegant Bedroom", category: "Bedroom" as Category, image: "/images/bedrooms/bedroom-elegant.jpg", description: "Sophisticated master bedroom remodel." },
  { title: "Modern Bedroom", category: "Bedroom" as Category, image: "/images/bedrooms/bedroom-modern.jpg", description: "Clean lines and minimalist decor." },
  { title: "Rustic Bedroom", category: "Bedroom" as Category, image: "/images/bedrooms/bedroom-rustic.jpg", description: "Warm wood and cozy atmosphere." },
  { title: "Warm Bedroom", category: "Bedroom" as Category, image: "/images/bedrooms/bedroom-warm.jpg", description: "Inviting tones for a restful sleep." },

  // --- OFFICE ---
  {
    title: "Home Office",
    category: "Office" as Category,
    image: "/images/office/office-paint.jpg", // Movida a carpeta office
    description: "Workspace featuring a calming blue-green paint tone.",
    featured: true,
  },

  // --- DINING ROOM ---
  {
    title: "Elegant Dining Room",
    category: "Dining Room" as Category,
    image: "/images/dining-room/dining-room.jpg", // Movida a carpeta dining-room
    description: "Renovation with terracotta tones and modern lighting fixtures.",
    featured: true,
  },
];

export function ProjectGallery() {
  const [active, setActive] = useState<Category>("All")

  const filtered =
    active === "All"
      ? projects.filter((p) => (p as any).featured)
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
          {/* Texto dinámico según el filtro */}
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            {active === "All" 
              ? "Discover our featured projects. Select a category to see our full portfolio." 
              : `Showing all our ${active} transformations.`}
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
          {filtered.map((project, index) => (
            <div
              key={`${project.title}-${index}`} // Usamos index para evitar errores de keys duplicadas
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