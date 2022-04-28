import React from 'react';
import './Home.css';
import Navbar from '../../Components/Navbar/Navbar';
import Announcements from '../../Components/Announcements/Announcements';
import Slider from '../../Components/Slider/Slider';
import Categories from '../../Components/Categories/Categories';
import Products from '../../Components/Products/Products';
import Newsletter from '../../Components/Newsletter/Newsletter'; 
import Footer from '../../Components/Footer/Footer';

const Home = () => { 
  return (
    <div>
      <Announcements></Announcements> 
      <Navbar></Navbar>
      <Slider></Slider>
      <Categories></Categories>
      <Products></Products>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  )
}

export default Home