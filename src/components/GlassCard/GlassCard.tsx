import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle: string;
}

export default function GlassCard({
  title,
  subtitle,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -15,
        rotateX: 6,
        rotateY: -6,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      className="
      rounded-[32px]
      border
      border-white/40
      bg-white/25
      backdrop-blur-2xl
      p-8
      shadow-xl
      cursor-pointer
      "
    >
      <h3 className="text-3xl">
        {title}
      </h3>

      <p className="mt-5 text-[#666] leading-8">
        {subtitle}
      </p>
    </motion.div>
  );
}