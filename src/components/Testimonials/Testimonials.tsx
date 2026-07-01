import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Placeholder — Client testimonial will be added here once written consent has been obtained for publication.",
    author: "Client Initials",
  },
  {
    text: "Placeholder — Real experiences shared by clients will appear here after approval to protect privacy and confidentiality.",
    author: "Client Initials",
  },
  {
    text: "Placeholder — This section will feature authentic feedback from people who have found support at Happiness Project.",
    author: "Client Initials",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#F3F0EA] py-40 border-t border-[#E6DED4] shadow-[0_-20px_40px_-20px_rgba(36,51,47,0.04)]"
    >
      {/* Background Number */}

      <div className="absolute left-8 top-10 select-none text-[220px] font-bold text-[#24332F]/5">
        06
      </div>

      <div className="mx-auto max-w-7xl px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="mb-5 uppercase tracking-[0.5em] text-[#8A847A]">
            TESTIMONIALS
          </p>

          <h2 className="text-6xl leading-[0.9] lg:text-8xl">
            Words that
            <br />
            matter.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#666]">
            Real experiences from people who've found support at
            Happiness Project. Names can be withheld or shortened
            to initials to protect client privacy.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">

          {testimonials.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="
              rounded-[36px]
              border
              border-[#DDD5CB]
              bg-white/60
              p-10
              backdrop-blur-xl
              shadow-[0_20px_60px_rgba(36,51,47,0.08)]
              "
            >
              <div className="mb-8 text-5xl text-[#24332F]/20">
                "
              </div>

              <p className="text-lg leading-9 text-[#666] italic">
                {item.text}
              </p>

              <div className="mt-10 border-t border-[#E6DED4] pt-6">
                <p className="uppercase tracking-[0.3em] text-sm text-[#8A847A]">
                  {item.author}
                </p>
              </div>
            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}