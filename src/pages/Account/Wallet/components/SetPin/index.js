import React from 'react';
import { Form, HttpStatusNotification } from '../../../components';
import { actions } from '../../../helpers';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TiWarning } from 'react-icons/ti'
const { FormField, useFormInput, SubmitButton } = Form;
const { walletActions: { setPinRequest } } = actions;
const SetPin = ({ setPinRequest, token, loading, success, error }) => {
  const { value: pin, handleUserInput: setPin, isValid: pinIsValid, error: pinErr } = useFormInput();
  return (
    <section className="slim-border-2 padding-horizontal-md margin-bottom-md bg-white activity">
      <h2 className="font-weight-500 font-style-normal font-lg slim-border-bottom padding-vertical-sm margin-bottom-md">Set wallet pin</h2>
      <div className="d-flex margin-bottom-sm">
        <TiWarning className="font-lg margin-right-sm color-yellow" />
        <article className="d-flex column">
          <p className="text-content font-sm">Be aware that you only have to set your wallet pin one time</p>
        </article>
      </div>
      <div className="d-flex justify-content-s-between">
        <FormField value={pin} onChange={setPin} placeholder="wallet pin" err={pinErr} className="flex-equal" />
      </div>
      <SubmitButton action={() => setPinRequest({ pin }, token)}
        text="Set Pin" isLoading={loading} disabled={!pinIsValid} />
        {(error || success) && <HttpStatusNotification  message={error || success} status={error ? 'error' : 'success'}  />}
    </section>
  )
};

const mapPinToProps = state => {
  const {
    loadingIndicators: { setPin: loading },
    success: { setPin: success },
    errors: { setPin: error }
  } = state.walletReducer;
  const { token } = state.authReducer;
  return { token, loading, success, error }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setPinRequest }, dispatch)
export default connect(mapPinToProps, mapDispatchToProps)(SetPin);