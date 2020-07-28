import React from 'react';
import { utils } from '../../../helpers';
import { EmptyDataRender, Animation, SectionTitle } from '../../../components';
const { ScrollToBottom, FadeInLeft, FadeIn } = Animation
const { formatting: { formatCurrency } } = utils;
const Activity = ({ activities }) => {
  return (
    <ScrollToBottom duration={.2} repeat={false} threshold={0}>
      <section className="slim-border-2 padding-horizontal-md bg-white activity">
        <SectionTitle title="Activity" />
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
        {activities.length === 0
          ? <EmptyDataRender message="You do not have any activity" />
          : activities.map(activity => <FadeIn key={activity.id}><ActivityRow activity={activity} /></FadeIn>)
        }
      </section>
      </ScrollToBottom>
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
