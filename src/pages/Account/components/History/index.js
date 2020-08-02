import React, { memo, useLayoutEffect, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Spinners, Animation, Form } from '../../../components';
import { actions, utils } from '../../helpers';
import EmptyDataRender from '../EmptyDataRender';
import { default as useSort, sorts, statuses } from '../Sort';

const { useFormInput, QuantityInput } = Form;
const { history: historySorts } = sorts;
const { history: historyStatuses } = statuses;
const { ScrollToBottom, FadeInLeft } = Animation;
const { walletActions: { getWalletHistoryRequest } } = actions;
const { SectionSpinner } = Spinners;
const { formatting: { formatCurrency, formatDate } } = utils;

const History = ({ getWalletHistoryRequest, token, loading, history, sortHistory, pageNum }) => {
  const [sortResult, setSortResult] = useState(history)
  const { SortDropdown, value: sortValue } = useSort(historySorts.MOST_RECENT);
  const { SortDropdown: StatusDropdown, value: statusValue } = useSort(historyStatuses.COMPLETED);
  const { value: min, handleUserInput: setMin } = useFormInput();
  const { value: max, handleUserInput: setMax } = useFormInput();
  useLayoutEffect(() => {
    if(history.length === 0) getWalletHistoryRequest(pageNum, token)
  }, [token, pageNum, history.length]);
  useEffect(() => {
    if(sortValue && sortValue.value === historySorts.AMOUNT && min && max) {
      setSortResult(sortHistory(historySorts.AMOUNT, { min, max }))
    }
    if(sortValue && sortValue.value === historySorts.STATUS && statusValue.value) {
      setSortResult(sortHistory(historySorts.STATUS, {status: statusValue.value }));
    }
    if(sortValue && sortValue.value === historySorts.MOST_RECENT) setSortResult(history)
  }, [sortValue, statusValue, min, max])
  if(loading) return <SectionSpinner isLoading={loading} />
  return (
      <section className="overflow-h slim-border-2 padding-horizontal-md bg-white activity">
        <div className="d-flex justify-content-s-between slim-border-bottom padding-vertical-sm margin-bottom-md">
          <FadeInLeft duration={.1}>
            <h2 className="font-weight-500 font-style-normal font-lg">History</h2>
          </FadeInLeft>
          <Link to="/account/wallet/history" className="font-sm font-weight-600 padding-sm border-r-5 bg-color1 color-white ripple">SEE ALL</Link>
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
        {sortResult.length === 0
        ? <EmptyDataRender message="You have no history record" />
        : sortResult.map((el) =>  <HistoryRow history={el} key={el.id} />)}
      </section>
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
    history, sortHistory, token, pageNum, loading: loadingIndicators.history,
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getWalletHistoryRequest }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(History);
