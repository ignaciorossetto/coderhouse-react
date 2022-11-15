import React, { useEffect, useContext } from "react";
import { useMercadopago } from "react-sdk-mercadopago";
import { Cartcontext } from "../CartContext/CartContext";
// import useScript from './useScript';

function CheckOutProV2() {
  const { cart } = useContext(Cartcontext);


  const mercadopago = useMercadopago.v2(
    "TEST-426d1bf0-e2c8-4b98-bd4b-9f891c7cf31a",
    {
      locale: "es-AR",
    }
  );

  useEffect(() => {
    const mpFetch = async (req, res) => {
      const response = await fetch("/process", {
        method: "POST",
        body: JSON.stringify(cart),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      const preference = data.id;

      console.log(preference);

      if (mercadopago) {
        mercadopago.checkout({
          preference: {
            id: preference,
          },
          render: {
            container: "#contacto__flex",
            label: "Pay",
          },
        });
      }
    };
    mpFetch();
  }, [mercadopago, cart]);

  return (
    <div>
      <button id="contacto__flex">mp</button>
    </div>
  );
}

export default CheckOutProV2;
