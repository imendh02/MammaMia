import React from 'react'
import HomeHero from './HomeHero';
import HomeAbout from './HomeAbout';
import HomeServices from './HomeServices';
import HomeDelivery from './HomeDelivery';
import HomeAvailability from './HomeAvailability';
import Footer from '../Footer/Footer';
function Home() {
  return (
    <>
    <HomeHero />
    <HomeAbout />
    <HomeServices />
    <HomeDelivery />
    <HomeAvailability />
    <Footer />
    </>
  )
}

export default Home