import React from 'react';
import { PageWrapper, Cards, Carousels } from '../components'
import { WhoWeAre, WhatWeDo, HeaderSlides } from './Components';
import './home.scss';
import tomatoe from '../../assets/tomatoes.png';
import soyabeans from '../../assets/soyabean.png';
import rice from '../../assets/rice.png';
const { TeamCard, PortraitCommodityCard } = Cards;
const { PaddedCarousel, LayerCarousel, } = Carousels;
const Home = () => {
  const team = [
    <TeamCard />,
    <TeamCard />,
    <TeamCard />,
    <TeamCard />,
    <TeamCard />,
    <TeamCard />,
    <TeamCard />
  ]
  const commodities =[
    <PortraitCommodityCard commodity={{name: 'Tomatoes', thumbnail: tomatoe}} />,
    <PortraitCommodityCard commodity={{name: 'Soyabeans', thumbnail: soyabeans}} />,
    <PortraitCommodityCard commodity={{name: 'Rice', thumbnail: rice}} />,
    <PortraitCommodityCard commodity={{name: 'Tomatoes', thumbnail: tomatoe}} />,
    <PortraitCommodityCard commodity={{name: 'Soyabeans', thumbnail: soyabeans}} />,
  ]
  return (
    <PageWrapper>
      <main>
        <HeaderSlides />
        <WhatWeDo />
        <WhoWeAre />
        {/* <div className="padding-horizontal-md padding-vertical-md margin-bottom-md">
          <h3 className="font-xlg text-center font-weight-normal margin-bottom-md capitalize">commodities</h3>
          <LayerCarousel slides={commodities} cardAlign={true} autoSlide={false} />
        </div>
        <div className="bg-gray padding-horizontal-md padding-vertical-md">
          <h3 className="font-xlg text-center font-weight-normal margin-bottom-md">Our Team</h3>
          <PaddedCarousel slides={team} cardAlign={true} autoSlide={false} />
        </div> */}
      </main>
    </PageWrapper>
  )
}

export default Home;
