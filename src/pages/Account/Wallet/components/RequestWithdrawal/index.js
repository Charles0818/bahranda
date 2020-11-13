import React, { useCallback, useState, useRef, useEffect } from 'react';
import { Form, HttpStatusNotification } from '../../../components';
import { utils, actions } from '../../../helpers';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdKeyboardArrowDown } from 'react-icons/md';
import PinFields from '../PinField';
const { CurrencyInput, SubmitButton } = Form;
const { checkObjectProperties } = utils;
const { walletActions: { requestWithdrawalRequest } } = actions;
const RequestWithdrawal = ({
  hasBankInfo, requestWithdrawal, token, loading, error, success
}) => {
  const [pin, setPin] = useState(['', '', '', '']);
  const [amount, setAmount] = useState(0);
  const validateAllFields = !pin.includes('' || undefined) && amount;
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
  const toggleAccordion = useCallback(() => {
    setActiveState(!setActive ? true : false);
  }, [setActive])
  const handleWithdrawal = useCallback(() => {
    if(setActive) {
      requestWithdrawal({ pin: pin.join(''), amount: amount / 100 }, token)
    } else toggleAccordion()
  }, [setActive, pin, amount, token, requestWithdrawal, toggleAccordion])
  return (
    <section className="request-withdrawal">
      <div className="d-flex justify-content-end">
        <button onClick={toggleAccordion} className="chevron-icon cursor-pointer" ref={chevronRef}>
          <MdKeyboardArrowDown className={"font-lg color-gray"}/>
        </button>
      </div>
      <div ref={contentRef} className="form-content d-flex justify-content-s-between">
        <CurrencyInput label="Amount" value={amount} onValueChange={setAmount} placeholder="Account number" className="flex-equal margin-right-sm" />
        <PinFields setPinArray={setPin} pinArray={pin} label="Wallet Pin" />
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