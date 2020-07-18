import React, { useEffect, useLayoutEffect, lazy, Suspense }from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { History, Spinners } from '../components';
import { Link, Route } from 'react-router-dom';
import { actions } from '../helpers';
import { AccountInformation, WalletStatus, SetPin } from './components';
const { walletActions: { getWalletRequest } } = actions;
const { SectionSpinner } = Spinners;
const WalletHistory = lazy(() => import('./WalletHistory'));
const Wallet = ({ getWalletRequest, token, loading, walletExists, match: { path } }) => {
  useLayoutEffect(() => {
    if(!walletExists) getWalletRequest(token)
  }, [walletExists])
  console.log('this is my path', path)
  if(loading) return <SectionSpinner isLoading={loading} />
  return (
    <Suspense fallback={<Spinners.FullScreenSpinner isLoading={true} />}>
      <Route exact path={path} render={props => (
        <div>
          <h1 className="padding-bottom-sm font-lg">Wallet</h1>
          <WalletStatus />
          <AccountInformation />
          <SetPin />
          <History.default />
        </div>
      )} />
      <Route path={`${path}/history`} component={WalletHistory} />
    </Suspense>
  )
}
const mapTokenToProps = state => {
  const { token } = state.authReducer;
  const { wallet, loadingIndicators: { getWallet: loading } } = state.walletReducer;
  return { token, loading, walletExists: Object.keys(wallet).length !== 0 }
}
const mapDispatchToProps = dispatch => 
  bindActionCreators({ getWalletRequest }, dispatch)

export default connect(mapTokenToProps, mapDispatchToProps)(Wallet);
