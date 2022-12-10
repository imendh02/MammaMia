import React from 'react'
import Carousel from "./Carousel";
import Navbar from "../Navbar/Navbar";
import { data } from "./HeroData";
function HomeHero() {
  return (
    <>
    <Navbar />
    <Carousel data={data}/>
    </>
  )
}

export default HomeHero