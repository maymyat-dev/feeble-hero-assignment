import FloatingBirds from "./animations/birds/FloatingBirds";
import Clouds from "./animations/Clouds";
import FlyBirds from "./animations/birds/FlyBirds";
import HeroContent from "./HeroContent";
import ScrollDown from "../ui/ScrollDown";
import TextBirds from "./animations/birds/TextBirds";

const Hero = () => {
  return (
    <section className="relative  w-full overflow-hidden flex items-center justify-center md:mt-16 mt-10 md:pb-[445px] sm:pb-[300px] pb-[200px] px-4">
      <Clouds />

      <div className="absolute inset-0 pointer-events-none">
        <TextBirds />
        <FlyBirds />
        <FloatingBirds />
      </div>

      <div className="relative z-10">
        <HeroContent />
      </div>

      <ScrollDown />
    </section>
  );
};
export default Hero;
