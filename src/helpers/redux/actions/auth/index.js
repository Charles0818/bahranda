import { auth } from '../../types';

const {
  SIGN_IN_REQUEST, SIGN_UP_REQUEST,
  SIGN_IN_SUCCESS, SIGN_UP_SUCCESS,
  SIGN_IN_ERROR, SIGN_UP_ERROR,
  PIN_ERROR, CONFIRM_PIN,
  ISLOADING, CONFIRM_PIN_SUCCESS
} = auth;


export const signInRequest = (data, redirect) => {
  return {
    type: SIGN_IN_REQUEST,
    payload: { data, redirect }
  }
}

export const signInSuccess = (data) => {
  return {
    type: SIGN_IN_SUCCESS,
    payload: { data }
  }
}

export const signInError = (error) => {
  return {
    type: SIGN_IN_ERROR,
    payload: { error }
  }
}

export const signUpRequest = (data, redirect) => {
  return {
    type: SIGN_UP_REQUEST,
    payload: { data, redirect }
  }
}

export const signUpSuccess = (email) => {
  return {
    type: SIGN_UP_SUCCESS,
    payload: { email }
  }
}

export const signUpError = (error) => {
  return {
    type: SIGN_UP_ERROR,
    payload: { error }
  }
}

export const confirmPin = (data, redirect) => {
  return {
    type: CONFIRM_PIN,
    payload: { data, redirect }
  }
}

export const confirmPinSuccess = () => {
  return {
    type: CONFIRM_PIN_SUCCESS,
  }
}

export const pinError = (error) => {
  return {
    type: PIN_ERROR,
    payload: { error }
  }
}



export const setIsLoading = (isLoading) => {
  return {
    type: ISLOADING,
    payload: { isLoading }
  }
}