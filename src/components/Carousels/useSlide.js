import { useState } from 'react';
import './carousel.scss';
const useSlide = (length, slideWidth) => {
  const [distance, setDistance] = useState(0);
  console.log(distance)
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

export default useSlide;
