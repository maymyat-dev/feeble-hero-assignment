'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const birds = [
  { id: 1, x: '6rem', y: '6.5rem', delay: 4 },
  { id: 2, x: '18.5rem', y: '9.3rem', delay: 5 },
  { id: 3, x: '79.5%', y: '7.5rem', delay: 3.5 },
  { id: 4, x: '82%', y: '62%', delay: 4.5 },
]

const FloatingBirds = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {birds.map((bird) => (
        <motion.div
          key={bird.id}
          className="absolute"
          aria-hidden="true"
          style={{ left: bird.x, top: bird.y }}
          initial={{ y: 0}}
          animate={{ y: [0, -6, 0]}}
          transition={{
            duration: 4,
            delay: bird.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Image
            src="/images/hero/bird.svg"
            alt=""
            width={43}
            height={14}
            priority
          />
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingBirds
