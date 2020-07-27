import React, { useLayoutEffect, forwardRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Spinners, EmptyDataRender, Animation, SectionTitle } from '../../../components';
import { actions, utils } from '../../../helpers';
const { walletActions: { getWalletRequests } } = actions;
const { ScrollToBottom, FadeIn, FadeInLeft } = Animation;
const { SectionSpinner } = Spinners;
const { formatting: { formatDate, formatCurrency } } = utils;
const WalletRequests = ({ walletRequests, getWalletRequests, token, pageNum, loading }) => {
  useLayoutEffect(() => {
    if(walletRequests.length === 0) getWalletRequests(pageNum, token)
  }, [token, pageNum, walletRequests.length]);
  if(loading) return <SectionSpinner isLoading={loading} />
  return (
    <ScrollToBottom threshold={0} duration={.2} repeat={false}>
      <section className="overflow-h slim-border-2 padding-horizontal-md bg-white activity margin-bottom-md">
        <div className="d-flex justify-content-s-between slim-border-bottom padding-vertical-sm margin-bottom-md">
          <FadeInLeft duration={.1}>
            <h2 className="font-weight-500 font-style-normal font-lg">Wallet Requests</h2>
          </FadeInLeft>
          <Link to="/account/wallet/requests" className="font-sm font-weight-600 padding-sm border-r-5 bg-color1 color-white ripple">SEE ALL</Link>
        </div>
        <div className="sort margin-bottom-md d-flex justify-content-end">
          <button className="btn btn-transparent padding-md font-md color1">Sort: Most Recent</button>
        </div>
        {walletRequests.length === 0 
        ? <EmptyDataRender message="You have no current Wallet Request" />
        : <table>
            <RequestTableHead />
            <tbody>
              {walletRequests.map((el) => <Request request={el} key={el.id} />)}
            </tbody>
          </table>
        }
      </section>
    </ScrollToBottom>
  )
}

export const RequestTableHead = () => {
  return (
    <thead>
      <tr className="slim-border-bottom">
        <th className="font-weight-500 font-style-normal uppercase font-md margin-right-sm">amount</th>
        <th className="font-weight-500 font-style-normal uppercase font-md margin-right-sm">date</th>
        <th className="font-weight-500 font-style-normal uppercase font-md margin-right-sm">status</th>
      </tr>
    </thead>
  )
}
export const Request = ({ request }) => {
  const { amount, updated_at, status } = request;
  return (
    <tr>
      <td className="font-weight-500 font-style-normal font-sm margin-right-sm">{formatCurrency(amount)}</td>
      <td className="font-weight-500 font-style-normal font-sm margin-right-sm">{formatDate(updated_at)}</td>
      <td className={`font-weight-600 font-style-normal font-sm margin-right-sm capitalize  ${status === 'pending' ? 'color-yellow' : 'color1'}`}>{status}</td>
    </tr>
  )
}

export const LastWalletRequest = forwardRef(({ request }, ref) => {
  const { amount, updated_at, status } = request;
  return (
    <tr ref={ref}>
      <td className="font-weight-500 font-style-normal font-sm margin-right-sm">{formatCurrency(amount)}</td>
      <td className="font-weight-500 font-style-normal font-sm margin-right-sm">{formatDate(updated_at)}</td>
      <td className={`font-weight-600 font-style-normal font-sm margin-right-sm capitalize  ${status === 'pending' ? 'color-yellow' : 'color1'}`}>{status}</td>
    </tr>
  )
})

const mapStateToProps = state => {
  const { walletRequestsData: { walletRequests, pageNum }, loadingIndicators } = state.walletReducer;
  const { token } = state.authReducer;
  return {
    walletRequests, token, loading: loadingIndicators.walletRequests, pageNum,
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getWalletRequests,
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(WalletRequests);
