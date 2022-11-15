import React, { useContext } from "react"
import { Cartcontext } from "../../CartContext/CartContext";
import Card from 'react-bootstrap/Card'

const CartDetail = () => {
    const {totalRender, cartAndClientInfo} = useContext(Cartcontext)
  return (
    <div>
      <h1 style={{ marginLeft: "25px" }}>Detalle de compra</h1>
      {totalRender}
      {cartAndClientInfo.shopCart.map((product) => {
        return (
          <Card
            key={product.id}
            style={{
              width: "334px",
              height: "fit-content",
              display: "flex",
              flexDirection: "row",
              marginBottom: "20px",
              marginLeft: "25px",
            }}
          >
            <div
              style={{
                width: "auto",
                height: "auto",
              }}
            >
              <Card.Img
                variant="top"
                src={`${product.image}`}
                style={{
                  width: "100px",
                  height: "auto",
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
              <Card.Text>Cantidad: {product.amount}</Card.Text>
              <Card.Text>
                Total: ${(product.amount * product.price).toLocaleString()}
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default CartDetail;
