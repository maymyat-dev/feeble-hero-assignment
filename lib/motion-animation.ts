import { Variants } from "framer-motion";

const base = {
  initial: {
    y: "100%",
    opacity: 0,
    scale: 1.05,
  },
};

export const cloudMotion: Variants = {
  ...base,
  animate: {
    y: "0%",
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const textBirdMotion: Variants = {
  ...base,
  animate: {
    y: "0%",
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.4,
      delay: 0.35, 
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const flyAcrossX = (
  direction: "left" | "right",
  delay = 0
): Variants => {
  const fromX = direction === "right" ? "-20vw" : "120vw";
  const toX = direction === "right" ? "120vw" : "-20vw";

  const midX = "42vw"; 

  const midY =
    direction === "right"
      ? -120 
      : -40;

  return {
    initial: {
      x: fromX,
      y: 80,
      opacity: 0,
      scale: 0.8,
    },
    animate: {
      x: [fromX, midX, toX],
      y: [80, midY, -180],
      opacity: [0, 1, 1, 0],
      scale: [0.8, 1, 1, 0.85],
      transition: {
        duration: 2,
        delay,
        ease: "linear",
      },
    },
  };
};

export const birdVariants: Variants = {
  hidden: {
    y: "100vh",
    opacity: 0,
    scale: 1.05,
  },

  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
  },

  rise:  {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};