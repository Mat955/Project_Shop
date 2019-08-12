import { connect } from 'react-redux';
import { getSingleProduct, getRequest, loadSingleProductRequest } from '../../../redux/productsRedux';
import SingleProduct from './SingleProduct';

const mapStateToProps = state => ({
  singleProduct: getSingleProduct(state),
  request: getRequest(state),
});

const mapDispatchToProps = (dispatch, { id }) => ({
  loadSingleProduct: () => dispatch(loadSingleProductRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);