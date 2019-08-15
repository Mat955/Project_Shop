import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import ScrollAnimation from 'react-animate-on-scroll';
import { Container, Row, Col } from 'reactstrap';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import './ProductSummary.scss'

const ProductSummary = ({ id, photo, title, price }) => (
  <Container className="product-summary">
    <ScrollAnimation animateIn="fadeIn" delay={300}>
      <Row>
        <Col lg={8}>
          <div className="product-summary-container">
            <img src={require(`../../../images/${photo}`)} alt="" />
            <SmallTitle>{title}</SmallTitle>
            <p className="product-price">Price: {price}$</p>
            <Button variant="primary"><Link to={`/products/${id}`}>More Information</Link></Button>
          </div>
        </Col>
      </Row>
    </ScrollAnimation>
  </Container>
);

ProductSummary.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  photo: PropTypes.string,
  price: PropTypes.number,
};

export default ProductSummary;