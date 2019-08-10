import { connect } from 'react-redux';
import { getProducts, getRequest, loadProductsRequest, getNumberOfProducts } from '../../../redux/productsRedux';
import Products from './Products';

const mapStateToProps = state => ({
  products: getProducts(state),
  request: getRequest(state),
  numberOfProducts: getNumberOfProducts(state),
});

const mapDispatchToProps = dispatch => ({
  loadProducts: () => dispatch(loadProductsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);