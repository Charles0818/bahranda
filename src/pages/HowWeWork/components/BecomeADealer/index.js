import React from 'react';
import event from '../../assets/event.png';
const BecomeADealer  = () => {
  return (
    <section className="become-a-dealer padding-vertical-md padding-horizontal-xlg">
      <h2 className=" margin-bottom-md text-center">How to become a dealer</h2>
      <div className="step d-flex  margin-bottom-md">
        <img src={event} alt="event" className="margin-right-md" />
        <article className="step-1">
          <p className="text-content font-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam in tempus magna. Vestibulum et arcu mollis, elementum leo eget, 
            porttitor elit. Curabitur nec lorem in justo 
          </p>
        </article>
      </div>
      <div className="step d-flex margin-bottom-md">
        <article className="step-2 margin-right-md">
          <p className="text-content font-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam in tempus magna. Vestibulum et arcu mollis, elementum leo eget,
            porttitor elit. Curabitur nec lorem in justo posuere molestie a quis felis. 
            Quisque porta vestibulum finibus. Nullam vitae lobortis elit. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nullam in tempus magna. Vestibulum et arcu mollis, elementum leo eget,
            porttitor elit. Curabitur nec lorem in justo posuere molestie a quis felis. 
            Quisque porta vestibulum finibus. Nullam vitae lobortis elit. 
          </p>
        </article>
        <img src={event} alt="event"  />
      </div>
      <div className="step d-flex margin-bottom-md">
        <img src={event} alt="event" className="margin-right-md" />
        <article className="step-1">
          <p className="text-content font-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam in tempus magna. Vestibulum et arcu mollis, elementum leo eget, 
            porttitor elit. Curabitur nec lorem in justo 
          </p>
        </article>
      </div>
    </section>
  )
}

export default BecomeADealer;