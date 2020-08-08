import React, { Suspense, lazy, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home, { Auth, ContactUs, HowWeWork, FAQs } from './pages';
import { IconContext } from "react-icons";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ProtectedRoute, Spinners, Error404, NetworkError } from './components';
import { actions } from './helpers';
import './styles/App.scss';
import './styles/form.scss';
const Account = lazy(() => import('./pages/Account'));
const CommodityPages = lazy(() => import('./pages/CommodityPages'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfServices = lazy(() => import('./pages/TermsOfServices'));
const { authActions: { getUserProfile } } = actions;
function App({ token, isLoggedIn, getUserProfile, isLoading }) {

  useLayoutEffect(() => {
    if(token && !isLoggedIn) getUserProfile(token)
  }, []);
  if(isLoading) return <Spinners.FullScreenSpinner isLoading={isLoading} />;
  return (
    <IconContext.Provider value={{ className: "global-class-name" }}>
      <Router>
        <Suspense fallback={<Spinners.FullScreenSpinner isLoading={true} />}>
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/auth" component={Auth} />
            <Route path="/contact" component={ContactUs} exact={true} />
            <Route path="/how-we-work" component={HowWeWork} exact={true} />
            <Route path="/faqs" component={FAQs} exact={true} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/terms" component={TermsOfServices} />
            <ProtectedRoute auth={true} path="/commodities" redirectPath="/auth/signin" component={CommodityPages} />
            <ProtectedRoute auth={true} path="/account" redirectPath="/auth/signin" component={ Account } />
            <Route component={Error404} />
          </Switch>
        </Suspense>
      </Router>
    </IconContext.Provider>
  );
}

const mapStateToProps = state => {
  const { token, isLoggedIn } = state.authReducer;
  const { isLoading } = state.UIReducer;
  return { token, isLoggedIn, isLoading }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getUserProfile }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(App);
