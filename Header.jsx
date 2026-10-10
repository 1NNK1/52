import React from 'react';
import { useAppSelector } from '../app/hooks';

const Header = ({ onNavigate }) => {
  const cartItems = useAppSelector(state => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header style={styles.header}>
      <h1 onClick={() => onNavigate('home')} style={styles.logo}>MyStore</h1>
      <nav>
        <button onClick={() => onNavigate('home')} style={styles.navBtn}>Каталог</button>
        <button onClick={() => onNavigate('cart')} style={styles.navBtn}>
          Корзина <span>({totalItems})</span>
        </button>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 2rem',
    backgroundColor: '#444',
    color: 'white',
    height: '60px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
  },
  logo: { cursor: 'pointer', fontSize: '1.5rem' },
  navBtn: {
    marginLeft: '1rem',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    backgroundColor: '#ddd',
    border: 'none',
    borderRadius: '4px',
    fontWeight: 'bold'
  }
};

export default Header;
