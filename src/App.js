import React, { Fragment, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, RouteProps, Switch } from 'react-router-dom';
import logo from './logo.svg';
import { Home } from './pages';
import { IconContext } from "react-icons";
// const { Home }= lazy(() => import('./pages'));
// const {  } = pages;
import { Footer, Header, ErrorBoundary } from './components';
import './styles/App.scss';

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
          <Header />
          <Switch>
            <Route path="/" component={Home} exact={true} />
          </Switch>
          <Footer />
        </IconContext.Provider>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
