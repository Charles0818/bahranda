import React, { useEffect, useRef, useCallback, forwardRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SyncLoader from 'react-spinners/SyncLoader'
import { Request, RequestTableHead, LastWalletRequest } from '../components/WalletRequests';
import { actions } from '../../helpers';
const { walletActions: { getWalletRequests, incrementWalletRequestsPageNum } } = actions;

const WalletRequests = ({ 
  walletRequests, getWalletRequests, token, pageNum, hasNextPage, loading, incrementPageNum
 }) => {
  useEffect(() => {
    if(walletRequests.length === 0 && pageNum === 1) getWalletRequests(pageNum, token)
  }, [token, pageNum, walletRequests.length]);
  const observer = useRef();
  const lastWalletRequest = useCallback(node => {
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
    <section className="overflow-h slim-border-2 padding-horizontal-md bg-white margin-bottom-md">
      <h2 className="slim-border-bottom padding-vertical-sm margin-bottom-md font-weight-500 font-style-normal font-lg">Wallet Requests</h2>
      <table className="margin-bottom-sm">
        <RequestTableHead />
        <tbody>
          {walletRequests.map((request, index) => {
            if(index + 1 === walletRequests.length) {
              return <LastWalletRequest key={request.id} ref={lastWalletRequest} request={request} />
            } else {
              return <Request request={request} key={request.id} />
            }
          })}
        </tbody>
      </table>
      <div className="margin-bottom-sm d-flex justify-content-center">
        <SyncLoader size={15} color={"#069801"} loading={loading} />
      </div>
    </section>
  )
}


const mapStateToProps = state => {
  const { walletRequestsData: { walletRequests, pageNum, hasNextPage }, loadingIndicators } = state.walletReducer;
  const { token } = state.authReducer;
  return {
    walletRequests, token, loading: loadingIndicators.walletRequests, pageNum, hasNextPage 
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getWalletRequests,
    incrementPageNum: incrementWalletRequestsPageNum
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(WalletRequests);