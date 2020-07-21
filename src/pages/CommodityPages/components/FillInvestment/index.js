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
    <section className="bg-white padding-md">
      <form className="">
        <h2 className="font-lg margin-bottom-md">Commodity name</h2>
        <div className="d-flex column justify-content-s-between" style={{width: '100%'}}>
          <div className="d-flex align-items-center flex-equal margin-bottom-md" style={{width: '100%'}}>
            <div className="d-flex column flex-equal">
              <span className="margin-right-sm font-weight-500 font-sm">Price per bag</span>
              <span className="font-md color1">{formatCurrency(5000)}</span>
            </div>
            <div className="d-flex column flex-equal">
              <span className="margin-right-sm font-weight-500 font-sm">Percentage Return</span>
              <span className="font-md color1">15%</span>
            </div>
            <div className="d-flex column flex-equal">
              <span className="margin-right-sm font-weight-500 font-sm">Available Quantity</span>
              <span className="font-md color1">98</span>
            </div>
          </div>
          <PriceBreakDown />
          <div className="d-flex flex-equal">
            <div className="flex-equal d-flex column margin-right-md">
              <span className="font-sm">Duration</span>
              <RadioInputs options={[{label: 'Hello'}, {label: 'Hi'}]} placeholder="Greetings" />
            </div>
            <FormField type="number" value={qty} label="Select Qty" onChange={setQty} className="flex-equal" />
          </div>
        </div>
      </form>
    </section>
  )
}

const PriceBreakDown = () => {
  return (
    <section>
      <div className="d-flex align-items-center margin-bottom-md">
        <div className="d-flex column margin-right-md">
          <span className="margin-right-sm font-weight-500 font-sm">Commodity Cost</span>
          <span className="font-md color1">{formatCurrency(3000)}</span>
        </div>
        <div className="d-flex column margin-right-md">
          <span className="margin-right-sm font-weight-500 font-sm">State Tax</span>
          <span className="font-md color1">{formatCurrency(34.56)}</span>
        </div>
        <div className="d-flex column margin-right-md">
          <span className="margin-right-sm font-weight-500 font-sm">Transportation</span>
          <span className="font-md color1">{formatCurrency(30)}</span>
        </div>
        <div className="d-flex column margin-right-md">
          <span className="margin-right-sm font-weight-500 font-sm">Warehousing</span>
          <span className="font-md color1">{formatCurrency(25)}</span>
        </div>
        <div className="d-flex column margin-right-md">
          <span className="margin-right-sm font-weight-500 font-sm">Other Costs</span>
          <span className="font-md color1">{formatCurrency(100)}</span>
        </div>
      </div>
    </section>
  )
}

export default FillInvestment;
