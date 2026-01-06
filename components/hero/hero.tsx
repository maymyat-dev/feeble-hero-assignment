import React from 'react'
import HeroBadge from './herobadge'
import HeroButtons from './herobuttons'
import Image from 'next/image'
import FloatingBirds from './floating-birds'

const Hero = () => {
  return (
      <section className='relative mt-16'>
          <FloatingBirds/>
          <div className='max-w-[736px] w-full text-center mx-auto flex flex-col gap-6'>
          
          <HeroBadge />
          <h1 className='font-bold leading-[1.2] tracking-[-0.02em] text-center text-[64px]'>
              <span className='text-primary-blue'>iMessage</span> Automation for Teams and AI Workflows.
          </h1>
          <p className='font-regular leading-[1.3] tracking-[-0.02em] text-center text-[18px]'>
              Coup lets you, your team, or AI workflows send iMessages directly from<br/> your phone number, running securely on your Mac or Mac Mini.
          </p>
          <HeroButtons/>
    </div>
      </section>
  )
}

export default Hero