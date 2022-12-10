import React from 'react'
import Hero from './MenuHero';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import DiscoverMenu from './DiscoverMenu';
import Starter from './StarterMenu';
import './Menu.css';
function Menu() {
  return (
    <>
    <Navbar />
    <Hero />
    <Starter />
    <DiscoverMenu />
    <Footer />
    </>
  )
}

export default Menu