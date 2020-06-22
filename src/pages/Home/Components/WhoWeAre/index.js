import React from 'react';

const WhoWeAre = () => {
  return (
    <section className="who-we-are d-flex justify-content-s-between padding-horizontal-xlg">
      <div className="images d-flex column">
        <img src="../../assets/carrier.png" alt="display" className="margin-bottom-md" style={{width: '100%', height: 260}} />
        <img src="../../assets/warehouse.png" alt="dispaly" className="margin-bottom-md" />
      </div>
      <div className="padding-vertical-md about">
        <h1 className="color-white margin-bottom-md font-xlg">Who we are</h1>
        <p className="color-white text-content margin-bottom-md">
          Bahranda is a connector that helps to warehouse and Supply
          Agricultural raw materials to the Manufacturing Sector based on demand.
          Bahranda.com is a bridge between the Agricultural and the Manufacturing
          sectors that interfaces with Aggregators in a seamless manner
        </p>
        <button className="btn-color1 ripple color-white">Learn more</button>
      </div>
    </section>
  )
}

export default WhoWeAre;
