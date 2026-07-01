import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
}

export default function GlassPanel({
  children,
  className = "",
}: GlassPanelProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.3,
      }}
      className={`
        relative
        overflow-hidden
        rounded-[36px]
        border
        border-white/40
        bg-white/25
        backdrop-blur-3xl
        shadow-[0_10px_60px_rgba(0,0,0,.08)]
        ${className}
      `}
    >
      <div
    className="
    absolute
    inset-0
    bg-gradient-to-br
    from-white/60
    via-transparent
    to-transparent
    opacity-60
"
/>
{children}
<div
    className="
    pointer-events-none
    absolute
    -left-10
    top-0
    h-full
    w-16
    rotate-12
    bg-white/20
    blur-xl
"
/>
    </motion.div>
  );
}