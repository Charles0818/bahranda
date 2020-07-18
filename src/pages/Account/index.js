import React, { Fragment, lazy, Suspense, useRef, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dashboard from './Dashboard';
import Wallet from './Wallet';
import Settings from './Settings';
import InvestmentHistory from './InvestmentHistory';
import { HorizontalNavbar, LeftSideBar } from './components';
import { Spinners, Error404 } from '../components';
import { actions } from './helpers';
import './account.scss';
// const Admin = lazy(() => import('./Admin'));
const { accountActions: { getAccountDashboardRequest } } = actions;
const { useSectionSpinner } = Spinners;
const Account = ({ match: { path }, getAccountDashboard, token }) => {
  const { LoadingSpinner, isLoading } = useSectionSpinner(false)
  useEffect(() => {
     console.log('received token', token)
    getAccountDashboard(token)
  }, [token])
  const sidebarRef = useRef();
  return (
    <Fragment>
      <section className="account d-flex">
        <LeftSideBar ref={sidebarRef} />
        <div className="main padding-horizontal-xlg padding-vertical-lg">
          <HorizontalNavbar ref={sidebarRef} />
          <main className="">
            {!isLoading
            ? <Switch>
                <Route exact path={path} component={Dashboard} />
                <Route path={`${path}/wallet`} component={Wallet} />
                <Route exact path={`${path}/settings`} component={Settings} />
                <Route exact path={`${path}/investments`} component={InvestmentHistory} />
                <Route component={Error404} />
              </Switch>
            : LoadingSpinner
            }
          </main>
        </div>
      </section>
    </Fragment>
  )
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getAccountDashboard: getAccountDashboardRequest }, dispatch)


export default connect(null, mapDispatchToProps)(Account);
