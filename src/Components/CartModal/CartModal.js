import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./CartModal.css";
import { Cartcontext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";

function CartModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { cart, deleteCart, deleteFromCart, calculateTotal, totalRender } =
    useContext(Cartcontext);

  return (
    <>
      <Button variant="primary" className="shopCart" onClick={handleShow}>
        <ShoppingBasketIcon />
      </Button>

      <Modal show={show} onHide={handleClose} style={{ width: "100%" }}>
        <Modal.Header closeButton>
          <Modal.Title>Carrito!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.map((product) => {
            return (
              <Card
                key={product.id}
                style={{
                  width: "100%",
                  height: "250px",
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "250px",
                    height: "240px",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={`${product.image}`}
                    style={{
                      width: "auto",
                      height: "100%",
                    }}
                  />
                </div>
                <Card.Body
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text></Card.Text>
                  <Card.Text>
                    Precio unitario: ${product.price.toLocaleString()}
                  </Card.Text>
                  <Card.Text>Cantidad: {product.amount}</Card.Text>
                  <Card.Text>
                    Total {product.name}: $
                    {(product.amount * product.price).toLocaleString()}
                  </Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => deleteFromCart(product.id)}
                  >
                    Eliminar item
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </Modal.Body>
        <Modal.Body>{totalRender}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Link to='/checkout'>
            <Button variant="primary" onClick={handleClose} >Pagar!</Button>
          </Link>
          <Button variant="primary" onClick={deleteCart}>
            Borrar Carrito!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CartModal;
