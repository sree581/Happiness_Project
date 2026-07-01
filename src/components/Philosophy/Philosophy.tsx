import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-8">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 1.2 }}
        className="max-w-6xl"
      >

        <p className="uppercase tracking-[0.5em] text-[#8d8579] mb-8">
          CHAPTER 01
        </p>

        <h2 className="text-[70px] md:text-[110px] leading-[0.92]">

          Healing
          <br />
          has a rhythm.

        </h2>

        <div className="mt-20 grid md:grid-cols-2 gap-16">

          <p className="text-xl leading-10 text-[#666]">
            We believe healing is not rushed.
            It unfolds through movement,
            conversation, trust and consistency.
          </p>

          <p className="text-xl leading-10 text-[#666]">
            Happiness Project brings together
            physiotherapy and counselling
            into one calm space where recovery
            becomes personal again.
          </p>

        </div>

      </motion.div>

    </section>
  );
}