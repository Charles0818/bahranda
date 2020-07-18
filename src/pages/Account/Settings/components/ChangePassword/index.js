import React from 'react';
import { Form, HttpStatusNotification } from '../../../components';
import { actions } from '../../../helpers';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
const { accountActions: { changePasswordRequest } } = actions;
const { FormField, useFormInput, useSelectInput, PasswordField, SubmitButton} = Form;
const ChangePassword = ({ changePasswordRequest, token, loading, success, error }) => {
  const { value: current_password, handleUserInput: setOldPass, isValid: oldPassIsValid, error: oldPassErr } = useFormInput();
  const { value: new_password, handleUserInput: setNewPass, isValid: newPassIsValid, error: newPassErr } = useFormInput();
  const { value: new_password_confirmation, handleUserInput: setNewPass2, isValid: newPass2IsValid} = useFormInput();
  const validatePasswords = new_password !== new_password_confirmation ? 'Passwords do not match' : '';
  const validateAllFields = oldPassIsValid && newPassIsValid && new_password === new_password_confirmation
  return (
    <section className="slim-border-2 padding-horizontal-md margin-bottom-md bg-white summary">
      <h2 className="font-weight-500 font-style-normal font-lg slim-border-bottom margin-bottom-md padding-vertical-sm">Change Password</h2>
      <form className="d-flex margin-bottom-sm">
        <FormField name="Password"  value={current_password} onChange={setOldPass} placeholder="Current password" err={oldPassErr} className="flex-equal margin-right-sm" autoComplete="new-password" />
        <PasswordField name="password" value={new_password} onChange={setNewPass} placeholder="New password" err={newPassErr} className="flex-equal margin-right-sm" autoComplete="new-password" />
        <PasswordField name="password" value={new_password_confirmation} onChange={setNewPass2} placeholder="Confirm new password" err={validatePasswords} className="flex-equal" autoComplete="new-password" />
      </form>
      <SubmitButton text="SAVE CHANGES" isLoading={loading} disabled={!validateAllFields}
        action={() => changePasswordRequest({ new_password, current_password, new_password_confirmation }, token)}
      />
      {(error || success) && <HttpStatusNotification  message={error || success} status={error ? 'error' : 'success'}  />}
    </section>
  )
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ changePasswordRequest }, dispatch);
const mapStateToProps = state => {
  const { loadingIndicators, success, errors } = state.accountReducer;
  const { token } = state.authReducer;
  console.log('new AccoutReducer found', state.accountReducer)
  return {
    token, loading: loadingIndicators.changePassword,
    success: success.changePassword,
    error: errors.changePassword
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);