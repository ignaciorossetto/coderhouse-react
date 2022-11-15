import React, { useContext } from "react";
import { Cartcontext } from "../../../CartContext/CartContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


const CheckOutCart = () => {
    const {cart, deleteFromCart, totalRender} = useContext(Cartcontext)


  return <div className="d-flex flex-column align-items-center" >
    <h1>Carrito{totalRender}</h1>
    {cart.map((product) => {
    return (
      <Card
        key={product.id}
        style={{
          width: "75%",
          height: "250px",
          display: "flex",
          flexDirection: "row",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            width: "250px",
            height: "100%",
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
  })}</div>;
};

export default CheckOutCart;
