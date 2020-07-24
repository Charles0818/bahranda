import React, { useLayoutEffect } from 'react';
import { AccountSummary, MonthlyExpenditure } from './components';
import { Spinners } from '../components';
import Activity from './components/Activity';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions, utils } from '../helpers';
const { accountActions: { getAccountDashboardRequest } } = actions;
const { SectionSpinner } = Spinners;
const { checkObjectProperties } = utils;
const Dashboard = ({ account_summary, monthly_expenditure, user_activities, hasNoData, getAccountDashboard, token, loading }) => {
  useLayoutEffect(() => {
    if(hasNoData) getAccountDashboard(token)
  }, [token, hasNoData])
 if(loading) return <SectionSpinner isLoading={loading} />
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
  const { token } = state.authReducer;
  const {
    loadingIndicators: { getDashboard: loading },
    account_summary, monthly_expenditure, user_activities
  } = state.accountReducer;
  const hasNoData = checkObjectProperties(account_summary)
  return { account_summary, monthly_expenditure, user_activities, hasNoData, loading, token } 
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getAccountDashboard: getAccountDashboardRequest }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
