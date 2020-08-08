import React, { useRef, useEffect } from 'react';
import { MdError } from 'react-icons/md';
import { IoMdCheckmarkCircle } from 'react-icons/io'
const HttpStatusNotification = ({ status, message }) => {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.classList.add('fadeIn-animation');
    return () => ref.current.classList.remove('fadeIn-animation')
  }, [])
  return (
    <div ref={ref} className={`d-flex nowrap align-items-center http-status border-r-5
      padding-horizontal-sm padding-vertical-sm ${status === 'error' ? 'bg-danger' : 'bg-color1'}`}
      style={{zIndex: 999}}>
        {status === 'error'
        ? <MdError className="font-lg margin-right-sm color-white" />
        : <IoMdCheckmarkCircle className="font-lg margin-right-sm color-white" />
        }
      <div className="d-flex column">
        <p className="text-content font-sm font-weight-600 color-white">{message}</p>
      </div>
    </div>
  )
}

export default HttpStatusNotification;
