import React, { Fragment, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import Home, { Auth } from './pages';
import { IconContext } from "react-icons";
import { ErrorBoundary, ProtectedRoute, Spinners } from './components';
import './styles/App.scss';
import './styles/form.scss';
const Account = lazy(() => import('./pages/Account'));
function App() {
  return (
    <ErrorBoundary>
      <IconContext.Provider value={{ className: "global-class-name" }}>
          <Router>
            <Suspense fallback={<Spinners.FullScreenSpinner isLoading={true} />}>
              <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/auth" component={Auth} />
                <ProtectedRoute auth={true} path="/account" redirectPath="/auth/signin" component={ Account } />
              </Switch>
            </Suspense>
          </Router>
      </IconContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
