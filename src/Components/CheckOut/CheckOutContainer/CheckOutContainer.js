import { avatarClasses } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Cartcontext } from "../../CartContext/CartContext";
import CheckOutCart from "./CheckOutCart/CheckOutCart";
import "./CheckOutContainer.css";
import ShippingInfo from "./ShippingInfo/ShippingInfo";

const CheckOutContainer = () => {
  return (
    <div className="d-flex" style={{ width: "100%" }}>
      <div style={{ width: "50%" }}>
        <ShippingInfo />
      </div>
      <div style={{ width: "40%" }}>
        <CheckOutCart />
      </div>
    </div>
  );
};

export default CheckOutContainer;
