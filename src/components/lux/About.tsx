import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import aboutImg from "@/assets/about.jpg";
import { MaskImage, Reveal, SplitHeading } from "./Reveal";

export function About() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section ref={ref} id="about" className="relative py-28 md:py-40">
      <div className="container-lux grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <motion.div style={{ y }}>
          <MaskImage
            src={aboutImg}
            alt="Sunlit corner of the Eat Bae dining room with a marble table"
            width={1200}
            height={1500}
            className="aspect-[4/5] shadow-lift"
            imgClassName="transition-transform duration-[1200ms] hover:scale-105"
          />
        </motion.div>

        <div>
          <Reveal>
            <p className="eyebrow text-ember">Our Story</p>
          </Reveal>
          <h2 className="text-section mt-6 max-w-xl">
            <SplitHeading text="Built for the hours you want to linger in" />
          </h2>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-lg text-muted-foreground">
              Eat Bae began with a simple obsession: the perfect cup, served in a
              room you never want to leave. Every detail — the light through the
              linen, the weight of the ceramic, the broth simmered for eighteen
              hours — is chosen to slow you down.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-12 grid max-w-lg grid-cols-3 gap-8">
              {[
                { n: "18h", l: "Slow-simmered broth" },
                { n: "12", l: "Single-origin roasts" },
                { n: "4.9", l: "Guest rating" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-4xl text-foreground">{s.n}</p>
                  <p className="mt-2 text-xs tracking-wide text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
