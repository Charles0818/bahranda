import { auth } from '../../types';

const {
  SIGN_IN_REQUEST, SIGN_UP_REQUEST,
  SIGN_IN_SUCCESS, SIGN_UP_SUCCESS,
  SIGN_IN_ERROR, SIGN_UP_ERROR, PIN_ERROR
} = auth;


export const signInRequest = (data) => {
  return {
    type: SIGN_IN_REQUEST,
    payload: { data }
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

export const signUpRequest = (data) => {
  return {
    type: SIGN_UP_REQUEST,
    payload: { data }
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

export const pinError = (error) => {
  return {
    type: PIN_ERROR,
    payload: { error }
  }
}