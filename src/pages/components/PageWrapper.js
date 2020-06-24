import React, { Fragment } from 'react';
import { Header, Footer } from '../../components';

const PageWrapper = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  )
}

// export const PageWrapperWithFooter
export default PageWrapper;
