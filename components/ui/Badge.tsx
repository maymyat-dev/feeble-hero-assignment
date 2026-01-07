import Image from 'next/image'

const HeroBadge = () => {
  return (
      <div className='inline-flex px-2 py-1 gap-2 bg-white rounded-full shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05)] mx-auto'>
          <Image src="/images/hero/badge-icon.svg" alt="Badge" width={32} height={17}/>
          <p className='font-medium leading-[1.2] tracking-[-0.02em] text-[#006FE8]'>#1 iMessage Automation Tool</p>
    </div>
  )
}

export default HeroBadge