import React, { Fragment, lazy, Suspense, useRef } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Wallet from './Wallet';
import Settings from './Settings';
import { HorizontalNavbar, LeftSideBar } from './components';
import './account.scss';
const Admin = lazy(() => import('./Admin'));

const Account = ({ match: { path } }) => {
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

export default Account;
