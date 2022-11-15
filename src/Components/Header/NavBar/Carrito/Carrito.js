import React, { useContext, useState } from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./Carrito.css";
import { Cartcontext } from "../../../CartContext/CartContext";
import CartModal from "../../../CartModal/CartModal";

function Carrito() {
  const { quantity } = useContext(Cartcontext);



  return (
    <div id="carritoAnchor">
      <a href="#">
          <CartModal/>
      </a>
      <p className="carritoCount">{quantity}</p>
    </div>
  );
}

export default Carrito;
