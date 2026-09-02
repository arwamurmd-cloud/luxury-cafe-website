import { MapPin, Phone, Clock } from "lucide-react";
import { MaskImage, Reveal, SplitHeading } from "./Reveal";
import { MagneticButton } from "./MagneticButton";
import heroImg from "@/assets/hero.jpg";

const details = [
  { icon: MapPin, label: "Find us", value: "14 Linden Walk, Bandra West, Mumbai" },
  { icon: Clock, label: "Hours", value: "Mon–Sun · 7:00 to 00:30" },
  { icon: Phone, label: "Reserve", value: "+91 98200 41180" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-40">
      <div className="container-lux grid gap-14 lg:grid-cols-2 lg:gap-24">
        <div>
          <Reveal>
            <p className="eyebrow text-ember">Contact & Location</p>
          </Reveal>
          <h2 className="text-section mt-5 max-w-md">
            <SplitHeading text="Save the table. We'll save the light." />
          </h2>

          <div className="mt-12 space-y-8">
            {details.map((d, i) => (
              <Reveal key={d.label} delay={i * 0.08}>
                <div className="flex gap-5">
                  <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-ember">
                    <d.icon size={18} />
                  </span>
                  <div>
                    <p className="eyebrow text-muted-foreground">{d.label}</p>
                    <p className="mt-1.5 text-lg">{d.value}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-12">
              <MagneticButton href="tel:+919820041180" variant="solid">
                Reserve a Table
              </MagneticButton>
            </div>
          </Reveal>
        </div>

        <div className="space-y-6">
          <MaskImage
            src={heroImg}
            alt="The Eat Bae terrace prepared for evening service"
            width={1920}
            height={1200}
            className="aspect-[4/3] shadow-lift"
            imgClassName="transition-transform duration-[1200ms] hover:scale-105"
          />
          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-2xl shadow-soft">
              <iframe
                title="Eat Bae location map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=72.81%2C19.04%2C72.86%2C19.08&layer=mapnik"
                className="h-[280px] w-full border-0 grayscale-[0.35] transition-[filter] duration-700 hover:grayscale-0"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
