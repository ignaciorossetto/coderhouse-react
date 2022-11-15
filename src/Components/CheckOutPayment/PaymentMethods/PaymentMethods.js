import Accordion from "react-bootstrap/Accordion";
import { Cartcontext } from "../../CartContext/CartContext";
import React, { useState, useContext, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../../../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import { Button } from "react-bootstrap";

function PaymentMethods() {
  const { isChecked, cart, cartAndClientInfo } = useContext(Cartcontext);
  const [preference_id, setPreference_id] = useState();

  useEffect(() => {

    const mpFetch = async (req, res) => {

      const response = await fetch("/api", {
        method: "POST",
        body: JSON.stringify(cart),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      const preference = data.id;
      setPreference_id(preference);

      var script = document.createElement("script");
      script.src =
        "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
      script.type = "text/javascript";
      script.dataset.preferenceId = preference;


      document.getElementById("contacto__flex").innerHTML = "";
      document.querySelector("#contacto__flex").appendChild(script);
    };
    mpFetch();
  }, [cart]);

  const handleMpClick = async () => {
    try {
      const object = {
        ...cartAndClientInfo,
        paymentInfo: {
          OrderId: preference_id,
          Payment: "PENDIENTE DE RESPUESTA MERCADOPAGO",
          Status: "",
          MerchantOrder: "",
        },
      };

      const docRef = await addDoc(collection(db, "ventas"), object);
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    if (isChecked === true) {
      toast.success("Felicitaciones por tu compra!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    if (isChecked === false) {
      toast.warn("Debes seleccionar un metodo de pago", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>Forma de pago</h1>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Mercado Pago!</Accordion.Header>
          <Accordion.Body>
              <div id="contacto__flex" onClick={handleClick}></div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" style={{ width: "398px" }}>
          <Accordion.Header>Transferencia bancaria</Accordion.Header>
          <Accordion.Body>
            <p>Te llegaran los datos de la cuenta bancaria al e-mail</p>
            <Button
              onClick={() => {
                handleClick();
                handleMpClick();
              }}
            >
              Confirmar compra!
            </Button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <ToastContainer />
    </div>
  );
}

export default PaymentMethods;
