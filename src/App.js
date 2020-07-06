import React, { Fragment, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import Home, { Auth, ContactUs } from './pages';
import { PrivacyPolicy, TermsOfServices, Error404 } from './pages';
import { IconContext } from "react-icons";
import { ErrorBoundary, ProtectedRoute, Spinners } from './components';
import './styles/App.scss';
import './styles/form.scss';
const Account = lazy(() => import('./pages/Account'));
// const ProductPages = lazy(() => import('./pages/ProductPages'));

const CommodityPages = lazy(() => import('./pages/CommodityPages'))
function App() {
  return (
    <ErrorBoundary>
      <IconContext.Provider value={{ className: "global-class-name" }}>
          <Router>
            <Suspense fallback={<Spinners.FullScreenSpinner isLoading={true} />}>
              <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/auth" component={Auth} />
                <Route path="/contact" component={ContactUs} exact={true} />

                {/* <ProtectedRoute auth={true} path="/products" redirectPath="/auth/signin" component={ProductPages} /> */}
                <ProtectedRoute auth={true} path="/commodities" redirectPath="/auth/signin" component={CommodityPages} />
                <ProtectedRoute auth={true} path="/account" redirectPath="/auth/signin" component={ Account } />
                <Route component={Error404} />
              </Switch>
            </Suspense>
          </Router>
      </IconContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
