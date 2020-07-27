import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';
import { actions, utils } from '../../helpers';
import { Spinners, EmptyDataRender, Animation, SectionTitle } from '../../components';
const { SectionSpinner } = Spinners;
const { dealActions: { getDealsRequest } } = actions;
const { formatting: { formatCurrency, formatDate } } = utils;
const { ScrollToBottom } = Animation;
const Deals = ({
  getDealsRequest, token, deals, active_deals, cancelled_deals,
  closed_deals, total_investment, total_profit, completed_deals,
  loading
}) => {
  useLayoutEffect(() => {
   if(deals.length === 0) getDealsRequest(token)
  }, [deals.length])
  if(loading) return  <SectionSpinner isLoading={loading} />
  return (
    <div className="overflow-h">
      <DealStatus
        statuses={{
          active_deals, cancelled_deals,
          closed_deals, total_investment,
          total_profit, completed_deals
        }}
      />
      <ScrollToBottom duration={.2} repeat={false} threshold={.2}>
        <section className="overflow-h slim-border-2 padding-horizontal-md bg-white activity">
          <SectionTitle title="Deals" />
          <div className="sort margin-bottom-md d-flex justify-content-end">
            <button className="btn btn-transparent padding-md font-md color1">Sort: Most Recent</button>
          </div>
          <div style={{overflowX: 'auto'}}>
            <table>
              <thead>
                <tr className="slim-border-bottom">
                  <th className="font-weight-500 font-style-normal font-sm margin-right-sm">COMMODITY</th>
                  <th className="font-weight-500 font-style-normal font-sm margin-right-sm">QTY</th>
                  <th className="font-weight-500 font-style-normal font-sm margin-right-sm">DUR.</th>
                  <th className="font-weight-500 font-style-normal font-sm margin-right-sm hide-sm">START</th>
                  <th className="font-weight-500 font-style-normal font-sm margin-right-sm hide-sm">END</th>
                  <th className="font-weight-500 font-style-normal font-sm margin-right-sm">STATUS</th>
                </tr>
              </thead>
              <tbody>
                {deals.length === 0
                  ? <EmptyDataRender message="You have no Deal history" />
                  : deals.map(deal => <Deal deal={deal} key={deal.id} />)
                }
              </tbody>
            </table>
          </div>
        </section>
      </ScrollToBottom>
    </div>
  )
}

const Deal = ({ deal }) => {
  const { push } = useHistory()
  const { 
    commodity: { commodity_name }, duration, status, deal_start_date, deal_end_date, quantity, id
  } = deal;
  return (
    <tr onClick={() => push(`/account/deals/${id}`)} className="cursor-pointer" >
      <td className="font-weight-500 font-style-normal font-sm margin-right-sm">{commodity_name}</td>
      <td className="font-weight-500 font-style-normal font-sm margin-right-sm">{quantity}</td>
      <td className="font-weight-500 font-style-normal font-sm margin-right-sm">{duration}</td>
      <td className="font-weight-500 font-style-normal font-sm margin-right-sm hide-sm">{formatDate(deal_start_date)}</td>
      <td className="font-weight-500 font-style-normal font-sm margin-right-sm hide-sm">{formatDate(deal_end_date)}</td>
      <td className={`font-weight-600 font-style-normal font-sm margin-right-sm capitalize`}>
        <div className={`padding-xsm border-r-10 ${status === 'on-going' ? 'bg-color1-opacity' : 'bg-danger-opacity'}`}>
          <span className={`${status === 'on-going' ? 'color1' : 'danger-text'}`}>{status === 'on-going' ? 'active' : status}</span>
        </div>
      </td>
    </tr>
  )
}

const DealStatus = ({ statuses }) => {
  const {
    active_deals, cancelled_deals,
    closed_deals, total_investment,
    total_profit, completed_deals,
  } = statuses;
  return (
    <ScrollToBottom repeat={false} duration={.2} threshold={.1}>
      <section className="overflow-h slim-border-2 padding-horizontal-md margin-bottom-md bg-white summary">
        <SectionTitle title="Deal Statistics" />
        <div className="d-flex align-items-stretch padding-vertical-md">
          <div className="d-flex column flex-center padding-horizontal-md padding-vertical-xsm margin-bottom-sm slim-border-right slim-border-bottom statement">
            <p className="font-lg font-weight-500 uppercase">{formatCurrency(total_investment)}</p>
            <span className="uppercase font-sm font-weight-300 text-center">Total investments</span>
          </div>
          <div className="d-flex column flex-center padding-horizontal-md padding-vertical-xsm margin-bottom-sm slim-border-right slim-border-bottom statement">
            <p className="font-lg font-weight-500 uppercase">{formatCurrency(total_profit)}</p>
            <span className="uppercase font-sm font-weight-300 text-center">Total Profit</span>
          </div>
          <div className="d-flex column flex-center padding-horizontal-md padding-vertical-xsm margin-bottom-sm slim-border-right slim-border-bottom statement">
            <p className="font-lg font-weight-500 uppercase">{completed_deals}</p>
            <span className="uppercase font-sm font-weight-300 text-center">completed</span>
          </div>
          <div className="d-flex column flex-center padding-horizontal-md padding-vertical-xsm margin-bottom-sm slim-border-right slim-border-bottom statement">
            <p className="font-lg font-weight-500 uppercase color1">{parseInt(active_deals, 10)}</p>
            <span className="uppercase font-sm font-weight-300 text-center">Active</span>
          </div>
          <div className="d-flex column flex-center padding-horizontal-md padding-vertical-xsm margin-bottom-sm slim-border-right slim-border-bottom statement">
            <p className="font-lg font-weight-500 uppercase danger-text">{parseInt(cancelled_deals, 10)}</p>
            <span className="uppercase font-sm font-weight-300 text-center">cancelled</span>
          </div>
          <div className="d-flex column flex-center padding-horizontal-md padding-vertical-xsm margin-bottom-sm slim-border-right slim-border-bottom statement">
            <p className="font-lg font-weight-500 uppercase danger-text">{parseInt(closed_deals, 10)}</p>
            <span className="uppercase font-sm font-weight-300 text-center">closed</span>
          </div>
        </div>
      </section>
    </ScrollToBottom>
  )
}

const mapStateToProps = state => {
  const { token } = state.authReducer;
  const {
    deals, active_deals, cancelled_deals,
    closed_deals, total_investment, total_profit,
    completed_deals,
    loadingIndicators: { getDeals: loading }
  } = state.dealReducer;
  return {
    token, deals, active_deals, cancelled_deals,
    closed_deals, total_investment, total_profit,
    completed_deals, loading
  }
}


const mapDispatchToProps = dispatch => 
  bindActionCreators({ getDealsRequest }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Deals);

