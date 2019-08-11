// import React from 'react';
// import { PropTypes } from 'prop-types';
// import Spinner from '../../common/Spinner/Spinner';

// import Alert from '../../common/Alert/Alert';
// import HtmlBox from '../../common/HtmlBox/HtmlBox';
// import SmallTitle from '../../common/SmallTitle/SmallTitle';

// class SingleProduct extends React.Component {

//   componentDidMount() {
//     const { loadSingleProduct, id, resetRequestStatus } = this.props;
//     loadSingleProduct();
//     resetRequestStatus(id);
//   }

//   render() {
//     const { singleProduct, request } = this.props;
//     if (request.pending === false && request.success === true && singleProduct) {
//       return (
//         <div>
//           <article className="product-summary">
//             <SmallTitle>{singleProduct.title}</SmallTitle>
//             <p>Author:{singleProduct.photo}</p>
//             <HtmlBox>{singleProduct.content}</HtmlBox>
//           </article>
//         </div>
//       );
//     } else if (request.pending === true && request.success === null) {
//       return (
//         <div>
//           <Spinner />
//         </div>
//       );
//     } else if (request.pending === false && request.error !== null) {
//       return (
//         <div>
//           <Alert variant="error">{request.error}</Alert>
//         </div>
//       );
//     } else if (request.pending === false && request.success === true && singleProduct === null) {
//       return (
//         <div>
//           <Alert variant="info">No Products</Alert>
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <Alert variant="info">Something went wrong....</Alert>
//         </div>
//       );
//     }
//   }
// };

// SingleProduct.propTypes = {
//   singleProduct: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       photo: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       content: PropTypes.string.isRequired,
//     })
//   ),
//   loadSingleProduct: PropTypes.func.isRequired,
// };

// export default SingleProduct;

import React from 'react';
import { PropTypes } from 'prop-types';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import '../ProductSummary/ProductSummary.scss'

class SingleProduct extends React.Component {

  componentDidMount() {
    const { loadSingleProduct, id, resetRequestStatus } = this.props;
    loadSingleProduct();
    resetRequestStatus(id);
  }

  render() {
    const { request, singleProduct, } = this.props;
    if (request.pending === false && request.success === true && singleProduct) {
      return (
        <div>
          <article className="product-summary">
            <SmallTitle>{singleProduct.title}</SmallTitle>
            <p>Author: {singleProduct.photo}</p>
            <HtmlBox>{singleProduct.content}</HtmlBox>
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
    } else if (request.pending === false && request.success === true && singleProduct === null) {
      return (
        <div>
          <Alert variant="info">No posts</Alert>
        </div>
      );
    } else {
      return (
        <div>
          <Alert variant="info">Something went wrong...</Alert>
        </div>
      );
    }
  }
};

SingleProduct.propTypes = {
  singleProduct: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
  loadSingleProduct: PropTypes.func.isRequired,
};

export default SingleProduct;