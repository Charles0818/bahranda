import React, { useState, useEffect } from 'react';
import PropTypes from  'prop-types';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import { FaSearchPlus } from 'react-icons/fa';
import { useSwipeable } from 'react-swipeable';
import { Carousels } from '../../../components';

const { useSlide } = Carousels;
const ThumbnailCarousel = ({
  thumbnails, slideWidth = 100, duration, autoSlide, cardAlign 
}) => {
  const { slideLeft, distance, slideRight } = useSlide(thumbnails.length, slideWidth);
  const handlers = useSwipeable({
    onSwipedLeft: () => slideRight(),
    onSwipedRight: () => slideLeft(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });
  return (
    thumbnails.length !== 0 && (
      <div className="">
        <div {...handlers} className="image-slider d-flex nowrap align-items-center position-relative overflow-h margin-bottom-sm">
          {thumbnails.map((thumbnail, index) => {
            return (
              <img src={thumbnail} key={index} className="slide" style={{minWidth: !cardAlign ? '100%' : 'auto', transform: `translateX(${distance}%)`}} / >
            )
          })}
          <div className="controls position-absolute d-flex align-items-center justify-content-s-between">
            <div className="d-flex align-items-center">
              <button onClick={slideLeft} className="color1 ripple bg-color1-opacity padding-sm cursor-pointer cursor-pointer">
                <MdKeyboardArrowLeft className="font-lg" />
              </button>
              <button onClick={slideRight} className="color1 ripple bg-color1-opacity padding-sm cursor-pointer cursor-pointer">
                <MdKeyboardArrowRight className="font-lg " />
              </button>
            </div>
            <button className="bg-yellow padding-sm color-white">
              <FaSearchPlus className="font-lg cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    )
  )
}

export default ThumbnailCarousel;



const Carousel = ({ slides, slideWidth, duration, autoSlide, cardAlign, bullet, controls }) => {
  const { slideLeft, distance, slideRight, bulletSlide } = useSlide(slides.length, slideWidth);
  const handlers = useSwipeable({
    onSwipedLeft: () => slideRight(),
    onSwipedRight: () => slideLeft(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });
  useEffect(() => {
    if(autoSlide) {
      const interval = slides.length > 1 ? setInterval(() => slideRight(), duration) : null;
      return () => clearInterval(interval)
    }
  })
  return (
    slides.length !== 0 && (
      <div {...handlers} className="slider d-flex nowrap align-items-center position-relative overflow-h margin-bottom-sm">
        { slides.map((Slide, index) => {
            return (
              <div key={index} className="slide" style={{minWidth: !cardAlign ? '100%' : 'auto', transform: `translateX(${distance}%)`}}>
                {Slide}
              </div>
            )
          }) }
        { controls && (
            <>
              <button id="slide-right" onClick={slideRight} className="bg-dark-opacity border-r-circle padding-horizontal-sm padding-vertical-sm cursor-pointer">
                <MdKeyboardArrowRight className="font-lg color-white" />
              </button>
              <button id="slide-left" onClick={slideLeft} className="bg-dark-opacity border-r-circle  padding-horizontal-sm padding-vertical-sm cursor-pointer">
                <MdKeyboardArrowLeft className="font-lg color-white" />
              </button>
            </>
          )}
        <div className="d-flex bullets">
        { bullet &&
          slides.map((_, index) => (
            <div key={index} onClick={() => bulletSlide(index)} className={`bullet ${index === Math.abs(distance / 100) ? 'active' : ''} margin-right-sm border-r-circle`} />
          ))
        }
        </div>
      </div>
    )
  )
}

Carousel.propTypes = {
  duration: PropTypes.number.isRequired,
  bullet: PropTypes.bool,
  controls: PropTypes.bool,
  slideWidth: PropTypes.number,
  autoSlide: PropTypes.bool,
  cardAlign: PropTypes.bool,
}

Carousel.defaultProps = {
  duration: 3500,
  bullet: false,
  controls: false,
  slideWidth: 100,
  autoSlide: true,
  cardAlign: false,
}