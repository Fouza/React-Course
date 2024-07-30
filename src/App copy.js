import logo from './logo.svg';
import './App.css';
import TextComp from './components/TextComp';
import InputComp, { AnotherComp, TestComp } from './components/InputComp';
import { useEffect, useState } from 'react';
import { PRODUCTS } from './data';
import Product from './components/Product/Product';

function App() {
  const [panier, setPanier] = useState([])

  const addToCart = (obj) => {
    if (obj.stocked) {
      setPanier([...panier, obj])
    } else {
      alert("Product Sold Out")
    }
  }

  const removeFromCard = (name) => {
    setPanier(prev => {
      const index = prev.findIndex(el => el.name === name)
      prev.splice(index, 1)
      return [...prev]
    })
  }

  return (
    <div className='container'>
      {/* {PRODUCTS.map(item =>
        <Product key={item.name} name={item.name} price={item.price} stock={item.stocked}
          handleAdd={(name) => addToCart(name)} />
      )} */}
      {PRODUCTS.map(item =>
        <Product key={item.name} name={item.name} price={item.price} stock={item.stocked}
          handleAdd={() => addToCart(item)} />
      )}
      <hr />
      <h2>Panier</h2>
      {panier.map(item =>
        <div key={item.name}>
          <p>{item.name}</p>
          <button onClick={() => removeFromCard(item.name)}>DELETE</button>
        </div>
      )}
    </div>
  );
}

export default App;