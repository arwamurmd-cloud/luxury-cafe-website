import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import heroImg from "@/assets/hero.jpg";
import { MagneticButton } from "./MagneticButton";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.14]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative h-[100svh] w-full overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <motion.img
          src={heroImg}
          alt="Open-air terrace at Eat Bae with marble tables and warm golden-hour light"
          width={1920}
          height={1200}
          className="h-full w-full object-cover"
          initial={{ scale: 1.22, filter: "blur(14px)" }}
          animate={{ scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.6, ease: EASE }}
        />
        <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-veil)" }} />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 52%, oklch(0.232 0.026 39.1 / 0.42), transparent 75%)",
          }}
        />
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="container-lux relative flex h-full flex-col items-center justify-center text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: EASE }}
          className="eyebrow text-cream/80"
        >
          Coffee · Ramen · Slow Mornings
        </motion.p>

        <h1 className="text-hero mt-6 max-w-4xl text-cream">
          {["A café that", "feels like", "a destination"].map((line, i) => (
            <span key={line} className="block overflow-hidden pb-[0.08em]">
              <motion.span
                className="inline-block"
                initial={{ y: "115%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.4, delay: 0.65 + i * 0.14, ease: EASE }}
              >
                {i === 2 ? <em className="italic text-honey">{line}</em> : line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.15, ease: EASE }}
          className="mt-8 max-w-xl text-base text-cream/80 md:text-lg"
        >
          Sunlit terraces, hand-poured coffee and late-night ramen — Eat Bae is
          where the ordinary hour becomes something worth remembering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.35, ease: EASE }}
          className="mt-11 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton href="#best-sellers" variant="cream">
            Explore Menu
          </MagneticButton>
          <MagneticButton href="#contact" variant="outline">
            Reserve Table
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          className="h-12 w-px bg-cream/50"
        />
      </motion.div>
    </section>
  );
}
