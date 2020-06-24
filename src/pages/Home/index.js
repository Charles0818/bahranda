import React from 'react';
import { Carousel } from '../../components';
import { WhoWeAre } from './Components';
import { WhatWeDo } from './Components';
import './home.scss';
const Home = () => {
  return (
    <main>
      <WhatWeDo />
      <WhoWeAre />
    </main>
  )
}

export default Home;