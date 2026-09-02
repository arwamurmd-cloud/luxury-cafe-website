import { Leaf, Flame, Sparkles, Clock } from "lucide-react";
import { Reveal, SplitHeading } from "./Reveal";

const reasons = [
  { icon: Leaf, title: "Sourced Close", text: "Produce from growers we know by name, delivered the same morning." },
  { icon: Flame, title: "Made Slowly", text: "Broths, syrups and pastries built from scratch in our open kitchen." },
  { icon: Sparkles, title: "Designed to Stay", text: "Every seat gets daylight, a view, and enough room to lose track of time." },
  { icon: Clock, title: "Open Late", text: "Coffee at seven, ramen at midnight — the door stays open." },
];

export function WhyUs() {
  return (
    <section className="relative py-24 md:py-36">
      <div className="container-lux">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow text-ember">Why Eat Bae</p>
          </Reveal>
          <h2 className="text-section mt-5">
            <SplitHeading text="Four reasons it stays with you" />
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-border/70 bg-card p-8 transition-all duration-700 hover:-translate-y-2 hover:border-transparent hover:shadow-lift">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-ember transition-colors duration-700 group-hover:gradient-warm group-hover:text-cocoa">
                  <r.icon size={20} />
                </span>
                <h3 className="mt-6 font-display text-2xl">{r.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
