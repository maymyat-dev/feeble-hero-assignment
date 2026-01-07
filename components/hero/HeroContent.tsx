import HeroBadge from '../ui/Badge'
import HeroButtons from '../ui/Button'

const HeroContent = () => {
  return (
      <div className='relative z-10 mx-auto flex max-w-[736px] flex-col gap-6 text-center'>
          
          <HeroBadge />
          <h1 className='font-bold md:leading-[1.2] leading-[1.1] tracking-[-0.02em] text-center md:text-[64px] text-[40px]'>
              <span className='text-primary-blue'>iMessage</span> Automation <br className='sm:block hidden'/> for Teams and AI <br className='sm:block hidden'/>Workflows.
          </h1>
          <p className='font-regular leading-[1.3] tracking-[-0.02em] text-center text-[18px]'>
              Coup lets you, your team, or AI workflows send iMessages directly from<br/> your phone number, running securely on your Mac or Mac Mini.
          </p>
              <HeroButtons />
      </div>
  )
}

export default HeroContent