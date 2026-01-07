"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { flyAcrossX } from "@/lib/motion-animation";

const FLY_DELAY = 1.6 + 0.35 + 0.3;
const FlyBirds = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden select-none">
      <motion.div
        className="absolute top-[60%] scale-[0.6]
    sm:scale-[0.75]
    md:scale-100"
        variants={flyAcrossX("right", FLY_DELAY)}
        initial="initial"
        animate="animate"
      >
        <Image
          src="/images/hero/bird-blue02.svg"
          alt=""
          width={103.38}
          height={60}
          className="w-auto h-auto"
        />
      </motion.div>

      <motion.div
        className="absolute top-[70%] scale-[0.6]
    sm:scale-[0.75]
    md:scale-100"
        variants={flyAcrossX("left", FLY_DELAY)}
        initial="initial"
        animate="animate"
      >
        <Image
          src="/images/hero/bird-blue03.svg"
          alt=""
          width={103.38}
          height={60}
          className="w-auto h-auto"
        />
      </motion.div>
    </div>
  );
};

export default FlyBirds;
