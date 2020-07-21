import React, { Fragment, lazy, Suspense, useRef, useCallback } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Commodities from './Commodities';
import CommodityDetails from './CommodityDetails';
import { HorizontalNavbar, LeftSideBar } from '../Account/components';
import { Footer } from '../components';
// import '../Account/account.scss';
import './product.scss';
const CommodityPages = ({ match: { path } }) => {
  const sidebarRef = useRef(null);
  const toggleSidebar = useCallback(() => sidebarRef.current.classList.toggle('toggle'), [sidebarRef.current])
  return (
    <Fragment>
      <section className="account ">
        <LeftSideBar ref={sidebarRef} />
        <div className="main padding-horizontal-xlg padding-vertical-lg">
          <HorizontalNavbar toggleSidebar={toggleSidebar} />
          <main className="">
            <Switch>
              <Route exact path={path} component={Commodities} />
              <Route path={`${path}/:id`} component={CommodityDetails} />
            </Switch>
          </main>
        </div>
      </section>
      {/* <Footer /> */}
    </Fragment>
  )
}

export default CommodityPages;
