import React from 'react';
import event from '../../assets/event.png';
import purchase from '../../assets/purchase.png'
import register from '../../assets/register.png'
import sell from '../../assets/sell.png'


const BecomeADealer  = () => {
  return (
    <section className="become-a-dealer padding-vertical-md padding-horizontal-xlg">
      <h2 className=" margin-bottom-sm text-center font-lg">How to become a dealer</h2>
      <p className="margin-bottom-md font-weight-600 font-md text-center">
        Keeping it simple, straightforward and clear is the way of Bahranda. We&#39;d be glad to have you
        partner with us in these few steps
      </p>
      <div className="d-flex">
        <div className="step d-flex column flex-equal align-items-center margin-bottom-md margin-right-md">
          <img src={register} alt="register" className="margin-right-md margin-bottom-md" />
          <article className="margin-bottom-md">
            <p className="text-content font-md">
            Register and create a dealership account and enjoy the benefits of free notifications on
            the arrival and availability of new commodities needed by manufacturers
            </p>
          </article>
        </div>
        <div className="step d-flex column flex-equal align-items-center margin-bottom-md margin-right-md">
    
          <img src={purchase} alt="purchase" className="margin-right-md margin-bottom-md" />
          <article className=" margin-right-md margin-bottom-md">
            <p className="text-content font-md">
            Purchase commodity (in bags) with as little as #100,000 and it gets warehoused by a
            third-party agent under the control of Bahranda
            </p>
          </article>
        </div>
        <div className="step d-flex column flex-equal align-items-center margin-bottom-md">
          <img src={sell} alt="sell" className="margin-right-md margin-bottom-md" />
          <article className="step-1">
            <p className="text-content font-md">
              Sell and make profit once that Target market price is reached.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default BecomeADealer;