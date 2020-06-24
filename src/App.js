import React, { Fragment, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, RouteProps, Switch } from 'react-router-dom';
import logo from './logo.svg';
import { Home, Auth } from './pages';
import { IconContext } from "react-icons";
import { Footer, Header, ErrorBoundary } from './components';
import './styles/App.scss';
import './styles/form.scss';
import whatwedo from './components/whatwedo';
function App() {
  return (
    <Router>
      <ErrorBoundary>
        <IconContext.Provider value={{ className: "global-class-name" }}>
          <Header />
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/auth" component={Auth} />
            
          </Switch>
          <Footer />
        </IconContext.Provider>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
