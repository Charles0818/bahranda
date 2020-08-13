import React, { useEffect, useRef, useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SyncLoader from 'react-spinners/SyncLoader'
import { History, EmptyDataRender, Form, sorts, statuses, useSort } from '../../components';
import { actions } from '../../helpers';

const { useFormInput, QuantityInput } = Form;
const { history: historySorts } = sorts;
const { history: historyStatuses } = statuses;
const { walletActions: { getWalletHistoryRequest, incrementWalletHistoryPageNum } } = actions;
const WalletHistory = ({getWalletHistoryRequest, sortHistory, token, loading, history, hasNextPage, pageNum, incrementPageNum }) => {
  const [sortResult, setSortResult] = useState(History);
  const { SortDropdown, value: sortValue } = useSort(historySorts.MOST_RECENT);
  const { SortDropdown: StatusDropdown, value: statusValue } = useSort(historyStatuses.COMPLETED);
  const { value: min, handleUserInput: setMin } = useFormInput();
  const { value: max, handleUserInput: setMax } = useFormInput();
  useEffect(() => {
    if(history.length === 0 && pageNum === 1) getWalletHistoryRequest(pageNum, token)
  }, [token, pageNum, history.length, getWalletHistoryRequest]);
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
  }, [loading, hasNextPage, incrementPageNum])
  useEffect(() => {
    if(sortValue && sortValue.value === historySorts.AMOUNT && min){
      setSortResult(sortHistory(historySorts.AMOUNT, { min, max }))
    }
    if(sortValue && sortValue.value === historySorts.STATUS && statusValue.value) {
      setSortResult(sortHistory(historySorts.STATUS, {status: statusValue.value }));
    }
    if(sortValue && sortValue.value === historySorts.MOST_RECENT) {
      setSortResult(sortHistory(historySorts.MOST_RECENT))
    }
  }, [sortValue, statusValue, sortHistory, min, max])
  return (
    <section className="overflow-h slim-border-2 padding-horizontal-md bg-white activity">
      <div className="d-flex justify-content-s-between slim-border-bottom padding-vertical-sm margin-bottom-md">
        <h2 className="font-weight-500 font-style-normal font-lg">History</h2>
      </div>
      <div className="sort margin-bottom-md d-flex justify-content-end">
        <SortDropdown options={Object.values(historySorts)} className="margin-right-sm" />
        {sortValue && sortValue.value === historySorts.AMOUNT && (
        <div className="d-flex" style={{maxWidth: '200px'}}>
          <QuantityInput value={min} onChange={setMin} autoFocus={true} name="amount" className="flex-equal margin-right-sm" placeholder="Min" />
          <QuantityInput value={max} onChange={setMax} name="amount" className="flex-equal" placeholder="Max" />
        </div>
        )}
        {sortValue && sortValue.value === historySorts.STATUS && (
          <StatusDropdown label="Status" options={Object.values(historyStatuses)} className="margin-right-sm" />
        )}
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
      {sortResult.length === 0 && !loading
        ? <EmptyDataRender message="You have no history record" />
        : sortResult.map((el, index) => {
        if(index + 1 === sortResult.length) {
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
  const { AMOUNT, STATUS, MOST_RECENT } = historySorts;
  const sortHistory = (type, payload) => {
    switch(type) {
      case AMOUNT:
        const { min, max } = payload;
       return history.filter(history => max
        ? parseFloat(history.amount) >= parseFloat(min)
          && parseFloat(history.amount) <= parseFloat(max)
        : parseFloat(history.amount) >= parseFloat(min));
      case STATUS:
        const { status } = payload;
        return  history.filter(history => history.status === status)
      case MOST_RECENT:
        return history
      default:
       return history
    }
  }
  const { token } = state.authReducer;
  return {
    history, sortHistory, token, loading: loadingIndicators.history, pageNum,
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getWalletHistoryRequest,
    incrementPageNum:incrementWalletHistoryPageNum
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(WalletHistory);

