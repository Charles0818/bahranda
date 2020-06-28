import React, { Fragment, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Wallet from './Wallet';
import { HorizontalNavbar, LeftSideBar } from './components';
import './account.scss';
const Admin = lazy(() => import('./Admin'));

const Account = ({ match: { path } }) => {
  return (
    <Fragment>
      <section className="account d-flex">
        <LeftSideBar />
        <div className="main padding-horizontal-xlg padding-vertical-lg">
          <HorizontalNavbar />
          <main className="">
            <Switch>
              <Route exact path={path} component={Dashboard} />
              <Route exact path={`${path}/wallet`} component={Wallet} />
            </Switch>
          </main>
        </div>
      </section>
    </Fragment>
  )
}

export default Account;
