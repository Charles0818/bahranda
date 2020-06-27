import React from 'react';
import { Cards, Carousel } from '../../components';
import thumbnail from '../../../assets/soyabean.png';
const ProductDetails = () => {
  const slides = [
    <img src={thumbnail} alt="product thumbnail" />,
    <img src={thumbnail} alt="product thumbnail" />,
    <img src={thumbnail} alt="product thumbnail" />
  ]
  return (
    <article className="d-flex column">
      <h1 className="font-lg">Product Details</h1>
      <div className="d-flex thumbnail-details margin-bottom-md">
        <div className="thumbnail-slider">
          <Carousel slides={slides} dimensions={{width: '100%', height: 'auto'}} />
        </div>
        <section className="details">
        
        </section>
      </div>
    </article>
  )
}

export default ProductDetails;
