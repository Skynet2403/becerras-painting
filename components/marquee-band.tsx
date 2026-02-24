"use client"

const items = [
  "INTERIOR PAINTING",
  "EXTERIOR PAINTING",
  "FULL REMODELING",
  "LUXURY FINISHES",
  "COLOR CONSULTATION",
  "GENERAL MAINTENANCE",
  "KITCHEN REMODELING",
  "BATHROOM RENOVATIONS",
  "CABINET REFINISHING",
  "COMMERCIAL PAINTING",
  "DRYWALL REPAIR",
]

export function MarqueeBand() {
  return (
    <div className="overflow-hidden bg-primary py-4 border-y border-white/10">
      <div className="flex animate-marquee gap-10">
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-10 text-xs font-black uppercase tracking-[0.25em] text-primary-foreground"
          >
            {item}
            <span className="text-primary-foreground/30 text-lg">{"***"}</span>
          </span>
        ))}
      </div>
    </div>
  )
}