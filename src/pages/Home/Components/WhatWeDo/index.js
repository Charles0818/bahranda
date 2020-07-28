import React from "react";
import webuy from "../../assets/webuy.png";
import westore from "../../assets/westore.png";
import wesell from "../../assets/wesell.png";
import { Animation } from '../../../components';
const { ScrollToTop } = Animation;
const WhatWeDo = () => {
  return (
    <section className="What-we-do padding-horizontal-xlg">
      <h1 className="font-xlg font-weight-normal text-center margin-bottom-md">What we do</h1>
      <div className="d-flex flex-container flex-center">
        <ScrollToTop duration={.1}  threshold={.1}>
          <div className="sub-div margin-right-md margin-bottom-md padding-vertical-md border-r-10 bg-white">
            <div className="d-flex justify-content-s-between column align-items-center padding-horizontal-md">
              <img src={webuy} alt="svg icon" className="margin-bottom-md" />
              <h2 className="capitalize margin-bottom-md">We Buy</h2>
              <p className="text-center">
                Bahranda partners with various Small Holder Farmer Groups as well as
                Mid-Size and large farms to purchase only quality raw materials that meet requirements of
                Processors/Manufacturers
              </p>
            </div>
          </div>
        </ScrollToTop>
        <ScrollToTop duration={.1}  threshold={.1}>
          <div className="bg-color1 sub-div margin-right-md margin-bottom-md padding-vertical-md border-r-10">
            <div className="d-flex justify-content-s-between column align-items-center padding-horizontal-md">
              <img src={westore} alt="svg icon" className="margin-bottom-md" />
              <h2 className="capitalize margin-bottom-md color-white">We Store</h2>
              <p className="text-center color-white">
                The Storage of purchased raw materials is key to the Bahranda strategy aimed at providing
                value for dealers. Due to Nigeria’s seasonal approach to Farming, prices tend to increase as we
                move away from the harvest season. Therefore, timely storage helps to accrue value to the
                dealer due to price increases while Bahranda measures the Manufacturers needs in terms of
                Price Point at every demand cycle.
              </p>
            </div>
          </div>
        </ScrollToTop>
        <ScrollToTop duration={.1}  threshold={.1}>
          <div className="sub-div margin-bottom-md padding-vertical-md border-r-10 bg-white">
            <div className="d-flex justify-content-s-between column align-items-center padding-horizontal-md">
              <img src={wesell} className="margin-left-md" alt="svg icon" className="margin-bottom-md" />
              <h2 className="capitalize margin-bottom-md">we sell</h2>
              <p className="text-center">
                Since Manufacturers cannot purchase all the necessary raw materials they need all the year
                round at the beginning of the harvest season, Bahranda provides a method that evens out their
                timely demand with timely supply.
                Thus, the Sourcing, Psychological and Logistics challenges that come along with the
                Manufacturer supply chain is mitigated by the Bahranda model. We sell the right quantity and
                quality at the best rate.
              </p>
            </div>
          </div>
        </ScrollToTop>
      </div>
    </section>
  )
}

export default WhatWeDo;