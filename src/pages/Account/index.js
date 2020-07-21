import React, { Fragment, lazy, Suspense, useRef, useLayoutEffect, useCallback } from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Wallet from './Wallet';
import Settings from './Settings';
import DealPages from './Deal';
import { HorizontalNavbar, LeftSideBar } from './components';
import { Error404 } from '../components';
import './account.scss';
// const Admin = lazy(() => import('./Admin'));

const Account = ({ match: { path } }) => {
  const sidebarRef = useRef(null);
  const toggleSidebar = useCallback(() => {
    sidebarRef.current.classList.toggle('toggle')
  }, [sidebarRef.current]);
  return (
    <Fragment>
      <section className="account d-flex">
        <LeftSideBar ref={sidebarRef} />
        <div className="main padding-horizontal-xlg padding-vertical-lg">
          <HorizontalNavbar toggleSidebar={toggleSidebar} />
          <main className="">
            <Switch>
              <Route exact path={path} component={Dashboard} />
              <Route path={`${path}/wallet`} component={Wallet} />
              <Route exact path={`${path}/settings`} component={Settings} />
              <Route path={`${path}/deals`} component={DealPages} />
              <Route component={Error404} />
            </Switch>
          </main>
        </div>
      </section>
    </Fragment>
  )
}

export default Account;
