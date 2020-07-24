import React from 'react';

const EmptyDataRender = ({ message }) => {
  return (
    <div className="d-flex column align-items-center padding-vertical-md">
      <p className="font-lg text-content color-gray font-weight-500 uppercase">{message}</p>
    </div>
  )
}

export default EmptyDataRender;