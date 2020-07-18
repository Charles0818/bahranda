import React from 'react';
import { Form } from '../../../components';
import { actions } from '../../../helpers';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
const { FormField, useFormInput, SubmitButton } = Form;
const { walletActions: { setPinRequest } } = actions;
const SetPin = ({ setPinRequest, token, loading }) => {
  const { value: pin, handleUserInput: setPin, isValid: pinIsValid, error: pinErr } = useFormInput();
  return (
    <section className="slim-border-2 padding-horizontal-md margin-bottom-md bg-white activity">
      <h2 className="font-weight-500 font-style-normal font-lg slim-border-bottom padding-vertical-sm margin-bottom-md">Set Withdrawal Pin</h2>
      <div className="d-flex justify-content-s-between">
        <FormField value={pin} onChange={setPin} placeholder="Withdrawal Pin" err={pinErr} className="flex-equal" />
      </div>
      <SubmitButton action={() => setPinRequest({ pin }, token)}
        text="Set Pin" isLoading={loading} disabled={!pinIsValid} />
    </section>
  )
};

const mapPinToProps = state => {
  const { loadingIndicators: { setPin: loading } } = state.walletReducer;
  const { token } = state.authReducer;
  return { token, loading }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setPinRequest }, dispatch)
export default connect(mapPinToProps, mapDispatchToProps)(SetPin);