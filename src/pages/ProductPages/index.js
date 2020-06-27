import React, { Fragment, lazy, Suspense } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Products from './Products';
import ProductDetails from './ProductDetails';
import { HorizontalNavbar, LeftSideBar } from '../Account/components';
import { Footer } from '../components';
import '../Account/account.scss';
import './product.scss';
const ProductPages = ({ match: { path } }) => {
  return (
    <Fragment>
      <section className="account d-flex">
        <LeftSideBar />
        <div className="main padding-horizontal-lg padding-vertical-lg">
          <HorizontalNavbar />
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
