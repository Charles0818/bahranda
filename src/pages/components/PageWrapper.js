import React, { Fragment, useEffect } from 'react';
import { Header, Footer } from '../../components';


const PageWrapper = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
