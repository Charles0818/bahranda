import React, { memo } from 'react';
import { Cards } from '../../components';
import tomatoes from '../../../assets/tomatoes.png';
import rice from '../../../assets/rice.png';
import soyabean from '../../../assets/soyabean.png';
const { ProductCard } = Cards;
const Products = memo(() => {
  return (
    <main className="d-flex padding-horizontal-xlg padding-vertical-lg">
      <ProductCard product={{thumbnail: rice, name: 'rice'}} />
      <ProductCard product={{thumbnail: soyabean, name: 'soyabeans'}} />
      <ProductCard product={{thumbnail: tomatoes, name: 'tomatoes'}} />
      <ProductCard product={{thumbnail: rice, name: 'rice'}} />
      <ProductCard product={{thumbnail: soyabean, name: 'soyabeans'}} />
      <ProductCard product={{thumbnail: tomatoes, name: 'tomatoes'}} />
      <ProductCard product={{thumbnail: rice, name: 'rice'}} />
      <ProductCard product={{thumbnail: soyabean, name: 'soyabeans'}} />
      <ProductCard product={{thumbnail: tomatoes, name: 'tomatoes'}} />
      <ProductCard product={{thumbnail: rice, name: 'rice'}} />
      <ProductCard product={{thumbnail: soyabean, name: 'soyabeans'}} />
      <ProductCard product={{thumbnail: tomatoes, name: 'tomatoes'}} />
      <ProductCard product={{thumbnail: rice, name: 'rice'}} />
      <ProductCard product={{thumbnail: soyabean, name: 'soyabeans'}} />
      <ProductCard product={{thumbnail: tomatoes, name: 'tomatoes'}} />
      <ProductCard product={{thumbnail: rice, name: 'rice'}} />
      <ProductCard product={{thumbnail: soyabean, name: 'soyabeans'}} />
      <ProductCard product={{thumbnail: tomatoes, name: 'tomatoes'}} />
    </main>
  )
});

export default Products;
