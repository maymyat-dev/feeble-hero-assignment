"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cloudMotion } from "@/lib/motion-animation";

const Clouds = () => {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden"
      aria-hidden
    >
      <motion.div
        variants={cloudMotion}
        initial="initial"
        animate="animate"
        className="absolute bottom-0 w-full  md:h-[385px] sm:h-[300px] h-[200px]"
      >
        <Image
          src="/images/hero/clouds.svg"
          alt="Clouds"
          fill
          className="object-cover opacity-80"
          priority
        />
      </motion.div>
    </div>
  );
};

export default Clouds;
