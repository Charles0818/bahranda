import React from 'react';
import { PageWrapper } from '../components'
import { WhoWeAre } from './Components';
import './home.scss';
const Home = () => {
  return (
    <PageWrapper>
      <main>
        <WhoWeAre />
      </main>
    </PageWrapper>
  )
}

export default Home;