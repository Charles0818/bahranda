import React from 'react';
import { utils } from '../../../helpers';
const { formatting: { formatCurrency } } = utils;
const Activity = ({ activities }) => {
  return (
    <section className="slim-border-2 padding-horizontal-md bg-white activity">
      <h2 className="font-weight-500 font-style-normal font-lg slim-border-bottom padding-vertical-sm margin-bottom-md">Activity</h2>
      <div className="sort margin-bottom-md d-flex justify-content-end">
        <button className="btn btn-transparent padding-md font-md color1">Sort: Most Recent</button>
      </div>
      <div className="d-flex headings slim-border-bottom padding-vertical-sm">
        <h3 className="font-weight-500 font-style-normal font-sm margin-right-sm remark">REMARK</h3>
        <div className="d-flex justify-content-center">
          <h3 className="font-weight-500 font-style-normal font-sm margin-right-sm">DATE</h3>
        </div>
        <div className="d-flex justify-content-end">
          <h3 className="font-weight-500 font-style-normal font-sm margin-right-sm" >STATUS</h3>
        </div>
      </div>
      {activities.map(activity => <ActivityRow activity={activity} key={activity.id} />)}
    </section>
  )
}

const ActivityRow = ({ activity }) => {
  const { created_at, remark, status } = activity;
  return (
    <div className="d-flex data-row slim-border-bottom padding-vertical-sm">
      <span className="font-weight-500 font-style-normal font-sm margin-right-sm remark">{remark}</span>
      <div className="d-flex justify-content-center">
        <span className="font-weight-500 font-style-normal font-sm margin-right-sm">{formatCurrency(created_at)}</span>
      </div>
      <div className="d-flex justify-content-end">
        <span className={`font-weight-500 font-style-normal font-sm margin-right-sm  ${status === 'completed' ? 'color1' : 'danger-text'}`}>{status}</span>
      </div>
    </div>
  )
}

export default Activity;
