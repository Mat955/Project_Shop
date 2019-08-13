import { connect } from 'react-redux';
import { getProducts, getRequest, loadProductsByPageRequest, getPages, getNumberOfProducts, getPresentPage } from '../../../redux/productsRedux';
import Products from './Products';

const mapStateToProps = state => ({
  products: getProducts(state),
  request: getRequest(state),
  numberOfProducts: getNumberOfProducts(state),
  pages: getPages(state),
  presentPage: getPresentPage(state)
});

const mapDispatchToProps = dispatch => ({
  loadProductsByPage: (page, productsPerPage) => dispatch(loadProductsByPageRequest(page, productsPerPage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);