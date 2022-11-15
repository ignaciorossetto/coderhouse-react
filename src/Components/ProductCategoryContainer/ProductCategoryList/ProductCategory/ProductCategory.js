import React from "react";
import Card from "react-bootstrap/Card";
import "./ProductCategory.css";
import { Link } from "react-router-dom";

function ProductCategory({ item }) {


  return (
    <Card className="mb-4 gridCard">
      <Link to={`/products/${item.id}`}>
        <Card.Img
          className="itemImage"
          variant="top"
          src={`${item.image}`}
        />
      </Link>
      <Card.Body>
        <Card.Title className="gridCardTitle">{item.name}</Card.Title>
        <Card.Text className="my-2">{item.size}</Card.Text>
        <Card.Text className="cardPrice" as='h4'>Precio: ${item.price.toLocaleString()}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductCategory;
