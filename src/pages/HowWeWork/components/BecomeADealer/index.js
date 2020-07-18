import React from 'react';
import event from '../../assets/event.png';
const BecomeADealer  = () => {
  return (
    <section className="become-a-dealer padding-vertical-md padding-horizontal-xlg">
      <h2 className=" margin-bottom-sm text-center font-lg">How to become a dealer</h2>
      <p className="margin-bottom-md font-weight-600 font-md text-center">Keeping it simple, straightforward and clear is the way of Bahranda. We&#39;d be glad to have you
          partner with us in these few steps</p>
      <div className="step d-flex  margin-bottom-md">
        <img src={event} alt="event" className="margin-right-md margin-bottom-md" />
        <article className="margin-bottom-md">
          <p className="text-content font-md">
          Register and create a dealership account and enjoy the benefits of free notifications on
          the arrival and availability of new commodities needed by manufacturers
          </p>
        </article>
      </div>
      <div className="step d-flex margin-bottom-md">
        <article className=" margin-right-md margin-bottom-md">
          <p className="text-content font-md">
          Purchase commodity (in bags) with as little as #100,000 and it gets warehoused by a
          third-party agent under the control of Bahranda
          </p>
        </article>
        <img src={event} alt="event" className="margin-right-md margin-bottom-md" />
      </div>
      <div className="step d-flex margin-bottom-md">
        <img src={event} alt="event" className="margin-right-md margin-bottom-md" />
        <article className="step-1">
          <p className="text-content font-md">
            Sell and make profit once that Target market price is reached.
          </p>
        </article>
      </div>
    </section>
  )
}

export default BecomeADealer;