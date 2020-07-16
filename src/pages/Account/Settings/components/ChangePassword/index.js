import React from 'react';
import { Form } from '../../../components';
import { actions } from '../../../helpers';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
const { accountActions: { changePasswordRequest } } = actions;
const { FormField, useFormInput, useSelectInput, PasswordField, SubmitButton} = Form;
const ChangePassword = ({ changePasswordRequest, token }) => {
  const { value: title, SelectInput } = useSelectInput();
  const { value: current_password, handleUserInput: setOldPass, isValid: oldPassIsValid, error } = useFormInput();
  const { value: new_password, handleUserinput: setNewPass, isValid: newPassIsValid, error: newPassErr } = useFormInput();
  const { value: new_password_confirmation, handleUserinput: setNewPass2, isValid: newPass2IsValid, error: newPass2Err } = useFormInput();
  const validatePasswords = new_password !== new_password_confirmation ? 'passwords do not match' : ''
  return (
    <section className="slim-border-2 padding-horizontal-md margin-bottom-md bg-white summary">
      <h2 className="font-weight-500 font-style-normal font-lg slim-border-bottom margin-bottom-md padding-vertical-sm">Change Password</h2>
      <div className="d-flex margin-bottom-sm">
        <FormField value={current_password} onChange={setOldPass} placeholder="Current password" className="flex-equal margin-right-sm" />
        <PasswordField value={new_password} onChange={setNewPass} placeholder="New password" className="flex-equal margin-right-sm" />
        <PasswordField value={new_password_confirmation} onChange={setNewPass2} placeholder="Confirm new password" err={validatePasswords} className="flex-equal" />
      </div>
      <SubmitButton text="SAVE CHANGES"
        action={() => changePasswordRequest({ new_password, current_password, new_password_confirmation }, token)}
      />
    </section>
  )
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ changePasswordRequest }, dispatch);
const mapTokenToProps = state => {
  return { token: state.authReducer.token }
}
export default connect(mapTokenToProps, mapDispatchToProps)(ChangePassword);