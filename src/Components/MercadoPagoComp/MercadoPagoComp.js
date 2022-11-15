import React, { useContext } from "react";
import { Cartcontext } from "../CartContext/CartContext";
// SDK de Mercado Pago
const mercadopago = require("mercadopago");

const MercadoPagoComp = () => {

    const { cart } = useContext(Cartcontext);
  // Agrega credenciales
  mercadopago.configure({
    access_token:
      "TEST-3317053809826160-071915-6c1a6fcf587217ab83196cec3ec19117-65474109",
  });

  // Crea un objeto de preferencia
  let preference = {
    items: [
      {
        title: "Mi producto",
        unit_price: 100,
        quantity: 1,
      },
    ],
  };

  mercadopago.preferences
    .create(preference)
    .then( (response)=> {
      // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <div>
      <button>Pagar</button>
    </div>
  );
};

export default MercadoPagoComp;
