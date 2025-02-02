import React from 'react'
import Header from '../components/Homepage/Header';
import FeatureCards from '../components/Homepage/FeatureCards';


const MainPage = () => {
  return (
    <section className="flex flex-col pb-32 justify-center items-center text-center">
        <Header />
        <FeatureCards />
    </section>
  )
}

export default MainPage