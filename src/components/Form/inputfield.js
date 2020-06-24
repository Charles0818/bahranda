import React, { useRef, useState, useEffect } from 'react';
import { BsEye, BsEyeSlash, BsCheckCircle } from 'react-icons/bs';
import { FaCheckCircle } from 'react-icons/fa';
export const FormField = ({
  placeholder, value, onChange, err, name, type, className, ...rest
}) => {
  const inputRef = useRef();
  return (
    <label className={`d-flex column margin-bottom-sm ${className}`} style={{width: '100%'}}>
      <span className="font-sm font-weight-500">{placeholder}</span>
      <div className="d-flex input-container position-relative" style={{width: '100%'}}>
        <input type={type} name={name} ref={inputRef} value={value} onChange={onChange} placeholder={placeholder}
          className="border-r-5 padding-md padding-horizontal-md font-weight-500 bg-white slim-border font-sm" {...rest} />
        <div className="field-check-icon">
          {!err && value.length > 0 && <FaCheckCircle className="font-md  bg-white color1 fadeIn-animation" /> }
        </div>
      </div>
      <span className="font-xsm font-weight-600 danger-text">{err}</span>
    </label>
  )
}

export const PasswordField = ({
  placeholder, value, onChange, err, name, className = '',  ...rest
}) => {
  const inputRef = useRef();
  const [type, setType] = useState('password');
  return (
    <label className={`d-flex column margin-bottom-sm ${className}`} style={{width: '100%'}}>
      <span className="font-sm">{placeholder}</span>
      <div className="d-flex input-container position-relative">
        <input type={type} name={name} ref={inputRef} value={value} onChange={onChange} placeholder={placeholder} className="border-r-5 padding-md padding-horizontal-md font-weight-500 bg-white slim-border font-sm" {...rest} />
        <div className="field-check-icon">
          {type === 'password'
          ? <BsEyeSlash className="font-md color-gray fadeIn-animation" onClick={() => setType('text')} />
          : <BsEye className="font-md color-gray fadeIn-animation" onClick={() => setType('password')} />}
        </div>
      </div>
      <span className="font-xsm font-weight-600 danger-text">{err}</span>
    </label>
  )
}

export const useCheckbox = (bool = false) => {
  const [checked, setChecked] = useState(bool);
  const Checkbox = () => {
    return (
      <input type="checkbox" color="#000" checked={checked} onChange={() => setChecked(prev => !prev)} />
    )
  }
  return { checked, setChecked, Checkbox }
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

export const SubmitButton = ({ spinner: Spinner, text, action, disabled, className = '', ...rest }) => {
  const buttonRef = useRef(null);
  const preventBeforeFire = (e) => {
    e.preventDefault();
    action()
  }
  return (
    <button disabled={disabled} ref={buttonRef} onClick={e => preventBeforeFire(e)} {...rest}
      className={`submit d-flex flex-center btn margin-bottom-md ${disabled ? 'cursor-not-allowed bg-color1-opacity' : 'bg-color1 ripple'} ${className}`}>
      <span className="btn-text font-sm color-white font-weight-600">{text}</span>
      <div className="spinner">{Spinner}</div>
    </button>
  )
}