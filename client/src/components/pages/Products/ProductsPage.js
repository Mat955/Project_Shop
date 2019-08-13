import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import ProductsCounter from '../../features/ProductsCounter/ProductsCounterContainer';
import Products from '../../features/Products/ProductsContainer';

const ProductsPage = () => (
  <div>
    <PageTitle>Products List</PageTitle>
    <ProductsCounter />
    <Products pagination={true} productsPerPage={3} initialPage={1} />
  </div>
);

export default ProductsPage;