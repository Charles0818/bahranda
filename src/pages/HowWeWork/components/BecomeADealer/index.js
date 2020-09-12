import React from 'react';
const BecomeADealer = () => {
  return (
    <section className="become-a-dealer padding-vertical-md padding-horizontal-xlg">
      <h2 className=" margin-bottom-sm text-center font-lg">How to become a dealer</h2>
      <p className="margin-bottom-md font-md text-center">
        Keeping it simple, straightforward and clear is the way of Bahranda. We&#39;d be glad to have you
        partner with us in these few steps:
      </p>
      <div className="d-flex">
        <div className="step d-flex column flex-equal align-items-center margin-bottom-md margin-right-md">
          <img src={"https://res.cloudinary.com/bahranda/image/upload/v1598105481/Bahranda%20Assets/register_p6ixad.svg"} alt="register" className="margin-right-md margin-bottom-md" />
          <article className="margin-bottom-md">
            <p className="text-content font-md">
              <span className="font-weight-bold">Register and create a dealership account </span> 
               and enjoy the benefits of free notifications on
              the arrival and availability of new commodities needed by manufacturers.
            </p>
          </article>
        </div>
        <div className="step d-flex column flex-equal align-items-center margin-bottom-md margin-right-md">
          <img src={"https://res.cloudinary.com/bahranda/image/upload/v1598105473/Bahranda%20Assets/purchase_y3utrb.svg"} alt="purchase" className="margin-right-md margin-bottom-md" />
          <article className="margin-right-md margin-bottom-md">
            <p className="text-content font-md"> <span className="font-weight-bold">
            Purchase commodity (in bags) </span> with as low as #14,000 and it gets warehoused by a
            third-party agent under the control of Bahranda.
            </p>
          </article>
        </div>
        <div className="step d-flex column flex-equal align-items-center margin-bottom-md">
          <img src={"https://res.cloudinary.com/bahranda/image/upload/v1598105471/Bahranda%20Assets/sell_kpqrza.svg"} alt="sell" className="margin-right-md margin-bottom-md" />
          <article className="margin-top-sm">
            <p className="text-content font-md">
             <span className="font-weight-bold">Sell and make profit </span> once that target market price is reached.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default BecomeADealer;