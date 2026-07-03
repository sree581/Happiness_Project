import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How do I know if I need counselling?",
    a: "If you're experiencing stress, anxiety, emotional difficulties, relationship challenges, low mood, or simply feel overwhelmed by life's demands, counselling can provide a safe space to explore your concerns and receive professional support.",
  },
  {
    q: "Is everything I share confidential?",
    a: "Yes. Confidentiality is one of the most important aspects of therapy. Your privacy and personal information are treated with the highest level of care and professionalism.",
  },
  {
    q: "How many sessions will I need?",
    a: "The number of sessions varies from person to person. Some individuals may benefit from a few sessions, while others may require longer-term support depending on their needs and goals.",
  },
  {
    q: "Do you provide counselling for children and teenagers?",
    a: "Yes. We provide age-appropriate counselling and psychological support for children and adolescents facing emotional, behavioural, academic or social challenges.",
  },
  {
    q: "Do you provide couple and family counselling?",
    a: "Yes. We work with couples and families to improve communication, resolve conflicts and strengthen relationships.",
  },
  {
    q: "Can I book an appointment directly?",
    a: "Yes. You can contact us directly through phone, WhatsApp or the appointment form available on the website.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#F3F0EA] py-32 border-t border-[#E6DED4] shadow-[0_-20px_40px_-20px_rgba(36,51,47,0.04)]"
    >
      {/* Background Number */}

      <div className="absolute right-12 top-10 select-none text-[220px] font-bold text-[#24332F]/5">
        05
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-20 px-8 lg:grid-cols-[0.8fr_1.2fr]">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="self-start"
        >
          <p className="mb-6 uppercase tracking-[0.55em] text-[#8A847A]">
            FAQ
          </p>

          <h2 className="text-6xl leading-[0.9] lg:text-8xl">
            Questions,
            <br />
            answered.
          </h2>

          <p className="mt-8 max-w-md text-lg leading-8 text-[#666]">
            Everything you might want to know before beginning your journey
            with Happiness Project.
          </p>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border-b border-[#D9D2C8] pb-6"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between gap-8 py-4 text-left"
              >
                <h3 className="text-2xl leading-snug">
                  {item.q}
                </h3>

                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D8D0C6]">
                  {open === index ? (
                    <Minus size={18} />
                  ) : (
                    <Plus size={18} />
                  )}
                </div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: open === index ? "auto" : 0,
                  opacity: open === index ? 1 : 0,
                }}
                transition={{ duration: 0.35 }}
                className="overflow-hidden"
              >
                <p className="max-w-3xl pb-4 pr-12 text-lg leading-9 text-[#666]">
                  {item.a}
                </p>
              </motion.div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}