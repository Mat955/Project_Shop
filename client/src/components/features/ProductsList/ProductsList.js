import React from 'react';
import { PropTypes } from 'prop-types';
import ProductSummary from '../ProductSummary/ProductSummary';
import { Container } from 'reactstrap';

const ProductsList = ({ products }) => (
  <Container className="products-list">
    {products.map(product => <ProductSummary key={product.id}{...product} />)}
  </Container>
);

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ),
};

export default ProductsList;