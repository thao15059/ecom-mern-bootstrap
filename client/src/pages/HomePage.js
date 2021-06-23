import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";

import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";

import { listProduct } from "../actions/productActions";

const HomePage = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);

  return (
    <>
      <Container>
        <h1>Latest Products</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Row>
            {products.map((product) => (
              <Col
                sm={12}
                md={6}
                lg={4}
                xl={3}
                className="d-flex align-items-stretch"
                key={product._id}
              >
                <Product product={product} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default HomePage;
