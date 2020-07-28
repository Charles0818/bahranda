import React, { useEffect, useRef, useCallback, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SyncLoader from 'react-spinners/SyncLoader'
import { Spinners } from '../../../components';
import { History, EmptyDataRender } from '../../components';
import { actions } from '../../helpers';
const { walletActions: { getWalletHistoryRequest, incrementWalletHistoryPageNum } } = actions;
const WalletHistory = ({getWalletHistoryRequest, token, loading, history, hasNextPage, pageNum, incrementPageNum }) => {
  useEffect(() => {
    if(history.length === 0 && pageNum === 1) getWalletHistoryRequest(pageNum, token)
  }, [token, pageNum, history.length]);
  const observer = useRef();
  const lastHistory = useCallback(node => {
    if(loading) return;
    if(observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting && hasNextPage) {
        console.log('is intereacting');
        incrementPageNum()
      }
    })
    if(node) observer.current.observe(node)
  }, [loading, hasNextPage])
  return (
    <section className="slim-border-2 padding-horizontal-md bg-white activity">
      <div className="d-flex justify-content-s-between slim-border-bottom padding-vertical-sm margin-bottom-md">
        <h2 className="font-weight-500 font-style-normal font-lg">History</h2>
      </div>
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
      {history.length === 0 && !loading
        ? <EmptyDataRender message="You have no history record" />
        : history.map((el, index) => {
        if(index + 1 === history.length) {
          return <div key={el.id} ref={lastHistory}><History.HistoryRow history={el} /></div>
        } else {
          return <History.HistoryRow key={el.id} history={el} />
        }
      })}
      <div className="margin-bottom-sm d-flex justify-content-center">
        <SyncLoader size={15} color={"#069801"} loading={loading} />
      </div>
    </section>
  )
}

const mapStateToProps = state => {
  const { historyData: { history, pageNum }, loadingIndicators } = state.walletReducer;
  const { token } = state.authReducer;
  return {
    history, token, loading: loadingIndicators.history, pageNum,
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getWalletHistoryRequest,
    incrementPageNum:incrementWalletHistoryPageNum
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(WalletHistory);

