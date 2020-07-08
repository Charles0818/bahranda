import React from 'react';
import { BahrandaModel, WeBuy, WeSell, WeStore, FAQ, BecomeADealer } from './components';
import { PageWrapper } from '../components';
const HowWeWork = () => {
  return (
    <PageWrapper>
      <div className="how-we-work">
        <header className="margin-bottom-md">
          <div className="bg-dark-opacity d-flex align-items-center padding-left-xlg">
            <h1 className="color-white font-xlg">How we work</h1>
          </div>
        </header>
        <BecomeADealer />
        <BahrandaModel />
        <WeBuy />
        <WeStore />
        <WeSell />
        <FAQ />
      </div>
    </PageWrapper>
  )
}

export default HowWeWork