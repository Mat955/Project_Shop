import { connect } from 'react-redux';
import { getSingleProduct, getRequest, loadSingleProductRequest, resetRequest, getProducts } from '../../../redux/productsRedux';
import SingleProduct from './SingleProduct';

const mapStateToProps = (state) => ({
  products: getProducts(state),
  singleProduct: getSingleProduct(state),
  request: getRequest(state),
});

const mapDispatchToProps = (dispatch, { id }) => ({
  loadSingleProduct: () => dispatch(loadSingleProductRequest(id)),
  resetRequestStatus: () => dispatch(resetRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);