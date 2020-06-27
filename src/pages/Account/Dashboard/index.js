import React from 'react';
import { AccountSummary, MonthlyExpenditure } from './components';
const Dashboard = () => {
  return (
    <div>
      <h1 className="padding-bottom-sm font-lg">Dashboard</h1>
      <AccountSummary />
      <MonthlyExpenditure />
    </div>
  )
}

export default Dashboard;
