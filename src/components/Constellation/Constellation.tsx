import { motion } from "framer-motion";

const services = [
  {
    title: "Individual Therapy",
    x: "15%",
    y: "28%",
    color: "#C4956A",
  },
  {
    title: "Couple Therapy",
    x: "72%",
    y: "20%",
    color: "#DAB89B",
  },
  {
    title: "Family Counselling",
    x: "28%",
    y: "72%",
    color: "#A87C6D",
  },
  {
    title: "Child Therapy",
    x: "76%",
    y: "68%",
    color: "#D9C2A6",
  },
  {
    title: "Psychological Assessment",
    x: "52%",
    y: "42%",
    color: "#C9A47E",
  },
  {
    title: "Workshops",
    x: "8%",
    y: "60%",
    color: "#B98C72",
  },
];

export default function Constellation() {
  return (
    <section id="care" className="relative min-h-screen overflow-hidden bg-[#F8F6F1] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">

      {/* Background Number */}
      <h1
        className="
        absolute
        right-10
        top-0
        text-[220px]
        md:text-[320px]
        font-bold
        text-[#24332F]
        opacity-[0.04]
        select-none
        "
      >
        02
      </h1>

      {/* Heading */}

      <div className="mx-auto max-w-5xl pt-8 text-center">

        <p className="tracking-[0.6em] uppercase text-[#8b867e]">

          OUR CARE

        </p>

        <h2 className="mt-8 text-5xl leading-[0.9] sm:text-6xl md:text-7xl lg:text-8xl">

          Every journey
          <br />
          begins differently.

        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#666] sm:text-xl sm:leading-9">

          Explore the different ways we support healing.
          Every glowing point represents a service offered
          at Happiness Project.

        </p>

      </div>

      {/* Nodes */}

      <div className="relative mx-auto mt-16 h-[620px] max-w-7xl sm:mt-20 sm:h-[680px] lg:mt-24 lg:h-[760px]">

        {services.map((item, index) => (

          <motion.div
            key={index}
            className="absolute cursor-pointer"
            style={{
              left: item.x,
              top: item.y,
            }}
            whileHover={{
              scale: 1.25,
            }}
          >

            <motion.div
              animate={{
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="relative"
            >

              <div
                className="h-6 w-6 rounded-full"
                style={{
                  background: item.color,
                  boxShadow: `0 0 35px ${item.color}`,
                }}
              />

            </motion.div>

            <div
              className="
              mt-5
              rounded-full
              border
              border-white/30
              bg-white/30
              px-5
              py-2
              text-sm
              backdrop-blur-xl
              whitespace-nowrap
              "
            >
              {item.title}
            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}