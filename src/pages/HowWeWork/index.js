import React from 'react';
import { BahrandaModel, WeBuy, WeSell, WeStore, FAQ } from './components';
import { PageWrapper } from '../components';
const HowWeWork = () => {
  return (
    <PageWrapper>
      <div className="how-we-work">
        <BahrandaModel />
        <WeBuy />
        <WeSell />
        <WeStore />
        <FAQ />
      </div>
    </PageWrapper>
  )
}

export default HowWeWork