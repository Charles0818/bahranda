import { useState, useCallback } from 'react';

export const useFormInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(value && value.length > 0 ? true : false)
  const handleUserInput = (event) => {
    const { target: { name, value } } = event;
    setValue(value);
    setIsValid(FormValidation(name, value, setError))
  };
  return { value, setValue, handleUserInput, error, setError, isValid }
}

export const handleKeyDown = (value, max, onValueChange) => e => {
  const DELETE_KEY_CODE = 8;
  const { key, keyCode, target: { name } } = e;
  console.log('handleKeyDown', name,'key', key);
  const exceptionalNames = name === inputNames.email || name === inputNames.date;
  console.log('exceptionalNames', exceptionalNames)
  const checkAgainst = exceptionalNames ? value : key;
   if (
    ((value === 0 || value === '') && !validateInput(name, checkAgainst))
    || ((value !== 0 || value !== '') && !validateInput(name, checkAgainst) && keyCode !== DELETE_KEY_CODE)
  ) {
    if(!exceptionalNames) return;
  }
  const valueString = value.toString();
    let nextValue;
    if (keyCode !== DELETE_KEY_CODE) {
      nextValue = (value === 0 || value === '') ? key : `${valueString}${key}`;
    } else {
      const nextValueString = valueString.slice(0, -1);
      nextValue = nextValueString === '' || undefined ? '' : nextValueString;
    }
    if (max && nextValue > max) return;
    onValueChange(nextValue)
}

export const useFileInput = () => {
  const [ file, setFile ] = useState(null);
  const [ fileUrl, setFileUrl ] = useState(null);
  const handleFile = (event) => {
    const { target: {  files } } = event;
    setFileUrl(URL.createObjectURL(files[0]));
    setFile(files[0])
  }
  return { handleFile, file, fileUrl }
}

export const inputNames = {
  email: 'email',
  password: 'password',
  phone: 'phone',
  date: 'date',
  subject: 'subject',
  message: 'message',
  account: 'account number',
  amount: 'amount'
}


