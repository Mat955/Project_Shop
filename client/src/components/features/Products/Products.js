import React from 'react';
import { PropTypes } from 'prop-types';
import ProductsList from '../ProductsList/ProductsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import Pagination from '../../common/Pagination/Pagination';


class Products extends React.Component {

  componentDidMount() {
    const { loadProductsByPage, productsPerPage, initialPage } = this.props;
    loadProductsByPage(initialPage || 1, productsPerPage);
  }

  loadProductsPage = (page) => {
    const { loadProductsByPage, productsPerPage } = this.props;
    loadProductsByPage(page, productsPerPage);
  }

  render() {
    let { products, request, pages, presentPage, pagination } = this.props;
    const { loadProductsPage } = this;
    if (pagination === undefined) {
      pagination = true;
    } if (request.pending === false && request.success === true && products.length) {
      return (
        <div>
          <ProductsList products={products} />
          {pagination && <Pagination pages={pages} initialPage={presentPage} onPageChange={loadProductsPage} />}
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
          <Alert variant="error">{request.error}</Alert>
        </div>
      );
    } else if (request.pending === false && request.success === true && products.length === 0) {
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
  loadProductsByPage: PropTypes.func.isRequired,
};

export default Products;