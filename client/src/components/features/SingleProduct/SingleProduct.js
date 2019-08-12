import React from 'react';
import { PropTypes } from 'prop-types';
import PageTitle from '../../common/PageTitle/PageTitle';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import HtmlBox from '../../common/HtmlBox/HtmlBox';

class SingleProduct extends React.Component {

  componentDidMount() {
    const { loadSingleProduct } = this.props;
    loadSingleProduct();
  }

  render() {
    const { singleProduct, request } = this.props;
    if (!request.pending && !!request.success && singleProduct) {
      return (
        <div>
          <article className="product-summary">
            <PageTitle>{singleProduct.title}</PageTitle>
            <img src={singleProduct.photo} alt="" />
            <HtmlBox>{singleProduct.content}</HtmlBox>
          </article>
        </div>
      );
    } else if (request.pending || !!request.success) {
      return (
        <div>
          <Spinner />
        </div>
      );
    } else if (!request.pending && request.error !== null) {
      return (
        <div>
          <Alert variant="error">{request.error}</Alert>
        </div>
      );
    } else if (!request.pending && request.success && !singleProduct) {
      return (
        <div>
          <Alert variant="info">No Products</Alert>
        </div>
      );
    } else {
      return (
        <div>
          <Alert variant="info">Something wrong...</Alert>
        </div>
      );
    }
  }
};

SingleProduct.propTypes = {
  singleProduct: PropTypes.shape({
    id: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
  loadSingleProduct: PropTypes.func.isRequired,
};

export default SingleProduct;