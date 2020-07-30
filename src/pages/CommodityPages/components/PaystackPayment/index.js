import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form } from '../../../components'
import { usePaystackPayment } from 'react-paystack';
import { actions } from '../../helpers'
const { commodityActions: { purchaseCommodityRequest, purchaseCommodityFailure } } = actions;
const { SubmitButton } = Form;

const PaystackPayment = ({ token, purchase, amount, email, firstname, lastname, loading, commodityDetails }) => {
  const config = {
    reference: (new Date()).getTime(),
    publicKey: 'pk_test_582ab979ff87697ecdec6aa65832d03e9e047751',
  };
  const initializePayment = usePaystackPayment({
    email, metadata: { firstname, lastname },
    ...config,
    amount: amount * 100
  });
  const onSuccess = useCallback(res => {
    console.log('res from paystack', res);
    const { reference: transaction_ref } = res;
    const { qty: quantity, id: commodity_id } = commodityDetails
    purchase({ transaction_ref, quantity, commodity_id }, token)
  }, []);
  const onClose = useCallback(res => {
    console.log('onClose res from paystack', res)
  }, []);
  console.log('this is the amount', amount)
  return (
    <SubmitButton
      disabled={loading}
      isLoading={loading}
      action={() => initializePayment(onSuccess, onClose)}
      text="Purchase"
    />
  );
}

const mapStateToProps = state => {
  const { token } = state.authReducer;
  const { email, first_name: firstname, last_name: lastname } = state.accountReducer.profile;
  const { loadingIndicators: { purchaseCommodity: loading } } = state.commodityReducer;
  return { token, email, firstname, lastname, loading };
}

const mapDispatchToProps = dispatch => 
  bindActionCreators({
    purchase: purchaseCommodityRequest,
    purchaseFailure: purchaseCommodityFailure
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PaystackPayment)