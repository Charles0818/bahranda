import React, { Fragment, lazy, Suspense, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dashboard from './Dashboard';
import Wallet from './Wallet';
import Settings from './Settings';
import { HorizontalNavbar, LeftSideBar } from './components';
import { actions } from '../../helpers';
import './account.scss';
const Admin = lazy(() => import('./Admin'));
const { dashboardActions: { getUserDashboardRequest } } = actions;
const Account = ({ match: { path }, getUserDashboard, token }) => {
  useEffect(() => {
    getUserDashboard(token)
  }, [])
  const sidebarRef = useRef();
  return (
    <Fragment>
      <section className="account d-flex">
        <LeftSideBar sidebarRef={sidebarRef} />
        <div className="main padding-horizontal-xlg padding-vertical-lg">
          <HorizontalNavbar sidebarRef={sidebarRef} />
          <main className="">
            <Switch>
              <Route exact path={path} component={Dashboard} />
              <Route exact path={`${path}/wallet`} component={Wallet} />
              <Route exact path={`${path}/settings`} component={Settings} />
            </Switch>
          </main>
        </div>
      </section>
    </Fragment>
  )
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getUserDashboard: getUserDashboardRequest }, dispatch)


export default connect(null, mapDispatchToProps)(Account);
