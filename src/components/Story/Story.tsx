import { motion } from "framer-motion";

export default function Story() {
  return (
    <section
      id="story"
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-[#F8F6F1]
      flex
      items-center
      py-40
      "
    >

      {/* Background Number */}

      <div
        className="
        absolute
        left-8
        top-6
        select-none
        text-[260px]
        lg:text-[360px]
        font-bold
        leading-none
        text-[#24332F]/5
        "
      >
        01
      </div>

      <div
        className="
        mx-auto
        grid
        w-full
        max-w-7xl
        grid-cols-1
        gap-32
        px-8
        lg:grid-cols-[0.75fr_1.25fr]
        "
      >

        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="flex flex-col justify-center"
        >

          <p
            className="
            mb-8
            uppercase
            tracking-[0.55em]
            text-[#8B847A]
            "
          >
            OUR STORY
          </p>

          <h2
            className="
            text-[64px]
            leading-[0.88]
            lg:text-[90px]
            "
          >
            Where
            <br />
            healing
            <br />
            feels
            <br />
            human.
          </h2>

        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="
          ml-auto
          w-full
          max-w-[760px]
          "
        >

          <h3
            className="
            mb-8
            text-[54px]
            leading-none
            "
          >
            Our Story
          </h3>

          <p
            className="
            mb-7
            text-[18px]
            leading-9
            text-[#666666]
            "
          >
            Happiness Project began with a simple, shared belief:
            mental health support should feel like care,
            not a clinical transaction.
          </p>

          <p
            className="
            text-[18px]
            leading-9
            text-[#666666]
            "
          >
            It was founded by two friends — a clinical psychologist
            who has spent years working closely with people through
            their hardest moments, and a researcher in criminal
            justice with a deep interest in how communities heal —
            who wanted to build something different for Kollam.

            <br />
            <br />

            What they set out to create wasn't just a therapy
            centre. It was a space where people could show up
            exactly as they are, talk openly without fear of
            judgment, and find their way back to themselves,
            supported by people who genuinely care.
          </p>

          {/* Cards */}

          <div
            className="
            mt-16
            grid
            items-stretch
            gap-8
            lg:grid-cols-2
            "
          >
                        {/* Mission Card */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="
              flex
              h-full
              flex-col
              rounded-[34px]
              border
              border-[#E5DDD3]
              bg-white/80
              p-8
              shadow-[0_20px_50px_rgba(36,51,47,0.08)]
              backdrop-blur-xl
              "
            >

              <div
                className="
                mb-6
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                bg-[#F4EEE7]
                text-3xl
                "
              >
                🌱
              </div>

              <h4
                className="
                mb-6
                text-[34px]
                leading-tight
                "
              >
                Our Mission
              </h4>

              <ul
                className="
                list-inside
                list-disc
                space-y-4
                text-[16px]
                leading-8
                text-[#666]
                "
              >

                <li>
                  Promote good mental health through approaches
                  that go beyond the traditional therapy session.
                </li>

                <li>
                  Create a genuinely safe environment for every
                  person who walks through our door.
                </li>

                <li>
                  Offer support that is evidence-based,
                  but never cold or clinical in its delivery.
                </li>

              </ul>

            </motion.div>

            {/* Why Different Card */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="
              flex
              h-full
              flex-col
              rounded-[34px]
              border
              border-[#E5DDD3]
              bg-white/80
              p-8
              shadow-[0_20px_50px_rgba(36,51,47,0.08)]
              backdrop-blur-xl
              "
            >

              <div
                className="
                mb-6
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                bg-[#F4EEE7]
                text-3xl
                "
              >
                🤍
              </div>

              <h4
                className="
                mb-6
                text-[34px]
                leading-tight
                "
              >
                Why We're Different
              </h4>

              <p
                className="
                text-[16px]
                leading-8
                text-[#666]
                "
              >
                Most clinics are built around efficiency.
                We built ours around comfort.
                The environment here is intentionally
                warm—closer to a home than a hospital—
                because we believe people open up more
                honestly when they feel safe, not just seen.
              </p>

              <p
                className="
                mt-5
                text-[16px]
                leading-8
                text-[#666]
                "
              >
                Every plan is built around the individual
                in front of us, not a template.
              </p>

            </motion.div>
                      </div>

        </motion.div>

      </div>

    </section>
  );
}