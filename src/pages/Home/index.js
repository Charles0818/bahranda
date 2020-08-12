import React from 'react';
import { PageWrapper, Cards, Carousels } from '../components'
import { WhoWeAre, WhatWeDo, HeaderSlides, TeamSlider, LatestCommodities } from './Components';
import './home.scss';
import tomatoe from '../../assets/tomatoes.png';
import soyabeans from '../../assets/soyabean.png';
import rice from '../../assets/rice.png';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
const { PortraitCommodityCard } = Cards;
const { PaddedCarousel, Carousel, } = Carousels;
const Home = ({ token }) => {
  // const commodities = [
  //   <PortraitCommodityCard commodity={{name: 'Tomatoes', thumbnail: tomatoe}} />,
  //   <PortraitCommodityCard commodity={{name: 'Soyabeans', thumbnail: soyabeans}} />,
  //   <PortraitCommodityCard commodity={{name: 'Rice', thumbnail: rice}} />,
  //   <PortraitCommodityCard commodity={{name: 'Tomatoes', thumbnail: tomatoe}} />,
  //   <PortraitCommodityCard commodity={{name: 'Soyabeans', thumbnail: soyabeans}} />,
  // ]
  if(token) return <Redirect to="/account" />
  return (
    <PageWrapper>
      <main>
        <HeaderSlides />
        <WhatWeDo />
        <WhoWeAre />
        {/* <div className="padding-horizontal-sm padding-vertical-md margin-bottom-md">
          <h3 className="font-xlg text-center font-weight-normal margin-bottom-md capitalize">commodities</h3>
          <PaddedCarousel slides={commodities} cardAlign={true} autoSlide={false} />
        </div> */}
        <TeamSlider />
      </main>
    </PageWrapper>
  )
}

const mapStateToProps = state => {
  const { token } = state.authReducer;
  return { token }
}
export default connect(mapStateToProps, null)(Home);
