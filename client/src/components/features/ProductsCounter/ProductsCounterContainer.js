import { connect } from 'react-redux';
import { getNumberOfProducts } from '../../../redux/productsRedux';
import ProductsCounter from './ProductsCounter';

const mapStateToProps = state => ({
  products: getNumberOfProducts(state),
})

export default connect(mapStateToProps)(ProductsCounter);
