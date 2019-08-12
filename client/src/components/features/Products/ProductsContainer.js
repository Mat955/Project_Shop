import { connect } from 'react-redux';
import { getProducts, getRequest, getPages, loadProductsByPageRequest, getNumberOfProducts } from '../../../redux/productsRedux';
import Products from './Products';

const mapStateToProps = state => ({
  products: getProducts(state),
  request: getRequest(state),
  numberOfProducts: getNumberOfProducts(state),
  pages: getPages(state),
});

const mapDispatchToProps = dispatch => ({
  loadProductsByPage: (page) => dispatch(loadProductsByPageRequest(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);