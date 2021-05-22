import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";

const ProductPage = ({ match }) => {
  const product = products.find((product) => product._id === match.params.id);

  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={6} className="d-flex">
          <ListGroup variant="flush" className="flex-column">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>
                  <strong>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col>
                  <strong>${product.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="mt-auto">
              <Button
                className="btn-block"
                type="button"
                disabled={product.countInStock === 0}
              >
                ADD TO CART
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductPage;