import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

const Success = ({ info }) => {


  return (
    <>
      <h1>Felicitaciones! Tu compra ha sido aprobada!</h1>
      <h2 className="mt-2">Numero de orden: {info.docID}</h2>
      <div className="d-flex flex-column align-items-start mt-5">
        <p>
          Te enviaremos el comprobante de pago, junto con el resumen de tu
          compra a: {info.shippingInfo === undefined ? 'Loading...' : info.shippingInfo.email}
        </p>
        <p>No olvides revisar el correo no deseado/spam.</p>
        <p>
          Si elegiste envio a domicilio, te enviaremos al mail el numero de
          tracking pronto.
        </p>
        <p>
          De no recibir el email de confirmacion de compra comunicate a al whatsapp que
          se encuentra en nuestra seccion de
        </p>
        <Link to="/" className="mt-3">
          <Button>Volver a Home</Button>
        </Link>
      </div>
    </>
  );
};

export default Success;
