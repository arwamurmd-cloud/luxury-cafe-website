import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

const links = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#best-sellers" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 60));

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <motion.nav
        animate={{
          paddingTop: scrolled ? 10 : 22,
          paddingBottom: scrolled ? 10 : 22,
        }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`container-lux mt-3 flex items-center justify-between rounded-2xl transition-[background,box-shadow,backdrop-filter] duration-700 ${
          scrolled ? "glass" : "bg-transparent"
        }`}
        style={{ maxWidth: scrolled ? 1180 : 1280 }}
      >
        <a
          href="#top"
          className={`font-display text-xl tracking-[0.18em] transition-colors duration-500 ${
            scrolled ? "text-foreground" : "text-cream"
          }`}
        >
          EAT BAE
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`group relative text-sm transition-colors duration-500 ${
                scrolled ? "text-foreground/70 hover:text-foreground" : "text-cream/80 hover:text-cream"
              }`}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-ember transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <MagneticButton
            href="#contact"
            variant={scrolled ? "ghost" : "outline"}
            className="px-6 py-2.5"
          >
            Reserve
          </MagneticButton>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
          className={`md:hidden ${scrolled ? "text-foreground" : "text-cream"}`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="container-lux mt-2 md:hidden"
        >
          <div className="glass flex flex-col gap-1 rounded-2xl p-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
