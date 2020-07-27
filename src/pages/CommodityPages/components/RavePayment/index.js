import React, { Component } from "react";
import { useRavePayment } from "react-ravepayment";

const config = {
  txref: "rave-123456",
  customer_email: "user@example.com",
  customer_phone: "234099940409",
  amount: 2000,
  PBFPubKey: "FLWPUBK-XXXXXXXXXXXXXXXXXXXXXXXXXX-X",
  production: false,
};

const Ravepayment = () => {
const { initializePayment } = useRavePayment(config);
return (
  <div>
    <button onClick={() => initializePayment()}>Pay 2000</button>
  </div>
);
};