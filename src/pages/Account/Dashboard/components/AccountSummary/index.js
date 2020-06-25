import React from 'react';

const AccountSummary = () => {
  return (
    <section className="slim-border-2 padding-horizontal-md margin-bottom-md bg-white summary">
      <h2 className="font-weight-500 font-style-normal font-lg slim-border-bottom padding-vertical-sm">Account Summary</h2>
      <div className="d-flex padding-vertical-md">
        <div className="d-flex column flex-center padding-horizontal-md slim-border-right statement">
          <p className="font-lg font-weight-500 uppercase">N130,000</p>
          <span className="uppercase font-sm font-weight-300">Total investment</span>
        </div>
        <div className="d-flex column flex-center padding-horizontal-md slim-border-right statement">
          <p className="font-lg font-weight-500 uppercase">N130,000</p>
          <span className="uppercase font-sm font-weight-300">active investment</span>
        </div>
        <div className="d-flex column flex-center padding-horizontal-md statement">
          <p className="font-lg font-weight-500 uppercase">N130,000</p>
          <span className="uppercase font-sm font-weight-300">withdrawn</span>
        </div>
      </div>
    </section>
  )
}

export default AccountSummary;
