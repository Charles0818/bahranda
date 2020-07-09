import React from 'react';

const Activity = () => {
  return (
    <section className="slim-border-2 padding-horizontal-md bg-white activity">
      <h2 className="font-weight-500 font-style-normal font-lg slim-border-bottom padding-vertical-sm margin-bottom-md">Activity</h2>
      <div className="sort margin-bottom-md d-flex justify-content-end">
        <button className="btn btn-transparent padding-md font-md color1">Sort: Most Recent</button>
      </div>
      <div className="d-flex headings slim-border-bottom padding-vertical-sm">
        <h3 className="font-weight-500 font-style-normal font-md margin-right-sm remark">REMARK</h3>
        <div className="d-flex justify-content-center">
          <h3 className="font-weight-500 font-style-normal font-md margin-right-sm">DATE</h3>
        </div>
        <div className="d-flex justify-content-center">
          <h3 className="font-weight-500 font-style-normal font-md margin-right-sm">AMOUNT</h3>
        </div>
        <div className="d-flex justify-content-end">
          <h3 className="font-weight-500 font-style-normal font-md margin-right-sm" >STATUS</h3>
        </div>
      </div>
      <ActivityRow amount={55000} product="rice" date="17, June 20" active={true} />
      <ActivityRow amount={55000} product="soyabean" date="17, June 20" active={false} />
      <ActivityRow amount={55000} product="rice" date="17, June 20" active={true} />
      <ActivityRow amount={55000} product="soyabean" date="17, June 20" active={false} />
      <ActivityRow amount={55000} product="rice" date="17, June 20" active={true} />
      <ActivityRow amount={55000} product="soyabean" date="17, June 20" active={false} />
      <ActivityRow amount={55000} product="rice" date="17, June 20" active={true} />
      <ActivityRow amount={55000} product="soyabean" date="17, June 20" active={false} />
    </section>
  )
}

const ActivityRow = ({ amount, product, date, active }) => {
  return (
    <div className="d-flex data-row slim-border-bottom padding-vertical-sm">
      <span className="font-weight-500 font-style-normal font-md margin-right-sm remark">Invested {amount} in {product}</span>
      <div className="d-flex justify-content-center">
        <span className="font-weight-500 font-style-normal font-md margin-right-sm">{date}</span>
      </div>
      <div className="d-flex justify-content-center">
        <span className="font-weight-500 font-style-normal font-md margin-right-sm">{amount}</span>
      </div>
      <div className="d-flex justify-content-end">
        <span className={`font-weight-500 font-style-normal font-md margin-right-sm  ${active ? 'color1' : 'danger-text'}`}>{active ? 'ongoing' : 'ended'}</span>
      </div>
    </div>
  )
}

export default Activity;
