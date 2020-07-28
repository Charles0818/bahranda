import React, { memo, useEffect, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Spinners, Animation } from '../../../components';
import { actions, utils } from '../../helpers';
import EmptyDataRender from '../EmptyDataRender';
const { ScrollToBottom, FadeInLeft } = Animation;
const { walletActions: { getWalletHistoryRequest } } = actions;
const { SectionSpinner } = Spinners;
const { formatting: { formatCurrency, formatDate } } = utils;
const History = ({ getWalletHistoryRequest, token, loading, history, pageNum }) => {
  useLayoutEffect(() => {
    if(history.length === 0) getWalletHistoryRequest(pageNum, token)
  }, [token, pageNum, history.length]);
  if(loading) return <SectionSpinner isLoading={loading} />
  return (
    <ScrollToBottom repeat={false} threshold={.2} duration={.2}>
      <section className="slim-border-2 padding-horizontal-md bg-white activity">
        <div className="d-flex justify-content-s-between slim-border-bottom padding-vertical-sm margin-bottom-md">
          <FadeInLeft duration={.1}>
            <h2 className="font-weight-500 font-style-normal font-lg">History</h2>
          </FadeInLeft>
          <Link to="/account/wallet/history" className="font-sm font-weight-600 padding-sm border-r-5 bg-color1 color-white ripple">SEE ALL</Link>
        </div>
        <div className="sort margin-bottom-md d-flex justify-content-end">
          <button className="btn btn-transparent padding-md font-md color1">Sort: Most Recent</button>
        </div>
        <div className="d-flex headings slim-border-bottom padding-vertical-sm">
          <h3 className="font-weight-500 font-style-normal font-md margin-right-sm uppercase remark">remark</h3>
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
        {history.length === 0
        ? <EmptyDataRender message="You have no history record" />
        : history.map((el) =>  <HistoryRow history={el} key={el.id} />)}
      </section>
    </ScrollToBottom>
  )
}

export const HistoryRow = memo(({history }) => {
  const { amount, created_at, id, remark, status } = history
  return (
    <div className="d-flex data-row slim-border-bottom padding-vertical-sm">
      <span className="font-weight-500 font-style-normal font-sm margin-right-sm capitalize remark">{remark}</span>
      <div className="d-flex justify-content-center">
        <span className="font-weight-500 font-style-normal font-sm margin-right-sm">{formatDate(created_at)}</span>
      </div>
      <div className="d-flex justify-content-center">
        <span className="font-weight-500 font-style-normal font-sm margin-right-sm">{formatCurrency(amount)}</span>
      </div>
      <div className="d-flex justify-content-end">
      <span className={`font-weight-500 font-style-normal capitalize font-sm margin-right-sm justify-self-end ${status !== 'debit' ? 'color1' : 'danger-text'}`}>{status}</span>
      </div>
    </div>
  )
})

const mapStateToProps = state => {
  const { historyData: { history, pageNum }, loadingIndicators } = state.walletReducer;
  const { token } = state.authReducer;
  return {
    history, token, pageNum, loading: loadingIndicators.history,
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getWalletHistoryRequest }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(History);

