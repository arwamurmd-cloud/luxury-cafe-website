import { motion, useMotionValue, useSpring } from "motion/react";
import { useRef, type ReactNode } from "react";

type Variant = "solid" | "outline" | "ghost" | "cream";

const styles: Record<Variant, string> = {
  solid:
    "bg-foreground text-background hover:bg-ember border border-transparent",
  outline:
    "glass-dark text-background hover:bg-background hover:text-foreground border",
  ghost:
    "border border-foreground/20 text-foreground hover:border-ember hover:text-ember",
  cream: "bg-cream text-cocoa hover:bg-honey border border-transparent",
};

export function MagneticButton({
  children,
  variant = "solid",
  href,
  className,
  onClick,
}: {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  className?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 180, damping: 18, mass: 0.4 });

  return (
    <motion.a
      ref={ref}
      href={href ?? "#"}
      onClick={onClick}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        x.set((e.clientX - (rect.left + rect.width / 2)) * 0.28);
        y.set((e.clientY - (rect.top + rect.height / 2)) * 0.28);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-medium tracking-wide transition-colors duration-500 ${styles[variant]} ${className ?? ""}`}
    >
      {children}
    </motion.a>
  );
}
