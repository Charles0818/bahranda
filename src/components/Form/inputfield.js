import React, { useRef, useState } from 'react';
import { BsEye, BsEyeSlash, BsCheckCircle } from 'react-icons/bs'
export const FormField = ({
  placeholder, value, onChange, err, type, ...rest
}) => {
  const inputRef = useRef();
  return (
    <label className="d-flex column">
      <span className="">Full name</span>
      <div className="">
        <input type={type} ref={inputRef} value={value} onChange={onChange} placeholder={placeholder} className="border-r-10 padding-md padding-horizontal-md" {...rest} />
        <div className="field-right-icon">
          {!err && <BsCheckCircle className="font-md color-white bg-color1" /> }
        </div>
      </div>
    </label>
  )
}

export const PasswordField = ({
  placeholder, value, onChange, err, ...rest
}) => {
  const inputRef = useRef();
  const [type, setType] = useState('password');
  return (
    <label className="d-flex column">
      <span className="font-sm">{placeholder}</span>
      <div className="form-control">
        <input type={type} ref={inputRef} value={value} onChange={onChange} placeholder={placeholder} className="border-r-10 padding-md padding-horizontal-md" {...rest} />
        <div className="field-right-icon">
          {type === 'password'
          ? <BsEyeSlash className="font-md color-gray" onClick={() => setType('text')} />
          : <BsEye className="font-md color-gray" onClick={() => setType('password')} />}
        </div>
      </div>
    </label>
  )
}

export const TextArea = ({
  placeholder, value, onChange, err, ...rest
}) => {
  return (
    <label className="d-flex column">
      <span className="font-sm">{placeholder}</span>
      <textarea value={value} {...rest} />
    </label>
  )
}

export const SubmitButton = ({ spinner: Spinner, text }) => {
  const buttonRef = useRef();
  return (
    <button ref={buttonRef} className={`d-flex flex-center btn ${!buttonRef.current.disabled ? 'bg-color1' : 'cursor-not-allowed'}`}>
      <span className="font-sm color-white font-weight-600">{text}</span>
      {Spinner}
    </button>
  )
}