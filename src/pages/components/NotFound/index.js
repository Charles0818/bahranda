import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamation } from 'react-icons/fa';

const NotFound = ({ message, link, linkTitle }) => {
  return (
    <div className="d-flex column flex-center">
      {/* <div className="d-flex flex-center margin-bottom-md border-r-circle padding-lg bg-danger"> */}
        {/* <FaExclamation className="font-xlg danger-text" /> */}
      {/* </div> */}
      <p className="font-md text-content font-weight-600 text-center margin-bottom-md uppercase">{message}</p>
      {link && <Link to={link} className="btn-color1 capitalize color-white font-weight-600 font-md">{linkTitle}</Link>}
    </div>
  )
}

export default NotFound;