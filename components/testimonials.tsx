"use client"

import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Karen Biggs",
    initials: "KB",
    stars: 5,
    text: "Great job on our garage ceiling repair/paint! Loved it so much, we had him come back to do siding and paint on the house! Extremely responsive and helpful! Went above and beyond. Sergio and his crew are the best!",
  },
  {
    name: "Laci Budd",
    initials: "LB",
    stars: 5,
    text: "Sergio and his crew are the best. They repainted our home interior and ceilings and we are so satisfied. They were so mindful and respectful of our home during the job, which I really appreciated. Their work was fantastic and professional - sharp lines, even coats and no mess. We would definitely hire again.",
  },
  {
    name: "Jennifer Lowry",
    initials: "JL",
    stars: 5,
    text: "Sergio and his team did a great job painting our interior. Showed up on time, didn't leave early, was respectful of the house, fair price, and did what he said he would do. Highly recommend.",
  },
  {
    name: "Mary Isaacson",
    initials: "MI",
    stars: 5,
    text: "These guys are great. Love a contractor that shows up as scheduled, listens to the customer, does beautiful work and the prices are great. They stained our deck.",
  },
  {
    name: "Andrew Biggs",
    initials: "AB",
    stars: 5,
    text: "Awesome job, super easy to work with and gives you a fair deal and are very quick at work!",
  },
  {
    name: "Kathy Locker",
    initials: "KL",
    stars: 5,
    text: "Wonderful experience with Sergio and his team! Highly recommend!",
  },
  {
    name: "Brooke Davis",
    initials: "BD",
    stars: 5,
    text: "I definitely recommend them for any painting job you may need done! They care about their clients and do great work!",
  },
  {
    name: "Becuellar Gio",
    initials: "BG",
    stars: 5,
    text: "Very good job very clean and good price thanks sergio!!",
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-background py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            Testimonials
          </span>

          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl italic">
            What our{" "}
            <span className="text-primary not-italic">clients are saying</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed font-light">
            Our customers' satisfaction is our best calling card and the greatest
            proof of our commitment to quality.
          </p>
        </motion.div>

        {/* GRID STAGGER */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40,
                  scale: 0.95,
                  filter: "blur(10px)",
                },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                },
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-border bg-card rounded-2xl overflow-hidden h-full transition-shadow hover:shadow-2xl">
                <CardContent className="p-6 flex flex-col h-full">

                  {/* STARS */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-4 flex gap-1"
                  >
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                      >
                        <Star
                          className="h-4 w-4 text-primary"
                          fill="currentColor"
                        />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* TEXT */}
                  <p className="mb-6 text-sm text-muted-foreground leading-relaxed font-light flex-grow">
                    {`"${t.text}"`}
                  </p>

                  {/* FOOTER */}
                  <div className="flex items-center gap-3 border-t border-border pt-4 mt-auto">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary/10 text-primary text-sm font-bold">
                        {t.initials}
                      </AvatarFallback>
                    </Avatar>

                    <div>
                      <p className="text-sm font-bold text-foreground">
                        {t.name}
                      </p>
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-tighter">
                        Verified Client
                      </p>
                    </div>
                  </div>

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}