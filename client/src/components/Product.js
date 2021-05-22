import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
  const { _id, name, image, rating, numReviews, price } = product;

  return (
    <Card className="my-3 p-1 text-center">
      <Link to={`/product/${_id}`}>
        <Card.Img src={image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/product/${_id}`}>
          <Card.Title as="div">
            <strong>{name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating value={rating} text={`${numReviews} reviews`} />
        </Card.Text>

        <Card.Text as="h3" className="justify-content-end">
          ${price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
