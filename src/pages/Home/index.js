import React from 'react';
import { PageWrapper, Cards, Carousels } from '../components'
import { WhoWeAre, WhatWeDo, HeaderSlides } from './Components';
import './home.scss';

const { TeamCard } = Cards;
const { PaddedCarousel } = Carousels;
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
  return (
    <PageWrapper>
      <main>
        <HeaderSlides />
        <WhatWeDo />
        {/* <WhoWeAre /> */}
        <div className="bg-gray bg-color1 padding-horizontal-md padding-vertical-md">
          <h3 className="font-xlg text-center font-weight-normal margin-bottom-md">Our Team</h3>
          <PaddedCarousel slides={team} cardAlign={true} autoSlide={false} />
        </div>
      </main>
    </PageWrapper>
  )
}

export default Home;
