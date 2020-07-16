import React, { useState } from 'react';
import { Form } from '../../../components';
import { utils } from '../../helpers';

const { formatting: { formatCurrency } } = utils;
const { useRadio, useFormInput, FormField, RadioButton, useRadioInputs } = Form;
const FillInvestment = () => {
  const { RadioInputs, selectedValue } = useRadioInputs();
  const { value: qty, handleUserInput: setQty } = useFormInput();
  console.log('selectedValue', selectedValue)
  return (
    <section className="">
      <form className="">
        <h2 className="font-lg margin-bottom-md">Commodity name</h2>
        <div className="d-flex">
          <div className="d-flex align-items-center flex-equal margin-right-md">
            <div className="d-flex column flex-equal">
              <span className="margin-right-sm font-sm">Cost per quantity</span>
              <span className="font-md color1">{formatCurrency(5000)}</span>
            </div>
            <FormField type="number" value={qty} label="Select Qty" onChange={setQty} className="flex-equal" />
          </div>
          <div className="flex-equal d-flex column">
            <span className="font-sm">Duration</span>
            <RadioInputs options={[{label: 'Hello'}, {label: 'Hi'}]} placeholder="Greetings" />
          </div>
        </div>
      </form>
    </section>
  )
}

export default FillInvestment;
