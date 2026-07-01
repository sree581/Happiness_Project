import AmbientGlow from "../AmbientGlow/AmbientGlow";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">

      {/* Ambient background glow */}
      <AmbientGlow />

      {/* Hero Content */}
      <HeroContent />

      {/* Smooth transition to next section */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-72
          w-full
          bg-gradient-to-b
          from-transparent
          via-[#F8F6F1]/40
          to-[#F8F6F1]
        "
      />
    </section>
  );
}