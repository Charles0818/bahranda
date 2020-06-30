import React from 'react';
import { Form } from '../../../components';

const { useSelectInput, FormField, useFormInput, SubmitButton } = Form;
const AccountInformation = () => {
  const { value, SelectInput } = useSelectInput();
  const { value: accountNo, handleUserInput: setAccountNo, isValid: accountNoIsValid, error: accountNoErr } = useFormInput();
  const { value: accountName, handleUserInput: setAccountName, isValid: accountNameIsValid, error: accountNameErr } = useFormInput();
  return (
    <section className="slim-border-2 padding-horizontal-md margin-bottom-md bg-white activity">
      <h2 className="font-weight-500 font-style-normal font-lg slim-border-bottom padding-vertical-sm margin-bottom-md">Account Information</h2>
      <div className="d-flex justify-content-s-between">
        <SelectInput label="Bank name" placeholder="Select bank" options={['Guaranty Trust Bank', 'Access Bank']} className="flex-equal margin-right-sm" />
        <FormField value={accountNo} onChange={setAccountNo} placeholder="Account number" err={accountNoErr} className="flex-equal margin-right-sm" />
        <FormField value={accountName} onChange={setAccountName} placeholder="Account name" err={accountNameErr} className="flex-equal" />
      </div>
      <SubmitButton text="SUBMIT CHANGES"/>
    </section>
  )
}

export default AccountInformation;