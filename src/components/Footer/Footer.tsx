import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#F4EFE8] border-t border-[#E2D9CE]">

      <div className="mx-auto max-w-7xl px-8 py-24">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid gap-16 lg:grid-cols-[1.3fr_1fr_1fr]"
        >

          {/* Brand */}

          <div>

            <p className="mb-5 uppercase tracking-[0.5em] text-[#8A847A]">
              HAPPINESS PROJECT
            </p>

            <h2 className="mb-8 text-5xl leading-[0.9]">
              A safe space
              <br />
              to heal.
            </h2>

            <p className="max-w-md text-lg leading-8 text-[#666]">
              Taking the first step toward support can feel difficult,
              but you don't have to do it alone. We're here to listen
              with compassion, professionalism and care.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-8 text-2xl">
              Quick Links
            </h3>

            <ul className="space-y-5 text-lg text-[#666]">

              <li><a href="#">Home</a></li>

              <li><a href="#story">About Us</a></li>

              <li><a href="#approach">Our Approach</a></li>

              <li><a href="#team">Our Team</a></li>

              <li><a href="#faq">FAQs</a></li>

              <li><a href="#testimonials">Testimonials</a></li>

              <li><a href="#contact">Contact Us</a></li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-8 text-2xl">
              Contact
            </h3>

            <div className="space-y-5 text-lg leading-8 text-[#666]">

              <p>
                Near Natchiar Mutt Temple
                <br />
                Jawahar Nagar
                <br />
                Kollam, Kerala
              </p>

              <p>
                +91 79074 93123
              </p>

              <p>
                Languages:
                <br />
                English, Malayalam
              </p>

              <div className="flex gap-5 pt-2">

                <a href="#">
                  Instagram
                </a>

                <a href="#">
                  Facebook
                </a>

                <a href="#">
                  WhatsApp
                </a>

              </div>

            </div>

          </div>

        </motion.div>

        <div className="my-16 h-px bg-[#DDD3C8]" />

        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">

          <div>

            <h4 className="mb-4 text-xl">
              Disclaimer
            </h4>

            <p className="max-w-4xl text-base leading-8 text-[#666]">
              The information on this website is for general awareness
              only and is not a substitute for professional medical or
              psychological advice. If you are facing a mental health
              emergency, please contact a local helpline or visit the
              nearest hospital.
            </p>

          </div>

          <div className="flex items-end justify-start lg:justify-end">

            <p className="text-[#888]">
              © 2026 Happiness Project
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}