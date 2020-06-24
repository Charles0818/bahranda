import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../../../helpers';
import { Spinners } from '../../../components';

const { authActions: { signInRequest } } = actions;
const { useButtonSpinner } = Spinners;
const SignIn = ({ signin, isLoading, signInError }) => {
  const { LoadingSpinner } = useButtonSpinner(isLoading);
  return (
    <div>
      
    </div>
  )
}


const mapDispatchToProps = dispatch => 
  bindActionCreators({ signin: signInRequest }, dispatch)

const mapStateToProps = state => {
  const { isLoading, errors: { signIn: signInError } } = state.authReducer;
  return { isLoading, signInError }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)

