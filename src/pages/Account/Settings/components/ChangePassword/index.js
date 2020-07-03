import React from 'react';
import { Form } from '../../../components';

const { FormField, useFormInput, useSelectInput, PasswordField, SubmitButton} = Form;
const ChangePassword = () => {
  const { value: title, SelectInput } = useSelectInput();
  const { value: oldPassword, handleUserInput: setOldPass, isValid: oldPassIsValid, error } = useFormInput();
  const { value: newPassword, handleUserinput: setNewPass, isValid: newPassIsValid, error: newPassErr } = useFormInput();
  const { value: newPassword2, handleUserinput: setNewPass2, isValid: newPass2IsValid, error: newPass2Err } = useFormInput();
  return (
    <section className="slim-border-2 padding-horizontal-md margin-bottom-md bg-white summary">
      <h2 className="font-weight-500 font-style-normal font-lg slim-border-bottom margin-bottom-md padding-vertical-sm">Change Password</h2>
      <div className="d-flex margin-bottom-sm">
        <FormField value={oldPassword} onChange={setOldPass} placeholder="Current password" className="flex-equal margin-right-sm" />
        <PasswordField value={newPassword} onChange={setNewPass} placeholder="New password" className="flex-equal margin-right-sm" />
        <PasswordField value={newPassword2} onChange={setNewPass2} placeholder="Confirm new password" className="flex-equal" />
      </div>
      <SubmitButton text="SAVE CHANGES" />
    </section>
  )
}

export default ChangePassword;