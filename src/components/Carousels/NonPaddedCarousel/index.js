import React, { useState, useEffect } from 'react';
import PropTypes from  'prop-types';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import { useSwipeable } from 'react-swipeable';
import '../carousel.scss';
import useSlide from '../useSlide';

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
export default Carousel;