import React from 'react';

const Activity = () => {
  return (
    <section className="slim-border-2 padding-horizontal-md margin-bottom-md bg-white activity">
              <h2 className="font-weight-bold font-style-normal font-lg slim-border-bottom padding-vertical-sm">Activity</h2>
          <div className="sort margin-top-md"><button className="btn btn-transparent padding-md font-lg">Sort: Most Recent</button></div>
          <div className="d-flex slim-border-bottom margin-top-md padding-vertical-sm justify-content-s-between">
                <div>
                  <h2 className="font-weight-bold font-style-normal font-lg">REMARK</h2>
                </div>
                <div className="date">
                  <h2 className="font-weight-500 font-style-normal font-lg">DATE</h2>
                </div>
                <div>
                  <h2 className="font-weight-500 font-style-normal font-lg">AMOUNT</h2>
                </div>
                <div>
                  <h2 className="font-weight-500 font-style-normal font-lg" >STATUS</h2>
                </div>
              </div>
          <div className="d-flex slim-border-bottom justify-content-s-between margin-top-md padding-vertical-sm">
                <div>
                  <h2 className="font-weight-500 font-style-normal font-lg" >Invested N55000 in rice</h2>
                </div>
                <div>
                  <h2 className="font-weight-500 font-style-normal font-lg" >17, June 20</h2>
                </div>
                <div>
                  <h2 className="font-weight-500 font-style-normal font-lg" >N55000</h2>
                </div>
                <div>
                  <h2 className="font-weight-500 font-style-normal font-lg ongoing" >On going</h2>
                </div>
              </div>
          <div className="d-flex justify-content-s-between margin-top-md slim-border-bottom margin-bottom-md padding-vertical-sm">
                <div>
                  <h2 className="font-weight-500 font-style-normal font-lg" >Invested N55000 in rice</h2>
                </div>
                <div>
                  <h2 className="font-weight-500 font-style-normal font-lg" >1, June 20</h2>
                </div>
                <div>
                  <h2 className="font-weight-500 font-style-normal font-lg" >N55000</h2>
                </div>
                <div>
                  <h2 className="font-weight-500 font-style-normal font-lg end" >Ended</h2>
                </div>
              </div>
    </section>
  )
}

export default Activity;
