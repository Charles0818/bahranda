import React from 'react';
import { Form, HttpStatusNotification, Animation, SectionTitle } from '../../../components';
import { utils, actions } from '../../../helpers';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
const { useSelectInput, FormField, useFormInput, SubmitButton } = Form;
const { ScrollToBottom, FadeInLeft } = Animation
const { bankNames } = utils;
const { walletActions: { updateBankInfoRequest } } = actions;
const AccountInformation = ({
  bankInfo, token, updateBankInfoRequest, loading, error, success
}) => {
  const { value: bankName, SelectInput } = useSelectInput(bankInfo.bank_name);
  const { value: account_no, handleUserInput: setAccountNo, isValid: accountNoIsValid, error: accountNoErr } = useFormInput(bankInfo.account_no);
  const { value: account_name, handleUserInput: setAccountName, isValid: accountNameIsValid, error: accountNameErr } = useFormInput(bankInfo.account_name);
  const { value: pin, handleUserInput: setPin, isValid: pinIsValid, error: pinErr } = useFormInput();
  const validateAllFields = bankName && pinIsValid && accountNoIsValid && accountNameIsValid
  return (
    <section className="account-information slim-border-2 padding-horizontal-md margin-bottom-md bg-white activity">
      <SectionTitle title="Bank Details" />
      <div className="d-flex justify-content-s-between">
        <SelectInput isSearchable={true} label="Bank name" placeholder="Select bank" options={[...bankNames]} className="flex-equal margin-right-sm" />
        <FormField value={account_no} name="account number" onChange={setAccountNo} placeholder="Account number" err={accountNoErr} isValid={accountNoIsValid} min={10} max={10} className="flex-equal margin-right-sm" />
        <FormField value={account_name} name="Account name" onChange={setAccountName} placeholder="Account name" err={accountNameErr} isValid={accountNameIsValid} className="flex-equal" />
      </div>
      <FormField value={pin} name="Wallet pin" onChange={setPin} placeholder="wallet pin" err={pinErr} className="pin-field" min={4} max={4} />
      <SubmitButton action={() => updateBankInfoRequest({ pin, account_name, account_no, bank_name: bankName.value }, token)}
        text="SUBMIT CHANGES" isLoading={loading} disabled={!validateAllFields} />
        {(error || success) && <HttpStatusNotification  message={error || success} status={error ? 'error' : 'success'}  />}
    </section>
  )
}

const mapBankDetailsToProps = state => {
  const {
    bankInfo,
    loadingIndicators: { bankInfo: loading },
    errors: { bankInfo: error },
    success: { bankInfo: success }
  } = state.walletReducer;
  const { token } = state.authReducer;
  return { bankInfo, token, loading, error, success }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateBankInfoRequest }, dispatch)
export default connect(mapBankDetailsToProps, mapDispatchToProps)(AccountInformation);