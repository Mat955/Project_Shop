import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import ProductsCounter from '../../features/ProductsCounter/ProductsCounter';
import Products from '../../features/Products/ProductsContainer';

const ProductsPage = () => (
  <div>
    <PageTitle>Products List</PageTitle>
    <ProductsCounter />
    <Products />
  </div>
);

export default ProductsPage;