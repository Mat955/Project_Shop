import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class ProductsCounter extends Component {

  render() {
    const { products } = this.props;

    if (products) {
      return (
        <div>
          <h2>Products Amount: {products}</h2>
        </div>
      )
    } else {
      return (
        <div>
          <p>Waiting for data....</p>
        </div>
      )
    }
  }
};

ProductsCounter.propTypes = {
  products: PropTypes.number,
};

export default ProductsCounter;