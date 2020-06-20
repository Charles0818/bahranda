import React from 'react';

export const FormField = () => {
  return (
    <div></div>
  )
}

export const SubmitButton = ({ spinner: Spinner, text }) => {
  return (
    <button className="d-flex btn">
      <span className="font-sm color-white font-weight-600">{text}</span>
      {Spinner}
    </button>
  )
}