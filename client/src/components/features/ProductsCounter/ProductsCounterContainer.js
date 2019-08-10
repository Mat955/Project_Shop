import { connect } from 'react-redux';
import { getProducts, getNumberOfProducts, loadProductsRequest } from '../../../redux/productsRedux';
import ProductsCounter from './ProductsCounter';

const mapStateToProps = state => ({
  products: getProducts(state),
  numberOfProducts: getNumberOfProducts(state),
})

const mapDispatchToProps = dispatch => ({
  loadProducts: () => dispatch(loadProductsRequest()),

});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsCounter);
