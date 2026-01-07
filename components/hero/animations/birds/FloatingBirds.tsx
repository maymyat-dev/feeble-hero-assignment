"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { birdVariants  } from "../../../../lib/motion-animation";

const birds = [
  { id: 1, x: "15%", y: "12%", mode: "hidden" },
  { id: 2, x: "25.5%", y: "16.2%", mode: "visible" },
  { id: 3, x: "73.4%", y: "13.5%", mode: "visible"},
  { id: 4, x: "75.5%", y: "31.5%", mode: "hidden" },
  { id: 5, x: "25.5%", y: "16.2%", mode: "hidden"},
  { id: 6, x: "73.4%", y: "13.5%", mode: "hidden"},
];

const FloatingBirds = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none hidden sm:block">
      {birds.map((bird) => {
        const isAlwaysVisible = bird.mode === "visible";

        return (
          <motion.div
            key={bird.id}
            className="absolute"
            style={{ left: bird.x, top: bird.y }}
            aria-hidden="true"
            variants={birdVariants}
            initial={isAlwaysVisible ? "visible" : "hidden"}
            animate="rise"
          >
            <Image
              src="/images/hero/bird.svg"
              alt=""
              width={43}
              height={14}
              priority
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingBirds;
