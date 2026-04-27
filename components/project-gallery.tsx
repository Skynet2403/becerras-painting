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
    title: "Classic White Shaker Kitchen",
    category: "Kitchen" as Category,
    image: "/images/kitchen/kitchen-remodel.jpg",
    description: "Elegant white shaker cabinets paired with a decorative marble backsplash and premium integrated appliances.",
    featured: true,
  },
  { 
    title: "Traditional Cherry & Granite", 
    category: "Kitchen" as Category, 
    image: "/images/kitchen/kitchen-cherry-wood.png", 
    description: "Warm cherry wood cabinetry complemented by ornate crown molding and dark polished granite countertops." 
  },
  { 
    title: "Modern Matte Onyx Kitchen", 
    category: "Kitchen" as Category, 
    image: "/images/kitchen/kitchen-contemporary-condo.png", 
    description: "High-end minimalist design featuring handle-less matte black cabinets and a unique geometric wood-inlay backsplash." 
  },
  { 
    title: "Rustic Farmhouse Gourmet", 
    category: "Kitchen" as Category, 
    image: "/images/kitchen/kitchen-farmhouse-modern.png", 
    description: "Features a deep farmhouse sink, white subway tile, and a rich wood-accented island for a perfect rustic-modern balance." 
  },
  { 
    title: "Transitional Dove Grey Suite", 
    category: "Kitchen" as Category, 
    image: "/images/kitchen/kitchen-transitional-grey.png", 
    description: "Showcases soft grey cabinetry, white quartz countertops with subtle veining, and professional-grade stainless steel appliances." 
  },
  
  // --- BATHROOM ---
{
    title: "Modern Floating Spa Bath",
    category: "Bathroom" as Category,
    image: "/images/Bathroom/bathroom-remodel.jpg",
    description: "Features a sleek wall-mounted vanity and a spacious walk-in glass shower with an elegant mosaic tile accent.",
    featured: true,
  },
  { 
    title: "Modern Farmhouse Bath", 
    category: "Bathroom" as Category, 
    image: "/images/Bathroom/bathroom-contemporary-dark.jpg", 
    description: "Features a rustic reclaimed wood vanity, white shiplap walls, and industrial matte black fixtures for a cozy yet modern feel." 
  },
  { 
    title: "Classic Warm Wood Bath", 
    category: "Bathroom" as Category, 
    image: "/images/Bathroom/bathroom-modern-white.jpg", 
    description: "Showcases elegant custom oak cabinetry, warm neutral countertops, and natural stone flooring for a timeless, cozy atmosphere." 
  },
  { 
    title: "Compact Traditional Bath", 
    category: "Bathroom" as Category, 
    image: "/images/Bathroom/bathroom-small-efficient.jpg", 
    description: "A functional and cozy design featuring warm wood tones, a glass-enclosed shower, and decorative tile accents that maximize style in a smaller footprint." 
  },
  { 
    title: "Modern Slate & Subway Bath", 
    category: "Bathroom" as Category, 
    image: "/images/Bathroom/bathroom-spa-style.jpg", 
    description: "Features a deep charcoal double vanity contrasted with classic white subway tiles and sleek brushed nickel hardware." 
  },
  { 
    title: "Luxury Navy & Marble Suite", 
    category: "Bathroom" as Category, 
    image: "/images/Bathroom/bathroom-traditional.jpg", 
    description: "An exquisite master bath showcasing a bold navy vanity, book-matched marble walls, a freestanding tub, and elegant champagne gold fixtures." 
  },

  // --- LIVING ROOM ---
  {
    title: "Earthbound Minimalist Living",
    category: "Living Room" as Category,
    image: "/images/living-rooms/living-room-paint.jpg",
    description: "Features soft terracotta lime-wash walls and organic-modern furniture for a serene, natural atmosphere.",
    featured: true,
  },
  { 
    title: "Urban Industrial Loft", 
    category: "Living Room" as Category, 
    image: "/images/living-rooms/living-room-contemporary.jpg", 
    description: "Showcases a bold camel leather sectional and high-contrast charcoal walls for a sophisticated urban look." 
  },
  { 
    title: "Modern Rustic Farmhouse", 
    category: "Living Room" as Category, 
    image: "/images/living-rooms/living-room-farmhouse.jpg", 
    description: "Blending natural stone textures with exposed ceiling beams and floating oak shelves for a cozy, grounded feel." 
  },
  { 
    title: "Moody Jewel Tone Living", 
    category: "Living Room" as Category, 
    image: "/images/living-rooms/living-room-modern.jpg", 
    description: "Elegant deep forest green walls paired with warm cognac leather and minimalist gold lighting accents." 
  },
  { 
    title: "Classic Manor Living", 
    category: "Living Room" as Category, 
    image: "/images/living-rooms/living-room-traditional.jpg", 
    description: "Timeless elegance featuring ornate wall moldings, a majestic white fireplace, and built-in library shelving." 
  },
  { 
    title: "Mid-Century Sunset Living", 
    category: "Living Room" as Category, 
    image: "/images/living-rooms/living-room-warm.jpg", 
    description: "A vibrant mix of burnt orange walls and a deep navy sofa, accented by iconic mid-century modern wooden furniture." 
  },

  // --- EXTERIOR ---
  {
    title: "Modern Suburban Facade",
    category: "Exterior" as Category,
    image: "/images/exteriors/exterior-paint.jpg",
    description: "Features a crisp off-white finish with dark charcoal accents, stone veneer skirting, and pristine landscaping.",
    featured: true,
  },
  {
    title: "Illuminated Evening Deck",
    category: "Exterior" as Category,
    image: "/images/exteriors/deck-remodel.jpg",
    description: "A spacious stained wood terrace featuring integrated string lighting and comfortable lounge seating for outdoor entertaining.",
    featured: true,
  },
  { 
    title: "Mid-Century Ranch Exterior", 
    category: "Exterior" as Category, 
    image: "/images/exteriors/exterior-colonial.jpg", 
    description: "Classic single-story renovation showcasing brick textures, dark wood siding, and clean horizontal lines." 
  },
  { 
    title: "Commercial Brick Renovation", 
    category: "Exterior" as Category, 
    image: "/images/exteriors/exterior-craftsman.jpg", 
    description: "Professional masonry work on a multi-story building featuring large glass windows and a modern entryway canopy." 
  },
  { 
    title: "Grand Modern Farmhouse", 
    category: "Exterior" as Category, 
    image: "/images/exteriors/exterior-farmhouse.jpg", 
    description: "A striking high-contrast design with white board-and-batten siding, black metal roofing, and natural wood garage doors." 
  },
  { 
    title: "Contemporary Entryway", 
    category: "Exterior" as Category, 
    image: "/images/exteriors/exterior-modern.jpg", 
    description: "A sophisticated mix of dark horizontal siding, natural stone pillars, and warm wood ceiling accents." 
  },
  { 
    title: "Modern Commercial Storefront", 
    category: "Exterior" as Category, 
    image: "/images/exteriors/exterior-spanish.jpg", 
    description: "Clean stucco exterior featuring black retractable awnings and large display windows for a minimalist retail look." 
  },

  // --- BEDROOM ---
  {
    title: "Organic Modern Suite",
    category: "Bedroom" as Category,
    image: "/images/bedrooms/bedroom-remodel.jpg",
    description: "Features a warm mustard accent wall, minimalist lighting, and light oak flooring for a contemporary, airy feel.",
    featured: true,
  },
  { 
    title: "Serene Coastal Retreat", 
    category: "Bedroom" as Category, 
    image: "/images/bedrooms/bedroom-coastal.jpg", 
    description: "Light-filled design showcasing a rattan bed frame, woven textures, and soft blue accents for a breezy seaside vibe." 
  },
  { 
    title: "Emerald Regency Master", 
    category: "Bedroom" as Category, 
    image: "/images/bedrooms/bedroom-elegant.jpg", 
    description: "A luxurious deep green sanctuary featuring a tufted headboard, ornate gold mirrors, and a classic crystal chandelier." 
  },
  { 
    title: "Modern Navy Sanctuary", 
    category: "Bedroom" as Category, 
    image: "/images/bedrooms/bedroom-modern.jpg", 
    description: "Crisp and sophisticated with a bold navy blue accent wall, neutral upholstered bed, and sleek walnut nightstands." 
  },
  { 
    title: "Mountain Rustic Cabin", 
    category: "Bedroom" as Category, 
    image: "/images/bedrooms/bedroom-rustic.jpg", 
    description: "Showcases reclaimed wood-plank walls, exposed ceiling beams, and an iron bed frame for a rugged yet cozy escape." 
  },
  { 
    title: "Mid-Century Terracotta Room", 
    category: "Bedroom" as Category, 
    image: "/images/bedrooms/bedroom-warm.jpg", 
    description: "Features a vibrant clay-toned accent wall, leather headboard, and vintage-inspired industrial bedside lamps." 
  },

  // --- OFFICE ---
  {
    title: "Executive Blue Suite",
    category: "Office" as Category,
    image: "/images/office/office-paint.jpg",
    description: "Features custom floor-to-ceiling cabinetry in a calming teal blue with integrated corner desk and brass accents.",
    featured: true,
  },
  { 
    title: "Classic Academic Studio", 
    category: "Office" as Category, 
    image: "/images/office/office1.jpg", 
    description: "A bright, formal workspace showcasing wall moldings, a traditional wooden desk, and elegant brass chandelier lighting." 
  },
  { 
    title: "Open Concept Corporate", 
    category: "Office" as Category, 
    image: "/images/office/office2.jpg", 
    description: "A professional corporate environment featuring glass partitions, ergonomic workstations, and collaborative breakout zones." 
  },
  { 
    title: "Commanding Executive Den", 
    category: "Office" as Category, 
    image: "/images/office/office3.jpg", 
    description: "Showcases a deep navy accent wall with white built-in shelving, a large mahogany desk, and premium leather seating." 
  },
  { 
    title: "High-Tech Conference Room", 
    category: "Office" as Category, 
    image: "/images/office/office4.jpg", 
    description: "A modern meeting space equipped with acoustic ceiling panels, a large boardroom table, and integrated presentation technology." 
  },
  { 
    title: "Minimalist Sage Workspace", 
    category: "Office" as Category, 
    image: "/images/office/office5.jpg", 
    description: "Features a clean L-shaped desk, sage green accent walls, and organized file storage for a focused, modern aesthetic." 
  },

  // --- DINING ROOM ---
  {
    title: "Terracotta Minimalist Dining",
    category: "Dining Room" as Category,
    image: "/images/dining-room/dining-room.jpg",
    description: "Features warm terracotta-toned walls, natural wood furniture, and a contemporary multi-arm brass chandelier.",
    featured: true,
  },
  { 
    title: "Bright Scandi-Style Dining", 
    category: "Dining Room" as Category, 
    image: "/images/dining-room/comedor1.jpg", 
    description: "A sun-drenched space with clean white walls, a large oak dining table, and minimalist gold lighting." 
  },
  { 
    title: "Modern Emerald Dining", 
    category: "Dining Room" as Category, 
    image: "/images/dining-room/comedor2.jpg", 
    description: "Sophisticated design featuring a deep forest green accent wall with classic wainscoting and a sleek globe pendant light." 
  },
  { 
    title: "Grand Traditional Dining", 
    category: "Dining Room" as Category, 
    image: "/images/dining-room/comedor3.jpg", 
    description: "Exquisite formal setting with ornate wall moldings, a majestic crystal chandelier, and a classic mahogany buffet." 
  },
  { 
    title: "Monochrome Marble Dining", 
    category: "Dining Room" as Category, 
    image: "/images/dining-room/comedor4.jpg", 
    description: "Features a stunning round white marble table paired with charcoal velvet chairs and a unique wire-sculpture pendant." 
  },
  { 
    title: "Cottage Breakfast Nook", 
    category: "Dining Room" as Category, 
    image: "/images/dining-room/comedor5.jpg", 
    description: "A charming built-in banquette with white shiplap walls, soft blue accents, and a rustic wooden farmhouse table." 
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