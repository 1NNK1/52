import React from 'react';
import { useAppSelector } from '../app/hooks';
import CartItem from '../features/cart/components/CartItem';

const CartPage = () => {
  const cartItems = useAppSelector(state => state.cart.items);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={styles.container}>
      <h2 style={{ textAlign: 'center' }}>Ваша корзина</h2>
      {cartItems.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Корзина пуста</p>
      ) : (
        <>
          <div style={styles.list}>
            {cartItems.map(item => <CartItem key={item.id} item={item} />)}
          </div>
          <div style={styles.total}>
            <h3>Итого: ${total}</h3>
            <button style={styles.checkoutBtn}>Оформить заказ</button>
          </div>
        </>
      )}
    </div>
  );
};

const styles = {
  container: { maxWidth: '800px', margin: '0 auto', padding: '20px' },
  list: { display: 'flex', flexDirection: 'column', gap: '10px' },
  total: { textAlign: 'right', marginTop: '20px', padding: '20px', borderTop: '2px solid #ddd' },
  checkoutBtn: {
    padding: '10px 20px',
    backgroundColor: '#444',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem'
  }
};

export default CartPage;
