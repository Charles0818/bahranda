import React, { Fragment, lazy, Suspense, useRef, useCallback } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Commodities from './Commodities';
import CommodityDetails from './CommodityDetails';
import { HorizontalNavbar, LeftSideBar } from '../Account/components';
import './product.scss';
import { AccountFooter } from '../../components';
const CommodityPages = ({ match: { path } }) => {
  const sidebarRef = useRef(null);
  const toggleSidebar = useCallback(() => sidebarRef.current.classList.toggle('toggle'), [sidebarRef.current])
  return (
    <Fragment>
      <section className="account d-flex">
        <LeftSideBar ref={sidebarRef} />
        <div className="wrapper d-flex column align-items-center padding-horizontal-xlg">
          <HorizontalNavbar toggleSidebar={toggleSidebar} />
          <main className="main padding-bottom-lg">
            <Switch>
              <Route exact path={path} component={Commodities} />
              <Route path={`${path}/:id`} component={CommodityDetails} />
            </Switch>
          </main>
          <AccountFooter />
        </div>
      </section>
    </Fragment>
  )
}

export default CommodityPages;
