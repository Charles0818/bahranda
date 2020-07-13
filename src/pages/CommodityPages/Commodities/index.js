import React, { memo } from 'react';
import { Cards } from '../../components';
import tomatoes from '../../../assets/tomatoes.png';
import rice from '../../../assets/rice.png';
import soyabean from '../../../assets/soyabean.png';
const { CommodityCard } = Cards;
const Commodities = memo(() => {
  return (
    <main className="commodities d-flex justify-content-center padding-vertical-lg">
      <CommodityCard product={{thumbnail: rice, name: 'rice'}} />
      <CommodityCard product={{thumbnail: soyabean, name: 'soyabeans'}} />
      <CommodityCard product={{thumbnail: tomatoes, name: 'tomatoes'}} />
      <CommodityCard product={{thumbnail: rice, name: 'rice'}} />
      <CommodityCard product={{thumbnail: soyabean, name: 'soyabeans'}} />
      <CommodityCard product={{thumbnail: tomatoes, name: 'tomatoes'}} />
      <CommodityCard product={{thumbnail: rice, name: 'rice'}} />
      <CommodityCard product={{thumbnail: soyabean, name: 'soyabeans'}} />
      <CommodityCard product={{thumbnail: tomatoes, name: 'tomatoes'}} />
      <CommodityCard product={{thumbnail: rice, name: 'rice'}} />
      <CommodityCard product={{thumbnail: soyabean, name: 'soyabeans'}} />
      <CommodityCard product={{thumbnail: tomatoes, name: 'tomatoes'}} />
      <CommodityCard product={{thumbnail: rice, name: 'rice'}} />
      <CommodityCard product={{thumbnail: soyabean, name: 'soyabeans'}} />
      <CommodityCard product={{thumbnail: tomatoes, name: 'tomatoes'}} />
      <CommodityCard product={{thumbnail: rice, name: 'rice'}} />
      <CommodityCard product={{thumbnail: soyabean, name: 'soyabeans'}} />
      <CommodityCard product={{thumbnail: tomatoes, name: 'tomatoes'}} />
    </main>
  )
});

export default Commodities;
