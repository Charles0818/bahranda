import React from 'react';
import { Cards, Carousel } from '../../components';
import thumbnail from '../../../assets/soyabean.png';
import tomatoes from '../../../assets/tomatoes.png';
import rice from '../../../assets/rice.png';
import soyabean from '../../../assets/soyabean.png';
const { ProductCard } = Cards;
const ProductDetails = () => {
  const slides = [
    <img src={thumbnail} alt="product thumbnail" />,
    <img src={thumbnail} alt="product thumbnail" />,
    <img src={thumbnail} alt="product thumbnail" />
  ];

  const relatedProducts = [
    <ProductCard product={{thumbnail: rice, name: 'rice'}} />,
    <ProductCard product={{thumbnail: soyabean, name: 'soyabeans'}} />,
    <ProductCard product={{thumbnail: tomatoes, name: 'tomatoes'}} />,
    <ProductCard product={{thumbnail: rice, name: 'rice'}} />,
    <ProductCard product={{thumbnail: soyabean, name: 'soyabeans'}} />,
    <ProductCard product={{thumbnail: tomatoes, name: 'tomatoes'}} />
  ]
  return (
    <article className="d-flex column">
      <h1 className="font-lg">Product Details</h1>
      <div className="d-flex thumbnail-details margin-bottom-md">
        <div className="thumbnail-slider">
          <Carousel autoSlide={false} slides={slides} dimensions={{width: '100%', height: 'auto'}} />
        </div>
        <section className="details">
        
        </section>
      </div>
      <main className="product-details">
        <div className="d-flex">
          <button className="btn bg-white details font-md">DETAILS</button>
          <button className="btn margin-left-sm review font-md">REVIEWS</button>
        </div>
        <button className="bg-white white"></button>
        <div className="bg-white slim-border product-info">
          <p className="font-lg text-align-center padding-horizontal-xlg padding-vertical-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum sem non fermentum interdum. Vivamus sit amet iaculis nibh, vel commodo leo. Vestibulum id tristique enim. Suspendisse quis augue vel odio vehicula euismod. Nulla convallis luctus odio, non malesuada velit gravida vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin convallis elit vitae lacus euismod venenatis. Vivamus varius rutrum justo, a laoreet lorem luctus vel. Suspendisse pellentesque velit et odio accumsan commodo non sed lacus. Praesent non aliquam velit, pretium placerat ligula. Nam vehicula massa lectus, non sodales tellus posuere sed. Maecenas ut dictum justo. Nullam in placerat metus, ut porta diam. Mauris molestie tellus urna, ac imperdiet dui blandit et. Etiam fringilla et nisi malesuada efficitur. Fusce molestie ipsum non condimentum tempor.</p></div>
          <div className='Related-products padding-vertical-lg'>
            <h4 className="font-lg margin-bottom-sm">Related Products</h4>
            <div className="d-flex">
            <Carousel autoSlide={false} cardAlign={true} slides={relatedProducts} />
           
            </div>
            <div className="view-wrapper"><button className="btn view font-lg">VIEW ALL</button>
          </div>
        </div>
      </main>
    </article>
  )
}

export default ProductDetails;
