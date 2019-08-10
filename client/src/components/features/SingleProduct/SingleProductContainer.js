import { connect } from 'react-redux';
import { getProducts, getProduct, getRequest, loadProductRequest } from '../../../redux/productsRedux';
import SingleProduct from './SingleProduct';

const mapStateToProps = (state) => ({
  product: getProduct(state),
  products: getProducts(state),
  request: getRequest(state),
});

const mapDispatchToProps = (dispatch, { id }) => ({
  loadProduct: () => dispatch(loadProductRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);