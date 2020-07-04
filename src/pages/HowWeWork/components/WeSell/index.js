import React from 'react';
import soyabean from '../../../../assets/soyabean.png';
import rice from '../../../../assets/rice.png';
const WeSell = () => {
  return (
    <section className="d-flex padding-vertical-md padding-horizontal-xlg">
      <article className="flex-equal margin-right-md">
        <h2 className="font-xlg margin-bottom-md">We Buy</h2>
        <p className="text-content font-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam in tempus magna. Vestibulum et arcu mollis, elementum leo eget,
          porttitor elit. Curabitur nec lorem in justo posuere molestie a quis felis.
          Quisque porta vestibulum finibus. Nullam vitae lobortis elit.
          Nullam tristique sem sed felis imperdiet convallis.
          In volutpat augue in turpis vestibulum, sit amet rutrum nisi mollis.
          Nunc vestibulum fringilla tortor, eget fermentum urna vehicula eget.
        </p>
      </article>
      <div className="flex-equal">
        <img src={rice} alt="farmers" />
        <img src={soyabean} alt="farmers" />
      </div>
    </section>
  )
}

export default WeSell;
