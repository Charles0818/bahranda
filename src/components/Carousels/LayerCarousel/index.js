import React, { useEffect, useState, useRef } from 'react';
import PropTypes from  'prop-types';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import { useSwipeable } from 'react-swipeable';
import '../carousel.scss';
import useSlide from '../useSlide';

const LayerCarousel = ({ slides, slideWidth, duration, autoSlide, cardAlign, bullet, controls }) => {
  const { slideLeft, distance, slideRight, bulletSlide } = useSlide(slides.length, slideWidth);
  const slideRef = useRef();
  const [displayingSlides, setDisplayingSlides] = useState(0)
  const containerWidth = window.outerWidth - 120;
  const handlers = useSwipeable({
    onSwipedLeft: () => slideRight(),
    onSwipedRight: () => slideLeft(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });
  const middleComponent =  slides[((slides.length - 1) / 2)]
  useEffect(() => {
    setDisplayingSlides(parseInt(containerWidth / slideRef.current.scrollWidth));
    console.log('displayingSlides', displayingSlides)
    console.log('slideRef', slideRef.current.scrollWidth, window.outerWidth);
    if(autoSlide) {
      const interval = slides.length > 1 ? setInterval(() => slideRight(), duration) : null;
      return () => clearInterval(interval)
    }
  }, [slideRef.current])
  return (
    slides.length !== 0 && (
      <div  {...handlers} className="padded-carousel padding-horizontal-xlg slider position-relative overflow-h margin-bottom-sm cursor-pointer">
        <div className="d-flex nowrap align-items-center overflow-h position-relative" style={{width: '100%'}}>
          {slides.map((Slide, index, arr) => {
            return (
              <div ref={slideRef} key={index} className="slide layer-carousel" style={{minWidth: !cardAlign ? '100%' : 'auto', transform: `translateX(${distance}%)`}}>
                {Slide}
              </div>
            )
          })}
        </div>
        { controls && (
            <>
              <button id="slide-right" onClick={slideRight} className="bg-color1-opacity border-r-circle padding-horizontal-sm padding-vertical-sm cursor-pointer">
                <MdKeyboardArrowRight className="font-lg color1" />
              </button>
              <button id="slide-left" onClick={slideLeft} className="bg-color1-opacity border-r-circle padding-horizontal-sm padding-vertical-sm cursor-pointer">
                <MdKeyboardArrowLeft className="font-lg color1" />
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

LayerCarousel.propTypes = {
  duration: PropTypes.number.isRequired,
  bullet: PropTypes.bool,
  controls: PropTypes.bool,
  slideWidth: PropTypes.number,
  autoSlide: PropTypes.bool,
  cardAlign: PropTypes.bool,
}
LayerCarousel.defaultProps = {
  duration: 3500,
  bullet: false,
  controls: true,
  slideWidth: 100,
  autoSlide: true,
  cardAlign: false,
}
export default LayerCarousel;