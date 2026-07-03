import { motion } from "framer-motion";

const features = [
  {
    title: "Personalized, Not Templated",
    text: "No two people walk in with the same story, so no two treatment plans do either.",
  },
  {
    title: "A Warm, Home-Like Setting",
    text: "Built to feel comforting rather than clinical, because comfort makes honesty easier.",
  },
  {
    title: "Genuine Expertise",
    text: "Every therapist is professionally trained and invested in the human side of the work.",
  },
  {
    title: "Confidentiality, Always",
    text: "What's shared in a session stays there. No exceptions.",
  },
];

export default function Approach() {
  return (
    <section
  id="approach"
  className="relative min-h-screen bg-[#F8F6F1] pt-32 pb-48 lg:pt-40 lg:pb-56 overflow-hidden"
>
      <div className="absolute left-8 top-0 text-[320px] font-bold text-[#24332F]/5 select-none">
        04
      </div>

      <div className="mx-auto max-w-7xl px-8">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >

          <p className="uppercase tracking-[0.5em] text-[#8a847a] mb-6">
            OUR APPROACH
          </p>

          <h2 className="text-6xl md:text-8xl leading-[0.9] mb-10">
            Listen.
            <br />
            Understand.
            <br />
            Support.
            <br />
            Grow.
          </h2>

          <p className="text-xl leading-10 text-[#666] max-w-3xl">
            Healing begins with feeling heard. Every session combines
            compassion and evidence-based methods, in a space where
            people can be honest without fear of judgment.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 mt-24">

          {features.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="
              rounded-[34px]
              border
              border-[#ddd4ca]
              bg-white/60
              backdrop-blur-xl
              p-10
              shadow-[0_25px_70px_rgba(36,51,47,0.08)]
              "
            >

              <div className="text-6xl mb-6">
                0{index + 1}
              </div>

              <h3 className="text-3xl mb-5">
                {item.title}
              </h3>

              <p className="text-lg leading-8 text-[#666]">
                {item.text}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}