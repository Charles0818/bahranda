import React, { useRef, useState, memo } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import Select from 'react-select';
import { BsEye, BsEyeSlash, BsCheckCircle } from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaCheckCircle } from 'react-icons/fa';

export const FormField = ({
  placeholder, label, value, onChange, err, name, type, className, disabled = false, ...rest
}) => {
  const inputRef = useRef();
  return (
    <label className={`d-flex column margin-bottom-sm ${className}`} style={{width: '100%'}}>
      <span className="font-md font-weight-500">{label ? label : placeholder}</span>
      <div className="d-flex input-container position-relative" style={{width: '100%'}}>
        <input type={type} name={name} ref={inputRef} value={value} onChange={onChange} placeholder={placeholder} disabled={disabled}
          className={`border-r-5 padding-vertical-sm padding-horizontal-md font-weight-500 ${!disabled ? 'bg-white' : 'bg-gray'} slim-border font-sm`} {...rest} />
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
      <span className="font-md">{placeholder}</span>
      <div className="d-flex input-container position-relative">
        <input type={type} name={name} ref={inputRef} value={value} onChange={onChange} placeholder={placeholder}
          className="border-r-5 padding-md padding-horizontal-md font-weight-500 bg-white slim-border font-sm" {...rest} />
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
  placeholder, value, label, onChange, err, className, disabled, ...rest
}) => {
  return (
    <label className={`d-flex column margin-bottom-sm ${className}`} style={{width: '100%'}}>
      <span className="font-sm">{label}</span>
      <textarea value={value} {...rest} placeholder={placeholder}
        className={`border-r-5 padding-md padding-horizontal-md font-weight-500 ${!disabled ? 'bg-white' : 'bg-gray'} slim-border font-sm`} {...rest} />
    </label>
  )
}

export const useSelectInput = (initialValue) => {
  const [value, setValue] = useState(initialValue ? {value: initialValue, label: initialValue} : undefined);
  const SelectInput = memo((props) => {
    const { label, name, options, placeholder, className = '', ...rest } = props;
    return (
      <label className={`d-flex column margin-bottom-md ${className}`} style={{width: '100%'}}>
        <span className="font-md font-weight-500">{label}</span>
        <Select name={name} className="form-control font-weight-500 bg-white font-sm" value={value} options={options.map(value => ({value, label: value}))}
        placeholder={placeholder} onChange={setValue} {...rest} />
      </label>
    )
  })
  return { value, SelectInput }
}

export const RadioButton = ({ label = 'one', onChange, checked = false }) => {
  const setValue = e => {
    // console.log('target', e.target.)
    const { checked } = e.target;
    onChange({ checked, label })
  }
  return (
    <label className="container d-flex align-items-center cursor-pointer margin-bottom-sm padding-left-md position-relative">
      <span className="font-md">{label}</span>
      <input type="radio" checked={checked} label={label} name="radio" onChange={setValue} />
      <span className="checkmark border-r-circle"></span>
    </label>
  )
};

export const useRadioInputs = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const RadioInputs = ({ options, placeholder, className = '' }) => {
    const chevronRef = useRef(null);
    const dropdown = useRef(null);
    return (
      <div className={`radio-select-dropdown position-relative bg-white ${className}`}>
        <div onClick={() => dropdown.current.classList.toggle('open')}
          className="position-relative d-flex align-items-center justify-content-s-between slim-border padding-vertical-xsm padding-horizontal-sm border-r-5">
          <span className={`font-md margin-right-sm ${!selectedValue ? 'color-gray' : ''}`}>
            {selectedValue ? selectedValue.label : placeholder}
          </span>
          <div className="chevron-icon" ref={chevronRef}>
            <MdKeyboardArrowDown className={"font-lg color-gray"}/>
          </div>
        </div>
        <div ref={dropdown} className="padding-md input-dropdown bg-white">
          {options.map(option => {
            const { label } = option;
            return <RadioButton label={label} onChange={setSelectedValue} checked={selectedValue && selectedValue.label === label} />
          })}
        </div>
      </div>
    )
  }
  return { RadioInputs, selectedValue }
}

export const CustomSelect = ({ onChange, value ='hello world', placeholder }) => {
  return (
    <select value={value} onChange={onChange} placeholder={placeholder}>
      <option label="Option 1 label" value="Option 1 value">Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>
  )
}

export const SubmitButton = ({ isLoading, text, action, disabled, className = '', ...rest }) => {
  const buttonRef = useRef(null);
  const preventBeforeFire = (e) => {
    e.preventDefault();
    action()
  }
  return (
    <button disabled={disabled} ref={buttonRef} onClick={e => preventBeforeFire(e)} style={{minWidth: '100px'}} {...rest}
      className={`submit d-flex flex-center btn margin-bottom-md ${disabled ? 'cursor-not-allowed bg-color1-opacity-2' : 'bg-color1 ripple'} ${className}`}>
     {!isLoading
      ? <span className="btn-text font-sm color-white font-weight-600">{text}</span>
      : <ClipLoader size={20} color="#fff" loading={isLoading} />}
    </button>
  )
}