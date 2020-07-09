import React from 'react';
import { AccountSummary, MonthlyExpenditure } from './components';
import Activity from './components/Activity';
import { connect } from 'react-redux';
const Dashboard = ({ account_summary, monthly_expenditure, user_activities }) => {
  console.log(account_summary, monthly_expenditure, user_activities)
  return (
    <div>
      <h1 className="padding-bottom-md margin-top-md font-xlg font-weight-bold">Dashboard</h1>
      <AccountSummary summary={account_summary} />
      <MonthlyExpenditure expenditures={monthly_expenditure} />
      <Activity activities={user_activities} />
    </div>
  )
}

const mapStateToProps = state => {
  const { account_summary, monthly_expenditure, user_activities } = state.accountReducer;
  return { account_summary, monthly_expenditure, user_activities } 
}

export default connect(mapStateToProps, null)(Dashboard);
