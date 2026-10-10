import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { fetchProducts } from '../model/productsSlice';
import { addToCart } from '../../cart/model/cartSlice';

const ProductList = () => {
  const dispatch = useAppDispatch();
  const { items, status, error } = useAppSelector(state => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <div style={styles.center}>Загрузка товаров...</div>;
  if (status === 'failed') return <div style={styles.center}>Ошибка: {error}</div>;

  return (
    <div style={styles.grid}>
      {items.map(product => (
        <div key={product.id} style={styles.card}>
          <img src={product.image} alt={product.name} style={styles.image} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <div style={styles.priceRow}>
            <span style={styles.price}>${product.price}</span>
            <button
              onClick={() => dispatch(addToCart(product))}
              style={styles.addBtn}
            >
              Добавить
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    padding: '20px'
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    textAlign: 'center',
    backgroundColor: 'white',
  },
  image: { width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px' },
  priceRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10px'
  },
  price: { fontSize: '1.2rem', fontWeight: 'bold' },
  addBtn: {
    padding: '0.5rem 1rem',
    backgroundColor: '#ddd',
    border: '1px solid #444',
    borderRadius: '3px',
    cursor: 'pointer'
  },
  center: { textAlign: 'center', marginTop: '50px', fontSize: '1.2rem' }
};

export default ProductList;
