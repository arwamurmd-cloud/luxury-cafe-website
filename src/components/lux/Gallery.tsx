import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import { useRef } from "react";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import { Reveal, SplitHeading } from "./Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

function ParallaxFrame({
  src,
  alt,
  caption,
  speed,
  className,
  index,
}: {
  src: string;
  alt: string;
  caption: string;
  speed: number;
  className?: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`${speed}%`, `${-speed}%`]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 20 });
  const sy = useSpring(my, { stiffness: 120, damping: 20 });

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      <motion.figure
        style={{ x: sx, y: sy }}
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          mx.set((e.clientX - (r.left + r.width / 2)) * 0.05);
          my.set((e.clientY - (r.top + r.height / 2)) * 0.05);
        }}
        onMouseLeave={() => {
          mx.set(0);
          my.set(0);
        }}
        className="group relative"
      >
        <motion.div
          initial={{ clipPath: "inset(100% 0% 0% 0% round 24px)" }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0% round 24px)" }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 1.5, delay: index * 0.12, ease: EASE }}
          className="overflow-hidden rounded-2xl shadow-soft transition-shadow duration-700 group-hover:shadow-lift"
        >
          <motion.img
            src={src}
            alt={alt}
            loading="lazy"
            initial={{ scale: 1.25 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 1.9, delay: index * 0.12, ease: EASE }}
            className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-108"
          />
        </motion.div>
        <figcaption className="mt-4 text-xs tracking-[0.2em] uppercase text-muted-foreground opacity-70 transition-opacity duration-500 group-hover:opacity-100">
          {caption}
        </figcaption>
      </motion.figure>
    </motion.div>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-secondary/50 py-28 md:py-40">
      <div className="container-lux">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow text-ember">The Experience</p>
          </Reveal>
          <h2 className="text-section mt-5">
            <SplitHeading text="Morning light, late lanterns, and everything between" />
          </h2>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-12 md:gap-14">
          <ParallaxFrame index={0} speed={7} src={g1} alt="Arched windows and rattan chairs in the Eat Bae dining room" caption="The Room · 8:00" className="md:col-span-5 md:mt-0" />
          <ParallaxFrame index={1} speed={-9} src={g2} alt="A barista pouring milk into a cup" caption="The Pour · 9:30" className="md:col-span-7 md:mt-24" />
          <ParallaxFrame index={2} speed={-6} src={g4} alt="Marble counter with pastries under a glass dome" caption="The Counter · 11:00" className="md:col-span-7" />
          <ParallaxFrame index={3} speed={8} src={g3} alt="Guests dining on the terrace under string lights at dusk" caption="The Terrace · 20:00" className="md:col-span-5 md:mt-20" />
        </div>
      </div>
    </section>
  );
}
