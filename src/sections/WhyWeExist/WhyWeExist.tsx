import { motion } from "framer-motion";

const WhyWeExist = () => {
  return (
    <section className="relative min-h-screen flex items-center">

      <div className="mx-auto max-w-7xl px-8">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.45em] text-[#7B8A86]"
        >
          Chapter One
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mt-8 max-w-4xl text-6xl md:text-8xl leading-[0.9]"
        >
          Every story
          <br />
          starts somewhere.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .4 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-2 gap-20"
        >
          <p className="text-xl leading-10 text-[#555]">

            Happiness Project was created with a simple belief:
            healing should never feel clinical.
            It should feel safe, human and deeply personal.

          </p>

          <p className="text-lg leading-9 text-[#666]">

            Every conversation, every movement,
            every step forward begins with understanding.
            That's why we bring physiotherapy and counselling
            together under one thoughtful space.

          </p>

        </motion.div>

      </div>

    </section>
  );
};

export default WhyWeExist;