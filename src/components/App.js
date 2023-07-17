import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Footer from './Footer';
import Modal from './Modal';

function App() {
  const storedCart = JSON.parse(localStorage.getItem('cart'));
  const storedIsOpen = JSON.parse(localStorage.getItem('isOpen'));
  const [cart, updateCart] = useState(storedCart ? storedCart : []);
  const [isOpen, setIsOpen] = useState(storedIsOpen ? storedIsOpen : false);
  const [modalData, setModalData] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  },[cart]);
  
  useEffect(() => {
    localStorage.setItem('isOpen', JSON.stringify(isOpen));
  },[isOpen]);

  return (
    <React.Fragment>
      <Banner />

      <main className='lmj-main'>
        <Cart
          cart={cart}
          updateCart={updateCart}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <ShoppingList
          cart={cart}
          updateCart={updateCart}
          setIsOpen={setIsOpen}
          setModalData={setModalData}
          setModalIsOpen={setModalIsOpen}
        />
      </main>

      <Footer />

      <Modal 
        modalData={modalData}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
    </React.Fragment>
  );
}

export default App;
