import React, { useCallback } from 'react';
import { utils, actions } from '../../../helpers';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RequestWithdrawal from '../RequestWithdrawal';
const { formatting: { formatCurrency }, checkObjectProperties } = utils;
const { walletActions: { requestWithdrawalRequest } } = actions;
const WalletStatus = ({ wallet_balance, amount_withdrawn }) => {
  return (
    <section className="slim-border-2 padding-horizontal-md margin-bottom-md bg-white summary">
      <h2 className="font-weight-500 font-style-normal font-lg slim-border-bottom padding-vertical-sm">Account Summary</h2>
      <div className="d-flex align-items-stretch padding-vertical-md ">
        <div className="d-flex column flex-center padding-horizontal-md padding-vertical-xsm margin-bottom-sm slim-border-right slim-border-bottom statement">
          <p className="font-lg font-weight-500 uppercase color1">{formatCurrency(wallet_balance)}</p>
          <span className="uppercase font-sm font-weight-300 text-center">Wallet Balance</span>
        </div>
        <div className="d-flex column flex-center padding-horizontal-md padding-vertical-xsm margin-bottom-sm slim-border-right slim-border-bottom statement">
          <p className="font-lg font-weight-500 uppercase danger-text">{formatCurrency(amount_withdrawn)}</p>
          <span className="uppercase font-sm font-weight-300 text-center">withdrawn</span>
        </div>
      </div>
      <RequestWithdrawal />
    </section>
  )
}


const mapWalletToProps = state => {
  const { wallet: { wallet_balance, amount_withdrawn } } = state.walletReducer;
  return { wallet_balance, amount_withdrawn  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestWithdrawal: requestWithdrawalRequest }, dispatch)
export default connect(mapWalletToProps, mapDispatchToProps)(WalletStatus);
