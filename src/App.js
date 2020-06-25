import React, { Fragment, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import Home, { Auth } from './pages';
import { IconContext } from "react-icons";
import { ErrorBoundary, ProtectedRoute, Spinners } from './components';
import './styles/App.scss';
import './styles/form.scss';
const Account = lazy(() => import('./pages/Account'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
function App() {
  return (
    <ErrorBoundary>
      <IconContext.Provider value={{ className: "global-class-name" }}>
          <Router>
            <Suspense fallback={<Spinners.FullScreenSpinner isLoading={true} />}>
              <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/auth" component={Auth} />
                <Route exact path="/products" component={Products} />
                <Route path="/products/:id" component={ProductDetails} />
                <ProtectedRoute auth={true} path="/account" redirectPath="/auth/signin" component={ Account } />
              </Switch>
            </Suspense>
          </Router>
      </IconContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
