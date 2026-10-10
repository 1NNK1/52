import React from 'react';
import ProductList from '../features/products/components/ProductList';

const HomePage = () => {
  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Каталог товаров</h2>
      <ProductList />
    </div>
  );
};

export default HomePage;
