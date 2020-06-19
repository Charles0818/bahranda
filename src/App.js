import React, { Fragment, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, RouteProps, Switch } from 'react-router-dom';
import logo from './logo.svg';
import { Home } from './pages';
// const { Home }= lazy(() => import('./pages'));
// const {  } = pages;
import { Footer, Header, ErrorBoundary } from './components';
import './App.scss';

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact={true} />
        </Switch>
        <Footer />
      </ErrorBoundary>
    </Router>
  );
}

export default App;
