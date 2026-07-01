import { motion } from "framer-motion";
import GlassCard from "../../components/GlassCard/GlassCard";
import { services } from "../../utils/Services";

export default function Services() {
  return (
    <section className="min-h-screen py-40">

      <div className="mx-auto max-w-7xl px-8">

        <p className="uppercase tracking-[0.45em] text-[#7B8A86]">
          Chapter Two
        </p>

        <h2 className="mt-8 text-7xl leading-none">

          Healing
          <br />
          has many
          <br />
          paths.

        </h2>

        <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.12,
              }}
              viewport={{
                once: true,
              }}
            >
              <GlassCard {...service} />
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}