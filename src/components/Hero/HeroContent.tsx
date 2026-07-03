import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className="relative z-30 mx-auto max-w-6xl px-6 text-center"
    >
      <motion.p
        initial={{ opacity: 0, letterSpacing: "1em" }}
        animate={{ opacity: 1, letterSpacing: "0.6em" }}
        transition={{ delay: 0.3, duration: 1 }}
        className="uppercase tracking-[0.6em] text-[#8b847a] text-sm"
      >
        HAPPINESS PROJECT
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="
        mt-8
        text-[58px]
        sm:text-[80px]
        md:text-[110px]
        lg:text-[130px]
        leading-[0.88]
        font-light
        text-[#24332F]
        "
      >
        A Safe Space
        <br />
        to Talk,
        <br />
        Heal and Grow
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="
        mx-auto
        mt-10
        max-w-3xl
        text-lg
        md:text-xl
        leading-9
        text-[#666]
        "
      >
        Life isn't always easy, and carrying everything on your own can
        feel like too much. Whether you're dealing with stress, anxiety,
        a difficult relationship, or simply need someone who will really
        listen, Happiness Project is here to support you—with compassion,
        understanding, and professional care.
      </motion.p>

      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="
        mt-12
        text-2xl
        md:text-3xl
        font-light
        text-[#24332F]
        "
      >
        You're Not Alone in This.
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="mt-12 flex flex-wrap justify-center gap-6"
      >
        <button
          className="
          rounded-full
          bg-[#24332F]
          px-10
          py-5
          text-white
          text-lg
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-xl
          "
        >
          Book Appointment
        </button>

        
      </motion.div>
    </motion.div>
  );
}