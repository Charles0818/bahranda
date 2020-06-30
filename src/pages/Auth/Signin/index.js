import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../../../helpers';
import { Spinners, Form } from '../../../components';
import '../auth.scss';
const { authActions: { signInRequest } } = actions;
const { useButtonSpinner } = Spinners;
const { FormField, PasswordField, useFormInput, SubmitButton, useCheckbox } =Form;
const SignIn = ({ signIn, isLoading, signInError }) => {
  const { replace } = useHistory()
  const { LoadingSpinner } = useButtonSpinner(isLoading);
  const { value: email, handleUserInput: setEmail, error: emailErr, isValid: emailIsValid } = useFormInput();
  const { value: password, handleUserInput: setPassword, error: passwordErr, isValid: passIsValid } = useFormInput();
  const { checked, Checkbox } = useCheckbox();
  const validateFields = emailIsValid && passIsValid;
  const handleSubmit = () => signIn({ email, password }, replace)
  return (
    <main className="d-flex auth-container padding-horizontal-lg padding-vertical-md">
      <section className="auth-card border-r-10 padding-horizontal-lg padding-vertical-lg border_r_5">
        <div className="d-flex card-title margin-bottom-md">
          <Link to="/auth/signin" className="padding-sm active cursor-pointer">
            <p className="text-center uppercase font-md">log in</p>
          </Link>
          <Link to="/auth/register" className="padding-sm cursor-pointer">
            <p className="text-center uppercase font-md">sign up</p>
          </Link>
        </div>
        <form className="d-flex column fadeIn-animation" style={{width: '100%'}}>
          <div className="margin-bottom-md">
            <h1 className="font-weight-normal">Hello</h1>
            <p className="font-weight-300">Pease fill in your login details</p>
          </div>
          <FormField type="email" name="email" value={email} onChange={setEmail} placeholder="Email address" err={emailErr} />
          <PasswordField name="password" value={password} onChange={setPassword} placeholder="Password" err={passwordErr} />
          <div className="margin-bottom-sm">
            {signInError && <p className="font-sm danger-text font-weight-600">Error: {signInError}</p> }
          </div>
          <Link to="/auth/forgot-password" className="color1 margin-bottom-sm">Forgot password ?</Link>
          <SubmitButton disabled={!validateFields} spinner={LoadingSpinner} text="Log in" action={handleSubmit} style={{width: '100%'}} />
        </form>
      </section>
    </main>
  )
}


const mapDispatchToProps = dispatch => 
  bindActionCreators({ signIn: signInRequest }, dispatch)

const mapStateToProps = state => {
  const { isLoading, errors: { signIn: signInError } } = state.authReducer;
  return { isLoading, signInError }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)

