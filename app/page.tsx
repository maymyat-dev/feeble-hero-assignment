import Hero from '@/components/hero/Hero'
import AppNav from '@/components/navigation/AppNav'
import MobileNav from '@/components/navigation/MobileNav'

const Home = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <header className='w-full px-4'>
        <div className='nav-container md:py-6 py-4 mt-[38px] bg-white rounded-full'>
          <AppNav />
          <MobileNav />
        </div>
      </header>
      <Hero/>
    </main>
  )
}

export default Home