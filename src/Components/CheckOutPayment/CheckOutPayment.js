import React from "react";
import "./CheckOutPayment.css";
import PaymentMethods from "./PaymentMethods/PaymentMethods";
import CartDetail from "./CartDetail/CartDetail";
import ShippingMethod from "./ShippingMethod/ShippingMethod";

const CheckOutPayment = () => {

  return (
    <div className="d-flex flex-row justify-content-around checkoutcontainer">
      <CartDetail/>
      <div className="d-flex flex-column">
          <ShippingMethod/>
          <PaymentMethods/>
      </div>
    </div>
  );
};

export default CheckOutPayment;
