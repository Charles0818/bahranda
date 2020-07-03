import React from 'react';
import manufacture from '../../assets/manufacture.svg';
import { Carousels } from '../../../components';

const { Carousel } = Carousels;
const HeaderSlides = () => {
  const slides = [
    <Slide1 />,
    <Slide1 />,
    <Slide1 />,
    <Slide1 />,
    <Slide1 />,
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
      <img src={manufacture} alt="slide" />
      <div className="d-flex column justify-content-center slide-content position-absolute-overlay">
        <div className="">
          <p className="font-lg color-white font-weight-300 margin-bottom-sm">Bridging the gap between</p>
          <h2 className="color-white font-weight-500 margin-bottom-sm">The Agricultural and Manufacturing Sector</h2>
          <button className="ripple padding-md bg-color1 border-r-10 color-white font-sm font-weight-600">Get started</button>
        </div>
      </div>
    </div>
  )
}

export default HeaderSlides;
