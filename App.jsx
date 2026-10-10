import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <Provider store={store}>
      <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
        <Header onNavigate={setCurrentPage} />
        <main>
          {currentPage === 'home' ? <HomePage /> : <CartPage />}
        </main>
      </div>
    </Provider>
  );
}

export default App;
