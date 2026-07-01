import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative flex min-h-screen items-center overflow-hidden bg-[#F8F6F1] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

      <div className="absolute right-6 top-0 text-[220px] font-bold text-[#24332F]/5 select-none sm:right-8 sm:text-[280px] lg:text-[320px]">
        04
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-12 px-2 sm:px-4 md:gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-8">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl pl-0 sm:pl-2 lg:pl-4"
        >
          <p className="mb-5 uppercase tracking-[0.45em] text-[#8a847a]">
            CONTACT
          </p>

          <h2 className="mb-7 text-5xl leading-[0.9] sm:text-6xl lg:text-7xl">
            Let&apos;s begin
            <br />
            your journey.
          </h2>

          <p className="mb-10 text-lg leading-8 text-[#666] sm:text-xl sm:leading-9">
            Whether you&apos;re seeking counselling, physiotherapy, or simply a conversation, we&apos;re here to listen with care and clarity.
          </p>

          <div className="space-y-8 rounded-[32px] border border-[#e3ddd5] bg-white/60 p-7 shadow-[0_15px_45px_rgba(36,51,47,0.06)] backdrop-blur-xl">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#9b9389]">
                ADDRESS
              </p>
              <p className="text-lg leading-8 text-[#333]">
                Near Natchiar Mutt Temple
                <br />
                Jawahar Nagar
                <br />
                Kollam, Kerala
              </p>
            </div>

            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#9b9389]">
                PHONE
              </p>
              <a href="tel:+917907493123" className="text-lg text-[#333] transition hover:text-[#24332F]">
                +91 79074 93123
              </a>
            </div>

            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#9b9389]">
                FOLLOW US
              </p>
              <div className="flex flex-wrap gap-4 text-lg">
                <a href="#" className="transition hover:text-[#24332F]">Instagram</a>
                <a href="#" className="transition hover:text-[#24332F]">Facebook</a>
                <a href="#" className="transition hover:text-[#24332F]">WhatsApp</a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="rounded-[40px] border border-[#ddd4ca] bg-white/75 p-8 shadow-[0_25px_70px_rgba(36,51,47,0.08)] backdrop-blur-2xl sm:p-10"
        >
          <div className="mb-8">
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#9b9389]">
              START HERE
            </p>
            <h3 className="text-3xl text-[#24332F] sm:text-4xl">
              Send a message
            </h3>
          </div>

          <div className="space-y-5">
            <input
              placeholder="Your Name"
              className="w-full rounded-2xl border border-[#e5dfd7] bg-white/80 p-4 text-[15px] outline-none transition focus:border-[#24332F] focus:ring-2 focus:ring-[#24332F]/10"
            />

            <input
              placeholder="Email"
              className="w-full rounded-2xl border border-[#e5dfd7] bg-white/80 p-4 text-[15px] outline-none transition focus:border-[#24332F] focus:ring-2 focus:ring-[#24332F]/10"
            />

            <input
              placeholder="Phone"
              className="w-full rounded-2xl border border-[#e5dfd7] bg-white/80 p-4 text-[15px] outline-none transition focus:border-[#24332F] focus:ring-2 focus:ring-[#24332F]/10"
            />

            <textarea
              rows={5}
              placeholder="Tell us how we can help..."
              className="w-full resize-none rounded-2xl border border-[#e5dfd7] bg-white/80 p-4 text-[15px] outline-none transition focus:border-[#24332F] focus:ring-2 focus:ring-[#24332F]/10"
            />

            <button className="w-full rounded-full bg-[#24332F] py-4 text-base font-medium text-white shadow-[0_15px_40px_rgba(36,51,47,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1b2825]">
              Book Your First Session →
            </button>
          </div>
        </motion.div>

      </div>

    </section>
  );
}