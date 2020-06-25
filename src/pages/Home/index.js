import React from 'react';
import { PageWrapper } from '../components'
import { WhoWeAre } from './Components';
import { WhatWeDo } from './Components';
import './home.scss';
const Home = () => {
  return (
    <PageWrapper>
      <main>
        <WhatWeDo />
        <WhoWeAre />
      </main>
    </PageWrapper>
  )
}

export default Home;