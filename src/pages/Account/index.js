import React, { Fragment, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import { HorizontalNavbar, LeftSideBar } from './components';
import { Footer } from '../components'
import './account.scss';
const Admin = lazy(() => import('./Admin'));

const Account = ({ match: { path } }) => {
  return (
    <Fragment>
      <section className="account d-flex">
        <LeftSideBar />
        <div className="main">
          <HorizontalNavbar />
          <main>
            <Switch>
              <Route exact path={path} component={Dashboard} />
            </Switch>
          </main>
        </div>
      </section>
      <Footer />
    </Fragment>
  )
}

export default Account;
