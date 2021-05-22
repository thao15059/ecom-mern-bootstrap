import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            ECOM MERN Copyright &copy; All Right Reversed
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
