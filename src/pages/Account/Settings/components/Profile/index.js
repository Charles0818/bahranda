import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form } from '../../../components';
import { actions } from '../../../../../helpers'
const { FormField, useFormInput, useSelectInput, SubmitButton } = Form;

const { accountActions: { updateProfileRequest } } = actions;
const Profile = ({ profile, updateProfileRequest, token }) => {
  const { value: sex, SelectInput } = useSelectInput(profile.sex);
  const { value: address, handleUserInput: setAddress, isValid: addressIsValid, error: addressErr } = useFormInput();
  const { value: first_name, handleUserInput: setFirstName, isValid: firstNameIsValid, error: firstNameErr } = useFormInput(profile.first_name);
  const { value: last_name, handleUserInput: setLastName, isValid: lastNameIsValid, error: lastNameErr } = useFormInput(profile.last_name);
  const { value: phone, handleUserInput: setPhone, isValid: phoneIsValid, error: phoneErr } = useFormInput(profile.phone ? profile.phone : '');
  const { value: email, handleUserInput: setEmail, error: emailErr, isValid: emailIsValid } = useFormInput(profile.email);
  return (
    <section className="slim-border-2 padding-horizontal-md margin-bottom-md bg-white summary">
      <h2 className="font-weight-500 font-style-normal font-lg slim-border-bottom margin-bottom-md padding-vertical-sm">Profile</h2>
      <div className="d-flex">
        <SelectInput label="Sex" options={['male', 'female']} className=" margin-right-sm name-title" />
        <FormField name="First name" value={first_name} onChange={setFirstName} placeholder="First name" err={firstNameErr}  className="flex-equal margin-right-sm" />
        <FormField name="Last name" value={last_name} onChange={setLastName} placeholder="Last name" err={lastNameErr} className="flex-equal" />
      </div>
      <div className="d-flex">
        <FormField type="tel" name="phone" value={phone} onChange={setPhone} placeholder="Phone" err={phoneErr} className="flex-equal margin-right-sm" />
        <FormField type="email" name="email" value={email} onChange={setEmail} placeholder="Email address" err={emailErr} disabled={true} className="flex-equal" />
      </div>
      <FormField name="Address" value={address} onChange={setAddress} placeholder="Address" err={addressErr} />
      <SubmitButton text="SAVE CHANGES"
        action={() => updateProfileRequest({ first_name, last_name, sex, phone }, token)}
      />
    </section>
  )
}

const mapStateToProps = state => {
  const { profile} = state.accountReducer;
  const { token } = state.authReducer;
  return { profile, token }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateProfileRequest }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
