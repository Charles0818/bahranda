import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../../../helpers';
import { Spinners } from '../../../components';

const { authActions: { signUpRequest } } = actions;
const { useButtonSpinner } = Spinners;
const SignUp = ({ signUp, isLoading, signUpError }) => {
  const { LoadingSpinner } = useButtonSpinner(isLoading);
  return (
    <div></div>
  )
}

const mapDispatchToProps = dispatch => 
  bindActionCreators({ signUp: signUpRequest }, dispatch)

const mapStateToProps = state => {
  const { isLoading, errors: { signUp: signUpError } } = state.authReducer;
  return { isLoading, signUpError }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
