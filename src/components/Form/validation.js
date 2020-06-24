import { useState } from 'react';

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

const validateWithRegex = (value, regex) => {
  const isValid = regex.test(value) && /^[A-Za-z0-9 _]/.test(value)
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
    email: /^([a-zA-Z\d-]+)@([a-zA-Z\d-]+)\.([a-zA-Z]{2,8})(\.[a-zA-Z]{2,8})?$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d][\w~@#$%^&*+=`|{}:;!.?\"()\[\]-]{7,}$/,
    phone:/^[0-9\.\-\/\(\)\,\ ]+$/,
    date:/^(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i,
    CC_date: /^(0?[1-9]|1[0-2])[/](\d{2})$/,
    CC_holderName: /^([a-zA-Z]{3,}) ([a-zA-Z]{3,})$/,
    text: /^[a-zA-Z]+$/,
    alphanumeric: /^[a-zA-Z0-9\,\ \.]+$/g,
    digits: /^\d+$/,
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
    zipcodeErr: 'Invalid zipcode, should be 5 digits'
  };
  Object.freeze([input_types, errorMessage])

  const { emailErr, subject, dateErr, passwordErr, phoneErr, usernameErr, CC_digitsErr, CC_dateErr, zipcodeErr } = errorMessage;
  const { email, text, date, password, phone, alphanumeric, digits, CC_holderName, CC_date } = input_types;
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
    default:
      isValid = validateWithRegex(value, alphanumeric) && validateLength(value)
      !isValid ? setError(`${name} is invalid `) : setError('')
      return isValid;
  }
}

