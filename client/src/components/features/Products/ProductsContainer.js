import { connect } from 'react-redux';
import { getProducts, getRequest, loadProductsRequest, getNumberOfProducts, resetRequest } from '../../../redux/productsRedux';
import Products from './Products';

const mapStateToProps = state => ({
  products: getProducts(state),
  request: getRequest(state),
  numberOfProducts: getNumberOfProducts(state),
});

const mapDispatchToProps = dispatch => ({
  loadProducts: () => dispatch(loadProductsRequest()),
  resetRequestStatus: () => dispatch(resetRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);