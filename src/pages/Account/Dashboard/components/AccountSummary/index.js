import React from 'react';
import { utils } from '../../../helpers';
const { formatting: { formatCurrency } } = utils;
const AccountSummary = ({ summary }) => {
  // total_deals_amount, withdrawn, active_deals
  React.useEffect(() => {

  console.log('formatted amount', formatCurrency(5), 'account summary', summary)
  }, [summary])
  return (
    <section className="slim-border-2 padding-horizontal-md margin-bottom-md bg-white summary">
      <h2 className="font-weight-500 font-style-normal font-lg slim-border-bottom padding-vertical-sm">Account Summary</h2>
      <div className="d-flex align-items-stretch padding-vertical-md">
        <div className="d-flex column flex-center padding-horizontal-md padding-vertical-xsm margin-bottom-sm slim-border-right slim-border-bottom statement">
          <p className="font-lg font-weight-500 uppercase">N130,000</p>
          <span className="uppercase font-sm font-weight-300 text-center">Total investment</span>
        </div>
        <div className="d-flex column flex-center padding-horizontal-md padding-vertical-xsm margin-bottom-sm slim-border-right slim-border-bottom statement">
          <p className="font-lg font-weight-500 uppercase">N130,000</p>
          <span className="uppercase font-sm font-weight-300 text-center">active investment</span>
        </div>
        <div className="d-flex column flex-center padding-horizontal-md padding-vertical-xsm margin-bottom-sm slim-border-right slim-border-bottom statement">
          <p className="font-lg font-weight-500 uppercase">N130,000</p>
          <span className="uppercase font-sm font-weight-300 text-center">withdrawn</span>
        </div>
      </div>
    </section>
  )
}

export default AccountSummary;
