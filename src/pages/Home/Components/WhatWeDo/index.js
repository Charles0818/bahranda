import React from "react";
import webuy from "../../assets/webuy.png";
import westore from "../../assets/westore.png";
import wesell from "../../assets/wesell.png";

const WhatWeDo = () => {
  return (
    <section className="What-we-do padding-horizontal-xlg">
      <h1 className="font-xlg font-weight-normal text-center margin-bottom-md">What we do</h1>
      <div className="d-flex flex-container flex-center margin-top-md">
        <div className="sub-div margin-right-md margin-bottom-md padding-vertical-md border-r-10 bg-white">
          <div className="d-flex justify-content-s-between column align-items-center padding-horizontal-md">
            <img src={webuy} alt="svg icon" className="margin-bottom-md" />
            <h2 className="capitalize margin-bottom-md">We Buy</h2>
            <p className="text-center"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a dui laoreet, eleifend felis nec, ultricies turpis. Sed sed lacus at nibh ultrices condimentum. Proin in interdum risus. Suspendisse</p>
          </div>
        </div>
        <div className="bg-color1 sub-div margin-right-md padding-vertical-md border-r-10">
          <div className="d-flex justify-content-s-between column align-items-center padding-horizontal-md">
            <img src={westore} alt="svg icon" className="margin-bottom-md" />
            <h2 className="capitalize margin-bottom-md color-white">We Store</h2>
            <p className="text-center color-white"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a dui laoreet, eleifend felis nec, ultricies turpis. Sed sed lacus at nibh ultrices condimentum. Proin in interdum risus. Suspendisse</p>
          </div>
        </div>
        <div className="sub-div margin-bottom-md padding-vertical-md border-r-10 bg-white">
          <div className="d-flex justify-content-s-between column align-items-center padding-horizontal-md">
            <img src={wesell} className="margin-left-md" alt="svg icon" className="margin-bottom-md" />
            <h2 className="capitalize margin-bottom-md">we sell</h2>
            <p className="text-center"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a dui laoreet, eleifend felis nec, ultricies turpis. Sed sed lacus at nibh ultrices condimentum. Proin in interdum risus. Suspendisse</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo;