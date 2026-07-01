import Experience from "./components/Scene/Experience";
import SmoothScroll from "./components/SmoothScroll";
import CursorGlow from "./components/UI/CursorGlow";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Story from "./components/Story/Story";
import Constellation from "./components/Constellation/Constellation";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";
import Approach from "./components/Approach/Approach";
import FAQ from "./components/FAQ/FAQ";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <SmoothScroll />

      {/* Global 3D Scene */}
      <Experience />

      {/* Cursor */}
      <CursorGlow />

      {/* Website */}
      <main className="relative z-10 w-full overflow-hidden">
        <Navbar />

        <Hero />

        <Story />

        <Constellation />

        <Team />

        <Approach />
        
        <FAQ />
        
        <Testimonials />

        <Contact />

        <Footer />
      </main>
    </>
  );
}

export default App;