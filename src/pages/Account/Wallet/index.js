import React from 'react';
import { AccountSummary } from '../Dashboard/components';
import { History } from '../components'
import { AccountInformation } from './components';
const Wallet = () => {
  return (
    <div>
      <h1 className="padding-bottom-sm font-lg">Wallet</h1>
      <AccountSummary />
      <AccountInformation />
      <History />
    </div>
  )
}

export default Wallet;
