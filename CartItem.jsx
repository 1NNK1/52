import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { removeFromCart, updateQuantity } from '../model/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useAppDispatch();

  return (
    <div style={styles.item}>
      <div style={styles.info}>
        <h4>{item.name}</h4>
        <p>${item.price} x {item.quantity}</p>
      </div>
      <div style={styles.controls}>
        <button onClick={() => dispatch(updateQuantity({id: item.id, quantity: Math.max(1, item.quantity - 1)}))}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => dispatch(updateQuantity({id: item.id, quantity: item.quantity + 1}))}>+</button>
        <button onClick={() => dispatch(removeFromCart(item.id))} style={styles.removeBtn}>Удалить</button>
      </div>
    </div>
  );
};

const styles = {
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #eee',
    backgroundColor: 'white',
    marginBottom: '10px',
    borderRadius: '4px'
  },
  info: { display: 'flex', flexDirection: 'column' },
  controls: { display: 'flex', alignItems: 'center', gap: '10px' },
  removeBtn: { backgroundColor: '#444', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '4px' }
};

export default CartItem;
