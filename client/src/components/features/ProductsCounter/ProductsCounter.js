import React from 'react';

class ProductsCounter extends React.Component {

  componentDidMount() {
    const { loadProducts } = this.props;
    loadProducts();
  }

  render() {
    const { numberOfProducts } = this.props;

    return (
      <div>
        <h2>
          {numberOfProducts > 0 ? 'Products amount: ' + numberOfProducts : '0 Products'}
        </h2>
      </div>
    );
  }
};

export default ProductsCounter;