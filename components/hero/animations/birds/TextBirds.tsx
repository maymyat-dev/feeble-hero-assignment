"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { textBirdMotion } from "../../../../lib/motion-animation";

const birds = [
  {
    id: 1,
    image: "/images/hero/bird-blue01.svg",
    x: "21.9%",
    y: "87.3%",
    w: 103,
    h: 77,
  },
  {
    id: 2,
    image: "/images/hero/bird-blue02.svg",
    x: "36.8%",
    y: "81.5%",
    w: 88,
    h: 57,
  },
  {
    id: 3,
    image: "/images/hero/bird-blue03.svg",
    x: "69.5%",
    y: "89.6%",
    w: 128,
    h: 54,
  },
  {
    id: 4,
    image: "/images/hero/bird-blue04.svg",
    x: "86%",
    y: "84%",
    w: 129,
    h: 102,
  },
];

const TextBirds = () => {
  return (
    <motion.div
      variants={textBirdMotion}
      initial="initial"
      animate="animate"
      className="absolute inset-0 pointer-events-none select-none"
    >
      {birds.map(({ id, image, x, y, w, h }) => (
        <div
          key={id}
          className="absolute scale-[0.6]
    sm:scale-[0.75]
    md:scale-100
    transition-transform
    duration-500
"
          style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
        >
          <Image
            src={image}
            alt=""
            width={w}
            height={h}
            priority
            className="h-auto w-auto"
          />
        </div>
      ))}
    </motion.div>
  );
};

export default TextBirds;
