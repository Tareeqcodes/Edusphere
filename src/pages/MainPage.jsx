import React from 'react'
import Header from '../components/Homepage/Header';
import FeatureCards from '../components/Homepage/FeatureCards';
import About from '../components/Homepage/About';
import Search from '../components/Search'

const MainPage = () => {
  return (
    <section className="flex bg-white pt-32 pb-32  px-4 lg:px-16 flex-col justify-center items-center text-center">
        <Search />
        <Header />
        <About />
        <FeatureCards />
        <div className='mt-10'>

        
        </div>
    </section>
  )
}

export default MainPage