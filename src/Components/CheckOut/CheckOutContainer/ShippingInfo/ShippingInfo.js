import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Cartcontext } from "../../../CartContext/CartContext";
import { useNavigate  } from "react-router-dom";

const ShippingInfo = () => {
  const navigate = useNavigate();
  const { cart, setCartAndClientInfo } = useContext(Cartcontext);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
      return;
    }
    updateSaleInfo(event);
    setValidated(true);
    navigate('/checkout/payment')
  };


  const updateSaleInfo = (event) => {
    let aa = {};
    const form = event.target;
    for (let index = 0; index < form.length; index++) {
      const element = form[index];
      if (element.tagName === "INPUT") {
        aa = { ...aa, [element.placeholder]: element.value };
      }
    }
    setCartAndClientInfo({ shippingInfo :{...aa}, shopCart: cart });
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className="shippingForm"
      style={{ width: "100%" }}
    >
      <Form.Label as={"h1"} style={{ textAlign: "center" }}>
        Datos de Envio
      </Form.Label>
      <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="validationCustom01">
          <Form.Label>Nombre</Form.Label>
          <Form.Control required type="text" placeholder="Nombre" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          as={Col}
          md="3"
          controlId="validationCustom02"
        >
          <Form.Label>Apellido</Form.Label>
          <Form.Control required type="text" placeholder="Apellido" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustomUsername">
          <Form.Label>E-mail</Form.Label>

          <InputGroup hasValidation>
            <Form.Control
              type="email"
              placeholder="email"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Direccion</Form.Label>
          <Form.Control type="text" placeholder="Direccion" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid E-mail.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="validationCustom04">
          <Form.Label>Provincia</Form.Label>
          <Form.Control type="text" placeholder="Provincia" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="validationCustom05">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control type="text" placeholder="Ciudad" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="validationCustom06">
          <Form.Label>Codigo Postal</Form.Label>
          <Form.Control type="number" placeholder="Codigo Postal" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
        <Button type="submit">Realizar Pago</Button>
    </Form>
  );
};

export default ShippingInfo;
