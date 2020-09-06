import React, { Fragment, useEffect } from 'react';
import { Header, Footer } from '../../components';
import { Link} from 'react-router-dom';


const PageWrapper = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
      <div className="sticky-footer reach-us bg-color1">
     <p>Are you a manufacturer in need of commodities? <span><Link to="/contact">Contact Us</Link>
</span></p>
   </div>
    </Fragment>
  )
}

// export const PageWrapperWithFooter
export default PageWrapper;
