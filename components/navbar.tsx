"use client"

import { useState, useEffect } from "react"
import { Menu, X, Paintbrush } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  // 🔥 Bloquea scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
  }, [open])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group min-w-0">
          
          <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-primary group-hover:rotate-12 transition-transform">
            <Paintbrush className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
          </div>

          <span className="font-serif text-sm sm:text-xl font-bold text-foreground tracking-tighter uppercase italic truncate">
            <span className="break-words">
              Becerra's{" "}
              <span className="text-primary not-italic font-black ml-1.5 inline-block">
                Painting & Remodeling
              </span>
            </span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-6 lg:gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            asChild
            className="rounded-xl px-4 sm:px-6 py-2 font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform text-sm"
          >
            <a href="#contact">Free estimate</a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2 active:scale-95 transition-transform"
          onClick={() => setOpen(prev => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-border bg-card px-4 sm:px-6 py-6 md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-6">
            
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <Button
              asChild
              className="w-full py-5 sm:py-6 rounded-xl text-base font-bold"
            >
              <a href="#contact" onClick={() => setOpen(false)}>
                Free estimate
              </a>
            </Button>

          </div>
        </div>
      )}
    </header>
  )
}