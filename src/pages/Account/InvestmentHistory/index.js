import React from 'react';
// import {  } from '../components';
const InvestmentHistory = () => {
  return (
    <section className="">
      <h1 className="padding-bottom-md margin-top-md font-xlg font-weight-bold">Investment History</h1>
    </section>
  )
}

const Investment = () => {
  return (
    <div className="investment d-flex padding-md margin-bottom-sm bg-white slim-border-2 bg-white ">
      <img src="" alt="commodity thumbnail" className="thumbnail margin-right-md" />
      <div className="details d-flex column">
        <h3 className="font-md font-weight-600">Soyabeans</h3>
        <span className="font-xsm color-gray">grain</span>
      </div>
    </div>
  )
}

export default InvestmentHistory;