import React, { useState, useEffect } from 'react';
import PropTypes from  'prop-types';
import { FaArrowAltCircleRight,FaArrowAltCircleLeft } from 'react-icons/fa';
import { useSwipeable } from 'react-swipeable';

export const useSlide = (length, slideWidth) => {
  const [distance, setDistance] = useState(0);
  const slideLeft = () => {
    (distance === 0) ? setDistance(-slideWidth * (length - 1)) : setDistance(distance + slideWidth)
  }
  const slideRight = () => {
    (distance === -slideWidth * (length - 1)) ? setDistance(0) : setDistance(distance - slideWidth);
  }

  const bulletSlide = (index) => {
    setDistance(-slideWidth * index)
  }

  return { slideLeft, distance, slideRight, bulletSlide }
}

const Carousel = ({ slides, slideWidth, duration, autoSlide, cardAlign, dimensions: { width, height }, bullet, controls }) => {
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
      <div {...handlers} className="slider d-flex nowrap align-items--center position-relative overflow--h margin-bottom-sm" style={{width, height}}>
        { slides.map((Slide, index) => {
            return (
              <div key={index} className="slide" style={{minWidth: !cardAlign ? '100%' : 'auto', transform: `translateX(${distance}%)`}}>
                {Slide}
              </div>
            )
          }) }
        { controls && (
            <>
              <button id="slide-right" onClick={slideRight} className="border-r-circle padding-md cursor-pointer">
                <FaArrowAltCircleRight className="font-md color-white" />
              </button>
              <button id="slide-left" onClick={slideLeft} className="border-r-circle padding-sm cursor-pointer">
                <FaArrowAltCircleLeft className="font-md color-white" />
              </button>
            </>
          )}
        <div className="d-flex bullets">
        { bullet && (
          slides.map((_, index) => {
              return (
                <div key={index} onClick={() => bulletSlide(index)} className={`bullet ${index === Math.abs(distance / 100) ? 'active' : ''} margin-right-sm border-r-circle`} />
              )
            })
        )}
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