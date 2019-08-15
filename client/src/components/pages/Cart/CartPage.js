import React from "react";
import { Container, Row, Col } from "reactstrap";

const EmptyCartPage = () => (
  <Container className="cart-empty-container">
    <Row className="cart-empty-row">
      <Col className="cart-empty-col">
        <h1 className="cart-empty-heading">Your cart is empty!</h1>
      </Col>
    </Row>
  </Container>
);

export default EmptyCartPage;