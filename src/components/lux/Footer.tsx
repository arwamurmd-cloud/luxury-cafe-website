import { Reveal } from "./Reveal";

const groups = [
  { title: "Visit", links: ["Bandra West", "Reservations", "Private Events", "Gift Cards"] },
  { title: "Menu", links: ["Coffee", "Ramen", "Brunch", "Desserts"] },
  { title: "Follow", links: ["Instagram", "Pinterest", "Journal", "Careers"] },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-cocoa text-cream/70">
      <div className="container-lux py-20 md:py-28">
        <Reveal>
          <div className="grid gap-14 lg:grid-cols-[1.4fr_2fr]">
            <div>
              <p className="font-display text-3xl tracking-[0.16em] text-cream">EAT BAE</p>
              <p className="mt-6 max-w-xs text-sm leading-relaxed">
                A sunlit café built for slow hours, good company and one more
                cup than you planned on.
              </p>
            </div>
            <div className="grid gap-10 sm:grid-cols-3">
              {groups.map((g) => (
                <div key={g.title}>
                  <p className="eyebrow text-honey">{g.title}</p>
                  <ul className="mt-5 space-y-3 text-sm">
                    {g.links.map((l) => (
                      <li key={l}>
                        <a href="#top" className="transition-colors duration-500 hover:text-cream">
                          {l}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col gap-3 border-t border-cream/10 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Eat Bae. All rights reserved.</p>
          <p>Crafted for slow mornings.</p>
        </div>
      </div>
    </footer>
  );
}
