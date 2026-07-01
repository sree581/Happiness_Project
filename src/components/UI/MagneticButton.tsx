import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function MagneticButton({
  children,
}: Props) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: .97,
      }}
      className="
      rounded-full
      bg-[#1F2B2B]
      px-10
      py-5
      text-white
      shadow-xl
      "
    >
      {children}
    </motion.button>
  );
}