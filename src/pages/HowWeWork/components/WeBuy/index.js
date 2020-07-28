import React from 'react';
import mansquat from "../../assets/mansquat.png";
import lady from "../../assets/lady.png";
import { Animation } from '../../../components';
const { ScrollToBottom } = Animation;
const WeBuy = () => {
  return (
    <section className="we-sell d-flex padding-vertical-md padding-horizontal-xlg">
      <article className="flex-equal margin-right-md padding-bottom-md">
        <ScrollToBottom duration={.1}>
          <h2 className="font-xlg margin-bottom-md">We Buy</h2>
        </ScrollToBottom>
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
