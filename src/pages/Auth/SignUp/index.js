import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../../../helpers';
import { Spinners, Form } from '../../../components';

const { authActions: { signUpRequest } } = actions;
const { useButtonSpinner } = Spinners;
const { FormField, PasswordField, useFormInput, SubmitButton, useCheckbox } =Form;
const SignUp = ({ signUp, isLoading, signUpError }) => {
  const { replace } = useHistory();
  const { LoadingSpinner } = useButtonSpinner(isLoading);
  const { value: first_name, handleUserInput: setFirstName, error: firstNameErr, isValid: firstNameIsValid } = useFormInput();
  const { value: last_name, handleUserInput: setLastName, error: lastNameErr, isValid: lastNameIsValid } = useFormInput();
  const { value: email, handleUserInput: setEmail, error: emailErr, isValid: emailIsValid } = useFormInput();
  const { value: password, handleUserInput: setPassword, error: passwordErr, isValid: passIsValid } = useFormInput();
  const { value: password_confirmation, handleUserInput: setPassword2 } = useFormInput();
  const { checked, Checkbox } = useCheckbox();
  const validatePassword = password !== password_confirmation ? 'Passwords do not match' : '';
  const validateFields = emailIsValid && passIsValid && firstNameIsValid &&
    lastNameIsValid &&  password === password_confirmation && checked;

  const handleSubmit = () => signUp({ first_name, last_name, email, password, password_confirmation }, replace)
  return (
    <main className="d-flex auth-container padding-horizontal-lg padding-vertical-md">
      <section className="auth-card border-r-10 padding-horizontal-lg padding-vertical-lg border_r_5">
        <div className="d-flex card-title margin-bottom-md">
          <Link to="/auth/signin" className="padding-sm cursor-pointer">
            <p className="text-center uppercase font-md">log in</p>
          </Link>
          <Link to="/auth/register" className="padding-sm active cursor-pointer">
            <p className="text-center uppercase font-md">sign up</p>
          </Link>
        </div>
        <form className="d-flex column fadeIn-animation" style={{width: '100%'}}>
          <div className="margin-bottom-md">
            <h1 className="font-weight-normal">Hello</h1>
            <p className="font-weight-300">Pease fill in your details</p>
          </div>
          <div className="d-flex justify-content-s-between" style={{width: '100%'}}>
            <FormField name="First name" value={first_name} onChange={setFirstName} placeholder="First name" err={firstNameErr}  className="flex-equal margin-right-sm" />
            <FormField name="Last name" value={last_name} onChange={setLastName} placeholder="Last name" err={lastNameErr} className="flex-equal" />
          </div>
          <FormField type="email" name="email" value={email} onChange={setEmail} placeholder="Email address" err={emailErr} />
          <PasswordField name="password" value={password} onChange={setPassword} placeholder="Password" err={passwordErr} />
          <PasswordField name="password" value={password_confirmation} onChange={setPassword2} placeholder="Confirm password" />
          <div className="d-flex nowrap margin-bottom-md">
            <Checkbox checked={checked} />
            <div className="d-flex column checkbox">
              <p className="margin-left-sm font-sm">
                I agree to 
                <Link to="/terms" className="color1 margin-horizontal-xsm">terms of services</Link>
                and
                <Link to="/privacy-policy" className="color1 margin-horizontal-xsm">Privacy policy</Link>
              </p>
            </div>
          </div>
          <div className="margin-bottom-sm">
            {signUpError && <p className="font-sm danger-text font-weight-600">Error: {signUpError}</p> }
          </div>
          <SubmitButton disabled={!validateFields} spinner={LoadingSpinner} text="Sign Up" action={handleSubmit} style={{width: '100%'}} />
        </form>
      </section>
    </main>
  )
}

const mapDispatchToProps = dispatch => 
  bindActionCreators({ signUp: signUpRequest }, dispatch)

const mapStateToProps = state => {
  const { isLoading, errors: { signUp: signUpError } } = state.authReducer;
  return { isLoading, signUpError }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
