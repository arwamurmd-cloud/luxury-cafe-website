import { motion } from "motion/react";
import ramen from "@/assets/ramen.jpg";
import coffee from "@/assets/coffee.jpg";
import dessert from "@/assets/dessert.jpg";
import brunch from "@/assets/brunch.jpg";
import { Reveal, SplitHeading } from "./Reveal";

const items = [
  { img: ramen, name: "Midnight Tonkotsu", cat: "Ramen", price: "₹680", desc: "Eighteen-hour broth, ajitama, black garlic oil." },
  { img: coffee, name: "Honey Cortado", cat: "Coffee", price: "₹320", desc: "Single-origin Ethiopian, raw honey, oat milk." },
  { img: dessert, name: "Pistachio Cloud", cat: "Dessert", price: "₹450", desc: "Whipped mascarpone, berry compote, gold leaf." },
  { img: brunch, name: "Golden Hour Plate", cat: "Brunch", price: "₹590", desc: "Truffle eggs, sourdough, cold-pressed citrus." },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function BestSellers() {
  return (
    <section id="best-sellers" className="relative py-24 md:py-36">
      <div className="container-lux">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="eyebrow text-ember">Signature</p>
            </Reveal>
            <h2 className="text-section mt-5 max-w-lg">
              <SplitHeading text="The four things people come back for" />
            </h2>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-muted-foreground">
              A short menu, obsessively made. Everything else is seasonal.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1, delay: i * 0.1, ease: EASE }}
              whileHover={{ y: -14 }}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-soft transition-shadow duration-700 hover:shadow-lift"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  width={900}
                  height={1100}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100" style={{ background: "linear-gradient(180deg, transparent 40%, color-mix(in oklab, var(--cocoa) 55%, transparent))" }} />
                <span className="absolute left-4 top-4 rounded-full glass px-3 py-1 text-[11px] tracking-[0.22em] uppercase text-foreground/70">
                  {item.cat}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl">{item.name}</h3>
                  <span className="text-sm text-ember">{item.price}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-ember/40 transition-opacity duration-700 group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
