import React from 'react';
import { PropTypes } from 'prop-types';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import SmallTitle from '../../common/SmallTitle/SmallTitle';

class SingleProduct extends React.Component {

  componentDidMount() {
    const { loadProduct } = this.props;
    loadProduct();
  }

  render() {
    const { request, product } = this.props;
    if (request.pending === false && request.success === true && product !== undefined) {
      return (
        <div>
          <article className="product-summary">
            <SmallTitle>{product.title}</SmallTitle>
            <HtmlBox>{product.content}</HtmlBox>
          </article>
        </div>
      );
    } else if (request.pending === true && request.success === null) {
      return (
        <div>
          <Spinner />
        </div>
      );
    } else if (request.pending === false && request.error != null) {
      return (
        <div>
          <Alert variant="error">{request.error}</Alert>
        </div>
      );
    } else if (request.pending === false && request.success === true) {
      return (
        <div>
          <Alert variant="info">0 Products</Alert>
        </div>
      );
    } else if (request.pending === false && request.success === true && product === undefined) {
      return (
        <div>
          <Spinner />
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

SingleProduct.propTypes = {
  product: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
  loadProduct: PropTypes.func.isRequired,
};

export default SingleProduct;