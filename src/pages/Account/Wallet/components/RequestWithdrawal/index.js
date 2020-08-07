import React, { useCallback, useState, useRef, useEffect } from 'react';
import { Form, HttpStatusNotification } from '../../../components';
import { utils, actions } from '../../../helpers';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdKeyboardArrowDown } from 'react-icons/md';
const { CurrencyInput, FormField, useFormInput, SubmitButton } = Form;
const { checkObjectProperties } = utils;
const { walletActions: { requestWithdrawalRequest } } = actions;
const RequestWithdrawal = ({
  hasBankInfo, requestWithdrawal, token, loading, error, success
}) => {
  // const { value: amount, handleUserInput: setAmount, isValid: amountIsValid, error: amountErr } = useFormInput(0);
  const [amount, setAmount] = useState(0);
  const { value: pin, handleUserInput: setPin, isValid: pinIsValid, error: pinErr } = useFormInput();
  const validateAllFields = pinIsValid && amount;
  const [setActive, setActiveState] = useState(false);
  const contentRef = useRef(null);
  const chevronRef = useRef(null);
  useEffect(() => {
    if(setActive) {
      chevronRef.current.classList.add('active');
      contentRef.current.classList.add('active')
    } else {
      chevronRef.current.classList.remove('active');
      contentRef.current.classList.remove('active')
    }
  }, [setActive])
  const toggleAccordion = () => {
    setActiveState(!setActive ? true : false);
  }
  const handleWithdrawal = useCallback(() => {
    if(setActive) {
      // if(!hasBankInfo) {
      //   window.scrollTo(0, document.querySelector('account-information').offsetTop)
      // }
      requestWithdrawal({ pin, amount }, token)
    } else toggleAccordion()
  }, [hasBankInfo, setActive, pin, amount])
  return (
    <section className="request-withdrawal">
      <div className="d-flex justify-content-end">
        <button onClick={toggleAccordion} className="chevron-icon cursor-pointer" ref={chevronRef}>
          <MdKeyboardArrowDown className={"font-lg color-gray"}/>
        </button>
      </div>
      <div ref={contentRef} className="form-content d-flex justify-content-s-between">
        <CurrencyInput label="Amount" value={amount} onValueChange={setAmount} placeholder="Account number" className="flex-equal margin-right-sm" />
        <FormField value={pin} name="Wallet pin" onChange={setPin} placeholder="wallet pin" err={pinErr} isValid={pinIsValid} className="pin-field" />
      </div>
      <SubmitButton action={handleWithdrawal}
        text="Request Withdrawal" isLoading={loading} disabled={!validateAllFields && setActive} />
      {(error || success) && <HttpStatusNotification  message={error || success} status={error ? 'error' : 'success'}  />}
    </section>
  )
}

const mapStateToProps = state => {
  const {
    bankInfo,
    loadingIndicators: { requestWithdrawal: loading },
    errors: { requestWithdrawal: error },
    success: { requestWithdrawal: success }
  } = state.walletReducer;
  const { token } = state.authReducer;
  const hasBankInfo = checkObjectProperties(bankInfo)
  return { loading, token, hasBankInfo, error, success }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestWithdrawal: requestWithdrawalRequest }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RequestWithdrawal);