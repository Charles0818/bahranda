import React from 'react';
import { AccountSummary, MonthlyExpenditure } from './components';
import Activity from './components/Activity';
const Dashboard = () => {
  return (
    <div>
      <h1 className="padding-bottom-sm font-lg">Dashboard</h1>
      <AccountSummary />
      <MonthlyExpenditure />
      <Activity />
    </div>
  )
}

export default Dashboard;
