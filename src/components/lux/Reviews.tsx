import { Star } from "lucide-react";
import { Reveal, SplitHeading } from "./Reveal";

const reviews = [
  { name: "Ananya R.", text: "The terrace at sunset is unreal. We stayed three hours and ordered the cortado twice.", when: "2 weeks ago" },
  { name: "Marcus T.", text: "Best tonkotsu I've had outside Tokyo. The room feels like a boutique hotel lobby.", when: "1 month ago" },
  { name: "Sofia L.", text: "Every plate looks like a magazine spread and somehow tastes even better.", when: "3 weeks ago" },
  { name: "Devan K.", text: "Service is quietly perfect. Nobody rushes you. That alone is worth the trip.", when: "5 days ago" },
  { name: "Priya M.", text: "Booked for brunch, stayed for dessert. The pistachio cloud is dangerous.", when: "2 months ago" },
  { name: "Elena V.", text: "It doesn't feel like a café — it feels like somewhere you plan a day around.", when: "1 week ago" },
];

function Card({ r }: { r: (typeof reviews)[number] }) {
  return (
    <figure className="glass group w-[340px] shrink-0 rounded-2xl p-8 transition-all duration-700 hover:-translate-y-2 hover:shadow-lift">
      <div className="flex gap-1 text-saffron">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={14} className="fill-saffron text-saffron" />
        ))}
      </div>
      <blockquote className="mt-5 text-base leading-relaxed text-foreground/85">“{r.text}”</blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-full gradient-warm font-display text-sm text-cocoa">
          {r.name.charAt(0)}
        </span>
        <span className="text-sm">
          <span className="block text-foreground">{r.name}</span>
          <span className="block text-xs text-muted-foreground">{r.when}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function Reviews() {
  const loop = [...reviews, ...reviews];
  return (
    <section id="reviews" className="relative overflow-hidden py-28 md:py-36">
      <div className="container-lux text-center">
        <Reveal>
          <p className="eyebrow text-ember">Google Reviews</p>
        </Reveal>
        <h2 className="text-section mx-auto mt-5 max-w-2xl">
          <SplitHeading text="4.9 from 2,400 guests" />
        </h2>
      </div>

      <div className="group/marquee relative mt-16 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max gap-6 animate-[lux-marquee_58s_linear_infinite] px-6 group-hover/marquee:[animation-play-state:paused] motion-reduce:animate-none">
          {loop.map((r, i) => (
            <Card key={`${r.name}-${i}`} r={r} />
          ))}
        </div>
      </div>

      <style>{`@keyframes lux-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </section>
  );
}
