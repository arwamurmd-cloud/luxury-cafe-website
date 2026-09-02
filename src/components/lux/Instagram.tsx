import { motion } from "motion/react";
import { Instagram as IgIcon } from "lucide-react";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import coffee from "@/assets/coffee.jpg";
import dessert from "@/assets/dessert.jpg";
import { Reveal, SplitHeading } from "./Reveal";

const shots = [
  { src: g2, alt: "Barista pouring milk" },
  { src: dessert, alt: "Plated dessert with gold leaf" },
  { src: g1, alt: "Arched windows in the dining room" },
  { src: coffee, alt: "Latte art on marble" },
  { src: g3, alt: "Terrace at dusk" },
  { src: g4, alt: "Pastries on the marble counter" },
];

export function Instagram() {
  return (
    <section className="relative bg-secondary/50 py-24 md:py-32">
      <div className="container-lux">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="eyebrow text-ember">Instagram Moments</p>
            </Reveal>
            <h2 className="text-section mt-5">
              <SplitHeading text="@eatbae" />
            </h2>
          </div>
          <Reveal delay={0.15}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground/70 transition-colors hover:text-ember"
            >
              <IgIcon size={16} /> Follow along
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {shots.map((s, i) => (
            <motion.a
              key={s.alt}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-115"
              />
              <span className="absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "color-mix(in oklab, var(--cocoa) 42%, transparent)" }}>
                <IgIcon size={20} className="text-cream" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
