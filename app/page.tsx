import Hero from '@/components/hero/hero'
import AppNav from '@/components/navigation/app-nav'
import React from 'react'

const Home = () => {
  return (
    <main className="min-h-screen overflow-x-hidden py-[38px]">
      <header className='w-full'>
        <div className='nav-container py-6 bg-white rounded-full'>
          <AppNav/>
        </div>
      </header>
      <Hero/>
    </main>
  )
}

export default Home