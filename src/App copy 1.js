import { Fragment, useState } from 'react';
import './App.css';
import Product from './components/Product/Product';
import { PRODUCTS } from './data';

function App() {

  const [panier, setPanier] = useState([])
  const [display, setDisplay] = useState(false)

  const addToCart = (obj) => {
    if (obj.stocked) {
      if (panier.some(el => el.name === obj.name)) {
        alert('Already added !')
      } else {
        setPanier([...panier, obj])
      }
    } else {
      alert('The product is not available')
    }
  }

  const removeFromCart = (name) => {
    //   const v = [...panier]
    //   //splice(start, 1)
    //   const index = v.findIndex(el => el.name === name)
    //   v.splice(index, 1)
    //   setPanier(v)
    setPanier((prev) => {
      const index = prev.findIndex(el => el.name === name)
      let v = [...prev]
      v.splice(index, 1)
      return v
    })
  }

  const switchDisplay = () => {
    setDisplay((x) => {
      return !x
    })
  }

  console.log(panier)

  return (
    <div className='container'>
      <div className='products'>
        {PRODUCTS.map(item => <Product key={item.name} name={item.name} price={item.price} stocked={item.stocked} handleAdd={() => addToCart(item)} />)}
      </div>
      {/* {PRODUCTS.map(item => <Product name={item.name} price={item.price} stocked={item.stocked} handleAdd={(name) => addToCart(name)} />)} */}


      <div className='panier'>
        <h2>Panier</h2>
        {panier.map(item =>
          <div key={item.name} className='panier_product'>
            <p >{item.name}</p>
            <button onClick={() => removeFromCart(item.name)}>DELETE</button>
          </div>
        )}

      </div>
    </div>
  )
}

export default App;