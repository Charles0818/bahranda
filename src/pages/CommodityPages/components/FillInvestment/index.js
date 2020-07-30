import React, { useState, useEffect, useLayoutEffect, useCallback } from 'react';
import { Form, Spinners } from '../../../components';
import { utils } from '../../helpers';
import PaystackPayment from '../PaystackPayment';
const { formatting: { formatCurrency } } = utils;
const { useSectionSpinner } = Spinners;
const { useFormInput, QuantityInput, useRadioInputs } = Form;
const FillInvestment = ({ details, id }) => {
  const {
    price_break_down, price,
    duration, commodity_name,
    profit_percentage, quantity_left_for_deal,
    unit
  } = details;
  const { RadioInputs } = useRadioInputs(duration);
  const { value: qty, handleUserInput: setQty } = useFormInput(1);
  const [priceBreakdown, setPriceBreakdown] = useState(price_break_down);
  const calculateDealCost = useCallback(obj => {
    const newObj = { ...obj }
    for (let key in newObj) {
      if (!isNaN(newObj[key])) {
        newObj[key] *= qty
      };
    }
    setPriceBreakdown(newObj)
  }, [qty]);
  useEffect(() => {
    calculateDealCost(price_break_down);
  }, [qty, calculateDealCost]);
  return (
    <section className="">
      <div className="d-flex justify-content-s-between" style={{width: '100%'}}>
        <div className="d-flex column flex-equal padding-right-md slim-border-right margin-right-md">
          <h2 className="font-md margin-bottom-sm">{commodity_name}</h2>
          <DataRow tag="Price">
            <div className="d-flex font-md color1">
              <p className="font-weight-600 font-sm">{formatCurrency(price)}</p>
              <span className="font-xsm">/{unit}</span>
            </div>
          </DataRow>
          <DataRow tag="Quantity left">
            <span className="font-weight-500 font-sm color1">{quantity_left_for_deal}</span>
          </DataRow>
          <DataRow tag="Quantity">
            <div className="" style={{width: '50px'}}>
              <QuantityInput type="numeric" name="quantity" placeholder="Qty" value={qty} onChange={setQty} max={quantity_left_for_deal} />
            </div>
          </DataRow>
          <DataRow tag="Profit %">
            <span className="font-weight-500 font-sm color1">{profit_percentage}</span>
          </DataRow>
          <div className="d-flex align-items-center justify-content-s-between margin-bottom-sm" style={{width: '100%'}}>
            <span className={`font-sm font-weight-500`}>Duration: </span>
            <RadioInputs options={[{label: duration}]} placeholder="Duration" />
          </div>
        </div>
        <PriceBreakDown priceBreakdown={priceBreakdown} commodityDetails={{id, qty }} />
      </div>
    </section>
  )
}

export const DataRow = ({ children, tag, className="" }) => {
  return (
    <div className="d-flex align-items-center justify-content-s-between margin-bottom-sm" style={{width: '100%'}}>
      <span className={`font-sm font-weight-500 ${className}`}>{tag}: </span>
      <div className="d-flex column">{children}</div>
    </div>
  )
}

const PriceBreakDown = ({ priceBreakdown = {}, commodityDetails }) => {
  const { commodity_cost, expected_return, other_costs, state_tax, total_deal_cost, transportation, warehousing } = priceBreakdown;
  const { isLoading, setIsLoading, LoadingSpinner } = useSectionSpinner();
  useLayoutEffect(() => {
    setIsLoading(true)
    const timeout = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timeout)
  }, [priceBreakdown, setIsLoading]);
  if(isLoading) return (
    <section className="details flex-equal">
      {LoadingSpinner}
    </section>
  )
  return (
      <div className="d-flex column flex-equal fadeIn-animation">
        <DataRow tag="Commodity cost">
          <span className="font-weight-500 font-sm color1">{formatCurrency(commodity_cost)}</span>
        </DataRow>
        <DataRow tag="State tax">
          <span className="font-weight-500 font-sm color1">{formatCurrency(state_tax)}</span>
        </DataRow>
        <DataRow tag="Transportation">
          <span className="font-weight-500 font-sm color1">{formatCurrency(transportation)}</span>
        </DataRow>
        <DataRow tag="Warehousing">
          <span className="font-weight-500 font-sm color1">{formatCurrency(warehousing)}</span>
        </DataRow>
        <DataRow tag="Other costs">
          <span className="font-weight-500 font-sm color1">{formatCurrency(other_costs)}</span>
        </DataRow>
        <div className="d-flex align-items-center justify-content-s-between margin-bottom-sm" style={{width: '100%'}}>
          <span className="uppercase font-weight-600 font-sm">total cost: </span>
          <span className="font-weight-600 font-sm color1">{formatCurrency(total_deal_cost)}</span>
        </div>
        <div className="d-flex align-items-center justify-content-s-between margin-bottom-sm" style={{width: '100%'}}>
          <span className="uppercase font-weight-600 font-sm">expected return: </span>
          <span className="font-weight-600 font-sm color1">{formatCurrency(expected_return)}</span>
        </div>
        <div className="d-flex justify-content-end" style={{width: '100%'}}>
          <PaystackPayment amount={total_deal_cost} commodityDetails={commodityDetails} />
        </div>
      </div>
  )
}

export default FillInvestment;
