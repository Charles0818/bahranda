import React from 'react';
import mansquat from "../../assets/mansquat.png";
import lady from "../../assets/lady.png";
const WeBuy = () => {
  return (
    <section className="we-sell d-flex padding-vertical-md padding-horizontal-xlg">
      <article className="flex-equal margin-right-md padding-bottom-md">
        <h2 className="font-xlg margin-bottom-md">We Buy</h2>
        <p className="text-content font-md">
        Bahranda partners with various Small Holder Farmer Groups as well as Mid-Size and Large
        Farms to purchase only quality raw materials that meet requirements of
        Processors/Manufacturers
        </p>
      </article>
      <div className="flex-equal">
        <img src={mansquat} alt="farmers" />
        <img src={lady} alt="farmers" />
      </div>
    </section>
  )
}

export default WeBuy;
