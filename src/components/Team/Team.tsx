import { motion } from "framer-motion";

export default function Team() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#F8F6F1] overflow-hidden">

      <div className="absolute right-0 top-0 text-[300px] text-[#24332F]/5 font-bold select-none">
        03
      </div>

      <div className="mx-auto max-w-7xl w-full grid lg:grid-cols-2 gap-24 px-12">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="tracking-[0.5em] uppercase text-[#8d877f] mb-6">
            OUR TEAM
          </p>

          <h2 className="text-7xl leading-[0.9] mb-10">
            Walking
            <br />
            beside you.
          </h2>

          <p className="text-xl leading-10 text-[#5c5c5c] max-w-xl">
            Behind every session is a team committed to compassionate,
            evidence-based and deeply human care.
          </p>
        </motion.div>

        {/* RIGHT */}

        <motion.div
  initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="
    rounded-[40px]
    border
    border-white/40
    bg-white/40
    backdrop-blur-2xl
    shadow-2xl
    p-12
    h-fit
    max-w-[650px]
    w-full
    ml-auto
  "
>

  <div className="space-y-10">

    <div className="border-b border-[#ddd] pb-8">
      <h3 className="text-4xl mb-4">
        Clinical Psychologists
      </h3>

      <p className="text-lg leading-8 text-[#666]">
        Individual therapy, CBT, anxiety,
        depression, stress management and
        emotional wellbeing.
      </p>
    </div>

    <div className="border-b border-[#ddd] pb-8">
      <h3 className="text-4xl mb-4">
        Physiotherapists
      </h3>

      <p className="text-lg leading-8 text-[#666]">
        Pain management, rehabilitation,
        posture correction, movement therapy
        and recovery.
      </p>
    </div>

    <div>
      <h3 className="text-4xl mb-4">
        Collaborative Care
      </h3>

      <p className="text-lg leading-8 text-[#666]">
        Mental health professionals and
        physiotherapists work together whenever
        appropriate, creating holistic,
        person-centred care.
      </p>
    </div>

  </div>

</motion.div>

      </div>

    </section>
  );
}