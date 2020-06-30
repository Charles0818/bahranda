import React, { Fragment, lazy, Suspense, useRef } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Products from './Products';
import ProductDetails from './ProductDetails';
import { HorizontalNavbar, LeftSideBar } from '../Account/components';
import { Footer } from '../components';
import '../Account/account.scss';
import './product.scss';
const ProductPages = ({ match: { path } }) => {
  const sidebarRef = useRef();
  return (
    <Fragment>
      <section className="account d-flex">
        <LeftSideBar sidebarRef={sidebarRef} />
        <div className="main padding-horizontal-xlg padding-vertical-lg">
          <HorizontalNavbar sidebarRef={sidebarRef} />
          <main>
            <Switch>
              <Route exact path={path} component={Products} />
              <Route path={`${path}/:id`} component={ProductDetails} />
            </Switch>
          </main>
        </div>
      </section>
      {/* <Footer /> */}
    </Fragment>
  )
}

export default ProductPages;
