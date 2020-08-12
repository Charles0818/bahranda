import React from 'react';
import carrier from '../../assets/carrier.png';
import warehouse from '../../assets/warehouse.png';
import { Link } from 'react-router-dom';
const WhoWeAre = () => {
  return (
    <section className="who-we-are position-relative margin-top-lg">
      <div className="d-flex justify-content-s-between content padding-horizontal-xlg">
        <div className="images d-flex ">
          <img src={carrier} alt="display" className="margin-bottom-md" />
          <img src={warehouse} alt="dispaly" className="margin-bottom-md" />
        </div>
        <article className="padding-vertical-md about padding-horizontal-md">
          <h1 className="color-white margin-bottom-md font-xlg">Who we are</h1>
          <p className="color-white text-content margin-bottom-md">
            Bahranda is a connector that helps to warehouse and Supply
            Agricultural raw materials to the Manufacturing Sector based on demand.
            Bahranda.com is a bridge between the Agricultural and the Manufacturing
            sectors that interfaces with Aggregators in a seamless manner
          </p>
          <Link to="/how-we-work" className="btn-color1 ripple color-white">Learn more</Link>
        </article>
      </div>
    </section>
  )
}

export default WhoWeAre;
