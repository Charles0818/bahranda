import React from 'react';

const History = () => {
  return (
    <section className="slim-border-2 padding-horizontal-md bg-white activity">
      <h2 className="font-weight-500 font-style-normal font-lg slim-border-bottom padding-vertical-sm margin-bottom-md">History</h2>
      <div className="sort margin-bottom-md d-flex justify-content-end">
        <button className="btn btn-transparent padding-md font-md color1">Sort: Most Recent</button>
      </div>
      <div className="d-flex headings slim-border-bottom padding-vertical-sm">
        <h3 className="font-weight-500 font-style-normal font-md margin-right-sm uppercase remark">description</h3>
        <div className="d-flex justify-content-center">
          <h3 className="font-weight-500 font-style-normal font-md margin-right-sm uppercase">date</h3>
        </div>
        <div className="d-flex justify-content-center">
          <h3 className="font-weight-500 font-style-normal font-md margin-right-sm uppercase">amount</h3>
        </div>
        <div className="d-flex justify-content-end">
          <h3 className="font-weight-500 font-style-normal font-md margin-right-sm uppercase" >status</h3>
        </div>
      </div>
      <HistoryRow amount={55000} desc="payout" date="17, June 20" status={'debit'} />
      <HistoryRow amount={55000} desc="recharge" date="17, June 20" status={'credit'} />
      <HistoryRow amount={55000} desc="payout" date="17, June 20" status={'debit'} />
      <HistoryRow amount={55000} desc="recharge" date="17, June 20" status={'credit'} />
      <HistoryRow amount={55000} desc="payout" date="17, June 20" status={'debit'} />
      <HistoryRow amount={55000} desc="recharge" date="17, June 20" status={'credit'} />
      <HistoryRow amount={55000} desc="payout" date="17, June 20" status={'debit'} />
      <HistoryRow amount={55000} desc="recharge" date="17, June 20" status={'credit'} />
    </section>
  )
}

const HistoryRow = ({ amount, desc, date, status }) => {
  return (
    <div className="d-flex data-row slim-border-bottom padding-vertical-sm">
      <span className="font-weight-500 font-style-normal font-md margin-right-sm remark">{desc}</span>
      <div className="d-flex justify-content-center">
        <span className="font-weight-500 font-style-normal font-md margin-right-sm">{date}</span>
      </div>
      <div className="d-flex justify-content-center">
        <span className="font-weight-500 font-style-normal font-md margin-right-sm">{amount}</span>
      </div>
      <div className="d-flex justify-content-end">
      <span className={`font-weight-500 font-style-normal font-md margin-right-sm justify-self-end ${status !== 'debit' ? 'color1' : 'danger-text'}`}>{status}</span>
      </div>
    </div>
  )
}

export default History;

