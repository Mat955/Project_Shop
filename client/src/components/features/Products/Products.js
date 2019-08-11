import React from 'react';
import { PropTypes } from 'prop-types';
import ProductsList from '../ProductsList/ProductsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';

class Products extends React.Component {

  componentDidMount() {
    const { loadProducts, resetRequestStatus } = this.props;
    resetRequestStatus();
    loadProducts();
  }

  render() {
    const { products, request, numberOfProducts } = this.props;
    if (request.pending === false && request.success === true && numberOfProducts > 0) {
      return (
        <div>
          <ProductsList products={products} />
        </div>
      );
    } else if (request.pending === true && request.success === null) {
      return (
        <div>
          <Spinner />
        </div>
      );
    } else if (request.pending === false && request.error !== null) {
      return (
        <div>
          <Alert variant="error">{request.error})</Alert>
        </div>
      );
    } else if (request.pending === false && request.success === true && numberOfProducts === 0) {
      return (
        <div>
          <Alert variant="info">0 products</Alert>
        </div>
      );
    } else {
      return (
        <div>
          <Alert variant="info">Something went wrong....</Alert>
        </div>
      );
    }
  }
};

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired
    })
  ),
  loadProducts: PropTypes.func.isRequired,
};

export default Products;