import React from 'react';
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
        <img src={"https://res.cloudinary.com/bahranda/image/upload/v1598105476/Bahranda%20Assets/mansquat_yfmzuf.png"} alt="farmers" />
        <img src={"https://res.cloudinary.com/bahranda/image/upload/v1598105486/Bahranda%20Assets/lady_invyfb.png"} alt="farmers" />
      </div>
    </section>
  )
}

export default WeBuy;
