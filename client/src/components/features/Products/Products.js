import React from 'react';
import { PropTypes } from 'prop-types';
import ProductsList from '../ProductsList/ProductsList';
import Spinner from '../../common/Spinner/Spinner';

class Products extends React.Component {

  componentDidMount() {
    const { loadProducts } = this.props;
    loadProducts();
  }

  render() {
    const { products, request } = this.props;

    return (
      <div>
        <ProductsList products={products} />
        {request.pending && <Spinner />}
      </div>
    );
  }
};

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
  loadProducts: PropTypes.func.isRequired,
};

export default Products;