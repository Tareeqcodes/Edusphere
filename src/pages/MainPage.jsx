import React from 'react'
import Header from '../components/Homepage/Header';
import FeatureCards from '../components/Homepage/FeatureCards';
import Testimonial from '../components/Testimonial';
import How from '../components/How';
import NewsLetter from '../components/NewsLetter';
import News from '../components/News';
import PricingSection from '../components/PricingSection';
import ResourcesSection from '../components/ResourcesSection';
const MainPage = () => {
  return (
    <section className="flex flex-col pb-32 justify-center items-center text-center">
        <Header />
        <FeatureCards />
        <How />
        <ResourcesSection />
        <PricingSection />
        <News />
        <Testimonial />
        <NewsLetter />
    </section>
  )
}

export default MainPage