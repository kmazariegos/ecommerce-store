import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Announcements from '../../Components/Announcements/Announcements'
import Slider from '../../Components/Slider/Slider'
import Categories from '../../Components/Categories/Categories'

const Home = () => {
  return (
    <div>
      <Announcements></Announcements>
      <Navbar></Navbar>
      <Slider></Slider>
      <Categories></Categories>
    </div>
  )
}

export default Home