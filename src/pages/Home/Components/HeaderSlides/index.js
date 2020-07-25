import React from 'react';
import banner1 from '../../assets/banner_hd.jpg'
import banner2 from '../../assets/banner_7_edit.jpg'
import banner3 from '../../assets/banner_12.jpeg'
import banner4 from '../../assets/banner_4.jpg'
import { Carousels } from '../../../components';

const { Carousel } = Carousels;
const HeaderSlides = () => {
  const slides = [
    <Slide1 />,
    <Slide banner={banner2} text="Click = Select = Trade" />,
    <Slide banner={banner3} text="" />,
    <Slide banner={banner4} text="Re-writing Africa's Trade Advantage" />,
  ]
  return (
    <div className="margin-bottom-md">
      <Carousel slides={slides} controls={true} bullet={true} duration={10000} />
    </div>
  )
}

const Slide1 = () => {
  return (
    <div className="header-slide position-relative">
      <img src={banner1} alt="slide" />
      <div className="d-flex column justify-content-center slide-content position-absolute-overlay">
        <div className="">
          <p className="font-lg color-white font-weight-300 margin-bottom-sm">Bridging the gap between</p>
          <h2 className="color-white font-weight-500 margin-bottom-sm">The Agricultural and Manufacturing Sector</h2>
          <button className="ripple cursor-pointer padding-md bg-color1 border-r-10 color-white font-sm font-weight-600">Get started</button>
        </div>
      </div>
    </div>
  )
}


const Slide = ({ banner, text }) => {
  return (
    <div className="header-slide position-relative">
      <img src={banner} alt="slide" />
      <div className="d-flex column justify-content-center slide-content position-absolute-overlay">
        <div className="">
          <h2 className="color-white font-weight-500 margin-bottom-sm">{text}</h2>
          <button className="ripple cursor-pointer padding-md bg-color1 border-r-10 color-white font-sm font-weight-600">Get started</button>
        </div>
      </div>
    </div>
  )
}


export default HeaderSlides;
