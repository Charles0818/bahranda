import React from 'react';
import store from '../../assets/store.png';
import storeworkers from '../../assets/storeworkers.png';
const WeStore = () => {
  return (
    <section className="we-store d-flex padding-vertical-md padding-horizontal-xlg">
      <div className="flex-equal margin-right-md">
        <img src={storeworkers} alt="farmers" />
        <img src={store} alt="farmers"/>
      </div>
      <article className="flex-equal">
        <h2 className="font-xlg margin-bottom-md color-white">We Store</h2>
        <p className="text-content font-md color-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam in tempus magna. Vestibulum et arcu mollis, elementum leo eget,
          porttitor elit. Curabitur nec lorem in justo posuere molestie a quis felis.
          Quisque porta vestibulum finibus. Nullam vitae lobortis elit.
          Nullam tristique sem sed felis imperdiet convallis.
          In volutpat augue in turpis vestibulum, sit amet rutrum nisi mollis.
          Nunc vestibulum fringilla tortor, eget fermentum urna vehicula eget.
        </p>
      </article>
    </section>
  )
}

export default WeStore;