const validateInput = (name, key) => {
  const regex = {
    email: /^([a-zA-Z\d-\.\_]+)@([a-zA-Z\d-]+)\.([a-zA-Z]{2,8})(\.[a-zA-Z]{2,8})?$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d][\w~@#$%^&*+=`|{}:;!.?\"()\[\]-]{7,}$/,
    phone:/^[0-9\.\-\/\(\)\,\ ]+$/,
    date:/^(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i,
    CC_date: /^(0?[1-9]|1[0-2])[/](\d{2})$/,
    CC_holderName: /^([a-zA-Z]{3,}) ([a-zA-Z]{3,})$/,
    text: /^[a-zA-Z]+$/,
    alphanumeric: /^[a-zA-Z0-9\,\ \.\_]+$/g,
    digits: /^\d+$/,
    money: /^\d\.\,+$/,
  }
  let isValid;
  switch(name) {
    case inputNames.email :
      isValid = validateWithRegex(key, regex.email)
      return isValid
    case inputNames.name: 
      isValid = validateWithRegex(key, regex.text)
      return isValid;
    case inputNames.subject:
      isValid = validateWithRegex(key, regex.alphanumeric)
      return isValid;
    case inputNames.password:
      isValid = validateWithRegex(key, regex.password)
      return isValid;
    case inputNames.phone:
      isValid = validateWithRegex(key, regex.phone)
      return isValid;
    case inputNames.date:
      isValid = validateWithRegex(key, regex.date)
      return isValid;
    case inputNames.account:
      isValid = validateWithRegex(key, regex.digits) // set minimum and maximum of 10 for this
      return isValid;
    case inputNames.amount:
      isValid = validateWithRegex(key, regex.money)
      return isValid;
    default:
      isValid = validateWithRegex(key, regex.alphanumeric)
      return isValid;
  }
}

const validateWithRegex = (value, regex) => {
  const isValid = regex.test(value) 
  // && /^[A-Za-z0-9 _]/.test(value)
  return isValid
}

const validateLength = (value, min, max) => {
  if (max) return value.length > 0 && value.length <= max;
  if(min) return value.length > 0 && value.length >= min;
  if(min && max) return value.length > 0 && value.length >= min && value.length <= max;
  return value.length > 0
}

const FormValidation = (name, value, setError) => {;
  const input_types = {
    email: /^([a-zA-Z\d-\.\_]+)@([a-zA-Z\d-]+)\.([a-zA-Z]{2,8})(\.[a-zA-Z]{2,8})?$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d][\w~@#$%^&*+=`|{}:;!.?\"()\[\]-]{7,}$/,
    phone:/^[0-9\.\-\/\(\)\,\ ]+$/,
    date:/^(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i,
    CC_date: /^(0?[1-9]|1[0-2])[/](\d{2})$/,
    CC_holderName: /^([a-zA-Z]{3,}) ([a-zA-Z]{3,})$/,
    text: /^[a-zA-Z]+$/,
    alphanumeric: /^[a-zA-Z0-9\,\ \.\_]+$/g,
    digits: /^\d+$/,
    money: /^\d\.\,+$/,
  }
  const errorMessage = {
    emailErr: "Email should contain '@' and at least one '.'",
    passwordErr: 'Password must be at least 8 characters, containing alphanumerics',
    name: "Name must contain only alphabelts",
    usernameErr: "username must contain only alphanumeric characters",
    subject: 'Subject should contain only alphanumeric characters',
    message: 'Message should contain only alphaNumeric characters',
    dateErr: 'Invalid date format!',
    phoneErr: 'Incorrect phone number',
    CC_dateErr: 'Invalid expiry date',
    CC_digitsErr: 'Invalid card number',
    zipcodeErr: 'Invalid zipcode, should be 5 digits',
    accountErr: 'Account number is invalid'
  };
  Object.freeze([input_types, errorMessage])

  const { emailErr, subject, dateErr, passwordErr, phoneErr, usernameErr, zipcodeErr, accountErr } = errorMessage;
  const { email, text, date, password, phone, alphanumeric, digits, money } = input_types;
  let isValid = null;

  switch(name) {
    case 'email' :
      isValid = validateWithRegex(value, email) && validateLength(value);
      !isValid ? setError(emailErr) : setError('')
      return isValid
    case 'name': 
      isValid = validateWithRegex(value, text) && validateLength(value);
      !isValid ? setError(errorMessage.name) : setError('')
      return isValid;
    case 'username': 
      isValid = validateWithRegex(value, alphanumeric) && validateLength(value);
      !isValid ? setError(usernameErr) : setError('')
      return isValid;
    case 'subject':
      isValid = validateWithRegex(value, text) && validateLength(value)
      !isValid ? setError(subject) : setError('')
      return isValid;
    case 'password':
      isValid = validateWithRegex(value, password) && validateLength(value, 8)
      !isValid ? setError(passwordErr) : setError('')
      return isValid;
    case 'phone':
      isValid = validateWithRegex(value, phone) && validateLength(value, null, 15)
      !isValid ? setError(phoneErr) : setError('')
      return isValid;
    case 'zipcode':
      isValid = digits.test(value) && value.length === 5
      !isValid ? setError(zipcodeErr) : setError('')
      return isValid;
    case 'date':
      isValid = validateWithRegex(value, date) && validateLength(value)
      !isValid ? setError(dateErr) : setError('')
      return isValid;
    case 'account':
      isValid = validateWithRegex(value, digits) && validateLength(value, 10, 10)
      !isValid ? setError(accountErr) : setError('')
      return isValid;
    case 'amount':
      isValid = validateWithRegex(value, money) && validateLength(value)
      !isValid ? setError('Invalid amount') : setError('')
      return isValid;
    default:
      isValid = validateWithRegex(value, alphanumeric) && validateLength(value)
      !isValid ? setError(`${name} is invalid `) : setError('')
      return isValid;
  }
}
